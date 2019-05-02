
import {bcs} from './common'
import { h } from 'hyperapp'

const Component = (
    {
      tagName, 
      growable = false, 
      align = 'stretch',  // start, end, center
      classes = {}, 
      m = null, 
      ...props
    }, 
    any) => {
  if (Array.isArray(m)) {
    classes["haw--mt"] = m[0];
    classes["haw--mr"] = m[1];
    classes["haw--mb"] = m[2];
    classes["haw--ml"] = m[3];
  } else if (typeof m == 'number') {
    classes["haw--mt"] = classes["haw--mr"] = classes["haw--mb"] = classes["haw--ml"] = m;
  } 
  props.className = bcs({"-align":align, "-growable":growable, ...classes})
  return h(tagName, props, any)
}

export default Component
