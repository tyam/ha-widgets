---
title: Popup.Trigger
layout: default
root: ./
---

This is a HOC (higher order component) function. Receives the component and changes it to the component that interacts [Popup](popup).

```jsx
const PopupButton = Popup.Trigger(Button);
<PopupButton targetId="my-popup">Show Popup</PopupButton>
<Popup id="my-popup">...</Popup>
```

In the above example, we define and use [Button](button) that opens and closes [Popup] (popup) when it is clicked.

Popup.Trigger can also be used with [Menu.Item](menu.item) as shown below.

```jsx
const PopupMenuItem = Popup.Trigger(Menu.Item);
<Popup id="my-popup">
  <Menu>
    <PopupMenuItem targetId="my-popup">Close Popup</PopupMenuItem>
  </Menu>
</Popup>
```


API
--------

Components defined by this function receive the following additional parameters.

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| targetId | string | - | `id` attribute of the [Popup](popup) that is the target of interaction. |
