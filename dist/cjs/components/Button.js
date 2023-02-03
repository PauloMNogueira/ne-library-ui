"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_components_1 = require("styled-components");
var Theme_1 = require("../Theme");
var ButtonComponent_1 = tslib_1.__importDefault(require("./ButtonComponent"));
var Button = function (_a) {
    var onClick = _a.onClick;
    var _b = (0, react_1.useState)(Theme_1.riomarRecifeTheme), theme = _b[0], setTheme = _b[1];
    var updateTheme = function () {
        setTheme(Theme_1.fortalezaTheme);
    };
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(ButtonComponent_1["default"], { onClick: onClick }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { onClick: updateTheme }, "Trocar para tema fortaleza"))));
};
exports["default"] = Button;
//# sourceMappingURL=Button.js.map