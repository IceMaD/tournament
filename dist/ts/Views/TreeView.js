System.register(["angular2/router", "angular2/core", "../Services/FlashService", "../Services/TeamHolderService", "../Components/NodeComponent", "../Services/TreeManager"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, FlashService_1, TeamHolderService_1, NodeComponent_1, TreeManager_1;
    var TreeView;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (FlashService_1_1) {
                FlashService_1 = FlashService_1_1;
            },
            function (TeamHolderService_1_1) {
                TeamHolderService_1 = TeamHolderService_1_1;
            },
            function (NodeComponent_1_1) {
                NodeComponent_1 = NodeComponent_1_1;
            },
            function (TreeManager_1_1) {
                TreeManager_1 = TreeManager_1_1;
            }],
        execute: function() {
            TreeView = (function () {
                function TreeView(_router) {
                    this._router = _router;
                }
                TreeView.prototype.ngOnInit = function () {
                    if (!TeamHolderService_1.TeamHolderService.isFilled()) {
                        FlashService_1.FlashService.push('You must register 2, 4, 8, 16 or 32 teams');
                        this._router.navigate(['TeamManagement']);
                        return;
                    }
                    this.tree = TreeManager_1.TreeManager.tree;
                };
                TreeView.prototype.toggleDebug = function () {
                    TreeManager_1.TreeManager.toggleDebug();
                };
                TreeView = __decorate([
                    core_1.Component({
                        selector: 'tree-view',
                        templateUrl: 'dist/templates/tree.html',
                        directives: [router_1.RouterLink, NodeComponent_1.NodeComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TreeView);
                return TreeView;
            })();
            exports_1("TreeView", TreeView);
        }
    }
});
