
import {bcs, onEmit, parent} from './common'
import { h } from 'hyperapp'
import Component from './component'
import VBox from './vbox'

const Menu = (
    {
      classes = {}, 
      ...others
    }, children) => {
  return (
    <VBox classes={{"haw-menu":true, ...classes}} {...others}>
      {children}
    </VBox>
  )
}

Menu.Item = (
    {
      id, 
      type = 'button',  // or checkbox, radio
      doDelay = false, 
      onclick = null, 
      onchange = null, 
      classes = {}, 
      ...others
    }, contents) => {
  if (type == 'button') {
    onclick = onEmit(onclick, doDelay, parent)
  } else {
    onchange = onEmit(onchange, doDelay, parent)
  }
  return (
    <Component tagName="div" classes={{"haw-menu-item":true, ...classes}}>
      <input type={type} id={id} onclick={onclick} onchange={onchange} {...others} /><label htmlFor={id}>{contents}</label>
    </Component>
  )
}

Menu.Divider = (
    {
      classes = {}, 
      ...others
    }) => {
  return (
    <Component tagName="hr" classes={{"haw-menu-divider":true, ...classes}} {...others} />
  )
}

export default Menu;
