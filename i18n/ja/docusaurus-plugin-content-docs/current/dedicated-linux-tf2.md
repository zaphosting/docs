---
id: dedicated-linux-tf2
title: "専用サーバー: Team Fortress 2 専用サーバー Linux セットアップ"
description: "Linux VPSにTeam Fortress 2専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにTeam Fortress 2専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを開始できるよ。`steam`ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででTeam Fortress 2サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加するには、ゲームサーバーログイントークン（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で生成できる。ゲームIDは232250（Team Fortress 2用）を使ってね。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下の起動コマンドを実行してね：
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下部検索バーに`[あなたのIPアドレス]:2456`を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにTeam Fortress 2サーバーのインストールと設定が無事完了したよ！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドをチェックするのがおすすめ。これで専用ゲームサーバーをサービス化できて、起動の自動化や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />