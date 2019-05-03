
import { h } from 'hyperapp';
import { bcs, onEmit } from './common'
import Component from './component'


// TextArea
const TextArea = (
    {
      invalid = false, 
      classes = {}, 
      ...props
    }) => (
  <Component tagName="textarea" classes={{"haw-text-area":true, "-invalid":invalid, ...classes}} {...props} />
)

export default TextArea;
