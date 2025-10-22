---
id: dedicated-linux-cs2
title: "専用サーバー：Counter-Strike 2 専用サーバー Linux セットアップ"
description: "Linux VPSにCounter-Strike 2専用サーバーをセットアップして、快適なゲームサーバーのホスティングを実現しよう → 今すぐチェック"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにCounter-Strike 2専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。やり方がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーにログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを開始できるよ。`steam`ユーザーに直接インストールされるから安心してね。
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 730 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから確認してね。

## 設定

ここまででCounter-Strike 2サーバーのセットアップは完了だよ。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに移動して、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに登録する必要があるよ。このトークンはSteamでサーバーを認証するためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で生成できるよ。ゲームIDは730（Counter-Strike 2）を使ってね。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`を追加して登録しよう。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドを実行してね：
```
./cs2 -dedicated +map de_dust2
```

コマンドプロンプトにログが表示されて起動が成功したことがわかるはず。初回起動はセットアップの関係で少し時間がかかることもあるよ。または、サーバーリストの下部検索バーに`[あなたのIPアドレス]:2456`を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにCounter-Strike 2サーバーのインストールと設定が無事完了したね！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービスとして登録する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />