import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div'
};
var ButtonGroup = React.forwardRef(function (props, ref) {
  var bsPrefix = props.bsPrefix,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      className = props.className,
      Component = props.as,
      rest = _objectWithoutPropertiesLoose(props, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'btn-group');
  var baseClass = prefix;
  if (vertical) baseClass = prefix + "-vertical";
  return React.createElement(Component, _extends({}, rest, {
    ref: ref,
    className: classNames(className, baseClass, size && prefix + "-" + size, toggle && prefix + "-toggle")
  }));
});
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps;
export default ButtonGroup;