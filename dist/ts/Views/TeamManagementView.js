System.register(["angular2/core", "angular2/router", "../Components/TeamFormComponent", "../Services/TeamHolderService", "../Components/TeamComponent", "../Directives/TooltipDirective"], function(exports_1, context_1) {
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
    var core_1, router_1, TeamFormComponent_1, TeamHolderService_1, TeamComponent_1, TooltipDirective_1;
    var TeamManagementView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (TeamFormComponent_1_1) {
                TeamFormComponent_1 = TeamFormComponent_1_1;
            },
            function (TeamHolderService_1_1) {
                TeamHolderService_1 = TeamHolderService_1_1;
            },
            function (TeamComponent_1_1) {
                TeamComponent_1 = TeamComponent_1_1;
            },
            function (TooltipDirective_1_1) {
                TooltipDirective_1 = TooltipDirective_1_1;
            }],
        execute: function() {
            TeamManagementView = (function () {
                function TeamManagementView() {
                }
                TeamManagementView.prototype.ngOnInit = function () {
                    this.teams = TeamHolderService_1.TeamHolderService.teams;
                };
                TeamManagementView.prototype.isFilled = function () {
                    return TeamHolderService_1.TeamHolderService.isFilled();
                };
                TeamManagementView = __decorate([
                    core_1.Component({
                        selector: 'team-management-view',
                        templateUrl: 'dist/templates/team-management.html',
                        directives: [router_1.RouterLink, TeamFormComponent_1.TeamFormComponent, TeamComponent_1.TeamComponent, TooltipDirective_1.TooltipDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TeamManagementView);
                return TeamManagementView;
            }());
            exports_1("TeamManagementView", TeamManagementView);
        }
    }
});
