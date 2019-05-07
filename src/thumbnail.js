
import {bcs, onEmit} from './common'
import { h } from 'hyperapp'
import Component from './component'

const Thumbnail = (
    {
      src, 
      scaling = 'center',  // or cover, contain
      size = 2,  // or 3, 4, 6, 8, 12 in rem unit
      classes = {}, 
      style = {}, 
      ...others
    }) => {
  style.backgroundImage = "url("+src+")"
  return (
    <Component tagName="div" classes={{"haw-thumbnail":true, "-scaling":scaling, "-size":size, ...classes}} style={style} {...others}>
      <img src={src} />
    </Component>
  )
}

export default Thumbnail;