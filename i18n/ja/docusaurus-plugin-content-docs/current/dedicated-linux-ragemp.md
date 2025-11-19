---
id: dedicated-linux-ragemp
title: "専用サーバー：RageMP専用サーバー Linuxセットアップ"
description: "Linux専用サーバーにRageMP専用サーバーをセットアップして、スムーズなゲームサーバーのレンタルと管理を実現 → 今すぐ詳しくチェック"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux専用サーバーを持っていて、そこにRageMP専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、Linuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。例ではUbuntuを使うけど、他のディストリビューションでもほぼ同じ流れだよ。

:::tip
知ってた？**ZAP GS/TS3インターフェース**を専用サーバーに直接インストールできて、ZAP-Hostingのダッシュボードと直結したゲームサーバーサービスを数クリックでセットアップできちゃうんだ！詳しくは[GS/TS3インターフェース](dedicated-linux-gs-interface.md)をチェックしてね。
:::

## 準備

まずはSSHで専用サーバーに接続しよう。やり方がわからなければ、[SSH初期アクセス](dedicated-linux-ssh.md)ガイドを参考にしてね。

### ユーザー作成

専用ゲームサーバーサービスは、rootユーザーではなく別のユーザーで動かすのがおすすめ。rootで動かすのは色々とリスクがあるからね。すでにユーザーが用意できていれば、そのままインストール手順に進んでOK。

以下のコマンドで`gameservers`という名前のユーザーを作成し、任意でパスワードを設定しよう。

```
sudo useradd -m gameservers
sudo passwd gameservers # パスワードは任意
```

サーバーにアクセスしてユーザーが用意できたら、インストール手順に進もう。

## インストール

`gameservers`ユーザーでログインして、rootの`home/gameservers`ディレクトリに移動して作業を整理しよう。
```
sudo -u gameservers -s
cd ~
```

整理のために、RageMPサーバー用の新しいフォルダを作成して開くよ。
```
mkdir RageMP-Server && cd RageMP-Server
```

次に、RageMPの公式サイトから最新リリースをダウンロードする必要がある。以下のコマンドで直接ダウンロードしよう。
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

これで`.zip`ファイルが今いる`RageMP-Server`フォルダにダウンロードされるよ。次のコマンドで解凍してファイルを展開しよう。
```
tar -xvzf linux_x64.tar.gz
```

ファイルは**ragemp-srv**フォルダ内に展開されているはず。`cd ragemp-srv`でアクセスしてね。`ls`コマンドで中身をいつでも確認できるよ。これでサーバーの準備は完了。次は設定に進もう。

## 設定

ここまででRageMPサーバーのセットアップは完了しているよ。サーバーの設定は、サーバーディレクトリ内にある設定ファイルでさらにカスタマイズできる。

:::tip
設定ファイルはサーバーを一度起動しないと作成されないことがあるよ。以下のシェルファイルを実行して一度起動してみてね：`/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`。起動後は`CTRL+C`でサーバーを停止できるよ。
:::

コア設定は**conf.json**ファイルを開いて編集しよう。
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリに移動して、**ragemp-server**シェルファイルを実行してね。
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

コマンドプロンプトにログが表示され、ネットワークログも見えれば起動成功のサイン。問題なければ、サーバーリストに表示されるか、直接`[あなたのIPアドレス]:22005`で接続できるよ。

## まとめ

おめでとう！専用サーバーにRageMPサーバーを無事インストール＆設定できたね！次のステップとして、[Linuxサービスのセットアップ](dedicated-linux-create-gameservice.md)ガイドをチェックするのがおすすめ。これで新しい専用ゲームサーバーをサービス化できて、起動の自動化や自動アップデート、ログ管理など色んな便利機能が使えるよ。

もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！