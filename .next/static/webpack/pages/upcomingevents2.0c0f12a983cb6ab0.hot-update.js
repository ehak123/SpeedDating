"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upcomingevents2",{

/***/ "./components/userview.js":
/*!********************************!*\
  !*** ./components/userview.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageHeader\": function() { return /* binding */ PageHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/userview.module.css */ \"./styles/userview.module.css\");\n/* harmony import */ var _styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction PageHeader() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), isOpen = ref[0], setIsOpen = ref[1];\n    var openMenu = function() {\n        return setIsOpen(!isOpen);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navbar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navlogo),\n                    children: \"[BrandLogo]\"\n                }, void 0, false, {\n                    fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: isOpen === false ? (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navmenu) : (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navmenu) + ' ' + (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().active),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navitem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navlink),\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navitem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navlink),\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navitem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().navlink),\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: isOpen === false ? (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().hamburger) : (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().hamburger) + ' ' + (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().active),\n                    onClick: openMenu,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().bar)\n                        }, void 0, false, {\n                            fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().bar)\n                        }, void 0, false, {\n                            fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_userview_module_css__WEBPACK_IMPORTED_MODULE_2___default().bar)\n                        }, void 0, false, {\n                            fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nonameagent/SpeedDating/components/userview.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_s(PageHeader, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = PageHeader;\nvar _c;\n$RefreshReg$(_c, \"PageHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJ2aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ087QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxTQUFTRyxVQUFVLEdBQUcsQ0FBQzs7SUFFNUIsR0FBSyxDQUF1QkgsR0FBcUIsa0JBQXJCQSxxREFBYyxDQUFDLEtBQUssT0FBekNJLE1BQU0sR0FBZUosR0FBcUIsS0FBbENLLFNBQVMsR0FBSUwsR0FBcUI7SUFDakQsR0FBSyxDQUFDTSxRQUFRLEdBQUUsUUFBUTtRQUFIRCxNQUFNLENBQU5BLFNBQVMsRUFBRUQsTUFBTTs7SUFDdEMsTUFBTSw2RUFDSEcsQ0FBTTtRQUFDQyxTQUFTLEVBQUVOLDJFQUFXOzhGQUM3Qk8sQ0FBRztZQUFDRCxTQUFTLEVBQUVOLDJFQUFXOzs0RkFDdEJTLENBQUM7b0JBQUNILFNBQVMsRUFBRU4sNEVBQVk7OEJBQUUsQ0FBVzs7Ozs7OzRGQUN4Q1csQ0FBRTtvQkFBQ0wsU0FBUyxFQUFFSixNQUFNLEtBQUssS0FBSyxHQUMzQkYsNEVBQVksR0FBR0EsNEVBQVksR0FBRyxDQUFHLEtBQUdBLDJFQUFXOztvR0FDaERjLENBQUU7NEJBQUNSLFNBQVMsRUFBRU4sNEVBQVk7a0hBQ3RCUyxDQUFDO2dDQUFDSCxTQUFTLEVBQUVOLDRFQUFZOzBDQUFFLENBQUk7Ozs7Ozs7Ozs7O29HQUVuQ2MsQ0FBRTs0QkFBQ1IsU0FBUyxFQUFFTiw0RUFBWTtrSEFFdEJTLENBQUM7Z0NBQUNILFNBQVMsRUFBRU4sNEVBQVk7MENBQUUsQ0FBSzs7Ozs7Ozs7Ozs7b0dBR3BDYyxDQUFFOzRCQUFDUixTQUFTLEVBQUVOLDRFQUFZO2tIQUV0QlMsQ0FBQztnQ0FBQ0gsU0FBUyxFQUFFTiw0RUFBWTswQ0FBRSxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFJeENpQixDQUFNO29CQUFDWCxTQUFTLEVBQUVKLE1BQU0sS0FBSyxLQUFLLEdBQUdGLDhFQUFjLEdBQUdBLDhFQUFjLEdBQUcsQ0FBRyxLQUFHQSwyRUFBVztvQkFDckVtQixPQUFPLEVBQUdmLFFBQVE7O29HQUVuQ2dCLENBQUk7NEJBQUNkLFNBQVMsRUFBRU4sd0VBQVE7Ozs7OztvR0FDeEJvQixDQUFJOzRCQUFDZCxTQUFTLEVBQUVOLHdFQUFROzs7Ozs7b0dBQ3hCb0IsQ0FBSTs0QkFBQ2QsU0FBUyxFQUFFTix3RUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakMsQ0FBQztHQWxDZUMsVUFBVTtLQUFWQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlcnZpZXcuanM/MzcyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlciBmcm9tICcuLi9zdHlsZXMvdXNlcnZpZXcubW9kdWxlLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIoKSB7XG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3Blbk1lbnU9ICgpPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXt1c2VyLmhlYWRlcn0+XG4gICAgPG5hdiBjbGFzc05hbWU9e3VzZXIubmF2YmFyfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXt1c2VyLm5hdmxvZ299PltCcmFuZExvZ29dPC9hPlxuICAgICAgPHVsIGNsYXNzTmFtZT17aXNPcGVuID09PSBmYWxzZSA/XG4gICAgICAgICAgdXNlci5uYXZtZW51IDogdXNlci5uYXZtZW51ICsgJyAnICsgdXNlci5hY3RpdmV9PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXt1c2VyLm5hdml0ZW19PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt1c2VyLm5hdmxpbmt9PkhvbWU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3VzZXIubmF2aXRlbX0+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3VzZXIubmF2bGlua30+QWJvdXQ8L2E+XG4gICBcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17dXNlci5uYXZpdGVtfT5cbiAgICAgICBcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dXNlci5uYXZsaW5rfT5Db250YWN0PC9hPlxuICBcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aXNPcGVuID09PSBmYWxzZSA/IHVzZXIuaGFtYnVyZ2VyIDogdXNlci5oYW1idXJnZXIgKyAnICcgKyB1c2VyLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0ge29wZW5NZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dXNlci5iYXJ9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1c2VyLmJhcn0+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3VzZXIuYmFyfT48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlciIsIlBhZ2VIZWFkZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJvcGVuTWVudSIsImhlYWRlciIsImNsYXNzTmFtZSIsIm5hdiIsIm5hdmJhciIsImEiLCJuYXZsb2dvIiwidWwiLCJuYXZtZW51IiwiYWN0aXZlIiwibGkiLCJuYXZpdGVtIiwibmF2bGluayIsImJ1dHRvbiIsImhhbWJ1cmdlciIsIm9uQ2xpY2siLCJzcGFuIiwiYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/userview.js\n");

/***/ })

});