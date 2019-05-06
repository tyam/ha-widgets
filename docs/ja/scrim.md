---
title: Scrim
layout: default
root: ../
---

モーダルなサーフェイスを乗せるための半透明暗幕。  
Scrimはスタックを形成し、新しく作成されたScrimは古いScrimより画面上の手前に表示されます。

Scrimを表示するか否か、および表示順序はライブラリが管理します。  
Scrimを利用する最小限のコードは下記のようなものです。

```jsx
<Button onclick={() => haw.scrim.push('my-scrim')}>Push Scrim</Button>
<Scrim id="my-scrim"><p>Hello Scrim</p></Scrim>
```


API
--------

### 継承

[VBox](vbox)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| id | string | - | DOMのidを指定してください。 |
| closeOnClick | boolean | `true` | `true`なら、クリックされたら閉じるScrimになります。 |
| light | boolean | `false` | `true`なら暗幕の色を背景色に近くする。`false`なら暗幕の色は前面色に近くなる。 |

### 子要素

子コンポーネントのリスト。

### Actions

- haw.scrim.push(id): 文字列`id`で指定されるScrimを最前面に表示する
- haw.scrim.pop(id): 文字列`id`で指定されるScrimを閉じる
