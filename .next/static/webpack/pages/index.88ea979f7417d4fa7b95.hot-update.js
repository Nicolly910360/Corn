self["webpackHotUpdate_N_E"]("pages/index",{

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
  var _this = this,
      _s = $RefreshSig$();

  var Home = function Home(props) {
    _s();

    var _useState = useState('1'),
        _useState2 = (0,C_Users_User_Desktop_Nicana_Site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
        activeTab = _useState2[0],
        setActiveTab = _useState2[1];

    var toggle = function toggle(tab) {
      if (activeTab !== tab) setActiveTab(tab);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.TabContent, {
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
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.TabPane, {
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
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardText, {
                  children: "With supporting text below as a natural lead-in to additional content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
                  children: "Go somewhere"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
              sm: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {
                body: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {
                  children: "Special Title Treatment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardText, {
                  children: "With supporting text below as a natural lead-in to additional content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
                  children: "Go somewhere"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this);
  };

  _s(Home, "BE9kdjGAtFUkGbzn/t+3EN/WAWQ=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0b2dnbGUiLCJ0YWIiLCJjbGFzc25hbWVzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTtBQUFBOztBQUdkLE1BQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLG9CQUNZQyxRQUFRLENBQUMsR0FBRCxDQURwQjtBQUFBO0FBQUEsUUFDZkMsU0FEZTtBQUFBLFFBQ0pDLFlBREk7O0FBR3RCLFFBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEdBQUcsRUFBSTtBQUNwQixVQUFHSCxTQUFTLEtBQUtHLEdBQWpCLEVBQXNCRixZQUFZLENBQUNFLEdBQUQsQ0FBWjtBQUN2QixLQUZEOztBQUtBLHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsMkNBQUQ7QUFBSyxZQUFJLE1BQVQ7QUFBQSxnQ0FDRSw4REFBQywrQ0FBRDtBQUFBLGlDQUNFLDhEQUFDLCtDQUFEO0FBQ0UscUJBQVMsRUFBRUMsaURBQVUsQ0FBQztBQUFFQyxvQkFBTSxFQUFFTCxTQUFTLEtBQUs7QUFBeEIsYUFBRCxDQUR2QjtBQUVFLG1CQUFPLEVBQUUsbUJBQU07QUFBRUUsb0JBQU0sQ0FBQyxHQUFELENBQU47QUFBYyxhQUZqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFTRSw4REFBQywrQ0FBRDtBQUFBLGlDQUNFLDhEQUFDLCtDQUFEO0FBQ0UscUJBQVMsRUFBRUUsaURBQVUsQ0FBQztBQUFFQyxvQkFBTSxFQUFFTCxTQUFTLEtBQUs7QUFBeEIsYUFBRCxDQUR2QjtBQUVFLG1CQUFPLEVBQUUsbUJBQU07QUFBRUUsb0JBQU0sQ0FBQyxHQUFELENBQU47QUFBYyxhQUZqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFvQkUsOERBQUMsa0RBQUQ7QUFBWSxpQkFBUyxFQUFFRixTQUF2QjtBQUFBLGdDQUNFLDhEQUFDLCtDQUFEO0FBQVMsZUFBSyxFQUFDLEdBQWY7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFBLG1DQUNFLDhEQUFDLDJDQUFEO0FBQUssZ0JBQUUsRUFBQyxJQUFSO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRSw4REFBQywrQ0FBRDtBQUFTLGVBQUssRUFBQyxHQUFmO0FBQUEsaUNBQ0UsOERBQUMsMkNBQUQ7QUFBQSxvQ0FDRSw4REFBQywyQ0FBRDtBQUFLLGdCQUFFLEVBQUMsR0FBUjtBQUFBLHFDQUNFLDhEQUFDLDRDQUFEO0FBQU0sb0JBQUksTUFBVjtBQUFBLHdDQUNFLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRSw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUUsOERBQUMsMkNBQUQ7QUFBSyxnQkFBRSxFQUFDLEdBQVI7QUFBQSxxQ0FDRSw4REFBQyw0Q0FBRDtBQUFNLG9CQUFJLE1BQVY7QUFBQSx3Q0FDRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0UsOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWtERCxHQTFERDs7QUFIYyxLQUdSSCxJQUhRO0FBa0ZiOztLQWxGTUEsSTtBQW9GUCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OGVhOTc5Zjc0MTdkNGZhN2I5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFiQ29udGVudCwgVGFiUGFuZSwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rLCBDYXJkLCBCdXR0b24sIENhcmRUaXRsZSwgQ2FyZFRleHQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG5cclxuICBjb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJzEnKTtcclxuICBcclxuICAgIGNvbnN0IHRvZ2dsZSA9IHRhYiA9PiB7XHJcbiAgICAgIGlmKGFjdGl2ZVRhYiAhPT0gdGFiKSBzZXRBY3RpdmVUYWIodGFiKTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIDxOYXYgdGFicz5cclxuICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMScgfSl9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGUoJzEnKTsgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFRhYjFcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcyJyB9KX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMicpOyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTW9yZSBUYWJzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0+XHJcbiAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjFcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIHNtPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoND5UYWIgMSBDb250ZW50czwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUgdGFiSWQ9XCIyXCI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+U3BlY2lhbCBUaXRsZSBUcmVhdG1lbnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PldpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC48L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPkdvIHNvbWV3aGVyZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlNwZWNpYWwgVGl0bGUgVHJlYXRtZW50PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD5XaXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWwgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5HbyBzb21ld2hlcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9