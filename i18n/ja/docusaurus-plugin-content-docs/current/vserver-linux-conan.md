---
id: vserver-linux-conan
title: "VPS: Conan Exiles 専用サーバー Linux セットアップ"
description: "Linux VPSでSteamCMDとWine互換レイヤーを使ってConan Exiles専用サーバーをインストール＆起動する方法 → 今すぐチェック"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Linux VPSを持っていて、そこにConan Exiles専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例はUbuntuだけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](vserver-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。やり方がわからなければ、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてね。

SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](vserver-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
Conan Exilesは現状、Linuxネイティブのサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要だよ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールをしよう。簡単な[Wine互換レイヤーセットアップ](vserver-linux-wine.md)ガイドを参考にしてね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のために`home/steam`のホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用バイナリを強制的にインストールできるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

ダウンロードには時間がかかることもあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまででConan Exilesサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

設定は以下の**WindowsServerEngine.ini**ファイルを編集して行うんだ。
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

例えば、サーバー名、パスワード、管理者パスワードを設定したい場合は、以下のように追記しよう。
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

設定項目の詳細は[Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration)を見てみるのがおすすめだよ。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで**ConanSandboxServer.exe**をWine互換レイヤー経由で起動するよ。
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

コマンドプロンプトにたくさんログが流れ始めたらサーバーが起動中のサイン。サーバーリストから検索して直接接続するか、`[your_ip_address]:7777`で直接接続できるよ。

## まとめ

おめでとう！VPSにConan Exilesサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスセットアップ](vserver-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービス化する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ。

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />