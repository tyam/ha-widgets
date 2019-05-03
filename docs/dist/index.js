(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hyperapp'), require('haw')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hyperapp', 'haw'], factory) :
  (global = global || self, factory(global.app = {}, global.hyperapp, global.haw));
}(this, function (exports, hyperapp, haw) { 'use strict';

  var ScrimButton = haw.Scrim.Trigger(haw.Button);
  var PopupButton = haw.Popup.Trigger(haw.Button);
  var PopupMenuItem = haw.Popup.Trigger(haw.Menu.Item);
  var view11 = function view11(state, actions) {
    return hyperapp.h(haw.VBox, null, hyperapp.h(haw.HBox, null, hyperapp.h(ScrimButton, {
      targetId: "modal"
    }, "Modal"), hyperapp.h(ScrimButton, {
      targetId: "spinner",
      shape: "contained"
    }, "Spinner"), hyperapp.h(PopupButton, {
      targetId: "menu",
      shape: "open"
    }, "Popup"), hyperapp.h(haw.Button, {
      shape: "contained",
      onclick: function onclick() {
        return actions.haw.snackbar.trigger('Hello Snackbar');
      }
    }, "Snackbar")), hyperapp.h(haw.Scrim, {
      id: "modal"
    }, hyperapp.h(haw.Dialog, null, hyperapp.h("div", null, "\u30C6\u30AD\u30B9\u30C8"), hyperapp.h(haw.HBox, {
      align: "end"
    }, hyperapp.h(ScrimButton, {
      shape: "open",
      targetId: "modal"
    }, "OK")))), hyperapp.h(haw.Scrim, {
      id: "spinner",
      light: true
    }, hyperapp.h(haw.Spinner, null)), hyperapp.h(haw.Popup, {
      id: "menu"
    }, hyperapp.h(haw.Menu, null, hyperapp.h(PopupMenuItem, {
      id: "m1",
      doDelay: true
    }, "Item 1"), hyperapp.h(PopupMenuItem, {
      id: "m2",
      doDelay: true
    }, "Item 2"))), haw.viewHaw(state, actions));
  };

  exports.view11 = view11;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
