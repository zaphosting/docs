---
id: vserver-linux-palworld
title: "VPS: Palworld 専用サーバー Linux セットアップ"
description: "Linux VPS に Palworld 専用サーバーを効率よくセットアップして稼働させる方法をチェック → 今すぐ詳しく見る"
sidebar_label: Palworld
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Palworld 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

また、Linux サーバーで SteamCMD を初めて使う場合は、最初のセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーにログインして、整理のためにホームディレクトリ `home/steam` に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを開始できるよ。`steam` ユーザーに直接インストールされるから安心してね。
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから確認してね。

## 設定

ここまでで Palworld サーバーのセットアップは完了だよ。さらに細かい設定は、サーバーディレクトリ内の設定ファイルで行えるよ。

まずはデフォルトの設定ファイルをコピーして、編集用に保存フォルダに追加しよう。
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

コピーができたら、新しい **PalWorldSettings.ini** ファイルを開いて主要な設定パラメータを編集しよう。
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Palworld の設定オプションや詳細は、[サーバー設定](palworld-configuration.md) ガイドを見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、**PalServer.sh** シェルファイルを実行してね。
```
/home/steam/Palworld-Server/PalServer.sh
```

コマンドプロンプトにログが表示されて、ゲームバージョンのログが出れば起動成功のサインだよ。問題なければサーバーリストに表示されるはず。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:8211` を使って直接接続もできるよ。

## まとめ

おめでとう！VPS に Palworld サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見てみて。新しい専用ゲームサーバーをサービスとして登録する方法が載ってるよ。これで自動起動や自動アップデート、ログ管理などが超ラクになるから超おすすめ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />