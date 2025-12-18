---
id: vrising-becomeadmin
title: "V Rising: 管理者になる方法"
description: "ゲームサーバーの管理者権限を効率的に設定・管理する方法を解説 → 今すぐチェック"
sidebar_label: 管理者になる
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限の付与により、サーバーを完全にコントロールしながらシンプルかつ包括的に管理できます。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用可能です。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

### 権限の追加

管理者権限の管理は **adminlist.txt** 設定ファイルで行います。このファイルはコントロールパネルの「Configs」からアクセス可能です。管理者を追加するにはプレイヤーのSteamID64が必要です。Steamプロフィールを開き、どこかで右クリックしてページURLをコピーしてください。そのURLを以下のサイトのいずれかに入力するとSteamID64が取得できます。  
https://steamid.io/  
https://steamrep.com/  
https://steamidfinder.com/  

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

コピーしたSteamプロフィールのURLを入力欄に貼り付けるとSteamID64が表示されます。取得したSteamID64を **adminlist.txt** 設定ファイルに追加しましょう。ゲームサーバーの管理画面で「Configs」カテゴリからadminlist.txtを開いて編集してください。  

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
複数のプレイヤーに管理者権限を付与する場合は、SteamIDをそれぞれ別の行に記載してください。  
:::

### 権限の有効化

ゲーム内で管理者権限を使う前に、ゲームのコンソールを有効化する必要があります。サーバーに接続し、設定画面を開いてください。設定内の **Console Enabled** オプションをオンにします。コンソールはデフォルトでキーボードのGravisキー（「`」キー）で開けます。コンソールで `adminauth` コマンドを実行すると管理者権限が有効になります。  

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)

### 管理者コマンド一覧

サーバーでよく使う管理者コマンドの簡単な一覧です。

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | 管理者権限の付与                                       |
| admindeauth              | 管理者権限の剥奪                                       |
| banuser [name/IP/userID] | プレイヤー名、IP、またはユーザーIDで特定のプレイヤーをBAN |
| banned                   | BANされたユーザーの一覧を表示                           |
| bancharacter             | 特定のキャラクターをBAN                                |
| give [name]              | ゲーム内で特定のアイテムを入手                         |
| giveset                  | 各種防具や武器のセットを探索                           |
| kick [name/IP/userID]    | プレイヤー名、IP、またはユーザーIDで特定のプレイヤーをキック |
| unban [name/IP/userID]   | プレイヤー名、IP、またはユーザーIDでBANを解除          |


## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />