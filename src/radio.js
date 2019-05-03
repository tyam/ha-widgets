
import { h } from 'hyperapp';
import { bcs, onEmit } from './common'
import Component from './component'


// Radio
const Radio = (
    {
      invalid = false, 
      id, 
      classes = {}, 
      ...props
    }, contents) => (
  <Component tagName="div" classes={{"haw-radio":true, "-invalid":invalid, ...classes}}>
    <input type="radio" id={id} {...props} />
    <label htmlFor={id}>{contents}</label>
  </Component>
)

export default Radio;
