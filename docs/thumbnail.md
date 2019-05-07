---
title: Thumbnail
layout: default
root: ../
---

Displays image thumbnail.


API
--------

### Inheritance

[Component](component)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| src | string | - | image URL |
| size | number | `2` | `2, 3, 4, 6, 8, 12`<br />Specifies the size of the component. The unit is `rem`. |
| scaling | string | `'center'` | `'cover', 'contain', 'center'`<br />Specifies how to scale the image. `contain` is an inscription (scales the image to the maximum size that does not extend beyond the component). `center` is also an inscription but not expanding. `cover` is circumscription (scales to the smallest size that the image fills up with components). |

In addition, you can pass attributes of `div` html element.

### Children

none