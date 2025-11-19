---
id: dedicated-linux-enshrouded
title: "専用サーバー：Enshrouded 専用サーバー Linux セットアップ"
description: "LinuxでEnshrouded専用サーバーをインストールしてスムーズにゲームサーバーをホスティング＆管理する方法 → 今すぐチェック"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにEnshrouded専用サーバーサービスをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見てSteamCMDを完全にセットアップしてから進もう。

:::info Wine互換レイヤーについて
Enshroudedは現時点でネイティブのLinuxサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要なんだ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールをしよう。簡単な[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを使って準備してね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windowsバイナリを強制的にインストールできるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

ダウンロードには時間がかかることもあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまででEnshroudedサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルでできるよ。

設定はルートディレクトリにある**enshrouded_server.json**ファイルを編集して調整しよう。
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

利用可能なサーバーオプションや詳細はEnshroudedの[サーバー設定ガイド](enshrouded-configuration.md)を見てね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下のコマンドで**enshrouded_server.exe**を実行するよ。Wine互換レイヤー経由で動かすために**xvfb-run**と**wine**を使うのを忘れずに。
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

コマンドプロンプトにたくさんのログが表示されるはず。`[Session] 'HostOnline' (up)!`というログが出たら起動成功のサイン！  
ゲームの「ゲームを探す」タブでサーバー情報を `[your_ip_address]:15636` の形式で追加すれば直接接続できるよ。

## まとめ

おめでとう！専用サーバーにEnshroudedサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップガイド](dedicated-linux-create-gameservice.md)を見て、ゲームサーバーをサービスとして登録するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！