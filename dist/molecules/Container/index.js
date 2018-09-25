'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents2.default.div`
  margin-left: auto;
  margin-right: auto;
  ${_styledSystem.maxWidth};
`;

Container.propTypes = {
  maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array])
};

Container.defaultProps = {
  maxWidth: _theme2.default.maxContainerWidth
};

Container.displayName = 'Container';
exports.default = Container;