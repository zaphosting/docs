---
id: dedicated-linux-create-gameservice
title: "専用サーバー：Linuxサービスとして専用ゲームサーバーをセットアップする方法"
description: "Linuxで専用ゲームサーバーのサービスを設定・管理し、自動化と簡単操作を実現する方法 → 今すぐチェック"
sidebar_label: Linuxサービスのセットアップ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

サービスはLinuxの重要な機能で、バックグラウンドで動作するプロセスやアプリケーションのことを指します。これは事前定義されたタスクやイベントベースのタスクであり、サーバー起動時の自動起動、自動アップデート、ログの簡単管理など多くのメリットがあります！このガイドでは、専用ゲームサーバーのサービスを作成する手順を解説します。

## 準備

まずはSSHで専用サーバーに接続しましょう。接続方法がわからない場合は、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

また、このセクションの専用ゲームサーバーガイドのいずれかに従い、Linuxシステムにゲームサーバーをインストール・セットアップしてください。このガイドでは例として[Palworld専用ゲームサーバー](dedicated-linux-palworld.md)を使いますが、他のガイドにも応用可能です。

## サービスの作成

セットアップした専用ゲームサーバー用に新しいサービスファイルを作成します。`[your_game]`は任意の名前に置き換えてください。管理しやすいようにゲーム名を使うのがおすすめです。ここでは`palworld.service`を例にします。
```
sudo nano /etc/systemd/system/[your_game].service
```

## サービスの設定

nanoエディタが開いたら、以下のテンプレートサービスファイルの内容をコピーしてください。SteamCMDを使うガイド用と使わないガイド用の2種類があります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="SteamCMDゲーム" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="通常のゲーム">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

ファイル内容のポイントを解説します。
- `Description`: サービスの目的をわかりやすく記述。自由に設定可能。
- `User`: SteamCMD用の`steam`ユーザー、非SteamCMD用の`gameservers`ユーザーを使うのがガイドの推奨設定。なければサービスを実行するユーザーに設定してください。
- `WorkingDirectory`: サービスが必要とするファイルがあるメインディレクトリのパス。
- `ExecStartPre`（SteamCMDのみ）: サーバー再起動時に毎回SteamCMDでアップデートを行うコマンド。専用ゲームサーバーガイドからコピーするか、ゲームに合わせて手動で値を置き換えてください。
- `ExecStart`: サービス起動時に実行するコマンド。こちらもガイドからコピーするか、起動ファイルのパスに置き換えてください。

:::important Wine互換レイヤー対応
Wine互換レイヤーが必要なゲームの場合、`ExecStart`に**xvfb-run**と**wine**コマンドを含める必要があります。V-Risingの例：
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

また、`ExecStartPre`のSteamCMDインストールコマンドに`+@sSteamCmdForcePlatformType`パラメータを追加してプラットフォームを強制指定する必要がある場合もあります。
:::

すべての値を専用ゲームサーバー用に置き換えたら、`CTRL + X`でnanoを終了し、`Y`で保存、`ENTER`で確定してください。

Palworldの例は以下のようになります。
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## サービスの管理

サービスファイルを作成したら、有効化します。`palworld.service`の例では`[your_service]`を`palworld`に置き換えます。
```
sudo systemctl enable [your_service]
```

:::tip
サービスファイルを編集した場合は、必ず`systemctl daemon-reload`を実行して変更を反映させましょう。
:::

サーバーの起動は`systemctl start`コマンドで行います。同様に停止や再起動も簡単にできます。
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
サービスの状態確認は`systemctl status`コマンドで可能です。デバッグ用ログは`journalctl -u [your_service].service`で最新ログを確認できます。
:::

起動時にサービスを自動起動させたくない場合は無効化してください。
```
sudo systemctl disable [your_service]
```

## まとめ

これで専用ゲームサーバーのサービス設定が完了し、サーバー起動時に自動でゲームサーバーが立ち上がるようになりました。

サービスファイルの内容や、サービス管理コマンドの使い方も理解できたはずです。