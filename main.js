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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Begin reset */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* End reset */\n\n:root {\n    --shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.25);\n    --text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: whitesmoke;\n}\n\nh1 {\n    font-weight: bold;\n    font-size: 2em;\n    padding: 30px 0px;\n    color: black;\n}\n\nbutton {\n    height: 40px;\n    width: 40px;\n    border-radius: 999px;\n    border: solid 2px black;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center; \n}\n\ninput[type='checkbox'] {\n    height: 40px;\n    width: 40px;\n    border-radius: 999px;\n    border-style: none;\n    margin: 0;\n    clip-path: circle(20px);\n    appearance: none;\n    background-color: white;\n    border: solid 2px black;\n    margin-left: auto;\n}\n\ninput[type='checkbox']:checked {\n    appearance: auto;\n}\n\ninput[type='date'] {\n    box-sizing: border-box;\n    height: 40px;\n    font-family: inherit;\n    border-radius: 999px;\n    border: solid 2px black;\n    padding: 5px 10px;\n    margin: 0;\n}\n\n.buttonbox {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 5px;\n    padding: 15px;\n}\n\n.titlebox {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: center;\n}\n\n.titlebox>.name {\n    flex: 1;\n}\n\n[contenteditable] {\n    -webkit-user-modify: read-write-plaintext-only;\n}\n\n.container {\n    width: min(90%, 800px);\n}\n\n.projectcontainer {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.project {\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    border-radius: 10px;\n    box-shadow: var(--shadow);\n    border: 2px solid black;\n}\n\n.todo {\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 0px 15px;\n}\n\n.green {\n    background-color: #86efac;\n}\n\n.yellow {\n    background-color: #fde68a;\n}\n\n.red {\n    background-color: #fb7185;\n}\n\n.complete {\n    opacity: 25%;\n}\n\n.name {\n    font-size: 1.5em;\n    padding: 15px;\n    font-weight: bold;\n}\n\n.description {\n    font-size: 1em;\n    padding: 15px;\n}\n\n.date {\n    margin: 0px 15px;\n}\n\n.newproject,\n.newtodo {\n    height: 40px;\n    width: 40px;\n    border-radius: 999px;\n    color: black;\n    background-color: white;\n    align-self: center;\n    margin-bottom: 15px;\n}\n\n.newproject {\n    box-shadow: var(--shadow);\n}\n\n.deleteproject,\n.deletetodo {\n    height: 40px;\n    width: 40px;\n    border-radius: 999px;\n}\n\n.deleteproject {\n    margin: 15px;\n    margin-left: 0px;\n    align-self: start;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! array-move */ \"./node_modules/array-move/index.js\");\n/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash-can.svg */ \"./src/img/trash-can.svg\");\n/* harmony import */ var _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/plus-thick.svg */ \"./src/img/plus-thick.svg\");\n/* harmony import */ var _img_arrow_up_bold_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/arrow-up-bold.svg */ \"./src/img/arrow-up-bold.svg\");\n/* harmony import */ var _img_arrow_down_bold_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/arrow-down-bold.svg */ \"./src/img/arrow-down-bold.svg\");\n\n\n\n\n\n\n\n\n/* definitions */\nlet projectList = [];\nconst projectContainer = document.querySelector('.projectcontainer');\n\n/* factories */\nfunction createProject(name) {\n    name = name;\n    let todoList = [];\n\n    const addTodo = (name, complete, description, date, priority) => {\n        todoList.push(createTodo(name, complete, description, date, priority));\n    };\n\n    return { name, todoList, addTodo };\n};\n\nfunction createTodo(name, complete, description, date, priority) {\n    name = name;\n    complete = complete;\n    description = description;\n    date = date;\n    priority = priority;\n\n    return { name, complete, description, date, priority };\n};\n\n/* functions */\nfunction today() {\n    return new Date().toJSON().slice(0, 10);\n}\n\nfunction domUpdate() {\n    projectContainer.innerHTML = '';\n    for (const project of projectList) {\n        // add project\n        let projectElement = document.createElement('div');\n        projectElement.classList.add('project');\n\n        let buttonBox = document.createElement('div');\n        buttonBox.classList.add('titlebox');\n        projectElement.appendChild(buttonBox);\n\n        let nameElement = document.createElement('div');\n        nameElement.classList.add('name');\n        nameElement.innerHTML = project.name;\n        nameElement.setAttribute('contenteditable', 'true');\n        nameElement.addEventListener('input', (e) => project.name = e.target.textContent);\n        nameElement.oninput = (() => storageSet());\n        buttonBox.appendChild(nameElement);\n\n        let projectDeleteButton = document.createElement('button');\n        projectDeleteButton.classList.add('deleteproject');\n        projectDeleteButton.innerHTML = '<img class=\"icon\" src=\"' + _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ +'\">';\n        projectDeleteButton.addEventListener('click', () => {\n            if (window.confirm('Really delete?')) {\n                projectList = projectList.filter((e) => e !== project);\n                domUpdate();\n            }\n        });\n        buttonBox.appendChild(projectDeleteButton);\n\n        projectContainer.appendChild(projectElement);\n\n        for (const todo of project.todoList) {\n            // add todo\n            let todoElement = document.createElement('div');\n            todoElement.classList.add('todo');\n            todoElement.classList.add(todo.priority);\n            if (todo.complete) {\n                todoElement.classList.add('complete');\n            }\n\n            let nameElement = document.createElement('div');\n            nameElement.classList.add('name');\n            nameElement.innerHTML = todo.name;\n            nameElement.setAttribute('contenteditable', 'true');\n            nameElement.addEventListener('input', (e) => todo.name = e.target.textContent);\n            nameElement.oninput = (() => storageSet());\n            todoElement.appendChild(nameElement);\n\n            let descriptionElement = document.createElement('div');\n            descriptionElement.classList.add('description');\n            descriptionElement.innerHTML = todo.description;\n            descriptionElement.setAttribute('contenteditable', 'true');\n            descriptionElement.addEventListener('input', (e) => todo.description = e.target.textContent);\n            descriptionElement.oninput = (() => storageSet());\n            todoElement.appendChild(descriptionElement);\n\n            let buttonBox = document.createElement('div');\n            buttonBox.classList.add('buttonbox');\n            todoElement.appendChild(buttonBox);\n\n            let priorityGreenElement = document.createElement('button');\n            priorityGreenElement.classList.add('priority', 'green');\n            priorityGreenElement.addEventListener('click', (e) => {\n                todo.priority = 'green';\n                e.target.parentElement.parentElement.classList.replace('yellow', 'green');\n                e.target.parentElement.parentElement.classList.replace('red', 'green');\n                storageSet();\n            });\n            buttonBox.appendChild(priorityGreenElement);\n\n            let priorityYellowElement = document.createElement('button');\n            priorityYellowElement.classList.add('priority', 'yellow');\n            priorityYellowElement.addEventListener('click', (e) => {\n                todo.priority = 'yellow';\n                e.target.parentElement.parentElement.classList.replace('green', 'yellow');\n                e.target.parentElement.parentElement.classList.replace('red', 'yellow');\n                storageSet();\n            });\n            priorityYellowElement.oninput = (() => storageSet());\n            buttonBox.appendChild(priorityYellowElement);\n\n            let priorityRedElement = document.createElement('button');\n            priorityRedElement.classList.add('priority', 'red');\n            priorityRedElement.addEventListener('click', (e) => {\n                todo.priority = 'red';\n                e.target.parentElement.parentElement.classList.replace('green', 'red');\n                e.target.parentElement.parentElement.classList.replace('yellow', 'red');\n                storageSet();\n            });\n            priorityRedElement.oninput = (() => storageSet());\n            buttonBox.appendChild(priorityRedElement);\n\n            let dateElement = document.createElement('input');\n            dateElement.setAttribute('type', 'date');\n            dateElement.classList.add('date');\n            dateElement.value = todo.date;\n            dateElement.addEventListener('input', (e) => todo.date = e.target.value);\n            dateElement.oninput = (() => storageSet());\n            buttonBox.appendChild(dateElement);\n\n            let completeElement = document.createElement('input');\n            completeElement.setAttribute('type', 'checkbox');\n            completeElement.checked = todo.complete;\n            completeElement.addEventListener('input', (e) => {\n                todo.complete = e.target.checked;\n                if (e.target.checked) {\n                    e.target.parentElement.parentElement.classList.add('complete');\n                } else {\n                    e.target.parentElement.parentElement.classList.remove('complete');\n                }\n                domUpdate();\n            });\n            completeElement.oninput = (() => storageSet());\n            buttonBox.appendChild(completeElement);\n\n            let todoDeleteButton = document.createElement('button');\n            todoDeleteButton.classList.add('deletetodo');\n            todoDeleteButton.innerHTML = '<img class=\"icon\" src=\"' + _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ +'\">';\n            todoDeleteButton.addEventListener('click', () => {\n                if (window.confirm('Really delete?')) {\n                    project.todoList = project.todoList.filter((e) => e !== todo);\n                    domUpdate();\n                }\n            });\n            buttonBox.appendChild(todoDeleteButton);\n\n            let todoUpButton = document.createElement('button');\n            todoUpButton.innerHTML = '<img class=\"icon\" src=\"' + _img_arrow_up_bold_svg__WEBPACK_IMPORTED_MODULE_4__ +'\">';\n            todoUpButton.addEventListener('click', () => {\n                let todoIndex = project.todoList.findIndex((e) => e === todo);\n                if (todoIndex > 0) {\n                    (0,array_move__WEBPACK_IMPORTED_MODULE_1__.arrayMoveMutable)(project.todoList, todoIndex, todoIndex - 1);\n                    domUpdate();\n                }\n            });\n            buttonBox.appendChild(todoUpButton);\n\n            let todoDownButton = document.createElement('button');\n            todoDownButton.innerHTML = '<img class=\"icon\" src=\"' + _img_arrow_down_bold_svg__WEBPACK_IMPORTED_MODULE_5__ +'\">';\n            todoDownButton.addEventListener('click', () => {\n                let todoIndex = project.todoList.findIndex((e) => e === todo);\n                if (todoIndex < project.todoList.length - 1) {\n                    (0,array_move__WEBPACK_IMPORTED_MODULE_1__.arrayMoveMutable)(project.todoList, todoIndex, todoIndex + 1);\n                    domUpdate();\n                }\n            });\n            buttonBox.appendChild(todoDownButton);\n\n            projectElement.appendChild(todoElement);\n        }\n        // add new todo button\n        let newTodoButton = document.createElement('button');\n        newTodoButton.classList.add('newtodo');\n        newTodoButton.innerHTML = '<img class=\"icon\" src=\"' + _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_3__ +'\">';\n        newTodoButton.addEventListener('click', () => {\n            project.addTodo('New todo', false, 'Description', today(), 'green');\n            domUpdate();\n        })\n        projectElement.appendChild(newTodoButton);\n    }\n    // add new project button\n    let newProjectButton = document.createElement('button');\n    newProjectButton.classList.add('newproject');\n    newProjectButton.innerHTML = '<img class=\"icon\" src=\"' + _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_3__ +'\">';\n    newProjectButton.addEventListener('click', () => {\n        projectList.push(createProject('New project'));\n        domUpdate();\n    })\n    projectContainer.appendChild(newProjectButton);\n    storageSet();\n}\n\nfunction storageAvailable(type) {\n    let storage;\n    try {\n        storage = window[type];\n        const x = \"__storage_test__\";\n        storage.setItem(x, x);\n        storage.removeItem(x);\n        return true;\n    } catch (e) {\n        return (\n            e instanceof DOMException &&\n            // everything except Firefox\n            (e.code === 22 ||\n                // Firefox\n                e.code === 1014 ||\n                // test name field too, because code might not be present\n                // everything except Firefox\n                e.name === \"QuotaExceededError\" ||\n                // Firefox\n                e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\n            // acknowledge QuotaExceededError only if there's something already stored\n            storage &&\n            storage.length !== 0\n        );\n    }\n}\n\nfunction storageSet() {\n    if (!storageAvailable('localStorage')) {\n        return;\n    } else {\n        localStorage.setItem('projectList', JSON.stringify(projectList));\n    };\n}\n\nfunction storageGet() {\n    if (!storageAvailable('localStorage')) {\n        return;\n    } else if (localStorage.getItem('projectList')) {\n        let gotProjectList = JSON.parse(localStorage.getItem('projectList'));\n        // recreate project list from got project list to preserve methods\n        projectList = [];\n        for (let projectIndex = 0; projectIndex < gotProjectList.length; projectIndex++) {\n            // create project\n            projectList.push(createProject(gotProjectList[projectIndex].name));\n            for (let todoIndex = 0; todoIndex < gotProjectList[projectIndex].todoList.length; todoIndex++) {\n                // create todo\n                projectList[projectIndex].todoList.push(createTodo(\n                    gotProjectList[projectIndex].todoList[todoIndex].name,\n                    gotProjectList[projectIndex].todoList[todoIndex].complete,\n                    gotProjectList[projectIndex].todoList[todoIndex].description,\n                    gotProjectList[projectIndex].todoList[todoIndex].date,\n                    gotProjectList[projectIndex].todoList[todoIndex].priority\n                ));\n            }\n        }\n    };\n}\n\nstorageGet();\ndomUpdate();\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/img/arrow-down-bold.svg":
/*!*************************************!*\
  !*** ./src/img/arrow-down-bold.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"deaa681ed6228cb7170c.svg\";\n\n//# sourceURL=webpack://odin-todo/./src/img/arrow-down-bold.svg?");

/***/ }),

/***/ "./src/img/arrow-up-bold.svg":
/*!***********************************!*\
  !*** ./src/img/arrow-up-bold.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81a5942a3e0868f45265.svg\";\n\n//# sourceURL=webpack://odin-todo/./src/img/arrow-up-bold.svg?");

/***/ }),

/***/ "./src/img/plus-thick.svg":
/*!********************************!*\
  !*** ./src/img/plus-thick.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"469e7f772cffd2e91e89.svg\";\n\n//# sourceURL=webpack://odin-todo/./src/img/plus-thick.svg?");

/***/ }),

/***/ "./src/img/trash-can.svg":
/*!*******************************!*\
  !*** ./src/img/trash-can.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4a7b26be64c05d0f239.svg\";\n\n//# sourceURL=webpack://odin-todo/./src/img/trash-can.svg?");

/***/ }),

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayMoveImmutable: () => (/* binding */ arrayMoveImmutable),\n/* harmony export */   arrayMoveMutable: () => (/* binding */ arrayMoveMutable)\n/* harmony export */ });\nfunction arrayMoveMutable(array, fromIndex, toIndex) {\n\tconst startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;\n\n\tif (startIndex >= 0 && startIndex < array.length) {\n\t\tconst endIndex = toIndex < 0 ? array.length + toIndex : toIndex;\n\n\t\tconst [item] = array.splice(fromIndex, 1);\n\t\tarray.splice(endIndex, 0, item);\n\t}\n}\n\nfunction arrayMoveImmutable(array, fromIndex, toIndex) {\n\tarray = [...array];\n\tarrayMoveMutable(array, fromIndex, toIndex);\n\treturn array;\n}\n\n\n//# sourceURL=webpack://odin-todo/./node_modules/array-move/index.js?");

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