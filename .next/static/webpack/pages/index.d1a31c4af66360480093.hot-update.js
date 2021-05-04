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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
      tabs: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
            active: activeTab === '1'
          }),
          onClick: function onClick() {
            toggle('1');
          },
          children: "Tab1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
            active: activeTab === '2'
          }),
          onClick: function onClick() {
            toggle('2');
          },
          children: "More Tabs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.TabContent, {
      activeTab: activeTab,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.TabPane, {
        tabId: "1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
            sm: "12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Tab 1 Contents"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.TabPane, {
        tabId: "2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
            sm: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {
              body: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                children: "Special Title Treatment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.CardText, {
                children: "With supporting text below as a natural lead-in to additional content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
            sm: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {
              body: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                children: "Special Title Treatment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.CardText, {
                children: "With supporting text below as a natural lead-in to additional content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJzLmpzIl0sIm5hbWVzIjpbIlRhYnMiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidG9nZ2xlIiwidGFiIiwiY2xhc3NuYW1lcyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNZQywrQ0FBUSxDQUFDLEdBQUQsQ0FEcEI7QUFBQSxNQUNmQyxTQURlO0FBQUEsTUFDSkMsWUFESTs7QUFHdEIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsR0FBRyxFQUFJO0FBQ3BCLFFBQUdILFNBQVMsS0FBS0csR0FBakIsRUFBc0JGLFlBQVksQ0FBQ0UsR0FBRCxDQUFaO0FBQ3ZCLEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDSSw4REFBQywyQ0FBRDtBQUFLLFVBQUksTUFBVDtBQUFBLDhCQUNJLDhEQUFDLCtDQUFEO0FBQUEsK0JBQ0EsOERBQUMsK0NBQUQ7QUFDSSxtQkFBUyxFQUFFQyxpREFBVSxDQUFDO0FBQUVDLGtCQUFNLEVBQUVMLFNBQVMsS0FBSztBQUF4QixXQUFELENBRHpCO0FBRUksaUJBQU8sRUFBRSxtQkFBTTtBQUFFRSxrQkFBTSxDQUFDLEdBQUQsQ0FBTjtBQUFjLFdBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBU0ksOERBQUMsK0NBQUQ7QUFBQSwrQkFDQSw4REFBQywrQ0FBRDtBQUNJLG1CQUFTLEVBQUVFLGlEQUFVLENBQUM7QUFBRUMsa0JBQU0sRUFBRUwsU0FBUyxLQUFLO0FBQXhCLFdBQUQsQ0FEekI7QUFFSSxpQkFBTyxFQUFFLG1CQUFNO0FBQUVFLGtCQUFNLENBQUMsR0FBRCxDQUFOO0FBQWMsV0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFtQkksOERBQUMsa0RBQUQ7QUFBWSxlQUFTLEVBQUVGLFNBQXZCO0FBQUEsOEJBQ0ksOERBQUMsK0NBQUQ7QUFBUyxhQUFLLEVBQUMsR0FBZjtBQUFBLCtCQUNBLDhEQUFDLDJDQUFEO0FBQUEsaUNBQ0ksOERBQUMsMkNBQUQ7QUFBSyxjQUFFLEVBQUMsSUFBUjtBQUFBLG1DQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFRSSw4REFBQywrQ0FBRDtBQUFTLGFBQUssRUFBQyxHQUFmO0FBQUEsK0JBQ0EsOERBQUMsMkNBQUQ7QUFBQSxrQ0FDSSw4REFBQywyQ0FBRDtBQUFLLGNBQUUsRUFBQyxHQUFSO0FBQUEsbUNBQ0EsOERBQUMsNENBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQUEsc0NBQ0ksOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJLDhEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFRSSw4REFBQywyQ0FBRDtBQUFLLGNBQUUsRUFBQyxHQUFSO0FBQUEsbUNBQ0EsOERBQUMsNENBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQUEsc0NBQ0ksOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJLDhEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlERCxDQXhERDs7R0FBTUgsSTs7S0FBQUEsSTtBQTBETiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMWEzMWM0YWY2NjM2MDQ4MDA5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJDb250ZW50LCBUYWJQYW5lLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmssIENhcmQsIEJ1dHRvbiwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBUYWJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCcxJyk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9IHRhYiA9PiB7XHJcbiAgICBpZihhY3RpdmVUYWIgIT09IHRhYikgc2V0QWN0aXZlVGFiKHRhYik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TmF2IHRhYnM+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcxJyB9KX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcxJyk7IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFRhYjFcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcyJyB9KX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcyJyk7IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE1vcmUgVGFic1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMVwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+VGFiIDEgQ29udGVudHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMlwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5TcGVjaWFsIFRpdGxlIFRyZWF0bWVudDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD5XaXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWwgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkdvIHNvbWV3aGVyZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlNwZWNpYWwgVGl0bGUgVHJlYXRtZW50PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PldpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC48L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+R28gc29tZXdoZXJlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzOyJdLCJzb3VyY2VSb290IjoiIn0=