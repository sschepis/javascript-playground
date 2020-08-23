"use strict";
exports.__esModule = true;
var theme_1 = require("./theme");
/**
 * Return themed log-method style
 * @param style The style
 * @param type The method
 */
var Themed = function (style, method, styles) {
    return styles["LOG_" + method.toUpperCase() + "_" + style.toUpperCase()] ||
        styles["LOG_" + style.toUpperCase()];
};
/**
 * console-feed
 */
exports.Root = theme_1["default"]('div')({
    wordBreak: 'break-word',
    width: '100%'
});
/**
 * console-message
 */
exports.Message = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        position: 'relative',
        display: 'flex',
        color: Themed('color', method, styles),
        backgroundColor: Themed('background', method, styles),
        borderTop: "1px solid " + Themed('border', method, styles),
        borderBottom: "1px solid " + Themed('border', method, styles),
        marginTop: -1,
        marginBottom: +/^warn|error$/.test(method),
        paddingLeft: 10,
        boxSizing: 'border-box',
        '& *': {
            verticalAlign: 'top',
            boxSizing: 'border-box',
            fontFamily: styles.BASE_FONT_FAMILY,
            whiteSpace: 'pre-wrap',
            fontSize: styles.BASE_FONT_SIZE
        },
        '& a': {
            color: 'rgb(177, 177, 177)'
        }
    });
});
/**
 * message-icon
 */
exports.Icon = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        width: styles.LOG_ICON_WIDTH,
        height: styles.LOG_ICON_HEIGHT,
        backgroundImage: Themed('icon', method, styles),
        backgroundRepeat: 'no-repeat',
        backgroundSize: styles.LOG_ICON_BACKGROUND_SIZE,
        backgroundPosition: '50% 50%'
    });
});
/**
 * console-content
 */
exports.Content = theme_1["default"]('div')(function (_a) {
    var styles = _a.theme.styles;
    return ({
        clear: 'right',
        position: 'relative',
        padding: styles.PADDING,
        marginLeft: 15,
        minHeight: 18,
        flex: 'auto',
        width: 'calc(100% - 15px)'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2VsZW1lbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE0QjtBQUU1Qjs7OztHQUlHO0FBQ0gsSUFBTSxNQUFNLEdBQUcsVUFDYixLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQWtDO0lBRWxDLE9BQUEsTUFBTSxDQUFDLFNBQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUksQ0FBQztRQUM1RCxNQUFNLENBQUMsU0FBTyxLQUFLLENBQUMsV0FBVyxFQUFJLENBQUM7QUFEcEMsQ0FDb0MsQ0FBQTtBQUV0Qzs7R0FFRztBQUNVLFFBQUEsSUFBSSxHQUFHLGtCQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsU0FBUyxFQUFFLFlBQVk7SUFDdkIsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsT0FBTyxHQUFHLGtCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUE2QjtRQUEzQixhQUF5QixFQUFoQixrQkFBTSxFQUFFLGtCQUFNO0lBQVMsT0FBQSxDQUFDO1FBQ3ZFLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN0QyxlQUFlLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3JELFNBQVMsRUFBRSxlQUFhLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRztRQUMxRCxZQUFZLEVBQUUsZUFBYSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUc7UUFDN0QsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNiLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLFdBQVcsRUFBRSxFQUFFO1FBQ2YsU0FBUyxFQUFFLFlBQVk7UUFDdkIsS0FBSyxFQUFFO1lBQ0wsYUFBYSxFQUFFLEtBQUs7WUFDcEIsU0FBUyxFQUFFLFlBQVk7WUFDdkIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDbkMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxjQUFjO1NBQ2hDO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLG9CQUFvQjtTQUM1QjtLQUNGLENBQUM7QUFyQnNFLENBcUJ0RSxDQUFDLENBQUE7QUFFSDs7R0FFRztBQUNVLFFBQUEsSUFBSSxHQUFHLGtCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUE2QjtRQUEzQixhQUF5QixFQUFoQixrQkFBTSxFQUFFLGtCQUFNO0lBQVMsT0FBQSxDQUFDO1FBQ3BFLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYztRQUM1QixNQUFNLEVBQUUsTUFBTSxDQUFDLGVBQWU7UUFDOUIsZUFBZSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUMvQyxnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCLGNBQWMsRUFBRSxNQUFNLENBQUMsd0JBQXdCO1FBQy9DLGtCQUFrQixFQUFFLFNBQVM7S0FDOUIsQ0FBQztBQVBtRSxDQU9uRSxDQUFDLENBQUE7QUFFSDs7R0FFRztBQUNVLFFBQUEsT0FBTyxHQUFHLGtCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFxQjtRQUFWLHdCQUFNO0lBQVMsT0FBQSxDQUFDO1FBQy9ELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1FBQ3ZCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxtQkFBbUI7S0FDM0IsQ0FBQztBQVI4RCxDQVE5RCxDQUFDLENBQUEifQ==