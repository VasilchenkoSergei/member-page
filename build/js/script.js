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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  $('.page-header__toggle').on('click', function () {\n    $('.main-nav').toggleClass('.active');\n    $('.main-nav').toggle();\n  });\n\n  var loadData = function loadData(data, path) {\n    var list = $('.account-list__items');\n    data.forEach(function (item) {\n      var card = \"<div class=\\\"bank-account\\\">\\n            <p class=\\\"bank-account__item bank-account__num\\\">\".concat(item.number, \"</p>\\n            <p class=\\\"bank-account__item bank-account__date\\\">\").concat(item.date, \"</p>\\n            <p class=\\\"bank-account__item bank-account__org\\\">\").concat(item.counterparty, \"<br><span>\").concat(item.bank_bik, \"</span></p>\\n            <p class=\\\"bank-account__item bank-account__reason\\\">\").concat(item.appointment, \"</p>\\n            <div id=\\\"bank-account__summ\\\" class=\\\"bank-account__item bank-account__summ\\\">\").concat(item.credit, \" <span>kzt</xpan></div>\\n        </div>\");\n      list.append(card);\n    });\n  };\n\n  $.ajax('https://api.myjson.com/bins/x1x8c').done(function (data) {\n    loadData(data);\n  }).fail(function () {\n    console.log('error');\n  });\n\n  document.querySelector('.time-block__btn-week').onclick = function () {\n    var loadData = function loadData(data) {\n      var list = $('.account-list__items');\n      list.empty();\n      data.forEach(function (item) {\n        var card = \"<div class=\\\"bank-account\\\">\\n            <p class=\\\"bank-account__item bank-account__num\\\">\".concat(item.number, \"</p>\\n            <p class=\\\"bank-account__item bank-account__date\\\">\").concat(item.date, \"</p>\\n            <p class=\\\"bank-account__item bank-account__org\\\">\").concat(item.counterparty, \"<br><span>\").concat(item.bank_bik, \"</span></p>\\n            <p class=\\\"bank-account__item bank-account__reason\\\">\").concat(item.appointment, \"</p>\\n            <div id=\\\"bank-account__summ\\\" class=\\\"bank-account__item bank-account__summ\\\">\").concat(item.credit, \" <span>kzt</xpan></div>\\n        </div>\");\n        list.append(card);\n      });\n    };\n\n    $.ajax('https://api.myjson.com/bins/x1x8c').done(function (data) {\n      loadData(data);\n    }).fail(function () {\n      console.log('error');\n    });\n  };\n\n  document.querySelector('.time-block__btn-month').onclick = function () {\n    var loadData = function loadData(data) {\n      var list = $('.account-list__items');\n      list.empty();\n      data.forEach(function (item) {\n        var card = \"<div class=\\\"bank-account\\\">\\n            <p class=\\\"bank-account__item bank-account__num\\\">\".concat(item.number, \"</p>\\n            <p class=\\\"bank-account__item bank-account__date\\\">\").concat(item.date, \"</p>\\n            <p class=\\\"bank-account__item bank-account__org\\\">\").concat(item.counterparty, \"<br><span>\").concat(item.bank_bik, \"</span></p>\\n            <p class=\\\"bank-account__item bank-account__reason\\\">\").concat(item.appointment, \"</p>\\n            <div id=\\\"bank-account__summ\\\" class=\\\"bank-account__item bank-account__summ\\\">\").concat(item.credit, \" <span>kzt</xpan></div>\\n        </div>\");\n        list.append(card);\n      });\n    };\n\n    $.ajax('https://api.myjson.com/bins/fq4io').done(function (data) {\n      loadData(data);\n    }).fail(function () {\n      console.log('error');\n    });\n  };\n\n  document.querySelector('.time-block__btn-year').onclick = function () {\n    var loadData = function loadData(data) {\n      var list = $('.account-list__items');\n      list.empty();\n      data.forEach(function (item) {\n        var card = \"<div class=\\\"bank-account\\\">\\n            <p class=\\\"bank-account__item bank-account__num\\\">\".concat(item.number, \"</p>\\n            <p class=\\\"bank-account__item bank-account__date\\\">\").concat(item.date, \"</p>\\n            <p class=\\\"bank-account__item bank-account__org\\\">\").concat(item.counterparty, \"<br><span>\").concat(item.bank_bik, \"</span></p>\\n            <p class=\\\"bank-account__item bank-account__reason\\\">\").concat(item.appointment, \"</p>\\n            <div id=\\\"bank-account__summ\\\" class=\\\"bank-account__item bank-account__summ\\\">\").concat(item.credit, \" <span>kzt</xpan></div>\\n        </div>\");\n        list.append(card);\n      });\n    };\n\n    $.ajax('https://api.myjson.com/bins/1gp56o').done(function (data) {\n      loadData(data);\n    }).fail(function () {\n      console.log('error');\n    });\n  };\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });