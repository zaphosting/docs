---
id: palworld-performance-guide
title: "Palworld: パフォーマンスガイド"
description: "Palworldサーバーのパフォーマンスを向上させ、パフォーマンス低下を減らし、サーバー負荷を軽減するための手動設定変更方法を解説します。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: パフォーマンスガイド
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldのゲームサーバーは、特に多くの拠点やワーカー、落ちているアイテム、野生のPalsがいる活発なサーバーで時間経過とともにパフォーマンスが低下することがあります。このガイドでは、ZAP-Hostingのコントロールパネルで`PalWorldSettings.ini`ファイルを最適化し、サーバー負荷を減らして全体的なパフォーマンスを向上させる方法を説明します。

## Preparation

開始する前に、Palworldゲームサーバーの管理アクセスと設定ファイル編集権限が必要です。

:::info 必要なアクセス権
ZAP-Hostingのゲームサーバー管理パネルでPalworldサーバーにアクセスできる必要があります。設定ファイルは「Configs」から利用可能です。
:::

:::caution まずはバックアップを作成
パフォーマンス調整はゲームプレイの挙動に大きく影響する可能性があります。設定を編集する前にバックアップを作成し、必要に応じて元の状態に戻せるようにしてください。
:::

## Palworld設定ファイルを開く

サーバーを最適化するには、Palworldのメイン設定ファイルを編集する必要があります。

1. ZAP-Hostingのコントロールパネルにログインします。
2. **Palworld**ゲームサーバー管理画面を開きます。
3. **Configs**に移動します。
4. `PalWorldSettings.ini`ファイルを開きます。



:::note 変更箇所について
パフォーマンス関連の設定は`PalWorldSettings.ini`に保存されています。このファイル内の既存のオプション値を手動で編集してください。
:::

## 関連設定の理解

Palworldのいくつかの設定はサーバーのパフォーマンスに直接影響します。CPU、メモリ、ワールドシミュレーションの負荷を減らすものや、非アクティブプレイヤーや過剰なワールドエンティティの蓄積を制限するものがあります。

### 主なパフォーマンス設定

混雑したサーバーでパフォーマンス低下を減らしたい場合、以下の設定が特に重要です。

| 設定 | デフォルト | 推奨変更 | 効果 |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | `0.1`以上に維持 | 放置された建造物の劣化を早めて削除を促進 |
| `bAutoResetGuildNoOnlinePlayers` | `False` | 適切なら`True`に設定 | 非アクティブなギルド拠点を設定期間後に削除 |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | 必要に応じて調整 | ギルドリセットまでの非アクティブ時間（時間単位） |
| `PalSpawnNumRate` | `1.0` | 減少させる | 野生のPalのスポーン数を減らしシミュレーション負荷軽減 |
| `DropItemMaxNum` | `3000` | 減少させる | ワールド内の落ちているアイテム数を制限 |
| `DropItemAliveMaxHours` | `1.0` | 減少させる | 落ちているアイテムの削除を早める |
| `BaseCampMaxNumInGuild` | `4` | 減少させる | ギルド内の拠点数を減らす |
| `ServerReplicatePawnCullDistance` | `15000.0` | 減少させる | Palの同期距離を短くしネットワーク・サーバー負荷を軽減 |
| `BaseCampWorkerMaxNum` | `15` | 減少させる | 拠点ごとのワーカーパル数を制限 |
| `MaxBuildingLimitNum` | `0` | 値を設定 | プレイヤーごとの建築物総数を制限 |
| `bEnableInvaderEnemy` | `True` | `False`に設定 | レイド型の侵入者敵を無効化し負荷を減らす |
| `bEnableFastTravel` | `True` | 必要なら`False`に設定 | ファストトラベルによるフリーズを軽減可能 |
| `bIsPvP` | `False` | 必要なければ`False`のまま | PvPは活発な環境でサーバー負荷を増加させる可能性あり |

### 二次的なパフォーマンス設定

特に大規模なパブリックサーバーで役立つ設定です。

| 設定 | デフォルト | 推奨変更 | 効果 |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | 減少させる | サーバー全体の拠点数上限を下げる |
| `AutoSaveSpan` | `240` | 増加させる | サーバーの自動セーブ頻度を減らす |

:::tip 保守的な変更から始めよう
一度に多くの値を変えず、少しずつ変更してサーバー挙動をテストするのがベストです。どの設定がパフォーマンス改善に効果的か、どの設定がゲームプレイに影響を与えすぎるかを見極めやすくなります。
:::

## 設定の編集

Palworldのサーバーオプションは`PalWorldSettings.ini`内の`OptionSettings`セクションにあります。該当する項目を手動で調整してください。

### 最適化例の設定

以下は保守的なパフォーマンス重視の設定例です。実際に使いたい値だけを置き換えてください。

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution 既存エントリの確認を忘れずに
Palworldの設定フォーマットはアップデートで変わることがあります。保存前に、ファイル内に既に存在する`OptionSettings`行を編集していることを確認し、重複や競合するエントリを作成しないようにしてください。
:::

### 推奨値の調整例

全行を置き換えたくない場合は、既存設定の該当値だけを編集してください。

| エントリ | 例の値 | 変更理由 |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | 野生Palのスポーン数を減らす |
| `DropItemMaxNum` | `2000` | アイテムの散乱を減らす |
| `DropItemAliveMaxHours` | `0.5` | 落ちているアイテムを早く消す |
| `BaseCampMaxNum` | `64` | 拠点の総数を減らす |
| `BaseCampMaxNumInGuild` | `3` | ギルドの拠点拡張を制限 |
| `BaseCampWorkerMaxNum` | `10` | AIワーカーの負荷を減らす |
| `ServerReplicatePawnCullDistance` | `10000.0` | 同期距離を短縮 |
| `bEnableInvaderEnemy` | `False` | レイド関連の負荷を無効化 |
| `bEnableFastTravel` | `False` | ファストトラベルによるフリーズ回避 |
| `bAutoResetGuildNoOnlinePlayers` | `True` | 非アクティブギルドの拠点を自動削除 |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | 非アクティブ猶予期間の設定 |
| `MaxBuildingLimitNum` | `[your_limit]` | 過剰な建築を制限 |
| `bIsPvP` | `False` | 追加のPvP負荷を防止 |
| `AutoSaveSpan` | `[your_value]` | 現行設定フォーマットで対応可能ならセーブ頻度を減らす |

:::danger 非アクティブギルドのリセットは拠点削除を伴う
`bAutoResetGuildNoOnlinePlayers=True`を有効にすると、`AutoResetGuildTimeNoOnlinePlayers`で設定した時間経過後に非アクティブなギルドが自動的に解散されます。これにより、非アクティブプレイヤーの拠点や建造物が永久に削除される可能性があります。
:::

## 変更を保存して適用する

ファイル編集後は設定を保存し、サーバーを再起動して新しい設定を反映させます。

1. `PalWorldSettings.ini`の変更を保存します。
2. ゲームサーバー管理画面に戻ります。
3. Palworldサーバーを再起動します。



:::info 再起動が必要です
`PalWorldSettings.ini`を変更した後は必ず再起動してください。再起動しないとサーバーは以前の設定を使い続けます。
:::

## 長期的なパフォーマンス維持のベストプラクティス

手動設定変更は効果的ですが、サーバー全体の最適化の一部に過ぎません。

### 自動デイリー再起動を活用する

Palworldサーバーでは、リソース使用量が時間とともに蓄積するため、毎日の再起動が一般的なベストプラクティスです。

- ZAP-Hostingのサーバー管理で自動再起動スケジュールを作成
- プレイヤー活動が少ない時間帯を選択
- 活発なコミュニティがいる場合は事前に告知する

### ワールドの成長を制限する

長時間稼働するPalworldサーバーでパフォーマンス低下の最大原因はワールドの複雑化です。

これを減らすには：

- 拠点数の上限を下げる
- ワーカー数を減らす
- 落ちているアイテムの蓄積を減らす
- 野生Palのスポーンを減らす
- 非アクティブギルドを慎重にクリーンアップ
- `MaxBuildingLimitNum`で建築制限を検討

### 変更は段階的にテストする

サーバーがすでに不安定でない限り、極端な値の削減は避けてください。

おすすめの手順は：

1. まずスポーン数とアイテム数を減らす
2. 次に拠点数とワーカー数を減らす
3. 必要に応じて高負荷機能を無効化
4. 各変更後に再起動してパフォーマンスを監視

:::tip パフォーマンスとゲームプレイのバランスを取る
最適な設定はサーバーの種類によって異なります。小規模なプライベートサーバーは高めの値を維持しやすいですが、大規模なパブリックサーバーはパフォーマンス低下を防ぐために厳しい制限が必要になることが多いです。
:::

## Conclusion

おめでとうございます。Palworldゲームサーバーのパフォーマンス最適化に成功しました。ご質問やサポートが必要な場合は、毎日対応可能なサポートチームまでお気軽にお問い合わせください！🙂