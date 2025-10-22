---
id: vserver-linux-arksurvivalascended
title: "VPS: ARK Survival Ascended 専用サーバー Linux セットアップ"
description: "Linux VPSにARK: Survival Ascended 専用サーバーをセットアップして、快適なゲームプレイ管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにARK: Survival Ascended 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3 インターフェースのガイド](vserver-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ、[SSH初期アクセスガイド](vserver-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](vserver-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進んでね。

:::info Wine互換レイヤーについて
ARK: Survival Ascendedは現時点でLinuxネイティブのサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要だよ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールが必要。簡単にセットアップできる[Wine互換レイヤーセットアップガイド](vserver-linux-wine.md)を使って準備してね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを開始しよう。これで`steam`ユーザーのディレクトリに直接インストールされるよ。
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

ダウンロードには時間がかかることがあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまででARK: Survival Ascendedサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

設定パラメータはすべて、Savedフォルダ内にある**GameUserSettings.ini**ファイルを編集して調整できる。
```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

設定項目の詳細や意味は、[ARK: Survival Ascended サーバー設定ガイド](ark-configuration.md)を見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下のコマンドで**ArkAscendedServer.exe**を実行するよ。Wine互換レイヤー経由で動かすために、**xvfb-run**と**wine**コマンドを必ず付けてね。
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
残念ながら、LinuxではアンチチートのBattleye対応サーバーは動かせないよ。BattleyeがLinuxに対応していないからね。
:::

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。別の方法として、サーバーリストの検索バーに`[あなたのIPアドレス]:7777`を入力して直接接続もできるよ。

## まとめ

おめでとう！VPSにARK: Survival Ascendedサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスセットアップガイド](vserver-linux-create-gameservice.md)を見て、専用ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日対応してるから安心して！

<InlineVoucher />