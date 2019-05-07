
import {bcs, onEmit} from './common'
import { h } from 'hyperapp'
import Component from './component'

const Image = (
    {
      src, 
      classes = {}, 
      ...others
    }) => {
  return <Component tagName="img" src={src} classes={{"haw-image":true, ...classes}} {...others} />
}

export default Image;
