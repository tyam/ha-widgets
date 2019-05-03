
import { h } from 'hyperapp';
import { bcs, onEmit } from './common'
import Component from './component'


// Echo
const Echo = (
    {
      classes = {}, 
      ...props
    }, contents) => (
  <Component tagName="div" classes={{"haw-echo":true, ...classes}} {...props}>
    {contents}
  </Component>
)

export default Echo;