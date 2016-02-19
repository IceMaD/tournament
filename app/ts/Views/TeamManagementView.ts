import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";
import {TeamFormComponent} from "../Components/TeamFormComponent";
import {TeamModel} from "../Models/TeamModel";
import {TeamHolderService} from "../Services/TeamHolderService";
import {TeamComponent} from "../Components/TeamComponent";

@Component({
  selector: 'team-management-view',
  templateUrl: 'app/templates/team-management.html',
  directives: [RouterLink, TeamFormComponent, TeamComponent]
})

export class TeamManagementView {
  public teams: TeamModel[];

  ngOnInit() {
    this.teams = TeamHolderService.teams;
  }

  isFilled() {
    TeamHolderService.isFilled()
  }

  clear() {
    TeamHolderService.clear()
  }
}
