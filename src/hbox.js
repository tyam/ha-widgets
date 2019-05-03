
import {bcs, onEmit} from './common'
import { h } from 'hyperapp'
import Component from './component'

const HBox = (
    {
      justify = 'start',  // or end, space-between, space-around
      alignItems = 'stretch',  // or start, end, center
      g = 0, 
      noedge = false, 
      classes = {}, 
      scrollable = false,
      ...others
    }, children) => {
  return (
    <Component tagName="div"  classes={{"haw-hbox":true, "-scrollable":scrollable, "-justify":justify, "-align-items":alignItems, "-g":g, "-noedge":noedge, ...classes}} {...others}>
      {children}
    </Component>
  )
}

export default HBox
