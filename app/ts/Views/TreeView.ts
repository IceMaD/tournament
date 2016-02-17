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
  public teams: TeamModel[];
  private tree: Object;

  constructor(
    private _flashService: FlashService,
    private _teamHolderService: TeamHolderService,
    private _router: Router
  ) {}

  ngOnInit() {
    //if (!TeamHolderService.isFilled()) {
    //  this._flashService.push('Vous devez renseigner 4 équipes');
    //  return this._router.navigate(['TeamManagement'])
    //}

    this.teams = TeamHolderService.get();

    this.tree = TeamHolderService.buildTree();
  }
}