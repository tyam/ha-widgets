
import { h } from 'hyperapp';
import { bcs, onEmit, onCreate, onRemove } from './common';
import Component from './component'

const Title = (
    {
      classes = {}, 
      ...others
    }, contents) => {
  return (
    <Component tagName="div" classes={{"haw-title":true, ...classes}} {...others}>
      {contents}
    </Component>
  )
}

export default Title;
