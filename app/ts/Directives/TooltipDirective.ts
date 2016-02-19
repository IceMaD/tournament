import {Directive} from "angular2/core";
import {Input} from "angular2/core";
import {ElementRef} from "angular2/core";
import {el} from "angular2/testing_internal";

@Directive({
  selector: '[tooltip]',
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()'
  }
})
export class TooltipDirective {

  @Input('tooltip') text: string;

  private _tooltip: any; // Fuck firstChild returns Node in doc and HTMLElement in real

  constructor(
    private _element: ElementRef
  ) {}

  show(): void {
    var el = this._element.nativeElement;
    let position = el.getBoundingClientRect();
    let top = position.top - position.height - 10;
    let left = position.right - (position.width/2);

    this._tooltip = this.getTooltipDom();

    el.appendChild(this._tooltip);

    this._tooltip.style.left = left + 'px';
    this._tooltip.style.top = top + 'px';
  }

  hide(): void {
    this._element.nativeElement.removeChild(this._tooltip);
  }

  private getTooltipDom(): any {
    let string: string = '<div class="tooltip">' + this.text + '</div>';
    let div: HTMLElement = document.createElement('div');

    div.innerHTML = string;

    return div.firstChild;
  }
}
