---
id: abioticfactor-configuration
title: "Abiotic Factor：サーバー設定"
description: "Abiotic Factorのゲームサーバー設定をカスタマイズして、ゲーム体験とサーバー性能を最適化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: サーバー設定
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Abiotic Factorのゲームサーバーは、多彩な設定パラメーターを自由にカスタマイズできます。このガイドでは、現在利用可能な設定パラメーターをすべて紹介し、それぞれの詳細をわかりやすく解説します。

<InlineVoucher />

## 設定ファイルへのアクセス方法

まずは設定ファイルにアクセスして、パラメーターを編集できるようにしましょう。設定ファイルの編集方法は複数あります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webインターフェースから" default>

#### Webインターフェースから

一番簡単で使いやすい方法は、ゲームサーバーのWebインターフェースの**設定**セクションにアクセスし、そこで該当の設定を探すことです。以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="WI設定ファイルから">

#### WI設定ファイルから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

また、直接ファイルを編集したい場合は、ゲームサーバーのWebインターフェースの**Configs**セクションに移動し、青い「ファイル編集」ボタンを押すと以下のようにテキストエディタが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

このエディタ上で直接編集が可能です。

</TabItem>

<TabItem value="ftp" label="FTPから">

#### FTPから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

最後の方法はFTP経由でのアクセスです。FTPの使い方に慣れていない場合は、[FTPアクセスガイド](gameserver-ftpaccess.md)を参考にしてください。ただし、この方法は時間がかかるため、ファイル内容を直接編集したい場合は、前述のWebインターフェースの**Configs**セクションを使うことをおすすめします。

</TabItem>
</Tabs>

## サーバー設定オプション

以下のセクションでは、Abiotic Factorの専用サーバーで利用可能な多彩な設定オプションについて、表形式でわかりやすくまとめています。

### 重要なサーバー設定

これらの設定は、ゲームサーバーのWebインターフェースの**設定**セクションからのみ変更可能です。

| パラメーター名     | 例                       | 説明                                      |
| ------------------ | ------------------------ | ----------------------------------------- | 
| Server Name        | ZAP-Hosting Docs Test    | サーバーの名前を設定                      |
| Password           | iLoveZAP!2024            | サーバーのパスワードを設定。空欄でパスなし |

変更を終えたら、必ず保存してサーバーを再起動してください。次回起動時から設定が反映されます。

### ゲームプレイ設定

Abiotic Factorには「Sandbox Settings」と呼ばれる多彩なゲームプレイ設定があります。FTPでサーバーにアクセスすると、メインの`world`フォルダ内に**SandboxSettings.ini**というファイルがあるはずです。

もし見当たらない場合は、ローカルでこのファイルを作成し、以下の内容をコピーしてください：[Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini)。

編集が終わったら、このファイルをFTPで以下のパスにアップロードしてください：
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

以下の表は、**SandboxSettings.ini**ファイル内の主要なゲームプレイ設定の一部をまとめたものです。すべての設定を確認したい場合は、[公式GitHubページ](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini)を参照してください。

| パラメーター名               | 例         | 説明                                                         |
| ---------------------------- | ---------- | ------------------------------------------------------------ | 
| LootRespawnEnabled           | true/false | マップ上にアイテムが再出現するかどうかを切り替え             |
| PowerSocketsOffAtNight       | true/false | 夜間に電源をオフにするかどうかを切り替え                     |
| DayNightCycleSpeedMultiplier | 1.0        | 昼夜サイクルの速度倍率を設定                                 |
| EnemySpawnRate               | 1.0        | 敵の出現頻度を設定                                           |
| EnemyHealthMultiplier        | 1.0        | 敵の体力倍率を設定                                           |
| EnemyPlayerDamageMultiplier  | 1.0        | 敵がプレイヤーに与えるダメージ倍率を設定                     |
| DetectionSpeedMultiplier     | 1.0        | 敵がプレイヤーを発見する速度の倍率を設定                     |
| PlayerXPGainMultiplier       | 1.0        | プレイヤーが獲得する経験値の倍率を設定                       |
| ItemStackSizeMultiplier      | 1.0        | インベントリ内でのアイテムのスタック数倍率を設定             |
| ItemDurabilityMultiplier     | 1.0        | アイテムの耐久度倍率を設定                                   |
| ShowDeathMessages            | true/false | エンティティの死亡メッセージをプレイヤーに表示するかどうかを切り替え |
| AllowRecipeSharing           | true/false | アイテムレシピの共有を許可するかどうかを切り替え             |

変更を終えたら、必ず保存してサーバーを再起動してください。次回起動時から設定が反映されます。

<InlineVoucher />