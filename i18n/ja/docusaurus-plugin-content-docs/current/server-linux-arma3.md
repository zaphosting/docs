---
id: server-linux-arma3
title: "Arma 3 専用サーバー Linux セットアップ"
description: "LinuxでArma 3専用サーバーをインストールしてスムーズにゲームサーバーをホスティング＆管理する方法 → 今すぐチェック"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
LinuxのVPSや専用サーバーを持っていて、そこにArma 3専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSや専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHでVPSや専用サーバーに接続しよう。やり方がわからなければ[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップガイド](dedicated-linux-steamcmd.md)を見てSteamCMDを完全にセットアップしてから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理しやすいように`home/steam`のホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを開始しよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用のバイナリを強制的にインストールできるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

ダウンロードが完了するまで少し時間がかかることもあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまででArma 3サーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

ルートディレクトリにある**server.cfg**ファイルを編集して、設定パラメータを調整しよう。
```
nano /home/steam/arma3-server/server.cfg
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで**arma3server_x64**実行ファイルを起動してね。

```
/home/steam/arma3-server/arma3server_x64
```

ターミナルにたくさんのログが表示されて、サーバーが正常に起動したことがわかるはず。

プレイヤーは**Arma 3のサーバーブラウザ**から、サーバーのIPアドレスとデフォルトポート**2302**を使って直接接続できるよ。

## まとめ

おめでとう！VPSや専用サーバーに**Arma 3サーバー**を無事インストール＆設定できたね！もし何か質問やトラブルがあれば、毎日対応しているサポートチームに気軽に連絡してね！

<InlineVoucher />