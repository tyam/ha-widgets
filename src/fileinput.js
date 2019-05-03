
import {bcs, onEmit} from './common'
import { h } from 'hyperapp'
import Component from './component'

const FileInput = (
    {
      id, 
      classes = {}, 
      placeholder = "", 
      invalid = false, 
      disabled = false, 
      onchange = null, 
      ondrop = null, 
      name = null, 
      ...others
    }, contents) => {
  var placeheld = false
  if (contents.length == 0) {
    contents = placeholder
    placeheld = true
  }
  const ondragover = ev => {
    ev.target.classList.add('-dangled')
    ev.preventDefault()
  }
  const ondragleave = ev => {
    ev.target.classList.remove('-dangled')
  }
  const ondrop2 = ev => {
    //console.log('ondrop2', ev, ev.dataTransfer.files.length)
    ev.target.classList.remove('-dangled')
    ev.preventDefault()
    ondrop(ev)
  }
  return (
    <Component tagName="div" classes={{"haw-file-input":true, "-placeheld":placeheld, "-invalid":invalid, ...classes}} id={id} {...others}>
      <input type="file" onchange={onchange} id={"haw-file-input-"+id} disabled={disabled} name={name} />
      <label htmlFor={"haw-file-input-"+id} onclick={onEmit(null, false, null)} ondragover={ondragover} ondragleave={ondragleave} ondrop={ondrop2}>{contents}</label>
      <span className="caret"></span>
    </Component>
  )
}

export default FileInput;