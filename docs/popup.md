---
title: Popup
layout: default
root: ./
---

Component which pops up.  

Popup components can be written anywhere on jsx, and display/non-display is managed by this component itself.  
The minimal jsx that uses this component looks like the following:

```jsx
<Button onclick={() => allActions.haw.popup.push('my-popup')}>Show Popup</Button>
<Popup id="my-popup">...</Popup>
```

Using [Popup.Trigger](popup.trigger), you can write code like the above more concisely.


API
--------

### Inheritance

[VBox](vbox)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| id | string | - | Specify `id` attribute of DOM element. |
| raised | number | `1` | The degree of surface lift. |

### Children

List of child components.

### Actions

- haw.popup.open({id, base}): Opens a popup specified by the string `id`. Refer to Element `base` for the position to display the popup.
- haw.popup.close(): Closes the currently open popup.
