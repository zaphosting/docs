---
id: vserver-linux-cs2
title: "VPS: Counter-Strike 2 専用サーバー Linux セットアップ"
description: "Linux VPS に Counter-Strike 2 専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Counter-Strike 2 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。SteamCMD を初めて使う場合は、最初のセットアップも必要だから、[SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て SteamCMD がちゃんと準備できているか確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理しやすいようにホームディレクトリ `/home/steam` に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使ってインストールを始めよう。これで `steam` ユーザーの環境に直接インストールできるよ。
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 730 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで Counter-Strike 2 サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg` フォルダ内の `server.cfg` ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## GSL トークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を作成してサーバーに登録する必要があるよ。このトークンは Steam でサーバーを認証するためのもの。GSLT は http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは 730（Counter-Strike 2）を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドを実行してね。
```
./cs2 -dedicated +map de_dust2
```

コマンドプロンプトにログが表示されて起動が成功したことがわかるはず。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に Counter-Strike 2 サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />