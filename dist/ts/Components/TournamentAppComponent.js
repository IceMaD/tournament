System.register(["angular2/core", "angular2/router", "../Services/TeamHolderService", "../Services/FlashService", "../Views/TeamManagementView", "../Views/TreeView"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, TeamHolderService_1, FlashService_1, TeamManagementView_1, TreeView_1;
    var TournamentAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (TeamHolderService_1_1) {
                TeamHolderService_1 = TeamHolderService_1_1;
            },
            function (FlashService_1_1) {
                FlashService_1 = FlashService_1_1;
            },
            function (TeamManagementView_1_1) {
                TeamManagementView_1 = TeamManagementView_1_1;
            },
            function (TreeView_1_1) {
                TreeView_1 = TreeView_1_1;
            }],
        execute: function() {
            TournamentAppComponent = (function () {
                function TournamentAppComponent() {
                }
                TournamentAppComponent.prototype.ngOnInit = function () {
                    this.flashMessages = FlashService_1.FlashService.list;
                };
                TournamentAppComponent = __decorate([
                    core_1.Component({
                        selector: 'tournament-app',
                        templateUrl: 'dist/templates/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [TeamHolderService_1.TeamHolderService, FlashService_1.FlashService],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'TeamManagement', component: TeamManagementView_1.TeamManagementView, useAsDefault: true },
                        { path: '/tree', name: 'TreeComponent', component: TreeView_1.TreeView },
                        { path: '/*path', redirectTo: ['TeamManagement'] },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TournamentAppComponent);
                return TournamentAppComponent;
            }());
            exports_1("TournamentAppComponent", TournamentAppComponent);
        }
    }
});
