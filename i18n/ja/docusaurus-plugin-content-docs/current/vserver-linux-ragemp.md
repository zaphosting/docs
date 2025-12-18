---
id: vserver-linux-ragemp
title: "VPS: RageMP 専用サーバー Linux セットアップ"
description: "Linux VPS に RageMP 専用サーバーをセットアップして、シームレスなマルチプレイヤーゲームを楽しもう → 今すぐチェック"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPS を持っていて、そこに RageMP 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、Linux サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例では Ubuntu を使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3 インターフェース**を VPS に直接インストールできて、ZAP-Hosting のダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは [GS/TS3 インターフェース](vserver-linux-gs-interface.md) をチェックしてね。
:::

<InlineVoucher />

## 準備

まずは SSH で VPS に接続しよう。やり方がわからなければ、[SSH 初期アクセス](vserver-linux-ssh.md) ガイドを参考にしてね。

### ユーザー作成

専用ゲームサーバーサービスは、専用のユーザーで動かすのがおすすめ。root ユーザーで動かすのは色々とリスクがあるから避けよう。すでにユーザーがあるなら、そのままインストール手順に進んでOK。

以下のコマンドで `gameservers` という名前のユーザーを作成し、任意でパスワードを設定できるよ。

```
sudo useradd -m gameservers
sudo passwd gameservers # パスワードは任意
```

サーバーにアクセスしてユーザーが用意できたら、インストール手順に進もう。

## インストール

まずは `gameservers` ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u gameservers -s
cd ~
```

整理のために、RageMP サーバー用の新しいフォルダを作って開くよ。
```
mkdir RageMP-Server && cd RageMP-Server
```

次に、RageMP の公式サイトから最新リリースをダウンロードしよう。以下のコマンドで直接ダウンロードできるよ。
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

これで `.tar.gz` ファイルが今いる `RageMP-Server` フォルダにダウンロードされる。次のコマンドで解凍して中身を展開しよう。
```
tar -xvzf linux_x64.tar.gz
```

ファイルは **ragemp-srv** フォルダ内に展開されているはず。`cd ragemp-srv` で移動して、`ls` で中身を確認できるよ。これでサーバーの準備は完了。次は設定に進もう。

## 設定

ここまでで RageMP サーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内にある設定ファイルで行えるよ。

:::tip
設定ファイルはサーバーを一度起動しないと作成されないことがあるよ。以下のシェルファイルを実行してサーバーを起動し、`CTRL+C` で終了してみてね。  
`/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`
:::

コア設定は **conf.json** ファイルを編集して行うよ。
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、**ragemp-server** シェルファイルを実行してね。
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

コマンドプロンプトにログが表示され、ネットワークログも見えれば起動成功のサイン。問題なければ、サーバーリストに表示されるか、直接 `[your_ip_address]:22005` で接続できるよ。

## まとめ

おめでとう！VPS に RageMP サーバーを無事インストール＆設定できたね！次のステップとしては、[Linux サービスのセットアップ](vserver-linux-create-gameservice.md) ガイドを見てみて。新しい専用ゲームサーバーをサービスとして登録する方法を解説していて、起動の自動化や自動アップデート、ログ管理など色んなメリットがあるよ！

もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />