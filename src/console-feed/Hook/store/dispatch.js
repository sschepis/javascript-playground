"use strict";
exports.__esModule = true;
var reducer_1 = require("./reducer");
var state_1 = require("./state");
function dispatch(action) {
    state_1.update(reducer_1["default"](state_1.state, action));
}
exports["default"] = dispatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9zdG9yZS9kaXNwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFDQUE4QjtBQUM5QixpQ0FBdUM7QUFFdkMsU0FBUyxRQUFRLENBQUMsTUFBYztJQUM5QixjQUFNLENBQUMsb0JBQU0sQ0FBQyxhQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUMvQixDQUFDO0FBRUQscUJBQWUsUUFBUSxDQUFBIn0=