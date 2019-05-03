
import { h } from 'hyperapp';
import { bcs, onEmit } from './common'
import Component from './component'


// Checkbox
const Checkbox = (
    {
      invalid = false, 
      id, 
      classes = {}, 
      ...props
    }, contents) => {
  return (
    <Component tagName="div" classes={{"haw-checkbox":true, "-invalid":invalid, ...classes}}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{contents}</label>
    </Component>
  )
}

export default Checkbox;