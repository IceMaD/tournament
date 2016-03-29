System.register(["angular2/core", "../Models/NodeModel", "../Services/TeamHolderService"], function(exports_1, context_1) {
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
    var core_1, core_2, NodeModel_1, TeamHolderService_1;
    var OverlayDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (NodeModel_1_1) {
                NodeModel_1 = NodeModel_1_1;
            },
            function (TeamHolderService_1_1) {
                TeamHolderService_1 = TeamHolderService_1_1;
            }],
        execute: function() {
            OverlayDirective = (function () {
                function OverlayDirective() {
                }
                OverlayDirective.prototype.show = function () {
                    if (!this.node.team) {
                        return;
                    }
                    TeamHolderService_1.TeamHolderService.highlight(this.node.team);
                };
                OverlayDirective.prototype.hide = function () {
                    if (!this.node.team) {
                        return;
                    }
                    TeamHolderService_1.TeamHolderService.unHighlight();
                };
                __decorate([
                    core_2.Input('overlay'), 
                    __metadata('design:type', NodeModel_1.NodeModel)
                ], OverlayDirective.prototype, "node", void 0);
                OverlayDirective = __decorate([
                    core_1.Directive({
                        selector: '[overlay]',
                        host: {
                            '(mouseenter)': 'show()',
                            '(mouseleave)': 'hide()'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], OverlayDirective);
                return OverlayDirective;
            }());
            exports_1("OverlayDirective", OverlayDirective);
        }
    }
});
