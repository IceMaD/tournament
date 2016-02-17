import {IdService} from "../Services/IdService";
export class TeamModel {

  public name: string;
  private _id: number;

  constructor(name: string) {
    this.name = name;
    this._id = IdService.getUniqueId()
  }

  get id():number {
    return this._id;
  }
}
