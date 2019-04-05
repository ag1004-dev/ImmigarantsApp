"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  as: 'div'
};

var Media = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'media');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix)
  }));
});

Media.displayName = 'Media';
Media.defaultProps = defaultProps;
Media.Body = (0, _createWithBsPrefix.default)('media-body');
var _default = Media;
exports.default = _default;
module.exports = exports["default"];