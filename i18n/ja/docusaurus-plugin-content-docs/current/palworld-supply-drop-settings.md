---
id: palworld-supply-drop-settings
title: "Palworld: 補給物資ドロップ設定"
description: "Palworldゲームサーバーで補給物資ドロップの頻度を手動で変更する方法を、SupplyDropSpan設定の編集を通じて学びましょう。 -> 今すぐ詳しく学ぶ"
sidebar_label: "補給物資ドロップ設定"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldには定期的に出現する補給物資ドロップがあり、有用な資源を含んでいます。このガイドでは、ZAP-HostingのPalworldゲームサーバーで補給物資ドロップの頻度を手動で変更する方法を、正しい設定ファイルの編集と適切な反映手順を通じて学びます。

## 準備

開始する前に、ZAP-HostingのウェブインターフェースからPalworldゲームサーバーにアクセスでき、サーバーがゲームサーバー管理画面で利用可能であることを確認してください。

:::info 手動設定が必要です
この設定はPalworldサーバーの設定ファイルを手動で編集して行います。ゲームサーバー管理画面の**Configs**セクションから設定ファイルを開く必要があります。
:::

## 設定ファイルの場所を特定する

補給物資ドロップの間隔を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開きます。
2. **Configs** に移動します。
3. `PalWorldSettings.ini`ファイルを開きます。



:::note 設定ファイルの場所について
ZAP-Hostingでは、Palworldのゲームプレイに関する設定は通常、サーバー管理画面の**Configs**エリアにある`PalWorldSettings.ini`ファイルで管理されています。もしインターフェースのレイアウトが多少異なる場合は、利用可能な設定ファイル一覧から`PalWorldSettings.ini`を探してください。
:::

## 補給物資ドロップ設定の編集

補給物資ドロップの頻度を制御する設定は`SupplyDropSpan`です。

この値は補給物資ドロップの間隔を**分単位**で定義します。

### 正しいセクションを見つける

`PalWorldSettings.ini`では、Palworldサーバーの設定は通常`OptionSettings`行内に格納されています。既存の設定ブロックを見つけて、`SupplyDropSpan`がすでに存在するか確認してください。

存在する場合は、その値を変更します。

存在しない場合は、他のカンマ区切りの設定と一緒に`OptionSettings=(...)`セクション内に追加してください。

### 設定の書式

以下の形式を使用します：

```ini
SupplyDropSpan=[your_value]
```

`[your_value]`は使用したい分数の数値に置き換えてください。

### 例示値

| 設定 | 意味 |
| --- | --- |
| `SupplyDropSpan=180` | デフォルトの3時間間隔 |
| `SupplyDropSpan=60` | 1時間ごとに補給物資ドロップ |
| `SupplyDropSpan=360` | 6時間ごとに補給物資ドロップ |
| `SupplyDropSpan=30` | 非常に頻繁な補給物資ドロップ |

以下は、`OptionSettings`ブロック内での設定例です：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution 既存の構文を維持してください
`OptionSettings`行内のカンマ、括弧、その他の既存の値を削除しないでください。この行のフォーマットミスはサーバーが設定を正しく読み込めなくなる原因になります。
:::

## 変更を保存して適用する

値を編集したら：

1. `PalWorldSettings.ini`の変更を保存します。
2. ZAP-Hostingのゲームサーバー管理画面からPalworldサーバーを再起動します。

Palworldはサーバー稼働中にこのゲームプレイ設定をライブで適用しないため、再起動が必要です。

### 追加のコマンドは必要ですか？

この変更に関しては、通常ゲーム内やコンソールでの追加コマンドは不要です。更新した`SupplyDropSpan`値を読み込むためにサーバー再起動が必須です。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の編集 | はい |
| `SupplyDropSpan`の追加または変更 | はい |
| 追加のコンソールコマンド実行 | いいえ |
| 保存後のサーバー再起動 | はい |

## 設定の確認

サーバーが再起動したら、新しい補給物資ドロップの間隔が有効になっているはずです。

この設定は時間制のワールドイベントを制御しているため、ゲーム内で完全に変更を確認するには次の出現サイクルを待つ必要があります。`60`や`30`のような短い間隔に設定すると確認が容易です。

:::tip 変更を早くテストする方法
数時間待たずに設定が機能するか確認したい場合は、一時的に`SupplyDropSpan=30`に設定してください。テスト後、好みの長期値に戻せます。
:::

## トラブルシューティング

### 設定が反映されない場合

補給物資ドロップの頻度が変わらない場合は、以下を確認してください：

- `SupplyDropSpan`が正確に記述されているか
- 値が`OptionSettings=(...)`セクション内にあるか
- カンマの抜けや括弧の破損がないか
- ファイル保存後にサーバーを再起動したか

### サーバーが設定エラーで起動しない場合

ファイル編集後にサーバーが起動しない場合は、以前の設定に戻し、構文を慎重に見直してください。

:::danger INIフォーマットの誤りに注意
Palworldは多くのゲームプレイ設定を単一の`OptionSettings`行にまとめています。1文字の誤りでも設定が壊れます。保存前に必ず変更内容を慎重に確認してください。
:::

## まとめ

おめでとうございます、Palworldの補給物資ドロップ設定を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂