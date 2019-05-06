---
title: Text
layout: default
root: ./
---

Displays static text.  


API
--------

### Inheritance

[Component](component)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| size | string | `'medium'` | font size. Since it applies to the whole component, line-height also changes. |
| align | string | `'left'` | text alignment |
| coloring | string | `'default'` | `'primary', 'danger'`<br />text color |
| nowrap | boolean | `false` | `true` suppresses line breaks. |
| narrow | boolean | `false` | `true` narrows the line spacing. |

In addition, you can pass attributes of `div` html element.

### Children

Markup.
