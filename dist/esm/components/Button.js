import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { fortalezaTheme, riomarRecifeTheme } from '../Theme';
import ButtonComponent from './ButtonComponent';
var Button = function (_a) {
    var onClick = _a.onClick;
    var _b = useState(riomarRecifeTheme), theme = _b[0], setTheme = _b[1];
    var updateTheme = function () {
        setTheme(fortalezaTheme);
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(ButtonComponent, { onClick: onClick }),
        React.createElement("div", null,
            React.createElement("button", { onClick: updateTheme }, "Trocar para tema fortaleza"))));
};
export default Button;
//# sourceMappingURL=Button.js.map