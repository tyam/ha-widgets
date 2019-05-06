---
title: Popup
layout: default
root: ../
---

ポップアップする要素の部品です。  

Popupコンポーネントはjsx上のどこにでも記述でき、また表示・非表示はこのコンポーネント自身が管理します。  
このコンポーネントを使う最小のjsxは次のようになります。

```jsx
<Button onclick={() => allActions.haw.popup.push('my-popup')}>Show Popup</Button>
<Popup id="my-popup">...</Popup>
```

[Popup.Trigger](popup.trigger)を使うと、上記のようなコードをさらに簡潔に記述できます。


API
--------

### 継承

[VBox](vbox)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| id | string | - | DOM要素のidを指定してください。 |
| raised | number | `1` | サーフェイスの浮き具合です。 |

### 子要素

コンポーネントのリスト。
