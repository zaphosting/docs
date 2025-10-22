---
id: vserver-linux-soulmask
title: "VPS: Soulmask 専用サーバー Linux セットアップ"
description: "Linux VPS に Soulmask 専用サーバーを素早く効率的にインストール＆設定する方法 → 今すぐチェック"
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Soulmask 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

また、Linux サーバーで SteamCMD を初めて使う場合は、最初のセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理しやすいようにホームディレクトリ `/home/steam` に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使ってインストールを開始しよう。これで `steam` ユーザーのまま簡単にインストールできるよ。
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで Soulmask サーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルでできるよ。

設定パラメータは、Saved フォルダ内の **Engine.ini** ファイルを編集すれば調整可能。
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、**StartServer.sh** 実行ファイルを以下のコマンドで起動してね。
```
/home/steam/Soulmask-Server/StartServer.sh
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待とう。もしくは、サーバーリストの下部検索バーに `[your_ip_address]:18888` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に Soulmask サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見てみて。新しい専用ゲームサーバーをサービス化する方法を解説していて、起動時の自動起動や自動アップデート、ログ管理など色んなメリットがあるよ！

もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />