System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IdService;
    return {
        setters:[],
        execute: function() {
            IdService = (function () {
                function IdService() {
                }
                IdService.getUniqueId = function () {
                    this._id++;
                    return this._id;
                };
                IdService._id = 0;
                return IdService;
            }());
            exports_1("IdService", IdService);
        }
    }
});
