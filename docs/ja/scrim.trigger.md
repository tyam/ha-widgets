---
title: Scrim.Trigger
layout: default
root: ../
---

HOC（高階コンポーネント）関数です。コンポーネントを受け取り、[Scrim](scrim)を操作するコンポーネントに改変します。

```jsx
const ScrimButton = Scrim.Trigger(Button);
<ScrimButton targetId="my-Scrim">Push Scrim</ScrimButton>
<Scrim id="my-scrim">...</Scrim>
```

上記では、クリックされたら[Scrim](scrim)を開いたり閉じたりする[Button](button)を新たなコンポーネントとして定義して、それを使っています。


API
--------

この関数により定義されたコンポーネントは、下記のパラメータを追加で受け取ります。

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| targetId | string | - | 操作の対象となる[Scrim](scrim)のidを指定してください。 |
