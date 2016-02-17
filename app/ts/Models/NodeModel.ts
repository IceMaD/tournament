import {TeamModel} from "./TeamModel";
import {IdService} from "../Services/IdService";
import {TeamHolderService} from "../Services/TeamHolderService";

export class NodeModel {

  private _id: number;
  public last: boolean = false;
  public status: string;
  public highlighted: boolean;

  constructor(
    public name: string,
    public children?: NodeModel[],
    public team?: TeamModel
  ) {
    this._id = IdService.getUniqueId();
  }

  addChild(child: NodeModel) {
    this.children.push(child)
  }

  get id():number {
    return this._id;
  }

  win() {
    if (!(this.team instanceof TeamModel)) {
      return;
    }

    TeamHolderService.win(this);
  }

  traverseToParentOf(node: NodeModel): NodeModel|boolean {

    for (let i = 0; i < this.children.length; i++) {
      let child:NodeModel = this.children[i];

      if (child.id === node.id) {
        return this;
      }

      let matchInChild = child.traverseToParentOf(node);

      if (matchInChild) {
        return matchInChild;
      }
    }

    return false;
  }

  allChildrenHaveTeam():boolean {
    let allChildrenHaveTeam: boolean = true;

    for (let i = 0; i < this.children.length; i++) {
      let child:NodeModel = this.children[i];

      if (!child.team) {
        allChildrenHaveTeam = false;
      }
    }

    return allChildrenHaveTeam;
  }

  setWinTeam(team: TeamModel): void {
    this.team = team;

    for (let i = 0; i < this.children.length; i++) {
      let child:NodeModel = this.children[i];

      child.status = child.team.name === team.name ? 'won' : 'lost';
    }
  }
}
