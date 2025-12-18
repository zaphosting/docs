---
id: cs16-becomeadmin
title: "CS 1.6: 自分のサーバーで管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、ゲーム内管理を強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限の割り当てにより、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 設定方法
管理者の追加は**users.ini**設定ファイルを使って行います。管理者になるためには、まず**AMXmodX**と**Metamod**をインストールしておく必要があります。まだインストールしていない場合は、こちらのガイドをチェックしてみてください: [プラグインのインストール](cs16-plugins.md)

**users.ini**設定ファイルを編集するには、FTPでサーバーに接続する必要があります。FTPで``/gXXXX/cs16/cstrike/addons/amxmodx/configs``ディレクトリに移動してください。次にテキストエディタで設定ファイルを開いて編集します。

<InlineVoucher />

```
...
; Examples of admin accounts:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

設定ファイル内の``"loopback" "" "abcdefghijklmnopqrstu" "en"``の部分を修正します。昔は認証が名前とパスワードだけで行われていましたが、現在はSteamID64のみで認証されます。自分のSteamID64は、Steamプロフィールを開いてどこかで右クリックし、**Steam URLをコピー**を選択すると取得できます。

その後、コピーしたURLを以下のいずれかのサイトに入力してください：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

これでアカウントの一般情報とSteam IDが表示されます。ここで必要なのはSteamID64だけです。Steam IDを**SteamID**のクライアントエントリに追加します。結果は以下のようになります：

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

この行には以下の情報が含まれています：

1. 名前/SteamID - プレイヤーのユニークID
2. パスワード - Steam認証の場合は不要
3. 権限レベル
4. 接続フラグ - AMX Mod Xが管理者認証を試みる方法を制御

Steam認証なのでパスワードは不要です。そのため、``en``ではなく``ce``を設定します。以下にすべての権限レベルと接続フラグの概要を示します：


**権限レベル**

| 権限レベル | 説明                                                      |
| ---------- | --------------------------------------------------------- |
| a          | 免疫（キック・バン・スレイ・スラップされず、他のコマンドの影響も受けない） |
| b          | 予約（予約スロットに参加可能）                           |
| c          | amx_kickコマンド使用可能                                  |
| d          | amx_banおよびamx_unbanコマンド使用可能                   |
| e          | amx_slayおよびamx_slapコマンド使用可能                   |
| f          | amx_mapコマンド使用可能                                   |
| g          | amx_cvarコマンド使用可能（一部のcvarは使用不可）          |
| h          | amx_cfgコマンド使用可能                                   |
| i          | amx_chatおよびその他チャットコマンド使用可能              |
| j          | amx_voteおよびその他投票コマンド使用可能                  |
| k          | sv_password cvarへのアクセス（amx_cvarコマンド経由）      |
| l          | amx_rconコマンドおよびrcon_password cvarへのアクセス（amx_cvarコマンド経由） |
| m          | カスタムレベルA（追加プラグイン用）                       |
| n          | カスタムレベルB（追加プラグイン用）                       |
| o          | カスタムレベルC（追加プラグイン用）                       |
| p          | カスタムレベルD（追加プラグイン用）                       |
| q          | カスタムレベルE（追加プラグイン用）                       |
| r          | カスタムレベルF（追加プラグイン用）                       |
| s          | カスタムレベルG（追加プラグイン用）                       |
| t          | カスタムレベルH（追加プラグイン用）                       |
| u          | メニューアクセス可能                                     |
| z          | ユーザー（管理者権限なし）                               |


**接続フラグ**

| フラグ | 説明                                               |
| ------ | -------------------------------------------------- |
| a      | パスワードが無効な場合にプレイヤーを切断          |
| b      | クランタグ                                         |
| c      | これはSteamID/WONIDであることを示す                |
| d      | これはIPアドレスであることを示す                    |
| e      | パスワードチェックなし（名前/IP/SteamIDのみ必要）  |


## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />