import PropTypes from 'prop-types';
import React from 'react';
var propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
var defaultProps = {
  label: 'Close'
};
var CloseButton = React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick;
  return React.createElement("button", {
    ref: ref,
    type: "button",
    className: "close",
    onClick: onClick
  }, React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), React.createElement("span", {
    className: "sr-only"
  }, label));
});
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
export default CloseButton;