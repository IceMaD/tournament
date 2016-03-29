System.register(["../Models/FlashMessageModel"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FlashMessageModel_1;
    var FlashService;
    return {
        setters:[
            function (FlashMessageModel_1_1) {
                FlashMessageModel_1 = FlashMessageModel_1_1;
            }],
        execute: function() {
            FlashService = (function () {
                function FlashService() {
                }
                FlashService.push = function (message, type) {
                    var _this = this;
                    if (type === void 0) { type = null; }
                    this._list.push(new FlashMessageModel_1.FlashMessageModel(message, type));
                    setTimeout(function () {
                        _this._list.shift();
                    }, 3000);
                    return this;
                };
                Object.defineProperty(FlashService, "list", {
                    get: function () {
                        return this._list;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlashService._list = [];
                return FlashService;
            }());
            exports_1("FlashService", FlashService);
        }
    }
});
