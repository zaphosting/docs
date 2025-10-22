---
id: vserver-linux-openmp
title: "VPS: Open.mp 専用サーバー Linux セットアップ"
description: "Linux VPS に open.mp 専用サーバーをセットアップして、スムーズなゲームサーバーのホスティングと管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに open.mp 専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

### ユーザー作成

専用ゲームサーバーサービスは、専用のユーザーで動かすのがおすすめ。root ユーザーで動かすのは色々とリスクがあるから避けよう。すでにユーザーがあるなら、そのままインストール手順に進んでOK。

以下のコマンドで `gameservers` というユーザーを作成し、任意でパスワードを設定できるよ。

```
sudo useradd -m gameservers
sudo passwd gameservers # パスワードは任意
```

サーバーにアクセスしてユーザーが準備できたら、インストール手順に進もう。

## インストール

まずは `gameservers` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u gameservers -s
cd ~
```

整理のために、open.mp サーバー用の新しいフォルダを作ってそこに移動しよう。
```
mkdir OpenMP-Server && cd OpenMP-Server
```

次に、[open.mp GitHub リポジトリ](https://github.com/openmultiplayer/open.mp/releases)から最新リリースをダウンロードするよ。ページで **linux-x86** バージョンを右クリックしてリンクをコピーしてね。以下のコマンドで、コピーしたリンクを `[link]` に置き換えて最新の Linux リリースをダウンロードしよう。
```
wget [link]
```

これで `.zip` ファイルが今いる `OpenMP-Server` フォルダにダウンロードされるよ。次に以下のコマンドで解凍してファイルを展開しよう。
```
tar -xvzf open.mp-linux-x86.tar.gz
```

ファイルは **Server** フォルダ内に展開されているはず。`cd Server` で移動して、`ls` で中身を確認できるよ。これでサーバーの準備は完了。次は設定に進もう。

## 設定

ここまでで open.mp サーバーのセットアップは完了しているよ。サーバーの設定は、サーバーディレクトリ内にある設定ファイルで行えるよ。

コア設定は **config.json** ファイルを編集しよう。
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

設定項目の詳細や意味は、Open.mp の [サーバー設定](openmp-configuration.md) ガイドを見てみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、**omp-server** シェルファイルを実行してね。
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

コマンドプロンプトにログが表示されて、ネットワークログも見えたら起動成功のサイン。問題なければ、サーバーはダイレクトコネクトでアクセス可能で、サーバーリストにも表示されるよ。直接接続する場合は `[your_ip_address]:7777` で繋げるよ。

## まとめ

おめでとう！VPS に open.mp サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見てみて。これを使うと、サーバーの自動起動や自動アップデート、ログ管理などが超ラクになるよ。

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />