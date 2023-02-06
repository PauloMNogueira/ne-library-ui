"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = require("styled-components");
var start_1 = require("../Theme/start");
var ButtonComponent_1 = tslib_1.__importDefault(require("./ButtonComponent"));
var Button = function (_a) {
    var onClick = _a.onClick;
    var theme = (0, start_1.StartTheme)().getTheme();
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(ButtonComponent_1["default"], { onClick: onClick })));
};
exports["default"] = Button;
//# sourceMappingURL=Button.js.map