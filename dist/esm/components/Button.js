import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StartTheme } from '../Theme/start';
import ButtonComponent from './ButtonComponent';
var Button = function (_a) {
    var onClick = _a.onClick;
    var theme = StartTheme().getTheme();
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(ButtonComponent, { onClick: onClick })));
};
export default Button;
//# sourceMappingURL=Button.js.map