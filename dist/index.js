'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by OXOYO on 2019/4/30.
 *
 * XBW
 */

var axios = require('axios');
var config = require('./config');

exports = module.exports = function (options) {
  var _t = this;

  _t.name = config.name;
  _t.version = config.version;
  _t.options = (0, _extends3.default)({}, config.options, {
    options: options
  });
  _t.params = config.params;
  _t.api = _t.options.host + '/' + _t.options.api;
  var handleResult = function handleResult(list) {
    var arr = [];
    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i];
      arr[i] = (0, _extends3.default)({}, item, {
        url: _t.options.host + item.url
      });
    }
    return arr;
  };
  _t.getToday = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get(_t.api, {
                params: (0, _extends3.default)({}, _t.params.today)
              });

            case 2:
              res = _context.sent;

              if (!(res.status === 200 && res.data)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', handleResult(res.data.images || []));

            case 5:
              return _context.abrupt('return', null);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
  _t.getTomorrow = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(params) {
      var res;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get(_t.api, {
                params: (0, _extends3.default)({}, _t.params.tomorrow)
              });

            case 2:
              res = _context2.sent;

              if (!(res.status === 200 && res.data)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt('return', handleResult(res.data.images || []));

            case 5:
              return _context2.abrupt('return', null);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  _t.getWeek = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(params) {
      var res;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get(_t.api, {
                params: (0, _extends3.default)({}, _t.params.week, params)
              });

            case 2:
              res = _context3.sent;

              if (!(res.status === 200 && res.data)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt('return', handleResult(res.data.images || []));

            case 5:
              return _context3.abrupt('return', null);

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};