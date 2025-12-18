---
id: dedicated-linux-ftp
title: "専用サーバー：FTPサービスが動作しない場合のトラブルシューティング"
description: "VPSのFTPアクセス問題を解決して、ゲームサーバーやTeamspeakサーバーの管理をスムーズに行う方法を理解しよう → 詳しくはこちら"
sidebar_label: FTPサービスが動作しない
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ゲームサーバーやTeamspeakサーバーにFTPでアクセスできないときはどうする？

:::info
注意：以下の手順は、ZAPのウェブインターフェースがインストールされている自分のVPSでのみ有効です！
:::

作成したサーバーにFTPで接続できない場合、多くはFTPサービス（ProFTPD）が起動していません。稀に設定ミスやポートの競合（FTPのポート21が他のプログラムに使われている）も原因となります。



## FTP問題を詳しくチェックしよう：

### 接続可否の確認
ウェブインターフェースのFTPブラウザで簡単に確認できます。対象サーバーのメニューの「ツール」から「FTPブラウザ」をクリック

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

次に「直接接続」ボタンを一度押します。

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

するとおそらく以下のような画面が表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

WebFTPやFTPツールでの接続ができないことがはっきりしたので、VPS上のFTPサービスを詳しく調べる必要があります。

### ProFTPDの状態を確認

SSHやコンソールでサーバーに接続し、以下のコマンドを入力します。

```
service proftpd status
```

ステータスが読み取られ、以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)

ここで「dead」と表示されていれば、サービスは停止中でアクセスできません。


### FTPサービスの再起動
FTPサービスは以下のコマンドで再起動できます：

```
service proftpd start
```

コマンド実行後に何も返答がなければ、通常サービスは再び起動しています。

再度以下のコマンドで状態を確認しましょう。

```
service proftpd status
```

このように表示されればOKです：

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

「active」と表示されていればサービスは起動中なので、FTPツールやWebFTPで再接続を試みてください。

### 再接続の確認
これで接続ができてデータの閲覧が可能になっているはずです。

### 問題解決！
✅ FTPサービス（ProFTPD）が起動し、データのやり取りに問題なし！