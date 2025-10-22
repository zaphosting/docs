---
id: vserver-linux-avorion
title: "VPS: Avorion 専用サーバー Linux セットアップ"
description: "Linux VPS に Avorion 専用サーバーをセットアップして、スムーズなゲームサーバー運用と管理を実現する方法を解説 → 今すぐチェック"
sidebar_label: Avorion
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに Avorion 専用サーバーをインストールしたい？それならここがぴったり。この記事では、SteamCMD を使って Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。接続方法がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

また、Linux サーバーで SteamCMD を初めて使う場合は、最初のセットアップが必要だよ。必ず [SteamCMD Linux セットアップ](vserver-linux-steamcmd.md) ガイドを見て、SteamCMD が完全にセットアップされていることを確認してから進もう。

## インストール

まずは `steam` ユーザーにログインして、整理しやすいようにホームディレクトリ `/home/steam` に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドで SteamCMD を使って簡単にインストールを始められるよ。`steam` ユーザーのまま実行してね。
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまでで Avorion サーバーのセットアップは完了。サーバー設定は、先ほどコピーした **startserver.sh** ファイルを直接編集して行うよ。`nano /home/steam/Avorion-Server/startserver.sh` で開いて、サーバーのパラメータを調整しよう。

また、各銀河のセーブデータにある **server.ini** 設定ファイルを編集すれば、ワールド固有の設定も変更できるよ。このファイルはユーザーのホームフォルダ（通常は `steam`）に保存されているから、以下のコマンドで管理しよう。
```
# 現在のセーブデータを確認
ls /home/steam/.avorion/galaxies

# セーブデータの設定を編集
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## サーバーの起動と接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、例として用意されているバッチファイルのコピーを作成するのがおすすめ。
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

必要に応じてファイルを編集して準備ができたら、以下のコマンドで新しい **startserver.sh** バッチファイルを実行しよう。
```
/home/steam/Avorion-Server/startserver.sh
```

コマンドプロンプトにログが表示されれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。準備が整うとコンソールに `Server startup complete.` と表示されるよ。これでゲーム内のサーバーブラウザから、サーバーの IP アドレスとポート（デフォルトは 27000）を入力して直接接続できるようになるよ。

## まとめ

おめでとう！VPS に Avorion サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見て、専用ゲームサーバーをサービスとして登録する方法をチェックしよう。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />