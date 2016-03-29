System.register(["angular2/core", "../Components/TooltipComponent"], function(exports_1, context_1) {
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
    var core_1, core_2, core_3, core_4, TooltipComponent_1, core_5, core_6, TooltipComponent_2;
    var TooltipDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
                core_5 = core_1_1;
                core_6 = core_1_1;
            },
            function (TooltipComponent_1_1) {
                TooltipComponent_1 = TooltipComponent_1_1;
                TooltipComponent_2 = TooltipComponent_1_1;
            }],
        execute: function() {
            TooltipDirective = (function () {
                function TooltipDirective(_element, _loader) {
                    this._element = _element;
                    this._loader = _loader;
                    this.condition = true;
                }
                TooltipDirective.prototype.show = function () {
                    if (!this.condition) {
                        return;
                    }
                    var binding = core_5.Injector.resolve([
                        new core_6.Provider(TooltipComponent_2.TooltipOptions, { useValue: new TooltipComponent_2.TooltipOptions(this._element.nativeElement, this.text) })
                    ]);
                    this._tooltip = this._loader
                        .loadNextToLocation(TooltipComponent_1.TooltipComponent, this._element, binding)
                        .then(function (componentRef) {
                        componentRef.instance.position();
                        return componentRef;
                    });
                };
                TooltipDirective.prototype.hide = function () {
                    if (!(this._tooltip instanceof Promise)) {
                        return;
                    }
                    this._tooltip.then(function (componentRef) {
                        componentRef.dispose();
                        return componentRef;
                    });
                };
                __decorate([
                    core_2.Input('tooltip'), 
                    __metadata('design:type', String)
                ], TooltipDirective.prototype, "text", void 0);
                __decorate([
                    core_2.Input('tooltip-condition'), 
                    __metadata('design:type', Boolean)
                ], TooltipDirective.prototype, "condition", void 0);
                TooltipDirective = __decorate([
                    core_1.Directive({
                        selector: '[tooltip]',
                        host: {
                            '(mouseenter)': 'show()',
                            '(mouseleave)': 'hide()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef, core_4.DynamicComponentLoader])
                ], TooltipDirective);
                return TooltipDirective;
            }());
            exports_1("TooltipDirective", TooltipDirective);
        }
    }
});
