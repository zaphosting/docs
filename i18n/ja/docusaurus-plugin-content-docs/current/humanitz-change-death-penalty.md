---
id: humanitz-change-death-penalty
title: "HumanitZ: 死亡ペナルティの変更"
description: "HumanitZゲームサーバーの死亡ペナルティ設定を調整する方法 → 今すぐチェック"
sidebar_label: 死亡ペナルティの変更
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## はじめに

HumanitZの死亡ペナルティは、プレイヤーが死亡した際に失うものを決定します。サーバーのプレイスタイルによっては、より優しいサバイバル体験を好む場合もあれば、緊張感やリスクを高める厳しいシステムを選ぶ場合もあります。

<InlineVoucher />



## 設定方法

死亡ペナルティは `GameServerSettings.ini` ファイルで管理されています。このファイルはサーバーの管理パネル内の **Configs** からアクセス可能です。設定ファイル内で以下のパラメーターを探してください：

```
;0=何も失わない, 1=バックパックと手に持っている武器を失う, 2=前述に加えポケットとバックパックの中身も失う, 3=前述すべて＋装備品も失う
OnDeath=2
```

`OnDeath=` の後の数字が、死亡時にプレイヤーのインベントリからどれだけ失うかを決めます：

- `0` – 何も失わない  
- `1` – バックパックと手に持っている武器を失う  
- `2` – 上記に加えポケットとバックパックの中身も失う  
- `3` – 上記すべてに加え装備品も失う  

ペナルティを変更したい場合は、数字を希望の設定に書き換えてください。ファイルを保存したら、変更を反映させるためにサーバーを再起動しましょう。



## まとめ

おめでとうございます！`GameServerSettings.ini` の `OnDeath` の値を変更することで、HumanitZゲームサーバーの死亡ペナルティを無事に設定できました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂



<InlineVoucher />