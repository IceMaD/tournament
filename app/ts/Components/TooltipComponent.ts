import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";

@Component({
  selector: 'tooltip',
  templateUrl: 'dist/templates/tooltip.html',
})
export class TooltipComponent {
  private text: string;
  private left: number;
  private top: number;

  public setText(text: string): this {
    this.text = text;

    return this;
  }

  public positionAccordingTo(element: HTMLElement): this {

    let position = element.getBoundingClientRect();

    this.left = position.right - (position.width / 2);
    this.top = position.top - position.height - 10;

    return this;
  }
}
