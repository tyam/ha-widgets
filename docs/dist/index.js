(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hyperapp'), require('haw')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hyperapp', 'haw'], factory) :
  (global = global || self, factory(global.app = {}, global.hyperapp, global.haw));
}(this, function (exports, hyperapp, haw) { 'use strict';

  var ScrimButton = haw.Scrim.Trigger(haw.Button);
  var view11 = function view11(state, actions) {
    return hyperapp.h(haw.VBox, null, hyperapp.h(haw.HBox, null, hyperapp.h(ScrimButton, {
      targetId: "modal"
    }, "Modal"), hyperapp.h(ScrimButton, {
      targetId: "spinner",
      shape: "contained"
    }, "Spinner"), hyperapp.h(haw.Button, {
      shape: "open"
    }, "Button 3")), hyperapp.h(haw.Scrim, {
      id: "modal"
    }, hyperapp.h(haw.Dialog, null, hyperapp.h("div", null, "\u30C6\u30AD\u30B9\u30C8"), hyperapp.h(haw.HBox, {
      align: "end"
    }, hyperapp.h(ScrimButton, {
      shape: "open",
      targetId: "modal"
    }, "OK")))), hyperapp.h(haw.Scrim, {
      id: "spinner",
      light: true
    }, hyperapp.h(haw.Spinner, null)), haw.viewHaw(state, actions));
  };

  exports.view11 = view11;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
