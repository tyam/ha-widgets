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
    var windowOffsetX = function windowOffsetX() {
      return window.scrollX || window.pageXOffset;
    };
    var windowOffsetY = function windowOffsetY() {
      return window.scrollY || window.pageYOffset;
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
            _ref$light = _ref.light,
            light = _ref$light === void 0 ? false : _ref$light,
            _ref$classes = _ref.classes,
            classes = _ref$classes === void 0 ? {} : _ref$classes,
            _ref$style = _ref.style,
            style = _ref$style === void 0 ? {} : _ref$style,
            props = _objectWithoutProperties(_ref, ["id", "closeOnClick", "light", "classes", "style"]);

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
              "-light": light
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
        return function (_state, _actions) {
          var rv = state.ids.map(function (id, i) {
            var vdom = views[id](101 + i, actions);
            return vdom;
          });
          views = {};
          return hyperapp.h("div", null, rv);
        };
      };

      return Scrim;
    }();

    Scrim.Trigger = function (Component) {
      return function (_ref2, children) {
        var targetId = _ref2.targetId,
            original = _ref2.onclick,
            props = _objectWithoutProperties(_ref2, ["targetId", "onclick"]);

        return function (state, actions) {
          //console.log('ScrimTrigger', state, actions)
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

    var placePopup = function placePopup(el, base, place) {
      var rect = base;
      var ww = window.innerWidth;
      var wh = window.innerHeight;
      var ew = el.offsetWidth;
      var eh = el.offsetHeight;
      var scrX = windowOffsetX();
      var scrY = windowOffsetY();

      var calcLeft = function calcLeft(k) {
        if (rect.left >= 0 && rect.left + ew <= ww) {
          // 左寄せでおさまる
          return k(rect.left + scrX, "left");
        } else if (rect.left + rect.width <= ww && rect.left + rect.width - ew >= 0) {
          // 右寄せでおさまる
          return k(rect.left + rect.width - ew + scrX, "right");
        } else if (ww >= ew) {
          // 中央寄せでおさまる
          return k((ww - ew) / 2 + scrX, "center");
        } else {
          return k(scrX, "center");
        }
      };

      var calcTop = function calcTop(k) {
        if (rect.bottom >= 0 && rect.bottom + eh <= wh) {
          // 下表示でおさまる
          return k(rect.bottom + scrY, "top");
        } else if (rect.top <= wh && rect.top - eh >= 0) {
          // 上表示でおさまる
          return k(rect.top - eh + scrY, "bottom");
        } else if (wh >= eh) {
          // 上下中央でおさまる
          return k((wh - eh) / 2 + scrY, "center");
        } else {
          return k(scrY, "center");
        }
      };

      calcLeft(function (left, alignX) {
        calcTop(function (top, alignY) {
          window.requestAnimationFrame(function () {
            place({
              left: left + "px",
              top: top + "px",
              opacity: 1,
              transformOrigin: alignY + ' ' + alignX
            });
          });
        });
      });
    };

    var suspendOtherSurfaces$1 = function suspendOtherSurfaces() {
      if (!document.documentElement.classList.contains('haw--suspended-by-popup')) {
        document.documentElement.classList.add('haw--suspended-by-popup');
      }
    };

    var resumeOtherSurfaces$1 = function resumeOtherSurfaces() {
      if (document.documentElement.classList.contains('haw--suspended-by-popup')) {
        window.setTimeout(function () {
          return document.documentElement.classList.remove('haw--suspended-by-popup');
        }, 300);
      }
    };

    var Popup = function () {
      var views = {};
      var initialized = false;

      var Popup = function Popup(_ref, children) {
        var id = _ref.id,
            _ref$raised = _ref.raised,
            raised = _ref$raised === void 0 ? 1 : _ref$raised,
            _ref$classes = _ref.classes,
            classes = _ref$classes === void 0 ? {} : _ref$classes,
            _ref$style = _ref.style,
            style = _ref$style === void 0 ? {} : _ref$style,
            props = _objectWithoutProperties(_ref, ["id", "raised", "classes", "style"]);

        views[id] = function (style0, base, actions) {
          if (!style0) {
            style0 = {
              opacity: 0,
              left: 0,
              top: 0
            };
          }

          var composedStyle = _objectSpread({}, style0, style);

          return hyperapp.h(VBox, _extends({
            classes: _objectSpread({
              "haw-popup": true,
              "haw--raised": raised
            }, classes),
            key: id,
            id: id
          }, props, {
            style: composedStyle,
            oncreate: function oncreate(el) {
              return suspendOtherSurfaces$1(), onCreate(el), placePopup(el, base, actions.place);
            },
            onremove: function onremove(el, done) {
              return resumeOtherSurfaces$1(), onRemove(el, done);
            }
          }), children);
        };
      };

      Popup.state = {
        id: null,
        style: null,
        base: null
      };
      Popup.actions = {
        place: function place(style) {
          return function (state, actions) {
            return {
              style: style,
              id: state.id,
              base: state.base
            };
          };
        },
        open: function open(_ref2) {
          var id = _ref2.id,
              base = _ref2.base;
          return function (state, actions) {
            return {
              id: id,
              base: base,
              style: null
            };
          };
        },
        close: function close() {
          return function (state, actions) {
            if (!state.id) return null;
            return {
              id: null,
              style: null,
              base: null
            };
          };
        },
        autoclose: function autoclose(ev) {
          return function (state, actions) {
            function isPopupElement(el) {
              for (var e = el; e != null; e = e.parentElement) {
                if (e.classList.contains('haw-popup')) {
                  return true;
                }
              }

              return false;
            }

            if (state.id == null || isPopupElement(ev.target)) {
              // no effect
              return null;
            } // 他ビューのクリックによりポップアップを消す


            return {
              id: null,
              style: null,
              base: null
            };
          };
        }
      };

      Popup.view = function (state, actions) {
        return function (_state, _actions) {
          if (!initialized) {
            document.body.addEventListener('click', actions.autoclose); // 他箇所のクリックを検知するために。

            if (/iphone|ipod|ipad/.test(navigator.userAgent.toLowerCase())) {
              document.body.style.cursor = 'pointer';
            }

            initialized = true;
          }

          var vdom = null;

          if (state.id) {
            vdom = views[state.id](state.style, state.base, actions);
          }

          views = {};
          return vdom;
        };
      };

      return Popup;
    }();

    Popup.Trigger = function (Component) {
      return function (_ref3, children) {
        var targetId = _ref3.targetId,
            original = _ref3.onclick,
            props = _objectWithoutProperties(_ref3, ["targetId", "onclick"]);

        return function (state, actions) {
          var onclick = null;

          if (state.haw.popup.id == targetId) {
            // close now
            if (original) {
              onclick = function onclick(x) {
                original(x);
                actions.haw.popup.close();
              };
            } else {
              onclick = actions.haw.popup.close;
            }
          } else {
            // invoke later (after current event cycle)
            onclick = function onclick(ev) {
              return window.requestAnimationFrame(function () {
                var rect = ev.target.getBoundingClientRect();
                actions.haw.popup.open({
                  id: targetId,
                  base: rect
                });
                if (original) original(ev);
              });
            };
          }

          return hyperapp.h(Component, _extends({
            onclick: onclick
          }, props), children);
        };
      };
    };

    var Snackbar = function Snackbar() {
      throw "direct applying not supported.";
    };

    Snackbar.view = function (state, actions) {
      if (state.n) {
        return hyperapp.h(VBox, {
          key: "haw-snackbar-".concat(state.n.no),
          classes: {
            "haw-snackbar": true,
            "haw--raised": 2
          },
          oncreate: onCreate,
          onremove: onRemove
        }, state.n.child);
      } else {
        return null;
      }
    };

    Snackbar.state = {
      serial: 1,
      n: null,
      q: []
    };
    Snackbar.actions = {
      trigger: function trigger(child) {
        return function (_ref, actions) {
          var q = _ref.q,
              serial = _ref.serial,
              rest = _objectWithoutProperties(_ref, ["q", "serial"]);

          var n = {
            no: serial,
            child: child,
            duration: 5000
          };
          window.requestAnimationFrame(actions.pick);
          return _objectSpread({
            q: q.concat([n]),
            serial: serial + 1
          }, rest);
        };
      },
      pick: function pick() {
        return function (_ref2, actions) {
          var q = _ref2.q,
              n = _ref2.n,
              rest = _objectWithoutProperties(_ref2, ["q", "n"]);

          if (!n && q.length > 0) {
            var n2 = q[0];
            var q2 = q.slice(1);
            window.setTimeout(function () {
              return actions.dispose(n2.no);
            }, n2.duration);
            return _objectSpread({
              n: n2,
              q: q2
            }, rest);
          } else {
            return null;
          }
        };
      },
      dispose: function dispose(no) {
        return function (_ref3, actions) {
          var q = _ref3.q,
              n = _ref3.n,
              rest = _objectWithoutProperties(_ref3, ["q", "n"]);

          if (n && n.no === no) {
            window.setTimeout(function () {
              return actions.pick();
            }, 500);
            return _objectSpread({
              n: null
            }, rest);
          } else {
            return null;
          }
        };
      }
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

    var Spacer = function Spacer(_ref) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$growable = _ref.growable,
          growable = _ref$growable === void 0 ? true : _ref$growable,
          props = _objectWithoutProperties(_ref, ["classes", "growable"]);

      return hyperapp.h(Component, _extends({
        tagName: "div",
        growable: growable,
        classes: _objectSpread({
          "haw-spacer": true
        }, classes)
      }, props));
    };

    var Menu = function Menu(_ref, children) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          others = _objectWithoutProperties(_ref, ["classes"]);

      return hyperapp.h(VBox, _extends({
        classes: _objectSpread({
          "haw-menu": true
        }, classes)
      }, others), children);
    };

    Menu.Item = function (_ref2, contents) {
      var id = _ref2.id,
          _ref2$type = _ref2.type,
          type = _ref2$type === void 0 ? 'button' : _ref2$type,
          _ref2$doDelay = _ref2.doDelay,
          doDelay = _ref2$doDelay === void 0 ? false : _ref2$doDelay,
          _ref2$onclick = _ref2.onclick,
          onclick = _ref2$onclick === void 0 ? null : _ref2$onclick,
          _ref2$onchange = _ref2.onchange,
          onchange = _ref2$onchange === void 0 ? null : _ref2$onchange,
          _ref2$classes = _ref2.classes,
          classes = _ref2$classes === void 0 ? {} : _ref2$classes,
          others = _objectWithoutProperties(_ref2, ["id", "type", "doDelay", "onclick", "onchange", "classes"]);

      if (type == 'button') {
        onclick = onEmit(onclick, doDelay, parent);
      } else {
        onchange = onEmit(onchange, doDelay, parent);
      }

      return hyperapp.h(Component, {
        tagName: "div",
        classes: _objectSpread({
          "haw-menu-item": true
        }, classes)
      }, hyperapp.h("input", _extends({
        type: type,
        id: id,
        onclick: onclick,
        onchange: onchange
      }, others)), hyperapp.h("label", {
        htmlFor: id
      }, contents));
    };

    Menu.Divider = function (_ref3) {
      var _ref3$classes = _ref3.classes,
          classes = _ref3$classes === void 0 ? {} : _ref3$classes,
          others = _objectWithoutProperties(_ref3, ["classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "hr",
        classes: _objectSpread({
          "haw-menu-divider": true
        }, classes)
      }, others));
    };

    var Title = function Title(_ref, contents) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          others = _objectWithoutProperties(_ref, ["classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-title": true
        }, classes)
      }, others), contents);
    };

    var Divider = function Divider(_ref) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "hr",
        classes: _objectSpread({
          "haw-divider": true
        }, classes)
      }, props));
    };

    var ScrimButton = Scrim.Trigger(Button);

    var DatePickerPanel = function DatePickerPanel(_ref) {
      var state = _ref.state,
          actions = _ref.actions,
          _ref$catalog = _ref.catalog,
          catalog = _ref$catalog === void 0 ? {} : _ref$catalog,
          _ref$minYear = _ref.minYear,
          minYear = _ref$minYear === void 0 ? 1900 : _ref$minYear,
          _ref$maxYear = _ref.maxYear,
          maxYear = _ref$maxYear === void 0 ? 2099 : _ref$maxYear,
          _ref$onpick = _ref.onpick,
          onpick = _ref$onpick === void 0 ? null : _ref$onpick;
      var defaultCatalog = {
        ok: 'OK',
        cancel: 'Cancel',
        clear: 'Clear',
        year: 'Year',
        month: 'Month',
        date: 'Date',
        week: [hyperapp.h("span", {
          "class": "haw--size-small",
          style: {
            color: "#BB2222"
          }
        }, "Sun"), hyperapp.h("span", {
          "class": "haw--size-small"
        }, "Mon"), hyperapp.h("span", {
          "class": "haw--size-small"
        }, "Tue"), hyperapp.h("span", {
          "class": "haw--size-small"
        }, "Wed"), hyperapp.h("span", {
          "class": "haw--size-small"
        }, "Thu"), hyperapp.h("span", {
          "class": "haw--size-small"
        }, "Fri"), hyperapp.h("span", {
          "class": "haw--size-small",
          style: {
            color: "#2222BB"
          }
        }, "Sat")]
      };
      catalog = _objectSpread({}, defaultCatalog, catalog);
      var years = [];

      for (var y = minYear; y <= maxYear; y++) {
        years.push(y);
      }

      var monthes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var dates = [];
      var lastDate = state.year != null && state.month != null ? getLastDate(state.year, state.month) : 31;
      var baseDay = state.year != null && state.month != null ? new Date(state.year, state.month, 1).getDay() : -1;

      for (var d = 1; d <= lastDate; d++) {
        dates.push({
          val: d,
          more: baseDay != -1 ? catalog.week[(baseDay + d - 1) % 7] : null
        });
      }

      return hyperapp.h(Scrim, {
        id: "date-picker",
        key: "date-picker"
      }, hyperapp.h(Dialog, {
        size: "default",
        style: {
          height: "30rem"
        }
      }, hyperapp.h(HBox, null, hyperapp.h(Title, {
        growable: true,
        style: {
          "text-align": "center"
        }
      }, catalog.year), hyperapp.h(Title, {
        growable: true,
        style: {
          "text-align": "center"
        }
      }, catalog.month), hyperapp.h(Title, {
        growable: true,
        style: {
          "text-align": "center"
        }
      }, catalog.date)), hyperapp.h(Divider, null), hyperapp.h(HBox, {
        growable: true
      }, hyperapp.h(VBox, {
        growable: true,
        scrollable: true,
        style: {
          height: "100%"
        }
      }, hyperapp.h(Menu, null, years.map(function (y) {
        return hyperapp.h(Menu.Item, {
          type: "radio",
          id: "year-" + y,
          key: y,
          value: y,
          name: "year",
          checked: state.year == y,
          onchange: function onchange() {
            return actions.setYear(y);
          }
        }, y);
      }))), hyperapp.h(VBox, {
        growable: true,
        scrollable: true,
        style: {
          height: "100%"
        }
      }, hyperapp.h(Menu, null, monthes.map(function (m) {
        return hyperapp.h(Menu.Item, {
          type: "radio",
          id: "month-" + m,
          key: m,
          value: m,
          name: "month",
          checked: state.month == m,
          onchange: function onchange() {
            return actions.setMonth(m);
          },
          disabled: state.year == null
        }, m + 1);
      }))), hyperapp.h(VBox, {
        growable: true,
        scrollable: true,
        style: {
          height: "100%"
        }
      }, hyperapp.h(Menu, null, dates.map(function (_ref2) {
        var d = _ref2.val,
            more = _ref2.more;
        return hyperapp.h(Menu.Item, {
          type: "radio",
          id: "date-" + d,
          key: d,
          value: d,
          name: "date",
          checked: state.date == d,
          onchange: function onchange() {
            return actions.setDate(d);
          },
          disabled: state.year == null || state.month == null
        }, d, " ", more);
      })))), hyperapp.h(Divider, null), hyperapp.h(HBox, null, hyperapp.h(ScrimButton, {
        shape: "open",
        targetId: "date-picker",
        doDelay: true,
        onclick: function onclick() {
          return onpick({
            year: null,
            month: null,
            date: null
          });
        }
      }, catalog.clear), hyperapp.h(Spacer, {
        growable: true
      }), hyperapp.h(ScrimButton, {
        shape: "open",
        targetId: "date-picker",
        doDelay: true
      }, catalog.cancel), hyperapp.h(ScrimButton, {
        shape: "open",
        targetId: "date-picker",
        doDelay: true,
        onclick: function onclick() {
          return onpick(state);
        },
        coloring: "primary"
      }, catalog.ok))));
    };

    var getLastDate = function getLastDate(year, month) {
      var d = new Date(year, month + 1, 0);
      return d.getDate();
    };

    var pad2 = function pad2(n) {
      if (n < 10) return '0' + n;else return '' + n;
    };

    var formatDate = function formatDate(val) {
      if (!val) return '';
      var d = new Date(val);
      return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getMonth());
    };

    var DatePicker = function DatePicker(_ref3) {
      var _ref3$classes = _ref3.classes,
          classes = _ref3$classes === void 0 ? {} : _ref3$classes,
          _ref3$placeholder = _ref3.placeholder,
          placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder,
          _ref3$invalid = _ref3.invalid,
          invalid = _ref3$invalid === void 0 ? false : _ref3$invalid,
          _ref3$disabled = _ref3.disabled,
          disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
          _ref3$onpick = _ref3.onpick,
          onpick = _ref3$onpick === void 0 ? null : _ref3$onpick,
          _ref3$value = _ref3.value,
          value = _ref3$value === void 0 ? null : _ref3$value,
          _ref3$show = _ref3.show,
          show = _ref3$show === void 0 ? null : _ref3$show,
          others = _objectWithoutProperties(_ref3, ["classes", "placeholder", "invalid", "disabled", "onpick", "value", "show"]);

      return function (state, actions) {
        if (show === null) {
          show = formatDate;
        }

        var contents = show(value);
        var placeheld = false;

        if (contents.length == 0) {
          contents = placeholder;
          placeheld = true;
        }

        var onclick = function onclick() {
          actions.haw.datepicker.prepare(value);
          window.requestAnimationFrame(function () {
            return actions.haw.scrim.push('date-picker');
          });
        };

        if (!onpick) {
          onpick = doNothing;
        }

        return hyperapp.h(Component, _extends({
          tagName: "button",
          classes: _objectSpread({
            "haw-date-picker": true,
            "-placeheld": placeheld,
            "-invalid": invalid
          }, classes),
          disabled: disabled,
          onclick: onEmit(onclick, true, null)
        }, others), contents, hyperapp.h("span", {
          className: "caret"
        }), hyperapp.h(DatePickerPanel, {
          onpick: onpick,
          state: state.haw.datepicker,
          actions: actions.haw.datepicker
        }));
      };
    };

    DatePicker.state = {
      year: null,
      month: null,
      date: null
    };
    DatePicker.actions = {
      prepare: function prepare(value) {
        return function (_state, _actions) {
          if (value === null) return {
            year: null,
            month: null,
            date: null
          };
          var date = new Date(value);
          return {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate()
          };
        };
      },
      setYear: function setYear(y) {
        return function (state, _actions) {
          return _objectSpread({}, state, {
            year: y
          });
        };
      },
      setMonth: function setMonth(m) {
        return function (state, _actions) {
          return _objectSpread({}, state, {
            month: m
          });
        };
      },
      setDate: function setDate(d) {
        return function (state, _actions) {
          return _objectSpread({}, state, {
            date: d
          });
        };
      }
    };

    var Toggle = function Toggle(Box) {
      return function (_ref, children) {
        var box = _ref.box,
            id = _ref.id,
            _ref$name = _ref.name,
            name = _ref$name === void 0 ? null : _ref$name,
            _ref$defaultShown = _ref.defaultShown,
            defaultShown = _ref$defaultShown === void 0 ? false : _ref$defaultShown,
            _ref$oncreate = _ref.oncreate,
            oncreate = _ref$oncreate === void 0 ? null : _ref$oncreate,
            _ref$onremove = _ref.onremove,
            onremove = _ref$onremove === void 0 ? null : _ref$onremove,
            props = _objectWithoutProperties(_ref, ["box", "id", "name", "defaultShown", "oncreate", "onremove"]);

        return function (state, actions) {
          if (name === null) {
            name = id;
          }

          if (oncreate == null) {
            oncreate = doNothing;
          }

          if (onremove == null) {
            onremove = doNothing;
          }

          var toShow = function toShow() {
            if (state.haw.toggle.idm.hasOwnProperty(name)) {
              return state.toggle.idm[name] == id;
            } else {
              return defaultShown;
            }
          }; //console.log('Toggle', id, name, toShow(), state, box)


          if (!toShow()) {
            return null;
          }

          props.id = id;
          props.key = id;

          props.oncreate = function (el) {
            return oncreate(el), onCreate(el);
          };

          props.onremove = function (el, done) {
            return onremove(el), onRemove(el, done);
          };

          return Box(props, children);
        };
      };
    };

    Toggle.state = {
      idm: {},
      prevIdm: {}
    };
    Toggle.actions = {
      show: function show(_ref2) {
        var name = _ref2.name,
            id = _ref2.id;
        return function (_ref3, actions) {
          var idm = _ref3.idm,
              prevIdm = _ref3.prevIdm;

          if (idm.hasOwnProperty(name) && idm[name] == id) {
            // do nothing
            return null;
          } else {
            //console.log('Toggle.show', name, id)
            return {
              idm: _objectSpread({}, idm, {
                name: id
              }),
              prevIdm: _objectSpread({}, prevIdm, {
                name: idm.hasOwnProperty(name) ? idm[name] : null
              })
            };
          }
        };
      },
      hide: function hide(_ref4) {
        var name = _ref4.name,
            id = _ref4.id;
        return function (_ref5, actions) {
          var idm = _ref5.idm,
              prevIdm = _ref5.prevIdm;

          if (idm.hasOwnProperty(name) && idm[name] != id) {
            return null;
          } else {
            return {
              idm: _objectSpread({}, idm, {
                name: null
              }),
              prevIdm: _objectSpread({}, prevIdm, {
                name: idm.hasOwnProperty(name) ? idm[name] : null
              })
            };
          }
        };
      },
      set: function set(_ref6) {
        var name = _ref6.name,
            id = _ref6.id;
        return function (_ref7, actions) {
          var idm = _ref7.idm,
              prevIdm = _ref7.prevIdm;

          if (idm.hasOwnProperty(name) && idm[name] == id) {
            // do nothing
            return null;
          } else {
            return {
              idm: _objectSpread({}, idm, {
                name: id
              }),
              prevIdm: _objectSpread({}, prevIdm, {
                name: idm.hasOwnProperty(name) ? idm[name] : null
              })
            };
          }
        };
      }
    };

    var Spinner = function Spinner(_ref) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          others = _objectWithoutProperties(_ref, ["classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-spinner": true
        }, classes)
      }, others), hyperapp.h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "64",
        height: "64",
        viewBox: "0 0 64 64"
      }, hyperapp.h("path", {
        d: "M2 32\r A14 14\r 0 1 1\r 62 32\r ",
        style: "fill:none; stroke-width: 4"
      })));
    };

    var Checkbox = function Checkbox(_ref, contents) {
      var _ref$invalid = _ref.invalid,
          invalid = _ref$invalid === void 0 ? false : _ref$invalid,
          id = _ref.id,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["invalid", "id", "classes"]);

      return hyperapp.h(Component, {
        tagName: "div",
        classes: _objectSpread({
          "haw-checkbox": true,
          "-invalid": invalid
        }, classes)
      }, hyperapp.h("input", _extends({
        type: "checkbox",
        id: id
      }, props)), hyperapp.h("label", {
        htmlFor: id
      }, contents));
    };

    var Echo = function Echo(_ref, contents) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-echo": true
        }, classes)
      }, props), contents);
    };

    var FileInput = function FileInput(_ref, contents) {
      var id = _ref.id,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$placeholder = _ref.placeholder,
          placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
          _ref$invalid = _ref.invalid,
          invalid = _ref$invalid === void 0 ? false : _ref$invalid,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          _ref$onchange = _ref.onchange,
          onchange = _ref$onchange === void 0 ? null : _ref$onchange,
          _ref$ondrop = _ref.ondrop,
          ondrop = _ref$ondrop === void 0 ? null : _ref$ondrop,
          _ref$name = _ref.name,
          name = _ref$name === void 0 ? null : _ref$name,
          others = _objectWithoutProperties(_ref, ["id", "classes", "placeholder", "invalid", "disabled", "onchange", "ondrop", "name"]);

      var placeheld = false;

      if (contents.length == 0) {
        contents = placeholder;
        placeheld = true;
      }

      var ondragover = function ondragover(ev) {
        ev.target.classList.add('-dangled');
        ev.preventDefault();
      };

      var ondragleave = function ondragleave(ev) {
        ev.target.classList.remove('-dangled');
      };

      var ondrop2 = function ondrop2(ev) {
        //console.log('ondrop2', ev, ev.dataTransfer.files.length)
        ev.target.classList.remove('-dangled');
        ev.preventDefault();
        ondrop(ev);
      };

      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-file-input": true,
          "-placeheld": placeheld,
          "-invalid": invalid
        }, classes),
        id: id
      }, others), hyperapp.h("input", {
        type: "file",
        onchange: onchange,
        id: "haw-file-input-" + id,
        disabled: disabled,
        name: name
      }), hyperapp.h("label", {
        htmlFor: "haw-file-input-" + id,
        onclick: onEmit(null, false, null),
        ondragover: ondragover,
        ondragleave: ondragleave,
        ondrop: ondrop2
      }, contents), hyperapp.h("span", {
        className: "caret"
      }));
    };

    var Radio = function Radio(_ref, contents) {
      var _ref$invalid = _ref.invalid,
          invalid = _ref$invalid === void 0 ? false : _ref$invalid,
          id = _ref.id,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["invalid", "id", "classes"]);

      return hyperapp.h(Component, {
        tagName: "div",
        classes: _objectSpread({
          "haw-radio": true,
          "-invalid": invalid
        }, classes)
      }, hyperapp.h("input", _extends({
        type: "radio",
        id: id
      }, props)), hyperapp.h("label", {
        htmlFor: id
      }, contents));
    };

    var TextArea = function TextArea(_ref) {
      var _ref$invalid = _ref.invalid,
          invalid = _ref$invalid === void 0 ? false : _ref$invalid,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["invalid", "classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "textarea",
        classes: _objectSpread({
          "haw-text-area": true,
          "-invalid": invalid
        }, classes)
      }, props));
    };

    var TextInput = function TextInput(_ref) {
      var _ref$invalid = _ref.invalid,
          invalid = _ref$invalid === void 0 ? false : _ref$invalid,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? "text" : _ref$type,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["invalid", "type", "classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "input",
        type: type,
        classes: _objectSpread({
          "haw-text-input": true,
          "-invalid": invalid
        }, classes)
      }, props));
    };

    var Dropdown = function Dropdown(_ref, contents) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$placeholder = _ref.placeholder,
          placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
          _ref$invalid = _ref.invalid,
          invalid = _ref$invalid === void 0 ? false : _ref$invalid,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          _ref$doDelay = _ref.doDelay,
          doDelay = _ref$doDelay === void 0 ? false : _ref$doDelay,
          _ref$onclick = _ref.onclick,
          onclick = _ref$onclick === void 0 ? null : _ref$onclick,
          others = _objectWithoutProperties(_ref, ["classes", "placeholder", "invalid", "disabled", "doDelay", "onclick"]);

      return function (state, actions) {
        var placeheld = false;

        if (contents.length == 0) {
          contents = placeholder;
          placeheld = true;
        }

        return hyperapp.h(Component, _extends({
          tagName: "button",
          classes: _objectSpread({
            "haw-dropdown": true,
            "-placeheld": placeheld,
            "-invalid": invalid
          }, classes),
          disabled: disabled,
          onclick: onEmit(onclick, doDelay, null)
        }, others), contents, hyperapp.h("span", {
          className: "caret"
        }));
      };
    };

    var dropdown = Popup.Trigger(Dropdown);

    var Label = function Label(_ref, contents) {
      var _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "label",
        classes: _objectSpread({
          "haw-label": true
        }, classes)
      }, props), contents);
    };

    var Text = function Text(_ref, contents) {
      var _ref$size = _ref.size,
          size = _ref$size === void 0 ? 'medium' : _ref$size,
          _ref$align = _ref.align,
          align = _ref$align === void 0 ? 'left' : _ref$align,
          _ref$coloring = _ref.coloring,
          coloring = _ref$coloring === void 0 ? 'default' : _ref$coloring,
          _ref$nowrap = _ref.nowrap,
          nowrap = _ref$nowrap === void 0 ? false : _ref$nowrap,
          _ref$narrow = _ref.narrow,
          narrow = _ref$narrow === void 0 ? false : _ref$narrow,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          props = _objectWithoutProperties(_ref, ["size", "align", "coloring", "nowrap", "narrow", "classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-text": true,
          "-size": size,
          "-nowrap": nowrap,
          "-align": align,
          "-coloring": coloring,
          "-narrow": narrow
        }, classes)
      }, props), contents);
    };

    var Image = function Image(_ref) {
      var src = _ref.src,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          others = _objectWithoutProperties(_ref, ["src", "classes"]);

      return hyperapp.h(Component, _extends({
        tagName: "img",
        src: src,
        classes: _objectSpread({
          "haw-image": true
        }, classes)
      }, others));
    };

    var Thumbnail = function Thumbnail(_ref) {
      var src = _ref.src,
          _ref$scaling = _ref.scaling,
          scaling = _ref$scaling === void 0 ? 'center' : _ref$scaling,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 2 : _ref$size,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$style = _ref.style,
          style = _ref$style === void 0 ? {} : _ref$style,
          others = _objectWithoutProperties(_ref, ["src", "scaling", "size", "classes", "style"]);

      style.backgroundImage = "url(" + src + ")";
      return hyperapp.h(Component, _extends({
        tagName: "div",
        classes: _objectSpread({
          "haw-thumbnail": true,
          "-scaling": scaling,
          "-size": size
        }, classes),
        style: style
      }, others), hyperapp.h("img", {
        src: src
      }));
    };

    var BoxedToggle = Toggle(VBox);

    var Collapse = function Collapse(_ref, children) {
      var id = _ref.id,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          _ref$name = _ref.name,
          name = _ref$name === void 0 ? null : _ref$name,
          _ref$defaultShown = _ref.defaultShown,
          defaultShown = _ref$defaultShown === void 0 ? false : _ref$defaultShown,
          others = _objectWithoutProperties(_ref, ["id", "classes", "name", "defaultShown"]);

      var adjust = function adjust(el) {
        if (!el.firstChild) {
          el.style.height = 0;
        } else {
          var r = el.firstChild.getBoundingClientRect();
          el.style.height = r.height + 'px';
        }
      };

      return hyperapp.h(BoxedToggle, _extends({
        classes: _objectSpread({
          "haw-collapse": true
        }, classes),
        id: id,
        name: name,
        defaultShown: defaultShown,
        oncreate: adjust
      }, others), children);
    };

    Collapse.Trigger = function (Component) {
      return function (_ref2, children) {
        var name = _ref2.name,
            targetId = _ref2.targetId,
            original = _ref2.onchange,
            props = _objectWithoutProperties(_ref2, ["name", "targetId", "onchange"]);

        return function (state, actions) {
          var onchange = function onchange(ev) {
            if (ev.target.checked) {
              actions.toggle.show({
                id: targetId,
                name: name
              });
            } else {
              actions.toggle.hide({
                id: targetId,
                name: name
              });
            }

            if (original) original(ev);
          };

          return Component(_objectSpread({
            name: name,
            targetId: targetId,
            onchange: onchange
          }, props), children);
        };
      };
    };

    var BoxedToggle$1 = Toggle(VBox);

    var Slider = function Slider(_ref, children) {
      var name = _ref.name,
          order = _ref.order,
          _ref$classes = _ref.classes,
          classes = _ref$classes === void 0 ? {} : _ref$classes,
          others = _objectWithoutProperties(_ref, ["name", "order", "classes"]);

      return function (state, actions) {
        var doReverse = function doReverse(el) {
          var prevIdx = state.toggle.prevIdm.hasOwnProperty(name) ? order.indexOf(state.toggle.prevIdm[name]) : -1;
          var idx = state.toggle.idm.hasOwnProperty(name) ? order.indexOf(state.toggle.idm[name]) : -1;

          if (prevIdx > idx) {
            el.parentElement.classList.add('-reversed');
          } else {
            el.parentElement.classList.remove('-reversed');
          }

          var rect = el.getBoundingClientRect(); //console.log('Slider/doReverse', el.id, rect)
        };

        return hyperapp.h(VBox, _extends({
          classes: _objectSpread({
            "haw-slider": true
          }, classes)
        }, others), children.map(function (c, i) {
          var defaultShown = c.attributes.defaultShown; //console.log('Slider', i, order[i], defaultShown)

          return hyperapp.h(BoxedToggle$1, {
            classes: {
              "slide": true
            },
            id: order[i],
            name: name,
            key: order[i],
            oncreate: doReverse,
            defaultShown: defaultShown
          }, c)(state, actions);
        }));
      };
    };

    Slider.Trigger = function (Component) {
      return function (_ref2, children) {
        var name = _ref2.name,
            targetId = _ref2.targetId,
            original = _ref2.onchange,
            props = _objectWithoutProperties(_ref2, ["name", "targetId", "onchange"]);

        return function (state, actions) {
          var onchange = function onchange(ev) {
            if (ev.target.checked) {
              actions.toggle.show({
                id: targetId,
                name: name
              });
            } else {
              actions.toggle.hide({
                id: targetId,
                name: name
              });
            }

            if (original) original(ev);
          };

          return Component(_objectSpread({
            name: name,
            targetId: targetId,
            onchange: onchange
          }, props), children);
        };
      };
    };

    /* To force rollup watch all sass files */
    var state = {
      datepicker: DatePicker.state,
      scrim: Scrim.state,
      popup: Popup.state,
      snackbar: Snackbar.state,
      toggle: Toggle.state
    };
    var actions = {
      datepicker: DatePicker.actions,
      scrim: Scrim.actions,
      popup: Popup.actions,
      snackbar: Snackbar.actions,
      toggle: toggle.actions
    };
    var viewHaw = function viewHaw(state, actions) {
      return [Scrim.view(state.haw.scrim, actions.haw.scrim), Popup.view(state.haw.popup, actions.haw.popup), Snackbar.view(state.haw.snackbar, actions.haw.snackbar)];
    };

    exports.Button = Button;
    exports.Checkbox = Checkbox;
    exports.Collapse = Collapse;
    exports.Component = Component;
    exports.DatePicker = DatePicker;
    exports.Dialog = Dialog;
    exports.Divider = Divider;
    exports.Dropdown = dropdown;
    exports.Echo = Echo;
    exports.FileInput = FileInput;
    exports.HBox = HBox;
    exports.Image = Image;
    exports.Label = Label;
    exports.Menu = Menu;
    exports.Popup = Popup;
    exports.Radio = Radio;
    exports.Scrim = Scrim;
    exports.Slider = Slider;
    exports.Snackbar = Snackbar;
    exports.Spacer = Spacer;
    exports.Spinner = Spinner;
    exports.Text = Text;
    exports.TextArea = TextArea;
    exports.TextInput = TextInput;
    exports.Thumbnail = Thumbnail;
    exports.Title = Title;
    exports.Toggle = Toggle;
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
    exports.windowOffsetX = windowOffsetX;
    exports.windowOffsetY = windowOffsetY;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
