(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hyperapp')) :
    typeof define === 'function' && define.amd ? define(['exports', 'hyperapp'], factory) :
    (global = global || self, factory(global.haw = {}, global.hyperapp));
}(this, function (exports, hyperapp) { 'use strict';

    // from https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    if (!Array.prototype.includes) {
      Object.defineProperty(Array.prototype, 'includes', {
        value: function value(searchElement, fromIndex) {
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          } // 1. Let O be ? ToObject(this value).


          var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

          var len = o.length >>> 0; // 3. If len is 0, return false.

          if (len === 0) {
            return false;
          } // 4. Let n be ? ToInteger(fromIndex).
          //    (If fromIndex is undefined, this step produces the value 0.)


          var n = fromIndex | 0; // 5. If n ≥ 0, then
          //  a. Let k be n.
          // 6. Else n < 0,
          //  a. Let k be len + n.
          //  b. If k < 0, let k be 0.

          var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

          function sameValueZero(x, y) {
            return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
          } // 7. Repeat, while k < len


          while (k < len) {
            // a. Let elementK be the result of ? Get(O, ! ToString(k)).
            // b. If SameValueZero(searchElement, elementK) is true, return true.
            if (sameValueZero(o[k], searchElement)) {
              return true;
            } // c. Increase k by 1. 


            k++;
          } // 8. Return false


          return false;
        }
      });
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};

      var target = _objectWithoutPropertiesLoose(source, excluded);

      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    var effectDuration = 350;
    var bcs = function bcs(props) {
      var cs = "";

      for (var key in props) {
        if (typeof props[key] == 'string' || typeof props[key] == 'number') {
          cs += key + '-' + props[key] + ' ';
        } else if (props[key]) {
          cs += key + ' ';
        }
      }

      return cs;
    };
    var onCreate = function onCreate(el) {
      //console.log('onCreate', el.id)
      el.classList.add('-created');
      window.setTimeout(function () {
        el.classList.add('-run');
        el.classList.remove('-created');
        el.addEventListener('transitionend', function () {
          el.classList.remove('-run');
        }, {
          once: true
        });
      }, 50);
    };
    var onRemove = function onRemove(el, done) {
      el.classList.add('-run');
      el.classList.add('-removed');
      el.addEventListener('transitionend', function () {
        try {
          el.classList.remove('-run');
          done();
        } catch (ex) {// ignore
        }
      });
      window.setTimeout(function () {
        try {
          done();
        } catch (ev) {// ignore
        }
      }, 800);
    };
    var doNothing = function doNothing() {};
    var onEmit = function onEmit(listener, doDelay, resolve) {
      return function (ev) {
        if (doDelay == null) doDelay = false;
        var el = resolve ? resolve(ev.currentTarget) : ev.currentTarget;
        el.classList.add('-emitted');
        window.setTimeout(function () {
          return el.classList.remove('-emitted');
        }, 600);

        if (listener) {
          if (doDelay) window.setTimeout(function () {
            return listener(ev);
          }, effectDuration);else listener(ev);
        }
      };
    };
    var parent = function parent(el) {
      return el.parentElement;
    };

    var Component = function Component(_ref, any) {
      var tagName = _ref.tagName,
          _ref$growable = _ref.growable,
          growable = _ref$growable === void 0 ? false : _ref$growable,
          _ref$align = _ref.align,
          align = _ref$align === void 0 ? 'stretch' : _ref$align,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$m = _ref.m,
          m = _ref$m === void 0 ? null : _ref$m,
          props = _objectWithoutProperties(_ref, ["tagName", "growable", "align", "classes", "m"]);

      if (Array.isArray(m)) {
        classes["haw--mt"] = m[0];
        classes["haw--mr"] = m[1];
        classes["haw--mb"] = m[2];
        classes["haw--ml"] = m[3];
      } else if (typeof m == 'number') {
        classes["haw--mt"] = classes["haw--mr"] = classes["haw--mb"] = classes["haw--ml"] = m;
      }

      props.className = bcs(_objectSpread({
        "-align": align,
        "-growable": growable
      }, classes));
      return hyperapp.h(tagName, props, any);
    };

    var VBox = function VBox(_ref, children) {
      var _ref$justify = _ref.justify,
          justify = _ref$justify === void 0 ? 'start' : _ref$justify,
          _ref$alignItems = _ref.alignItems,
          alignItems = _ref$alignItems === void 0 ? 'stretch' : _ref$alignItems,
          _ref$g = _ref.g,
          g = _ref$g === void 0 ? 0 : _ref$g,
          _ref$noedge = _ref.noedge,
          noedge = _ref$noedge === void 0 ? false : _ref$noedge,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$scrollable = _ref.scrollable,
          scrollable = _ref$scrollable === void 0 ? false : _ref$scrollable,
          others = _objectWithoutProperties(_ref, ["justify", "alignItems", "g", "noedge", "classes", "scrollable"]);

      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-vbox": true,
          "-scrollable": scrollable,
          "-align-items": alignItems,
          "-justify": justify,
          "-g": g,
          "-noedge": noedge
        }, classes)
      }, others), children);
    };

    var suspendOtherSurfaces = function suspendOtherSurfaces() {
      if (!document.documentElement.classList.contains('haw--suspended-by-scrim')) {
        document.documentElement.classList.add('haw--suspended-by-scrim');
      }
    };

    var resumeOtherSurfaces = function resumeOtherSurfaces() {
      if (document.documentElement.classList.contains('haw--suspended-by-scrim')) {
        window.setTimeout(function () {
          return document.documentElement.classList.remove('haw--suspended-by-scrim');
        }, 300);
      }
    };

    var Scrim = function () {
      var views = {};

      var Scrim = function Scrim(_ref, children) {
        var id = _ref.id,
            _ref$closeOnClick = _ref.closeOnClick,
            closeOnClick = _ref$closeOnClick === void 0 ? true : _ref$closeOnClick,
            _ref$forSpinner = _ref.forSpinner,
            forSpinner = _ref$forSpinner === void 0 ? false : _ref$forSpinner,
            _ref$classes = _ref.classes,
            classes = _ref$classes === void 0 ? {} : _ref$classes,
            _ref$style = _ref.style,
            style = _ref$style === void 0 ? {} : _ref$style,
            props = _objectWithoutProperties(_ref, ["id", "closeOnClick", "forSpinner", "classes", "style"]);

        views[id] = function (zIndex, actions) {
          if (closeOnClick) {
            props.onclick = function (ev) {
              if (ev.target.id == id) {
                actions.pop(id);
              }
            };
          } //console.log('Scrim.renderIt', id)


          return hyperapp.h(VBox, _extends({
            tagName: "div",
            classes: _objectSpread({
              "haw-scrim": true,
              "-for-spinner": forSpinner
            }, classes),
            key: id,
            id: id,
            style: _objectSpread({
              zIndex: zIndex
            }, style),
            oncreate: function oncreate(el) {
              return suspendOtherSurfaces(), onCreate(el);
            },
            onremove: function onremove(el, done) {
              return resumeOtherSurfaces(), onRemove(el, done);
            }
          }, props), children);
        };

        return null;
      };

      Scrim.state = {
        ids: []
      };
      Scrim.actions = {
        push: function push(id) {
          return function (state, actions) {
            return {
              ids: state.ids.concat([id])
            };
          };
        },
        pop: function pop(id) {
          return function (state, actions) {
            return {
              ids: state.ids.filter(function (x) {
                return id != x;
              })
            };
          };
        }
      };

      Scrim.view = function (state, actions) {
        //console.log('Scrim.view', state)
        var rv = state.ids.map(function (id, i) {
          var vdom = views[id](101 + i, actions);
          return vdom;
        });
        views = {};
        return rv;
      };

      return Scrim;
    }();

    Scrim.Trigger = function (Component) {
      return function (_ref2, children) {
        var targetId = _ref2.targetId,
            original = _ref2.onclick,
            props = _objectWithoutProperties(_ref2, ["targetId", "onclick"]);

        return function (state, actions) {
          console.log('ScrimTrigger', state, actions);

          var onclick = function onclick(x) {
            if (state.haw.scrim.ids.includes(targetId)) {
              actions.haw.scrim.pop(targetId);
            } else {
              actions.haw.scrim.push(targetId);
            }

            if (original) original(x);
          };

          return hyperapp.h(Component, _extends({
            onclick: onclick
          }, props), children);
        };
      };
    };

    var HBox = function HBox(_ref, children) {
      var _ref$justify = _ref.justify,
          justify = _ref$justify === void 0 ? 'start' : _ref$justify,
          _ref$alignItems = _ref.alignItems,
          alignItems = _ref$alignItems === void 0 ? 'stretch' : _ref$alignItems,
          _ref$g = _ref.g,
          g = _ref$g === void 0 ? 0 : _ref$g,
          _ref$noedge = _ref.noedge,
          noedge = _ref$noedge === void 0 ? false : _ref$noedge,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$scrollable = _ref.scrollable,
          scrollable = _ref$scrollable === void 0 ? false : _ref$scrollable,
          others = _objectWithoutProperties(_ref, ["justify", "alignItems", "g", "noedge", "classes", "scrollable"]);

      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-hbox": true,
          "-scrollable": scrollable,
          "-justify": justify,
          "-align-items": alignItems,
          "-g": g,
          "-noedge": noedge
        }, classes)
      }, others), children);
    };

    var Dialog = function Dialog(_ref, children) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 'default' : _ref$size,
          _ref$raised = _ref.raised,
          raised = _ref$raised === void 0 ? 1 : _ref$raised,
          _ref$gx = _ref.gx,
          gx = _ref$gx === void 0 ? 0 : _ref$gx,
          _ref$mx = _ref.mx,
          mx = _ref$mx === void 0 ? 0 : _ref$mx,
          _ref$gy = _ref.gy,
          gy = _ref$gy === void 0 ? 0 : _ref$gy,
          _ref$my = _ref.my,
          my = _ref$my === void 0 ? 0 : _ref$my,
          others = _objectWithoutProperties(_ref, ["classes", "size", "raised", "gx", "mx", "gy", "my"]);

      return hyperapp.h(VBox, _extends({
        classes: _objectSpread({
          "haw-dialog": true,
          "haw--raised": raised,
          "-size": size,
          "-gx": gx,
          "-mx": mx,
          "-gy": gy,
          "-my": my
        }, classes)
      }, others), children);
    };

    var Button = function Button(_ref, contents) {
      var _ref$coloring = _ref.coloring,
          coloring = _ref$coloring === void 0 ? 'default' : _ref$coloring,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 'default' : _ref$size,
          _ref$shape = _ref.shape,
          shape = _ref$shape === void 0 ? 'default' : _ref$shape,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? 'button' : _ref$type,
          _ref$doDelay = _ref.doDelay,
          doDelay = _ref$doDelay === void 0 ? false : _ref$doDelay,
          _ref$onclick = _ref.onclick,
          onclick = _ref$onclick === void 0 ? null : _ref$onclick,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["coloring", "size", "shape", "disabled", "type", "doDelay", "onclick", "classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "button",
        type: type,
        classes: _objectSpread({
          "haw-button": true,
          "-coloring": coloring,
          "-shape": shape,
          "-size": size
        }, classes),
        disabled: disabled,
        onclick: onEmit(onclick, doDelay, null)
      }, props), contents);
    };

    /* To force rollup watch all sass files */
    var state = {
      scrim: Scrim.state
    };
    var actions = {
      scrim: Scrim.actions
    };
    var viewHaw = function viewHaw(state, actions) {
      return [Scrim.view(state.haw.scrim, actions.haw.scrim)];
    };

    exports.Button = Button;
    exports.Component = Component;
    exports.Dialog = Dialog;
    exports.HBox = HBox;
    exports.Scrim = Scrim;
    exports.VBox = VBox;
    exports.actions = actions;
    exports.bcs = bcs;
    exports.doNothing = doNothing;
    exports.onCreate = onCreate;
    exports.onEmit = onEmit;
    exports.onRemove = onRemove;
    exports.parent = parent;
    exports.state = state;
    exports.viewHaw = viewHaw;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
