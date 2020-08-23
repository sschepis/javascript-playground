"use strict";
exports.__esModule = true;
// Sandbox HTML elements
var sandbox = document.implementation.createHTMLDocument('sandbox');
function objectifyAttributes(element) {
    var data = {};
    for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
        var attribute = _a[_i];
        data[attribute.name] = attribute.value;
    }
    return data;
}
/**
 * Serialize a HTML element into JSON
 */
exports["default"] = {
    type: 'HTMLElement',
    shouldTransform: function (type, obj) {
        return (obj &&
            obj.children &&
            typeof obj.innerHTML === 'string' &&
            typeof obj.tagName === 'string');
    },
    toSerializable: function (element) {
        return {
            tagName: element.tagName.toLowerCase(),
            attributes: objectifyAttributes(element),
            innerHTML: element.innerHTML
        };
    },
    fromSerializable: function (data) {
        try {
            var element = sandbox.createElement(data.tagName);
            element.innerHTML = data.innerHTML;
            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
                var attribute = _a[_i];
                try {
                    element.setAttribute(attribute, data.attributes[attribute]);
                }
                catch (e) { }
            }
            return element;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vSFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBVXJFLFNBQVMsbUJBQW1CLENBQUMsT0FBWTtJQUN2QyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUE7SUFDZixLQUFzQixVQUFrQixFQUFsQixLQUFBLE9BQU8sQ0FBQyxVQUFVLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7UUFBckMsSUFBSSxTQUFTLFNBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFBO0tBQ3ZDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxhQUFhO0lBQ25CLGVBQWUsRUFBZixVQUFnQixJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLENBQ0wsR0FBRztZQUNILEdBQUcsQ0FBQyxRQUFRO1lBQ1osT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7WUFDakMsT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FDaEMsQ0FBQTtJQUNILENBQUM7SUFDRCxjQUFjLEVBQWQsVUFBZSxPQUFvQjtRQUNqQyxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1NBQ2xCLENBQUE7SUFDZCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQWE7UUFDNUIsSUFBSTtZQUNGLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQTtZQUNsRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7WUFDbEMsS0FBc0IsVUFBNEIsRUFBNUIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBNUIsY0FBNEIsRUFBNUIsSUFBNEIsRUFBRTtnQkFBL0MsSUFBSSxTQUFTLFNBQUE7Z0JBQ2hCLElBQUk7b0JBQ0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO2lCQUM1RDtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO2FBQ2Y7WUFDRCxPQUFPLE9BQU8sQ0FBQTtTQUNmO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGLENBQUEifQ==