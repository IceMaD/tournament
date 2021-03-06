import {Directive} from "angular2/core";
import {Input} from "angular2/core";
import {NodeModel} from "../Models/NodeModel";
import {TeamHolderService} from "../Services/TeamHolderService";

@Directive({
  selector: '[overlay]',
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()'
  }
})
export class OverlayDirective {
  @Input('overlay') node: NodeModel;

  show(): void {
    if (!this.node.team) {
      return;
    }

    TeamHolderService.highlight(this.node.team)
  }

  hide(): void {
    if (!this.node.team) {
      return;
    }

    TeamHolderService.unHighlight()
  }
}
