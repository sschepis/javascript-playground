"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.initialState = {
    timings: {},
    count: {}
};
exports["default"] = (function (state, action) {
    var _a, _b, _c;
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'COUNT': {
            var times = state.count[action.name] || 0;
            return __assign(__assign({}, state), { count: __assign(__assign({}, state.count), (_a = {}, _a[action.name] = times + 1, _a)) });
        }
        case 'TIME_START': {
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_b = {}, _b[action.name] = {
                    start: performance.now() || +new Date()
                }, _b)) });
        }
        case 'TIME_END': {
            var timing = state.timings[action.name];
            var end = performance.now() || +new Date();
            var start = timing.start;
            var time = end - start;
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_c = {}, _c[action.name] = __assign(__assign({}, timing), { end: end,
                    time: time }), _c)) });
        }
        default: {
            return state;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVhLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFBO0FBRUQsc0JBQWUsVUFBQyxLQUFvQixFQUFFLE1BQWM7O0lBQXBDLHNCQUFBLEVBQUEsUUFBUSxvQkFBWTtJQUNsQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUUzQyw2QkFDSyxLQUFLLEtBQ1IsS0FBSyx3QkFDQSxLQUFLLENBQUMsS0FBSyxnQkFDYixNQUFNLENBQUMsSUFBSSxJQUFHLEtBQUssR0FBRyxDQUFDLFVBRTNCO1NBQ0Y7UUFFRCxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBQ2pCLDZCQUNLLEtBQUssS0FDUixPQUFPLHdCQUNGLEtBQUssQ0FBQyxPQUFPLGdCQUNmLE1BQU0sQ0FBQyxJQUFJLElBQUc7b0JBQ2IsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2lCQUN4QyxVQUVKO1NBQ0Y7UUFFRCxLQUFLLFVBQVUsQ0FBQyxDQUFDO1lBQ2YsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFekMsSUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQTtZQUNwQyxJQUFBLG9CQUFLLENBQVc7WUFFeEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQTtZQUV4Qiw2QkFDSyxLQUFLLEtBQ1IsT0FBTyx3QkFDRixLQUFLLENBQUMsT0FBTyxnQkFDZixNQUFNLENBQUMsSUFBSSwwQkFDUCxNQUFNLEtBQ1QsR0FBRyxLQUFBO29CQUNILElBQUksTUFBQSxhQUdUO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxDQUFBO1NBQ2I7S0FDRjtBQUNILENBQUMsRUFBQSJ9