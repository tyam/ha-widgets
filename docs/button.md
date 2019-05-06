---
title: Button
layout: default
root: ./
---

Buttons.


API
--------

### Inheritance

[Component](component)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| coloring | string | `'default'` | `'default', 'primary', 'danger'`<br />button color |
| size | string | `'default'` | `'nano', 'small', 'default', 'large'`<br />button size |
| shape | string | `'default'` | `'contained', 'open', 'default'`<br />button's shape. 'default' is outlined. 'open' displays only text. |
| disabled | boolean | `false` | button is disabled or not. |
| type | string | `'button'` | button type. You can also specify `'submit'`. |
| doDelay | boolean | `false` | When you pass `true`, then there will be a slight lag between the click of the button and the invocation of the handler. |

In addition, you can pass attributes of `button` html element.

### Children

Markup.  
They are displayed as a label of the button.