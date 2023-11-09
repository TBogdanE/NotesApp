/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/design.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/design.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf */ \"./src/assets/fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/icons/icon-recycle-bin.png */ \"./src/assets/icons/icon-recycle-bin.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  font-family: \"Alata\", sans-serif;\n  font-size: 16px;\n  --header: #7eaaa1;\n  --sidemenu: #7eaaa1;\n  --text1: #ddeae6;\n  --text2: #426760;\n  --body: #f5f8f7;\n  --body2: #426760;\n  --btn: #7eaaa1;\n  --btn-active: #709890;\n  --btn-hover: #6a978f;\n}\n\n@font-face {\n  font-family: \"TitleFont\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})\n    format(\"woff2\");\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\nbody {\n  display: grid;\n  grid-template-rows: repeat(20, 1fr);\n  grid-template-columns: repeat(20, 1fr);\n  font-family: \"TitleFont\", sans-serif;\n  margin: 0;\n  background-color: var(--body);\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  grid-area: 1 / 1 / 4 / 21;\n  background-color: transparent;\n  border-bottom: 0.5em solid var(--header);\n}\n\n#page-title {\n  color: var(--text2);\n  font-size: 2.2em;\n  padding-left: 1em;\n  font-family: \"TitleFont\", sans-serif;\n}\n\n#left-menu {\n  grid-area: 4 / 1 / 21 / 5;\n  background-color: var(--sidemenu);\n}\n\n.menu-sct {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n\n.menu-title {\n  text-align: center;\n  font-size: 1.5em;\n  width: 9em;\n  color: var(--text1);\n  border-bottom: 0.15em solid var(--text2);\n}\n\n.menu-btn {\n  background-color: var(--btn);\n  font-size: 1.1em;\n  color: var(--text2);\n  margin: 0.4em;\n  width: 80%;\n  height: 100%;\n  text-align: left;\n  transition: 0.1s ease-in-out;\n  border-bottom: 0.1em solid var(--btn-active);\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  animation: 0.2s linear fadein;\n  padding: 0.3em;\n}\n\n.user-menu-btn-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 11em;\n  height: 2em;\n  transition: 0.1s ease-in-out;\n  border-bottom: 0.1em solid var(--btn-active);\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  animation: 0.2s linear fadein;\n}\n\n.user-menu-btn-box:hover {\n  color: var(--text1);\n  transform: scale(1.02);\n  border-bottom: 0.2em solid var(--text2);\n}\n\n.user-menu-btn {\n  background-color: var(--btn);\n  font-size: 1.1em;\n  color: var(--text2);\n  margin: 0.4em;\n  width: 80%;\n  height: 100%;\n  text-align: left;\n  border: 0;\n}\n\n.user-menu-delete-btn {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  background-color: transparent;\n  border: 0;\n  width: 20%;\n  height: 100%;\n}\n\n/*.menu-project-btn {\n  background-color: var(--btn);\n  font-size: 1.1em;\n  color: var(--text2);\n  margin: 0.4em;\n  width: 11em;\n  height: 2em;\n  text-align: left;\n  transition: 0.1s ease-in-out;\n  border-bottom: 0.1em solid var(--btn-active);\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n}*/\n\n.menu-btn:hover {\n  color: var(--text1);\n  transform: scale(1.02);\n  border-bottom: 0.2em solid var(--text2);\n}\n\n.menu-add-new-icon {\n  width: 10%;\n}\n\n#menu-projects {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n\n.active {\n  font-size: 1.15em;\n  color: var(--text1);\n  background-color: var(--btn-active);\n  border-radius: 4px;\n}\n\n#main {\n  display: grid;\n  grid-area: 4 / 5 / 21 / 21;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n/*UI - when creating new PROJECT**********************************************************************/\n\n#main-create-new-project-card-ui {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  grid-area: 2 / 3 / 7 / 9;\n  background-color: var(--body);\n  border: 0.2em solid var(--btn);\n  border-radius: 8px;\n  animation: 0.08s linear fadein;\n  z-index: 4;\n}\n\n#main-create-new-project-title {\n  color: var(--text2);\n  font-size: 1.7em;\n  padding: 2em;\n}\n\n#main-create-new-project-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n/*#main-create-new-project-label {\n  font-size: 1.3em;\n  color: var(--text2);\n  padding: 1em;\n}*/\n\n#main-create-new-project-input {\n  width: 20em;\n  height: 1.8em;\n  background-color: var(--body);\n  border: 0.1em solid var(--text2);\n  border-radius: 8px;\n  color: var(--text2);\n}\n\n#main-create-new-project-input:active {\n  background-color: var(--text1);\n}\n\n#main-create-new-project-input:focus {\n  background-color: var(--text1);\n}\n\n#main-create-new-project-submit {\n  background-color: var(--body);\n  color: var(--text2);\n  width: 5em;\n  height: 2em;\n  border: 0.1em solid var(--text2);\n  border-radius: 8px;\n  margin: 1em;\n  transition: 0.2s ease-in-out;\n}\n\n#main-create-new-project-submit:hover {\n  background-color: var(--btn-hover);\n  color: var(--text1);\n}\n\n#main-create-new-project-submit:active {\n  background-color: var(--btn-active);\n  color: var(--text1);\n}\n\n.hidden {\n  display: none !important;\n}\n\n/*UI - Projects menu - all notes **********************************************************************/\n\n#main-create-new-note-header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  grid-area: 1 / 1 / 2 / 15;\n}\n\n#main-create-new-note-btn {\n  font-size: 1em;\n  color: var(--text2);\n  background-color: transparent;\n  border: 0.1em solid var(--text2);\n  border-radius: 8px;\n  padding: 0.4em;\n  margin: 1em;\n  animation: 0.08s linear fadein;\n  transition: 0.1s ease-in-out;\n}\n\n#main-create-new-note-btn:hover {\n  background-color: var(--btn-hover);\n  color: var(--text1);\n}\n\n/*UI - New note card  **********************************************************************/\n#new-note-card-ui {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  grid-area: 2 / 2 / 7 / 10;\n  background-color: var(--body);\n  border: 0.2em solid var(--btn);\n  border-radius: 8px;\n  animation: 0.08s linear fade-in-out;\n  z-index: 5;\n}\n\n#new-note-card-ui-title {\n  color: var(--text2);\n  text-align: center;\n  font-size: 1.7em;\n  margin: 0.5em;\n  padding: 0.5em;\n  width: 70%;\n  border-bottom: 0.1em solid var(--text2);\n}\n\n#new-note-card-ui-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n/*#main-create-new-project-label {\n  font-size: 1.3em;\n  color: var(--text2);\n  padding: 1em;\n}*/\n\n.new-note-card-ui-input {\n  width: 25em;\n  height: 1.8em;\n  background-color: var(--body);\n  border: 0.1em solid var(--text2);\n  border-radius: 8px;\n  color: var(--text1);\n  margin: 0.5em;\n}\n\n.new-note-card-ui-input::placeholder {\n  color: var(--text2);\n}\n\n.new-note-card-ui-input:active {\n  background-color: var(--btn-active);\n  outline: none;\n}\n\n.new-note-card-ui-input:focus {\n  background-color: var(--btn-active);\n  outline: none;\n  border: 0.15em solid var(--text2);\n}\n\n#new-note-card-ui-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#new-note-card-ui-important {\n  margin: 1em;\n}\n\n#new-note-card-ui-add-date {\n  margin: 1em;  \n}\n\n#new-note-card-ui-color {\n  margin: 1em;\n}\n\n#new-note-card-ui-submit {\n  background-color: var(--body);\n  color: var(--text2);\n  width: 25em;\n  height: 2em;\n  border: 0.1em solid var(--text2);\n  border-radius: 4px;\n  margin: 1em;\n  transition: 0.2s ease-in-out;\n  margin: 0.5em;\n}\n\n#new-note-card-ui-submit:hover {\n  background-color: var(--btn-hover);\n  color: var(--text1);\n}\n\n/*Note UI **********************************************************************/\n#main-notes-sct {\n  grid-area: 2 / 1 / 11 / 11;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n.note-card {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 90%;\n  height: 2em;\n  padding: 0.2em;\n  margin: 0.3em;\n  border: 0.1em solid var(--text2);\n  border-radius: 5px;\n}\n\n.note-card > p {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.note-card-btn-container {\n  width: 5%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2em;\n}\n\n.note-card-btn {\n  height: 40%;\n  border: 0.1px solid var(--text2);\n  border-radius: 3px;\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n}\n\n.note-card-title {\n  display: flex;\n  font-size: 1em;\n  color: var(--text2);\n  font-weight: bold;\n  width: 15%;\n  text-align: left;\n  padding: 0.5em;\n}\n\n.note-card-text {\n  font-size: 0.8em;\n  color: var(--text2);\n  width: 40%;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.note-card-important {\n  width: 15%;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.note-card-date {\n  width: 15%;\n  text-align: center;\n  padding: 0.5em;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://notesapp/./src/design.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://notesapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://notesapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://notesapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/design.css":
/*!************************!*\
  !*** ./src/design.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_design_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./design.css */ \"./node_modules/css-loader/dist/cjs.js!./src/design.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_design_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_design_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_design_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_design_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://notesapp/./src/design.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://notesapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://notesapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://notesapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://notesapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://notesapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://notesapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n/* harmony import */ var _createProjectUi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProjectUi */ \"./src/createProjectUi.js\");\n//IMPORTS//\n\n\n\n//VARIABLE DECLARATION\nconst main = document.getElementById(\"main\");\nconst createProjectBtn = document.getElementById(\"menu-btn-addproject\");\n\n\nlet projectList = [];\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.noteList = [];\n  }\n\n  get noteList() {\n    return this._noteList;\n  }\n\n  set noteList(noteList) {\n    this._noteList = noteList;\n  }\n}\n\n//EVENT LISTENERS//\ncreateProjectBtn.addEventListener(\"click\", _createProjectUi__WEBPACK_IMPORTED_MODULE_1__.createNewProjectCardUi);\n\n//FUNCTIONS//\n//called from createProjectUi.js, will create a new project and save it to the array\nconst addNewProject = (name) => {\n  const projectName = new Project(name);\n  projectList.push(projectName);\n  (0,_createProjectUi__WEBPACK_IMPORTED_MODULE_1__.updateProjectMenu)(projectList);\n  //return projectName;\n};\n\nconst deleteProject = (project) => {\n  const indexOfProject = projectList.indexOf(project);\n  if(indexOfProject >= 0 && indexOfProject < projectList.length) {\n    projectList.splice(indexOfProject, 1);\n    (0,_createProjectUi__WEBPACK_IMPORTED_MODULE_1__.updateProjectMenu)(projectList);\n  }\n}\n\n//EXPORTS//\n\n\n\n//# sourceURL=webpack://notesapp/./src/createProject.js?");

/***/ }),

/***/ "./src/createProjectUi.js":
/*!********************************!*\
  !*** ./src/createProjectUi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProjectCardUi: () => (/* binding */ createNewProjectCardUi),\n/* harmony export */   createProjectMenuBtns: () => (/* binding */ createProjectMenuBtns),\n/* harmony export */   updateProjectMenu: () => (/* binding */ updateProjectMenu)\n/* harmony export */ });\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTaskUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskUi */ \"./src/createTaskUi.js\");\n\n\n\n\n//FUNCTIONS//\n//toggles the display mode of the card and it's content used for creating new projects\nconst createNewProjectCardUi = () => {\n  const card = document.getElementById(\"main-create-new-project-card-ui\");\n  const nameInput = document.getElementById(\"main-create-new-project-input\");\n  const submitButton = document.getElementById(\n    \"main-create-new-project-submit\"\n  );\n\n  //checks if the card is already selected\n  if (card.classList.contains(\"hidden\")) {\n    card.classList.remove(\"hidden\");\n  }\n\n  //button that sumbits the new project\n  const newProjectSubmitButtonListener = (event) => {\n    event.preventDefault();\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.addNewProject)(nameInput.value);\n    nameInput.value = \"\";\n    card.classList.add(\"hidden\");\n    // Unregister the event listener\n    submitButton.removeEventListener(\"click\", newProjectSubmitButtonListener);\n  };\n  // Add the event listener\n  submitButton.addEventListener(\"click\", newProjectSubmitButtonListener);\n};\n\nconst renderMain = (project) => {\n  //clearDisplay();\n  (0,_createTaskUi__WEBPACK_IMPORTED_MODULE_2__.addNewNoteBtn)(project);\n  (0,_createTaskUi__WEBPACK_IMPORTED_MODULE_2__.updateNotesMenu)(project);\n};\n\n//creates buttons for the user-made projects\nconst createProjectMenuBtns = (project) => {\n  const projectsContainer = document.createElement(\"div\");\n  projectsContainer.classList.add(\"user-menu-btn-box\");\n\n  const newProjectBtn = document.createElement(\"button\");\n  newProjectBtn.classList.add(\"user-menu-btn\");\n  newProjectBtn.textContent = project.name;\n  newProjectBtn.addEventListener(\"click\", () => {\n    renderMain(project);\n    console.log(project.name);\n  });\n\n  const deleteBtn = document.createElement(\"button\");\n  deleteBtn.classList.add(\"user-menu-delete-btn\");\n  projectsContainer.appendChild(newProjectBtn);\n  projectsContainer.appendChild(deleteBtn);\n  deleteBtn.addEventListener('click', () => {\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project);\n  });\n  return projectsContainer;\n};\n\n//updates the project section of the menu with the projects\nconst updateProjectMenu = (projectList) => {\n  const menuProjects = document.getElementById(\"menu-projects\");\n  menuProjects.textContent = \"\";\n  for (let project of projectList) {\n    menuProjects.appendChild(createProjectMenuBtns(project));\n  }\n  console.log(`Project list: ${projectList} \\n Number of projects: ${projectList.length}`);\n};\n\n\n\n\n//# sourceURL=webpack://notesapp/./src/createProjectUi.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewNote: () => (/* binding */ createNewNote)\n/* harmony export */ });\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n/* harmony import */ var _createTaskUi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskUi */ \"./src/createTaskUi.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\n\n\n//note class structure\nclass Note {\n  constructor(title, text, important, date, color) {\n    this.id = this.newId();\n    this.title = title;\n    this.text = text;\n    this.important = important;\n    this.date = date;\n    this.done = false; // Initialize as not done\n    this.color = color;\n  }\n\n  newId() {\n    const id = Math.random().toString(36).substring(2, 12);\n    console.log(`Random character: ${id}`);\n    return id;\n  }\n  doneBtn() {\n    //this.done = true;\n    console.log(\"done\");\n  }\n\n  editNote() {\n    console.log(\"Edit\");\n  }\n\n  deleteNote(project) {\n    const noteIndex = project.noteList.findIndex((note) => note.id === this.id);\n\n    if (noteIndex !== -1) {\n      project.noteList.splice(noteIndex, 1);\n      (0,_createTaskUi__WEBPACK_IMPORTED_MODULE_1__.updateNotesMenu)(project);\n      console.log(`Note: ${this.title} was removed`);\n      console.log(project.noteList);\n    }\n  }\n}\n\n//creates the new note\nconst createNewNote = (project, title, text, important, date, color) => {\n  const note = new Note(title, text, important, date, color);\n  /*pushes the note to it's project array*/\n  project.noteList.push(note);\n  console.log(project.noteList);\n};\n\n\n\n\n//# sourceURL=webpack://notesapp/./src/createTask.js?");

/***/ }),

/***/ "./src/createTaskUi.js":
/*!*****************************!*\
  !*** ./src/createTaskUi.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewNoteBtn: () => (/* binding */ addNewNoteBtn),\n/* harmony export */   createNewNoteCardUi: () => (/* binding */ createNewNoteCardUi),\n/* harmony export */   updateNotesMenu: () => (/* binding */ updateNotesMenu)\n/* harmony export */ });\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\n\n\n//creates button that is used for creating new notes\nconst addNewNoteBtn = (project) => {\n  const main = document.getElementById(\"main\");\n  const topMenu = document.createElement(\"div\");\n  topMenu.id = \"main-create-new-note-header\";\n  const newNoteBtn = document.createElement(\"button\");\n  newNoteBtn.id = \"main-create-new-note-btn\";\n  newNoteBtn.textContent = \"+ Create new note\";\n  //event listener that triggers the UI that takes input for the notes\n  newNoteBtn.addEventListener(\"click\", () => {\n    //creates new card UI that takes new note info\n    createNewNoteCardUi(project);\n  });\n  main.appendChild(topMenu);\n  topMenu.appendChild(newNoteBtn);\n};\n\n//creates the UI for the new note inputs\nconst createNewNoteCardUi = (project) => {\n  const card = document.getElementById(\"new-note-card-ui\");\n  const titleInput = document.getElementById(\"new-note-card-ui-title-input\");\n  const descriptionInput = document.getElementById(\n    \"new-note-card-ui-description-input\"\n  );\n  const setImportant = document.getElementById(\"new-note-card-ui-important\");\n  const setDate = document.getElementById(\"new-note-card-ui-add-date\");\n  const setColor = document.getElementById(\"new-note-card-ui-color\");\n  setColor.addEventListener(\"input\", () => {\n    const selectedColor = setColor.value;\n    return selectedColor;\n  });\n  const submitButton = document.getElementById(\"new-note-card-ui-submit\");\n\n  //toggles the card\n  if (card.classList.contains(\"hidden\")) {\n    card.classList.remove(\"hidden\");\n  }\n\n  // event listener that procees with the note creation\n  const newNoteSubmitButtonListener = (event) => {\n    //prevents the refresh of the page\n    event.preventDefault();\n    //creates the new note with the user inputs\n    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createNewNote)(\n      project,\n      titleInput.value,\n      descriptionInput.value,\n      setImportant.value,\n      setDate.value,\n      setColor.value\n    );\n    updateNotesMenu(project);\n    titleInput.value = \"\";\n    descriptionInput.value = \"\";\n    setColor.value = \"#7eaaa1\";\n    card.classList.add(\"hidden\");\n    submitButton.removeEventListener(\"click\", newNoteSubmitButtonListener);\n  };\n  submitButton.addEventListener(\"click\", newNoteSubmitButtonListener);\n};\n\n//creates the UI for the card\nconst createNoteCard = (note, projects) => {\n  const noteCard = document.createElement(\"div\");\n  noteCard.classList.add(\"note-card\");\n  noteCard.style.borderColor = note.color;\n  noteCard.appendChild(createCardDoneBtn(note));\n  noteCard.appendChild(createCardElements(\"note-card-title\", note.title));\n  noteCard.appendChild(createCardElements(\"note-card-text\", note.text));\n  noteCard.appendChild(\n    createCardElements(\"note-card-important\", note.important)\n  );\n  noteCard.appendChild(createCardElements(\"note-card-date\", note.date));\n  noteCard.appendChild(createCardEditBtn(note));\n  noteCard.appendChild(createCardDeleteBtn(note, projects));\n  return noteCard;\n};\n\n//for a better organisation, all the content of the note card\n//will be created using this function\nconst createCardElements = (cls, text) => {\n  const paragraph = document.createElement(\"p\");\n  const txt = document.createElement(\"div\");\n  txt.classList.add(cls);\n  paragraph.textContent = text;\n  txt.appendChild(paragraph);\n  return txt;\n};\n\n//creates the button that toggles if user did or didn't finish the task\nconst createCardDoneBtn = (note) => {\n  const btnContainer = document.createElement(\"div\");\n  btnContainer.classList.add(\"note-card-btn-container\");\n  const btn = document.createElement(\"button\");\n  btn.classList.add(\"note-card-btn\");\n  btn.addEventListener(\"click\", () => {\n    note.doneBtn();\n  });\n  btnContainer.appendChild(btn);\n  return btnContainer;\n};\n\n//creates the button that let user edit the note content\nconst createCardEditBtn = (note) => {\n  const btnContainer = document.createElement(\"div\");\n  btnContainer.classList.add(\"note-card-btn-container\");\n  const btn = document.createElement(\"button\");\n  btn.classList.add(\"note-card-btn\");\n  btn.addEventListener(\"click\", () => {\n    note.editNote(note);\n  });\n  btnContainer.appendChild(btn);\n  return btnContainer;\n};\n\n//creates the button that deletes the note\nconst createCardDeleteBtn = (note, project) => {\n  const btnContainer = document.createElement(\"div\");\n  btnContainer.classList.add(\"note-card-btn-container\");\n  const btn = document.createElement(\"button\");\n  btn.classList.add(\"note-card-btn\");\n  btn.addEventListener(\"click\", () => {\n    note.deleteNote(project);\n  });\n  btnContainer.appendChild(btn);\n  return btnContainer;\n};\n\n//display the notes of a selected project\nconst updateNotesMenu = (projects) => {\n  const main = document.getElementById(\"main\");\n  let cardSection = document.getElementById(\"main-notes-sct\");\n  //checks if cardSection isn't already created\n  if (!cardSection) {\n    cardSection = document.createElement(\"div\");\n    cardSection.id = \"main-notes-sct\";\n    main.appendChild(cardSection);\n  }\n\n  (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.clearDisplay)(cardSection);\n  main.appendChild(cardSection);\n  //displays all the notes inside a project\n  for (let note of projects.noteList) {\n    cardSection.appendChild(createNoteCard(note, projects));\n  }\n};\n\n\n\n\n//# sourceURL=webpack://notesapp/./src/createTaskUi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _design_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design.css */ \"./src/design.css\");\n/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpage.js */ \"./src/webpage.js\");\n\n\n\n(0,_webpage_js__WEBPACK_IMPORTED_MODULE_1__.renderPage)();\n\n//# sourceURL=webpack://notesapp/./src/index.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearDisplay: () => (/* binding */ clearDisplay),\n/* harmony export */   renderPage: () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n//import {createTask} from './createTask';\n\nconst menuBtnAll = document.getElementById(\"menu-btn-all\");\nconst menuBtnToday = document.getElementById(\"menu-btn-today\");\nconst menuBtnTommorow = document.getElementById(\"menu-btn-tommorow\");\nconst menuBtnWeek = document.getElementById(\"menu-btn-week\");\nconst menuBtnMonth = document.getElementById(\"menu-btn-month\");\n\nconst changeMenu = () => {\n  menuBtnAll.addEventListener(\"click\", () => {\n    //showAll();\n  });\n\n  menuBtnToday.addEventListener(\"click\", () => {\n    //showToday();\n  });\n\n  menuBtnTommorow.addEventListener(\"click\", () => {\n    //showTommorow();\n  });\n\n  menuBtnWeek.addEventListener(\"click\", () => {\n    //showWeek();\n  });\n\n  menuBtnMonth.addEventListener(\"click\", () => {\n    //showMonth();\n  });\n};\n\nconst renderPage = () => {\n  //changeMenu();\n  //showAll();\n};\n\nconst clearDisplay = (container) => {\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n  //const content = document.getElementById(id);\n  //content.textContent = \"\";\n};\n\n\n\n\n//# sourceURL=webpack://notesapp/./src/webpage.js?");

/***/ }),

/***/ "./src/assets/icons/icon-recycle-bin.png":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon-recycle-bin.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d212b0a74f11d627f639.png\";\n\n//# sourceURL=webpack://notesapp/./src/assets/icons/icon-recycle-bin.png?");

/***/ }),

/***/ "./src/assets/fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fda4fe301bde690ee271.ttf\";\n\n//# sourceURL=webpack://notesapp/./src/assets/fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;