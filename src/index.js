
/* To force rollup watch all sass files */
import '../sass/index.scss';
import '../sass/_theme.scss';
import '../sass/_common.scss';
import '../sass/_hbox.scss';
import '../sass/_vbox.scss';
import '../sass/_scrim.scss';
import '../sass/_dialog.scss';
import '../sass/_spinner.scss';
import '../sass/_popup.scss';
import '../sass/_menu.scss';
import '../sass/_snackbar.scss';
import '../sass/_checkboxradio.scss';
import '../sass/_echo.scss';
import '../sass/_fileinput.scss';
import '../sass/_textarea.scss';
import '../sass/_textinput.scss';
import '../sass/_dropdown.scss';
import '../sass/_button.scss';
import '../sass/_divider.scss';
import '../sass/_label.scss';
import '../sass/_spacer.scss';
import '../sass/_text.scss';
import '../sass/_title.scss';
import '../sass/_image.scss';
import '../sass/_thumbnail.scss';
import '../sass/_datepicker.scss';
import '../sass/_collapse.scss';
import '../sass/_slider.scss';

import './polyfill';

import Scrim from './scrim';
import Popup from './popup';
import Snackbar from './snackbar';
import DatePicker from './datepicker';
import Toggle from './toggle';

export {bcs, onCreate, onRemove, doNothing, onEmit, parent, windowOffsetX, windowOffsetY} from './common';
export { default as Component } from './component';

export { default as HBox } from './hbox';
export { default as VBox } from './vbox';

export { default as Scrim } from './scrim';
export { default as Dialog } from './dialog';
export { default as Spinner } from './spinner';
export { default as Popup } from './popup';
export { default as Menu } from './menu';
export { default as Snackbar } from './snackbar';
export { default as Checkbox } from './checkbox';
export { default as Echo } from './echo';
export { default as FileInput } from './fileinput';
export { default as Radio } from './radio';
export { default as TextArea } from './textarea';
export { default as TextInput } from './textinput'; 
export { default as Dropdown } from './dropdown';
export { default as Button } from './button';
export { default as Divider } from './divider';
export { default as Label } from './label';
export { default as Spacer } from './spacer';
export { default as Text} from './text';
export { default as Title } from './title';
export { default as Image } from './image';
export { default as Thumbnail } from './thumbnail';
export { default as DatePicker } from './datepicker';
export { default as Toggle } from './toggle';
export { default as Collapse } from './collapse';
export { default as Slider } from './slider';

export const state = {
  datepicker: DatePicker.state, 
  scrim: Scrim.state, 
  popup: Popup.state, 
  snackbar: Snackbar.state, 
  toggle: Toggle.state
};
export const actions = {
  datepicker: DatePicker.actions, 
  scrim: Scrim.actions, 
  popup: Popup.actions, 
  snackbar: Snackbar.actions, 
  toggle: toggle.actions
}
export const viewHaw = (state, actions) => {
  return [
    Scrim.view(state.haw.scrim, actions.haw.scrim), 
    Popup.view(state.haw.popup, actions.haw.popup), 
    Snackbar.view(state.haw.snackbar, actions.haw.snackbar)
  ]
}