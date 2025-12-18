---
id: dedicated-linux-hl2
title: "専用サーバー：Half-Life 2 専用サーバー Linux セットアップ"
description: "Linux VPS に Half-Life 2 専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Half-Life 2 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは [GS/TS3 インターフェース](dedicated-linux-gs-interface.md) をチェックしてみてね。
:::

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](dedicated-linux-ssh.md) ガイドを参考にしてね。SteamCMD を初めて使うなら、最初のセットアップも必要だよ。必ず [SteamCMD Linux セットアップ](dedicated-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを開始できるよ。
```
steamcmd +force_install_dir '/home/steam/hl2-ds' +login anonymous +app_update 232370 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで Half-Life 2 サーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg` フォルダ内の `server.cfg` ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/hl2-ds/hl2mp/cfg/server.cfg
```

## GSL トークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンは Steam でサーバーを認証するためのもの。GSLT は http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは 232370（Half-Life 2）を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドを実行してね。
```
./srcds_run -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下の検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に Half-Life 2 サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](dedicated-linux-create-gameservice.md) ガイドを見てみて。これを使うと、サーバーの自動起動や自動アップデート、ログ管理などが超ラクになるよ。

質問や困ったことがあれば、いつでもサポートチームに連絡してね。毎日対応してるから安心して！🙂