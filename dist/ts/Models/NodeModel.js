System.register(["./TeamModel", "../Services/IdService", "../Services/TeamHolderService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TeamModel_1, IdService_1, TeamHolderService_1;
    var NodeModel;
    return {
        setters:[
            function (TeamModel_1_1) {
                TeamModel_1 = TeamModel_1_1;
            },
            function (IdService_1_1) {
                IdService_1 = IdService_1_1;
            },
            function (TeamHolderService_1_1) {
                TeamHolderService_1 = TeamHolderService_1_1;
            }],
        execute: function() {
            NodeModel = (function () {
                function NodeModel() {
                    this.last = false;
                    this.children = [];
                    this.debug = false;
                    this._id = IdService_1.IdService.getUniqueId();
                }
                Object.defineProperty(NodeModel.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                NodeModel.prototype.win = function () {
                    if (!(this.team instanceof TeamModel_1.TeamModel)) {
                        return;
                    }
                    TeamHolderService_1.TeamHolderService.win(this);
                };
                NodeModel.prototype.setTeam = function (team) {
                    this.team = team;
                    return this;
                };
                NodeModel.prototype.addChild = function (node) {
                    this.children.push(node);
                    return this;
                };
                NodeModel.prototype.allChildrenHaveTeam = function () {
                    var allChildrenHaveTeam = true;
                    for (var i = 0; i < this.children.length; i++) {
                        var child = this.children[i];
                        if (!child.team) {
                            allChildrenHaveTeam = false;
                        }
                    }
                    return allChildrenHaveTeam;
                };
                NodeModel.prototype.setWinTeam = function (team) {
                    this.team = team;
                    for (var i = 0; i < this.children.length; i++) {
                        var child = this.children[i];
                        child.status = child.team.name === team.name ? 'won' : 'lost';
                    }
                };
                return NodeModel;
            }());
            exports_1("NodeModel", NodeModel);
        }
    }
});
