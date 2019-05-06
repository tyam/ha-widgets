---
title: Popup.Trigger
layout: default
root: ../
---

HOC（高階コンポーネント）関数です。コンポーネントを受け取り、[Popup](popup)を操作するコンポーネントに改変します。

```jsx
const PopupButton = Popup.Trigger(Button);
<PopupButton targetId="my-popup">Show Popup</PopupButton>
<Popup id="my-popup">...</Popup>
```

上記では、クリックされたら[Popup](popup)を開いたり閉じたりする[Button](button)を新たなコンポーネントとして定義して、それを使っています。

Popup.Triggerは下記のように[Menu.Item](menu.item)でも活用できます。

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

この関数により定義されたコンポーネントは、下記のパラメータを追加で受け取ります。

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| targetId | string | - | 操作の対象となる[Popup](popup)のidを指定してください。 |
