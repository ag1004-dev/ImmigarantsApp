import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import createWithBsPrefix from './utils/createWithBsPrefix';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  as: 'div'
};
var Media = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'media');
  return React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, prefix)
  }));
});
Media.displayName = 'Media';
Media.defaultProps = defaultProps;
Media.Body = createWithBsPrefix('media-body');
export default Media;