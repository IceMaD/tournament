import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {HomepageComponent} from "./HomepageComponent";
import {TeamManagement} from "./TeamManagement";
import {TeamHolderService} from "../Services/TeamHolderService";

@Component({
  selector: 'tournament-app',
  templateUrl: 'app/templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TeamHolderService],
  //pipes: [],
})

@RouteConfig([

  {path: '/', name: 'Homepage', component: HomepageComponent, useAsDefault: true},
  {path: '/team-management', name: 'TeamManagement', component: TeamManagement},
  {path: '/*path', redirectTo:['Homepage']},

])

export class TournamentAppComponent {
}
