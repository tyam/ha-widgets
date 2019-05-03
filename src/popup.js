
import {bcs, onCreate, onRemove, windowOffsetX, windowOffsetY} from './common'
import { h } from 'hyperapp'
import VBox from './vbox'

const placePopup = (el, base, place) => {
  const rect = base;
  const ww = window.innerWidth;
  const wh = window.innerHeight
  const ew = el.offsetWidth
  const eh = el.offsetHeight
  const scrX = windowOffsetX()
  const scrY = windowOffsetY()
  const calcLeft = (k) => {
    if (rect.left >= 0 && rect.left + ew <= ww) {
      // 左寄せでおさまる
      return k(rect.left + scrX, "left")
    } else if (rect.left + rect.width <= ww && rect.left + rect.width - ew >= 0) {
      // 右寄せでおさまる
      return k(rect.left + rect.width - ew + scrX, "right")
    } else if (ww >= ew) {
      // 中央寄せでおさまる
      return k((ww - ew)/2 + scrX, "center")
    } else {
      return k(scrX, "center")
    }
  }
  const calcTop = (k) => {
    if (rect.bottom >= 0 && rect.bottom + eh <= wh) {
      // 下表示でおさまる
      return k(rect.bottom + scrY, "top")
    } else if (rect.top <= wh && rect.top - eh >= 0) {
      // 上表示でおさまる
      return k(rect.top - eh + scrY, "bottom")
    } else if (wh >= eh) {
      // 上下中央でおさまる
      return k((wh - eh)/2 + scrY, "center")
    } else {
      return k(scrY, "center")
    }
  }
  calcLeft((left, alignX) => {
    calcTop((top, alignY) => {
      window.requestAnimationFrame(() => {
        place({
          left: left+"px", 
          top: top+"px", 
          opacity: 1, 
          transformOrigin: alignY + ' ' + alignX
        })
      })
    })
  })
}

const suspendOtherSurfaces = () => {
  if (!document.documentElement.classList.contains('haw--suspended-by-popup')) {
    document.documentElement.classList.add('haw--suspended-by-popup')
  }
}

const resumeOtherSurfaces = () => {
  if (document.documentElement.classList.contains('haw--suspended-by-popup')) {
    window.setTimeout(() => document.documentElement.classList.remove('haw--suspended-by-popup'), 300)
  }
}

const Popup = (() => {
  let views = {}
  let initialized = false
  const Popup = (
    {
      id, 
      raised = 1, 
      classes = {}, 
      style = {}, 
      ...props
    }, children
  ) => {
    views[id] = (style0, base, actions) => {
      if (! style0) {
        style0 = {opacity:0, left:0, top:0};
      }
      const composedStyle = {...style0, ...style}
      return (
        <VBox classes={{"haw-popup":true, "haw--raised":raised, ...classes}} key={id} id={id} {...props} style={composedStyle} oncreate={(el) => (suspendOtherSurfaces(), onCreate(el), placePopup(el, base, actions.place))} onremove={(el, done) => (resumeOtherSurfaces(), onRemove(el, done))}>
          {children}
        </VBox>
      )
    }
  }
  Popup.state = {id:null, style:null, base:null}
  Popup.actions = {
    place: (style) => (state, actions) => {
      return {style, id:state.id, base:state.base}
    }, 
    open: ({id, base}) => (state, actions) => {
      return {id, base, style:null}
    }, 
    close: () => (state, actions) => {
      if (!state.id) return null
      return {id:null, style:null, base:null}
    }, 
    autoclose: (ev) => (state, actions) => {
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
        return null
      }
      // 他ビューのクリックによりポップアップを消す
      return {id:null, style:null, base:null}
    }

  }
  Popup.view = (state, actions) => {
    if (! initialized) {
      document.body.addEventListener('click', actions.autoclose)
      // 他箇所のクリックを検知するために。
      if (/iphone|ipod|ipad/.test(navigator.userAgent.toLowerCase())) {
        document.body.style.cursor = 'pointer'
      }
      initialized = true
    }
    let vdom = null
    if (state.id) {
      vdom = views[state.id](state.style, state.base, actions)
    }
    views = {}
    return vdom
  }
  return Popup;
})();

Popup.Trigger = (Component) => ({targetId, onclick:original, ...props}, children) => (state, actions) => {
  var onclick = null
  if (state.haw.popup.id == targetId) {
    // close now
    if (original) {
      onclick = (x) => {
        original(x);
        actions.haw.popup.close()
      }
    } else {
      onclick = actions.haw.popup.close
    }
  } else {
    // invoke later (after current event cycle)
    onclick = (ev) => window.requestAnimationFrame(() => {
      const rect = ev.target.getBoundingClientRect()
      actions.haw.popup.open({id:targetId, base:rect})
      if (original) original(ev)
    })
  }
  return <Component onclick={onclick} {...props}>{children}</Component>
}

export default Popup;
