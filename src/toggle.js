
import {onCreate, onRemove, doNothing, bcs} from './common'
import { h } from 'hyperapp'

const Toggle = (Box) => (
    {
      box, 
      id, 
      name = null, 
      defaultShown = false, 
      oncreate = null, 
      onremove = null, 
      ...props
    }, children) => (state, actions) => {
  if (name === null) {
    name = id
  }
  if (oncreate == null) {
    oncreate = doNothing
  }
  if (onremove == null) {
    onremove = doNothing
  }
  const toShow = () => {
    if (state.haw.toggle.idm.hasOwnProperty(name)) {
      return (state.toggle.idm[name] == id)
    } else {
      return defaultShown
    }
  }
  //console.log('Toggle', id, name, toShow(), state, box)
  if (!toShow()) {
    return null
  }
  props.id = id;
  props.key = id
  props.oncreate = (el) => (oncreate(el), onCreate(el))
  props.onremove = (el,done) =>(onremove(el), onRemove(el,done))
  return Box(props, children)
}

Toggle.state = { idm:{}, prevIdm:{} }
Toggle.actions = {
  show: ({name, id}) => ({idm, prevIdm}, actions) => {
    if (idm.hasOwnProperty(name) && idm[name] == id) {
      // do nothing
      return null
    } else {
      //console.log('Toggle.show', name, id)
      return {
        idm:{...idm, name:id}, 
        prevIdm: {...prevIdm, name:idm.hasOwnProperty(name) ? idm[name] : null}
      }
    }
  }, 
  hide: ({name, id}) => ({idm, prevIdm}, actions) => {
    if (idm.hasOwnProperty(name) && idm[name] != id) {
      return null
    } else {
      return {
        idm:{...idm, name:null}, 
        prevIdm:{...prevIdm, name:idm.hasOwnProperty(name) ? idm[name] : null}
      }
    }
  }, 
  set: ({name, id}) => ({idm, prevIdm}, actions) => {
    if (idm.hasOwnProperty(name) && idm[name] == id) {
      // do nothing
      return null
    } else {
      return {
        idm:{...idm, name:id}, 
        prevIdm:{...prevIdm, name:idm.hasOwnProperty(name) ? idm[name] : null}
      }
    }
  }
}

export default Toggle;
