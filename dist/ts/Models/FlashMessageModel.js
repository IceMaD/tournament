System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FlashMessageModel;
    return {
        setters:[],
        execute: function() {
            FlashMessageModel = (function () {
                function FlashMessageModel(content, type) {
                    if (type === void 0) { type = 'info'; }
                    this.content = content;
                    this.type = type;
                    this.ALLOWED_TYPES = ['info', 'warning', 'danger'];
                    this.type = this.ALLOWED_TYPES.indexOf(type) >= 0 ? type : 'info';
                }
                return FlashMessageModel;
            }());
            exports_1("FlashMessageModel", FlashMessageModel);
        }
    }
});
