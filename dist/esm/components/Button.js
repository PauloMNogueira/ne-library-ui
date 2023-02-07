import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fortalezaTheme } from '../Theme/fortalezaTheme';
import ButtonComponent from './ButtonComponent';
var Button = function (_a) {
    // const theme = StartTheme().getTheme()
    var onClick = _a.onClick;
    return (React.createElement(ThemeProvider, { theme: fortalezaTheme },
        React.createElement(ButtonComponent, { onClick: onClick }, "CLIQUE")));
};
export default Button;
//# sourceMappingURL=Button.js.map