---
title: common.js
layout: default
root: ./
---

Commonly used functions and constants.


API
--------

### bcs(classes) => string

Function to handle DOM class attribute well, converts javascript object to class string.<br />
- When `classes.x` is a boolean value, it adds a class `x` only if it's true.
- When `classes.x` is an integer or a string, it adds a class `x + '-' + classes.x`.

```javascript
bcs({"haw-button":true, "-coloring":"primary", "-m":3, "-invalid":false})
// --> "haw-button -coloring-primary -m-3"
```

### onCreate(el) => void

Handler function of hyperapp's `oncreate` lifecycle event, launches a css transition on component appearance.<br />
Transition is performed by class operations by the following procedure.
- Immediately after the handler is called, the `-created` class is added.
- Then the `-run` class is added, and at the same time the `-created` class is removed.
- Then, the `transitionend` event handler removes the `-run` class.

### onRemove(el, done) => void

Handler function of hyperapp's `onremove` lifecycle event, launches a css transition on component removal.<br />
Transition is performed by class operations by the following procedure.
- Immediately after the handler is called, the `-run` class is added, and at the same thme the `-removed` class is added.
- Then, the `transitionend` event handler removes the `-run` class.

### onEmit(listener, doDelay, resolve) => event => void

Handler function at control component invocation such as `onclick`, launches a css animation on invocation of control component.<br />
Animation is performed by the following procedure.
- The `-emitted` class is added to the element `event.currentTarget`.
- If a handler is set in `listener`, that handler will be called.
- The `-emitted` class is removed after 600ms.

Note: If `doDelay` is truthy, the invocation of `listener` is delayed 350ms.  
Note: If the `resolve` function is truthy, the target of addition of the `-emitted` class changed to an element that the return value of `resolve (event.currentTarget)`.

