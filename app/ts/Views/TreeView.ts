import {Router, RouterLink} from "angular2/router";
import {Component} from "angular2/core";
import {TeamModel} from "../Models/TeamModel";
import {FlashService} from "../Services/FlashService";
import {TeamHolderService} from "../Services/TeamHolderService";
import {NodeComponent} from "../Components/NodeComponent";
import {TreeManager} from "../Services/TreeManager";

@Component({
  selector: 'tree-view',
  templateUrl: 'dist/templates/tree.html',
  directives: [RouterLink, NodeComponent]
})
export class TreeView {
  private tree: Object;
  private debug: Boolean;
  private log: {}[];

  constructor(
    private _router: Router
  ) {}

  ngOnInit() {
    if (!TeamHolderService.isFilled()) {
      FlashService.push('Vous devez avoir 2, 4, 8, 16 ou 32 équipes');
      this._router.navigate(['TeamManagement']);

      return;
    }

    this.tree = TreeManager.tree;
    this.log = TeamHolderService.log;
  }

  public toggleDebug() {
    this.debug = TreeManager.toggleDebug();
  }
}
