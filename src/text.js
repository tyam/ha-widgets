
import {bcs} from './common'
import { h } from 'hyperapp'
import Component from './component'

export const Text = (
    {
      size = 'medium', 
      align = 'left', 
      coloring = 'default',  // or primary, danger
      nowrap = false, 
      narrow = false, 
      classes = {}, 
      ...props
    }, contents) => (
  <Component tagName="div" classes={{"haw-text":true, "-size":size, "-nowrap":nowrap, "-align":align, "-coloring":coloring, "-narrow":narrow, ...classes}} {...props}>{contents}</Component>
)

export default Text
