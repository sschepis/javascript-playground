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
var emotion_theming_1 = require("emotion-theming");
var React = require("react");
var react_inspector_1 = require("react-inspector");
var elements_1 = require("./elements");
var CustomObjectLabel = function (_a) {
    var name = _a.name, data = _a.data, _b = _a.isNonenumerable, isNonenumerable = _b === void 0 ? false : _b;
    return (React.createElement("span", null,
        typeof name === 'string' ? (React.createElement(react_inspector_1.ObjectName, { name: name, dimmed: isNonenumerable })) : (React.createElement(react_inspector_1.ObjectPreview, { data: name })),
        React.createElement("span", null, ": "),
        React.createElement(react_inspector_1.ObjectValue, { object: data })));
};
var CustomInspector = /** @class */ (function (_super) {
    __extends(CustomInspector, _super);
    function CustomInspector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomInspector.prototype.render = function () {
        var _a = this.props, data = _a.data, theme = _a.theme;
        var styles = theme.styles, method = theme.method;
        var dom = data instanceof HTMLElement;
        var table = method === 'table';
        return (React.createElement(elements_1.Root, { "data-type": table ? 'table' : dom ? 'html' : 'object' }, table ? (React.createElement(elements_1.Table, null,
            React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles, table: true })),
            React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles })))) : dom ? (React.createElement(elements_1.HTML, null,
            React.createElement(react_inspector_1.DOMInspector, __assign({}, this.props, { theme: styles })))) : (React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles, nodeRenderer: this.nodeRenderer.bind(this) })))));
    };
    CustomInspector.prototype.getCustomNode = function (data) {
        var styles = this.props.theme.styles;
        var constructor = data && data.constructor ? data.constructor.name : null;
        if (constructor === 'Function')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                React.createElement(react_inspector_1.ObjectPreview, { data: data }), " {",
                React.createElement("span", { style: { color: 'rgb(181, 181, 181)' } }, data.body), "}"));
        if (constructor === 'Promise')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                "Promise ", "{",
                React.createElement("span", { style: { opacity: 0.6 } }, "<pending>"), "}"));
        if (data instanceof HTMLElement)
            return (React.createElement(elements_1.HTML, null,
                React.createElement(react_inspector_1.DOMInspector, { data: data, theme: styles })));
        return null;
    };
    CustomInspector.prototype.nodeRenderer = function (props) {
        var depth = props.depth, name = props.name, data = props.data, isNonenumerable = props.isNonenumerable;
        // Root
        if (depth === 0) {
            var customNode_1 = this.getCustomNode(data);
            return customNode_1 || React.createElement(react_inspector_1.ObjectRootLabel, { name: name, data: data });
        }
        if (name === 'constructor')
            return (React.createElement(elements_1.Constructor, null,
                React.createElement(react_inspector_1.ObjectLabel, { name: "<constructor>", data: data.name, isNonenumerable: isNonenumerable })));
        var customNode = this.getCustomNode(data);
        return customNode ? (React.createElement(elements_1.Root, null,
            React.createElement(react_inspector_1.ObjectName, { name: name }),
            React.createElement("span", null, ": "),
            customNode)) : (React.createElement(CustomObjectLabel, { name: name, data: data, isNonenumerable: isNonenumerable }));
    };
    return CustomInspector;
}(React.PureComponent));
exports["default"] = emotion_theming_1.withTheme(CustomInspector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBMkM7QUFDM0MsNkJBQThCO0FBQzlCLG1EQVF3QjtBQUd4Qix1Q0FBMkQ7QUFPM0QsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEVBQXVDO1FBQXJDLGNBQUksRUFBRSxjQUFJLEVBQUUsdUJBQXVCLEVBQXZCLDRDQUF1QjtJQUFPLE9BQUEsQ0FDckU7UUFDRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQzFCLG9CQUFDLDRCQUFVLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxHQUFJLENBQ3BELENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsK0JBQWEsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLENBQzlCO1FBQ0QsdUNBQWU7UUFDZixvQkFBQyw2QkFBVyxJQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUksQ0FDeEIsQ0FDUjtBQVZzRSxDQVV0RSxDQUFBO0FBRUQ7SUFBOEIsbUNBQStCO0lBQTdEOztJQWtHQSxDQUFDO0lBakdDLGdDQUFNLEdBQU47UUFDUSxJQUFBLGVBQTRCLEVBQTFCLGNBQUksRUFBRSxnQkFBb0IsQ0FBQTtRQUMxQixJQUFBLHFCQUFNLEVBQUUscUJBQU0sQ0FBVTtRQUVoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLFlBQVksV0FBVyxDQUFBO1FBQ3ZDLElBQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxPQUFPLENBQUE7UUFFaEMsT0FBTyxDQUNMLG9CQUFDLGVBQUksaUJBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQ3ZELEtBQUss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