---
id: dedicated-linux-create-gameservice
title: "専用サーバー：Linuxサービスとして専用ゲームサーバーをセットアップする方法"
description: "Linuxで専用ゲームサーバーのサービスを設定・管理して、自動化と簡単操作を実現 → 今すぐ詳しくチェック"
sidebar_label: Linuxサービスのセットアップ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

サービスはLinuxの重要な機能で、バックグラウンドで動作するプロセスやアプリケーションのことを指します。これは事前定義されたタスクやイベントベースのタスクで、サーバー起動時の自動起動、自動アップデート、ログの簡単管理など多くのメリットがあります！このガイドでは、専用ゲームサーバーのサービスを作成する手順を解説します。

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しましょう。接続方法がわからない場合は、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

また、このセクションの専用ゲームサーバーガイドのいずれかに従って、Linuxシステムにゲームサーバーをインストール・セットアップしておく必要があります。ここでは例として[Palworld専用ゲームサーバー](dedicated-linux-palworld.md)を使いますが、他のガイドでも同様の手順で対応可能です。

## サービスの作成

セットアップした専用ゲームサーバー用に新しいサービスファイルを作成します。`[your_game]`は任意の名前に置き換えてください。管理しやすいようにゲーム名を使うのがおすすめなので、ここでは`palworld.service`を例にします。
```
sudo nano /etc/systemd/system/[your_game].service
```

## サービスの設定

nanoエディタが開いたら、以下のテンプレートをコピーしてください。SteamCMDを使うガイド用と、使わないゲーム用の2種類があります。

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

ファイルの内容を簡単に解説します。
- `Description`: サービスの目的をわかりやすく記述。何でもOKです。
- `User`: SteamCMD用のガイドなら`steam`ユーザー、非SteamCMD用なら`gameservers`ユーザーを使う想定です。違う場合はサービスを実行するユーザー名に変更してください。
- `WorkingDirectory`: サービスが必要とするファイルがあるメインディレクトリのパス。
- `ExecStartPre`（SteamCMDのみ）: サーバー起動前にSteamCMDでゲームをアップデートするコマンド。サーバー再起動時に毎回最新状態に保ちます。専用ゲームサーバーガイドからコピーするか、ゲームに合わせて手動で書き換えてください。
- `ExecStart`: サービス起動時に実行するコマンド。こちらも専用ゲームサーバーガイドからコピーするか、起動ファイルのパスに書き換えてください。

:::important Wine互換レイヤー対応
Wine互換レイヤーが必要なゲームの場合、`ExecStart`に**xvfb-run**と**wine**コマンドを含める必要があります。例えばV-Risingの場合は以下のようにします：
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

また、`ExecStartPre`のSteamCMDコマンドに`+@sSteamCmdForcePlatformType`パラメータを追加してプラットフォームを強制指定する必要がある場合もあります。
:::

すべての値を専用ゲームサーバー用に書き換えたら、`CTRL + X`でnanoを終了し、`Y`で保存、`ENTER`で確定します。

Palworldの例だとこんな感じになります：
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

サービスファイルができたら、有効化します。`palworld.service`の例では`[your_service]`を`palworld`に置き換えます。
```
sudo systemctl enable [your_service]
```

:::tip
サービスファイルを編集したら、必ず`systemctl daemon-reload`を実行して変更を反映させましょう。
:::

サーバーは以下のコマンドで起動できます。同様に停止や再起動も簡単です。
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
サービスの状態を確認したい場合は`systemctl status`コマンドを使いましょう。ログを見たいときは`journalctl -u [your_service].service`で最新ログをチェックできます。
:::

起動時にサービスを自動実行したくない場合は無効化します。
```
sudo systemctl disable [your_service]
```

## まとめ

これで専用ゲームサーバーのサービス設定が完了し、サーバー起動時に自動でゲームサーバーも起動するようになりました。

サービスファイルの内容や、サービス管理コマンドの使い方も理解できたはずです。

<InlineVoucher />