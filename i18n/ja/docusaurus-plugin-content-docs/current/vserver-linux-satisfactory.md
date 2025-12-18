---
id: vserver-linux-satisfactory
title: "VPS: Satisfactory 専用サーバー Linux セットアップ"
description: "Linux VPS に Satisfactory 専用サーバーをセットアップして、スムーズなゲームサーバーのホスティングと管理を実現する方法 → 今すぐチェック"
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Satisfactory 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

また、Linux サーバーで SteamCMD を初めて使う場合は、最初のセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリ `/home/steam` に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを開始できるよ。`steam` ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

ダウンロードが完了するまで少し時間がかかることもあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまでで Satisfactory サーバーのセットアップは完了！さらに細かい設定は、サーバーディレクトリ内の設定ファイルで行えるよ。

設定パラメータは、Saved フォルダ内にある **Engine.ini** と **GameUserSettings.ini** のファイルを編集して調整できるよ。
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## サーバーの起動＆接続

さあ、サーバーを起動しよう。メインのゲームディレクトリに移動して、**FactoryServer.sh** シェルファイルを実行してね。
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

コマンドプロンプトにログが表示されれば起動成功のサインだよ。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下の検索バーに `[your_ip_address]:15777` と入力して直接接続もできるよ。

## まとめ

おめでとう！VPS に Satisfactory サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービスとして登録する方法をチェックしよう。これで起動時の自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />