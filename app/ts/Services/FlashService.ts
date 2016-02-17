import {FlashMessageModel} from "../Models/FlashMessageModel";

export class FlashService {

  private _list: FlashMessageModel[] = [];

  push(message: string, type: string = null): this {
    this._list.push(new FlashMessageModel(message, type));

    setTimeout(() => {
      this._list.shift()
    }, 3000);

    return this;
  }

  get(): FlashMessageModel[] {
    return this._list;
  }
}
