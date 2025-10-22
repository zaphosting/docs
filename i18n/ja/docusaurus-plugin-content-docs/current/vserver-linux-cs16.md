---
id: vserver-linux-cs16
title: "VPS：Counter-Strike 1.6 専用サーバー Linux セットアップ"
description: "Linux VPS に Counter-Strike 1.6 専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Counter-Strike 1.6 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。SteamCMD を初めて使う場合は、最初のセットアップも必要だから、[SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、次のコマンドで SteamCMD を使って簡単にインストールを始められるよ。`steam` ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで Counter-Strike 1.6 サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg` フォルダ内の `server.cfg` ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## GSL トークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を作成してサーバーに登録する必要があるよ。このトークンは Steam でサーバーを認証するためのもの。GSLT は http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは 90（Counter-Strike 1.6）を使ってね。

トークンを取得したら、起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加してサーバーに設定しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、次のコマンドを実行してね：
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に Counter-Strike 1.6 サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービス化する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />