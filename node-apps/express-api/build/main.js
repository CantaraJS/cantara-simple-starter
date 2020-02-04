/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../cantara-simple-starter/node-apps/express-api/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../cantara-simple-starter/node-apps/express-api/src/index.ts":
/*!***********************************************************!*\
  !*** .-simple-starter/node-apps/express-api/src/index.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-api */ \"../cantara-simple-starter/packages/core-api/src/index.ts\");\n\n\n\n\nfunction main() {\n  const port = process.env.PORT || 3001;\n  const app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n  app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\n  const coreApi = new core_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    apiKey: \"1234\"\n  });\n  app.get('/', async (_, res) => {\n    res.json({\n      image: await coreApi.get()\n    });\n  });\n  app.listen(port, () => {\n    console.log(`API server listening on ::${port}`);\n  });\n}\n\nmain();\n\n//# sourceURL=webpack:///.-simple-starter/node-apps/express-api/src/index.ts?");

/***/ }),

/***/ "../cantara-simple-starter/packages/core-api/src/index.ts":
/*!*******************************************************!*\
  !*** .-simple-starter/packages/core-api/src/index.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RandomImageAPI; });\n/* harmony import */ var follow_redirects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! follow-redirects */ \"follow-redirects\");\n/* harmony import */ var follow_redirects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(follow_redirects__WEBPACK_IMPORTED_MODULE_0__);\n\nclass RandomImageAPI {\n  constructor({\n    apiKey\n  }) {\n    this.apiKey = void 0;\n    this.apiKey = apiKey;\n  }\n  /** Get a random image */\n\n\n  get() {\n    if (!this.apiKey) {\n      // This code will never be executed,\n      // but it's just here to demonstrate\n      // how to use env vars with\n      // Cantara\n      throw new Error('API_KEY_NO_SET');\n    }\n\n    return new Promise(resolve => {\n      follow_redirects__WEBPACK_IMPORTED_MODULE_0___default.a.https.get('https://source.unsplash.com/random', response => {\n        resolve(response.responseUrl);\n      });\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///.-simple-starter/packages/core-api/src/index.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "follow-redirects":
/*!***********************************!*\
  !*** external "follow-redirects" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"follow-redirects\");\n\n//# sourceURL=webpack:///external_%22follow-redirects%22?");

/***/ })

/******/ });