---
title: ファイル入力
layout: default
root: ../
---

ファイル入力。ファイルのドロップ（ondrop）に対応しています。


API
--------

### 継承とタグ名

[Component](component)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| id | string | - | DOM要素のidを指定してください。 |
| placeholder | markup | `''` | 子要素が空の場合に、代替として表示されるマークアップです。 |
| disabled | boolean | `false` | 使用不可能性 |
| invalid | boolean | `false` | 入力値の妥当性 |
| name | string | - | input(type=file)のname属性を指定できます。 |

その他、htmlのdiv要素の属性を与えられます。

### 子要素

マークアップ。  
ラベルとして表示されます。