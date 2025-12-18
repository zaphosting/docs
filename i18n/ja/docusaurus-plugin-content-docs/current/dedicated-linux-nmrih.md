---
id: dedicated-linux-nmrih
title: "専用サーバー：No More Room In Hell 専用サーバー Linuxセットアップ"
description: "Linux VPSにNo More Room In Hell専用サーバーを効率的にセットアップする方法を解説 → 今すぐチェック"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにNo More Room In Hell専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHでVPSに接続しよう。もしやり方がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを始められるよ。`steam`ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/nmrih-ds' +login anonymous +app_update 317670 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででNo More Room In Hellサーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/nmrih-ds/nmrih/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは317670（No More Room In Hell用）を使ってね。

トークンを取得したら、起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加しよう。

## サーバーの起動＆接続

いよいよサーバーを起動するよ。ゲームのメインディレクトリに移動して、以下のコマンドを実行してね：
```
./srcds_run -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにNo More Room In Hellサーバーを無事インストール＆設定できたね！次のステップとして、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドをチェックするのがおすすめ。これで専用ゲームサーバーをサービス化できて、起動の自動化や自動アップデート、ログ管理など色んな便利機能が使えるよ！

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して 🙂