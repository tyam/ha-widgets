
import {bcs} from './common'
import { h } from 'hyperapp'
import Component from './component'

export const Spacer = (
    {
      classes = {}, 
      growable = true, 
      ...props
    }) => (
  <Component tagName="div" growable={growable} classes={{"haw-spacer":true, ...classes}} {...props} />
)

export default Spacer
