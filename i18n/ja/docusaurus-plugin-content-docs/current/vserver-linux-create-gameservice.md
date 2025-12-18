---
id: vserver-linux-create-gameservice
title: "VPS: Linuxサービスとして専用ゲームサーバーをセットアップする方法"
description: "専用ゲームサーバーのLinuxサービス作成と管理方法を解説。自動起動や簡単メンテナンスを実現 → 今すぐチェック"
sidebar_label: Linuxサービスのセットアップ
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

サービスはLinuxの重要な機能で、バックグラウンドで動作するプロセスやアプリケーションのことを指します。これは事前定義されたタスクやイベントベースのタスクであり、サーバー起動時の自動起動、サーバーの自動更新、ログへの簡単アクセスや管理など、さまざまなメリットがあります！このガイドでは、専用ゲームサーバー用のサービスを作成する手順を解説します。

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しましょう。接続方法がわからない場合は、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

また、このセクションの専用ゲームサーバーガイドのいずれかに従って、Linuxシステムにゲームサーバーをインストール・セットアップしておく必要があります。このガイドでは例として[Palworld専用ゲームサーバー](vserver-linux-palworld.md)を使いますが、他のガイドにも応用可能です。

## サービスの作成

セットアップした専用ゲームサーバー用に新しいサービスファイルを作成します。`[your_game]`は任意の名前に置き換えてください。ゲーム名を使うと管理しやすいので、ここでは `palworld.service` を例にします。
```
sudo nano /etc/systemd/system/[your_game].service
```

## サービスの設定

nanoエディタが開いたら、以下のテンプレートをコピーしてください。SteamCMDを使うガイド用と使わないガイド用の2種類があります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="SteamCMD対応ゲーム" default>

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

ファイルの内容を簡単に説明します。
- `Description`: サービスの目的をわかりやすく記述。何でもOKです。
- `User`: SteamCMDを使う場合は`steam`ユーザー、使わない場合は`gameservers`ユーザーを使うのが推奨です。設定していなければ、サービスを実行するユーザー名にしてください。
- `WorkingDirectory`: サービスが必要とするファイルがあるメインディレクトリのパス。
- `ExecStartPre`（SteamCMDのみ）: サーバー起動前にSteamCMDでゲームを最新状態に更新するコマンド。専用ゲームサーバーガイドからコピーするか、ゲームに合わせて手動で置き換えてください。
- `ExecStart`: サービス起動時に実行するコマンド。専用ゲームサーバーガイドからコピーするか、起動ファイルのパスに置き換えてください。

:::important Wine互換レイヤーについて
Wine互換レイヤーが必要なゲームの場合、`ExecStart`に**xvfb-run**と**wine**コマンドを含める必要があります。例えばV-Risingの場合は以下のようにします：
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

また、`ExecStartPre`のSteamCMDインストールコマンドに`+@sSteamCmdForcePlatformType`パラメータを追加してプラットフォームを強制指定する必要がある場合もあります。
:::

すべての値を専用ゲームサーバー用に置き換えたら、`CTRL + X`でnanoを終了し、`Y`で保存、最後に`ENTER`を押して確定します。

Palworldの例だと、ファイルは以下のようになります：
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

サービスファイルができたら、有効化します。`palworld.service`の例では、`[your_service]`を`palworld`に置き換えます。
```
sudo systemctl enable [your_service]
```

:::tip
サービスファイルを編集した場合は、必ず`systemctl daemon-reload`を実行して変更を反映させましょう。
:::

サーバーの起動は以下のコマンドで行います。同様に停止や再起動も簡単にできます。
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
サービスの状態確認は`systemctl status`コマンドで行えます。デバッグ用のログは`journalctl -u [your_service].service`で最新ログを確認可能です。
:::

もし起動時にサービスを自動実行したくなくなったら、無効化すればOKです。
```
sudo systemctl disable [your_service]
```

## まとめ

これで専用ゲームサーバーのサービス設定が完了し、サーバー起動時に自動でゲームサーバーが立ち上がるようになりました。

サービスファイルの内容や、サービス管理の基本コマンドも理解できたはずです。

<InlineVoucher />