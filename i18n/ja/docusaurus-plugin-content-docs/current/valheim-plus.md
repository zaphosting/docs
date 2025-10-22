---
id: valheim-plus
title: "Valheim: Valheim Plus サーバー"
description: "Valheim PlusでValheimのゲームプレイを強化し、機能アップやサーバーのアップグレードを実現 → 今すぐ詳しくチェック"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

:::info
Valheim Plusはクライアント側のMODです。基本ゲームに変更を加えることができます。
:::

<InlineVoucher />

## Valheim Plus クライアントのインストール

まずPCのValheimフォルダを開きます。  
SteamライブラリのValheimを右クリックし、オプションから「***管理***」を選択し、「***ローカルファイルを閲覧***」をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

フォルダが開いたら、「***WindowsClient.zip***」をダウンロードします。  
「***WindowsClient.zip***」は[こちら](https://github.com/valheimPlus/ValheimPlus/releases)（「Assets」セクション）からダウンロード可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

次に、「***WindowsClient.zip***」の中身を先ほど開いたValheimサーバーフォルダに解凍します。

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

これでValheimを起動すれば、クライアント側のセットアップは完了です。

## Valheim Plus サーバーのインストール

ゲームサーバーのタブを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

「利用可能なゲーム」からValheim Plusを探し、ダウンロードボタンをクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

サーバーが再インストールされます。再インストール完了後、「**Configs**」でパスワードを削除でき、スロット数のアップグレードも可能になります。

## スロットアップグレード

スロットアップグレードを行うには、ゲームサーバーのダッシュボードにある「**UP and Downgrade**」機能を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

UP and Downgradeページで希望のスロット数を選択してください。

:::info
ここでは「**差額分**」のみ支払います。残りの契約期間に応じて計算されます。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

ページ下部で支払い方法を選択し、「***アップグレードを実行***」ボタンを押すとアップグレードが完了します。

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Valheim Plus 設定

設定ファイルを開くには、ゲームサーバーのインターフェース内の「**Configs**」ページを開き、「*ValheimPlus: valheim_plus.cfg*」を探します。  
設定ファイルの横にある青いアイコンから開けます。

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

設定ファイルで使えるコマンド一覧：

### [Player]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | プレイヤー関連の変更を有効/無効にする |
| baseMegingjordBuff | 150 (float) | 持ち運び重量を150増加 |
| baseMaximumWeight | 300 (float) | 最大重量を300に設定 |
| baseAutoPickUpRange | 2 (float) | アイテム自動取得範囲を2に設定 |
| disableCameraShake | true / false | カメラの揺れを有効/無効にする |
| experienceGainedNotifications | true / false | 左上に獲得経験値の表示を有効/無効にする |

### [Food]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 食べ物関連の変更を有効/無効にする |
| foodDuration | 0-100% | 食べ物の効果持続時間を設定した割合で変更 |

### [Fermenter]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 発酵器の変更を有効/無効にする |
| fermenterDuration | 2400 (float) = ゲーム内48時間 | 発酵器の生産時間を設定。値が小さいほど生産が速い |
| fermenterItemsProduced | 6 (整数) | 発酵器で生産可能なアイテム数を設定 |

### [Furnace]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 炉の変更を有効/無効にする |
| maximumOre | 10 (整数) | 炉に入れられる最大鉱石数を設定 |
| maximumCoal | 20 (整数) | 炉に入れられる最大石炭数を設定 |
| productionSpeed | 30 (float) | 炉の生産時間を設定。値が小さいほど生産が速い |
| coalUsedPerProduct | 2 (整数) | 1製品あたりに使う石炭の数を設定 |

### [Kiln]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 窯の変更を有効/無効にする |
| productionSpeed | 15 (float) | 窯の生産時間を設定。値が小さいほど生産が速い |
| maximumWood | 25 (整数) | 窯に入れられる最大木材数を設定 |

### [Items]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | アイテム関連の変更を有効/無効にする |
| noTeleportPrevention | true / false | テレポートの使用を防止 |
| baseItemWeight | 0 (float) | アイテムの重量を設定。-50%で軽く、+50%で重くなる |
| itemStackMultiplier | 0 (float) | アイテムの最大スタック数を設定。正の値のみ。50=最大スタック数が50%増加。*注意* 減らすと超過分は削除される |

### [Building]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 建築関連の変更を有効/無効にする |
| noInvalidPlacementRestriction | true / false | 「無効な設置」制限を解除 |
| noWeatherDamage | true / false | 雨などの天候による建築物のダメージを無効化 |
| maximumPlacementDistance | 5 (float) | 最大設置距離を設定 |

### [Beehive]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ミツバチの巣関連の変更を有効/無効にする |
| maximumHoneyPerBeehive | 4 (整数) | ミツバチの巣から得られる最大ハチミツ量を設定 |
| honeyProductionSpeed | 1200 (float) = ゲーム内24時間 | ハチミツの生産時間を設定。値が小さいほど生産が速い |

### [Server]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | サーバー関連の変更を有効/無効にする |
| maxPlayers | 10 (整数) | スロット数を設定。UP/Downgradeで注文した値に合わせて設定される |
| disableServerPassword | true / false | サーバーパスワードを無効化 |
| enforceConfiguration | true / false | 有効にすると同じ設定のプレイヤーのみ参加可能 |
| enforceMod | true / false | 有効にすると同じMODを使っているプレイヤーのみ参加可能 |

### [Map]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | マップ関連の変更を有効/無効にする |
| exploreRadius | 100 (float) | プレイヤー周囲のマップ開放半径を設定 |
| shareMapProgression | true / false | 有効にするとマップの開放状況が全プレイヤーで共有される（見えているプレイヤーのみ貢献） |

### [Hotkeys]

操作可能なキー一覧は[こちら](https://docs.unity3d.com/ScriptReference/KeyCode.html)を参照。

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | 前方に回転 |
| rollBackwards | F10 | 後方に回転 |
| enterAdvancedBuildingMode | F1 | オブジェクトを固定し、高度な操作を可能にする |
| exitAdvancedBuildingMode | F3 | 高度な操作モードを終了し、オブジェクトの固定を解除 |
| enterAdvancedEditingMode | Keypad0 | 見ているオブジェクトを選択しAEMで編集 |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | 選択・編集したオブジェクトの変更を確定 |
| resetAdvancedEditingMode | F7 | 選択したオブジェクトの位置と回転をリセット |
| abortAndExitAdvancedEditingMode | F8 | 選択したオブジェクトの位置と回転をリセットし、AEMモードを終了 |

### [AdvancedBuildingMode]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 高度な建築モードの変更を有効/無効にする |

### [AdvancedEditingMode]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 高度な編集モードの変更を有効/無効にする |

### [Stamina]

| コマンド | 値 | 機能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | スタミナ関連の変更を有効/無効にする |
| dodgeStaminaUsage | 10 (float) | 回避時のスタミナ消費量を設定 |
| encumberedStaminaDrain | 10 (float) | 重量負荷時のスタミナ消費量を設定 |
| sneakStaminaDrain | 5 (float) | スニーク時のスタミナ消費量を設定 |
| runStaminaDrain | 10 (float) | 走行時のスタミナ消費量を設定 |
| staminaRainDelay | 1 (float) | スタミナ回復の遅延時間を設定 |
| staminaRain | 5 (float) | 回復するスタミナ量を設定 |
| swimStaminaDrain | 5 (float) | 水泳時のスタミナ消費量を設定 |
| jumpStaminaUsage | 10 (float) | ジャンプ時のスタミナ消費量を設定 |


<InlineVoucher />