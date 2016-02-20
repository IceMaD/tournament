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

  constructor(
    private _router: Router
  ) {}

  ngOnInit() {
    if (!TeamHolderService.isFilled()) {
      FlashService.push('You must register 2, 4, 8, 16 or 32 teams');
      this._router.navigate(['TeamManagement']);

      return;
    }

    this.tree = TreeManager.tree;

    console.log(TreeManager.tree);
  }
}
