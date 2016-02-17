import {TeamModel} from "../Models/TeamModel";
import {NodeModel} from "../Models/NodeModel";

export class TeamHolderService {

  public static _teamList: TeamModel[] = [
    new TeamModel('Coconuts'),
    new TeamModel('Ananas'),
    new TeamModel('Watermelons'),
    new TeamModel('Kitties'),
    new TeamModel('Bananas'),
    new TeamModel('Puppies'),
    new TeamModel('Birds'),
    new TeamModel('Monkeys'),
  ];
  public static tree: NodeModel;
  public static _nodes: NodeModel[];

  static get() {
    return this._teamList;
  }

  static buildTree(): NodeModel {

    let turnCount: number = Math.ceil(Math.log(this._teamList.length)/Math.log(2));
    let nodes: { [turn: string]: { [group: string]: NodeModel } } = {t1:{}};
    this._nodes = [];

    /* Generate First Turn */
    for (let i:number = 0; i < this._teamList.length; i = i+2) {
      let turn = 't'+1;
      let group = 'g'+(i/2+1);

      let nodeTeam1 = new NodeModel('team ' + i, [], this._teamList[i]);
      let nodeTeam2 = new NodeModel('team ' + (i+1), [], this._teamList[i+1]);

      let node: NodeModel = new NodeModel(turn + group, [nodeTeam1, nodeTeam2]);
      this._nodes.push(node);
      this._nodes.push(nodeTeam1);
      this._nodes.push(nodeTeam2);
      nodes[turn][group] = node;
    }

    /* Generate Other turns */
    for (let t:number = 2; t < turnCount+1; t++) {

      nodes['t'+t] = {};

      /* Group count for turn t */
      let groupCount = Math.pow(2, turnCount - t);

      for (let g:number = 1; g <= groupCount; g++) {

        /* Store Previous turn */
        let prevTurn = nodes['t'+(t-1)];
        let turn = 't'+t;
        let group = 'g'+g;

        let node: NodeModel = new NodeModel(turn + group, [
          prevTurn['g'+(g*2-1)],
          prevTurn['g'+(g*2)],
        ]);

        this._nodes.push(node);
        nodes[turn][group] = node;
      }
    }

    this.tree = nodes['t' + turnCount]['g1'];
    this.tree.last = true;

    this._nodes.push(this.tree);
    return this.tree;
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
    let wonPlace: NodeModel|boolean = this.tree.traverseToParentOf(node);

    if (wonPlace instanceof NodeModel && !wonPlace.team && wonPlace.allChildrenHaveTeam()) {
      wonPlace.setWinTeam(node.team);

      return true;
    }

    return false;
  }

  static highlight(team: TeamModel):void {
    for (let i:number = 0; i < this._nodes.length; i++) {
      let node:NodeModel = this._nodes[i];

      if (node.team && node.team.id === team.id) {
        node.highlighted = true;
      }
    }
  }

  static unHighlight():void {
    for (let i:number = 0; i < this._nodes.length; i++) {
      this._nodes[i].highlighted = false;
    }
  }
}
