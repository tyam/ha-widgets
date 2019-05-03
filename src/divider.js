
import { h } from 'hyperapp';
import { bcs, onEmit } from './common'
import Component from './component'


const Divider = (
    {
      classes = {}, 
      ...props
    }
) => (
  <Component tagName="hr" classes={{"haw-divider":true, ...classes}} {...props} />
)

export default Divider;