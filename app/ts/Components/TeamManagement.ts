import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";
import {TeamHolderService} from "../Services/TeamHolderService";
import {TeamModel} from "../Models/TeamModel";
import {TeamFormComponent} from "./TeamFormComponent";

@Component({
  templateUrl: 'app/templates/team-management.html',
  directives: [RouterLink, TeamFormComponent]
})

export class TeamManagement {
  public teams: TeamModel[];

  constructor(private _teamHolderService: TeamHolderService) {}

  ngOnInit() {
    this.teams = this._teamHolderService.get();
  }

}
