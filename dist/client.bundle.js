module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return http; });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// Wrappers\r\nconst eventHooks = {};\r\nclass http {\r\n    static send(request, sucess, error) {\r\n        request.headers = {\r\n            \"clientID\": socket.id\r\n        }\r\n        $.ajax(request).done((data) => {\r\n            // Check if this is a event to hook ?\r\n            if (typeof data._event === \"object\") // TODO : Replace the check \r\n            {\r\n                // Handle the lookup\r\n                eventHooks[data._event.id] = sucess;\r\n            } else {\r\n                sucess(data)\r\n            }\r\n        }).fail(error);\r\n    }\r\n}\r\n\r\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(\"http://localhost:3001\");\r\nconsole.log(socket)\r\nsocket.on(\"message\", function (data) {\r\n    console.log(data);\r\n    eventHooks[data._event.eventid](data)\r\n})\r\n\r\n\r\nconsole.log(\"Loading client js\")\r\nwindow.http = http;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC5qcz9kYzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbi8vIFdyYXBwZXJzXHJcbmNvbnN0IGV2ZW50SG9va3MgPSB7fTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaHR0cCB7XHJcbiAgICBzdGF0aWMgc2VuZChyZXF1ZXN0LCBzdWNlc3MsIGVycm9yKSB7XHJcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge1xyXG4gICAgICAgICAgICBcImNsaWVudElEXCI6IHNvY2tldC5pZFxyXG4gICAgICAgIH1cclxuICAgICAgICAkLmFqYXgocmVxdWVzdCkuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgZXZlbnQgdG8gaG9vayA/XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5fZXZlbnQgPT09IFwib2JqZWN0XCIpIC8vIFRPRE8gOiBSZXBsYWNlIHRoZSBjaGVjayBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBsb29rdXBcclxuICAgICAgICAgICAgICAgIGV2ZW50SG9va3NbZGF0YS5fZXZlbnQuaWRdID0gc3VjZXNzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3VjZXNzKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5mYWlsKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIpO1xyXG5jb25zb2xlLmxvZyhzb2NrZXQpXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgZXZlbnRIb29rc1tkYXRhLl9ldmVudC5ldmVudGlkXShkYXRhKVxyXG59KVxyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwiTG9hZGluZyBjbGllbnQganNcIilcclxud2luZG93Lmh0dHAgPSBodHRwOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client.js\n");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmlvLWNsaWVudC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIj84YmM1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///socket.io-client\n");

/***/ })

/******/ });