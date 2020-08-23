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
exports.__esModule = true;
var React = require("react");
var Linkify = require("linkifyjs/react");
function splitMessage(message) {
    var breakIndex = message.indexOf('\n');
    // consider that there can be line without a break
    if (breakIndex === -1) {
        return message;
    }
    return message.substr(0, breakIndex);
}
var ErrorPanel = /** @class */ (function (_super) {
    __extends(ErrorPanel, _super);
    function ErrorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorPanel.prototype.render = function () {
        var log = this.props.log;
        /* This checks for error logTypes and shortens the message in the console by wrapping
        it a <details /> tag and putting the first line in a <summary /> tag and the other lines
        follow after that. This creates a nice collapsible error message */
        var otherErrorLines;
        var msgLine = log.data.join(' ');
        var firstLine = splitMessage(msgLine);
        var msgArray = msgLine.split('\n');
        if (msgArray.length > 1) {
            otherErrorLines = msgArray.slice(1);
        }
        if (!otherErrorLines) {
            return React.createElement(Linkify, null, log.data.join(' '));
        }
        return (React.createElement("details", null,
            React.createElement("summary", { style: { outline: 'none', cursor: 'pointer' } }, firstLine),
            React.createElement(Linkify, null, otherErrorLines.join('\n\r'))));
    };
    return ErrorPanel;
}(React.PureComponent));
exports["default"] = ErrorPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L21lc3NhZ2UtcGFyc2Vycy9FcnJvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQThCO0FBRTlCLHlDQUEwQztBQU0xQyxTQUFTLFlBQVksQ0FBQyxPQUFlO0lBQ25DLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEMsa0RBQWtEO0lBQ2xELElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sT0FBTyxDQUFBO0tBQ2Y7SUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFFRDtJQUF5Qiw4QkFBK0I7SUFBeEQ7O0lBMkJBLENBQUM7SUExQkMsMkJBQU0sR0FBTjtRQUNVLElBQUEsb0JBQUcsQ0FBZTtRQUMxQjs7MkVBRW1FO1FBQ25FLElBQUksZUFBZSxDQUFBO1FBQ25CLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xDLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsZUFBZSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEM7UUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BCLE9BQU8sb0JBQUMsT0FBTyxRQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFXLENBQUE7U0FDL0M7UUFFRCxPQUFPLENBQ0w7WUFDRSxpQ0FBUyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFDbkQsU0FBUyxDQUNGO1lBQ1Ysb0JBQUMsT0FBTyxRQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQVcsQ0FDekMsQ0FDWCxDQUFBO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUF5QixLQUFLLENBQUMsYUFBYSxHQTJCM0M7QUFFRCxxQkFBZSxVQUFVLENBQUEifQ==