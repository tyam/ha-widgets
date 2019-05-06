---
title: Component
layout: default
root: ./
---

The abstract base type of components of hw-widgets.  
I use a word *abstract* because its tag name is unknown.

They are flex-item.


API
--------

### Inheritance

None.

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| tagName | string | - | tag name of the element |
| growable | boolean | `false` | Makes the size of the component's main axis variable.<br />Refer to [Layout](layout) for details. |
| align | string | `'stretch'` | `'start', 'end', 'center', 'stretch'`<br />`align-self` property of flex-item. |
| classes | object | `{}` | The object representing html classes. Refer to [bcs](common) for details. |
| m | integer\|Array\|null | null | Set the component's margin in five steps from 1 to 5. If an integer is given, the margins on all four sides will be the same. If a 4-element array is given, it is interpreted in the order of top, right, bottom and left. |

### 子要素

any.