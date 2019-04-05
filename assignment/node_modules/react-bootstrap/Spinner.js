"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var Spinner =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Spinner, _React$Component);

  function Spinner() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Spinner.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        animation = _this$props.animation,
        size = _this$props.size,
        children = _this$props.children,
        as = _this$props.as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "variant", "animation", "size", "children", "as", "className"]);
    var Component = as;
    var bsSpinnerPrefix = bsPrefix + "-" + animation;
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsSpinnerPrefix, size && bsSpinnerPrefix + "-" + size, variant && "text-" + variant)
    }), children);
  };

  return Spinner;
}(_react.default.Component);

Spinner.defaultProps = {
  as: 'div'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Spinner, 'spinner');

exports.default = _default;
module.exports = exports["default"];