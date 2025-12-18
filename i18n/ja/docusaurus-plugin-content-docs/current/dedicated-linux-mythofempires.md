---
id: dedicated-linux-mythofempires
title: "専用サーバー：Myth of Empires 専用サーバー Linux セットアップ"
description: "LinuxにMyth of Empires専用サーバーをインストールしてゲームサーバーのレンタル環境を最適化する方法 → 今すぐチェック"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにMyth of Empires専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

SteamCMDをLinuxサーバーで初めて使う場合は、最初にセットアップが必要だよ。必ず[SteamCMD Linuxセットアップ](dedicated-linux-steamcmd.md)ガイドを見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

:::info Wine互換レイヤー
Myth of Empiresは現状ネイティブのLinuxサーバービルドを提供していないから、Windows版サーバーをLinuxで動かすために追加の準備が必要だよ。

Linuxサーバーで初めて使う場合は、一度だけ**Wine**互換レイヤーのインストールをしよう。簡単な[Wine互換レイヤーセットアップ](dedicated-linux-wine.md)ガイドを使って準備してね。
:::

## インストール

まずは`steam`ユーザーでログインして、整理のためにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってインストールを開始しよう。`+@sSteamCmdForcePlatformType windows`パラメータを使うことで、Windows用バイナリが強制的にインストールされるよ。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででMyth of Empiresサーバーのセットアップは完了。サーバーの設定はサーバーディレクトリ内のいろんな設定ファイルで行えるよ。

設定パラメータはSavedフォルダ内の`.ini`ファイルを編集して調整できる。`ls`コマンドでどんなファイルがあるか確認してみよう。
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

ファイルを編集するには、`nano ./[filename].ini`でnanoエディタを開くだけ。

Myth of Empiresの[サーバー設定ガイド](moe-configuration.md)で、使える設定項目とその意味をチェックしてみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、以下のコマンドで**MOEServer.exe**を実行するよ。Wine互換レイヤー経由で動かすために、**xvfb-run**と**wine**を付けるのを忘れずに。
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

コマンドプロンプトにログが表示されたら起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待とう。接続は**カスタムサーバー**タブで`[あなたのIPアドレス]:15636`を検索すればOK。

## まとめ

おめでとう！専用サーバーにMyth of Empiresサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスセットアップ](dedicated-linux-create-gameservice.md)ガイドを見て、ゲームサーバーをサービス化する方法を学ぶのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなの助けになるよ！