---
id: vserver-linux-openvpn
title: "VPS: OpenVPNのインストール"
description: "LinuxサーバーでOpenVPNを使ってインターネット接続を安全にし、制限されたコンテンツにアクセスする方法をチェック → 今すぐ詳しく見る"
sidebar_label: OpenVPNのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

OpenVPNは、インターネット上で安全な接続を実現する強力で多機能なVPNソフトウェアです。オープンソースのソリューションで、デバイスとVPNサーバー間に暗号化された接続を確立するための堅牢でカスタマイズ可能なVPN技術を提供します。OpenVPNを使うことで、インターネット接続を安全に保ち、オンラインプライバシーを守り、世界中どこにいても地域制限されたコンテンツにアクセスできます。このガイドでは、Linuxサーバーに**OpenVPN**サービスをインストールし設定する手順を解説します。

<InlineVoucher />

## 準備

まずはネットワークドライバーの**TUN**を有効化する必要があります。これはrootサーバーでは不要です。  
以下の手順で、**/usr/sbin**フォルダに**tunscript.sh**という新しいファイルを作成してください。

```
nano /usr/sbin/tunscript.sh 
```

次に以下の内容をファイルに貼り付けます：
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

`CTRL+O`で保存し、`Y`を押して`Enter`。終了は`CTRL+X`です。  
続いて以下のコマンドを実行します：

```
chmod +x /usr/sbin/tunscript.sh
```

完了したら、``crontab -e``を実行し、**nanoエディタ**を選択[1]。ファイルの最後に以下の行を追加してください：
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

保存は`CTRL+O`、`Y`、`Enter`。終了は`CTRL+X`。これで再起動後も設定が有効になります。

## インストール

OpenVPNをインストールするには、コンソールで以下のコマンドを実行します：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

するとUDPかTCPかを選ぶダイアログが表示されます。UDPを推奨しているので、`1`を入力して`Enter`。次にOpenVPNのポートを聞かれますが、デフォルトのままでOKです。

続いてDNSサーバーの設定です。Google Public DNSかCloudflare DNSの利用をおすすめします：
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

最後にクライアント名を設定します。好きな名前を付けてください（例：デバイス名など）。

## 設定

### クライアントを追加する

複数の接続を作りたい場合は、複数のアカウントを作成すると便利です。別のアカウントを作るには、以下のコマンドを実行してください：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

`1`を選択して確定し、クライアント名を入力します。

### クライアントを削除する

クライアントを削除したい場合は、以下のコマンドを実行します：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

リストから削除したいクライアントの番号を選択し、`Enter`。削除確認が出るので、問題なければ`Y`を押して`Enter`。これでクライアントが削除されます。

## アンインストール

OpenVPNが不要になった場合は、以下のコマンドでアンインストールできます：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
`3`を押して確定し、再度確認すればOpenVPNがアンインストールされます。

## VPNへの接続

VPNに接続するには、**[OpenVPNクライアント](https://openvpn.net/community-downloads/)**の利用をおすすめします。接続したいデバイスにダウンロードしてください。

サーバーにSFTPで接続し、作成された.ovpnファイルをダウンロード、その後サーバー上のファイルは削除しましょう。クライアントをインストールしたら起動し、タスクバーのOpenVPNアイコンを右クリック。『ファイルをインポート』を選び、先ほどダウンロードしたファイルを開きます。接続するには再度アイコンをクリックして「接続」を選択してください。

:::info
複数のファイルをインポートしている場合は、使いたいクライアントを選択してから「接続」をクリックしてください。
:::

## まとめ

おめでとうございます！OpenVPNのインストールと設定が無事完了しました。もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />