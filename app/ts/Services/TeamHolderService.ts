import {TeamModel} from "../Models/TeamModel";
import {NodeModel} from "../Models/NodeModel";
import {TreeManager} from "./TreeManager";

export class TeamHolderService {

  /* @TODO remove */
  private static _teamList: TeamModel[] = [
    new TeamModel('Coconuts'),
    new TeamModel('Ananas'),
    new TeamModel('Watermelons'),
    new TeamModel('Kitties'),
    new TeamModel('Bananas'),
    new TeamModel('Puppies'),
    new TeamModel('Birds'),
    new TeamModel('Monkeys'),
  ];

  private static _tree: NodeModel;

  static get teams():TeamModel[] {
    return this._teamList;
  }

  static get tree():NodeModel {
    if (!(this._tree instanceof NodeModel)) {
      this._tree = TreeManager.buildTree(this._teamList);
    }

    return this._tree;
  }

  static addTeam(name: string): TeamHolderService {
    this._teamList.push(new TeamModel(name));

    return TeamHolderService;
  }

  static isFilled(): boolean {
    let l = this._teamList.length;

    // Is power of 2
    return l && (l & (l - 1)) === 0;
  }

  static removeTeam(team: TeamModel): TeamHolderService {

    for (let i:number = 0; i < this._teamList.length; i++) {

      if (this._teamList[i].id == team.id) {
        this._teamList.splice(i, 1);

        break;
      }
    }

    return TeamHolderService;
  }

  static win(node: NodeModel): boolean {
    let wonPlace: NodeModel|boolean = TreeManager.findParentOf(node);

    if (wonPlace instanceof NodeModel && !wonPlace.team && wonPlace.allChildrenHaveTeam()) {
      wonPlace.setWinTeam(node.team);

      return true;
    }

    return false;
  }

  static highlight(team: TeamModel):void {
    TreeManager.forEachNode(function(node: NodeModel) {
      if (node.team && node.team.id === team.id) {
        node.highlighted = true;
      }
    })
  }

  static unHighlight():void {
    TreeManager.forEachNode(function(node: NodeModel) {
      node.highlighted = false;
    })
  }
}
