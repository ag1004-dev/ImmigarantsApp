import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: PropTypes.string.isRequired,
  as: PropTypes.elementType
};
var defaultProps = {
  type: 'valid',
  as: 'div'
};
var Feedback = React.forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      className = _ref.className,
      type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "className", "type"]);

  return React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, type && type + "-feedback")
  }));
});
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
export default Feedback;