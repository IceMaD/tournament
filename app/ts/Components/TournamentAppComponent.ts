import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {TeamHolderService} from "../Services/TeamHolderService";
import {FlashService} from "../Services/FlashService";
import {FlashMessageModel} from "../Models/FlashMessageModel";
import {HomepageView} from "../Views/HomepageView";
import {TeamManagementView} from "../Views/TeamManagementView";
import {TreeView} from "../Views/TreeView";

@Component({
  selector: 'tournament-app',
  templateUrl: 'app/templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TeamHolderService, FlashService],
  //pipes: [],
})

@RouteConfig([

  {path: '/', name: 'Homepage', component: HomepageView, useAsDefault: true},
  {path: '/team-management', name: 'TeamManagement', component: TeamManagementView},
  {path: '/tree', name: 'TreeComponent', component: TreeView},
  {path: '/*path', redirectTo:['Homepage']},

])

export class TournamentAppComponent {

  private flashMessages: FlashMessageModel[];

  constructor(
    private _flashService: FlashService
  ) {}

  ngOnInit() {
    this.flashMessages = this._flashService.get();
  }
}
