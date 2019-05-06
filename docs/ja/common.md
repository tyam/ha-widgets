---
title: common.js
layout: default
root: ../
---

共通の関数や定数


API
--------

### bcs(classes) => string

DOMのclass属性をうまく扱うための関数で、javascriptオブジェクトをクラス文字列に変換する。<br />
- `classes.x`がbooleanの場合、その値が真であれば`x`をクラスに追加します
- `classes.x`が整数か文字列の場合、`x + '-' + classes.x`をクラスに追加します

```javascript
bcs({"haw-button":true, "-coloring":"primary", "-m":3, "-invalid":false})
// --> "haw-button -coloring-primary -m-3"
```

### onCreate(el) => void

hyperappのライフサイクルイベント`oncreate`のハンドラで、コンポーネント登場時のcssトランジションを起動します。<br />
トランジションは、次の手順によるクラス操作により実行されます。
- ハンドラが呼び出された直後にまず`-created`クラスが追加されます。
- その次に`-run`クラスが追加され、同時に`-created`クラスが削除されます。
- その後、`transitionend`イベントのハンドラにより`-run`クラスが削除されます。

### onRemove(el, done) => void

hyperappのライフサイクルイベント`onremove`のハンドラで、コンポーネント退出時のcssトランジションを起動します。<br />
トランジションは次の手順によるクラス操作により実行されます。
- ハンドラが呼び出された直後に`-run`クラスが追加され、同時に`-removed`クラスが追加されます。
- その後、`transitionend`イベントのハンドラにより`-run`クラスが削除されます。

### onEmit(listener, doDelay, resolve) => event => void

`onclick`などコントロール部品のハンドラで、コンポーネント起動時のcssアニメーションを起動します。<br />
アニメーションは次の手順により実行されます。
- `event.currentTarget`に`-emitted`クラスが追加されます。
- `listener`にハンドラが設定されていれば、そのハンドラが呼び出されます。
- 600ms後に`-emitted`クラスが削除されます。

※`doDelay`がtruthyであれば、`listener`の呼び出しは350ms遅延されます。<br />
※`resolve`関数がtruthyであれば、`-emitted`クラスが追加されるのは`resolve(event.currentTarget)`の返却値である要素に変わります。

