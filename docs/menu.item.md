---
title: Menu.Item
layout: default
root: ./
---

Menu item.  
You can place menu items which behaves like buttons, checkboxes or radio buttons.

Capture events by `onclick` handler if it is a button, by `onchange` handler it it is a checkbox or radio button.


API
--------

### Inheritance

[Component](component)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| id | string | - | Specify `id` attribute of DOM element |
| type | string | `'button'` | `'checkbox', 'radio', 'button'`<br />Type of menu item. |
| doDelay | boolean | `false` | When you pass `true`, then there will be a slight lag between the click of the button and the invocation of the handler. |

In addition, you can pass attributes of `input` html element.

### Children

Markup.  
Displayed as its contents.