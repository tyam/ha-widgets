---
title: Dropdown
layout: default
root: ./
---

Dropdown button, it is the form control which opens [Popup](popup).


API
--------

### Inheritance

[Component](component)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| placeholder | markup | `''` | It is a markup that is displayed as an alternative when the content is empty. |
| disabled | boolean | `false` | disabled or not |
| invalid | boolean | `false` | invalid or not |
| doDelay | boolean | `false` | When you pass `true`, then there will be a slight lag between the click of the button and the invocation of the handler. |

In addition, you can pass attributes of `div` html element.

### Children

Markup.  
They are displayed as a label of the button.