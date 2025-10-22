---
id: vserver-linux-rust
title: "VPS: Rust 専用サーバー Linux セットアップ"
description: "SteamCMDを使ってLinux VPSにRust専用サーバーを簡単セットアップする方法 → 今すぐチェック"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Linux VPSを持っていて、そこにRust専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、SteamCMDを使ってLinuxサーバーにRust専用サーバーをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使ってるけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**をVPSに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェースのガイド](vserver-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しよう。接続方法がわからなければ、[SSH初期アクセスガイド](vserver-linux-ssh.md)を参考にしてね。

また、SteamCMDをLinuxサーバーで初めて使う場合は、最初のセットアップが必要だよ。必ず[SteamCMD Linuxセットアップガイド](vserver-linux-steamcmd.md)を見て、SteamCMDが完全にセットアップされていることを確認してから進もう。

## インストール

まずは`steam`ユーザーでログインして、整理しやすいように`home/steam`のルートディレクトリに移動しよう。
```
sudo -u steam -s
cd ~
```

ログインできたら、次のコマンドでSteamCMDを使ってRustサーバーのインストールを始めよう。`steam`ユーザーに直接インストールされるよ。
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

## 設定

ここまででRustサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルでできるよ。

ルートディレクトリに移動して、`.sh`ファイルを作成しよう。これはサーバー起動用のbashファイルで、色んな設定パラメータを調整できるよ。
```
nano /home/steam/Rust-Server/start_server.sh
```

以下の内容をbashファイルにコピペしてね。基本的でよく使うパラメータを入れてあるよ。もっと設定を追加したい、詳しく知りたい場合は[公式Rustウィキ](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver)を見てみてね。全ての設定オプションが載ってるよ。
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

`CTRL+X`で保存して、`Y`を押してから`Enter`でファイルを閉じよう。最後に、sudoなしで実行できるように実行権限を付けるコマンドを実行してね。
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、**start_server.sh**を実行してね。
```
/home/steam/Rust-Server/start_server.sh
```

コマンドプロンプトにログが表示されていれば起動成功のサイン。初回起動はセットアップに時間がかかることがあるから気長に待ってね。問題なければサーバーリストに表示されるはず。もしくは、直接`[your_ip_address]:28015`で接続もできるよ。

## まとめ

おめでとう！VPSにRustサーバーのインストールと設定が無事完了したよ！次のステップとしては、[Linuxサービスのセットアップガイド](vserver-linux-create-gameservice.md)を見てみてね。新しい専用ゲームサーバーをサービス化する方法が載ってるよ。これで自動起動や自動アップデート、ログ管理などが超ラクになるから超おすすめ！

もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートに待機してるよ！

<InlineVoucher />