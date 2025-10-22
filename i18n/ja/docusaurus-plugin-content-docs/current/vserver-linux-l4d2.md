---
id: vserver-linux-l4d2
title: "VPS: Left 4 Dead 2 専用サーバー Linux セットアップ"
description: "Linux VPS に Left 4 Dead 2 専用サーバーをセットアップして、快適なゲームプレイとサーバー管理を実現する方法 → 今すぐチェック"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、Left 4 Dead 2 専用サーバーをインストールしたい？ここがまさにその場所！このガイドでは、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説します。例では Ubuntu を使っていますが、他のディストリビューションでもほぼ同じ流れです。

:::tip
実は、**ZAP GS/TS3 インターフェース**を VPS に直接インストールできちゃうんです！これでゲームサーバーサービスを簡単にセットアップできて、ZAP-Hosting のダッシュボードと直結。数クリックで完了！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。SteamCMD を初めて使う場合は、最初のセットアップが必要だから、[SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを開始できるよ。`steam` ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/l4d2-ds' +login anonymous +app_update 222840 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで Left 4 Dead 2 サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg` フォルダ内の `server.cfg` ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/l4d2-ds/l4d2/cfg/server.cfg
```

## GSL トークンの登録

他のプレイヤーがサーバーに参加するには、ゲームサーバーログイントークン（GSLT）を生成してサーバーに登録する必要があるよ。このトークンは Steam でサーバーを認証するためのもの。GSLT は http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは Left 4 Dead 2 の 222840 を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下の起動コマンドを実行してね。
```
./srcds_run -console -game left4dead2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下部検索バーで `[your_ip_address]:2456` を検索して直接接続もできるよ。

## まとめ

おめでとう！VPS に Left 4 Dead 2 サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />