"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = require("styled-components");
var fortalezaTheme_1 = require("../Theme/fortalezaTheme");
var ButtonComponent_1 = tslib_1.__importDefault(require("./ButtonComponent"));
var Button = function (_a) {
    // const theme = StartTheme().getTheme()
    var onClick = _a.onClick;
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: fortalezaTheme_1.fortalezaTheme },
        react_1["default"].createElement(ButtonComponent_1["default"], { onClick: onClick }, "CLIQUE")));
};
exports["default"] = Button;
//# sourceMappingURL=Button.js.map