---
id: vserver-linux-dods
title: "VPS: Day of Defeat: Source 専用サーバー Linux セットアップ"
description: "Linux VPSにDay of Defeat: Source専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにDay of Defeat: Source専用サーバーをインストールしたい？それならここがピッタリ。この記事ではSteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェース](vserver-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使うなら、最初のセットアップも必要だよ。必ず[SteamCMD Linuxセットアップ](vserver-linux-steamcmd.md)ガイドを見てSteamCMDを完全にセットアップしてから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを始められるよ。`steam`ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででDay of Defeat: Sourceサーバーのセットアップは完了。さらに細かい設定をしたいなら起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーのオプションを編集できるよ。
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加するには、ゲームサーバーログイントークン（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で生成できる。ゲームIDは232290（Day of Defeat: Source）を使ってね。

トークンを取得したら、起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下の起動コマンドを実行してね：
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待とう。もしくは、サーバーリストの検索バーに`[あなたのIPアドレス]:2456`を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにDay of Defeat: Sourceサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップ](vserver-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービスとして登録する方法を学ぶのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />