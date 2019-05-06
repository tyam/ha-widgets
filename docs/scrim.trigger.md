---
title: Scrim.Trigger
layout: default
root: ./
---

This is a HOC (higher order component) function. Receives a component and changes into the component to interact with [Scrim](scrim).

```jsx
const ScrimButton = Scrim.Trigger(Button);
<ScrimButton targetId="my-Scrim">Push Scrim</ScrimButton>
<Scrim id="my-scrim">...</Scrim>
```

In the above example, we define and use [Button](button) that opens and closes [Scrim](scrim) when it is clicked.


API
--------

Components defined by this function receive the following additional parameters.

### Properties

| name | type | default | description |
| ---- | -- | ----------- | ---- |
| targetId | string | - | `id` attribute of the [Scrim](scrim) that is the target of interaction. |
