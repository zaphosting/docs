---
id: dedicated-linux-enshrouded
title: "専用サーバー：Enshrouded 専用サーバー Linux セットアップ"
description: "LinuxでEnshrouded専用サーバーをインストールしてスムーズにゲームサーバーをホスティング＆管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにEnshrouded専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
Enshroudedは現状、Linuxネイティブのサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要だよ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールを済ませておこう。簡単な[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを使って準備してね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを開始しよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用バイナリを強制的にインストールできるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででEnshroudedサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

設定はルートディレクトリにある**enshrouded_server.json**ファイルを編集すればOK。
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

利用可能なサーバーオプションや詳細はEnshroudedの[サーバー設定ガイド](enshrouded-configuration.md)を見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで**enshrouded_server.exe**を実行するよ。Wine互換レイヤー経由で動かすために、**xvfb-run**と**wine**を付けるのを忘れずに。
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

コマンドプロンプトにたくさんログが流れるはず。`[Session] 'HostOnline' (up)!`というログが出たら起動成功のサイン。あとは**Find Games**タブでサーバー情報を追加して直接接続できるよ：`[your_ip_address]:15636`

## まとめ

おめでとう！専用サーバーにEnshroudedサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ。

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなの助けになるよ！

<InlineVoucher />