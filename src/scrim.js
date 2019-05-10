
import {bcs, onCreate, onRemove} from './common'
import { h } from 'hyperapp'
import VBox from './vbox'

const suspendOtherSurfaces = () => {
  if (!document.documentElement.classList.contains('haw--suspended-by-scrim')) {
    document.documentElement.classList.add('haw--suspended-by-scrim')
  }
}
const resumeOtherSurfaces = () => {
  if (document.documentElement.classList.contains('haw--suspended-by-scrim')) {
    window.setTimeout(() => document.documentElement.classList.remove('haw--suspended-by-scrim'), 300)
  }
}

const Scrim = (() => {
  let views = {}
  const Scrim = (
      {
        id, 
        closeOnClick = true, 
        light = false, 
        classes = {}, 
        style = {}, 
        ...props
      }, children) => {
    views[id] = (zIndex, actions) => {
      if (closeOnClick) {
        props.onclick = (ev) => {
          if (ev.target.id == id) {
            actions.pop(id)
          }
        }
      }
      //console.log('Scrim.renderIt', id)
      return (
        <VBox tagName="div" classes={{"haw-scrim":true, "-light":light, ...classes}} key={id} id={id} style={{zIndex, ...style}} oncreate={el => (suspendOtherSurfaces(), onCreate(el))} onremove={(el, done) => (resumeOtherSurfaces(), onRemove(el, done))} {...props}>
          {children}
        </VBox>
      )
    }
    return null
  }
  Scrim.state = {ids:[]}
  Scrim.actions = {
    push: (id) => (state, actions) => ({ids:state.ids.concat([id])}), 
    pop: (id) => (state, actions) => ({ids:state.ids.filter(x => (id != x))})
  }
  Scrim.view = (state, actions) => (_state, _actions) => {
    const rv = state.ids.map((id, i) => {
      const vdom = views[id](101 + i, actions)
      return vdom
    })
    views = {}
    return (<div>{rv}</div>)
  }
  return Scrim
})();

Scrim.Trigger = Component => ({targetId, onclick:original, ...props}, children) => (state, actions) => {
  //console.log('ScrimTrigger', state, actions)
  const onclick = (x) => {
    if (state.haw.scrim.ids.includes(targetId)) {
      actions.haw.scrim.pop(targetId)
    } else {
      actions.haw.scrim.push(targetId)
    }
    if (original) original(x)
  }
  return <Component onclick={onclick} {...props}>{children}</Component>
}

export default Scrim;