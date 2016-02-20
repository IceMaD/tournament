import {Router, RouterLink} from "angular2/router";
import {Component} from "angular2/core";
import {TeamModel} from "../Models/TeamModel";
import {FlashService} from "../Services/FlashService";
import {TeamHolderService} from "../Services/TeamHolderService";
import {NodeComponent} from "../Components/NodeComponent";

@Component({
  selector: 'tree-view',
  templateUrl: 'app/templates/tree.html',
  directives: [RouterLink, NodeComponent]
})

export class TreeView {
  private tree: Object;

  constructor(
    private _router: Router
  ) {}

  ngOnInit() {
    if (!TeamHolderService.isFilled()) {
      FlashService.push('Vous devez renseigner 2, 4, 8, 16 ou 32 équipes');
      this._router.navigate(['TeamManagement']);

      return;
    }

    this.tree = TeamHolderService.tree;
  }
}
