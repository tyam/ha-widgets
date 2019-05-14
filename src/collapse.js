
import {bcs} from './common'
import { h } from 'hyperapp'
import Toggle from './toggle'
import VBox from './vbox'

const BoxedToggle = Toggle(VBox)

const Collapse = (
    {
      id, 
      classes = {}, 
      name = null, 
      defaultShown = false, 
      ...others
    }, children) => {
  const adjust = (el) => {
    if (! el.firstChild) {
      el.style.height = 0;
    } else {
      const r = el.firstChild.getBoundingClientRect()
      el.style.height = r.height+'px'
    }
  }
  return (
    <BoxedToggle classes={{"haw-collapse":true, ...classes}} id={id} name={name} defaultShown={defaultShown} oncreate={adjust} {...others}>
      {children}
    </BoxedToggle>
  )
}

Collapse.Trigger = (Component) => ({name, targetId, onchange:original, ...props}, children) => (state, actions) => {
  const onchange = (ev) => {
    if (ev.target.checked) {
      actions.toggle.show({id:targetId, name})
    } else {
      actions.toggle.hide({id:targetId, name})
    }
    if (original) original(ev)
  }
  return Component({name, targetId, onchange, ...props}, children)
}

export default Collapse;
