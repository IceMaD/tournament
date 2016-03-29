import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";
import {TeamFormComponent} from "../Components/TeamFormComponent";
import {TeamModel} from "../Models/TeamModel";
import {TeamHolderService} from "../Services/TeamHolderService";
import {TeamComponent} from "../Components/TeamComponent";
import {TooltipDirective} from "../Directives/TooltipDirective";

@Component({
  selector: 'team-management-view',
  templateUrl: 'dist/templates/team-management.html',
  directives: [RouterLink, TeamFormComponent, TeamComponent, TooltipDirective]
})

export class TeamManagementView {
  public teams: TeamModel[];

  ngOnInit() {
    this.teams = TeamHolderService.teams;
  }

  isFilled() {
    return TeamHolderService.isFilled()
  }
}
