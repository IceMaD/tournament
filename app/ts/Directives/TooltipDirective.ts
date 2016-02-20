import {Directive} from "angular2/core";
import {Input} from "angular2/core";
import {ElementRef} from "angular2/core";
import {el} from "angular2/testing_internal";
import {DynamicComponentLoader} from "angular2/core";
import {TooltipComponent} from "../Components/TooltipComponent";
import {ComponentRef} from "angular2/core";
import {Injector} from "angular2/core";

@Directive({
  selector: '[tooltip]',
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()'
  }
})
export class TooltipDirective {

  @Input('tooltip') text: string;

  private _tooltip: Promise<ComponentRef>;

  constructor(
    private _element: ElementRef,
    private _loader: DynamicComponentLoader
  ) {}

  show(): void {

    this._tooltip = this._loader
      .loadNextToLocation(TooltipComponent, this._element)
      .then((componentRef: ComponentRef) => {
        componentRef.instance
          .setText(this.text)
          .positionAccordingTo(this._element.nativeElement);

        return componentRef;
      });
  }

  hide(): void {
    this._tooltip.then((componentRef: ComponentRef) => {
      componentRef.dispose();

      return componentRef;
    });
  }
}
