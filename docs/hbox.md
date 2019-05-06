---
title: HBox
layout: default
root: ./
---

Layouts child components horizontally.  
It is a flex-container.


API
--------

### Inheritance

[Component](component)

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| justify | string | `'start'` | `'start', 'end', 'space-between', 'space-around'`<br />`justify-contet` property of flex-container |
| alignItems | string | `'stretch'` | `'start', 'end', 'center', 'stretch'`<br />`align-items` property of flex-container |
| g | number | `0` | 0..5. Specifies the gap between parent and child components, and child components. |
| noedge | boolean | false | When specified, there is no gap between parent component and child component. |
| scrollable | boolean | false | Add scrollbars as needed. |

In addition, you can pass attributes of `div` html element.

### Children

List of child components.
