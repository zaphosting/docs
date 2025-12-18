---
id: valheim-admin
title: "Valheim: サーバー管理者コマンド＆チート"
description: "Valheimで管理者権限を割り当ててサーバーを完全にコントロールし、プレイヤー管理を効率化する方法 → 今すぐチェック"
sidebar_label: 管理者コマンド＆チート
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で利用可能なすべてのオプションや機能を直接使うことができます。サーバーに管理者権限を割り当てるための手順を以下に詳しく説明します。  
<InlineVoucher />

### 設定方法
自分を管理者に追加するには、まずSteamID64を取得する必要があります。例えば、[Steam ID Finder](https://steamidfinder.com/)のようなツールを使うと便利です。

ここに自分のSteamのURLを入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/e8H8Y4P9ojW9sD2/preview)

次に「Find Steam ID」をクリック。

Steamプロフィールが表示されるので、「Steam64ID (Dec)」をコピーします。

次にサーバーのWebインターフェースを開き、設定ページにアクセスします。ここに「Admins」オプションがあり、そこにSteam IDを追加できます：

![](https://screensaver01.zap-hosting.com/index.php/s/aJkGRMcmWrnZyiM/preview)

Steam IDを追加したら設定を保存し、サーバーを再起動してください。

## コンソールへのアクセス

Valheimのコンソールはゲーム内で「F5」キーを押すと開けます。ここで管理者コマンドを入力可能です。

### 管理者コマンド一覧

|  コマンド  |           引数           |                  効果                   |
| :--------: | :----------------------: |  :----------------------------------:  |
|   kick     |      名前/プレイヤーID/IP |     指定したプレイヤーをキック         |
|   ban      |      名前/プレイヤーID/IP |     指定したプレイヤーをBAN            |
|   unban    |        プレイヤーID/IP    |     指定したプレイヤーのBANを解除      |
|   banned   |           なし           |     BANされたプレイヤー一覧を表示      |

<InlineVoucher />