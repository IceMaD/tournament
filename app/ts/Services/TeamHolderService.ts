import {TeamModel} from "../Models/TeamModel";

export class TeamHolderService {

  private _teamList: TeamModel[];

  constructor() {
    this._teamList = [new TeamModel('Les Kassos'), new TeamModel('Les Boulets'), new TeamModel('Les Asocials')];
  }

  get() {
    return this._teamList;
  }

  addTeam(name: string): this {
    this._teamList.push(new TeamModel(name));

    return this;
  }
}
