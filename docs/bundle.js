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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.form-switch {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.form-switch i {\n  position: relative;\n  display: inline-block;\n  margin-right: 0.5rem;\n  width: 46px;\n  height: 26px;\n  background-color: #e6e6e6;\n  border-radius: 23px;\n  vertical-align: text-bottom;\n  transition: all 0.3s linear;\n}\n\n.form-switch i::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 42px;\n  height: 22px;\n  background-color: #fff;\n  border-radius: 11px;\n  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);\n  transition: all 0.25s linear;\n}\n\n.form-switch i::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 22px;\n  height: 22px;\n  background-color: #fff;\n  border-radius: 11px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);\n  transform: translate3d(2px, 2px, 0);\n  transition: all 0.2s ease-in-out;\n}\n\n.form-switch:active i::after {\n  width: 28px;\n  transform: translate3d(2px, 2px, 0);\n}\n\n.form-switch:active input:checked + i::after {\n  transform: translate3d(16px, 2px, 0);\n}\n\n.form-switch input {\n  display: none;\n}\n\n.form-switch input:checked + i {\n  background-color: #4bd763;\n}\n\n.form-switch input:checked + i::before {\n  transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);\n}\n\n.form-switch input:checked + i::after {\n  transform: translate3d(22px, 2px, 0);\n}", "",{"version":3,"sources":["webpack://src/assets/styles/index.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAEA;EACE,oBAAA;EACA,mBAAA;EACA,eAAA;EACA,wCAAA;AACF;;AAEA;EACE,kBAAA;EACA,qBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,2BAAA;EACA,2BAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,oDAAA;EACA,4BAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,yCAAA;EACA,mCAAA;EACA,gCAAA;AACF;;AAEA;EACE,WAAA;EACA,mCAAA;AACF;;AAEA;EACE,oCAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,qDAAA;AACF;;AAEA;EACE,oCAAA;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.form-switch {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.form-switch i {\n  position: relative;\n  display: inline-block;\n  margin-right: 0.5rem;\n  width: 46px;\n  height: 26px;\n  background-color: #e6e6e6;\n  border-radius: 23px;\n  vertical-align: text-bottom;\n  transition: all 0.3s linear;\n}\n\n.form-switch i::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 42px;\n  height: 22px;\n  background-color: #fff;\n  border-radius: 11px;\n  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);\n  transition: all 0.25s linear;\n}\n\n.form-switch i::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 22px;\n  height: 22px;\n  background-color: #fff;\n  border-radius: 11px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);\n  transform: translate3d(2px, 2px, 0);\n  transition: all 0.2s ease-in-out;\n}\n\n.form-switch:active i::after {\n  width: 28px;\n  transform: translate3d(2px, 2px, 0);\n}\n\n.form-switch:active input:checked + i::after {\n  transform: translate3d(16px, 2px, 0);\n}\n\n.form-switch input {\n  display: none;\n}\n\n.form-switch input:checked + i {\n  background-color: #4bd763;\n}\n\n.form-switch input:checked + i::before {\n  transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);\n}\n\n.form-switch input:checked + i::after {\n  transform: translate3d(22px, 2px, 0);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/audio/beep.mp3":
/*!***********************************!*\
  !*** ./src/assets/audio/beep.mp3 ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "beep.46a320adca995b97493293c9183a6590.mp3");

/***/ }),

/***/ "./src/assets/audio/have-a-good-day.mp3":
/*!**********************************************!*\
  !*** ./src/assets/audio/have-a-good-day.mp3 ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "have-a-good-day.39b2d2ce81d868781de8102e050b818b.mp3");

/***/ }),

/***/ "./src/assets/audio/line-is-busy.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/line-is-busy.mp3 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "line-is-busy.e22bf01b4b1a516b48e88f4828364d47.mp3");

/***/ }),

/***/ "./src/assets/audio/saved-message.mp3":
/*!********************************************!*\
  !*** ./src/assets/audio/saved-message.mp3 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "saved-message.2020e4e66d1945abeb5326d95382e8c0.mp3");

/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var make_beep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! make-beep */ "./src/make-beep.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var recognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recognition */ "./src/recognition.ts");
/* harmony import */ var is_exit_speech_phrase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is-exit-speech-phrase */ "./src/is-exit-speech-phrase.ts");
/* harmony import */ var assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/styles/index.scss */ "./src/assets/styles/index.scss");
/* harmony import */ var assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// import { textToSpeech } from "text-to-speech";




const useVoiceCheck = Object(utils__WEBPACK_IMPORTED_MODULE_1__["getByRole"])("use-voice");
const button = Object(utils__WEBPACK_IMPORTED_MODULE_1__["getByRole"])("button");
const container = Object(utils__WEBPACK_IMPORTED_MODULE_1__["getByRole"])("speech-results");
button &&
    container &&
    useVoiceCheck &&
    makeSpeechRecognition(button, container, useVoiceCheck);
const resultsArray = [];
function makeSpeechRecognition(button, textContainer, useVoiceCheck) {
    let listening = false;
    let useVoice = true;
    const recognition = Object(recognition__WEBPACK_IMPORTED_MODULE_2__["makeRecognitionService"])({ onResult });
    useVoiceCheck.addEventListener("change", (e) => {
        const target = e.target;
        useVoice = target.checked;
    });
    button.addEventListener("click", onButtonClick);
    function onButtonClick() {
        return __awaiter(this, void 0, void 0, function* () {
            if (listening) {
                stop();
            }
            else {
                yield Object(make_beep__WEBPACK_IMPORTED_MODULE_0__["playLineIsBusy"])();
                yield Object(make_beep__WEBPACK_IMPORTED_MODULE_0__["playBeep"])();
                start();
            }
        });
    }
    function addSpeechResult({ text, timestamp, from }) {
        resultsArray.push({
            text,
            timestamp,
            from,
        });
        const textElement = Object(utils__WEBPACK_IMPORTED_MODULE_1__["render"])("p", {
            style: {
                background: "#eee",
                maxWidth: "80%",
                padding: "5px",
                marginBottom: "5px",
                borderRadius: "3px",
                alignSelf: from === "user" ? "flex-end" : "flex-start",
            },
        }, [text]);
        Object(utils__WEBPACK_IMPORTED_MODULE_1__["appendChild"])(textContainer, textElement);
    }
    function start() {
        listening = true;
        textContainer.innerHTML = "";
        resultsArray.length = 0;
        recognition.start();
        button.textContent = "Закончить разговор";
    }
    function stop() {
        listening = false;
        recognition.stop();
        button.textContent = "Начать разговор";
        console.log(resultsArray);
    }
    function onResult(e) {
        if (!listening)
            return;
        for (const res of e.results) {
            const transcription = res[0].transcript;
            if (res.isFinal) {
                if (!resultsArray.find(({ text }) => text === transcription)) {
                    const now = Date.now();
                    addSpeechResult({
                        text: transcription,
                        timestamp: now,
                        from: "user",
                    });
                }
            }
        }
        const lastResult = Object(utils__WEBPACK_IMPORTED_MODULE_1__["last"])(e.results);
        if (lastResult.isFinal && Object(is_exit_speech_phrase__WEBPACK_IMPORTED_MODULE_3__["isExitSpeechPhrase"])(lastResult[0].transcript)) {
            onPause(true);
        }
        else {
            onPause();
        }
    }
    const onPause = Object(utils__WEBPACK_IMPORTED_MODULE_1__["debounce"])(1000, function (isExit = false) {
        respondToUser(isExit);
    });
    function respondToUser(isExit) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object(utils__WEBPACK_IMPORTED_MODULE_1__["last"])(resultsArray).from === "bot")
                return;
            const msg = isExit ? "Хорошего дня!" : `Передам сообщение, что-то еще?`;
            console.log(msg, isExit);
            addSpeechResult({ text: msg, timestamp: Date.now(), from: "bot" });
            if (useVoice) {
                yield (isExit ? Object(make_beep__WEBPACK_IMPORTED_MODULE_0__["playHaveAGoodDay"])() : Object(make_beep__WEBPACK_IMPORTED_MODULE_0__["playSavedMessageSound"])());
            }
            isExit && stop();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QscUJBQXFCLEdBQ3RCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTywwQkFBMEIsQ0FBQztBQVVsQyxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTlDLE1BQU07SUFDSixTQUFTO0lBQ1QsYUFBYTtJQUNiLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFMUQsTUFBTSxZQUFZLEdBQW9CLEVBQUUsQ0FBQztBQUV6QyxTQUFTLHFCQUFxQixDQUM1QixNQUFlLEVBQ2YsYUFBc0IsRUFDdEIsYUFBc0I7SUFFdEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQixNQUFNLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFekQsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQVEsRUFBRSxFQUFFO1FBQ3BELE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxN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

/***/ }),

/***/ "./src/is-exit-speech-phrase.ts":
/*!**************************************!*\
  !*** ./src/is-exit-speech-phrase.ts ***!
  \**************************************/
/*! exports provided: isExitSpeechPhrase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExitSpeechPhrase", function() { return isExitSpeechPhrase; });
const exitPhrases = [
    "все",
    "нет",
    "хватит",
    "довольно",
    "закончил",
    "достаточно",
    "больше ничего",
    "остановись",
    "стоп",
    "перестань",
].map(v => new RegExp(v, "gi"));
function isExitSpeechPhrase(_phrase) {
    const phrase = _phrase.replace(/ё/i, "е");
    return exitPhrases.some(phraseRegex => phraseRegex.test(phrase));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZXhpdC1zcGVlY2gtcGhyYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXMtZXhpdC1zcGVlY2gtcGhyYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLEtBQUs7SUFDTCxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osTUFBTTtJQUNOLFdBQVc7Q0FDWixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRWhDLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxPQUFlO0lBQ2hELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDIn0=

/***/ }),

/***/ "./src/make-beep.ts":
/*!**************************!*\
  !*** ./src/make-beep.ts ***!
  \**************************/
/*! exports provided: playBeep, playLineIsBusy, playHaveAGoodDay, playSavedMessageSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playBeep", function() { return playBeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playLineIsBusy", function() { return playLineIsBusy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playHaveAGoodDay", function() { return playHaveAGoodDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playSavedMessageSound", function() { return playSavedMessageSound; });
/* harmony import */ var assets_audio_beep_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/audio/beep.mp3 */ "./src/assets/audio/beep.mp3");
/* harmony import */ var assets_audio_line_is_busy_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/audio/line-is-busy.mp3 */ "./src/assets/audio/line-is-busy.mp3");
/* harmony import */ var assets_audio_have_a_good_day_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/audio/have-a-good-day.mp3 */ "./src/assets/audio/have-a-good-day.mp3");
/* harmony import */ var assets_audio_saved_message_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/audio/saved-message.mp3 */ "./src/assets/audio/saved-message.mp3");




function makeSoundPlayer(sound) {
    const audio = new Audio(sound);
    return function playSound() {
        return new Promise(res => {
            audio.addEventListener("ended", function onEnd() {
                res();
                audio.removeEventListener("ended", onEnd);
            });
            audio.play();
        });
    };
}
const playBeep = makeSoundPlayer(assets_audio_beep_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]);
const playLineIsBusy = makeSoundPlayer(assets_audio_line_is_busy_mp3__WEBPACK_IMPORTED_MODULE_1__["default"]);
const playHaveAGoodDay = makeSoundPlayer(assets_audio_have_a_good_day_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]);
const playSavedMessageSound = makeSoundPlayer(assets_audio_saved_message_mp3__WEBPACK_IMPORTED_MODULE_3__["default"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1iZWVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFrZS1iZWVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sZUFBZSxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8saUJBQWlCLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxpQkFBaUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUvRCxTQUFTLGVBQWUsQ0FBQyxLQUFhO0lBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLE9BQU8sU0FBUyxTQUFTO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLEtBQUs7Z0JBQzVDLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0QsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDbkUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMifQ==

/***/ }),

/***/ "./src/recognition.ts":
/*!****************************!*\
  !*** ./src/recognition.ts ***!
  \****************************/
/*! exports provided: makeRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRecognitionService", function() { return makeRecognitionService; });
function makeRecognitionService({ lang = "ru", continuous = true, interimResults = true, onResult = () => { }, } = {}) {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = lang;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.addEventListener("result", onResult);
    return recognition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb2duaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNvZ25pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLFVBQVUsc0JBQXNCLENBQUMsRUFDckMsSUFBSSxHQUFHLElBQUksRUFDWCxVQUFVLEdBQUcsSUFBSSxFQUNqQixjQUFjLEdBQUcsSUFBSSxFQUNyQixRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxNQUNXLEVBQUU7SUFDaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUN6RCxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN4QixXQUFXLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxXQUFXLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUM1QyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMifQ==

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: debounce, uid, isNumber, isString, isFunction, getByRole, last, render, appendChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByRole", function() { return getByRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
function debounce(ms, fn) {
    let timeoutId = null;
    const cancel = () => isNumber(timeoutId) && clearTimeout(timeoutId);
    const debounced = function (...args) {
        cancel();
        timeoutId = window.setTimeout(() => {
            fn.apply(null, args);
        }, ms);
    };
    debounced.cancel = cancel;
    return debounced;
}
let count = 0;
const uid = () => ++count;
function isNumber(val) {
    return typeof val === "number";
}
function isString(val) {
    return typeof val === "string";
}
function isFunction(val) {
    return typeof val === "function";
}
function getByRole(role) {
    return document.querySelector(`[data-role="${role}"]`);
}
function last(val) {
    return val[val.length - 1];
}
function render(tagName, { attributes, classNames, dataset, style } = {}, children = []) {
    const el = document.createElement(tagName);
    children.forEach(child => {
        appendChild(el, child);
    });
    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            el.setAttribute(key, value);
        });
    }
    if (classNames) {
        classNames.forEach(value => {
            el.classList.add(value);
        });
    }
    if (dataset) {
        Object.entries(dataset).forEach(([key, value]) => {
            el.dataset[key] = value;
        });
    }
    if (style) {
        Object.entries(style).forEach(([key, value]) => {
            el.style[key] = value;
        });
    }
    return el;
}
function appendChild(parent, child) {
    if (isString(child)) {
        return parent.appendChild(document.createTextNode(child));
    }
    return parent.appendChild(child);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLFVBQVUsUUFBUSxDQUF3QixFQUFVLEVBQUUsRUFBSztJQUMvRCxJQUFJLFNBQVMsR0FBa0IsSUFBSSxDQUFDO0lBQ3BDLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEUsTUFBTSxTQUFTLEdBQXlCLFVBQVUsR0FBRyxJQUFJO1FBQ3ZELE1BQU0sRUFBRSxDQUFDO1FBQ1QsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQztJQUNGLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzFCLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7QUFFakMsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFZO0lBQ25DLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVk7SUFDbkMsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsR0FBWTtJQUNyQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQztBQUNuQyxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUtELE1BQU0sVUFBVSxJQUFJLENBQTZCLEdBQU07SUFDckQsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBY0QsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsT0FBZSxFQUNmLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxLQUFxQixFQUFFLEVBQy9ELFdBQXdDLEVBQUU7SUFFMUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLFVBQVUsRUFBRTtRQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNsRCxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSSxVQUFVLEVBQUU7UUFDZCxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUMvQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSSxLQUFLLEVBQUU7UUFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDN0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsTUFBWSxFQUFFLEtBQW9CO0lBQzVELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDM0Q7SUFDRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsQ0FBQyJ9

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL2JlZXAubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXVkaW8vaGF2ZS1hLWdvb2QtZGF5Lm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL2xpbmUtaXMtYnVzeS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hdWRpby9zYXZlZC1tZXNzYWdlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9pbmRleC5zY3NzPzZjNTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pcy1leGl0LXNwZWVjaC1waHJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ha2UtYmVlcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjb2duaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FB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Q1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsaURBQWlELEtBQUs7QUFDdEQ7QUFDTztBQUNQO0FBQ0E7QUFDTywwQkFBMEIseUNBQXlDLEtBQUs7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKzZGIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmZvcm0tc3dpdGNoIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mb3JtLXN3aXRjaCBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgd2lkdGg6IDQ2cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG59XFxuXFxuLmZvcm0tc3dpdGNoIGk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDJweCwgMCkgc2NhbGUzZCgxLCAxLCAxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBsaW5lYXI7XFxufVxcblxcbi5mb3JtLXN3aXRjaCBpOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMnB4LCAwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1zd2l0Y2g6YWN0aXZlIGk6OmFmdGVyIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDJweCwgMCk7XFxufVxcblxcbi5mb3JtLXN3aXRjaDphY3RpdmUgaW5wdXQ6Y2hlY2tlZCArIGk6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTZweCwgMnB4LCAwKTtcXG59XFxuXFxuLmZvcm0tc3dpdGNoIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJkNzYzO1xcbn1cXG5cXG4uZm9ybS1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGk6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDE4cHgsIDJweCwgMCkgc2NhbGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLmZvcm0tc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBpOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIycHgsIDJweCwgMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXNzZXRzL3N0eWxlcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxREFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZm9ybS1zd2l0Y2gge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvcm0tc3dpdGNoIGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICB3aWR0aDogNDZweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcbn1cXG5cXG4uZm9ybS1zd2l0Y2ggaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMnB4LCAwKSBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLmZvcm0tc3dpdGNoIGk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAycHgsIDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLXN3aXRjaDphY3RpdmUgaTo6YWZ0ZXIge1xcbiAgd2lkdGg6IDI4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMnB4LCAwKTtcXG59XFxuXFxuLmZvcm0tc3dpdGNoOmFjdGl2ZSBpbnB1dDpjaGVja2VkICsgaTo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNnB4LCAycHgsIDApO1xcbn1cXG5cXG4uZm9ybS1zd2l0Y2ggaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmQ3NjM7XFxufVxcblxcbi5mb3JtLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgaTo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMThweCwgMnB4LCAwKSBzY2FsZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uZm9ybS1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGk6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjJweCwgMnB4LCAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiZWVwLjQ2YTMyMGFkY2E5OTViOTc0OTMyOTNjOTE4M2E2NTkwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJoYXZlLWEtZ29vZC1kYXkuMzliMmQyY2U4MWQ4Njg3ODFkZTgxMDJlMDUwYjgxOGIubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxpbmUtaXMtYnVzeS5lMjJiZjAxYjRiMWE1MTZiNDhlODhmNDgyODM2NGQ0Ny5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2F2ZWQtbWVzc2FnZS4yMDIwZTRlNjZkMTk0NWFiZWI1MzI2ZDk1MzgyZThjMC5tcDNcIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgcGxheUJlZXAsIHBsYXlIYXZlQUdvb2REYXksIHBsYXlMaW5lSXNCdXN5LCBwbGF5U2F2ZWRNZXNzYWdlU291bmQsIH0gZnJvbSBcIm1ha2UtYmVlcFwiO1xuLy8gaW1wb3J0IHsgdGV4dFRvU3BlZWNoIH0gZnJvbSBcInRleHQtdG8tc3BlZWNoXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZCwgZGVib3VuY2UsIGdldEJ5Um9sZSwgbGFzdCwgcmVuZGVyIH0gZnJvbSBcInV0aWxzXCI7XG5pbXBvcnQgeyBtYWtlUmVjb2duaXRpb25TZXJ2aWNlIH0gZnJvbSBcInJlY29nbml0aW9uXCI7XG5pbXBvcnQgeyBpc0V4aXRTcGVlY2hQaHJhc2UgfSBmcm9tIFwiaXMtZXhpdC1zcGVlY2gtcGhyYXNlXCI7XG5pbXBvcnQgXCJhc3NldHMvc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnN0IHVzZVZvaWNlQ2hlY2sgPSBnZXRCeVJvbGUoXCJ1c2Utdm9pY2VcIik7XG5jb25zdCBidXR0b24gPSBnZXRCeVJvbGUoXCJidXR0b25cIik7XG5jb25zdCBjb250YWluZXIgPSBnZXRCeVJvbGUoXCJzcGVlY2gtcmVzdWx0c1wiKTtcbmJ1dHRvbiAmJlxuICAgIGNvbnRhaW5lciAmJlxuICAgIHVzZVZvaWNlQ2hlY2sgJiZcbiAgICBtYWtlU3BlZWNoUmVjb2duaXRpb24oYnV0dG9uLCBjb250YWluZXIsIHVzZVZvaWNlQ2hlY2spO1xuY29uc3QgcmVzdWx0c0FycmF5ID0gW107XG5mdW5jdGlvbiBtYWtlU3BlZWNoUmVjb2duaXRpb24oYnV0dG9uLCB0ZXh0Q29udGFpbmVyLCB1c2VWb2ljZUNoZWNrKSB7XG4gICAgbGV0IGxpc3RlbmluZyA9IGZhbHNlO1xuICAgIGxldCB1c2VWb2ljZSA9IHRydWU7XG4gICAgY29uc3QgcmVjb2duaXRpb24gPSBtYWtlUmVjb2duaXRpb25TZXJ2aWNlKHsgb25SZXN1bHQgfSk7XG4gICAgdXNlVm9pY2VDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB1c2VWb2ljZSA9IHRhcmdldC5jaGVja2VkO1xuICAgIH0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25CdXR0b25DbGljayk7XG4gICAgZnVuY3Rpb24gb25CdXR0b25DbGljaygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5pbmcpIHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBwbGF5TGluZUlzQnVzeSgpO1xuICAgICAgICAgICAgICAgIHlpZWxkIHBsYXlCZWVwKCk7XG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFNwZWVjaFJlc3VsdCh7IHRleHQsIHRpbWVzdGFtcCwgZnJvbSB9KSB7XG4gICAgICAgIHJlc3VsdHNBcnJheS5wdXNoKHtcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSByZW5kZXIoXCJwXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZWVlXCIsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgICAgIGFsaWduU2VsZjogZnJvbSA9PT0gXCJ1c2VyXCIgPyBcImZsZXgtZW5kXCIgOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIFt0ZXh0XSk7XG4gICAgICAgIGFwcGVuZENoaWxkKHRleHRDb250YWluZXIsIHRleHRFbGVtZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGxpc3RlbmluZyA9IHRydWU7XG4gICAgICAgIHRleHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgcmVzdWx0c0FycmF5Lmxlbmd0aCA9IDA7XG4gICAgICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwi0JfQsNC60L7QvdGH0LjRgtGMINGA0LDQt9Cz0L7QstC+0YBcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgbGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgIHJlY29nbml0aW9uLnN0b3AoKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCLQndCw0YfQsNGC0Ywg0YDQsNC30LPQvtCy0L7RgFwiO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzQXJyYXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc3VsdChlKSB7XG4gICAgICAgIGlmICghbGlzdGVuaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGNvbnN0IHJlcyBvZiBlLnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHRpb24gPSByZXNbMF0udHJhbnNjcmlwdDtcbiAgICAgICAgICAgIGlmIChyZXMuaXNGaW5hbCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0c0FycmF5LmZpbmQoKHsgdGV4dCB9KSA9PiB0ZXh0ID09PSB0cmFuc2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBhZGRTcGVlY2hSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdHJhbnNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogXCJ1c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0UmVzdWx0ID0gbGFzdChlLnJlc3VsdHMpO1xuICAgICAgICBpZiAobGFzdFJlc3VsdC5pc0ZpbmFsICYmIGlzRXhpdFNwZWVjaFBocmFzZShsYXN0UmVzdWx0WzBdLnRyYW5zY3JpcHQpKSB7XG4gICAgICAgICAgICBvblBhdXNlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb25QYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uUGF1c2UgPSBkZWJvdW5jZSgxMDAwLCBmdW5jdGlvbiAoaXNFeGl0ID0gZmFsc2UpIHtcbiAgICAgICAgcmVzcG9uZFRvVXNlcihpc0V4aXQpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlc3BvbmRUb1VzZXIoaXNFeGl0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAobGFzdChyZXN1bHRzQXJyYXkpLmZyb20gPT09IFwiYm90XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgbXNnID0gaXNFeGl0ID8gXCLQpdC+0YDQvtGI0LXQs9C+INC00L3RjyFcIiA6IGDQn9C10YDQtdC00LDQvCDRgdC+0L7QsdGJ0LXQvdC40LUsINGH0YLQvi3RgtC+INC10YnQtT9gO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnLCBpc0V4aXQpO1xuICAgICAgICAgICAgYWRkU3BlZWNoUmVzdWx0KHsgdGV4dDogbXNnLCB0aW1lc3RhbXA6IERhdGUubm93KCksIGZyb206IFwiYm90XCIgfSk7XG4gICAgICAgICAgICBpZiAodXNlVm9pY2UpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCAoaXNFeGl0ID8gcGxheUhhdmVBR29vZERheSgpIDogcGxheVNhdmVkTWVzc2FnZVNvdW5kKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNFeGl0ICYmIHN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3UVVGQlFTeFBRVUZQTEVWQlEwd3NVVUZCVVN4RlFVTlNMR2RDUVVGblFpeEZRVU5vUWl4alFVRmpMRVZCUTJRc2NVSkJRWEZDTEVkQlEzUkNMRTFCUVUwc1YwRkJWeXhEUVVGRE8wRkJRMjVDTEdsRVFVRnBSRHRCUVVOcVJDeFBRVUZQTEVWQlFVVXNWMEZCVnl4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRTlCUVU4c1EwRkJRenRCUVVOMlJTeFBRVUZQTEVWQlFVVXNjMEpCUVhOQ0xFVkJRVVVzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZEY2tRc1QwRkJUeXhGUVVGRkxHdENRVUZyUWl4RlFVRkZMRTFCUVUwc2RVSkJRWFZDTEVOQlFVTTdRVUZGTTBRc1QwRkJUeXd3UWtGQk1FSXNRMEZCUXp0QlFWVnNReXhOUVVGTkxHRkJRV0VzUjBGQlJ5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkROME1zVFVGQlRTeE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRMjVETEUxQlFVMHNVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMEZCUlRsRExFMUJRVTA3U1VGRFNpeFRRVUZUTzBsQlExUXNZVUZCWVR0SlFVTmlMSEZDUVVGeFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03UVVGRk1VUXNUVUZCVFN4WlFVRlpMRWRCUVc5Q0xFVkJRVVVzUTBGQlF6dEJRVVY2UXl4VFFVRlRMSEZDUVVGeFFpeERRVU0xUWl4TlFVRmxMRVZCUTJZc1lVRkJjMElzUlVGRGRFSXNZVUZCYzBJN1NVRkZkRUlzU1VGQlNTeFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTndRaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGZWtRc1lVRkJZU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTzFGQlEzQkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUV3UWl4RFFVRkRPMUZCUXpWRExGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUXpWQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenRKUVVWb1JDeFRRVUZsTEdGQlFXRTdPMWxCUXpGQ0xFbEJRVWtzVTBGQlV5eEZRVUZGTzJkQ1FVTmlMRWxCUVVrc1JVRkJSU3hEUVVGRE8yRkJRMUk3YVVKQlFVMDdaMEpCUTB3c1RVRkJUU3hqUVVGakxFVkJRVVVzUTBGQlF6dG5Ra0ZEZGtJc1RVRkJUU3hSUVVGUkxFVkJRVVVzUTBGQlF6dG5Ra0ZEYWtJc1MwRkJTeXhGUVVGRkxFTkJRVU03WVVGRFZEdFJRVU5JTEVOQlFVTTdTMEZCUVR0SlFVVkVMRk5CUVZNc1pVRkJaU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVdsQ08xRkJReTlFTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRhRUlzU1VGQlNUdFpRVU5LTEZOQlFWTTdXVUZEVkN4SlFVRkpPMU5CUTB3c1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVTjRRaXhIUVVGSExFVkJRMGc3V1VGRFJTeExRVUZMTEVWQlFVVTdaMEpCUTB3c1ZVRkJWU3hGUVVGRkxFMUJRVTA3WjBKQlEyeENMRkZCUVZFc1JVRkJSU3hMUVVGTE8yZENRVU5tTEU5QlFVOHNSVUZCUlN4TFFVRkxPMmRDUVVOa0xGbEJRVmtzUlVGQlJTeExRVUZMTzJkQ1FVTnVRaXhaUVVGWkxFVkJRVVVzUzBGQlN6dG5Ra0ZEYmtJc1UwRkJVeXhGUVVGRkxFbEJRVWtzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldUdGhRVU4yUkR0VFFVTkdMRVZCUTBRc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGRFVDeERRVUZETzFGQlEwWXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRc1UwRkJVeXhMUVVGTE8xRkJRMW9zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnFRaXhoUVVGaExFTkJRVU1zVTBGQlV5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTTNRaXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhYUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEY0VJc1RVRkJUU3hEUVVGRExGZEJRVmNzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlJVUXNVMEZCVXl4SlFVRkpPMUZCUTFnc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5zUWl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGJrSXNUVUZCVFN4RFFVRkRMRmRCUVZjc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0UlFVTjJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJDeFRRVUZUTEZGQlFWRXNRMEZCUXl4RFFVRjVRanRSUVVONlF5eEpRVUZKTEVOQlFVTXNVMEZCVXp0WlFVRkZMRTlCUVU4N1VVRkRka0lzUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRek5DTEUxQlFVMHNZVUZCWVN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTTdXVUZEZUVNc1NVRkJTU3hIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTm1MRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeExRVUZMTEdGQlFXRXNRMEZCUXl4RlFVRkZPMjlDUVVNMVJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEzWkNMR1ZCUVdVc1EwRkJRenQzUWtGRFpDeEpRVUZKTEVWQlFVVXNZVUZCWVR0M1FrRkRia0lzVTBGQlV5eEZRVUZGTEVkQlFVYzdkMEpCUTJRc1NVRkJTU3hGUVVGRkxFMUJRVTA3Y1VKQlEySXNRMEZCUXl4RFFVRkRPMmxDUVVOS08yRkJRMFk3VTBGRFJqdFJRVVZFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYmtNc1NVRkJTU3hWUVVGVkxFTkJRVU1zVDBGQlR5eEpRVUZKTEd0Q1FVRnJRaXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRaUVVOMFJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRaanRoUVVGTk8xbEJRMHdzVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEV0R0SlFVTklMRU5CUVVNN1NVRkZSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVZVc1RVRkJUU3hIUVVGSExFdEJRVXM3VVVGRGNrUXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlVnc1UwRkJaU3hoUVVGaExFTkJRVU1zVFVGQlpUczdXVUZETVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRXRCUVVzN1owSkJRVVVzVDBGQlR6dFpRVU01UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1owTkJRV2RETEVOQlFVTTdXVUZEZUVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRla0lzWlVGQlpTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyNUZMRWxCUVVrc1VVRkJVU3hGUVVGRk8yZENRVU5hTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVNdlJEdFpRVU5FTEUxQlFVMHNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOdVFpeERRVUZETzB0QlFVRTdRVUZEU0N4RFFVRkRJbjA9IiwiY29uc3QgZXhpdFBocmFzZXMgPSBbXG4gICAgXCLQstGB0LVcIixcbiAgICBcItC90LXRglwiLFxuICAgIFwi0YXQstCw0YLQuNGCXCIsXG4gICAgXCLQtNC+0LLQvtC70YzQvdC+XCIsXG4gICAgXCLQt9Cw0LrQvtC90YfQuNC7XCIsXG4gICAgXCLQtNC+0YHRgtCw0YLQvtGH0L3QvlwiLFxuICAgIFwi0LHQvtC70YzRiNC1INC90LjRh9C10LPQvlwiLFxuICAgIFwi0L7RgdGC0LDQvdC+0LLQuNGB0YxcIixcbiAgICBcItGB0YLQvtC/XCIsXG4gICAgXCLQv9C10YDQtdGB0YLQsNC90YxcIixcbl0ubWFwKHYgPT4gbmV3IFJlZ0V4cCh2LCBcImdpXCIpKTtcbmV4cG9ydCBmdW5jdGlvbiBpc0V4aXRTcGVlY2hQaHJhc2UoX3BocmFzZSkge1xuICAgIGNvbnN0IHBocmFzZSA9IF9waHJhc2UucmVwbGFjZSgv0ZEvaSwgXCLQtVwiKTtcbiAgICByZXR1cm4gZXhpdFBocmFzZXMuc29tZShwaHJhc2VSZWdleCA9PiBwaHJhc2VSZWdleC50ZXN0KHBocmFzZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVhNdFpYaHBkQzF6Y0dWbFkyZ3RjR2h5WVhObExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYVhNdFpYaHBkQzF6Y0dWbFkyZ3RjR2h5WVhObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEUxQlFVMHNWMEZCVnl4SFFVRkhPMGxCUTJ4Q0xFdEJRVXM3U1VGRFRDeExRVUZMTzBsQlEwd3NVVUZCVVR0SlFVTlNMRlZCUVZVN1NVRkRWaXhWUVVGVk8wbEJRMVlzV1VGQldUdEpRVU5hTEdWQlFXVTdTVUZEWml4WlFVRlpPMGxCUTFvc1RVRkJUVHRKUVVOT0xGZEJRVmM3UTBGRFdpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSV2hETEUxQlFVMHNWVUZCVlN4clFrRkJhMElzUTBGQlF5eFBRVUZsTzBsQlEyaEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRekZETEU5QlFVOHNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU51UlN4RFFVRkRJbjA9IiwiaW1wb3J0IGJlZXBTb3VuZCBmcm9tIFwiYXNzZXRzL2F1ZGlvL2JlZXAubXAzXCI7XG5pbXBvcnQgbGluZUlzQnVzeVNvdW5kIGZyb20gXCJhc3NldHMvYXVkaW8vbGluZS1pcy1idXN5Lm1wM1wiO1xuaW1wb3J0IGhhdmVBR29vZERheVNvdW5kIGZyb20gXCJhc3NldHMvYXVkaW8vaGF2ZS1hLWdvb2QtZGF5Lm1wM1wiO1xuaW1wb3J0IHNhdmVkTWVzc2FnZVNvdW5kIGZyb20gXCJhc3NldHMvYXVkaW8vc2F2ZWQtbWVzc2FnZS5tcDNcIjtcbmZ1bmN0aW9uIG1ha2VTb3VuZFBsYXllcihzb3VuZCkge1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHNvdW5kKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcGxheVNvdW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiBvbkVuZCgpIHtcbiAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgICAgICBhdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgb25FbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgY29uc3QgcGxheUJlZXAgPSBtYWtlU291bmRQbGF5ZXIoYmVlcFNvdW5kKTtcbmV4cG9ydCBjb25zdCBwbGF5TGluZUlzQnVzeSA9IG1ha2VTb3VuZFBsYXllcihsaW5lSXNCdXN5U291bmQpO1xuZXhwb3J0IGNvbnN0IHBsYXlIYXZlQUdvb2REYXkgPSBtYWtlU291bmRQbGF5ZXIoaGF2ZUFHb29kRGF5U291bmQpO1xuZXhwb3J0IGNvbnN0IHBsYXlTYXZlZE1lc3NhZ2VTb3VuZCA9IG1ha2VTb3VuZFBsYXllcihzYXZlZE1lc3NhZ2VTb3VuZCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZyWlMxaVpXVndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJXRnJaUzFpWldWd0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNVMEZCVXl4TlFVRk5MSFZDUVVGMVFpeERRVUZETzBGQlF6bERMRTlCUVU4c1pVRkJaU3hOUVVGTkxDdENRVUVyUWl4RFFVRkRPMEZCUXpWRUxFOUJRVThzYVVKQlFXbENMRTFCUVUwc2EwTkJRV3RETEVOQlFVTTdRVUZEYWtVc1QwRkJUeXhwUWtGQmFVSXNUVUZCVFN4blEwRkJaME1zUTBGQlF6dEJRVVV2UkN4VFFVRlRMR1ZCUVdVc1EwRkJReXhMUVVGaE8wbEJRM0JETEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OUNMRTlCUVU4c1UwRkJVeXhUUVVGVE8xRkJRM1pDTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGRrSXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRXRCUVVzN1owSkJRelZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOT0xFdEJRVXNzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETlVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFNDeExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRaaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTXNRMEZCUXp0QlFVTktMRU5CUVVNN1FVRkZSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NaVUZCWlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wRkJRMjVFTEUxQlFVMHNRMEZCUXl4TlFVRk5MR05CUVdNc1IwRkJSeXhsUVVGbExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZETDBRc1RVRkJUU3hEUVVGRExFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1pVRkJaU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1FVRkRia1VzVFVGQlRTeERRVUZETEUxQlFVMHNjVUpCUVhGQ0xFZEJRVWNzWlVGQlpTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1pZlE9PSIsImV4cG9ydCBmdW5jdGlvbiBtYWtlUmVjb2duaXRpb25TZXJ2aWNlKHsgbGFuZyA9IFwicnVcIiwgY29udGludW91cyA9IHRydWUsIGludGVyaW1SZXN1bHRzID0gdHJ1ZSwgb25SZXN1bHQgPSAoKSA9PiB7IH0sIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlY29nbml0aW9uID0gbmV3IHdpbmRvdy53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbigpO1xuICAgIHJlY29nbml0aW9uLmxhbmcgPSBsYW5nO1xuICAgIHJlY29nbml0aW9uLmNvbnRpbnVvdXMgPSBjb250aW51b3VzO1xuICAgIHJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gaW50ZXJpbVJlc3VsdHM7XG4gICAgcmVjb2duaXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcInJlc3VsdFwiLCBvblJlc3VsdCk7XG4gICAgcmV0dXJuIHJlY29nbml0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WamIyZHVhWFJwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp5WldOdloyNXBkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRlBRU3hOUVVGTkxGVkJRVlVzYzBKQlFYTkNMRU5CUVVNc1JVRkRja01zU1VGQlNTeEhRVUZITEVsQlFVa3NSVUZEV0N4VlFVRlZMRWRCUVVjc1NVRkJTU3hGUVVOcVFpeGpRVUZqTEVkQlFVY3NTVUZCU1N4RlFVTnlRaXhSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVkQlFVVXNRMEZCUXl4TlFVTlhMRVZCUVVVN1NVRkRhRU1zVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc2RVSkJRWFZDTEVWQlFVVXNRMEZCUXp0SlFVTjZSQ3hYUVVGWExFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTjRRaXhYUVVGWExFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXp0SlFVTndReXhYUVVGWExFTkJRVU1zWTBGQll5eEhRVUZITEdOQlFXTXNRMEZCUXp0SlFVTTFReXhYUVVGWExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEycEVMRTlCUVU4c1YwRkJWeXhEUVVGRE8wRkJRM0pDTEVOQlFVTWlmUT09IiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKG1zLCBmbikge1xuICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IGlzTnVtYmVyKHRpbWVvdXRJZCkgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgY29uc3QgZGVib3VuY2VkID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgIHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9LCBtcyk7XG4gICAgfTtcbiAgICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICAgIHJldHVybiBkZWJvdW5jZWQ7XG59XG5sZXQgY291bnQgPSAwO1xuZXhwb3J0IGNvbnN0IHVpZCA9ICgpID0+ICsrY291bnQ7XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5Um9sZShyb2xlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvbGU9XCIke3JvbGV9XCJdYCk7XG59XG5leHBvcnQgZnVuY3Rpb24gbGFzdCh2YWwpIHtcbiAgICByZXR1cm4gdmFsW3ZhbC5sZW5ndGggLSAxXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIodGFnTmFtZSwgeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWVzLCBkYXRhc2V0LCBzdHlsZSB9ID0ge30sIGNoaWxkcmVuID0gW10pIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGFwcGVuZENoaWxkKGVsLCBjaGlsZCk7XG4gICAgfSk7XG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lcykge1xuICAgICAgICBjbGFzc05hbWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhc2V0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGVsLmRhdGFzZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG4gICAgaWYgKGlzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGUFFTeE5RVUZOTEZWQlFWVXNVVUZCVVN4RFFVRjNRaXhGUVVGVkxFVkJRVVVzUlVGQlN6dEpRVU12UkN4SlFVRkpMRk5CUVZNc1IwRkJhMElzU1VGQlNTeERRVUZETzBsQlEzQkRMRTFCUVUwc1RVRkJUU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3haUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEY0VVc1RVRkJUU3hUUVVGVExFZEJRWGxDTEZWQlFWVXNSMEZCUnl4SlFVRkpPMUZCUTNaRUxFMUJRVTBzUlVGQlJTeERRVUZETzFGQlExUXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzFsQlEycERMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTlVMRU5CUVVNc1EwRkJRenRKUVVOR0xGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUXpGQ0xFOUJRVThzVTBGQlV5eERRVUZETzBGQlEyNUNMRU5CUVVNN1FVRkZSQ3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEWkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNN1FVRkZha01zVFVGQlRTeFZRVUZWTEZGQlFWRXNRMEZCUXl4SFFVRlpPMGxCUTI1RExFOUJRVThzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RFFVRkRPMEZCUTJwRExFTkJRVU03UVVGRlJDeE5RVUZOTEZWQlFWVXNVVUZCVVN4RFFVRkRMRWRCUVZrN1NVRkRia01zVDBGQlR5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRU5CUVVNN1FVRkRha01zUTBGQlF6dEJRVVZFTEUxQlFVMHNWVUZCVlN4VlFVRlZMRU5CUVVNc1IwRkJXVHRKUVVOeVF5eFBRVUZQTEU5QlFVOHNSMEZCUnl4TFFVRkxMRlZCUVZVc1EwRkJRenRCUVVOdVF5eERRVUZETzBGQlJVUXNUVUZCVFN4VlFVRlZMRk5CUVZNc1EwRkJReXhKUVVGWk8wbEJRM0JETEU5QlFVOHNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhsUVVGbExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEZWtRc1EwRkJRenRCUVV0RUxFMUJRVTBzVlVGQlZTeEpRVUZKTEVOQlFUWkNMRWRCUVUwN1NVRkRja1FzVDBGQlR5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU0zUWl4RFFVRkRPMEZCWTBRc1RVRkJUU3hWUVVGVkxFMUJRVTBzUTBGRGNFSXNUMEZCWlN4RlFVTm1MRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4TFFVRnhRaXhGUVVGRkxFVkJReTlFTEZkQlFYZERMRVZCUVVVN1NVRkZNVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU16UXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlEzWkNMRmRCUVZjc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZWtJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFNDeEpRVUZKTEZWQlFWVXNSVUZCUlR0UlFVTmtMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnNSQ3hGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNNVFpeERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTktPMGxCUTBRc1NVRkJTU3hWUVVGVkxFVkJRVVU3VVVGRFpDeFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRM3BDTEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6RkNMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMG83U1VGRFJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0UlFVTllMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXZReXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNeFFpeERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTktPMGxCUTBRc1NVRkJTU3hMUVVGTExFVkJRVVU3VVVGRFZDeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE4wTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGVkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZETDBJc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRFNqdEpRVU5FTEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTFvc1EwRkJRenRCUVVWRUxFMUJRVTBzVlVGQlZTeFhRVUZYTEVOQlFVTXNUVUZCV1N4RlFVRkZMRXRCUVc5Q08wbEJRelZFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRMjVDTEU5QlFVOHNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRNMFE3U1VGRFJDeFBRVUZQTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGJrTXNRMEZCUXlKOSJdLCJzb3VyY2VSb290IjoiIn0=