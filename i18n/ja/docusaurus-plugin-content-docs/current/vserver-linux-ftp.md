---
id: vserver-linux-ftp
title: "VPS: FTPサービスが動かない時のトラブルシューティング"
description: "ゲームサーバーやTeamspeakサーバーにFTPでアクセスできない時の原因と復旧方法を解説 → 今すぐチェック"
sidebar_label: FTPサービスが動かない
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## ゲームサーバーやTeamspeakサーバーにFTPでアクセスできない時はどうする？

:::info
注意：以下の手順はZAPのウェブインターフェースがインストールされた自分のVPSでのみ有効です！
:::

作成したサーバーにFTPで接続できない場合、多くはFTPサービス（ProFTPD）が起動していないことが原因です。まれに設定ミスや、FTPのポート21が他のプログラムに使われていることもあります。

## FTPの問題を詳しくチェックしよう：

### 接続可能か確認
ウェブインターフェースのFTPブラウザを使うと簡単に確認できます。対象サーバーのメニューの「ツール」から「FTPブラウザ」をクリック

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

次に「直接接続」ボタンを一回押します。

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

するとおそらくこんな画面が出ます：

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

WebFTPやFTPツールでの接続ができないことがわかったので、VPS上のFTPサービスを詳しく調べる必要があります。

### ProFTPDの状態を確認

SSHやコンソールでサーバーに接続し、「service proftpd status」コマンドを入力します。状態が読み取られて表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

ここで「dead」と表示されていれば、サービスは停止中でアクセスできません。

### FTPサービスを再起動
FTPサービスは以下のコマンドで再起動できます：

```
service proftpd start
```

コマンド実行後に特に反応がなければ、通常はサービスが起動して利用可能になっています。

再度「service proftpd status」で状態を確認しましょう。こんな感じになっていればOKです：

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

状態が「active」になっていれば「dead」ではなくなり、FTP接続をFTPツールやWebFTPで再度試せます。

### 接続を再チェック
これで接続できてデータが見られるはずです。

### 問題解決！
✅ FTPサービス（ProFTPD）が起動してアクティブになったので、データのやり取りができるようになりました！

<InlineVoucher />