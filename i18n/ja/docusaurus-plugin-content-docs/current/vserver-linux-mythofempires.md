---
id: vserver-linux-mythofempires
title: "VPS: Myth of Empires 専用サーバー Linux セットアップ"
description: "Linux VPS に Myth of Empires 専用サーバーをインストールしてスムーズにゲームサーバーをホスティングする方法 → 今すぐチェック"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Myth of Empires 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

SteamCMD を Linux サーバーで初めて使う場合は、最初のセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

:::info Wine 互換レイヤー
Myth of Empires は現状、Linux ネイティブのサーバービルドを提供していないから、Windows サーバービルドを Linux で動かすために追加の準備が必要だよ。

Linux サーバーで初めて使う場合は、一度だけ **Wine** 互換レイヤーのインストールをしよう。簡単な [Wine 互換レイヤーセットアップ](vserver-linux-wine.md) ガイドを使ってセットアップしてね。
:::

## インストール

まずは `steam` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使ってインストールを始めよう。`+@sSteamCmdForcePlatformType windows` パラメータを使うことで、Windows バイナリが強制的にインストールされるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

ダウンロードには時間がかかることがあるから気長に待ってね。成功すると完了メッセージが表示されるよ。

## 設定

ここまでで Myth of Empires サーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内のいろんな設定ファイルで調整できるよ。

設定パラメータは Saved フォルダ内の `.ini` ファイルを編集して変更可能。どんなファイルがあるかは `ls` コマンドで確認しよう。
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

ファイルを編集するには、`nano ./[filename].ini` で nano エディタを開くだけ。

詳しい設定内容は Myth of Empires の [サーバー設定](moe-configuration.md) ガイドを見てみてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下のコマンドで **MOEServer.exe** を実行。Wine 互換レイヤー経由で動かすために、`xvfb-run` と `wine` を付けるのを忘れずに。
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

コマンドプロンプトにログが表示されたら起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。接続は **カスタムサーバー** タブで `[your_ip_address]:15636` を指定すればOK。

## まとめ

おめでとう！VPS に Myth of Empires サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日対応してるから安心して！

<InlineVoucher />