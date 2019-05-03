
/* To force rollup watch all sass files */
import '../sass/index.scss';
import '../sass/_theme.scss';
import '../sass/_common.scss';
import '../sass/_hbox.scss';
import '../sass/_vbox.scss';
import '../sass/_scrim.scss';
import '../sass/_dialog.scss';
import '../sass/_button.scss';

import './polyfill';

import Scrim from './scrim';

export {bcs, onCreate, onRemove, doNothing, onEmit, parent} from './common';
export { default as Component } from './component';

export { default as HBox } from './hbox';
export { default as VBox } from './vbox';

export { default as Scrim } from './scrim';
export { default as Dialog } from './dialog';
export { default as Button } from './button';

export const state = {
  scrim: Scrim.state
};
export const actions = {
  scrim: Scrim.actions
}
export const viewHaw = (state, actions) => {
  return [
    Scrim.view(state.haw.scrim, actions.haw.scrim)
  ]
}