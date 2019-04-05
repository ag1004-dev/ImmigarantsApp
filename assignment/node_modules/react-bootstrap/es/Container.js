import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  as: 'div',
  fluid: false
};
var Container = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      Component = _ref.as,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "fluid", "as", "className"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'container');
  return React.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classNames(className, fluid ? prefix + "-fluid" : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
export default Container;