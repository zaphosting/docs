---
id: dedicated-linux-vrising
title: "専用サーバー：V-Rising 専用サーバー Linux セットアップ"
description: "LinuxでV-Rising専用サーバーをセットアップして、スムーズなゲームサーバーのレンタルと管理を実現しよう → 今すぐ詳しく見る"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにV-Rising専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてみてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。もしやり方がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
V-Risingは現状、ネイティブのLinuxサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要なんだ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールをしなきゃいけないよ。簡単にセットアップできる[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを使って準備してね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理しやすいようにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用のバイナリが強制的にインストールされるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででV-Risingサーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

設定は**ServerGameSettings.json**と**ServerHostSettings.json**の2つのファイルで行えるよ。これらはSettingsフォルダ内にあるから、nanoなどで編集してみてね。
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

V-Risingの[サーバー設定](vrising-configuration.md)ガイドも見て、どんなオプションがあるかチェックしてみよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、例として用意されているバッチファイルのコピーを作るのがおすすめ。
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

必要に応じてファイルを編集してもOK。準備ができたら、以下のコマンドで新しい**start_server.bat**を実行しよう。Wine互換レイヤーを通して起動するために、**xvfb-run**と**wine**を付けるのを忘れずに。
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。別の方法として、サーバーリストの下部検索バーに`[あなたのIPアドレス]:8211`を入力して直接接続もできるよ。

## まとめ

おめでとう！これで専用サーバーにV-Risingサーバーを無事インストール＆設定できたよ！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、ゲームサーバーをサービスとして登録する方法を学ぶのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるからね。

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！