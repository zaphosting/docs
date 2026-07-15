---
id: palworld-max-players
title: "Palworld: 最大プレイヤー数"
description: "ZAPインターフェースで正しい設定ファイルを編集して、Palworldゲームサーバーの最大プレイヤー数設定を変更する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: "最大プレイヤー数"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、同時にサーバーに参加できるプレイヤー数を制御できます。このガイドでは、ZAP-Hostingのゲームサーバー管理画面で正しい設定ファイルを編集して最大プレイヤー数を手動で変更する方法を説明します。



## 準備

始める前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーの管理画面にアクセスできることを確認してください。

:::info 設定ファイルへのアクセス
ゲームサーバー管理画面の**Configs**エリアからサーバー設定を手動で編集する必要があります。ゲームサーバーへのアクセス方法がわからない場合は、まずZAP-Hostingのウェブインターフェースからサーバーを開いてください。
:::

## Palworld設定ファイルの場所を特定する

最大プレイヤー数を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面で：

1. **Palworld**サーバーを開く
2. **Configs**に移動
3. `PalWorldSettings.ini`という名前のファイルを開く

このファイルには、最大プレイヤー数を含む主要なゲームプレイおよびサーバー設定が含まれています。

:::note 正しいファイル
この変更は`PalWorldSettings.ini`のみを編集してください。サーバーに他のファイルがあっても、内容を正確に理解していない限り、無関係な値は変更しないでください。
:::

## 最大プレイヤー数の変更

`PalWorldSettings.ini`内の`OptionSettings`セクションで、`ServerPlayerMaxNum`の項目を探します。

該当する設定は以下の通りです：

| 設定キー | 説明 | デフォルト値 |
| --- | --- | --- |
| `ServerPlayerMaxNum` | サーバーに参加可能な最大プレイヤー数を設定 | `32` |

典型的な記述例は以下のようになります：

```ini
ServerPlayerMaxNum=32
```

この値を希望のプレイヤー数に変更してください。例えば16人に設定する場合：

```ini
ServerPlayerMaxNum=16
```

デフォルトの32人のままにする場合：

```ini
ServerPlayerMaxNum=32
```

:::caution 対応値の使用について
Palworld専用サーバーでは通常、最大値は`32`がデフォルトです。大幅に高い値を設定すると、プランやゲームのバージョンによってはサーバーの安定性やパフォーマンスに影響が出る可能性があります。不安な場合は低めの値から試し、サーバーの動作を確認してください。
:::

## 設定例

ファイルの書式によっては、`OptionSettings`の長い行の中に設定が含まれている場合があります。その場合は`ServerPlayerMaxNum`の値だけを変更すれば十分です。

例：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

この形式の場合、カンマや括弧、引用符は削除せず、`ServerPlayerMaxNum=`の後の数字だけを置き換えてください。

## 変更の保存と適用

値を変更したら：

1. `PalWorldSettings.ini`ファイルを保存
2. Palworldサーバーを再起動

新しい最大プレイヤー数を反映させるには再起動が必要です。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| 追加のコンソールコマンドの実行 | 追加コマンドは確認されていません |
| サーバーの再起動 | はい |

:::tip 再起動が必要です
`ServerPlayerMaxNum`の設定変更は、サーバー稼働中には即時反映されません。Palworldが更新設定を読み込むためにサーバーを再起動してください。
:::

## 新しいプレイヤー制限の確認

再起動後、サーバーは新しい最大プレイヤー数を使用します。

確認方法は：

- ゲームサーバー管理画面のサーバー詳細で表示されている場合は確認
- 複数のプレイヤーでサーバーに参加してみる
- 再度`PalWorldSettings.ini`の設定を確認する

設定が反映されていない場合は、ファイルを開いて以下を確認してください：

- `ServerPlayerMaxNum=[your_value]`が正しく記載されている
- ファイルの書式が壊れていない
- 保存後にサーバーが完全に再起動されている

:::caution 設定ファイルの構文について
`OptionSettings`行からカンマや括弧、その他の値を誤って削除すると、サーバーが設定を無視したり、設定ファイルの読み込みに失敗する可能性があります。編集は慎重に行い、必要な値だけを変更してください。
:::

## まとめ

Palworldサーバーの最大プレイヤー数を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂