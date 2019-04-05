import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React, { useContext } from 'react';
import warning from 'warning';
import Col from './Col';
import FormContext from './FormContext';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  column: false,
  srOnly: false
};
var FormLabel = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = useContext(FormContext),
      controlId = _useContext.controlId;

  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
  var classes = classNames(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  if (column) return React.createElement(Col, _extends({}, props, {
    className: classes,
    as: "label"
  }));
  process.env.NODE_ENV !== "production" ? warning(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  return (// eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    React.createElement("label", _extends({}, props, {
      htmlFor: htmlFor || controlId,
      ref: ref,
      className: classes
    }))
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
export default FormLabel;