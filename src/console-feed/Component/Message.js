"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var React = require("react");
var emotion_theming_1 = require("emotion-theming");
var elements_1 = require("./elements");
var Formatted_1 = require("./message-parsers/Formatted");
var Object_1 = require("./message-parsers/Object");
var Error_1 = require("./message-parsers/Error");
var ConsoleMessage = /** @class */ (function (_super) {
    __extends(ConsoleMessage, _super);
    function ConsoleMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = function (theme) { return (__assign(__assign({}, theme), { method: _this.props.log.method })); };
        return _this;
    }
    ConsoleMessage.prototype.render = function () {
        var log = this.props.log;
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.theme },
            React.createElement(elements_1.Message, { "data-method": log.method },
                React.createElement(elements_1.Icon, null),
                React.createElement(elements_1.Content, null, this.getNode()))));
    };
    ConsoleMessage.prototype.getNode = function () {
        var log = this.props.log;
        // Error handling
        var error = this.typeCheck(log);
        if (error)
            return error;
        // Chrome formatting
        if (log.data.length > 0 &&
            typeof log.data[0] === 'string' &&
            log.data[0].indexOf('%') > -1) {
            return React.createElement(Formatted_1["default"], { data: log.data });
        }
        // Error panel
        if (log.data.every(function (message) { return typeof message === 'string'; }) &&
            log.method === 'error') {
            return React.createElement(Error_1["default"], { log: log });
        }
        // Normal inspector
        var quoted = typeof log.data[0] !== 'string';
        return React.createElement(Object_1["default"], { log: log, quoted: quoted });
    };
    ConsoleMessage.prototype.typeCheck = function (log) {
        if (!log) {
            return (React.createElement(Formatted_1["default"], { data: [
                    "%c[console-feed] %cFailed to parse message! %clog was typeof " + typeof log + ", but it should've been a log object",
                    'color: red',
                    'color: orange',
                    'color: cyan'
                ] }));
        }
        else if (!(log.data instanceof Array)) {
            return (React.createElement(Formatted_1["default"], { data: [
                    '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
                    'color: red',
                    'color: orange',
                    'color: cyan'
                ] }));
        }
        return false;
    };
    return ConsoleMessage;
}(React.PureComponent));
exports["default"] = ConsoleMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnQvTWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFFOUIsbURBQStDO0FBRS9DLHVDQUFtRDtBQUVuRCx5REFBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELGlEQUFnRDtBQUVoRDtJQUE2QixrQ0FBc0M7SUFBbkU7UUFBQSxxRUF5RUM7UUF4RUMsV0FBSyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsdUJBQ3JCLEtBQUssS0FDUixNQUFNLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUM3QixFQUh3QixDQUd4QixDQUFBOztJQXFFSixDQUFDO0lBbkVDLCtCQUFNLEdBQU47UUFDVSxJQUFBLG9CQUFHLENBQWU7UUFDMUIsT0FBTyxDQUNMLG9CQUFDLCtCQUFhLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzlCLG9CQUFDLGtCQUFPLG1CQUFjLEdBQUcsQ0FBQyxNQUFNO2dCQUM5QixvQkFBQyxlQUFJLE9BQUc7Z0JBQ1Isb0JBQUMsa0JBQU8sUUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQVcsQ0FDM0IsQ0FDSSxDQUNqQixDQUFBO0lBQ0gsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDVSxJQUFBLG9CQUFHLENBQWU7UUFFMUIsaUJBQWlCO1FBQ2pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakMsSUFBSSxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFdkIsb0JBQW9CO1FBQ3BCLElBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNuQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUTtZQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDN0I7WUFDQSxPQUFPLG9CQUFDLHNCQUFTLElBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUksQ0FBQTtTQUNyQztRQUVELGNBQWM7UUFDZCxJQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxPQUFPLEtBQUssUUFBUSxFQUEzQixDQUEyQixDQUFDO1lBQ3RELEdBQUcsQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUN0QjtZQUNBLE9BQU8sb0JBQUMsa0JBQVUsSUFBQyxHQUFHLEVBQUUsR0FBRyxHQUFJLENBQUE7U0FDaEM7UUFFRCxtQkFBbUI7UUFDbkIsSUFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQTtRQUM5QyxPQUFPLG9CQUFDLG1CQUFVLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFJLENBQUE7SUFDakQsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxHQUFRO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQ0wsb0JBQUMsc0JBQVMsSUFDUixJQUFJLEVBQUU7b0JBQ0osa0VBQWdFLE9BQU8sR0FBRyx5Q0FBc0M7b0JBQ2hILFlBQVk7b0JBQ1osZUFBZTtvQkFDZixhQUFhO2lCQUNkLEdBQ0QsQ0FDSCxDQUFBO1NBQ0Y7YUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FDTCxvQkFBQyxzQkFBUyxJQUNSLElBQUksRUFBRTtvQkFDSiwwRUFBMEU7b0JBQzFFLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixhQUFhO2lCQUNkLEdBQ0QsQ0FDSCxDQUFBO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6RUQsQ0FBNkIsS0FBSyxDQUFDLGFBQWEsR0F5RS9DO0FBRUQscUJBQWUsY0FBYyxDQUFBIn0=