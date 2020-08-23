"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function test(expression) {
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    if (expression)
        return false;
    // Default message
    if (messages.length === 0)
        messages.push('console.assert');
    return {
        method: 'error',
        data: __spreadArrays(["Assertion failed:"], messages)
    };
}
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBZ0IsSUFBSSxDQUFDLFVBQWU7SUFBRSxrQkFBa0I7U0FBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1FBQWxCLGlDQUFrQjs7SUFDdEQsSUFBSSxVQUFVO1FBQUUsT0FBTyxLQUFLLENBQUE7SUFFNUIsa0JBQWtCO0lBQ2xCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBRTFELE9BQU87UUFDTCxNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksa0JBQUcsbUJBQW1CLEdBQUssUUFBUSxDQUFDO0tBQ3pDLENBQUE7QUFDSCxDQUFDO0FBVkQsb0JBVUMifQ==