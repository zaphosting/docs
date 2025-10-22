---
id: dedicated-linux-palworld
title: "専用サーバー：Palworld 専用サーバー Linux セットアップ"
description: "LinuxでPalworld専用サーバーをセットアップ＆設定して、スムーズなゲームプレイ管理を実現しよう → 今すぐチェック"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにPalworld専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにPalworld専用サーバーをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップガイド](dedicated-linux-steamcmd.md)を見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーにログインして、整理しやすいようにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってPalworldサーバーのインストールを始めよう。`steam`ユーザーで直接インストールできるよ。
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででPalworldサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルでできるよ。

まずはデフォルトの設定ファイルをコピーして、編集用に保存フォルダに移そう。
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

コピーできたら、新しい**PalWorldSettings.ini**ファイルを開いて主要な設定パラメータを編集しよう。
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Palworldの[サーバー設定ガイド](palworld-configuration.md)で、使えるオプションやそれぞれの意味をチェックしてみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、**PalServer.sh**シェルファイルを実行するだけ。
```
/home/steam/Palworld-Server/PalServer.sh
```

コマンドプロンプトにログが表示されて、ゲームのバージョンログが出れば起動成功のサイン。問題なければサーバーリストに表示されるはず。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:8211` を入力して直接接続もできるよ。

## まとめ

おめでとう！専用サーバーにPalworldサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップガイド](dedicated-linux-create-gameservice.md)を見て、ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />