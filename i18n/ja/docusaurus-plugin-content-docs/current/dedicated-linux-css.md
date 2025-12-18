---
id: dedicated-linux-css
title: "専用サーバー：Counter-Strike: Source 専用サーバー Linux セットアップ"
description: "Linux VPSにCounter-Strike: Source専用サーバーをセットアップして、スムーズなゲームサーバーのホスティングを実現しよう → 今すぐ詳しく見る"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにCounter-Strike: Source専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だから、[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを使ってSteamCMDを完全にセットアップしてから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを開始できるよ。`steam`ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 232330 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるよ。

## 設定

ここまででCounter-Strike: Sourceサーバーのセットアップは完了だよ。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに移動して、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/css-ds/cstrike/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに登録する必要があるよ。このトークンはSteamでサーバーを認証するためのもの。GSLTを作るには、http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 232330（Counter-Strike: Source用）でトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`を追加してね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下の起動コマンドを実行してね：
```
./srcds_run -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサインだよ。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下部検索バーで `[your_ip_address]:2456` を検索して直接接続もできるよ。

## まとめ

おめでとう！VPSにCounter-Strike: Sourceサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービスとして登録する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂