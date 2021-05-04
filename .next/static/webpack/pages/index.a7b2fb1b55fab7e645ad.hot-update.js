self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Nicana\\Site\\components\\Tabs.js",
    _this = undefined,
    _s = $RefreshSig$();






var Tabs = function Tabs(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('1'),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
      tabs: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
            active: activeTab === '1'
          }),
          onClick: function onClick() {
            toggle('1');
          },
          children: "Tab1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
            active: activeTab === '2'
          }),
          onClick: function onClick() {
            toggle('2');
          },
          children: "More Tabs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.TabContent, {
      activeTab: activeTab,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.TabPane, {
        tabId: "1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
            sm: "12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Tab 1 Contents"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.TabPane, {
        tabId: "2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
            sm: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {
              body: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {
                children: "Special Title Treatment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.CardText, {
                children: "With supporting text below as a natural lead-in to additional content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
            sm: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {
              body: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {
                children: "Special Title Treatment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.CardText, {
                children: "With supporting text below as a natural lead-in to additional content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(Tabs, "BE9kdjGAtFUkGbzn/t+3EN/WAWQ=");

_c = Tabs;
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

var _c;

$RefreshReg$(_c, "Tabs");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabs */ "./components/Tabs.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\User\\Desktop\\Nicana\\Site\\pages\\index.js";





function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
      color: "danger",
      children: "Danger!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }, this);
}

_c = Home;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInRvZ2dsZSIsInRhYiIsImNsYXNzbmFtZXMiLCJhY3RpdmUiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1lDLCtDQUFRLENBQUMsR0FBRCxDQURwQjtBQUFBLE1BQ2ZDLFNBRGU7QUFBQSxNQUNKQyxZQURJOztBQUd0QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxHQUFHLEVBQUk7QUFDcEIsUUFBR0gsU0FBUyxLQUFLRyxHQUFqQixFQUFzQkYsWUFBWSxDQUFDRSxHQUFELENBQVo7QUFDdkIsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLDhEQUFDLDJDQUFEO0FBQUssVUFBSSxNQUFUO0FBQUEsOEJBQ0ksOERBQUMsK0NBQUQ7QUFBQSwrQkFDQSw4REFBQywrQ0FBRDtBQUNJLG1CQUFTLEVBQUVDLGlEQUFVLENBQUM7QUFBRUMsa0JBQU0sRUFBRUwsU0FBUyxLQUFLO0FBQXhCLFdBQUQsQ0FEekI7QUFFSSxpQkFBTyxFQUFFLG1CQUFNO0FBQUVFLGtCQUFNLENBQUMsR0FBRCxDQUFOO0FBQWMsV0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFTSSw4REFBQywrQ0FBRDtBQUFBLCtCQUNBLDhEQUFDLCtDQUFEO0FBQ0ksbUJBQVMsRUFBRUUsaURBQVUsQ0FBQztBQUFFQyxrQkFBTSxFQUFFTCxTQUFTLEtBQUs7QUFBeEIsV0FBRCxDQUR6QjtBQUVJLGlCQUFPLEVBQUUsbUJBQU07QUFBRUUsa0JBQU0sQ0FBQyxHQUFELENBQU47QUFBYyxXQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQW9CSSw4REFBQyxrREFBRDtBQUFZLGVBQVMsRUFBRUYsU0FBdkI7QUFBQSw4QkFDSSw4REFBQywrQ0FBRDtBQUFTLGFBQUssRUFBQyxHQUFmO0FBQUEsK0JBQ0EsOERBQUMsMkNBQUQ7QUFBQSxpQ0FDSSw4REFBQywyQ0FBRDtBQUFLLGNBQUUsRUFBQyxJQUFSO0FBQUEsbUNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVFJLDhEQUFDLCtDQUFEO0FBQVMsYUFBSyxFQUFDLEdBQWY7QUFBQSwrQkFDQSw4REFBQywyQ0FBRDtBQUFBLGtDQUNJLDhEQUFDLDJDQUFEO0FBQUssY0FBRSxFQUFDLEdBQVI7QUFBQSxtQ0FDQSw4REFBQyw0Q0FBRDtBQUFNLGtCQUFJLE1BQVY7QUFBQSxzQ0FDSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0ksOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVFJLDhEQUFDLDJDQUFEO0FBQUssY0FBRSxFQUFDLEdBQVI7QUFBQSxtQ0FDQSw4REFBQyw0Q0FBRDtBQUFNLGtCQUFJLE1BQVY7QUFBQSxzQ0FDSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0ksOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0RELENBekREOztHQUFNSCxJOztLQUFBQSxJO0FBMkROLCtEQUFlQSxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNTLElBQVQsR0FBZ0I7QUFFWixzQkFFRTtBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDhDQUFEO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQWlDRDs7S0FuQ01BLEk7QUFxQ1AsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTdiMmZiMWI1NWZhYjdlNjQ1YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFiQ29udGVudCwgVGFiUGFuZSwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rLCBDYXJkLCBCdXR0b24sIENhcmRUaXRsZSwgQ2FyZFRleHQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgVGFicyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnMScpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSB0YWIgPT4ge1xyXG4gICAgaWYoYWN0aXZlVGFiICE9PSB0YWIpIHNldEFjdGl2ZVRhYih0YWIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICA8TmF2IHRhYnM+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcxJyB9KX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcxJyk7IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFRhYjFcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcyJyB9KX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcyJyk7IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE1vcmUgVGFic1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMVwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+VGFiIDEgQ29udGVudHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMlwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5TcGVjaWFsIFRpdGxlIFRyZWF0bWVudDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD5XaXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWwgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkdvIHNvbWV3aGVyZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlNwZWNpYWwgVGl0bGUgVHJlYXRtZW50PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PldpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC48L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+R28gc29tZXdoZXJlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgVGFicyBmcm9tICcuLi9jb21wb25lbnRzL1RhYnMnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICA8VGFicyAvPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJkYW5nZXJcIj5EYW5nZXIhPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==