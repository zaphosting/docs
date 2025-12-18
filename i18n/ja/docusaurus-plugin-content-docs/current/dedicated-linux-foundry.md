---
id: dedicated-linux-foundry
title: "専用サーバー：Foundry 専用サーバー Linux セットアップ"
description: "LinuxサーバーにFoundry専用サーバーをインストールして、スムーズなゲームサーバーのホスティングと管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにFoundry専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
Foundryは現状、Linuxネイティブのサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要なんだ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールをしよう。簡単にセットアップできる[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを参考にしてね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のために`home/steam`のルートディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用のバイナリを強制的にインストールできるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

ダウンロードには時間がかかることもあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまででFoundryサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

ルートディレクトリにある**app.cfg**設定ファイルを編集して、各種パラメータを調整しよう。
```
nano /home/steam/Foundry-Server/app.cfg
```

設定項目の詳細はFoundryの[サーバー設定](foundry-configuration.md)ガイドを見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで**FoundryDedicatedServerLauncher.exe**を実行するよ。Wine互換レイヤー経由で動かすために、**xvfb-run**と**wine**を必ず付けてね。
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

コマンドプロンプトにログが表示されれば起動成功のサイン。問題なければサーバーリストに表示されるはず。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:3724` を直接入力して接続もできるよ。

## まとめ

おめでとう！専用サーバーにFoundryサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ。

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！