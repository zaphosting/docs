---
id: dedicated-linux-ragemp
title: "専用サーバー：RageMP専用サーバー Linuxセットアップ"
description: "Linux専用サーバーにRageMP専用サーバーをセットアップして、スムーズなゲームサーバーのレンタルと管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにRageMP専用サーバーサービスをインストールしたい？それならここがピッタリ！このガイドでは、Linuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
実は、**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできるんだ。これでゲームサーバーサービスを簡単にセットアップできて、ZAP-Hostingのダッシュボードと直結！数クリックで完了しちゃうよ。詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しよう。接続方法がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

### ユーザー作成

専用ゲームサーバーサービスは、専用のユーザーで動かすのがおすすめ。rootユーザーでの運用は色々とリスクがあるから避けたほうがいいよ。すでにユーザーが用意できていれば、そのままインストール手順に進んでOK。

以下のコマンドで`gameservers`という名前のユーザーを作成し、任意でパスワードを設定しよう。

```
sudo useradd -m gameservers
sudo passwd gameservers # パスワードは任意
```

サーバーにアクセスしてユーザーが準備できたら、インストール手順に進もう。

## インストール

まずは`gameservers`ユーザーでログインして、整理のためにホームディレクトリに移動しよう。
```
sudo -u gameservers -s
cd ~
```

整理のために、RageMPサーバー用の新しいフォルダを作成して開くよ。
```
mkdir RageMP-Server && cd RageMP-Server
```

次に、RageMPの公式サイトから最新リリースをダウンロードしよう。以下のコマンドで直接ダウンロードできるよ。
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

これで`.tar.gz`ファイルが今いる`RageMP-Server`フォルダにダウンロードされる。次のコマンドで解凍して中身を展開しよう。
```
tar -xvzf linux_x64.tar.gz
```

ファイルは**ragemp-srv**フォルダ内に展開されているはず。`cd ragemp-srv`でアクセスして、`ls`で中身を確認してみてね。これでサーバーの準備は完了。次は設定に進もう。

## 設定

ここまででRageMPサーバーのセットアップは完了しているよ。サーバーの詳細設定は、サーバーディレクトリ内にある設定ファイルで行える。

:::tip
設定ファイルはサーバーを一度起動しないと作成されないことがあるよ。以下のシェルファイルを実行して一度起動してみてね：`/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`。起動後は`CTRL+C`でサーバーを停止できるよ。
:::

コア設定は**conf.json**ファイルを編集して行うよ。
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、**ragemp-server**シェルファイルを実行してね。
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

コマンドプロンプトにログが表示されて、ネットワークログも見えれば起動成功のサイン。問題なければ、サーバーリストに表示されるか、直接`[あなたのIPアドレス]:22005`で接続できるよ。

## まとめ

おめでとう！専用サーバーにRageMPサーバーを無事インストール＆設定できたね！次のステップとして、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドをチェックするのがおすすめ。これでゲームサーバーをサービス化できて、起動の自動化やアップデート管理、ログの簡単アクセスなど色んなメリットがあるよ。

もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />