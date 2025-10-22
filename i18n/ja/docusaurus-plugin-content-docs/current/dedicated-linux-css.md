---
id: dedicated-linux-css
title: "専用サーバー：Counter-Strike: Source 専用サーバー Linux セットアップ"
description: "Linux VPS に Counter-Strike: Source 専用サーバーをセットアップして、スムーズなゲームサーバー運用を始めよう → 今すぐ詳しく見る"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Counter-Strike: Source 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3 インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMD を初めて使う場合は、最初のセットアップも必要だから、[SteamCMD Linux セットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを始められるよ。`steam` ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 232330 validate +quit
```

ダウンロードが完了するまで少し時間がかかることもあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまでで Counter-Strike: Source サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg` フォルダ内の `server.cfg` ファイルを開いてサーバー設定を編集できるよ。
```
nano /home/steam/css-ds/cstrike/cfg/server.cfg
```

## GSL トークンの登録

他のプレイヤーがあなたのサーバーに参加するには、ゲームサーバーログイントークン（GSLT）を生成してサーバーに登録する必要があるよ。このトークンは Steam でサーバーを認証するためのもの。GSLT は http://steamcommunity.com/dev/managegameservers で作成できるよ。ゲームIDは 232330（Counter-Strike: Source）を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドを実行してね：
```
./srcds_run -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることもあるから気長に待ってね。もしくは、サーバーリストの検索バーに `[あなたのIPアドレス]:2456` と入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に Counter-Strike: Source サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービス化する方法を学ぶのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />