import {TeamModel} from "../Models/TeamModel";
import {NodeModel} from "../Models/NodeModel";

export class TeamHolderService {

  public static _teamList: TeamModel[];
  public static tree: NodeModel;

  static get() {
    return this._teamList;
  }

  static buildTree(): NodeModel {
    this._teamList = [
      new TeamModel('Coconuts'),
      new TeamModel('Ananas'),
      new TeamModel('Watermelons'),
      new TeamModel('Kitties'),
      new TeamModel('Bananas'),
      new TeamModel('Puppies'),
      new TeamModel('Birds'),
      new TeamModel('Monkeys')
    ];

    let turnCount: number = Math.ceil(Math.log(this._teamList.length)/Math.log(2));
    let nodes: { [turn: string]: { [group: string]: NodeModel } } = {t1:{}};

    /* Generate First Turn */
    for (let i:number = 0; i < this._teamList.length; i = i+2) {
      let turn = 't'+1;
      let group = 'g'+(i/2+1);

      nodes[turn][group] = new NodeModel(turn + group, [
        new NodeModel('team ' + i, [], this._teamList[i]),
        new NodeModel('team ' + (i+1), [], this._teamList[i+1])
      ]);
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


        nodes[turn][group] = new NodeModel(turn + group, [
          prevTurn['g'+(g*2-1)],
          prevTurn['g'+(g*2)],
        ])
      }
    }

    this.tree = nodes['t' + turnCount]['g1'];
    this.tree.last = true;

    return this.tree;
  }

  static addTeam(name: string): TeamHolderService {
    this._teamList.push(new TeamModel(name));

    return TeamHolderService;
  }

  static isFilled(): boolean {
    return this._teamList.length == 4;
  }

  static removeTeam(team: TeamModel): TeamHolderService {

    for (let i:number = 0; i < this._teamList.length; i++) {

      if (this._teamList[i].name == team.name) {
        this._teamList.splice(i, 1);

        break;
      }
    }

    return TeamHolderService;
  }

  static win(node: NodeModel): boolean {
    let wonPlace: NodeModel|boolean = this.tree.traverseToParentOf(node);

    if (wonPlace instanceof NodeModel
      && !wonPlace.team
      && wonPlace.allChildrenHaveTeam()
    ) {
      wonPlace.setWinTeam(node.team);

      return true;
    }

    return false;
  }

  static highlight(team: TeamModel):void {
    this.tree.findByTeam(team)
  }
}
