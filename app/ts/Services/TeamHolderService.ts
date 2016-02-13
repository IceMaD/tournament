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

  isFilled(): boolean {
    return this._teamList.length == 8;
  }

  removeTeam(team: TeamModel): this {

    for (let i:number = 0; i < this._teamList.length; i++) {

      if (this._teamList[i].name == team.name) {
        this._teamList.splice(i, 1);

        break;
      }
    }

    return this;
  }
}
