
import {bcs, onEmit} from './common'
import { h } from 'hyperapp'
import Popup from './popup'
import Component from './component'

const Dropdown = (
    {
      classes = {}, 
      placeholder = "", 
      invalid = false, 
      disabled = false, 
      doDelay = false, 
      onclick = null, 
      ...others
    }, contents) => (state, actions) => {
  var placeheld = false
  if (contents.length == 0) {
    contents = placeholder
    placeheld = true
  }
  return (
    <Component tagName="button" classes={{"haw-dropdown":true, "-placeheld":placeheld, "-invalid":invalid, ...classes}} disabled={disabled} onclick={onEmit(onclick, doDelay, null)} {...others}>
      {contents}
      <span className="caret"></span>
    </Component>
  )
}

export default Popup.Trigger(Dropdown);
