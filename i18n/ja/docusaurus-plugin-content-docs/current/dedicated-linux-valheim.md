---
id: dedicated-linux-valheim
title: "専用サーバー: Valheim 専用サーバー Linux セットアップ"
description: "LinuxでValheim専用サーバーをセットアップして、効率的にゲームサーバーをホストし、サーバーのパフォーマンスを最適化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにValheim専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだから安心してね。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスのセットアップが数クリックで完了しちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてみてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使って簡単にインストールを開始できるよ。
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででValheimサーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。

ホームディレクトリに移動して、`.sh`ファイルを開いてパラメータを編集できるよ。
```
nano /home/steam/Valheim-Server/start_server.sh
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、**start_server.sh**シェルファイルを実行してね。
```
/home/steam/Valheim-Server/start_server.sh
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップのため時間がかかることがあるから気長に待とう。もしくは、サーバーリストの下部検索バーで `[your_ip_address]:2456` を入力して直接接続もできるよ。

:::info
もし接続できずにコンソールに`PlayFab`エラーが出る場合は、Linux版の現状の問題でクロスプレイサポートを無効にする必要があるかも。`nano /home/steam/Valheim-Server/start_server.sh`を開いて、`-crossplay`フラグを削除してみてね。

クロスプレイが必要な場合は、代わりにWindows版をインストールして**Wine**を互換レイヤーとして使う方法もあるよ。簡単な[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを参考にしてね。準備ができたら、SteamCMDでWindows版Valheimサーバーをインストールしよう：
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

インストール後は、以下のコマンドでWine経由でWindows版を起動できるよ：
`xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## まとめ

おめでとう！専用サーバーにValheimサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、新しい専用ゲームサーバーをサービスとして登録する方法を学ぶのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！