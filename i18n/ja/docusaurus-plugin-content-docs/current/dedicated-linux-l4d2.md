---
id: dedicated-linux-l4d2
title: "専用サーバー：Left 4 Dead 2 専用サーバー Linux セットアップ"
description: "Linux VPSにLeft 4 Dead 2専用サーバーをセットアップして、スムーズなマルチプレイヤーゲームを楽しもう → 今すぐ詳しく見る"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、Left 4 Dead 2専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理しやすいようにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインしたら、以下のコマンドでSteamCMDを使って簡単にインストールを始められるよ。`steam`ユーザーで直接実行しよう。
```
steamcmd +force_install_dir '/home/steam/l4d2-ds' +login anonymous +app_update 222840 validate +quit
```

ダウンロードが完了するまで気長に待ってね。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心して。

## 設定

ここまででLeft 4 Dead 2サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに移動して、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/l4d2-ds/l4d2/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamでサーバーを認証するためのもの。GSLTを作るには、http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 222840（Left 4 Dead 2）を使ってトークンを作成してね。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動するよ。ゲームのメインディレクトリに移動して、以下の起動コマンドを実行しよう：
```
./srcds_run -console -game left4dead2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下の検索バーに`[あなたのIPアドレス]:2456`を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにLeft 4 Dead 2サーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービスとして登録する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂