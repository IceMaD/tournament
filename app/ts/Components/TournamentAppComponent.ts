import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {HomepageComponent} from "./HomepageComponent";
import {TeamManagement} from "./TeamManagement";
import {TeamHolderService} from "../Services/TeamHolderService";
import {TreeComponent} from "./TreeComponent";
import {FlashService} from "../Services/FlashService";
import {FlashMessage} from "../Models/FlashMessage";

@Component({
  selector: 'tournament-app',
  templateUrl: 'app/templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TeamHolderService, FlashService],
  //pipes: [],
})

@RouteConfig([

  {path: '/', name: 'Homepage', component: HomepageComponent, useAsDefault: true},
  {path: '/team-management', name: 'TeamManagement', component: TeamManagement},
  {path: '/tree', name: 'TreeComponent', component: TreeComponent},
  {path: '/*path', redirectTo:['Homepage']},

])

export class TournamentAppComponent {

  private flashMessages: FlashMessage[];

  constructor(
    private _flashService: FlashService
  ) {}

  ngOnInit() {
    this.flashMessages = this._flashService.get();
  }
}
