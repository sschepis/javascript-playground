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
var emotion_theming_1 = require("emotion-theming");
var elements_1 = require("../react-inspector/elements");
var Linkify = require("linkifyjs/react");
var react_inspector_1 = require("../react-inspector");
var ObjectTree = /** @class */ (function (_super) {
    __extends(ObjectTree, _super);
    function ObjectTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectTree.prototype.render = function () {
        var _a = this.props, theme = _a.theme, quoted = _a.quoted, log = _a.log;
        return log.data.map(function (message, i) {
            if (typeof message === 'string') {
                var string = !quoted && message.length ? (message + " ") : (React.createElement("span", null,
                    React.createElement("span", null, "\""),
                    React.createElement("span", { style: {
                            color: theme.styles.OBJECT_VALUE_STRING_COLOR
                        } }, message),
                    React.createElement("span", null, "\" ")));
                return (React.createElement(elements_1.Root, { "data-type": "string", key: i },
                    React.createElement(Linkify, null, string)));
            }
            return React.createElement(react_inspector_1["default"], { data: message, key: i });
        });
    };
    return ObjectTree;
}(React.PureComponent));
exports["default"] = emotion_theming_1.withTheme(ObjectTree);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvT2JqZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFFOUIsbURBQTJDO0FBQzNDLHdEQUFrRDtBQUVsRCx5Q0FBMEM7QUFFMUMsc0RBQTBDO0FBUTFDO0lBQXlCLDhCQUErQjtJQUF4RDs7SUFnQ0EsQ0FBQztJQS9CQywyQkFBTSxHQUFOO1FBQ1EsSUFBQSxlQUFtQyxFQUFqQyxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsWUFBa0IsQ0FBQTtRQUV6QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBWSxFQUFFLENBQVM7WUFDMUMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQU0sTUFBTSxHQUNWLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ3ZCLE9BQU8sTUFBRyxDQUNkLENBQUMsQ0FBQyxDQUFDLENBQ0Y7b0JBQ0UsdUNBQWM7b0JBQ2QsOEJBQ0UsS0FBSyxFQUFFOzRCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLHlCQUF5Qjt5QkFDOUMsSUFDQSxPQUFPLENBQ0g7b0JBQ1Asd0NBQWUsQ0FDVixDQUNSLENBQUE7Z0JBRUgsT0FBTyxDQUNMLG9CQUFDLGVBQUksaUJBQVcsUUFBUSxFQUFDLEdBQUcsRUFBRSxDQUFDO29CQUM3QixvQkFBQyxPQUFPLFFBQUUsTUFBTSxDQUFXLENBQ3RCLENBQ1IsQ0FBQTthQUNGO1lBRUQsT0FBTyxvQkFBQyw0QkFBUyxJQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFBO1FBQzdDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUF5QixLQUFLLENBQUMsYUFBYSxHQWdDM0M7QUFFRCxxQkFBZSwyQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBIn0=