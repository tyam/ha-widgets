(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hyperapp'), require('haw')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hyperapp', 'haw'], factory) :
  (global = global || self, factory(global.app = {}, global.hyperapp, global.haw));
}(this, function (exports, hyperapp, haw) { 'use strict';

  var view11 = function view11(state, actions) {
    return hyperapp.h(haw.VBox, null, hyperapp.h(haw.HBox, null, hyperapp.h(haw.Button, null, "Button 1"), hyperapp.h(haw.Button, {
      shape: "contained"
    }, "Button 2"), hyperapp.h(haw.Button, {
      shape: "open"
    }, "Button 3")));
  };

  exports.view11 = view11;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
