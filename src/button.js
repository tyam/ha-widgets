
import {bcs, onEmit} from './common'
import { h } from 'hyperapp'
import Component from './component'

const Button = (
    {
      coloring = 'default',  // or primary, danger
      size = 'default',  // or large, small, nano
      shape = 'default',  // or contained, open
      disabled = false, 
      type = 'button', 
      doDelay = false, 
      onclick = null, 
      classes = {}, 
      ...props
    }, contents) => {
  return (
    <Component tagName="button" type={type} classes={{"haw-button":true, "-coloring":coloring, "-shape":shape, "-size":size, ...classes}} disabled={disabled} onclick={onEmit(onclick, doDelay, null)} {...props}>{contents}</Component>
  )
}

export default Button
