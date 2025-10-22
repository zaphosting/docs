---
id: dedicated-linux-conan
title: "専用サーバー：Conan Exiles 専用サーバー Linux セットアップ"
description: "LinuxでConan Exiles専用サーバーをセットアップして、スムーズなゲームサーバーのホスティングと管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Linux専用サーバーを持っていて、そこにConan Exiles専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
実は、**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできるんだ。これでゲームサーバーサービスを簡単にセットアップできて、ZAP-Hostingのダッシュボードと直結！数クリックで完了しちゃうよ。詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
Conan Exilesは現状、Linuxネイティブのサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要なんだ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールを済ませておこう。簡単にできる[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを使って準備してね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを開始しよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用バイナリを強制的にインストールできるよ。
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

例えば、サーバー名、パスワード、管理者パスワードを設定したい場合は、以下のようにファイルに追記しよう。
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

設定可能なオプションは[Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration)で詳しく確認できるから、ぜひチェックしてみてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで**ConanSandboxServer.exe**を実行するよ。Wine互換レイヤーを使うために、`xvfb-run`と`wine64`を付けるのを忘れずに。
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

コマンドプロンプトにたくさんのログが流れ始めたらサーバーが起動中のサイン。サーバーリストから直接検索して接続するか、`[your_ip_address]:7777`で直接接続できるよ。

## まとめ

おめでとう！これで専用サーバーにConan Exilesサーバーを無事インストール＆設定できたね。次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、新しい専用ゲームサーバーをサービスとして登録するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />