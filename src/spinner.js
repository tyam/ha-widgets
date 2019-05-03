
import { h } from 'hyperapp';
import { bcs, onEmit, onCreate, onRemove } from './common';
import Component from './component'

const Spinner = (
    {
      classes = {}, 
      ...others
    }) => {
  return (
    <Component tagName="div" classes={{"haw-spinner":true, ...classes}} {...others}>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <path d="M2 32
                 A14 14
                 0 1 1
                 62 32
                 " style="fill:none; stroke-width: 4" />
      </svg>
    </Component>
  )
}

export default Spinner;