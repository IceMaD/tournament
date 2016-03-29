System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1, core_2;
    var TooltipOptions, TooltipComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            TooltipOptions = (function () {
                function TooltipOptions(parent, text) {
                    this.parent = parent;
                    this.text = text;
                }
                return TooltipOptions;
            }());
            exports_1("TooltipOptions", TooltipOptions);
            TooltipComponent = (function () {
                function TooltipComponent(_element, options) {
                    this._element = _element;
                    this._parent = options.parent;
                    this.text = options.text;
                }
                TooltipComponent.prototype.position = function () {
                    var _this = this;
                    this.bottom = -99999;
                    this.left = -99999;
                    this.arrow = '50%';
                    setTimeout(function () {
                        _this.fix();
                    });
                    return this;
                };
                TooltipComponent.prototype.fix = function () {
                    var tooltip = this._element.nativeElement.firstChild;
                    var parentRectangle = this._parent.getBoundingClientRect();
                    var tooltipRectangle = tooltip.getBoundingClientRect();
                    var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    var absoluteParentMiddleX = parentRectangle.left + (parentRectangle.width / 2);
                    var bottom = vh - parentRectangle.top;
                    var tooltipMidWidth = (tooltipRectangle.width / 2);
                    var left = absoluteParentMiddleX - tooltipMidWidth - parseInt(window.getComputedStyle(tooltip).marginLeft);
                    this.bottom = bottom;
                    if (left > 0) {
                        this.left = left;
                    }
                    else {
                        this.left = 0;
                        this.arrow = absoluteParentMiddleX + 'px';
                    }
                };
                TooltipComponent = __decorate([
                    core_1.Component({
                        selector: 'tooltip',
                        templateUrl: 'dist/templates/tooltip.html',
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, TooltipOptions])
                ], TooltipComponent);
                return TooltipComponent;
            }());
            exports_1("TooltipComponent", TooltipComponent);
        }
    }
});
