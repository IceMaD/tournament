import {bootstrap}    from 'angular2/platform/browser'
import {provide} from "angular2/core";
import {TournamentAppComponent} from "./Components/TournamentAppComponent";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";

bootstrap(TournamentAppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
