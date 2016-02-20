import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {TeamModel} from "../Models/TeamModel";
import {TeamHolderService} from "../Services/TeamHolderService";

@Component({
  selector: 'team',
  templateUrl: 'dist/templates/team.html'
})
export class TeamComponent {
  @Input() team: TeamModel;
  public edition: boolean = false;

  public remove() {
    TeamHolderService.removeTeam(this.team);
  }

  public edit() {
    this.edition = true;
  }
}
