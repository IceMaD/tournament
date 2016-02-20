import {FlashMessageModel} from "../Models/FlashMessageModel";

export class FlashService {

  private static _list: FlashMessageModel[] = [];

  public static push(message: string, type: string = null): this {
    this._list.push(new FlashMessageModel(message, type));

    setTimeout(() => {
      this._list.shift()
    }, 3000);

    return this;
  }

  static get list():FlashMessageModel[] {
    return this._list;
  }
}
