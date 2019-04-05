import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  as: 'div'
};
var NavItem = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "children", "as"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-item');
  return React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, bsPrefix)
  }), children);
});
NavItem.displayName = 'NavItem';
NavItem.defaultProps = defaultProps;
export default NavItem;