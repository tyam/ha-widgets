import { h } from 'hyperapp';
import { bcs } from './common'
import Component from './component'


// Label
const Label = (
    {
      classes = {}, 
      ...props
    }, contents) => {
  return (
    <Component tagName="label" classes={{"haw-label":true, ...classes}} {...props}>
      {contents}
    </Component>
  )
}

export default Label;
