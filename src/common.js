
const effectDuration = 350;

/*export const bcs = (el, opts, cls) => {
  let cs = el + ' '
  for (const key in opts) {
    cs += el + '--' + opts[key] + ' '
  }
  return cs + cls
}*/

export const bcs = (props) => {
  let cs = ""
  for (const key in props) {
    if (typeof props[key] == 'string' || typeof props[key] == 'number') {
      cs += key + '-' + props[key] + ' '
    } else if (props[key]) {
      cs += key + ' '
    }
  }
  return cs
}

export const onCreate = (el) => {
  //console.log('onCreate', el.id)
  el.classList.add('-created')
  window.setTimeout(() => {
    el.classList.add('-run')
    el.classList.remove('-created')
    el.addEventListener('transitionend', () => {
      el.classList.remove('-run')
    }, {once:true})
  }, 50)
}

export const onRemove = (el, done) => {
  el.classList.add('-run')
  el.classList.add('-removed')
  el.addEventListener('transitionend', () => {
    try {
      el.classList.remove('-run')
      done()
    } catch (ex) {
      // ignore
    }
  })
  window.setTimeout(() => {
    try {
      done()
    } catch (ev) {
      // ignore
    }
  }, 800)
}

export const doNothing = () => {}

export const onEmit = (listener, doDelay, resolve) => (ev) => {
  if (doDelay == null) doDelay = false
  const el = (resolve) ? resolve(ev.currentTarget) : ev.currentTarget
  el.classList.add('-emitted')
  window.setTimeout(() => el.classList.remove('-emitted'), 600)
  if (listener) {
    if (doDelay) window.setTimeout(() => listener(ev), effectDuration)
    else listener(ev)
  }
}

export const parent = el => el.parentElement
