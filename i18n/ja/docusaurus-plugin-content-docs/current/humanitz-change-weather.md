---
id: humanitz-change-weather
title: "HumanitZ: 天気の変更"
description: "HumanitZサーバーで天気の頻度や種類を編集・カスタマイズする方法 → 今すぐチェック"
sidebar_label: "天気の変更"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

HumanitZでは天気パターンがサバイバルプレイ、視界、世界の雰囲気に大きく影響します。晴天が多い穏やかな環境にしたいのか、それとも嵐や吹雪が頻繁に起こる過酷な世界にしたいのか、天気設定を調整することで各天気タイプの発生頻度をコントロールできます。

<InlineVoucher />

## 設定方法

天気の設定は `GameServerSettings.ini` ファイルで管理されています。このファイルはサーバーの管理パネルの **Configs** セクションからアクセス可能です。ファイル内で以下のパラメータを探してください：

```
;以下で各天気タイプの発生確率を調整できます。現在のシーズンによって出現可能な天気タイプは制限されます。
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

各設定は対応する天気タイプが発生する**相対的な確率**を表しています。値が高いほどその天気が選ばれやすくなり、低いほど発生しにくくなります。

例えば：

- `Weather_ClearSky=3` に設定すると、他の天気より晴天の確率が上がる  
- `Weather_Blizzard=0` にすると吹雪の発生が事実上無効化されます（シーズンのロジックで強制されない限り）



### 穏やかな天気設定

穏やかな天気を優先し、激しい天候を減らした例：

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### 過酷な天気設定

激しい天候や変化の多い天気の確率を上げた例：

```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

編集後はファイルを保存し、サーバーを再起動して新しい天気設定を反映させてください。



## まとめ

おめでとうございます！ `GameServerSettings.ini` の天気頻度の値を調整することで、HumanitZサーバーの天気挙動をカスタマイズできました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />