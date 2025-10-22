---
id: dedicated-linux-cscz
title: "専用サーバー: Counter-Strike: Condition Zero 専用サーバー Linux セットアップ"
description: "Linux VPSでCounter-Strike: Condition Zero専用サーバーをセットアップして、スムーズなゲーム管理を実現 → 今すぐ詳しくチェック"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにCounter-Strike: Condition Zero専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理しやすいようにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを始めよう。`steam`ユーザーに直接インストールされるよ。
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

ダウンロードが完了するまで気長に待ってね。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心して。

## 設定

ここまででCounter-Strike: Condition Zeroサーバーのセットアップは完了！さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## サーバーの起動＆接続

さあ、サーバーを起動しよう。ゲームのメインディレクトリに移動して、以下の起動コマンドを実行してね：
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの下の検索バーに`[your_ip_address]:2456`を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにCounter-Strike: Condition Zeroサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、専用ゲームサーバーをサービスとして登録する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />