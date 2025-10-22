---
id: rust-commands
title: "Rust: 管理者コマンド"
description: "ゲームプレイと管理を最適化するためのサーバー管理＆プレイヤーコントロールに必須のRustコマンドをチェック → 今すぐ詳しく見る"
sidebar_label: 管理者コマンド
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Rustにはサーバーオーナーやプレイヤーが使える多彩なコマンドがあります。このページでは、サーバー設定、プレイヤー管理、プレイヤーコントロールに使われる最も便利で人気のあるコマンドをまとめています。

:::info
一部のコマンドはプレイヤーのSteam64 IDの使用が必要です。下の簡単なチュートリアルでSteam IDの取得方法をチェックしましょう。
:::

<InlineVoucher />

## Steam IDの取得方法
まずは[Steam ID Finder](https://steamidfinder.com/)のようなツールを使ってSteam64 IDを取得します。

ここにSteamのURLを入力：

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

次に「Find Steam ID」を押します。Steamプロフィールが表示されるので、「Steam64ID (Dec)」をコピーしましょう。

これでSteam64 IDが手に入り、下記のSteam64 IDが必要なコマンドで使えます。

## コマンドカテゴリ

下のタブでカテゴリを切り替えられます。表にはコマンド、受け付ける値（あれば）、説明が載っていて分かりやすくなっています。

:::info
このページで紹介しているコマンドはすべてバニラRust用です。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="サーバー設定" default>

| コマンド構文                  | 受け付ける値 | 説明 | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | trueにするとチャットメッセージが全プレイヤーに表示される         | 
| server.stop      | -          | サーバーを停止する         | 
| server.save      | -          | サーバーを保存する         | 
| server.saveinterval "value"      | 整数 (デフォルト60)          | サーバーの自動保存間隔を秒単位で設定         | 
| server.secure      | true/false          | trueにするとEasy Anti Cheat (EAC)が未登録またはBANされたプレイヤーの接続を拒否         | 
| server.seed "value"     | 整数 (例: 123456)          | サーバーワールドのシード値を設定         | 
| server.stability      | true/false          | trueにすると建物の構造安定性が有効になる         | 
| server.tickrate "rate"      | 整数 (デフォルト30)          | サーバーのティックレートを設定         | 
| server.writecfg      | -          | 他のサーバーコマンドで設定した構成変更を保存         | 
| chat.serverlog      | true/false          | trueにするとチャットが常にサーバーコンソールにログされる         | 
| commands.echo "text"      | 文字列 (例: "Hello World!")          | 指定したメッセージをサーバーコンソールに表示         | 
| global.say "message"      | 文字列 (例: "Welcome!")          | サーバー内の全プレイヤーにメッセージを送信         | 
| env.time      | 整数 (例: 16)          | ゲーム内の時間を指定した時間（時間単位）に設定         | 
| server.events      | -          | trueにするとエアドロップなどのサーバーイベントを有効化         | 
| commands.find "command"      | 文字列 (例: "quit")          | コマンドを検索、"."を使うと利用可能な全コマンドを一覧表示         | 
| global.quit      | -          | サーバーを保存して停止         | 
| global.init      | -          | 設定ファイルを読み込む         | 

</TabItem>
<TabItem value="PlayerAdmin" label="プレイヤー管理">

| コマンド構文                  | 受け付ける値 | 説明 | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | 文字列 (例: "Jacob"), 文字列 (例: "Was naughty!")          | プレイヤーをサーバーからBAN（理由は任意）         | 
| global.banid "steam64"      | 整数          | Steam64 IDでプレイヤーをBAN         | 
| global.banlistex      | -          | BANされたプレイヤー名と理由のリストを返す         | 
| global.banlist      | -          | チャット内にBANされたプレイヤーのリストを表示         | 
| global.unban "steam64"      | 整数          | Steam64 IDでBANを解除         | 
| global.kickall      | -          | サーバーから全プレイヤーをキック         | 
| global.kick "steam64 / playername" "reason"      | 整数/文字列 (例: "Jacob"), 文字列 (例: "Was naughty!")         | Steam64 IDまたはプレイヤー名で指定したユーザーをキック（理由は任意）         | 
| global.ownerid "steam64 / playername"      | 整数/文字列 (例: "Jacob")          | 指定したプレイヤーをサーバー管理者に設定（Authレベル2）         | 
| global.removeowner "steam64"      | 整数         | 指定したSteam64 IDの管理者権限を剥奪         | 
| global.moderatorid "steam64 / playername"      | 整数/文字列 (例: "Jacob")          | 指定したプレイヤーをサーバーモデレーターに設定（Authレベル1）         | 
| global.removemoderator "steam64"      | 整数          | 指定したSteam64 IDのモデレーター権限を剥奪         | 
| global.listid      | -          | Steam64 IDでBANされたユーザーのリストを返す          | 

</TabItem>
<TabItem value="Player Controls" label="プレイヤー操作">

| コマンド構文                  | 受け付ける値 | 説明 | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | 自分のプレイヤーをキルする         | 
| global.quit      | -          | ゲームを保存して終了         | 
| global.god      | true/false          | ダメージを受けなくなるGodモードを切り替え（管理者専用）          | 
| global.noclip      | true/false          | 自由に飛べるNoclipモードを切り替え（管理者専用）          | 
| global.debugcamera      | true/false          | フリーカメラモードを切り替え（管理者専用）          | 
| player.sleep      | -          | プレイヤーを強制的に寝かせる         | 
| commands.find "command"      | 文字列 (例: "quit")          | プレイヤーが使えるコマンドを検索         | 
| chat.say "text"     | 文字列 (例: "Hello World!")          | サーバー内の全プレイヤーにメッセージを送信         | 
| inventory.give "itemID" "amount"     | 整数 (itemID), 整数 (例: 5)          | 自分のインベントリにアイテムを追加         | 
| inventory.giveto "playername" "itemID" "amount"      | 文字列 (例: "Jacob"), 整数 (itemID), 整数 (例: 5)          | 指定したユーザーのインベントリにアイテムを追加         | 

</TabItem>
</Tabs>

<InlineVoucher />