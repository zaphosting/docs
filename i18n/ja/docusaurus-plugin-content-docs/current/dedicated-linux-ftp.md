---
id: dedicated-linux-ftp
title: "専用サーバー：FTPサービスが動作しない場合のトラブルシューティング"
description: "VPSでのFTPアクセス問題を解決して、ゲームサーバーやTeamspeakサーバーの管理をスムーズに行う方法を理解しよう → 詳しくはこちら"
sidebar_label: FTPサービスが動作しない
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ゲームサーバーやTeamspeakサーバーにFTPでアクセスできない場合はどうする？

:::info
注意：以下の手順は、ZAPのウェブインターフェースがインストールされている自分のVPSでのみ有効です！
:::

作成したサーバーにFTPで接続できない場合、ほとんどの場合FTPサービス（ProFTPD）が起動していません。稀に設定ミスやポートの競合（FTPのポート21が他のプログラムに使われている）も原因となります。

<InlineVoucher />

## FTPの問題を詳しくチェックしよう：

### 接続可能か確認する
ウェブインターフェースのFTPブラウザを使うと簡単に確認できます。対象サーバーのメニューの「ツール」から「FTPブラウザ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

次に「直接接続」ボタンを一度押します。

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

するとおそらくこんな画面が表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

WebFTPやFTPツールでの接続ができないことがはっきりしたので、VPS上のFTPサービスを詳しく調べる必要があります。

### ProFTPDの状態を確認する

SSHやコンソールでサーバーに接続し、「service proftpd status」コマンドを入力します。状態が読み取られ、以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)

ここで「dead」と表示されていれば、サービスはオフラインでアクセスできない状態です。

### FTPサービスを再起動する
FTPサービスは以下のコマンドで再起動できます：

```
service proftpd start
```

コマンド実行後に特にエラーが出なければ、サービスは通常オンライン／利用可能になっています。

再度「service proftpd status」コマンドで状態を確認しましょう。こんな感じになっていればOKです：

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

状態が「active」になっていれば、「dead」ではなくなり、FTP接続をFTPツールやWebFTPで再度試せます。

### 接続を再確認する
これで接続が確立でき、データの閲覧もできるはずです。

### 問題解決！
✅ FTPサービス（ProFTPD）が起動／アクティブになり、データのやり取りに問題なし！

<InlineVoucher />