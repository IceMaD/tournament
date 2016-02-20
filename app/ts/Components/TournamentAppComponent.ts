import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {TeamHolderService} from "../Services/TeamHolderService";
import {FlashService} from "../Services/FlashService";
import {FlashMessageModel} from "../Models/FlashMessageModel";
import {TeamManagementView} from "../Views/TeamManagementView";
import {TreeView} from "../Views/TreeView";

@Component({
  selector: 'tournament-app',
  templateUrl: 'dist/templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TeamHolderService, FlashService],
})

@RouteConfig([

  {path: '/', name: 'TeamManagement', component: TeamManagementView, useAsDefault: true},
  {path: '/tree', name: 'TreeComponent', component: TreeView},
  {path: '/*path', redirectTo:['TeamManagement']},

])

export class TournamentAppComponent {

  private flashMessages: FlashMessageModel[];

  ngOnInit() {
    this.flashMessages = FlashService.list;
  }
}
