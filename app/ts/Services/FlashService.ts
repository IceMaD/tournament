import {FlashMessage} from "../Models/FlashMessage";

export class FlashService {

  private _list: FlashMessage[] = [];

  push(message: String, type: String = null): this {
    this._list.push(new FlashMessage(message, type));

    setTimeout(() => {
      this._list.shift()
    }, 3000);

    return this;
  }

  get(): FlashMessage[] {
    return this._list;
  }
}
