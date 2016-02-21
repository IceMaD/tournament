import {Directive} from "angular2/core";
import {Input} from "angular2/core";
import {ElementRef} from "angular2/core";
import {DynamicComponentLoader} from "angular2/core";
import {TooltipComponent} from "../Components/TooltipComponent";
import {ComponentRef} from "angular2/core";
import {Injector} from "angular2/core";
import {Provider} from "angular2/core";
import {TooltipOptions} from "../Components/TooltipComponent";

@Directive({
  selector: '[tooltip]',
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()'
  }
})
export class TooltipDirective {

  @Input('tooltip') text: string;
  @Input('tooltip-condition') condition: boolean = true;

  private _tooltip: Promise<ComponentRef>;

  constructor(
    private _element: ElementRef,
    private _loader: DynamicComponentLoader
  ) {}

  show(): void {
    if (!this.condition) {
      return;
    }

    let binding = Injector.resolve([
      new Provider(TooltipOptions, { useValue: new TooltipOptions(this._element.nativeElement, this.text) })
    ]);

    this._tooltip = this._loader
      .loadNextToLocation(TooltipComponent, this._element, binding)
      .then((componentRef: ComponentRef) => {
        componentRef.instance.position();

        return componentRef;
      });
  }

  hide(): void {
    if (!(this._tooltip instanceof Promise)) {
      return;
    }

    this._tooltip.then((componentRef: ComponentRef) => {
      componentRef.dispose();

      return componentRef;
    });
  }
}
