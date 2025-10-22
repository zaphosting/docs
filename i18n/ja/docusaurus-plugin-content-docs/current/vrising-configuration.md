---
id: vrising-configuration
title: "V Rising: サーバー設定"
description: "V Risingのゲームサーバー設定を最適化してカスタマイズする方法をチェックして、サーバー環境を自由にコントロールしよう → 今すぐ詳しく見る"
sidebar_label: サーバー設定
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

V Risingのゲームサーバーは、多彩な設定パラメータを自由にカスタマイズできます。このガイドでは、現在利用可能なすべての設定パラメータを紹介し、それぞれの詳細をわかりやすく解説します。

<InlineVoucher />

## 設定ファイルへのアクセス方法

まずは設定ファイルにアクセスして、パラメータを編集できるようにしましょう。編集方法はいくつかあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webインターフェースから" default>

#### Webインターフェースから

一番簡単で使いやすい方法は、ゲームサーバーのWebインターフェースの**設定**セクションにアクセスし、該当の設定を探して編集することです。以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="WI設定ファイルから">

#### WI設定ファイルから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

また、直接ファイルを編集したい場合は、ゲームサーバーのWebインターフェースの**Configs**セクションに行き、青い「ファイル編集」ボタンを押すと以下のようにテキストエディタが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

これでサイト上で直接編集が可能です。

</TabItem>

<TabItem value="ftp" label="FTPから">

#### FTPから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

最後の方法はFTP経由でファイルにアクセスすることです。FTPの使い方に慣れていない場合は、[FTPアクセスガイド](gameserver-ftpaccess.md)をチェックするのがおすすめです。ただし、この方法は時間がかかるので、直接ファイルを編集したいならWebインターフェースの**Configs**セクションを使うのが手軽です。

</TabItem>
</Tabs>

## サーバー設定オプション

以下のセクションでは、実際のゲームサーバー設定とゲームプレイ設定の両方に関する設定オプションを表形式でまとめています。

:::tip
ポート設定の変更はおすすめしません。これらはゲームサーバーが自動で設定しているため、変更するとゲームサーバーが正常に動作しなくなる可能性があります！
:::

### 重要なサーバー設定

ここでは、**ServerHostSettings.json** 設定ファイルにある最重要サーバー設定をまとめています。全設定オプションの詳細は、[公式GitHubガイド](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md)を参照してください。

| パラメータ名         | 例                         | 説明                                                                 |
| -------------------- | -------------------------- | -------------------------------------------------------------------- | 
| Name                 | ZAP-Hosting Docs Test      | サーバーの名前を設定                                                 |
| Description          | ZAP is the best!           | サーバーの説明を設定                                                 |
| Port                 | 9876 (デフォルト)          | ゲームで使用するネットワークポートを設定                             |
| QueryPort            | 9877 (デフォルト)          | サーバーリストに情報を返すクエリーポートを設定                      |
| MaxConnectedUsers    | 10                         | 同時接続可能な最大プレイヤー数を設定                                |
| MaxConnectedAdmins   | 4                          | 満員のサーバーでも参加可能な管理者数を設定                          |
| ServerFps            | 30 (推奨デフォルト)        | サーバーのフレームレートを設定。基本はデフォルトのままがおすすめ    |
| SaveName             | ZAPDocsTest                | ワールドセーブの名前を設定                                          |
| Password             | iLoveZAP!2024              | サーバーのパスワードを設定。空欄にするとパスワードなしになる        |
| ListOnMasterServer   | true/false                 | サーバーリストに表示するかどうかを切り替え                          |
| AutoSaveCount        | 15                         | 保存しておく古いセーブの数を決定                                    |
| AutoSaveInterval     | 600                        | 自動セーブの間隔を秒単位で設定                                      |
| RCON Enabled         | true/false                 | RCONの有効/無効を切り替え                                           |
| RCON Port            | 25575                      | RCONのポートを設定                                                  |
| RCON Password        | iLoveZAP!2024              | RCON接続用のパスワードを設定                                        |

変更を終えたら、必ずファイルを保存してサーバーを再起動してください。次回起動時から設定が反映されます。

### 重要なゲームプレイ設定

V Risingにはゲームプレイを調整できる多くのパラメータがあります。ここでは、**ServerGameSettings.json** 設定ファイルにある最重要設定をまとめています。

| パラメータ名               | 例                           | 説明                                                                                      |
| -------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------- | 
| GameDifficulty             | Normal                       | ワールドのゲーム難易度を設定                                                             |
| GameModeType               | PvP, PvE                     | ワールドのゲームモードタイプを設定                                                       |
| CastleDamageMode           | Always, Never, TimeRestricted| 城のダメージを受けるタイミングを設定。TimeRestrictedの場合はVSCastleパラメータで時間指定  |
| PlayerDamageMode           | Always, TimeRestricted       | 他プレイヤーへのダメージを受けるか設定。TimeRestrictedの場合はVSPlayerパラメータで時間指定 |
| PvPProtectionMode          | Short, Medium, Long          | 新規プレイヤーの無敵時間を設定                                                           |
| DeathContainerPermission   | Anyone, ClanMembers          | プレイヤー死亡時にドロップしたアイテムを誰が略奪できるか設定                             |
| CanLootEnemyContainers     | true/false                   | クラン外の他プレイヤーのチェストを略奪できるか設定                                       |
| BloodBoundEquipment        | true/false                   | 死亡後に装備を保持するか設定                                                             |
| TeleportBoundItems         | true/false                   | 吸血鬼のワープゲートでテレポートを妨げるアイテムの有無を設定                             |
| AllowGlobalChat            | true/false                   | グローバルチャットの使用を切り替え                                                       |

変更を終えたら、必ずファイルを保存してサーバーを再起動してください。次回起動時から設定が反映されます。

<InlineVoucher />