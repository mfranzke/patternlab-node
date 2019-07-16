(window.webpackJsonp=window.webpackJsonp||[]).push([["pl-toggle-theme"],{"./src/scripts/components/pl-toggle-theme/pl-toggle-theme.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeToggle", function() { return ThemeToggle; });\n/* harmony import */ var skatejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skatejs */ "./node_modules/skatejs/dist/es/index.js");\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store.js */ "./src/scripts/store.js");\n/* harmony import */ var _actions_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/app.js */ "./src/scripts/actions/app.js");\n/* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-component.js */ "./src/scripts/components/base-component.js");\nvar _class, _class2, _temp;\n\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // connect to the Redux store.\n\n // redux actions needed\n\n\n\nvar ThemeToggle = Object(skatejs__WEBPACK_IMPORTED_MODULE_0__["define"])(_class = (_temp = _class2 =\n/*#__PURE__*/\nfunction (_BaseComponent) {\n  _inherits(ThemeToggle, _BaseComponent);\n\n  function ThemeToggle(self) {\n    var _this;\n\n    _classCallCheck(this, ThemeToggle);\n\n    self = _this = _possibleConstructorReturn(this, _getPrototypeOf(ThemeToggle).call(this, self));\n    _this.useShadow = false;\n    return _possibleConstructorReturn(_this, self);\n  }\n\n  _createClass(ThemeToggle, [{\n    key: "connected",\n    value: function connected() {\n      var state = _store_js__WEBPACK_IMPORTED_MODULE_2__["store"].getState();\n      this.themeMode = state.app.themeMode || \'dark\';\n      _store_js__WEBPACK_IMPORTED_MODULE_2__["store"].dispatch(Object(_actions_app_js__WEBPACK_IMPORTED_MODULE_3__["updateThemeMode"])(this.themeMode));\n    }\n  }, {\n    key: "_stateChanged",\n    value: function _stateChanged(state) {\n      this.themeMode = state.app.themeMode;\n    }\n  }, {\n    key: "render",\n    value: function render(_ref) {\n      var themeMode = _ref.themeMode;\n      var toggleThemeMode = this.themeMode !== \'dark\' ? \'dark\' : \'light\';\n      return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {\n        class: "pl-c-toggle-theme"\n      }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("button", {\n        class: "pl-c-tools__action pl-c-toggle-theme__action",\n        title: "Switch Theme",\n        onClick: function onClick(_) {\n          return _store_js__WEBPACK_IMPORTED_MODULE_2__["store"].dispatch(Object(_actions_app_js__WEBPACK_IMPORTED_MODULE_3__["updateThemeMode"])(toggleThemeMode));\n        }\n      }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", {\n        class: "pl-c-tools__action-text"\n      }, "Switch Theme"), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", {\n        class: "pl-c-tools__action-icon"\n      }, themeMode === \'dark\' ? Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("svg", {\n        xmlns: "http://www.w3.org/2000/svg",\n        width: "20",\n        height: "20",\n        viewBox: "0 0 24 24",\n        fill: "none",\n        stroke: "currentColor",\n        "stroke-width": "2",\n        "stroke-linecap": "round",\n        "stroke-linejoin": "round"\n      }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("circle", {\n        cx: "12",\n        cy: "12",\n        r: "5"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "12",\n        y1: "1",\n        x2: "12",\n        y2: "3"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "12",\n        y1: "21",\n        x2: "12",\n        y2: "23"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "4.22",\n        y1: "4.22",\n        x2: "5.64",\n        y2: "5.64"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "18.36",\n        y1: "18.36",\n        x2: "19.78",\n        y2: "19.78"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "1",\n        y1: "12",\n        x2: "3",\n        y2: "12"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "21",\n        y1: "12",\n        x2: "23",\n        y2: "12"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "4.22",\n        y1: "19.78",\n        x2: "5.64",\n        y2: "18.36"\n      }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("line", {\n        x1: "18.36",\n        y1: "5.64",\n        x2: "19.78",\n        y2: "4.22"\n      })) : Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("svg", {\n        xmlns: "http://www.w3.org/2000/svg",\n        width: "20",\n        height: "20",\n        viewBox: "0 0 24 24",\n        fill: "none",\n        stroke: "currentColor",\n        "stroke-width": "2",\n        "stroke-linecap": "round",\n        "stroke-linejoin": "round"\n      }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("path", {\n        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"\n      })))));\n    }\n  }]);\n\n  return ThemeToggle;\n}(_base_component_js__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]), _defineProperty(_class2, "is", \'pl-toggle-theme\'), _defineProperty(_class2, "props", {\n  themeMode: skatejs__WEBPACK_IMPORTED_MODULE_0__["props"].string\n}), _temp)) || _class;\n\n\n\n//# sourceURL=webpack:///./src/scripts/components/pl-toggle-theme/pl-toggle-theme.js?')}}]);