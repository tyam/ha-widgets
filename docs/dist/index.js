(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hyperapp'), require('haw')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hyperapp', 'haw'], factory) :
  (global = global || self, factory(global.app = {}, global.hyperapp, global.haw));
}(this, function (exports, hyperapp, haw) { 'use strict';

  var view11 = function view11(state, actions) {
    return hyperapp.h(haw.Button, null, "OK");
  };

  exports.view11 = view11;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
