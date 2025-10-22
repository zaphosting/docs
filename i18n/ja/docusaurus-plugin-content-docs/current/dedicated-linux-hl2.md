---
id: dedicated-linux-hl2
title: "専用サーバー：Half-Life 2 専用サーバー Linux セットアップ"
description: "Linux VPSにHalf-Life 2専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにHalf-Life 2専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。やり方がわからなければ[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だよ。[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを使ってSteamCMDを完全にセットアップしてから次に進もう。

## インストール

まずは`steam`ユーザーにログインして、整理しやすいようにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、次のコマンドでSteamCMDを使って簡単にインストールを始められるよ。`steam`ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/hl2-ds' +login anonymous +app_update 232370 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででHalf-Life 2サーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/hl2-ds/hl2mp/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加するには、ゲームサーバーログイントークン（GSLT）を生成してサーバーに登録する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で作成できるよ。ゲームIDは232370（Half-Life 2用）を使ってね。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、次のコマンドを実行してね：
```
./srcds_run -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの検索バーに `[your_ip_address]:2456` と入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにHalf-Life 2サーバーのインストールと設定が無事完了したよ！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見てみてね。これを使うと、サーバーの自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />