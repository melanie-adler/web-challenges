"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/volumes/the-fellowship-of-the-ring",{

/***/ "./components/BookDetails/BookDetails.jsx":
/*!************************************************!*\
  !*** ./components/BookDetails/BookDetails.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/data */ \"./lib/data.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BookCover_BookCover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BookCover/BookCover */ \"./components/BookCover/BookCover.jsx\");\n\n\n\n\nfunction BookDetails(param) {\n    let { id } = param;\n    const volume = _lib_data__WEBPACK_IMPORTED_MODULE_1__.volumes.find((param)=>{\n        let { slug } = param;\n        return slug === id;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/volumes\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"←\"\n                    }, void 0, false, {\n                        fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    \" All Volumes\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: volume.title\n            }, void 0, false, {\n                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: volume.description\n            }, void 0, false, {\n                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: volume.books[0].ordinal\n                            }, void 0, false, {\n                                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: volume.books[0].title\n                            }, void 0, false, {\n                                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: volume.books[1].ordinal\n                            }, void 0, false, {\n                                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: volume.books[1].title\n                            }, void 0, false, {\n                                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookCover_BookCover__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: id,\n                title: volume.title\n            }, void 0, false, {\n                fileName: \"/Users/melanieadler/neuefische/web-challenges/nextjs/lotr-app/components/BookDetails/BookDetails.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = BookDetails;\nvar _c;\n$RefreshReg$(_c, \"BookDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tEZXRhaWxzL0Jvb2tEZXRhaWxzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUNSO0FBQ2tCO0FBRWhDLFNBQVNHLFlBQVksS0FBTTtRQUFOLEVBQUVDLEVBQUUsRUFBRSxHQUFOO0lBQ2xDLE1BQU1DLFNBQVNMLDhDQUFPQSxDQUFDTSxJQUFJLENBQUM7WUFBQyxFQUFFQyxJQUFJLEVBQUU7ZUFBS0EsU0FBU0g7SUFBQztJQUNwRCxxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJQTtnQkFBQ08sTUFBSzs7a0NBQ1QsOERBQUNDO2tDQUFLOzs7Ozs7b0JBQWM7Ozs7Ozs7MEJBRXRCLDhEQUFDQzswQkFBSUwsT0FBT00sS0FBSzs7Ozs7OzBCQUNqQiw4REFBQ0M7MEJBQUdQLE9BQU9RLFdBQVc7Ozs7OzswQkFDdEIsOERBQUNDOztrQ0FDQyw4REFBQ0M7OzBDQUNDLDhEQUFDSDswQ0FBR1AsT0FBT1csS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTzs7Ozs7OzBDQUMzQiw4REFBQ0w7MENBQUdQLE9BQU9XLEtBQUssQ0FBQyxFQUFFLENBQUNMLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFM0IsOERBQUNJOzswQ0FDQyw4REFBQ0g7MENBQUdQLE9BQU9XLEtBQUssQ0FBQyxFQUFFLENBQUNDLE9BQU87Ozs7OzswQ0FDM0IsOERBQUNMOzBDQUFHUCxPQUFPVyxLQUFLLENBQUMsRUFBRSxDQUFDTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzdCLDhEQUFDVCw0REFBU0E7Z0JBQUNFLElBQUlBO2dCQUFJTyxPQUFPTixPQUFPTSxLQUFLOzs7Ozs7OztBQUc1QztLQXRCd0JSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9va0RldGFpbHMvQm9va0RldGFpbHMuanN4P2UyNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdm9sdW1lcyB9IGZyb20gXCJAL2xpYi9kYXRhXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQm9va0NvdmVyIGZyb20gXCIuLi9Cb29rQ292ZXIvQm9va0NvdmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWxzKHsgaWQgfSkge1xuICBjb25zdCB2b2x1bWUgPSB2b2x1bWVzLmZpbmQoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSBpZCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvdm9sdW1lc1wiPlxuICAgICAgICA8c3Bhbj4mIzg1OTI7PC9zcGFuPiBBbGwgVm9sdW1lc1xuICAgICAgPC9MaW5rPlxuICAgICAgPGgxPnt2b2x1bWUudGl0bGV9PC9oMT5cbiAgICAgIDxwPnt2b2x1bWUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHA+e3ZvbHVtZS5ib29rc1swXS5vcmRpbmFsfTwvcD5cbiAgICAgICAgICA8cD57dm9sdW1lLmJvb2tzWzBdLnRpdGxlfTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxwPnt2b2x1bWUuYm9va3NbMV0ub3JkaW5hbH08L3A+XG4gICAgICAgICAgPHA+e3ZvbHVtZS5ib29rc1sxXS50aXRsZX08L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPEJvb2tDb3ZlciBpZD17aWR9IHRpdGxlPXt2b2x1bWUudGl0bGV9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidm9sdW1lcyIsIkxpbmsiLCJCb29rQ292ZXIiLCJCb29rRGV0YWlscyIsImlkIiwidm9sdW1lIiwiZmluZCIsInNsdWciLCJocmVmIiwic3BhbiIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJ1bCIsImxpIiwiYm9va3MiLCJvcmRpbmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BookDetails/BookDetails.jsx\n"));

/***/ })

});