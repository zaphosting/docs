---
id: vserver-linux-tf2
title: "VPS：Team Fortress 2 専用サーバー Linux セットアップ"
description: "Linux VPS に Team Fortress 2 専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Team Fortress 2 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてみてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。SteamCMD を初めて使う場合は、最初のセットアップも必要だから、[SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

`steam` ユーザーでログインして、整理のためにホームディレクトリ `home/steam` に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを開始できるよ。
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで Team Fortress 2 サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに移動して、`cfg` フォルダ内の `server.cfg` ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## GSL トークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに登録する必要があるよ。このトークンは Steam でサーバーを認証するためのもの。GSLT は http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは Team Fortress 2 の 232250 を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドを実行してね。
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下の検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に Team Fortress 2 サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービスとして登録するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />