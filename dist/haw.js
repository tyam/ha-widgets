(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hyperapp')) :
    typeof define === 'function' && define.amd ? define(['exports', 'hyperapp'], factory) :
    (global = global || self, factory(global.haw = {}, global.hyperapp));
}(this, function (exports, hyperapp) { 'use strict';

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

    exports.Button = Button;
    exports.Component = Component;
    exports.bcs = bcs;
    exports.doNothing = doNothing;
    exports.onCreate = onCreate;
    exports.onEmit = onEmit;
    exports.onRemove = onRemove;
    exports.parent = parent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
