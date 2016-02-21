import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";

export class TooltipOptions {
  constructor(public parent: HTMLElement, public text: string) {}
}

@Component({
  selector: 'tooltip',
  templateUrl: 'dist/templates/tooltip.html',
})
export class TooltipComponent {

  public text: string;
  public left: number;
  public bottom: number;
  public arrow: number|string;

  private _parent: HTMLElement;

  constructor(
    private _element: ElementRef,
    options: TooltipOptions
  ) {
    this._parent = options.parent;
    this.text = options.text;
  }

  public position(): this {
    this.bottom = -99999;
    this.left = -99999;
    this.arrow = '50%';

    setTimeout(() => {
      this.fix();
    });

    return this;
  }

  private fix() {
    var tooltip: HTMLElement = this._element.nativeElement.firstChild;

    let parentRectangle = this._parent.getBoundingClientRect();
    let tooltipRectangle = tooltip.getBoundingClientRect();

    let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let absoluteParentMiddleX = parentRectangle.left + (parentRectangle.width / 2);
    let bottom = vh - parentRectangle.top + 10;
    var tooltipMidWidth = (tooltipRectangle.width/2);

    let left = absoluteParentMiddleX - tooltipMidWidth;

    this.bottom = bottom;

    if (left > 0) {
      this.left = left;
    } else {
      this.left = 0;
      this.arrow = absoluteParentMiddleX + 'px';
    }
  }
}
