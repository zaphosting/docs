---
id: humanitz-change-player-difficulty
title: "HumanitZ：プレイヤー難易度の変更"
description: "HumanitZサーバーでプレイヤーの難易度やサバイバル設定を調整する方法 → 今すぐ詳しくチェック"
sidebar_label: "プレイヤー難易度の変更"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

HumanitZのプレイヤー難易度は、サバイバルの厳しさを決める重要な設定です。パーマデスからバイタルの減少速度、バンディットの強さまで、これらの設定がサーバーの難易度に直結します。

<InlineVoucher />

## 設定方法

プレイヤー難易度の設定は `GameServerSettings.ini` ファイルで管理されています。サーバーの管理パネルの **Configs** からアクセス可能です。ファイル内で以下のパラメータを探してください：

````
;trueにすると死亡したプレイヤーはキャラクターを失い、新しく作成する必要があります
PermaDeath=false

;0=何も失わない、1=バックパックと手持ち武器を失う、2=前述＋ポケットとバックパック、3=全て＋装備品
OnDeath=2

;睡眠不足効果 false=無効 true=有効
Sleep=true

;バイタルの減少速度 0=遅い、1=通常、2=速い
VitalDrain=1

;犬のコンパニオンの体力 0=低い 1=デフォルト 2=高い
CompanionHealth=1

;犬のコンパニオンのダメージ 0=低い 1=デフォルト 2=高い
CompanionDmg=1

;人間バンディットのリスポーン時間（分）、0にするとリスポーン無効
HumanRespawnTimer=90

;人間バンディットの難易度（体力） 0=非常に簡単、1=簡単、2=デフォルト、3=難しい、4=非常に難しい、5=ナイトメア
HumanHealth=2

;人間バンディットの難易度（速度） 0=非常に簡単、1=簡単、2=デフォルト、3=難しい、4=非常に難しい、5=ナイトメア
HumanSpeed=2

;人間バンディットの難易度（ダメージ） 0=非常に簡単、1=簡単、2=デフォルト、3=難しい、4=非常に難しい、5=ナイトメア
HumanDamage=2
````

各設定の意味は以下の通りです：

- `PermaDeath` – `true`にすると死亡時にキャラクターが永久に失われ、新規作成が必要になる  
- `OnDeath` – 死亡時に失うインベントリの量を設定  
- `Sleep` – 睡眠不足効果の有効/無効切り替え  
- `VitalDrain` – 空腹や渇きなどのバイタル減少速度を調整  
- `CompanionHealth` – 犬コンパニオンの体力レベル設定  
- `CompanionDmg` – 犬コンパニオンのダメージレベル設定  
- `HumanRespawnTimer` – 人間バンディットのリスポーンまでの時間（0でリスポーン無効）  
- `HumanHealth` – バンディットの体力難易度調整  
- `HumanSpeed` – バンディットの移動速度難易度調整  
- `HumanDamage` – バンディットのダメージ難易度調整  

お好みの難易度に合わせて値を変更し、保存後にサーバーを再起動してください。設定が反映されます。



## 難易度プリセット例

### イージーサバイバル設定

バイタルの減少が遅く、敵も弱め、パーマデスなしのゆるめ設定です。

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### ハードサバイバル設定

パーマデスあり、バイタル減少速め、バンディット強めのガチ設定です。

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## まとめ

おめでとう！`GameServerSettings.ini` の難易度関連設定を調整して、HumanitZサーバーのプレイヤー難易度をカスタマイズできました。質問やサポートが必要な場合は、いつでもサポートチームにお気軽にお問い合わせくださいね！🙂

<InlineVoucher />