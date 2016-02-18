import {TeamModel} from "./TeamModel";
import {IdService} from "../Services/IdService";
import {TeamHolderService} from "../Services/TeamHolderService";

export class NodeModel {

  private _id: number;
  public last: boolean = false;
  public status: string;
  public highlighted: boolean;
  public name: string;
  public children: NodeModel[]= [];
  public team: TeamModel;

  constructor() {
    this._id = IdService.getUniqueId();
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

  setTeam(team: TeamModel): this {
    this.team = team;

    return this;
  }

  addChild(node: NodeModel): this {
    this.children.push(node);

    return this;
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
