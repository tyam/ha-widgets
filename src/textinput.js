
import { h } from 'hyperapp';
import { bcs } from './common'
import Component from './component'




// TextInput
const TextInput = (
    {
      invalid = false, 
      type = "text", 
      classes = {}, 
      ...props
    }) => {
  return (
    <Component tagName="input" type={type} classes={{"haw-text-input":true, "-invalid":invalid, ...classes}} {...props} />
  )
}

export default TextInput
