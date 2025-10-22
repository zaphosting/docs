---
id: vserver-linux-enshrouded
title: "VPS: Enshrouded 専用サーバー Linux セットアップ"
description: "Linux VPS に Enshrouded 専用サーバーをセットアップして、スムーズなゲームサーバー運用と管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: Enshrouded
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Enshrouded 専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3 インターフェース](vserver-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてね。

また、Linux サーバーで SteamCMD を初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linux セットアップ](vserver-linux-steamcmd.md)ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進んでね。

:::info Wine 互換レイヤー
Enshrouded は現状、Linux ネイティブのサーバービルドを提供していないから、Windows サーバービルドを Linux で動かすために追加の準備が必要だよ。

Linux サーバーで初めて使う場合は、一度だけ **Wine** 互換レイヤーのインストールを済ませておこう。簡単な[Wine 互換レイヤーセットアップ](vserver-linux-wine.md)ガイドを使って準備してね。
:::

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインしたら、以下のコマンドで SteamCMD を使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows` パラメータで Windows バイナリを強制的にインストールするよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

ダウンロードには時間がかかることがあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまでで Enshrouded サーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルでできるよ。

ルートディレクトリにある **enshrouded_server.json** ファイルを編集して、設定パラメータを調整しよう。
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

設定項目の詳細は Enshrouded の[サーバー設定](enshrouded-configuration.md)ガイドを見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで **enshrouded_server.exe** を実行するよ。Wine 互換レイヤー経由で動かすために、**xvfb-run** と **wine** を使うのを忘れずに。
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

コマンドプロンプトにたくさんログが流れたら成功のサイン。`[Session] 'HostOnline' (up)!` というログが出たら起動完了だよ。あとは **Find Games** タブで `[your_ip_address]:15636` を入力して直接接続できるよ。

## まとめ

おめでとう！VPS に Enshrouded サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />