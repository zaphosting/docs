---
id: vserver-linux-cscz
title: "VPS: Counter-Strike: Condition Zero 専用サーバー Linux セットアップ"
description: "Linux VPSでCounter-Strike: Condition Zero専用サーバーを簡単にホスティングする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにCounter-Strike: Condition Zero専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](vserver-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてね。SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップも必要だよ。必ず[SteamCMD Linuxセットアップ](vserver-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを開始できるよ。`steam`ユーザーに直接インストールされるから安心してね。
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから確認してね。

## 設定

ここまででCounter-Strike: Condition Zeroサーバーのセットアップは完了だよ。さらに細かいサーバー設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに戻って、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## サーバーの起動＆接続

さあ、サーバーを起動しよう。ゲームのメインディレクトリに移動して、以下の起動コマンドを実行してね：
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

コマンドプロンプトにログが表示されれば起動成功のサインだよ。初回起動はセットアップのため少し時間がかかることもあるから気長に待ってね。もしくは、サーバーリストの下部検索バーで`[your_ip_address]:2456`を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにCounter-Strike: Condition Zeroサーバーを無事インストール＆設定できたね！次のステップとして、[Linuxサービスのセットアップ](vserver-linux-create-gameservice.md)ガイドを見てみて。新しい専用ゲームサーバーをサービスとして設定する方法が載っていて、起動時の自動起動や自動アップデート、ログ管理など便利な機能が使えるよ！

質問やサポートが必要なときは、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />