---
title: Scrim
layout: default
root: ./
---

Translucent dark curtain to put modal surface.  
Scrim forms a stack, and the newly created Scrim is displayed in front of the old Scrim on the screen.

The library controls whether to display Scrim and display order.  
The minimal code to use Scrim is:

```jsx
<Button onclick={() => haw.scrim.push('my-scrim')}>Push Scrim</Button>
<Scrim id="my-scrim"><p>Hello Scrim</p></Scrim>
```


API
--------

### Inheritance

[VBox](vbox)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| id | string | - | Specify `id` attribute of DOM element. |
| closeOnClick | boolean | `true` |  |
| light | boolean | `false` | `true` will make the blackout color close to the background color. If `false`, the color of the dark curtain will be close to the foreground color. |

### Children

List of child components.

### Actions

- haw.scrim.push(id): Displays Scrim specified by the string `id` in the foreground
- haw.scrim.pop(id): Closes Scrim specified by the string `id`
