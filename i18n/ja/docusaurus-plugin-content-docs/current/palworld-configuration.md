---
id: palworld-configuration
title: "Palworld: Palworld サーバー設定"
description: "Palworldのサーバー設定をカスタマイズして、あなただけのゲーム体験を作り上げよう → 今すぐ詳しくチェック"
sidebar_label: サーバー設定
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Palworldのゲームサーバーは、多彩な設定パラメータを自由にカスタマイズできます。このガイドでは、現在利用可能なすべての設定パラメータを詳しく解説していきます。
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="たった1分でPalworldサーバーをセットアップ！" description="実際に動いているところを見ると理解しやすい？そんなあなたにピッタリ！忙しい時も、楽しく情報を吸収したい時も、この動画で全部わかっちゃいます！"/>

<InlineVoucher />

## 設定ファイルへのアクセス方法

まずは設定ファイルにアクセスして、パラメータを編集できるようにしましょう。編集方法はいくつかあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webインターフェースから" default>

#### Webインターフェースから

一番簡単なのは、ゲームサーバーのWebインターフェースの**設定**セクションに行き、該当する設定を探す方法です。以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="WIの設定ファイルから">

#### WIの設定ファイルから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると変更が元に戻ってしまいます。
:::

また、直接ファイルを編集したい場合は、ゲームサーバーのWebインターフェースの**Configs**セクションに行き、青い「ファイル編集」ボタンを押してください。以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

これでサイト上で直接テキストエディタが開き、編集が可能です。

</TabItem>

<TabItem value="ftp" label="FTPから">


#### FTPから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると変更が元に戻ってしまいます。
:::

最後の方法はFTP経由でのアクセスです。FTPの使い方に慣れていない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドをチェックすることをおすすめします。ただし、この方法は時間がかかるため、ファイルの直接編集にはWebインターフェースの**Configs**セクションを使うのが手軽です。

</TabItem>
</Tabs>

## サーバー設定オプション

### クロスプレイ対応を有効化

Palworldの専用サーバーは複数プラットフォーム対応でクロスプレイが可能です。デフォルトはSteamプラットフォームに設定されています。Xbox、PS5、Macのサポートを有効にしたい場合は、ゲームサーバー管理画面の設定から変更できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
SteamとMicrosoft Store/Xbox版のクロスプレイはまだ対応していません。サーバーはSteam用かMicrosoft Store/Xbox用のどちらか一方に設定する必要があります。
:::

:::info
XboxコンソールではIPアドレスで直接接続できないため、Xboxでプレイする場合は専用サーバーを公開設定にしてください。

また、見つけやすいサーバー名を設定することも重要です。設定方法は[サーバー設定](palworld-configuration.md)ガイドを参照してください。
:::

### 重要なサーバー設定

サーバーのリスト表示をカスタマイズしたり、パスワードで保護したりするための基本的な設定です。

:::tip
ポートやIP設定の変更はおすすめしません。これらはゲームサーバーが自動で設定しているため、変更するとサーバーが正常に動作しなくなる可能性があります！
:::

| パラメータ名                 | 例                                     | 説明                                                     |
| ------------------------------ | --------------------------------------- | --------------------------------------------------------- | 
| ServerPlayerMaxNum             | 4                                       | サーバーに参加可能な最大プレイヤー数（最大32）           |
| ServerName                     | ZAP-Hosting Docs Test                   | サーバー名                                               |
| ServerDescription              | This is a server that we are testing on | サーバーの説明                                           |
| AdminPassword                  | ctRQvhPAWVHq                            | 管理者コマンド用の管理パスワード                         |
| ServerPassword                 | iLoveZAP!2024                           | サーバーをパスワードでロック（プライベート設定）          |
| PublicPort                     | 8211 (デフォルト)                       | サーバーが使用する公開ポート                             |
| PublicIP                       | 123.123.123.123                         | サーバーが使用する公開IPアドレス                         |
| RCONEnabled                    | true                                    | RCONの使用を有効化                                       |
| RCONPort                       | 8222                                    | RCONで使用するポート番号                                 |

変更を終えたら、必ずファイルを保存してサーバーを再起動してください。次回起動時から設定が反映されます。

### ゲームプレイ設定

ゲームプレイや進行、マップやワールドの設定を変更するためのオプションです。

| パラメータ名                     | 説明                                              | 
| ---------------------------------- | ------------------------------------------------ | 
| DayTimeSpeedRate                   | 昼間の時間の進み具合を設定                        |
| NightTimeSpeedRate                 | 夜間の時間の進み具合を設定                        |
| ExpRate                            | 経験値（XP）の獲得倍率を設定                      |
| PalCaptureRate                     | Palの捕獲率を設定                                 |
| PalSpawnNumRate                    | Palの出現率を設定                                 |
| PalDamageRateAttack                | Palからの攻撃ダメージ倍率                         |
| PalDamageRateDefense               | Palへの防御ダメージ倍率                           |
| PlayerDamageRateAttack             | プレイヤーからの攻撃ダメージ倍率                   |
| PlayerDamageRateDefense            | プレイヤーへの防御ダメージ倍率                     |
| PlayerStomachDecreaceRate          | プレイヤーの空腹減少速度                           |
| PlayerStaminaDecreaceRate          | プレイヤーのスタミナ減少速度                       |
| PlayerAutoHPRegeneRate             | プレイヤーの自動HP回復速度                         |
| PlayerAutoHpRegeneRateInSleep      | プレイヤーの睡眠時HP回復速度                       |
| PalStomachDecreaceRate             | Palの空腹減少速度                                 |
| PalStaminaDecreaceRate             | Palのスタミナ減少速度                             |
| PalAutoHPRegeneRate                | Palの自動HP回復速度                               |
| PalAutoHpRegeneRateInSleep         | Palの睡眠時HP回復速度（Palbox内）                  |
| BuildObjectDamageRate              | 建造物へのダメージ倍率                             |
| BuildObjectDeteriorationDamageRate | 建造物の劣化速度                                   |
| CollectionDropRate                 | 収集アイテムのドロップ倍率                         |
| CollectionObjectHpRate             | 収集可能オブジェクトのHP倍率                       |
| CollectionObjectRespawnSpeedRate   | 収集可能オブジェクトのリスポーン速度               |
| EnemyDropItemRate                  | 敵のドロップアイテム倍率                           |
| DeathPenalty                       | 死亡ペナルティ（なし/アイテム）                    |
| GuildPlayerMaxNum                  | ギルドの最大プレイヤー数                           |
| PalEggDefaultHatchingTime          | 大型卵の孵化時間（時間単位）                       |

変更を終えたら、必ずファイルを保存してサーバーを再起動してください。次回起動時から設定が反映されます。

<InlineVoucher />