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

/***/ "./attributes.js":
/*!***********************!*\
  !*** ./attributes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nfunction registerAttributes(settings, name) {\n  if (!_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLOCKS[name]) {\n    return settings;\n  }\n  settings.attributes = _objectSpread(_objectSpread({}, settings.attributes), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED, {\n    type: 'boolean',\n    default: false\n  }), _constants__WEBPACK_IMPORTED_MODULE_0__.ADD_AS_OPTION, {\n    type: 'boolean',\n    default: false\n  }), _constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_LABEL, {\n    type: 'string',\n    default: 'Select All'\n  }), _constants__WEBPACK_IMPORTED_MODULE_0__.DESELECT_ALL_LABEL, {\n    type: 'string',\n    default: 'Deselect All'\n  }));\n  return settings;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerAttributes);\n\n//# sourceURL=webpack:///./attributes.js?");

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_AS_OPTION: () => (/* binding */ ADD_AS_OPTION),\n/* harmony export */   CHECKBOX_FIELD: () => (/* binding */ CHECKBOX_FIELD),\n/* harmony export */   DESELECT_ALL_LABEL: () => (/* binding */ DESELECT_ALL_LABEL),\n/* harmony export */   SELECT_ALL_ENABLED: () => (/* binding */ SELECT_ALL_ENABLED),\n/* harmony export */   SELECT_ALL_LABEL: () => (/* binding */ SELECT_ALL_LABEL),\n/* harmony export */   SELECT_FIELD: () => (/* binding */ SELECT_FIELD),\n/* harmony export */   SUPPORTED_BLOCKS: () => (/* binding */ SUPPORTED_BLOCKS)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar SELECT_ALL_ENABLED = 'jfb_select_all_options_enabled';\nvar SELECT_ALL_LABEL = 'jfb_select_all_options_select_label';\nvar DESELECT_ALL_LABEL = 'jfb_select_all_options_deselect_label';\nvar ADD_AS_OPTION = 'jfb_select_all_options_add_as_option';\nvar CHECKBOX_FIELD = 'jet-forms/checkbox-field';\nvar SELECT_FIELD = 'jet-forms/select-field';\nvar SUPPORTED_BLOCKS = _defineProperty(_defineProperty({}, CHECKBOX_FIELD, 'all'), SELECT_FIELD, 'multiple');\n\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./controls.js":
/*!*********************!*\
  !*** ./controls.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar addFilter = wp.hooks.addFilter;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n  TextControl = _wp$components.TextControl,\n  ToggleControl = _wp$components.ToggleControl,\n  Panel = _wp$components.Panel,\n  PanelRow = _wp$components.PanelRow,\n  PanelBody = _wp$components.PanelBody;\nvar addControls = createHigherOrderComponent(function (BlockEdit) {\n  return function (props) {\n    var blockName = props.name,\n      supportType = _constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLOCKS[blockName] || false;\n    if (!supportType) {\n      return wp.element.createElement(BlockEdit, props);\n    }\n    var attributes = props.attributes,\n      setAttributes = props.setAttributes,\n      isSelected = props.isSelected;\n    console.log(blockName, supportType, attributes, attributes[supportType]);\n    if (supportType !== 'all' && !attributes[supportType]) {\n      return wp.element.createElement(BlockEdit, props);\n    }\n    if (typeof attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_LABEL] === 'undefined') {\n      setAttributes(attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_LABEL]);\n    }\n    return wp.element.createElement(React.Fragment, null, wp.element.createElement(BlockEdit, props), isSelected && wp.element.createElement(InspectorControls, null, wp.element.createElement(Panel, null, wp.element.createElement(PanelBody, {\n      title: \"Select All\",\n      initialOpen: false\n    }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {\n      label: \"Enable 'Select All'\",\n      help: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED] ? 'Enabled.' : 'Disabled.',\n      checked: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED],\n      onChange: function onChange() {\n        setAttributes(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED, !attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED]));\n      }\n    })), attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED] && wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {\n      label: \"Add as option\",\n      help: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.ADD_AS_OPTION] ? 'The first option will be a \"Select All\" option' : '\"Select All\" and \"Deselect All\" buttons will be added',\n      checked: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.ADD_AS_OPTION],\n      onChange: function onChange() {\n        setAttributes(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_0__.ADD_AS_OPTION, !attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.ADD_AS_OPTION]));\n      }\n    })), attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED] && wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {\n      label: \"Select All label\",\n      help: '',\n      value: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_LABEL],\n      onChange: function onChange(newValue) {\n        setAttributes(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_LABEL, newValue));\n      }\n    })), attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_ALL_ENABLED] && !attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.ADD_AS_OPTION] && wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {\n      label: \"Deselect All label\",\n      help: '',\n      value: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.DESELECT_ALL_LABEL],\n      onChange: function onChange(newValue) {\n        setAttributes(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_0__.DESELECT_ALL_LABEL, newValue));\n      }\n    }))))));\n  };\n}, 'addControls');\naddFilter('editor.BlockEdit', 'jet-form-builder/update-fields', addControls);\n\n//# sourceURL=webpack:///./controls.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ \"./attributes.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ \"./controls.js\");\n\n\n// import registerListingUpdater from './blocks/listing-updater';\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('blocks.registerBlockType', 'jfb-select-all/block-attributes', _attributes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n// function registerBlocks() {\n// \tregisterListingUpdater();\n// }\n\n// document.addEventListener( 'jet-form-builder-initialized', registerBlocks );\n\nconsole.log('select all');\n\n//# sourceURL=webpack:///./main.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;