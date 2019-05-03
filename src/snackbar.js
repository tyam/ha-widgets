
import {bcs, onCreate, onRemove} from './common'
import { h } from 'hyperapp'
import VBox from './vbox'


const Snackbar = () => {
  throw "direct applying not supported."
}

Snackbar.view = (state, actions) => {
  if (state.n) {
    return (
      <VBox key={`haw-snackbar-${state.n.no}`} classes={{"haw-snackbar":true, "haw--raised":2}} oncreate={onCreate} onremove={onRemove}>
        {state.n.child}
      </VBox>
    )
  } else {
    return null
  }
}
Snackbar.state = {serial:1, n:null, q:[]}
Snackbar.actions = {
  trigger: (child) => ({q, serial, ...rest}, actions) => {
    const n = {no:serial, child, duration:5000}
    window.requestAnimationFrame(actions.pick)
    return {q:q.concat([n]), serial:serial+1, ...rest}
  }, 
  pick: () => ({q, n, ...rest}, actions) => {
    if (!n && q.length > 0) {
      const n2 = q[0];
      const q2 = q.slice(1);
      window.setTimeout(() => actions.dispose(n2.no), n2.duration)
      return {n:n2, q:q2, ...rest}
    } else {
      return null
    }
  }, 
  dispose: (no) => ({q, n, ...rest}, actions) => {
    if (n && n.no === no) {
      window.setTimeout(() => actions.pick(), 500)
      return {n:null, ...rest}
    } else {
      return null;
    }
  }
}

export default Snackbar;