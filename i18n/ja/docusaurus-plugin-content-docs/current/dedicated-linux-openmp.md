---
id: dedicated-linux-openmp
title: "専用サーバー：Open.mp 専用サーバー Linux セットアップ"
description: "Linux専用サーバーにopen.mp専用サーバーサービスをセットアップして、スムーズなゲームサーバーのホスティングと管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにopen.mp専用サーバーサービスをインストールしたい？それならここがピッタリ！このガイドでは、Linuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

### ユーザー作成

専用ゲームサーバーサービスは、専用のユーザーで動かすのがおすすめ。rootユーザーでの運用は色々な理由で推奨されないよ。すでにユーザーが用意できていれば、そのままインストール手順に進んでOK。

以下のコマンドで`gameservers`という名前のユーザーを作成し、任意でパスワードを設定しよう。

```
sudo useradd -m gameservers
sudo passwd gameservers # パスワードは任意
```

サーバーにアクセスしてユーザーが用意できたら、インストール手順に進もう。

## インストール

まずは`gameservers`ユーザーに切り替えて、ホームディレクトリ`home/gameservers`に移動して整理しやすくしよう。
```
sudo -u gameservers -s
cd ~
```

整理のために、open.mpサーバー用の新しいフォルダを作成して開こう。
```
mkdir OpenMP-Server && cd OpenMP-Server
```

次に、[open.mp GitHubリポジトリ](https://github.com/openmultiplayer/open.mp/releases)から最新リリースをダウンロードするよ。ページで**linux-x86**バージョンを右クリックしてリンクをコピーしてね。以下のコマンドで、コピーしたリンクを`[link]`に置き換えて最新のLinuxリリースをダウンロードしよう。
```
wget [link]
```

これで`.zip`ファイルが現在の`OpenMP-Server`フォルダにダウンロードされるよ。次のコマンドで解凍してファイルを展開しよう。
```
tar -xvzf open.mp-linux-x86.tar.gz
```

ファイルは**Server**フォルダ内に展開されているはず。`cd Server`でアクセスして、`ls`で中身をいつでも確認できるよ。これでサーバーの準備は完了。次は設定に進もう。

## 設定

ここまででopen.mpサーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内にある設定ファイルでさらにカスタマイズできるよ。

コア設定は**config.json**ファイルを編集しよう。
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

利用可能なオプションや詳細はOpen.mpの[サーバー設定](openmp-configuration.md)ガイドを見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、**omp-server**シェルファイルを実行してね。
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

コマンドプロンプトにログが表示され、ネットワークログも見えれば起動成功のサイン。問題なければ、サーバーリストに表示されるか、直接`[your_ip_address]:7777`で接続できるよ。

## まとめ

おめでとう！VPSにopen.mpサーバーを無事インストール＆設定できたね！次のステップとして、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドをチェックするのがおすすめ。これで専用ゲームサーバーをサービス化できて、起動の自動化や自動アップデート、ログ管理など色んなメリットがあるよ！

もし質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />