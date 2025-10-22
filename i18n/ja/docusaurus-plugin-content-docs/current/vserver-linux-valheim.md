---
id: vserver-linux-valheim
title: "VPS: Valheim 専用サーバー Linux セットアップ"
description: "Linux VPS に Valheim 専用サーバーをセットアップして、快適なゲームプレイとサーバー管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Valheim 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてみてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

また、Linux サーバーで SteamCMD を初めて使う場合は、最初のセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを開始できるよ。`steam` ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

ダウンロードが完了するまで少し時間がかかることもあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまでで Valheim サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに移動して `.sh` ファイルを開くよ。ここでパラメータを編集できる。
```
nano /home/steam/Valheim-Server/start_server.sh
```

## サーバーの起動と接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、**start_server.sh** シェルファイルを実行してね。
```
/home/steam/Valheim-Server/start_server.sh
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下部検索バーで `[your_ip_address]:2456` を入力して直接接続もできるよ。

:::info
もし接続できずにコンソールで `PlayFab` エラーが出る場合は、Linux版の現状の問題でクロスプレイサポートを無効にする必要があるかも。`nano /home/steam/Valheim-Server/start_server.sh` を開いて `-crossplay` フラグを削除してみてね。

クロスプレイが必要な場合は、代わりに Windows 版をインストールして **Wine** を互換レイヤーとして使う方法もあるよ。簡単なセットアップは [Wine 互換レイヤーセットアップ](vserver-linux-wine.md) ガイドを参考にしてね。準備ができたら、SteamCMD で Windows 版 Valheim サーバーをインストールするコマンドは以下の通り。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

インストール後は、以下のコマンドで Wine 経由で Windows 版を起動できるよ：`xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## まとめ

おめでとう！VPS に Valheim サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、新しい専用ゲームサーバーをサービスとして登録する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理など色んな便利機能が使えるようになるよ！

もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />