---
title: ボタン
layout: default
root: ../
---

ボタン。


API
--------

### 継承

[Component](component)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| coloring | string | `'default'` | `'default', 'primary', 'danger'`<br />ボタンの色 |
| size | string | `'default'` | `'nano', 'small', 'default', 'large'`<br />ボタンのサイズ |
| shape | string | `'default'` | `'contained', 'open', 'default'`<br />ボタンの形。デフォルトはアウトラインです。openを指定するとテキストのみになります。 |
| disabled | boolean | `false` | 使用不可かどうか |
| type | string | `'button'` | `'submit'`も指定できます。 |
| doDelay | boolean | `false` | `true`にすると、ボタンをクリックしてからハンドラが起動されるまでに若干のタイムラグが生じるようになります。 |

その他、htmlのbutton要素の属性を与えられます。

### 子要素

マークアップ。  
ボタンのラベルとして表示されます。