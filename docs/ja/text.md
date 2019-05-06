---
title: Text
layout: default
root: ../
---

スタティックなテキストを表示します。  


API
--------

### 継承

[Component](component)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| size | string | `'medium'` | 文字サイズ。コンポーネント全体に適用するのでline-heightも変わる。 |
| align | string | `'left'` | 文字の寄せ |
| coloring | string | `'default'` | `'primary', 'danger'`<br />文字の色 |
| nowrap | boolean | `false` | `true`なら改行を抑止します。 |
| narrow | boolean | `false` | `true`なら行間を狭くします。 |

その他、htmlのdiv要素の属性を与えられます。

### 子要素

マークアップ。
