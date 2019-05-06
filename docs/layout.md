---
title: Layout
layout: default
root: ./
---


### growable property

Components are usually fixed in size at the main axis (`flex-grow: 0; flex-shrink: 0;`).
By setting the `growable` property to `true`, the size of the component's main axis can be varied.
Use this property to create a Holy Grail layout.

Note: The following is collapsed because the height of VBox is not specified (so the height of Text will be 0).

```jsx
<VBox>
  <Text growable>...</Text>
  <Button>Button 1</Button>
</VBox>
```

On the other hand, the following is displayed properly.

```jsx
<VBox style={ {"height":"100%"} }>
  <Text growable>...</Text>
  <Button>Button 1</Button>
</VBox>
```

### Component gaps and margins

Using the layout component's `g` property, you can specify the gap between child components at once.  
The `g` property sets not only the gap between child components but also the margin between parent and child components at the same time.  
If there is no margin between parent component and child component, specify `noedge` property in addition to `g` property.

If you want to specify own margin for the child component instead of batch specification, specify the `m` property of the child component.  
The child component's `m` property takes precedence over the parent component's `g` property.
