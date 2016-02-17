export class FlashMessageModel {

  private ALLOWED_TYPES = ['info', 'warning', 'danger'];

  constructor(public content: string, public type: string = 'info') {
    this.type = this.ALLOWED_TYPES.indexOf(type) >= 0 ? type : 'info';
  }
}
