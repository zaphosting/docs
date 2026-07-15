---
id: palworld-faster-egg-hatching
title: "Palworld: 卵の孵化時間短縮"
description: "Palworldの卵の孵化時間を短縮する方法を、Palworldゲームサーバーの設定ファイルを編集して孵化時間を速くする手順で解説します。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: 卵の孵化時間短縮
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、卵の孵化時間はサーバー設定値で管理されています。このガイドでは、ZAP-HostingのPalworldゲームサーバーで正しい設定ファイルを編集し、孵化時間を短縮する方法を学びます。



## 準備

開始する前に、以下を確認してください：

- ZAP-Hostingのゲームサーバーのウェブインターフェースにアクセスできること
- Palworldサーバーがゲームサーバー管理画面に表示されていること
- **Configs** セクションでファイルを編集できること

:::info 設定ファイルへのアクセス
ZAP-HostingのPalworldでは、関連するサーバー設定はゲームサーバー管理の **Configs** から編集可能です。この作業では `PalWorldSettings.ini` ファイルを修正します。
:::

## 卵の孵化設定について理解する

Palworldは `PalEggDefaultHatchingTime` という設定で、卵の基本孵化時間（時間単位）を定義しています。値が小さいほど孵化が速くなります。

現在のPalworldサーバー設定の参考値では、デフォルトは `72` で、これは巨大な卵の孵化時間72時間を意味します。他の卵の種類もこの基本値からスケールします。

| 設定キー | デフォルト値 | 説明 |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | 基本の卵孵化時間（時間単位） |

:::note 設定の動作について
この値はサーバー全体の卵孵化プロセスに影響します。値を下げると、インキュベーターを使う全プレイヤーの孵化が速くなります。
:::

## Palworld設定ファイルを開く

まず、ZAP-Hostingのインターフェースで正しい設定ファイルにアクセスします。

### Configsセクションへ移動

Palworldゲームサーバー管理画面を開き、**Configs** セクションに移動します。そこで以下のファイルを探して開いてください：

```ini
PalWorldSettings.ini
```

このファイルには、Palworldサーバーのゲームプレイ設定が含まれており、卵の孵化時間設定もここにあります。



## 卵の孵化時間を編集する

`PalWorldSettings.ini` を開いたら、`OptionSettings` 行を探します。Palworldは多くのゲームプレイ設定をこのセクション内に保存しています。

### 対象の設定キーを変更する

以下のエントリを見つけてください：

```ini
PalEggDefaultHatchingTime=72.000000
```

値を小さくすることで卵の孵化を速くできます。

例：

```ini
PalEggDefaultHatchingTime=24.000000
```

これは基本の孵化時間を72時間から24時間に短縮する設定です。

### 例示値

孵化速度の好みに応じて、以下のような値を使えます。

| 値 | 結果 |
| --- | --- |
| `72.000000` | デフォルトの孵化時間 |
| `48.000000` | やや遅めの短縮、バランスの良いゲームプレイ |
| `24.000000` | かなり速い孵化 |
| `12.000000` | 非常に速い孵化 |
| `1.000000` | 極端に速い孵化 |

:::caution 現実的な値を使うこと
極端に低い値はゲームバランスを大きく崩す可能性があります。自然な進行を望む場合は、`24.000000` や `48.000000` のような中程度の値から始めることをおすすめします。
:::

### 設定例スニペット

現在の設定によっては、`OptionSettings` ブロック内にこの設定が含まれています。典型的な例は以下のようになります：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip 正しいエントリを編集する
`PalEggDefaultHatchingTime` キーが既に存在する場合は、新たに追加せず既存の値を編集してください。同じ `OptionSettings` ブロック内に重複した値があると、設定が無視されたり上書きされたりする可能性があります。
:::

## 変更を保存して適用する

値を編集したら、ZAP-Hostingのインターフェースで `PalWorldSettings.ini` ファイルを保存します。

### サーバーを再起動する

ファイル保存後、Palworldサーバーを再起動して新しい孵化時間設定を反映させます。

:::info 再起動が必要
設定変更はサーバー再起動後にのみ適用されます。
:::

## 既存の卵に関する重要な挙動

すでに孵化中の卵には、新しい孵化時間設定が確実に反映されません。実際には、影響を受ける卵の孵化プロセスを一旦解除して再スタートする必要があります。

| 状況 | 必要な対応 |
| --- | --- |
| 変更後に新たに置かれた卵 | 再起動後は追加対応不要 |
| 変更前から孵化中の卵 | その卵の孵化を再スタートする必要あり |

:::note 既存の孵化タイマーについて
孵化時間を変更しても期待通りの結果が得られない場合は、卵が設定変更前から孵化中でないか確認してください。
:::

## まとめ

Palworldサーバーで卵の孵化時間を短縮することに成功しました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂