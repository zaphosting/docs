---
id: vserver-linux-nmrih
title: "VPS: No More Room In Hell 専用サーバー Linux セットアップ"
description: "Linux VPS に No More Room In Hell 専用サーバーをセットアップして、スムーズなゲームサーバーのホスティングを実現する方法 → 今すぐチェック"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに No More Room In Hell 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。SteamCMD を初めて使うなら、最初のセットアップも必要だから、[SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て SteamCMD がちゃんと準備できていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、次のコマンドで SteamCMD を使って簡単にインストールを始められるよ。`steam` ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/nmrih-ds' +login anonymous +app_update 317670 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで No More Room In Hell サーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg` フォルダの中にある `server.cfg` ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/nmrih-ds/nmrih/cfg/server.cfg
```

## GSL トークンの登録

他のプレイヤーがサーバーに参加するには、ゲームサーバーログイントークン（GSLT）を作成してサーバーに設定する必要があるよ。このトークンは Steam でサーバーを認証するためのもの。GSLT は http://steamcommunity.com/dev/managegameservers で作成できるよ。ゲームIDは 317670（No More Room In Hell）を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加しよう。

## サーバーの起動と接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、次のコマンドを実行してね：
```
./srcds_run -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップの関係で少し時間がかかることもあるよ。別の方法として、サーバーリストの下の検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に No More Room In Hell サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービス化する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />