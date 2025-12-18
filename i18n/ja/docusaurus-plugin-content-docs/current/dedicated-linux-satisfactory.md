---
id: dedicated-linux-satisfactory
title: "専用サーバー：Satisfactory 専用サーバー Linux セットアップ"
description: "LinuxサーバーにSatisfactory専用サーバーをインストール＆設定して、スムーズにゲームサーバーをホスティングしよう → 今すぐ詳しく見る"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにSatisfactory専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ、[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップガイド](dedicated-linux-steamcmd.md)を見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーにログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを開始できるよ。`steam`ユーザーに直接インストールされるから安心してね。
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから確認してね。

## 設定

ここまででSatisfactoryサーバーのセットアップは完了！さらに細かい設定は、サーバーディレクトリ内の設定ファイルで行えるよ。

設定パラメータは、Savedフォルダ内にある**Engine.ini**と**GameUserSettings.ini**を編集すれば調整できるよ。
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、**FactoryServer.sh**シェルファイルを実行してね。
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

コマンドプロンプトにログが表示されれば起動成功のサインだよ。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下の検索バーに`[あなたのIPアドレス]:15777`を入力して直接接続もできるよ。

## まとめ

おめでとう！専用サーバーにSatisfactoryサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップガイド](dedicated-linux-create-gameservice.md)を見て、専用ゲームサーバーをサービス化する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！