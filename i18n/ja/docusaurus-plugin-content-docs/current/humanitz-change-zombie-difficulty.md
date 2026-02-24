---
id: humanitz-change-zombie-difficulty
title: "HumanitZ：ゾンビ難易度の変更"
description: "HumanitZサーバーでゾンビやAIの難易度設定を調整する方法 → 今すぐ詳しくチェック"
sidebar_label: "ゾンビ難易度の変更"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

ゾンビの難易度はHumanitZのサバイバル体験を大きく左右します。ゾンビの強さや速度からスポーン倍率、AI襲撃イベントまで、これらの設定が世界の危険度を決定します。

ゾンビやAIに関する難易度オプションはすべて `GameServerSettings.ini` ファイル内で設定可能で、サーバー上のPvE遭遇の強度を完全にコントロールできます。

<InlineVoucher />

## 設定方法

ゾンビ難易度の設定は `GameServerSettings.ini` ファイルで管理されています。サーバー管理パネルの **Configs** からアクセス可能です。ファイル内で以下のパラメータを探してください：

```
;Health difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffHealth=1

;Speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffSpeed=2

;Damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffDamage=3

;Zombie amount multiplier 2 for example would mean twice as many zombies. 0.5 would mean half as many zombies.
ZombieAmountMulti=1

;Human bandit amount multiplier 2 for example would mean twice as many human bandits. 0.5 would mean half as many human bandits.
HumanAmountMulti=1

;Zombie dog mainly appear at night. 2 for example would mean twice as many zombie dogs. 0.5 would mean half as many zombie dogs.
ZombieDogMulti=1

;The time in minutes it takes for zombies to respawn, set to 0 to disable zombie respawning.
ZombieRespawnTimer=90

;The game will sometimes spawn AI events such as zombies or humans raiding your location. 0 = Disabled, 1 = Low, 2 = Default, 3 = High, 4 = Insane
AIEvent=2
```

各設定の意味は以下の通りです：

- `ZombieDiffHealth` – ゾンビの体力難易度を調整  
- `ZombieDiffSpeed` – ゾンビの移動速度を調整  
- `ZombieDiffDamage` – ゾンビの攻撃ダメージを調整  
- `ZombieAmountMulti` – スポーンするゾンビの数を倍率で調整  
- `HumanAmountMulti` – スポーンする人間バンディットの数を倍率で調整  
- `ZombieDogMulti` – スポーンするゾンビ犬の数を倍率で調整  
- `ZombieRespawnTimer` – ゾンビのリスポーンまでの時間（分）、0にするとリスポーン無効  
- `AIEvent` – AI襲撃イベントの発生頻度を調整  

変更を加えたらファイルを保存し、サーバーを再起動して設定を反映させてください。



## 難易度プリセット例

### イージーゾンビ設定

敵の数を減らし、脅威レベルを抑えた優しいPvE体験を作ります。

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### ハードゾンビ設定

敵の強さやスポーン率、イベント頻度を上げて、より危険な世界を作ります。

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## まとめ

おめでとう！ `GameServerSettings.ini` のゾンビ関連設定を調整して、HumanitZサーバーのゾンビ難易度をカスタマイズできました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />