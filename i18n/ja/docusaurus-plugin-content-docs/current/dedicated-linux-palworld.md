---
id: dedicated-linux-palworld
title: "専用サーバー：Palworld 専用サーバー Linux セットアップ"
description: "LinuxでPalworld専用サーバーをセットアップ・設定して、スムーズなゲームプレイ管理を実現しよう → 今すぐチェック"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにPalworld専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップガイド](dedicated-linux-steamcmd.md)を見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーにログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってPalworldサーバーのインストールを始めよう。`steam`ユーザーに直接インストールされるよ。
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

ダウンロードが完了するまで少し時間がかかることがあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまででPalworldサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

まずはデフォルトの設定ファイルをコピーして、編集用に保存フォルダに移そう。
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

コピーができたら、新しい**PalWorldSettings.ini**ファイルを開いて主要な設定を編集しよう。
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

設定項目の詳細はPalworldの[サーバー設定ガイド](palworld-configuration.md)を見てみてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、**PalServer.sh**シェルファイルを実行してね。
```
/home/steam/Palworld-Server/PalServer.sh
```

コマンドプロンプトにログが表示されて、ゲームのバージョンログが見えれば起動成功のサイン。問題なければサーバーリストに表示されるよ。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:8211` を入力して直接接続もできるよ。

## まとめ

おめでとう！専用サーバーにPalworldサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップガイド](dedicated-linux-create-gameservice.md)を見て、ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！