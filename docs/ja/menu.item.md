---
title: Menu.Item
layout: default
root: ../
---

メニューアイテム。  
ボタン、チェックボックスやラジオボタンのようにふるまうアイテムを定義できます。  

ボタンの場合はonclick、チェックボックスやラジオボタンの場合はonchangeでイベントを捕捉してください。


API
--------

### 継承

[Component](component)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| id | string | - | DOM要素のidを指定してください。 |
| type | string | `'button'` | `'checkbox', 'radio', 'button'`<br />メニューアイテムのタイプを指定します。 |
| doDelay | boolean | `false` | `true`にすると、クリックしてからハンドラが起動されるまでに若干のタイムラグが生じるようになります。 |

その他、htmlの要素の属性を与えられます。

### 子要素

マークアップ。  
アイテムの表示内容です。