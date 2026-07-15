---
id: palworld-increase-work-speed
title: "Palworld: 作業速度の向上"
description: "Palworldの作業速度をWorkSpeedRate設定を編集して向上させる方法を学び、サーバー上でプレイヤーとPalの作業をより速く行えるようにします。 -> 今すぐ詳細を確認"
sidebar_label: "作業速度の向上"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldでは、サーバーの設定値を変更することでプレイヤーとPalの拠点作業の速度を調整できます。このガイドでは、ZAP-HostingのPalworldゲームサーバーで作業速度を上げるために正しい設定ファイルを編集し、変更を適用する方法を説明します。



## Preparation

始める前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーの管理にアクセスできることを確認してください。

:::info 手動設定が必要です
この設定は設定エディターを使って手動で行います。ゲームサーバー管理の「Configs」セクションからPalworldサーバーの設定ファイルを自分で編集する必要があります。
:::

## Palworld設定ファイルを開く

作業速度を変更するには、`PalWorldSettings.ini`ファイルを編集します。

### ファイルの場所

1. ZAP-Hostingのウェブサイトにログインします。
2. **Palworld**ゲームサーバーの管理画面を開きます。
3. **Configs**に移動します。
4. `PalWorldSettings.ini`という名前のファイルを開きます。

このファイルには、Palworldサーバーのゲームプレイ設定や倍率が含まれています。

:::note 設定ファイルの場所について
ZAP-Hostingでは、この変更に関係するファイルはゲームサーバー管理の「Configs」から直接アクセスできます。複数の設定ファイルがある場合は、必ず`PalWorldSettings.ini`を編集してください。
:::

## 作業速度設定を変更する

作業速度を上げるための設定は`WorkSpeedRate`です。

### 設定の意味

`WorkSpeedRate`は、プレイヤーとPalが拠点で作業を行う速度を制御します。デフォルト値は通常`1.0`で、標準速度を意味します。

値を大きくすると速度倍率が上がります：

| 設定キー | デフォルト値 | 例の値 | 効果 |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | 作業速度が2倍になる |
| `WorkSpeedRate` | `1.0` | `10.0` | 非常に速い作業速度 |

### 値の編集方法

`PalWorldSettings.ini`内の`OptionSettings`行を探してください。`WorkSpeedRate`の設定はその中にあります。

すでにエントリがある場合は値を変更します。例：

```ini
WorkSpeedRate=1.000000
```

これを例えば以下のように変更します：

```ini
WorkSpeedRate=2.000000
```

さらに速くしたい場合は、以下のように高い倍率を設定できます：

```ini
WorkSpeedRate=10.000000
```

### 設定例の抜粋

現在のファイル内容によっては、`OptionSettings`行の一部として以下のように表示されることがあります：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution 既存の構文を慎重に編集してください
`PalWorldSettings.ini`は厳密なフォーマットを使用しています。`WorkSpeedRate`の値だけを変更し、カンマ、括弧、引用符などの周囲の構文を削除しないように注意してください。
:::

## 保存してサーバーを再起動する

ファイルを編集したら、変更を保存してPalworldサーバーを再起動する必要があります。

### 変更の適用手順

1. 更新した`PalWorldSettings.ini`ファイルを保存します。
2. ZAP-Hostingのゲームサーバー管理画面からPalworldサーバーを再起動します。

Palworldはサーバー起動時にこれらのゲームプレイ設定を読み込むため、再起動しないと新しい作業速度が正しく反映されません。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド | いいえ |

:::tip テストのおすすめ
まずは`2.0`など中程度の値から始めて、ゲーム内で結果を確認してください。極端に高い値は進行速度が速くなりすぎてゲームバランスに影響する可能性があります。
:::

## 新しい作業速度を確認する

サーバーが再起動してオンラインになったら、Palworldサーバーに参加して拠点での作業を試してください。

プレイヤーとPalが以前より速く作業を完了するはずです。変化が見られない場合は、再度`PalWorldSettings.ini`を開いて以下を確認してください：

- `WorkSpeedRate`が存在している
- 値が正しく設定されている
- ファイルが正常に保存されている
- 編集後にサーバーが完全に再起動されている

:::note ゲームバランスについて
作業速度を上げると拠点の発展速度が大きく変わります。バランスの良い体験を望む場合は、極端に高い速度を設定せず徐々に値を上げてください。
:::

## Conclusion

Congratulations, you have successfully increased work speed on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂