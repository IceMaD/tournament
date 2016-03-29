System.register(["angular2/core", "../Models/NodeModel", "../Directives/OverlayDirective"], function(exports_1, context_1) {
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
    var core_1, core_2, NodeModel_1, OverlayDirective_1;
    var NodeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (NodeModel_1_1) {
                NodeModel_1 = NodeModel_1_1;
            },
            function (OverlayDirective_1_1) {
                OverlayDirective_1 = OverlayDirective_1_1;
            }],
        execute: function() {
            NodeComponent = (function () {
                function NodeComponent() {
                }
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', NodeModel_1.NodeModel)
                ], NodeComponent.prototype, "node", void 0);
                NodeComponent = __decorate([
                    core_1.Component({
                        selector: 'node',
                        templateUrl: 'dist/templates/node.html',
                        directives: [NodeComponent, OverlayDirective_1.OverlayDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NodeComponent);
                return NodeComponent;
            }());
            exports_1("NodeComponent", NodeComponent);
        }
    }
});
