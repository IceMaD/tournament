System.register(["../Services/IdService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IdService_1;
    var TeamModel;
    return {
        setters:[
            function (IdService_1_1) {
                IdService_1 = IdService_1_1;
            }],
        execute: function() {
            TeamModel = (function () {
                function TeamModel(name) {
                    this.name = name;
                    this._id = IdService_1.IdService.getUniqueId();
                }
                Object.defineProperty(TeamModel.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TeamModel;
            }());
            exports_1("TeamModel", TeamModel);
        }
    }
});
