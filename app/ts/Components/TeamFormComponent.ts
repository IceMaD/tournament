import {Component} from "angular2/core";
import {TeamHolderService} from "../Services/TeamHolderService";

@Component({
  selector: 'team-form',
  templateUrl: 'app/templates/team-form.html'
})

export class TeamFormComponent {

  public model: string;

  public addTeam(): void {
    if (!this.model) {
      return;
    }

    TeamHolderService.addTeam(this.model);

    this.model = '';
  }

}
