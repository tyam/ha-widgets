---
title: Thumbnail
layout: default
root: ../
---

画像のサムネイルを表示します。


API
--------

### 継承

[Component](component)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| src | string | - | 画像のURL |
| size | number | `2` | `2, 3, 4, 6, 8, 12`<br />コンポーネントのサイズを指定します。単位はremです。 |
| scaling | string | `'center'` | `'cover', 'contain', 'center'`<br />画像のスケーリング方法を指定します。`contain`は内接（画像がコンポーネントからはみ出ない最大の大きさに拡大・縮小します）。`center`は拡大しない内接です。`cover`は外接（画像がコンポーネントを埋め尽くす最小の大きさに拡大・縮小します）。 |

その他、htmlのdiv要素の属性を与えられます。

### 子要素

なし