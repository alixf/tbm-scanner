module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TBMScanner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TBMScanner = exports.TBMScanner = function (_React$Component) {
	_inherits(TBMScanner, _React$Component);

	function TBMScanner(props) {
		_classCallCheck(this, TBMScanner);

		var _this = _possibleConstructorReturn(this, (TBMScanner.__proto__ || Object.getPrototypeOf(TBMScanner)).call(this, props));

		_this.fetchData = _this.fetchData.bind(_this);
		_this.updateData = _this.fetchData.bind(_this);
		_this.fetchData();
		setInterval(_this.updateData, 1000);
		_this.trips = [];
		_this.stopPoints = [];
		_this.index = 0;
		return _this;
	}

	_createClass(TBMScanner, [{
		key: "fetchData",
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var response, result;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return fetch("https://ws.infotbm.com/ws/1.0/network/line-informations/line:TBC:" + this.props.lineId);

							case 2:
								response = _context.sent;
								_context.next = 5;
								return response.json();

							case 5:
								result = _context.sent;

								this.stopPoints = result.routes[0].stopPoints.map(function (stopPoint) {
									return stopPoint.id.split(":")[3];
								});

							case 7:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function fetchData() {
				return _ref.apply(this, arguments);
			}

			return fetchData;
		}()
	}, {
		key: "updateData",
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var _this2 = this;

				var stopId, response, result, destinationId, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, trip;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (this.stopPoints) {
									_context2.next = 3;
									break;
								}

								console.log("no stop points");
								return _context2.abrupt("return");

							case 3:
								this.index = (this.index + 1) % this.stopPoints.length;
								stopId = this.stopPoints[this.index];
								_context2.next = 7;
								return fetch("https://ws.infotbm.com/ws/1.0/get-realtime-pass/" + stopId + "/" + this.props.lineId);

							case 7:
								response = _context2.sent;
								_context2.next = 10;
								return response.json();

							case 10:
								result = _context2.sent;
								_context2.t0 = regeneratorRuntime.keys(result.destinations);

							case 12:
								if ((_context2.t1 = _context2.t0()).done) {
									_context2.next = 36;
									break;
								}

								destinationId = _context2.t1.value;

								_loop = function _loop(trip) {
									var tripIndex = _this2.trips.findIndex(function (it) {
										return it.trip_id === trip.trip_id;
									});
									if (tripIndex === -1) {
										_this2.trips.push(trip);
										if (_this2.props.onNewBus) {
											_this2.props.onNewBus(trip);
										}
									} else {
										_this2.trips[tripIndex] = trip;
										if (_this2.props.onBusUpdate) {
											_this2.props.onBusUpdate(trip);
										}
									}
								};

								_iteratorNormalCompletion = true;
								_didIteratorError = false;
								_iteratorError = undefined;
								_context2.prev = 18;

								for (_iterator = result.destinations[destinationId][Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									trip = _step.value;

									_loop(trip);
								}
								_context2.next = 26;
								break;

							case 22:
								_context2.prev = 22;
								_context2.t2 = _context2["catch"](18);
								_didIteratorError = true;
								_iteratorError = _context2.t2;

							case 26:
								_context2.prev = 26;
								_context2.prev = 27;

								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}

							case 29:
								_context2.prev = 29;

								if (!_didIteratorError) {
									_context2.next = 32;
									break;
								}

								throw _iteratorError;

							case 32:
								return _context2.finish(29);

							case 33:
								return _context2.finish(26);

							case 34:
								_context2.next = 12;
								break;

							case 36:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this, [[18, 22, 26, 34], [27,, 29, 33]]);
			}));

			function updateData() {
				return _ref2.apply(this, arguments);
			}

			return updateData;
		}()
	}, {
		key: "render",
		value: function render() {
			return null;
		}
	}]);

	return TBMScanner;
}(React.Component);

/***/ })
/******/ ]);