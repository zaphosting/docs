---
id: dedicated-linux-arksurvivalascended
title: "専用サーバー: ARK Survival Ascended 専用サーバー Linux セットアップ"
description: "LinuxでARK: Survival Ascended専用サーバーをセットアップして、快適なゲームプレイとサーバー管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにARK: Survival Ascended専用サーバーサービスをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進んでね。

:::info Wine互換レイヤー
ARK: Survival Ascendedは現時点でネイティブのLinuxサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要だよ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールをしなきゃいけない。簡単にセットアップできる[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを使って準備してね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理しやすいように`home/steam`のルートディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを始めよう。`steam`ユーザーに直接インストールされるよ。
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

ダウンロードが完了するまで気長に待ってね。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるよ。

## 設定

ここまででARK: Survival Ascendedサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルでできるよ。

設定はSavedフォルダ内にある**GameUserSettings.ini**ファイルを編集して調整できる。
```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

設定項目の詳細や意味は[ARK: Survival Ascendedサーバー設定ガイド](ark-configuration.md)を見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下のコマンドで**ArkAscendedServer.exe**を実行するよ。Wine互換レイヤー経由で動かすために**xvfb-run**と**wine**を使うのを忘れずに。
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
残念ながら、LinuxではAnti-CheatのBattleyeバージョンはサポートされていないよ。Anti-Cheat自体がLinuxに対応していないからね。
:::

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。もしくは、サーバーリストの検索バーに`[あなたのIPアドレス]:7777`を入力して直接接続もできるよ。

## まとめ

おめでとう！専用サーバーにARK: Survival Ascendedを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスセットアップガイド](dedicated-linux-create-gameservice.md)を見て、新しい専用ゲームサーバーをサービスとして登録するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！