self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Nicana_Site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Nicana\\Site\\pages\\index.js";





function Home() {
  var _s = $RefreshSig$();

  var Home = function Home(props) {
    _s();

    var _useState = useState('1'),
        _useState2 = (0,C_Users_User_Desktop_Nicana_Site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
        activeTab = _useState2[0],
        setActiveTab = _useState2[1];

    var toggle = function toggle(tab) {
      if (activeTab !== tab) setActiveTab(tab);
    };
  };

  _s(Home, "BE9kdjGAtFUkGbzn/t+3EN/WAWQ=");

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {
      tabs: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
            active: activeTab === '1'
          }),
          onClick: function onClick() {
            toggle('1');
          },
          children: "Tab1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
            active: activeTab === '2'
          }),
          onClick: function onClick() {
            toggle('2');
          },
          children: "More Tabs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.TabContent, {
      activeTab: activeTab,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.TabPane, {
        tabId: "1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
            sm: "12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Tab 1 Contents"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.TabPane, {
        tabId: "2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
            sm: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {
              body: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {
                children: "Special Title Treatment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardText, {
                children: "With supporting text below as a natural lead-in to additional content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
            sm: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {
              body: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {
                children: "Special Title Treatment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardText, {
                children: "With supporting text below as a natural lead-in to additional content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }, this);
}

_c = Home;
;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInRvZ2dsZSIsInRhYiIsImNsYXNzbmFtZXMiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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QTtBQUFBLGtCQURGLGVBUUUsOERBQUMsMkNBQUQ7QUFBSyxjQUFFLEVBQUMsR0FBUjtBQUFBLG1DQUNFLDhEQUFDLDRDQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFBLHNDQUNFLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUUsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRSw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErREQ7O0tBMUVNSCxJO0FBMEVOO0FBRUQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDJkNWY4NThlZDk3MzYzZTQ4MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYkNvbnRlbnQsIFRhYlBhbmUsIE5hdiwgTmF2SXRlbSwgTmF2TGluaywgQ2FyZCwgQnV0dG9uLCBDYXJkVGl0bGUsIENhcmRUZXh0LCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cclxuXHJcbiAgY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCcxJyk7XHJcbiAgXHJcbiAgICBjb25zdCB0b2dnbGUgPSB0YWIgPT4ge1xyXG4gICAgICBpZihhY3RpdmVUYWIgIT09IHRhYikgc2V0QWN0aXZlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgPE5hdiB0YWJzPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcxJyB9KX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMScpOyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVGFiMVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzInIH0pfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcyJyk7IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb3JlIFRhYnNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17YWN0aXZlVGFifT5cclxuICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMVwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlRhYiAxIENvbnRlbnRzPC9oND5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjJcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5TcGVjaWFsIFRpdGxlIFRyZWF0bWVudDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+V2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LjwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+R28gc29tZXdoZXJlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+U3BlY2lhbCBUaXRsZSBUcmVhdG1lbnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PldpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC48L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPkdvIHNvbWV3aGVyZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=