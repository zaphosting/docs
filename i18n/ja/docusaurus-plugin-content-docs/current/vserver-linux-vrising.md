---
id: vserver-linux-vrising
title: "VPS: V-Rising 専用サーバー Linux セットアップ"
description: "Linux VPS に V-Rising 専用サーバーを効率よくインストール＆起動する方法 → 今すぐチェック"
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに V-Rising 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてみてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

SteamCMD を Linux サーバーで初めて使う場合は、最初にセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

:::info Wine 互換レイヤー
V-Rising は現状ネイティブの Linux サーバービルドを提供していないから、Windows サーバービルドを Linux で動かすために追加の準備が必要なんだ。

Linux サーバーで初めて使う場合は、一度だけ **Wine** 互換レイヤーのインストールを済ませておこう。簡単な [Wine 互換レイヤーセットアップ](vserver-linux-wine.md) ガイドを使ってセットアップしてね。
:::

## インストール

まずは `steam` ユーザーでログインして、整理しやすいようにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows` パラメータを使うことで、Windows 用のバイナリを強制的にインストールできるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで V-Rising サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

設定は **ServerGameSettings.json** と **ServerHostSettings.json** のファイルで調整できるよ。これらは Settings フォルダ内にあるから、nano などで編集してみてね。
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

V-Rising の [サーバー設定](vrising-configuration.md) ガイドも見てみて。どんなオプションがあるか、何ができるか詳しく載ってるよ。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、例のバッチファイルをコピーするのがおすすめ。
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

必要ならファイルを編集してもOK。準備ができたら、以下のコマンドで新しい **start_server.bat** を実行しよう。Wine 互換レイヤーを通して起動するために、**xvfb-run** と **wine** を付けるのを忘れずに。
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることもあるから気長に待ってね。別の方法として、サーバーリストの下部検索バーに `[your_ip_address]:8211` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に V-Rising サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見てみて。新しい専用ゲームサーバーをサービスとして登録する方法を解説していて、起動の自動化や自動アップデート、ログ管理など色んなメリットがあるよ。

もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />