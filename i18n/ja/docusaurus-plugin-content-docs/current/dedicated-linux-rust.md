---
id: dedicated-linux-rust
title: "専用サーバー：Rust 専用サーバー Linux セットアップ"
description: "Linux専用サーバーにRust専用サーバーを効率的にホストし、サーバー性能を最適化する方法を学ぼう → 今すぐチェック"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Linux専用サーバーを持っていて、そこにRust専用サーバーをインストールしたい？それならここがピッタリ。この記事では、SteamCMDを使ってLinuxサーバーにRust専用サーバーをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェースのガイド](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ、[SSH初期アクセスガイド](dedicated-linux-ssh.md)を参考にしてね。

また、LinuxサーバーでSteamCMDを初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップガイド](dedicated-linux-steamcmd.md)を見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理しやすいようにホームディレクトリ`home/steam`に移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、以下のコマンドでSteamCMDを使ってRustサーバーのインストールを始めよう。`steam`ユーザーに直接インストールされるよ。
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででRustサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

ホームディレクトリに戻って、`.sh`ファイルを作成しよう。これはサーバー起動用のbashファイルで、色んな設定パラメータを調整できるよ。
```
nano /home/steam/Rust-Server/start_server.sh
```

以下の内容をbashファイルにコピペしてね。基本的でよく使われるパラメータを入れてあるよ。もっと設定を追加したい、詳しく知りたい場合は[公式Rustウィキ](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver)をチェックしてみて。
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

`CTRL+X`、`Y`、`Enter`で保存しよう。最後に、sudo権限なしで実行できるように実行権限を付けるコマンドを実行してね。
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、**start_server.sh**シェルファイルを実行してね。
```
/home/steam/Rust-Server/start_server.sh
```

コマンドプロンプトにログが表示されて起動が成功したことがわかるはず。初回起動はセットアップに時間がかかることがあるから気長に待ってね。問題なければサーバーリストに表示されるし、直接`[your_ip_address]:28015`で接続もできるよ。

## まとめ

おめでとう！専用サーバーにRustサーバーを無事インストール＆設定できたね！次のステップとしては、[Linuxサービスのセットアップガイド](dedicated-linux-create-gameservice.md)を見て、ゲームサーバーをサービス化するのがおすすめ。これで自動起動や自動アップデート、ログ管理などが超ラクになるよ。

もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日対応してるから安心して！

<InlineVoucher />