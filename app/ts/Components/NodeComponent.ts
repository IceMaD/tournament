import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {NodeModel} from "../Models/NodeModel";
import {OverlayDirective} from "../Directives/OverlayDirective";
import {TooltipDirective} from "../Directives/TooltipDirective";

@Component({
  selector: 'node',
  templateUrl: 'app/templates/node.html',
  directives: [NodeComponent, OverlayDirective, TooltipDirective]
})

export class NodeComponent {

  @Input() node: NodeModel;

}
