import {Component} from "angular2/core";
import {TeamHolderService} from "../Services/TeamHolderService";

@Component({
  selector: 'team-form',
  templateUrl: 'app/templates/team-form.html'
})

export class TeamFormComponent {

  public model: string;

  constructor(private _teamHolderService: TeamHolderService) {}

  addTeam() {
    if (!this.model) {
      return;
    }

    this._teamHolderService.addTeam(this.model);

    this.model = '';
  }

}
