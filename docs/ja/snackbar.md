---
title: Snackbar
layout: default
root: ../
---

Snackbar。  
Snackbarは直接タグを記述するのでなく、アクション関数を呼び出してください。

```jsx
haw.snackbar.trigger(<Text>Hello Snackbar</Text>);
```


API
--------

### 継承

[VBox](vbox)

### Actions

- haw.snackbar.trigger(child): 子要素`child`で指定されるコンポーネントをSnackbarで表示するよう予約します。
