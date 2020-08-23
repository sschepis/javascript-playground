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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var GUID_1 = require("./GUID");
var Timing = require("./methods/timing");
var Count = require("./methods/count");
var Assert = require("./methods/assert");
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
    // Create an ID
    var id = staticID || GUID_1["default"]();
    // Parse the methods
    switch (method) {
        case 'clear': {
            return {
                method: method,
                id: id
            };
        }
        case 'count': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            return __assign(__assign({}, Count.increment(label)), { id: id });
        }
        case 'time':
        case 'timeEnd': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            if (method === 'time') {
                Timing.start(label);
                return false;
            }
            return __assign(__assign({}, Timing.stop(label)), { id: id });
        }
        case 'assert': {
            var valid = data.length !== 0;
            if (valid) {
                var assertion = Assert.test.apply(Assert, __spreadArrays([data[0]], data.slice(1)));
                if (assertion) {
                    return __assign(__assign({}, assertion), { id: id });
                }
            }
            return false;
        }
        case 'error': {
            var errors = data.map(function (error) {
                try {
                    return error.stack || error;
                }
                catch (e) {
                    return error;
                }
            });
            return {
                method: method,
                id: id,
                data: errors
            };
        }
        default: {
            return {
                method: method,
                id: id,
                data: data
            };
        }
    }
}
exports["default"] = Parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLCtCQUF5QjtBQUV6Qix5Q0FBMEM7QUFDMUMsdUNBQXdDO0FBQ3hDLHlDQUEwQztBQUUxQzs7OztHQUlHO0FBQ0gsU0FBUyxLQUFLLENBQ1osTUFBZSxFQUNmLElBQVcsRUFDWCxRQUFpQjtJQUVqQixlQUFlO0lBQ2YsSUFBTSxFQUFFLEdBQUcsUUFBUSxJQUFJLGlCQUFJLEVBQUUsQ0FBQTtJQUU3QixvQkFBb0I7SUFDcEIsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2FBQ0gsQ0FBQTtTQUNGO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsNkJBQ0ssS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FDekIsRUFBRSxJQUFBLElBQ0g7U0FDRjtRQUVELEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxTQUFTLENBQUMsQ0FBQztZQUNkLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQixPQUFPLEtBQUssQ0FBQTthQUNiO1lBRUQsNkJBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FDckIsRUFBRSxJQUFBLElBQ0g7U0FDRjtRQUVELEtBQUssUUFBUSxDQUFDLENBQUM7WUFDYixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQTtZQUUvQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0sa0JBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQTtnQkFDeEQsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsNkJBQ0ssU0FBUyxLQUNaLEVBQUUsSUFBQSxJQUNIO2lCQUNGO2FBQ0Y7WUFFRCxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUMzQixJQUFJO29CQUNGLE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUE7aUJBQzVCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sS0FBSyxDQUFBO2lCQUNiO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFBO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTtnQkFDRixJQUFJLE1BQUE7YUFDTCxDQUFBO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFFRCxxQkFBZSxLQUFLLENBQUEifQ==