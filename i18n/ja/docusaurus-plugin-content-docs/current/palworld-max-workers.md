---
id: palworld-max-workers
title: "Palworld: 最大ワーカー数"
description: "BaseCampWorkerMaxNumを編集してPalworldの最大ワーカー数設定を変更する方法を学びます。デフォルトの最大値やバニラの安全な制限も含みます。 -> 今すぐ詳しく学ぶ"
sidebar_label: "最大ワーカー数"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldでは、サーバー上の各ベースキャンプに割り当てられる最大ワーカー数を変更できます。このガイドでは、ZAP-Hostingのゲームサーバーのコントロールパネルで正しい設定ファイルを編集し、`BaseCampWorkerMaxNum`の値を調整して変更を適用する方法を説明します。



## Preparation

始める前に、ZAP-Hostingのゲームサーバー管理パネルからPalworldゲームサーバーにアクセスできることを確認してください。

:::info 設定アクセスの必要条件
サーバーのウェブ管理にアクセスし、**Configs**セクションを開いてPalworldの設定ファイルを手動で編集できる必要があります。
:::

## 最大ワーカー数設定の理解

Palworldで最大ワーカー数を制御する設定は`BaseCampWorkerMaxNum`です。このオプションは、各ベースキャンプで働けるPalの最大数を決定します。

| 設定 | 設定ファイル | 目的 | デフォルト値 | バニラ最大値 |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | 各ベースキャンプの最大ワーカーPal数を設定 | `15` | `50` |

:::note バニラ制限について
現在の公開ドキュメントによると、ゲーム内の通常の最大値は`50`です。`50`を超える値は通常モッドが必要で、標準のバニラサーバー設定には含まれません。
:::

:::caution パフォーマンスへの影響
ワーカー数を増やすと、より多くのPalがベースで活動するためCPUとメモリの使用量が増加します。高い値を設定した場合は、変更後にサーバーのパフォーマンスを監視してください。
:::

## Palworld設定ファイルを開く

最大ワーカー数を変更するには、`PalWorldSettings.ini`ファイルを編集する必要があります。

### ZAP-Hostingインターフェースでファイルを探す

Palworldゲームサーバー管理画面を開き、以下の順に進みます：

- `Configs`
- `PalWorldSettings.ini`

ここがPalworldサーバーのゲームプレイ設定が保存されている設定ファイルです。



## BaseCampWorkerMaxNumの値を編集する

`PalWorldSettings.ini`を開いたら、`OptionSettings`の行を探します。Palworldのサーバー設定は通常、このセクション内のカンマ区切りのキーと値のペアで保存されています。

### 設定エントリを変更する

以下のキーを探してください：

```ini
BaseCampWorkerMaxNum=15
```

値を希望の数に変更します。例えば、各ベースに`20`人のワーカーPalを許可する場合は：

```ini
BaseCampWorkerMaxNum=20
```

### 設定例

現在のファイルによって異なりますが、設定は通常以下のような長い`OptionSettings`エントリ内にあります：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip 必要な値だけを編集する
他のゲームプレイ設定を変更する意図がない限り、`BaseCampWorkerMaxNum`だけを変更してください。誤設定を防ぐために重要です。
:::

## 推奨値

ゲームプレイスタイルに合わせて好きな値を選べますが、バニラのサポート範囲内に収めてください。

| 値 | 結果 | 推奨 |
| --- | --- | --- |
| `15` | デフォルトのPalworldワーカー制限 | 標準的なゲームプレイに最適 |
| `20`〜`30` | ベースの自動化が増加 | 多くのプライベートサーバーに適したバランス |
| `40`〜`50` | 非常に多いワーカー数 | サーバーに十分なリソースがある場合のみ使用 |
| `50`超 | 標準のバニラ動作ではない | 通常モッドが必要で、テストなしの使用は推奨しません |

## 変更を保存して適用する

値を編集したら、ZAP-Hostingの設定エディターで`PalWorldSettings.ini`ファイルを保存します。

### サーバーを再起動する

ファイルを保存したら、Palworldサーバーを再起動して新しい最大ワーカー数設定を反映させます。

:::info 再起動が必要
`PalWorldSettings.ini`の変更はサーバー稼働中には即時反映されません。保存後にサーバーを再起動してください。
:::

## 新しいワーカー制限を確認する

サーバー再起動後、Palworldサーバーに接続してベースキャンプの1つを確認してください。設定した新しい制限までワーカーPalを割り当てられるはずです。

変更が反映されない場合は、以下を確認してください：

| チェック項目 | 確認内容 |
| --- | --- |
| 正しいファイル | `PalWorldSettings.ini`を編集したか |
| 正しいキー | `BaseCampWorkerMaxNum`が存在し、正しく綴られているか |
| 有効な構文 | `OptionSettings`行の書式が壊れていないか |
| 再起動完了 | 保存後にサーバーを完全に再起動したか |
| 値の範囲 | 値がバニラの通常最大値`50`以内か |

:::caution 設定構文の注意
Palworldの設定エントリは書式に敏感です。カンマや括弧などを誤って削除すると、設定が無視されたり正しく読み込まれなくなったりします。
:::

## Conclusion

おめでとうございます。Palworldサーバーの各ベースキャンプに割り当てる最大ワーカー数の変更に成功しました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂