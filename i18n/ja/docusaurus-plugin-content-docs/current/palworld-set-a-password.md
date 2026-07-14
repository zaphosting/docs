---
id: palworld-set-a-password
title: "Palworld: パスワード設定"
description: "Palworldのゲームサーバー設定を手動で編集し、パスワード変更を正しく適用する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: Palworld: パスワード設定
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、サーバーをパスワードで保護し、許可されたプレイヤーのみが参加できるようにできます。このガイドでは、ZAP-Hostingのゲームサーバー設定でサーバーパスワードを手動で設定または変更し、正しく適用する方法を説明します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 準備

開始する前に、以下を確認してください：

- PalworldゲームサーバーがZAP-Hostingのウェブインターフェースでオンラインになっていること
- ゲームサーバー管理にアクセスできること
- サーバーアクセスに使用したいパスワードを把握していること

:::info 手動設定が必要です
Palworldのパスワードはサーバー設定ファイルを通じて手動で設定できます。ZAP-Hostingのインターフェースでは、ゲームサーバー管理の「Configs」からこれらのファイルにアクセス可能です。
:::

## Palworld設定ファイルを開く

Palworldサーバーのパスワードを設定するには、`PalWorldSettings.ini`ファイルを編集する必要があります。

### ZAP-Hostingインターフェースでファイルを探す

1. ZAP-Hostingのウェブインターフェースにログインします。
2. **Palworld**ゲームサーバー管理を開きます。
3. **Configs**に移動します。
4. `PalWorldSettings.ini`ファイルを開きます。

このファイルには、パスワードの必要有無を制御するエントリを含む、Palworldサーバーの主要設定が含まれています。

:::note 設定ファイルの役割
`PalWorldSettings.ini`ファイルは、通常`OptionSettings=(...)`セクション内の1行でサーバーオプションを保存しています。ここで`ServerPassword`の値を編集します。
:::

## サーバーパスワードを編集する

`PalWorldSettings.ini`を開いたら、`ServerPassword`エントリを探します。

### 必須の設定エントリ

以下の値を使用してください：

```ini
ServerPassword="[your_password]"
```

`[your_password]`は、サーバー参加時にプレイヤーが入力するパスワードに置き換えてください。

パスワードが無効の場合は、次のようになっているかもしれません：

```ini
ServerPassword=""
```

空の値はパスワードが設定されていないことを意味します。

### 設定例

Palworldでは、この設定は通常`OptionSettings=(...)`ブロックの一部です。以下のような形式です：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution 既存のフォーマットを維持してください
`ServerPassword="..."`の値だけを変更してください。カンマ、引用符、括弧、その他の`OptionSettings=(...)`内のエントリを削除しないでください。これらを変更するとサーバーが設定を正しく読み込めなくなります。
:::

## 設定リファレンス

以下の表はパスワード変更に関係する設定を示しています：

| 設定項目 | 例の値 | 目的 |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | サーバー参加前にパスワード入力を要求する |

### パスワードの推奨事項

パスワードを選ぶ際は以下を参考にしてください：

| 推奨事項 | 説明 |
| --- | --- |
| ユニークなパスワードを使う | 他サービスのアカウントパスワードを使い回さない |
| 簡単すぎる単語は避ける | 簡単なパスワードは推測されやすい |
| 信頼できるプレイヤーだけに共有する | パスワードを知る人は誰でも参加を試みられる |
| 安全に保管する | パスワード管理ツールの利用がおすすめ |

:::tip 強力なパスワードを選ぼう
友人や限定コミュニティ向けのプライベートPalworldサーバーを運営する場合は、単純な単語やサーバー名ではなく強力なパスワードを使いましょう。これにより不要な参加試行を減らせます。
:::

## 変更を保存してサーバーを再起動する

パスワードを編集したら、`Configs`セクションでファイルを保存します。

### 新しいパスワードを適用する

パスワード変更を有効にするには：

1. `PalWorldSettings.ini`の変更を保存します。
2. Palworldゲームサーバーを再起動します。

Palworldは起動時に設定ファイルからサーバー設定を読み込むため、再起動が必要です。再起動しないと新しいパスワードが適用されません。

:::info 再起動が必要です
`ServerPassword`を変更した後は、ZAP-Hostingのゲームサーバー管理から手動でサーバーを再起動し、新しい設定を読み込ませてください。
:::

## パスワードの確認

再起動が完了したら、Palworldゲームからサーバーに接続して設定をテストします。

### 確認すべきこと

接続時に以下を確認してください：

- サーバーが参加前にパスワードを要求するか
- 設定したパスワードが正しく機能するか
- パスワードなしのプレイヤーがサーバーにアクセスできないか

もしパスワード要求が表示されない場合は、`PalWorldSettings.ini`を再度開いて以下を確認してください：

- `OptionSettings=(...)`内に`ServerPassword`が存在するか
- 値が空でないか
- ファイルが正しく保存されているか
- 変更後にサーバーを再起動したか

:::note パスワードは平文で保存されます
パスワードは設定ファイルに平文で保存されます。サーバー管理へのアクセスは信頼できるユーザーのみに限定してください。
:::

## 結論

おめでとうございます。Palworldサーバーのパスワード設定に成功しました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂