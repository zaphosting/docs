---
id: palworld-enable-pvp
title: "Palworld: PvPを有効化する"
description: "PalworldでPvPを有効にし、拠点戦闘の挙動を設定し、サーバーに推奨されるPvP設定を適用する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: Palworld: PvPを有効化する
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldにはプレイヤー同士が戦えるPvPモードがあり、サーバー上の拠点戦闘やギルドの相互作用の挙動が変わります。このガイドでは、ZAP-Hostingのゲームサーバー管理画面で正しい設定ファイルを編集してPvPを手動で有効化し、必要な設定を適用する方法を説明します。

:::caution トライアル機能についての注意
PalworldのPvPはゲーム開発者によってトライアル機能とされています。設定オプションやゲームプレイの挙動は今後のアップデートで変更される可能性があります。
:::

## 準備

開始する前に以下を確認してください：

- ZAP-HostingのWebインターフェースでPalworldゲームサーバーにアクセスできること
- サーバーが停止中であるか、設定変更後に再起動できること
- PvPがプレイヤー間の戦闘、拠点防衛、死亡時のアイテムロストなどゲームプレイに大きな影響を与えることを理解していること

:::info 設定ファイルへのアクセス
ZAP-HostingのPalworldサーバーでは、関連する設定ファイルはゲームサーバー管理画面の「Configs」からアクセスできます。
:::

## Palworld設定ファイルを開く

PvPを有効にするには、`PalWorldSettings.ini`ファイルを編集する必要があります。

### ZAP-Hostingインターフェースでファイルを探す

1. ZAP-HostingのWebインターフェースにログインします。
2. Palworldゲームサーバーを開きます。
3. ゲームサーバー管理画面の「Configs」に移動します。
4. `PalWorldSettings.ini`ファイルを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note 設定フォーマットについて
Palworldサーバーの設定は通常、`PalWorldSettings.ini`内の`OptionSettings=(...)`セクションに保存されています。必要なキーはこの設定ブロック内に追加または調整してください。
:::

## 必須のPvP設定を有効にする

PvPを有効にするには、`PalWorldSettings.ini`内で以下の3つの設定をすべて`True`にする必要があります。

### 必須PvPキー

| 設定名 | 必須値 | 説明 |
|---|---|---|
| `bIsPvP` | `True` | サーバーでPvPモードを有効化 |
| `bEnablePlayerToPlayerDamage` | `True` | プレイヤー同士の直接ダメージを許可 |
| `bEnableDefenseOtherGuildPlayer` | `True` | 他ギルドプレイヤーとの防御的相互作用を許可 |

### 設定例

`OptionSettings=(...)`行に以下の値を追加するか、既に存在する場合は値を変更してください：

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip 重複キーを避ける
`PalWorldSettings.ini`に既に設定がある場合は、同じキーを重複して追加せず既存の値を編集してください。重複は予期しない挙動やトラブルシューティングの困難を招きます。
:::

## 推奨されるPvP設定

PvPを有効にした後、よりバランスの取れたPvP体験のために追加設定を調整できます。以下はPvP重視のサーバーで一般的に推奨される値です。

### 推奨値一覧

| 設定名 | 推奨値 | 説明 |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | HPステータスの割り当てを禁止 |
| `bAllowEnhanceStat_Attack` | `False` | 攻撃ステータスの割り当てを禁止 |
| `bEnableFastTravel` | `True` | ファストトラベルを有効に維持 |
| `bEnableFastTravelOnlyBaseCamp` | `True` | ファストトラベルを拠点に限定 |
| `bExistPlayerAfterLogout` | `True` | ログアウト後もプレイヤーをワールドに残す |
| `bEnableAimAssistPad` | `False` | コントローラーのエイムアシストを無効化 |
| `DeathPenalty` | `All` | 死亡時に全アイテムとパルをドロップ |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | 他プレイヤーのドロップアイテムを拾えるようにする |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | 他ギルドの拠点エリアを表示 |
| `bBuildAreaLimit` | `True` | 建築制限エリアの防止に役立つ |
| `GuildPlayerMaxNum` | `4` | ギルドの最大人数制限 |
| `BaseCampMaxNumInGuild` | `2` | ギルドごとの拠点数制限 |
| `MaxBuildingLimitNum` | `1000` | プレイヤーごとの建築物制限 |
| `GuildRejoinCooldownMinutes` | `60` | ギルド再加入のクールダウン時間（分） |
| `BlockRespawnTime` | `5.0` | 拠点リスポーン遅延時間（秒） |
| `RespawnPenaltyDurationThreshold` | `1800.0` | リスポーンペナルティがリセットされるまでの時間（秒） |
| `RespawnPenaltyTimeScale` | `2.0` | 繰り返し死亡時のリスポーンペナルティ倍率 |

### PvP設定例

推奨値を使う場合は、`OptionSettings=(...)`セクションに以下を含めてください：

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## 任意のPvP制限と報酬設定

PvPサーバーの競争性に応じて、技術制限やPvP報酬の設定も可能です。

### 高速移動技術の制限

`DenyTechnologyList`を設定して特定の移動系技術を制限できます。

| 設定名 | 例の値 |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

例：

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note 既存の構文を確認する
Palworldの設定フォーマットはサーバーバージョンや既存の`OptionSettings=(...)`の書き方によって異なる場合があります。保存前にファイル内の既存の構文スタイルに合わせているか確認してください。
:::

### PvP報酬ドロップの設定

PalworldにはPvPキル時の追加報酬設定もあります。

| 設定名 | 説明 |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | PvPキル時の追加アイテムドロップを有効化 |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | ドロップするアイテムIDを指定 |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | ドロップ数を設定 |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | 拠点のワールドマップにPvPアイテム数を表示 |
| `bDisplayPvPItemNumOnWorldMap_Player` | プレイヤーのワールドマップにPvPアイテム数を表示 |

設定例：

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution アイテムIDの互換性について
`AdditionalDropItemWhenPlayerKillingInPvPMode`にカスタム値を使う場合は、現在のPalworldバージョンで有効なアイテムIDであることを確認してください。無効なIDは設定が反映されなかったり無視される可能性があります。
:::

## PvP有効化後の変化

PvPを有効にすると、サーバー上のゲームプレイは以下のような重要な変化があります。現在公開されているPalworldのPvPガイドラインに基づく一般的な挙動は次の通りです：

- プレイヤー同士がダメージを与え合える
- 他プレイヤーの拠点に入ると、その拠点のパルが敵対的になる可能性がある
- 飛行中のプレイヤーや騎乗中のパルはダメージが増加する場合がある
- 召喚パルや拠点パルはダメージが軽減される場合がある
- 他ギルドのチェストにアクセスできる可能性がある
- 他プレイヤーの建造物に対する近接武器のダメージが減少する場合がある
- 拠点パルはより広範囲で防衛行動を取る
- 隣接拠点間の許容距離が広がる可能性がある
- 拠点が攻撃されると通知が届く場合がある
- 拠点攻撃中は建築や修理が制限される場合がある
- 一部武器の射程やダメージがPvPモードで変更される場合がある

:::danger ゲームプレイへの影響についての警告
PvPを有効にすると、進行度、拠点の安全性、プレイヤーの定着率に大きな影響を与えます。公開サーバーを運営している場合は、変更適用前に必ずプレイヤーに通知することを推奨します。
:::

## ファイルを保存してサーバーを再起動する

`PalWorldSettings.ini`の編集が終わったら、ZAP-Hostingの「Configs」エリアでファイルを保存してください。

### 変更を適用する

新しいPvP設定を有効にするには：

1. `PalWorldSettings.ini`の変更を保存します。
2. ZAP-Hostingのゲームサーバー管理画面からPalworldサーバーを再起動します。

設定変更を反映させるには再起動が必要です。

:::info 追加コマンドは不要
`PalWorldSettings.ini`編集後にゲーム内やコンソールで追加コマンドを実行する必要は通常ありません。設定を反映させるにはサーバーの完全再起動が必須です。
:::

## PvPが有効か確認する

サーバー再起動後、ゲームに参加して挙動をテストしてください。

### 基本的な確認ポイント

以下をチェックして設定が反映されているか確認できます：

- プレイヤー同士がダメージを与えられるか
- PvP関連の拠点挙動が有効か
- 死亡ペナルティや戦利品ルールが設定通りか
- `DenyTechnologyList`などの任意制限が機能しているか

変更が反映されない場合は、`PalWorldSettings.ini`を再度開いて以下を確認してください：

- 設定名のスペルミス
- 重複したキーの存在
- `OptionSettings=(...)`内のカンマやフォーマットの誤り
- 再起動前に正しく保存されていない値

## おわりに

PalworldサーバーでPvPを無事に有効化できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂