(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hyperapp'), require('haw')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hyperapp', 'haw'], factory) :
  (global = global || self, factory(global.app = {}, global.hyperapp, global.haw));
}(this, function (exports, hyperapp, haw) { 'use strict';

  var ScrimButton = haw.Scrim.Trigger(haw.Button);
  var PopupButton = haw.Popup.Trigger(haw.Button);
  var PopupMenuItem = haw.Popup.Trigger(haw.Menu.Item);
  var view11 = function view11(state, actions) {
    return hyperapp.h(haw.VBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(haw.HBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(ScrimButton, {
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
    }, "Snackbar")), hyperapp.h(haw.HBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(haw.TextInput, null), hyperapp.h(haw.TextInput, {
      invalid: true
    }), hyperapp.h(haw.TextInput, {
      disabled: true
    })), hyperapp.h(haw.HBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(haw.TextArea, null), hyperapp.h(haw.TextArea, {
      invalid: true
    }), hyperapp.h(haw.TextArea, {
      disabled: true
    })), hyperapp.h(haw.HBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(haw.Echo, null, "Echo")), hyperapp.h(haw.HBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(haw.Dropdown, {
      id: "dd1",
      targetId: "menu"
    }), hyperapp.h(haw.Dropdown, {
      id: "dd2",
      targetId: "menu",
      invalid: true
    }), hyperapp.h(haw.Dropdown, {
      id: "dd3",
      targetId: "menu",
      disabled: true
    })), hyperapp.h(haw.HBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(haw.FileInput, {
      id: "fi1"
    }), hyperapp.h(haw.FileInput, {
      id: "fi2",
      invalid: true
    }), hyperapp.h(haw.FileInput, {
      id: "fi3",
      disabled: true
    })), hyperapp.h(haw.HBox, {
      g: "2",
      noedge: true
    }, hyperapp.h(haw.Checkbox, {
      id: "cb1"
    }, "Checkbox 1"), hyperapp.h(haw.Checkbox, {
      id: "cb2",
      invalid: true
    }, "Checkbox 2"), hyperapp.h(haw.Checkbox, {
      id: "cb3",
      disabled: true
    }, "Checkbox 3")), hyperapp.h(haw.HBox, {
      g: "3",
      noedge: true
    }, hyperapp.h(haw.Radio, {
      id: "rb1",
      name: "rb"
    }, "Radio 1"), hyperapp.h(haw.Radio, {
      id: "rb2",
      name: "rb",
      invalid: true
    }, "Radio 2"), hyperapp.h(haw.Radio, {
      id: "rb3",
      name: "rb",
      disabled: true
    }, "Radio 3")), hyperapp.h(haw.Scrim, {
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
