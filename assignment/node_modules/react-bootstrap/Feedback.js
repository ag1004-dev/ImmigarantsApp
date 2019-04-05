"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: _propTypes.default.string.isRequired,
  as: _propTypes.default.elementType
};
var defaultProps = {
  type: 'valid',
  as: 'div'
};

var Feedback = _react.default.forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      className = _ref.className,
      type = _ref.type,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "type"]);
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, type && type + "-feedback")
  }));
});

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
var _default = Feedback;
exports.default = _default;
module.exports = exports["default"];