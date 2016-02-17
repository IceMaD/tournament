export class IdService {

  private static _id: number = 0;

  static getUniqueId(): number {

    this._id++;

    return this._id;
  }
}
