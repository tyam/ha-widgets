---
title: VBox
layout: default
root: ../
---

コンポーネントを垂直にレイアウトする。


API
--------

### 継承

[Component](component)

### パラメータ

| 名前 | 型 | デフォルト値 | 説明 |
| ---- | -- | ----------- | ---- |
| justify | string | `'start'` | `'start', 'end', 'space-between', 'space-around'`<br />flexコンテナのjustify-contentプロパティ。 |
| alignItems | string | `'stretch'` | `'start', 'end', 'center', 'stretch'`<br />flexコンテナのalign-itemsプロパティ。 |
| g | number | `0` | 0..5。親コンポーネントと子コンポーネント、および子コンポーネント間の隙間を指定します。 |
| noedge | boolean | false | 指定すると親コンポーネントと子コンポーネントの隙間がなくなります。 |
| scrollable | boolean | false | 必要に応じてスクロールバーを付けます。 |

その他、htmlのdiv要素の属性を与えられます。

### 子要素

コンポーネントのリスト。
