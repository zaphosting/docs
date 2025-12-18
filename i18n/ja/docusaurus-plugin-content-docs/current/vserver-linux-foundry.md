---
id: vserver-linux-foundry
title: "VPS: Foundry 専用サーバー Linux セットアップ"
description: "Linux VPS に Foundry 専用サーバーをインストールして、スムーズなゲームサーバーのホスティングと管理を実現する方法 → 今すぐチェック"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Foundry 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

また、Linux サーバーで SteamCMD を初めて使う場合は、最初のセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

:::info Wine 互換レイヤー
Foundry は現状、Linux ネイティブのサーバービルドを提供していないから、Windows サーバービルドを Linux で動かすために追加の準備が必要なんだ。

Linux サーバーで初めて使う場合は、一度だけ **Wine** 互換レイヤーのインストールをしよう。簡単な [Wine 互換レイヤーセットアップ](vserver-linux-wine.md) ガイドを使ってセットアップしてね。
:::

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインしたら、以下のコマンドで SteamCMD を使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows` パラメータを使うことで、Windows バイナリが強制的にインストールされるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

ダウンロードには時間がかかることがあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまでで Foundry サーバーのセットアップは完了。サーバーの設定はサーバーディレクトリ内の設定ファイルで行えるよ。

ルートディレクトリにある **app.cfg** 設定ファイルを開いて、各種パラメータを調整しよう。
```
nano /home/steam/Foundry-Server/app.cfg
```

設定項目の詳細は Foundry の [サーバー設定](foundry-configuration.md) ガイドを見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで **FoundryDedicatedServerLauncher.exe** を実行するよ。Wine 互換レイヤーを使うために、**xvfb-run** と **wine** コマンドを付けて実行してね。
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

コマンドプロンプトにログが表示されれば起動成功のサイン。問題なければサーバーリストに表示されるはず。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:3724` を直接入力して接続もできるよ。

## まとめ

おめでとう！VPS に Foundry サーバーを無事インストール＆設定できたね！次のステップとしては、新しい専用ゲームサーバーをサービスとしてセットアップする方法を解説した [Linux サービスセットアップ](vserver-linux-create-gameservice.md) ガイドをチェックするのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />