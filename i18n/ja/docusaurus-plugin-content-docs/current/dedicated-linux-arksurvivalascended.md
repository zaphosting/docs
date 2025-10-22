---
id: dedicated-linux-arksurvivalascended
title: "専用サーバー：ARK Survival Ascended 専用サーバー Linux セットアップ"
description: "LinuxでARK: Survival Ascended専用サーバーをセットアップして、快適なゲームプレイとサーバー管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにARK: Survival Ascended専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？専用サーバーに**ZAP GS/TS3インターフェース**を直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ、[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
ARK: Survival Ascendedは現時点でLinuxネイティブのサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要なんだ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールをしよう。簡単にセットアップできる[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを参考にしてね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを開始しよう。`steam`ユーザーのまま実行するよ。
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

ダウンロードには時間がかかることがあるから気長に待ってね。完了すると成功メッセージが表示されるよ。

## 設定

ここまででARK: Survival Ascendedサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

設定はSavedフォルダ内にある**GameUserSettings.ini**ファイルを編集して調整しよう。

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

設定項目の詳細や意味は[ARK: Survival Ascended サーバー設定ガイド](ark-configuration.md)を見てね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで**ArkAscendedServer.exe**を実行するよ。Wine互換レイヤーを使うために**xvfb-run**と**wine**を付けて実行してね。
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
残念ながら、LinuxではAnti-CheatのBattleye版サーバーは動かせないよ。Anti-Cheatが全く対応していないからね。
:::

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることもあるから気長に待とう。もしくは、サーバーリストの検索バーに`[あなたのIPアドレス]:7777`を入力して直接接続もできるよ。

## まとめ

おめでとう！専用サーバーにARK: Survival Ascendedサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ。

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />