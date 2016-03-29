System.register(["angular2/core", "../Models/TeamModel", "../Services/TeamHolderService"], function(exports_1, context_1) {
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
    var core_1, core_2, TeamModel_1, TeamHolderService_1;
    var TeamComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (TeamModel_1_1) {
                TeamModel_1 = TeamModel_1_1;
            },
            function (TeamHolderService_1_1) {
                TeamHolderService_1 = TeamHolderService_1_1;
            }],
        execute: function() {
            TeamComponent = (function () {
                function TeamComponent() {
                    this.edition = false;
                }
                TeamComponent.prototype.remove = function () {
                    TeamHolderService_1.TeamHolderService.removeTeam(this.team);
                };
                TeamComponent.prototype.edit = function () {
                    this.edition = true;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', TeamModel_1.TeamModel)
                ], TeamComponent.prototype, "team", void 0);
                TeamComponent = __decorate([
                    core_1.Component({
                        selector: 'team',
                        templateUrl: 'dist/templates/team.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TeamComponent);
                return TeamComponent;
            }());
            exports_1("TeamComponent", TeamComponent);
        }
    }
});
