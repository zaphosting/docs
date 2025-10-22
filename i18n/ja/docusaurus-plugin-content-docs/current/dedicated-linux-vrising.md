---
id: dedicated-linux-vrising
title: "専用サーバー：V-Rising 専用サーバー Linux セットアップ"
description: "LinuxでV-Rising専用サーバーをセットアップして、スムーズなゲームサーバーのレンタルと管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにV-Rising専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？専用サーバーに直接**ZAP GS/TS3インターフェース**をインストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
V-Risingは現状、Linuxネイティブのサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要だよ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーをインストールしよう。簡単にセットアップできる[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを参考にしてね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理しやすいようにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを開始しよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用のバイナリを強制的にインストールできるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

ダウンロードには時間がかかることがあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまででV-Risingサーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

設定は、Settingsフォルダ内にある**ServerGameSettings.json**と**ServerHostSettings.json**のファイルを編集することで調整できるよ。
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

V-Risingの[サーバー設定](vrising-configuration.md)ガイドでは、利用可能な設定項目とその意味を詳しく解説しているからぜひ見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、例として用意されているバッチファイルのコピーを作成するのがおすすめ。
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

必要に応じてファイルを編集して準備ができたら、以下のコマンドで新しい**start_server.bat**を実行しよう。Wine互換レイヤーを通して起動するために、**xvfb-run**と**wine**を付けるのを忘れずに。
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。別の方法として、サーバーリストの下部検索バーに`[あなたのIPアドレス]:8211`を入力して直接接続もできるよ。

## まとめ

おめでとう！専用サーバーにV-Risingサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、新しい専用ゲームサーバーをサービス化する方法を学ぶのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />