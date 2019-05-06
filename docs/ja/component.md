---
title: コンポーネント
layout: default
root: ../
---

hw-widgetsコンポーネントの基底型。  
flexアイテム。


API
--------

### 継承

なし

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| tagName | string | - | コンポーネントのタグ名 |
| growable | boolean | `false` | コンポーネントの主軸におけるサイズを可変にします。<br />詳細は[レイアウト](layout)を参照してください。 |
| align | string | `'stretch'` | `'start', 'end', 'center', 'stretch'`<br />flexアイテムの`align-self`プロパティです。自身の交差軸におけるサイズと位置を設定します。 |
| classes | object | `{}` | htmlクラスを表現するオブジェクト。詳細は[bcs]を参照してください。 |
| m | integer\|Array\|null | null | コンポーネントのマージンを1から5の5段階で設定します。整数を与えた場合は4辺すべてのマージンが同じになります。4要素の配列を与えた場合はtop、right、bottom、leftの順で解釈されます。 |

### 子要素

任意。