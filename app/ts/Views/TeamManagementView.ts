import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";
import {TeamFormComponent} from "../Components/TeamFormComponent";
import {TeamModel} from "../Models/TeamModel";
import {TeamHolderService} from "../Services/TeamHolderService";

@Component({
  selector: 'team-management-view',
  templateUrl: 'app/templates/team-management.html',
  directives: [RouterLink, TeamFormComponent]
})

export class TeamManagementView {
  public teams: TeamModel[];

  ngOnInit() {
    this.teams = TeamHolderService.teams;
  }

  isFilled() {
    return TeamHolderService.isFilled()
  }

  remove(team: TeamModel) {
    TeamHolderService.removeTeam(team);
  }
}
