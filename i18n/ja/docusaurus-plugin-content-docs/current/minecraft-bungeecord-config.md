---
id: minecraft-bungeecord-config
title: "Minecraft: Bungeecord サーバー設定ガイド"
description: "BungeeCordサーバーネットワークの設定を最適化してパフォーマンスとプレイヤー体験を向上させる方法 → 今すぐ詳しく学ぼう"
sidebar_label: サーバープロパティ
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## BungeeCord設定は何のために必要？

BungeeCordは、プロキシサーバー（BungeeCordサーバー）を介して接続された複数のゲームサーバーを管理する仕組みです。これらのサーバーネットワークをカスタマイズするには、*config.yml* ファイルを編集する必要があります。このページでは各設定の意味を詳しく解説し、PaperSpigotやBukkitなどのサブサーバーへの影響についても追加情報をお届けします。

<InlineVoucher />

## 設定項目

### forge_support

値はfalseかtrueに設定可能。trueにすると、Forgeクライアント（主にModパック用）での接続を許可します。falseにするとこれらの接続を拒否します。

### player_limit

同時に接続可能なプレイヤー数を指定します。listenersの*max_players*とは異なり、こちらはネットワーク全体の内部的な最大プレイヤー数の絶対値です。

### permissions

ここでは特定のグループにBungeeCord専用の権限を割り当てられます。SpigotやBukkitの権限ではないので注意してください。  
構文とインデント（スペース2つ）が重要です：
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

サーバーがプレイヤーに信号を送らない最大時間（ミリ秒）を指定します。この時間を超えるとサーバーは接続を切断します。デフォルトは30000（30秒）です。

### log_commands

falseかtrueに設定可能。trueにするとプレイヤーがBungeeCordコマンドを実行した際にコンソールにメッセージが表示されます。falseにすると表示されません。

### network_compression_threshold

プレイヤーに送信されるパケットのサイズを設定します。デフォルトの256より小さい値（例：128）は遠距離ユーザーの接続改善に役立つ場合がありますが、CPU負荷が大幅に増えるため慎重に変更してください。

### online_mode

falseかtrueに設定可能。trueにするとMinecraftを購入済みのプレイヤーのみアクセス可能になります。falseにするとクラックドプレイヤーもアクセス可能になりますが、Mojangサーバーとの通信は行われません。  
**重要:** クラックドプレイヤーを許可する場合は認証プラグインを導入しないと、他のプレイヤーに成りすまされて管理者権限を奪われるリスクがあります。

### disabled_commands

ここに指定したコマンドはネットワーク全体で無効化され、実行できなくなります。すべてのプレイヤーに適用されます。

### servers

ネットワーク内のすべてのサブサーバーをリストアップします。ここにないサーバーはネットワークに統合されません。  
構文とインデント（スペース2つ）が重要です：
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
**motd** は *forced_hosts* 機能でサブサーバーにpingした際にサーバーリストに表示されるメッセージです：

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

**address** にはサブサーバーのIPアドレスとポートを入力します。**restricted** がtrueの場合、プレイヤーは *bungeecord.server.ServerName* の権限を持っていないとそのサーバーに入れません。

### listeners

BungeeCordサーバーへの接続に関わる重要な設定が多数あります。複数のリスナーを作成して異なるIPアドレスやポートで接続を受け付けられます。リスナーの主な設定項目は以下の通り：

* query_port - リスナーのポート番号
* motd - プレイヤーがBungeeCordサーバーに直接接続した際にサーバーリストに表示されるメッセージ
* tab_list - *GLOBAL_PING*, *GLOBAL*, *SERVER* のいずれかを選択。  
  - GLOBAL_PING: 全プレイヤーとPing値をタブリストに表示  
  - GLOBAL: 全プレイヤーを表示（Pingは非表示）  
  - SERVER: 同じサブサーバーのプレイヤーのみ表示  
  **重要:** 1.8以前のバージョンでは機能しません。
* query_enabled - falseかtrue。trueにするとDNSクエリ時にUDPクエリをチェックし、それ以外の接続を拒否します。
* proxy_protocol - falseかtrue。trueにするとHAProxyプロトコルを使用可能にします。
* forced_hosts - サブサーバーへの個別直接接続を許可。構文：`Your.OwnDomain.net: ServerName`
* ping_passthrough - falseかtrue。trueにすると *forced_hosts* 経由でサブサーバーにpingした際にサブサーバーの本当のMOTDを表示します。falseの場合は *servers* の設定値を返します。
* priorities - プレイヤーが優先的に接続するサーバーを降順でリスト。オフラインや利用不可のサーバーはスキップされます。
* bind_local_address - falseかtrue。trueにするとBungeeCordサーバーと同じIPでリッスンしているサーバーにのみプレイヤーをリダイレクトします。異なるIPのサーバーを使うネットワークでのみ意味があります。
* host - ホストのIPアドレスとポート。IPが0.0.0.0の場合、すべてのIPアドレスやドメインからの転送を受け入れます。
* max_players - このリスナーの最大プレイヤー数
* tab_size - タブリストに表示される最大プレイヤー数
* この値はfalseかtrue。trueにするとプレイヤーは常にデフォルトサーバー（*priorities* の最初の利用可能サーバー）に接続されます。falseの場合は最後に接続していたサブサーバーに戻ります。  
  **重要:** trueにすると *forced_hosts* 経由の接続もデフォルトサーバーに転送されます。

### ip_forward

falseかtrue。trueにするとプレイヤーはBungeeCordサーバー経由でのみネットワークにアクセス可能になります。falseにするとIPとポートを知っていればサブサーバーに直接接続可能です。  
**重要:** *online_mode* をtrueにする場合はセキュリティ上この機能も有効にしてください。

### prevent_proxy_connections

falseかtrue。trueにすると接続プレイヤーのIPアドレスがMojangサーバーに送信されます。falseにするとIP転送を防ぎます。  
ゲーム体験にはほとんど影響ありません。

### groups

個別プレイヤーに1つ以上のグループを割り当てられます。割り当てられたグループのBungeeCord権限が適用されます。  
構文とインデント（スペース2つ）が重要です：
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

プレイヤーが再接続を試みるまでの待機時間（ミリ秒）を指定します。デフォルトは4000（4秒）です。

### stats

ここにはBungeeCordがランダム生成したコードが入ります。変更しないことを推奨します。匿名かつ暗号化された解析データが開発者に送信され、BungeeCordの最適化やバグ修正に役立ちます。

### connection_throttle_limit

プレイヤーが再接続を試みる前に許される接続試行回数を指定します。この回数を超えると *connection_throttle* の待機時間が適用されます。

<InlineVoucher />