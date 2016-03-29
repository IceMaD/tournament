System.register(["../Models/NodeModel", "./TeamHolderService"], function(exports_1) {
    var NodeModel_1, TeamHolderService_1;
    var TreeManager;
    return {
        setters:[
            function (NodeModel_1_1) {
                NodeModel_1 = NodeModel_1_1;
            },
            function (TeamHolderService_1_1) {
                TeamHolderService_1 = TeamHolderService_1_1;
            }],
        execute: function() {
            TreeManager = (function () {
                function TreeManager() {
                }
                Object.defineProperty(TreeManager, "tree", {
                    get: function () {
                        if (!this.hasTree()) {
                            this.buildTree();
                        }
                        return this._tree;
                    },
                    enumerable: true,
                    configurable: true
                });
                TreeManager.hasTree = function () {
                    return (this._tree instanceof NodeModel_1.NodeModel);
                };
                TreeManager.findParentOf = function (nodeToFind) {
                    for (var i = 0; i < this._nodes.length; i++) {
                        var node = this._nodes[i];
                        for (var j = 0; j < node.children.length; j++) {
                            var child = node.children[j];
                            if (child.id === nodeToFind.id) {
                                return node;
                            }
                        }
                    }
                    return false;
                };
                TreeManager.forEachNode = function (callback) {
                    for (var i = 0; i < this._nodes.length; i++) {
                        var node = TreeManager._nodes[i];
                        callback(node);
                    }
                };
                TreeManager.clear = function () {
                    this._nodes.length = 0;
                    this._tree = null;
                };
                TreeManager.buildTree = function () {
                    var teams = TeamHolderService_1.TeamHolderService.teams;
                    var countOf = {
                        teams: teams.length,
                        nodes: (teams.length * 2) - 1,
                    };
                    var nodes = [];
                    for (var i = 0; i < countOf.nodes; i++) {
                        var node = new NodeModel_1.NodeModel();
                        nodes.push(node);
                        if (nodes.length > 1) {
                            var positionOfParent = Math.floor(nodes.length / 2) - 1;
                            var parent_1 = nodes[positionOfParent];
                            parent_1.addChild(node);
                        }
                        if (countOf.nodes - i <= countOf.teams) {
                            node.setTeam(teams[i + 1 - countOf.teams]);
                        }
                    }
                    nodes[0].last = true;
                    this._nodes = this._nodes.concat(nodes);
                    this._tree = nodes[0];
                };
                TreeManager.toggleDebug = function () {
                    this.forEachNode(function (node) {
                        node.debug = !node.debug;
                    });
                };
                TreeManager._nodes = [];
                return TreeManager;
            })();
            exports_1("TreeManager", TreeManager);
        }
    }
});
