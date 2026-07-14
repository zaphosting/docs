---
id: palworld-change-server-name
title: "Palworld: サーバー名の変更"
description: "Palworldのサーバー名を変更し、プレイヤーに表示されるサーバーブラウザ名を正しい設定ファイルを手動で編集して更新する方法を学びます。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: サーバー名の変更
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、ゲーム内のサーバーブラウザに表示されるサーバー名を設定ファイルで定義しています。このガイドでは、ZAP-Hostingのウェブインターフェースで表示されるサーバー名を手動で変更し、正しく反映させる方法を説明します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 準備

開始する前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーにアクセスでき、設定ファイルを編集する権限があることを確認してください。

:::info 手動設定が必要です
この変更はPalworldのサーバー設定を手動で編集することで行います。該当ファイルはゲームサーバー管理の「Configs」からアクセス可能です。
:::

## Palworld設定ファイルを開く

サーバー名を変更するには、`PalWorldSettings.ini`ファイルを編集する必要があります。

ZAP-Hostingのウェブインターフェースで：

1. **Palworld**ゲームサーバーを開きます。
2. サーバー管理の**Configs**に移動します。
3. `PalWorldSettings.ini`ファイルを開きます。

:::note 設定ファイルの場所について
Palworld専用サーバーでは、設定は通常`PalWorldSettings.ini`に保存されています。ZAP-Hostingのインターフェースでは、ファイルパスを手動で変更せず、「Configs」セクションからこのファイルを編集してください。
:::

## サーバー名を編集する

`PalWorldSettings.ini`内の`OptionSettings`セクションを探します。サーバーブラウザに表示される名前は`ServerName`エントリで制御されています。

オプションで`ServerDescription`でサーバーの説明も設定可能です。

### 設定例

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Your Palworld server description")
```

すでに長い`OptionSettings=(...)`行がある場合は、`ServerName`と必要に応じて`ServerDescription`の値だけを変更してください。

### 変更が必要な値

| 設定キー | 説明 | 例 |
| --- | --- | --- |
| `ServerName` | Palworldサーバーブラウザに表示される名前 | `"zaphosting"` |
| `ServerDescription` | サーバーと一緒に表示される任意の説明文 | `"Public survival server"` |

:::caution 既存設定はそのままに
`OptionSettings`には多くのサーバー設定が1行にまとめられていることが多いです。`ServerName`と`ServerDescription`以外は、意図的に変更しない限り触らないでください。
:::

## 変更を保存する

値を編集したら：

1. **Configs**セクションで`PalWorldSettings.ini`ファイルを保存します。
2. 引用符やカンマの形式が正しいままであることを確認してください。

### 既存の行の例

ファイルに以下のような行がある場合は、該当するテキストだけを更新してください：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Public survival server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## サーバーを再起動する

設定を保存したら、新しい名前を反映させるためにPalworldサーバーを再起動する必要があります。

### 新しい設定を適用する

ZAP-Hostingのゲームサーバー管理パネルの再起動機能を使ってください。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド実行 | いいえ |

:::tip サーバーブラウザの更新遅延について
再起動後、更新されたサーバー名がすぐに全プレイヤーのサーバーブラウザに反映されない場合があります。必要に応じて数分待ってからサーバーリストを更新してください。
:::

## 新しいサーバー名を確認する

サーバーが再起動したら：

1. Palworldを起動します。
2. マルチプレイヤーのサーバーブラウザを開きます。
3. `ServerName`で設定した名前を検索します。

もし古い名前がまだ表示される場合は、`PalWorldSettings.ini`を再度開いて以下を確認してください：
- `ServerName`の値が正しく変更されているか
- ファイルが正常に保存されているか
- 変更後にサーバーが完全に再起動されているか

## 結論

おめでとうございます、Palworldのサーバー名を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂