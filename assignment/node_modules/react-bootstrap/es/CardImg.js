import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  as: 'img',
  variant: null
};
var CardImg = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'card-img');
  return React.createElement(Component, _extends({
    ref: ref,
    className: classNames(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
export default CardImg;