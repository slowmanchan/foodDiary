webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(159);
	
	var _reactBootstrap = __webpack_require__(217);
	
	var _reactRouterBootstrap = __webpack_require__(499);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.hashHistory },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Finally something that works'
	          ),
	          _react2.default.createElement(_reactRouter.Route, { path: '/', component: Home }),
	          _react2.default.createElement(_reactRouter.Route, { path: '/about', component: About }),
	          _react2.default.createElement(_reactRouter.Route, { path: '/diary', component: Diary })
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	var Home = function (_Component2) {
	  _inherits(Home, _Component2);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(NavBar, null),
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          { fluid: true },
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12 },
	              _react2.default.createElement(
	                _reactBootstrap.Jumbotron,
	                null,
	                _react2.default.createElement(
	                  'h1',
	                  null,
	                  'The Foodiary'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'The beginnings of a great food diary'
	                ),
	                _react2.default.createElement(
	                  _reactBootstrap.Button,
	                  { bsStyle: 'success' },
	                  'Do it'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react.Component);
	
	var About = function (_Component3) {
	  _inherits(About, _Component3);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	  }
	
	  _createClass(About, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(NavBar, null),
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12 },
	              _react2.default.createElement(
	                _reactBootstrap.PageHeader,
	                null,
	                'About'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'This app has the good stuff'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return About;
	}(_react.Component);
	
	var Diary = function (_Component4) {
	  _inherits(Diary, _Component4);
	
	  function Diary() {
	    _classCallCheck(this, Diary);
	
	    return _possibleConstructorReturn(this, (Diary.__proto__ || Object.getPrototypeOf(Diary)).apply(this, arguments));
	  }
	
	  _createClass(Diary, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(NavBar, null),
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Diary'
	        )
	      );
	    }
	  }]);
	
	  return Diary;
	}(_react.Component);
	
	var NavBar = function (_Component5) {
	  _inherits(NavBar, _Component5);
	
	  function NavBar() {
	    _classCallCheck(this, NavBar);
	
	    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	  }
	
	  _createClass(NavBar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Navbar,
	        { collapseOnSelect: true },
	        _react2.default.createElement(
	          _reactBootstrap.Navbar.Header,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Navbar.Brand,
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/' },
	              'Foodiary'
	            )
	          ),
	          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Navbar.Collapse,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            null,
	            _react2.default.createElement(
	              _reactRouterBootstrap.LinkContainer,
	              { to: '/' },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                null,
	                'Home'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterBootstrap.LinkContainer,
	              { to: '/about' },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                null,
	                'About'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterBootstrap.LinkContainer,
	              { to: '/diary' },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                null,
	                'Diary'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return NavBar;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.LinkContainer = exports.IndexLinkContainer = undefined;
	
	var _IndexLinkContainer2 = __webpack_require__(500);
	
	var _IndexLinkContainer3 = _interopRequireDefault(_IndexLinkContainer2);
	
	var _LinkContainer2 = __webpack_require__(501);
	
	var _LinkContainer3 = _interopRequireDefault(_LinkContainer2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.IndexLinkContainer = _IndexLinkContainer3.default;
	exports.LinkContainer = _LinkContainer3.default;

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LinkContainer = __webpack_require__(501);
	
	var _LinkContainer2 = _interopRequireDefault(_LinkContainer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	// Don't use a stateless function, to allow users to set a ref.
	/* eslint-disable react/prefer-stateless-function */
	var IndexLinkContainer = function (_React$Component) {
	  _inherits(IndexLinkContainer, _React$Component);
	
	  function IndexLinkContainer() {
	    _classCallCheck(this, IndexLinkContainer);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  IndexLinkContainer.prototype.render = function render() {
	    return _react2.default.createElement(_LinkContainer2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };
	
	  return IndexLinkContainer;
	}(_react2.default.Component);
	/* eslint-enable react/prefer-stateless-function */
	
	exports.default = IndexLinkContainer;
	module.exports = exports['default'];

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // This is largely taken from react-router/lib/Link.
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	function createLocationDescriptor(to, query, hash, state) {
	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }
	
	  return to;
	}
	
	var propTypes = {
	  onlyActiveOnIndex: _react2.default.PropTypes.bool.isRequired,
	  to: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired,
	  query: _react2.default.PropTypes.string,
	  hash: _react2.default.PropTypes.string,
	  state: _react2.default.PropTypes.object,
	  action: _react2.default.PropTypes.oneOf(['push', 'replace']).isRequired,
	  onClick: _react2.default.PropTypes.func,
	  active: _react2.default.PropTypes.bool,
	  target: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.node.isRequired
	};
	
	var contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	var defaultProps = {
	  onlyActiveOnIndex: false,
	  action: 'push'
	};
	
	var LinkContainer = function (_React$Component) {
	  _inherits(LinkContainer, _React$Component);
	
	  function LinkContainer() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LinkContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onClick = function (event) {
	      var _this$props = _this.props;
	      var to = _this$props.to;
	      var query = _this$props.query;
	      var hash = _this$props.hash;
	      var state = _this$props.state;
	      var children = _this$props.children;
	      var onClick = _this$props.onClick;
	      var target = _this$props.target;
	      var action = _this$props.action;
	
	      if (children.props.onClick) {
	        children.props.onClick(event);
	      }
	
	      if (onClick) {
	        onClick(event);
	      }
	
	      if (target || event.defaultPrevented || isModifiedEvent(event) || !isLeftClickEvent(event)) {
	        return;
	      }
	
	      event.preventDefault();
	
	      _this.context.router[action](createLocationDescriptor(to, query, hash, state));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  LinkContainer.prototype.render = function render() {
	    var router = this.context.router;
	    var _props = this.props;
	    var onlyActiveOnIndex = _props.onlyActiveOnIndex;
	    var to = _props.to;
	    var children = _props.children;
	
	    var props = _objectWithoutProperties(_props, ['onlyActiveOnIndex', 'to', 'children']);
	
	    props.onClick = this.onClick;
	
	    // Ignore if rendered outside Router context; simplifies unit testing.
	    if (router) {
	      props.href = router.createHref(to);
	
	      if (props.active == null) {
	        props.active = router.isActive(to, onlyActiveOnIndex);
	      }
	    }
	
	    return _react2.default.cloneElement(_react2.default.Children.only(children), props);
	  };
	
	  return LinkContainer;
	}(_react2.default.Component);
	
	LinkContainer.propTypes = propTypes;
	LinkContainer.contextTypes = contextTypes;
	LinkContainer.defaultProps = defaultProps;
	
	exports.default = LinkContainer;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=app.bundle.js.map