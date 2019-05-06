---
title: ドロップダウン
layout: default
root: ../
---

ドロップダウンボタン。[Popup](popup)を開くボタンです。


API
--------

### 継承

[Component](component)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| placeholder | markup | `''` | 子要素が空の場合に、代替として表示されるマークアップです。 |
| disabled | boolean | `false` | 使用不可能性 |
| invalid | boolean | `false` | 入力値の妥当性 |
| doDelay | boolean | `false` | `true`にすると、クリックしてからハンドラが起動されるまでに若干のタイムラグが生じるようになります。 |

その他、htmlのbutton要素の属性を与えられます。

### 子要素

マークアップ。  
ボタンのラベルとして表示されます。