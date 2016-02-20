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

  static get teams():TeamModel[] {
    return this._teamList;
  }

  static addTeam(name: string): TeamHolderService {
    if (!this.hasConfirmed()) {
      return;
    }

    this._teamList.push(new TeamModel(name));

    return TeamHolderService;
  }

  static removeTeam(team: TeamModel): TeamHolderService {
    if (!this.hasConfirmed()) {
      return;
    }

    for (let i:number = 0; i < this._teamList.length; i++) {

      if (this._teamList[i].id == team.id) {
        this._teamList.splice(i, 1);

        break;
      }
    }

    return TeamHolderService;
  }

  static clear():void {
    TreeManager.clear();
    // @TODO Clear tree
    this._teamList.length = 0;
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

  static isFilled(): boolean {
    let l = this._teamList.length;

    // Is power of 2
    return l && (l & (l - 1)) === 0;
  }

  private static hasConfirmed(): boolean {
    if (!TreeManager.hasTree()) {
      return true;
    }

    if (!confirm('Cette action aura pour effet de supprimer l\'arbre existant')) {
      return false;
    }

    TreeManager.clear();

    return true;
  }
}
