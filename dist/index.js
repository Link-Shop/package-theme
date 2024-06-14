"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDefaultTheme = exports.GlobalStyle = void 0;
var styled_components_1 = require("styled-components");
var lodash_1 = require("lodash");
var themes_1 = require("./themes");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    font-family: ", ";\n    background-color: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    color: ", ";\n  }\n\n  h1 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin: ", ";\n  }\n\n  h2 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin: ", ";\n  }\n\n  /* Add similar styles for h3, h4, h5, h6, p, and other elements as needed */\n\n  button {\n    padding: ", ";\n    margin: ", ";\n    border: ", ";\n    border-radius: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    cursor: ", ";\n    background-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n\n  input, textarea, select {\n    padding: ", ";\n    margin: ", ";\n    border: ", ";\n    border-radius: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n\n    &:focus {\n      border-color: ", ";\n      outline: ", ";\n      box-shadow: ", ";\n    }\n  }\n"], ["\n  body {\n    font-family: ", ";\n    background-color: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    color: ", ";\n  }\n\n  h1 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin: ", ";\n  }\n\n  h2 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin: ", ";\n  }\n\n  /* Add similar styles for h3, h4, h5, h6, p, and other elements as needed */\n\n  button {\n    padding: ", ";\n    margin: ", ";\n    border: ", ";\n    border-radius: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    cursor: ", ";\n    background-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n\n  input, textarea, select {\n    padding: ", ";\n    margin: ", ";\n    border: ", ";\n    border-radius: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n\n    &:focus {\n      border-color: ", ";\n      outline: ", ";\n      box-shadow: ", ";\n    }\n  }\n"])), function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.p) === null || _c === void 0 ? void 0 : _c.fontFamily) || 'sans-serif';
}, function (_a) {
    var _b;
    var theme = _a.theme, overrides = _a.overrides;
    return (overrides === null || overrides === void 0 ? void 0 : overrides.background) || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.background) || '#ffffff';
}, function (_a) {
    var _b;
    var theme = _a.theme, overrides = _a.overrides;
    return (overrides === null || overrides === void 0 ? void 0 : overrides.text) || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.text) || '#000000';
}, function (_a) {
    var _b;
    var theme = _a.theme, overrides = _a.overrides;
    return (overrides === null || overrides === void 0 ? void 0 : overrides.text) || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.text);
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h1) === null || _c === void 0 ? void 0 : _c.fontSize) || '2rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h1) === null || _c === void 0 ? void 0 : _c.fontWeight) || 700;
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h1) === null || _c === void 0 ? void 0 : _c.lineHeight) || '1.2';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h1) === null || _c === void 0 ? void 0 : _c.margin) || '0 0 1rem 0';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h2) === null || _c === void 0 ? void 0 : _c.fontSize) || '1.75rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h2) === null || _c === void 0 ? void 0 : _c.fontWeight) || 600;
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h2) === null || _c === void 0 ? void 0 : _c.lineHeight) || '1.3';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _b === void 0 ? void 0 : _b.h2) === null || _c === void 0 ? void 0 : _c.margin) || '0 0 1rem 0';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.padding) || '0.75rem 1.25rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.margin) || '0.5rem 0';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.border) || 'none';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.borderRadius) || '0.25rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.fontSize) || '1rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.fontWeight) || 600;
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.cursor) || 'pointer';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.backgroundColor) || '#007BFF';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.color) || '#ffffff';
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return ((_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.hover) === null || _d === void 0 ? void 0 : _d.backgroundColor) || '#0056b3';
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return ((_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.hover) === null || _d === void 0 ? void 0 : _d.color) || '#ffffff';
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return ((_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.active) === null || _d === void 0 ? void 0 : _d.backgroundColor) || '#004085';
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return ((_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.buttons) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.active) === null || _d === void 0 ? void 0 : _d.color) || '#ffffff';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.padding) || '0.5rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.margin) || '0.5rem 0';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.border) || '1px solid #ced4da';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.borderRadius) || '0.25rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.fontSize) || '1rem';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.fontWeight) || 400;
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return ((_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.borderColor) || '#80bdff';
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return ((_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.outline) || 'none';
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return ((_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.inputs) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.boxShadow) || '0 0 0 0.2rem rgba(0,123,255,.25)';
});
var fetchDefaultTheme = function (theme) {
    return (0, lodash_1.isObject)(theme) ? theme : themes_1.themes[theme];
};
exports.fetchDefaultTheme = fetchDefaultTheme;
var templateObject_1;
