(window.webpackJsonp=window.webpackJsonp||[]).push([["pl-layout"],{"./src/scripts/components/pl-layout/pl-layout.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });\n/* harmony import */ var skatejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skatejs */ "./node_modules/skatejs/dist/es/index.js");\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store.js */ "./src/scripts/store.js");\n/* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component.js */ "./src/scripts/components/base-component.js");\n/* harmony import */ var iframe_resizer_js_iframeResizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! iframe-resizer/js/iframeResizer.js */ "./node_modules/iframe-resizer/js/iframeResizer.js");\n/* harmony import */ var iframe_resizer_js_iframeResizer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer_js_iframeResizer_js__WEBPACK_IMPORTED_MODULE_4__);\nvar _class, _class2, _temp;\n\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");\n\n // connect to redux\n\n\n\niframe_resizer_js_iframeResizer_js__WEBPACK_IMPORTED_MODULE_4___default()({\n  checkOrigin: false,\n  scrolling: false,\n  heightCalculationMethod: \'documentElementOffset\',\n  // most accurate calculation in testing available options\n  initCallback: function initCallback() {\n    document.querySelector(\'.pl-js-iframe\').classList.add(\'is-ready\'); // toggles class that removes initial min-height styling\n  }\n});\n\nvar Layout = Object(skatejs__WEBPACK_IMPORTED_MODULE_0__["define"])(_class = (_temp = _class2 =\n/*#__PURE__*/\nfunction (_BaseComponent) {\n  _inherits(Layout, _BaseComponent);\n\n  function Layout(self) {\n    var _this;\n\n    _classCallCheck(this, Layout);\n\n    self = _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, self));\n    _this.useShadow = false;\n    return _possibleConstructorReturn(_this, self);\n  }\n\n  _createClass(Layout, [{\n    key: "connected",\n    value: function connected() {\n      var state = _store_js__WEBPACK_IMPORTED_MODULE_2__["store"].getState();\n      this.layoutMode = state.app.layoutMode;\n      this.themeMode = state.app.themeMode;\n    }\n  }, {\n    key: "_stateChanged",\n    value: function _stateChanged(state) {\n      var _classNames;\n\n      this.layoutMode = state.app.layoutMode;\n      this.themeMode = state.app.themeMode;\n      var classes = classNames((_classNames = {}, _defineProperty(_classNames, "pl-c-body--theme-".concat(this.themeMode), this.themeMode !== undefined), _defineProperty(_classNames, "pl-c-body--theme-".concat(this.layoutMode === \'vertical\' ? \'sidebar\' : \'horizontal\'), this.layoutMode !== undefined), _classNames));\n      this.className = classes;\n    }\n  }]);\n\n  return Layout;\n}(_base_component_js__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]), _defineProperty(_class2, "is", \'pl-layout\'), _defineProperty(_class2, "props", {\n  layoutMode: skatejs__WEBPACK_IMPORTED_MODULE_0__["props"].string,\n  themeMode: skatejs__WEBPACK_IMPORTED_MODULE_0__["props"].string\n}), _temp)) || _class;\n\n\n\n//# sourceURL=webpack:///./src/scripts/components/pl-layout/pl-layout.js?')}}]);