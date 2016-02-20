import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {NodeModel} from "../Models/NodeModel";
import {OverlayDirective} from "../Directives/OverlayDirective";

@Component({
  selector: 'node',
  templateUrl: 'dist/templates/node.html',
  directives: [NodeComponent, OverlayDirective]
})

export class NodeComponent {

  @Input() node: NodeModel;

}
