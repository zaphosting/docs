---
id: dedicated-linux-openmp
title: "専用サーバー：Open.mp 専用サーバー Linux セットアップ"
description: "Linuxサーバーにopen.mp専用サーバーをセットアップして、スムーズなゲームサーバーのホスティングと管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにopen.mp専用サーバーサービスをインストールしたい？それならここがピッタリ！このガイドでは、Linuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできるんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

### ユーザー作成

専用ゲームサーバーサービスは、専用のユーザーで動かすのがおすすめ。rootユーザーで動かすのは色々な理由で推奨されないよ。すでにユーザーが用意できていれば、そのままインストール手順に進んでOK。

以下のコマンドで`gameservers`という名前のユーザーを作成し、任意でパスワードを設定しよう。

```
sudo useradd -m gameservers
sudo passwd gameservers # 任意のパスワード設定
```

サーバーにアクセスしてユーザーが用意できたら、インストール手順に進もう。

## インストール

まずは`gameservers`ユーザーでログインして、整理のためにホームディレクトリ`home/gameservers`に移動しよう。
```
sudo -u gameservers -s
cd ~
```

整理のために、open.mpサーバー用の新しいフォルダを作成して開くよ。
```
mkdir OpenMP-Server && cd OpenMP-Server
```

次に、[open.mp GitHubリポジトリ](https://github.com/openmultiplayer/open.mp/releases)から最新リリースをダウンロードしよう。ページで**linux-x86**バージョンを右クリックしてリンクをコピー。以下のコマンドで、コピーしたリンクを`[link]`に置き換えて最新のLinuxリリースをダウンロードしてね。
```
wget [link]
```

これで`.zip`ファイルが`OpenMP-Server`フォルダにダウンロードされるよ。次に以下のコマンドで解凍してファイルを展開しよう。
```
tar -xvzf open.mp-linux-x86.tar.gz
```

ファイルは**Server**フォルダ内に展開されているはず。`cd Server`でアクセスして、`ls`で中身を確認できるよ。サーバーの準備は完了。次は設定に進もう。

## 設定

ここまででopen.mpサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

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

おめでとう！open.mpサーバーのインストールと設定がVPSで無事完了したね！次のステップとしては、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドをチェックするのがおすすめ。これで専用ゲームサーバーをサービス化できて、起動時の自動起動や自動アップデート、ログ管理など色んな便利機能が使えるよ！

もし質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！