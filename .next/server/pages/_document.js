/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("if (false) {} else {\n  module.exports = __webpack_require__(/*! ./dev.json */ \"./config/dev.json\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsV0FBeUMsRUFBekMsTUFFSztFQUNEQSwyRUFBQTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRWxpdGUtQXRobGV0ZS1OdXRyaXRpb24vLi9jb25maWcvaW5kZXguanM/YTFiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpe1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9wcm9kdWN0aW9uLmpzb25cIik7XHJcbn1lbHNle1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9kZXYuanNvblwiKTtcclxufSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./constants/Common.js":
/*!*****************************!*\
  !*** ./constants/Common.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const config = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n\nmodule.exports = {\n  APP_NAME: \"Suppkart\",\n  BASE_URL: \"http://localhost:4003\",\n  APP_LOGO: `${config.BUCKET_URL}/assets/images/logo.png`,\n  SITE_EMAIL: \"customercare@suppkart.com\",\n  FILE_SIZES: {\n    profile: ['50*50', '100*100', '200*200', '500*500']\n  },\n  SALT_ROUNDS: 9,\n  SESSION_KEY: 'shSDFGfgoifdg34tsDGFfsdgaljsf',\n  width: '1440px'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvQ29tbW9uLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQ0FBRCxDQUF0Qjs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2JDLFFBQVEsRUFBRSxVQURHO0VBRWJDLFFBQVEsRUFBRSx1QkFGRztFQUdiQyxRQUFRLEVBQUksR0FBRU4sTUFBTSxDQUFDTyxVQUFXLHlCQUhuQjtFQUliQyxVQUFVLEVBQUUsMkJBSkM7RUFLYkMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRSxDQUFDLE9BQUQsRUFBUyxTQUFULEVBQW1CLFNBQW5CLEVBQTZCLFNBQTdCO0VBREQsQ0FMQztFQVFiQyxXQUFXLEVBQUUsQ0FSQTtFQVNiQyxXQUFXLEVBQUUsK0JBVEE7RUFVYkMsS0FBSyxFQUFFO0FBVk0sQ0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbGl0ZS1BdGhsZXRlLU51dHJpdGlvbi8uL2NvbnN0YW50cy9Db21tb24uanM/NzU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi8uLi9jb25maWdcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIEFQUF9OQU1FOiBcIlN1cHBrYXJ0XCIsXHJcbiAgICBCQVNFX1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDNcIixcclxuICAgIEFQUF9MT0dPIDogYCR7Y29uZmlnLkJVQ0tFVF9VUkx9L2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdgLFxyXG4gICAgU0lURV9FTUFJTDogXCJjdXN0b21lcmNhcmVAc3VwcGthcnQuY29tXCIsXHJcbiAgICBGSUxFX1NJWkVTOiB7XHJcbiAgICAgICAgcHJvZmlsZTogWyc1MCo1MCcsJzEwMCoxMDAnLCcyMDAqMjAwJywnNTAwKjUwMCddXHJcbiAgICB9LFxyXG4gICAgU0FMVF9ST1VORFM6IDksXHJcbiAgICBTRVNTSU9OX0tFWTogJ3NoU0RGR2Znb2lmZGczNHRzREdGZnNkZ2FsanNmJyxcclxuICAgIHdpZHRoOiAnMTQ0MHB4J1xyXG59Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiQVBQX05BTUUiLCJCQVNFX1VSTCIsIkFQUF9MT0dPIiwiQlVDS0VUX1VSTCIsIlNJVEVfRU1BSUwiLCJGSUxFX1NJWkVTIiwicHJvZmlsZSIsIlNBTFRfUk9VTkRTIiwiU0VTU0lPTl9LRVkiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/Common.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomDocument)\n/* harmony export */ });\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/Common */ \"./constants/Common.js\");\n/* harmony import */ var _constants_Common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_Common__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"D:\\\\cutadgework\\\\Elite-Athlete-Ssr\\\\pages\\\\_document.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import \"../express-static/styles/styles.css\"\n\n\nclass CustomDocument extends (next_document__WEBPACK_IMPORTED_MODULE_0___default()) {\n  static async getInitialProps(context) {\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0___default().getInitialProps(context);\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_1__.ServerStyleSheet();\n    const page = await context.renderPage(App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 87\n    }, this)));\n    const styleTags = sheet.getStyleElement();\n    return _objectSpread(_objectSpread(_objectSpread({}, initialProps), page), {}, {\n      styleTags,\n      host: context.req ? context.req.hostname ? context.req.hostname : \"\" : \"\"\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {\n      lang: \"en\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"dns-prefetch\",\n          href: \"//fonts.googleapis.com\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"dns-prefetch\",\n          href: (_constants_Common__WEBPACK_IMPORTED_MODULE_2___default().BASE_URL)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: `${(_constants_Common__WEBPACK_IMPORTED_MODULE_2___default().BASE_URL)}/assets/styles/bootstrap.min.css`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: `${(_constants_Common__WEBPACK_IMPORTED_MODULE_2___default().BASE_URL)}/assets/styles/slick.min.css`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: `${(_constants_Common__WEBPACK_IMPORTED_MODULE_2___default().BASE_URL)}/assets/styles/style.css`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: `${(_constants_Common__WEBPACK_IMPORTED_MODULE_2___default().BASE_URL)}/assets/styles/responsive.css`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: `${(_constants_Common__WEBPACK_IMPORTED_MODULE_2___default().BASE_URL)}/assets/styles/loader.css`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"shortcut icon\",\n          href: `${(_constants_Common__WEBPACK_IMPORTED_MODULE_2___default().BASE_URL)}/favicon.png`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"body\", {\n        children: [this.props.styleTags, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGMgZnJvbSBcIkBjb25zdGFudHMvQ29tbW9uXCI7XHJcbi8vIGltcG9ydCBcIi4uL2V4cHJlc3Mtc3RhdGljL3N0eWxlcy9zdHlsZXMuY3NzXCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY29udGV4dCk7XHJcbiAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBjb250ZXh0LnJlbmRlclBhZ2UoKEFwcCkgPT4gKHByb3BzKSA9PiBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPikpO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVGFncyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpO1xyXG4gICAgICAgIHJldHVybiB7IC4uLmluaXRpYWxQcm9wcywgLi4ucGFnZSwgc3R5bGVUYWdzLCBob3N0OiBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhvc3RuYW1lID8gY29udGV4dC5yZXEuaG9zdG5hbWUgOiBcIlwiIDogXCJcIiB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiZG5zLXByZWZldGNoXCIgaHJlZj1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImRucy1wcmVmZXRjaFwiIGhyZWY9e2MuQkFTRV9VUkx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2Ake2MuQkFTRV9VUkx9L2Fzc2V0cy9zdHlsZXMvYm9vdHN0cmFwLm1pbi5jc3NgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgJHtjLkJBU0VfVVJMfS9hc3NldHMvc3R5bGVzL3NsaWNrLm1pbi5jc3NgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNS4xL2Nzcy9hbGwubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHNocmluay10by1maXQ9bm9cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YCR7Yy5CQVNFX1VSTH0vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3NgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgJHtjLkJBU0VfVVJMfS9hc3NldHMvc3R5bGVzL3Jlc3BvbnNpdmUuY3NzYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YCR7Yy5CQVNFX1VSTH0vYXNzZXRzL3N0eWxlcy9sb2FkZXIuY3NzYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17YCR7Yy5CQVNFX1VSTH0vZmF2aWNvbi5wbmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MSx3aWR0aD1kZXZpY2Utd2lkdGgsc2hyaW5rLXRvLWZpdD1ubyx1c2VyLXNjYWxhYmxlPW5vLHZpZXdwb3J0LWZpdD1jb3ZlclwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3R5bGVUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L0h0bWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwiYyIsIkN1c3RvbURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImluaXRpYWxQcm9wcyIsInNoZWV0IiwicGFnZSIsInJlbmRlclBhZ2UiLCJBcHAiLCJwcm9wcyIsImNvbGxlY3RTdHlsZXMiLCJzdHlsZVRhZ3MiLCJnZXRTdHlsZUVsZW1lbnQiLCJob3N0IiwicmVxIiwiaG9zdG5hbWUiLCJyZW5kZXIiLCJCQVNFX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document&preferredRegion=!":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document&preferredRegion=! ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ private_next_pages_document__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in private_next_pages_document__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => private_next_pages_document__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n        // Next.js Route Loader\n        \n        \n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci5qcz9wYWdlPSUyRl9kb2N1bWVudCZhYnNvbHV0ZVBhZ2VQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZwcmVmZXJyZWRSZWdpb249IS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUNBLFFBQW9EO0FBQ3BELFFBQThEO0FBQzlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRWxpdGUtQXRobGV0ZS1OdXRyaXRpb24vPzI5ODEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIC8vIE5leHQuanMgUm91dGUgTG9hZGVyXG4gICAgICAgIGV4cG9ydCAqIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCJcbiAgICAgICAgZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCJcbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document&preferredRegion=!\n");

/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/html-context":
/*!*******************************************************!*\
  !*** external "next/dist/shared/lib/html-context.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ "../shared/lib/is-plain-object":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/is-plain-object.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "./config/dev.json":
/*!*************************!*\
  !*** ./config/dev.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"PORT":4003,"BASE":"http://localhost:4003","BUCKET_URL":"http://localhost:4003","APP_NAME":"Elite-Athlete-Nutrition","DB":{"connectionLimit":1000,"host":"localhost","user":"sandeep","password":"","database":"Elite","port":3306,"waitForConnections":true,"queueLimit":0,"debug":false,"charset":"utf8mb4"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_react_jsx-dev-runtime_js","vendors-node_modules_next_document_js"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document&preferredRegion=!")));
module.exports = __webpack_exports__;

})();