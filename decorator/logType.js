"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logType = exports.LookupTypes = void 0;
function getParamTypes(constructor) {
    return Reflect.getOwnMetadata('design:paramtypes', constructor);
}
function LookupTypes(target) {
    if (typeof target !== 'function') {
        throw new TypeError('Конструктор должен быть функцией');
    }
    console.log('target------------------------>', target);
    var types = getParamTypes(target);
    console.log('------------------------>', types);
    types === null || types === void 0 ? void 0 : types.map(function (type) { return console.log('------------------------>', type); });
    return target;
}
exports.LookupTypes = LookupTypes;
function logType(target, key) {
    console.log("", target);
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(key + " type: " + t);
}
exports.logType = logType;
