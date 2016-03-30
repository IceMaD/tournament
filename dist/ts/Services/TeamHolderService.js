System.register(["../Models/TeamModel", "../Models/NodeModel", "./TreeManager"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TeamModel_1, NodeModel_1, TreeManager_1;
    var TeamHolderService;
    return {
        setters:[
            function (TeamModel_1_1) {
                TeamModel_1 = TeamModel_1_1;
            },
            function (NodeModel_1_1) {
                NodeModel_1 = NodeModel_1_1;
            },
            function (TreeManager_1_1) {
                TreeManager_1 = TreeManager_1_1;
            }],
        execute: function() {
            TeamHolderService = (function () {
                function TeamHolderService() {
                }
                Object.defineProperty(TeamHolderService, "teams", {
                    get: function () {
                        return this._teamList;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TeamHolderService, "log", {
                    get: function () {
                        return this._log;
                    },
                    enumerable: true,
                    configurable: true
                });
                TeamHolderService.addTeam = function (name) {
                    if (!this.hasConfirmed()) {
                        return;
                    }
                    this._teamList.push(new TeamModel_1.TeamModel(name));
                    return TeamHolderService;
                };
                TeamHolderService.removeTeam = function (team) {
                    if (!this.hasConfirmed()) {
                        return;
                    }
                    for (var i = 0; i < this._teamList.length; i++) {
                        if (this._teamList[i].id == team.id) {
                            this._teamList.splice(i, 1);
                            break;
                        }
                    }
                    return TeamHolderService;
                };
                TeamHolderService.clear = function () {
                    TreeManager_1.TreeManager.clear();
                    this._teamList.length = 0;
                };
                TeamHolderService.win = function (node) {
                    var wonPlace = TreeManager_1.TreeManager.findParentOf(node);
                    if (wonPlace instanceof NodeModel_1.NodeModel && !wonPlace.team && wonPlace.allChildrenHaveTeam()) {
                        wonPlace.setWinTeam(node.team);
                        this.logWin(wonPlace);
                        return true;
                    }
                    return false;
                };
                TeamHolderService.highlight = function (team) {
                    TreeManager_1.TreeManager.forEachNode(function (node) {
                        if (node.team && node.team.id === team.id) {
                            node.highlighted = true;
                        }
                    });
                };
                TeamHolderService.unHighlight = function () {
                    TreeManager_1.TreeManager.forEachNode(function (node) {
                        node.highlighted = false;
                    });
                };
                TeamHolderService.isFilled = function () {
                    var l = this._teamList.length;
                    return l && (l & (l - 1)) === 0;
                };
                TeamHolderService.hasConfirmed = function () {
                    if (!TreeManager_1.TreeManager.hasTree()) {
                        return true;
                    }
                    if (!confirm('Cette action aura pour effet de supprimer l\'arbre existant')) {
                        return false;
                    }
                    TreeManager_1.TreeManager.clear();
                    return true;
                };
                TeamHolderService.logWin = function (wonNode) {
                    var looser, winner = wonNode.team;
                    for (var i = 0; i < wonNode.children.length; i++) {
                        if (wonNode.children[i].team.id !== winner.id) {
                            looser = wonNode.children[i].team;
                            break;
                        }
                    }
                    this._log.push({ winner: winner, looser: looser, date: new Date() });
                };
                TeamHolderService._teamList = [
                    new TeamModel_1.TeamModel('Coconuts'),
                    new TeamModel_1.TeamModel('Ananas'),
                    new TeamModel_1.TeamModel('Watermelons'),
                    new TeamModel_1.TeamModel('Kitties'),
                    new TeamModel_1.TeamModel('Bananas'),
                    new TeamModel_1.TeamModel('Puppies'),
                    new TeamModel_1.TeamModel('Birds'),
                    new TeamModel_1.TeamModel('Monkeys'),
                ];
                TeamHolderService._log = [];
                return TeamHolderService;
            }());
            exports_1("TeamHolderService", TeamHolderService);
        }
    }
});
