import {RouterLink} from "angular2/router";
import {Component} from "angular2/core";
import {TeamModel} from "../Models/TeamModel";
import {TeamHolderService} from "../Services/TeamHolderService";
import {Router} from "angular2/router";
import {FlashService} from "../Services/FlashService";


@Component({
  templateUrl: 'app/templates/tree.html',
  directives: [RouterLink]
})

export class TreeComponent {
  public teams: TeamModel[];

  constructor(
    private _flashService: FlashService,
    private _teamHolderService: TeamHolderService,
    private _router: Router
  ) {}

  ngOnInit() {
    if (!this._teamHolderService.isFilled()) {
      this._flashService.push('Vous devez renseigner 8 équipes');
      return this._router.navigate(['TeamManagement'])
    }

    this.teams = this._teamHolderService.get();
  }
}
