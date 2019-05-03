
import { h } from 'hyperapp';
import { bcs, onEmit, onCreate, onRemove } from './common';
import VBox from './vbox'

const Dialog = (
    {
      classes = {}, 
      size = 'default',  // small, default, large, full
      raised = 1, 
      gx = 0, 
      mx = 0, 
      gy = 0, 
      my = 0, 
      ...others
    }, children) => {
  return (
      <VBox classes={{"haw-dialog":true, "haw--raised":raised, "-size":size, "-gx":gx, "-mx":mx, "-gy":gy, "-my":my, ...classes}} {...others}>
        {children}
      </VBox>
  )
}

export default Dialog
