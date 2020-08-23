"use strict";
exports.__esModule = true;
var state_1 = require("../../store/state");
var dispatch_1 = require("../../store/dispatch");
var actions_1 = require("../../store/actions");
function start(label) {
    dispatch_1["default"](actions_1.timeStart(label));
}
exports.start = start;
function stop(label) {
    var timing = state_1.state.timings[label];
    if (timing && !timing.end) {
        dispatch_1["default"](actions_1.timeEnd(label));
        var time = state_1.state.timings[label].time;
        return {
            method: 'log',
            data: [label + ": " + time + "ms"]
        };
    }
    return {
        method: 'warn',
        data: ["Timer '" + label + "' does not exist"]
    };
}
exports.stop = stop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsaURBQTJDO0FBQzNDLCtDQUF3RDtBQUV4RCxTQUFnQixLQUFLLENBQUMsS0FBYTtJQUNqQyxxQkFBUSxDQUFDLG1CQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBRkQsc0JBRUM7QUFFRCxTQUFnQixJQUFJLENBQUMsS0FBYTtJQUNoQyxJQUFNLE1BQU0sR0FBRyxhQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25DLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUN6QixxQkFBUSxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNoQixJQUFBLHdDQUFJLENBQXlCO1FBRXJDLE9BQU87WUFDTCxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxDQUFJLEtBQUssVUFBSyxJQUFJLE9BQUksQ0FBQztTQUM5QixDQUFBO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsQ0FBQyxZQUFVLEtBQUsscUJBQWtCLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFmRCxvQkFlQyJ9