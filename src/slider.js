
import {bcs} from './common'
import { h } from 'hyperapp'
import Toggle from './toggle'
import VBox from './vbox'

const BoxedToggle = Toggle(VBox)

const Slider = (
    {
      name, 
      order, 
      classes = {}, 
      ...others
    }, children) => (state, actions) => {
  const doReverse = (el) => {
    const prevIdx = state.toggle.prevIdm.hasOwnProperty(name) ? order.indexOf(state.toggle.prevIdm[name]) : -1
    const idx = state.toggle.idm.hasOwnProperty(name) ? order.indexOf(state.toggle.idm[name]) : -1
    if (prevIdx > idx) {
      el.parentElement.classList.add('-reversed')
    } else {
      el.parentElement.classList.remove('-reversed')
    }
    const rect = el.getBoundingClientRect()
    //console.log('Slider/doReverse', el.id, rect)
  }
  return (
    <VBox classes={{"haw-slider":true, ...classes}} {...others}>
      {children.map((c, i) => {
        const defaultShown = c.attributes.defaultShown;
        //console.log('Slider', i, order[i], defaultShown)
        return (
          <BoxedToggle classes={{"slide":true}} id={order[i]} name={name} key={order[i]} oncreate={doReverse} defaultShown={defaultShown}>
            {c}
          </BoxedToggle>
        )(state, actions)
      })}
    </VBox>
  )
}

Slider.Trigger = (Component) => ({name, targetId, onchange:original, ...props}, children) => (state, actions) => {
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

export default Slider;