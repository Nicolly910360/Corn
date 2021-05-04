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
        tabId: "2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJzLmpzIl0sIm5hbWVzIjpbIlRhYnMiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidG9nZ2xlIiwidGFiIiwiY2xhc3NuYW1lcyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNZQywrQ0FBUSxDQUFDLEdBQUQsQ0FEcEI7QUFBQSxNQUNmQyxTQURlO0FBQUEsTUFDSkMsWUFESTs7QUFHdEIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsR0FBRyxFQUFJO0FBQ3BCLFFBQUdILFNBQVMsS0FBS0csR0FBakIsRUFBc0JGLFlBQVksQ0FBQ0UsR0FBRCxDQUFaO0FBQ3ZCLEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDSSw4REFBQywyQ0FBRDtBQUFLLFVBQUksTUFBVDtBQUFBLDhCQUNJLDhEQUFDLCtDQUFEO0FBQUEsK0JBQ0EsOERBQUMsK0NBQUQ7QUFDSSxtQkFBUyxFQUFFQyxpREFBVSxDQUFDO0FBQUVDLGtCQUFNLEVBQUVMLFNBQVMsS0FBSztBQUF4QixXQUFELENBRHpCO0FBRUksaUJBQU8sRUFBRSxtQkFBTTtBQUFFRSxrQkFBTSxDQUFDLEdBQUQsQ0FBTjtBQUFjLFdBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBU0ksOERBQUMsK0NBQUQ7QUFBQSwrQkFDQSw4REFBQywrQ0FBRDtBQUNJLG1CQUFTLEVBQUVFLGlEQUFVLENBQUM7QUFBRUMsa0JBQU0sRUFBRUwsU0FBUyxLQUFLO0FBQXhCLFdBQUQsQ0FEekI7QUFFSSxpQkFBTyxFQUFFLG1CQUFNO0FBQUVFLGtCQUFNLENBQUMsR0FBRCxDQUFOO0FBQWMsV0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFtQkksOERBQUMsa0RBQUQ7QUFBWSxlQUFTLEVBQUVGLFNBQXZCO0FBQUEsOEJBQ0ksOERBQUMsK0NBQUQ7QUFBUyxhQUFLLEVBQUMsR0FBZjtBQUFBLCtCQUNBLDhEQUFDLDJDQUFEO0FBQUEsaUNBQ0ksOERBQUMsMkNBQUQ7QUFBSyxjQUFFLEVBQUMsSUFBUjtBQUFBLG1DQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFRSSw4REFBQywrQ0FBRDtBQUFTLGFBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0F4Q0Q7O0dBQU1ILEk7O0tBQUFBLEk7QUEwQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjY1YTc3NmQ2MzQ1MmI4MzUxOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFiQ29udGVudCwgVGFiUGFuZSwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rLCBDYXJkLCBCdXR0b24sIENhcmRUaXRsZSwgQ2FyZFRleHQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgVGFicyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnMScpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSB0YWIgPT4ge1xyXG4gICAgaWYoYWN0aXZlVGFiICE9PSB0YWIpIHNldEFjdGl2ZVRhYih0YWIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdiB0YWJzPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMScgfSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMScpOyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBUYWIxXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMicgfSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMicpOyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNb3JlIFRhYnNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPFRhYkNvbnRlbnQgYWN0aXZlVGFiPXthY3RpdmVUYWJ9PlxyXG4gICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjFcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlRhYiAxIENvbnRlbnRzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjJcIj5cclxuICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnM7Il0sInNvdXJjZVJvb3QiOiIifQ==