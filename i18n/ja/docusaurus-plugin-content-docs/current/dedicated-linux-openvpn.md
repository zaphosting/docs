---
id: dedicated-linux-openvpn
title: "専用サーバー：OpenVPNのインストール"
description: "LinuxサーバーでOpenVPNを使ってインターネット接続を安全にし、制限されたコンテンツにアクセスする方法をチェック → 今すぐ詳しく見る"
sidebar_label: OpenVPNのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

OpenVPNは、インターネット上で安全な接続を実現する強力で多機能なVPNソフトウェアです。オープンソースのソリューションで、デバイスとVPNサーバー間に暗号化された接続を確立するための堅牢でカスタマイズ可能なVPN技術を提供します。OpenVPNを使うことで、ユーザーはインターネット接続を保護し、オンラインプライバシーを守り、世界中どこにいても地域制限されたコンテンツにアクセスできます。このガイドでは、Linuxサーバーに**OpenVPN**をインストールし設定する手順を解説します。

<InlineVoucher />

## 準備

まず、ネットワークドライバーの**TUN**を有効化する必要があります。これはrootサーバーでは不要です。  
以下の手順で、**/usr/sbin**フォルダに**tunscript.sh**という新しいファイルを作成してください。

```
nano /usr/sbin/tunscript.sh 
```

次に、以下の内容をファイルに貼り付けます：
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

`CTRL+O`で保存し、`Y`を押してから`Enter`。終了は`CTRL+X`です。  
続いて、以下のコマンドを実行します：

```
chmod +x /usr/sbin/tunscript.sh
```

完了したら、``crontab -e``を実行し、**nanoエディター**を選択します[1]。ファイルの最後に以下の行を追加してください：
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

保存は`CTRL+O`、`Y`、`Enter`、終了は`CTRL+X`です。これで再起動後も続行可能になります。

## インストール

OpenVPNをインストールするには、コンソールで以下のコマンドを実行します：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

するとUDPかTCPかを選択するダイアログが表示されます。UDPを推奨しているので、`1`を入力して`Enter`を押してください。次にOpenVPNのポートを聞かれますが、デフォルトのままで問題ありません。

次にDNSサーバーを設定します。Google Public DNSかCloudflare DNSのどちらかをおすすめします：
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

続いてクライアント名を設定します。好きな名前を付けてOKです。例えば接続するデバイス名など。

## 設定

### クライアントの追加

複数の接続を作りたい場合は、複数アカウントを作成するのが便利です。別のアカウントを作るには、以下のコマンドを実行してください：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

`1`を選択して確定し、クライアント名を入力します。

### クライアントの削除

クライアントを削除したい場合は、以下のコマンドを実行します：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

リストから削除したいクライアントの番号を選択し、`Enter`。削除確認が出るので、問題なければ`Y`を押して`Enter`。これでクライアントが削除されます。

## アンインストール

OpenVPNが不要になったら、以下の方法でアンインストールできます：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
`3`を押して確定し、もう一度確認すればOpenVPNがアンインストールされます。

## VPNへの接続

VPNに接続するには、**[OpenVPNクライアント](https://openvpn.net/community-downloads/)**の使用をおすすめします。接続したいデバイスにダウンロードしてください。

サーバーにSFTPで接続し、作成された.ovpnファイルをダウンロード、その後サーバー上のファイルは削除してください。クライアントをインストールしたら起動し、タスクバーのOpenVPNアイコンを右クリック。『ファイルのインポート』を選び、先ほどダウンロードしたファイルを開きます。接続するには再度アイコンをクリックし、「接続」を選択してください。

:::info
複数のファイルをインポートしている場合は、使いたいクライアントを選択してから「接続」をクリックしてください。
:::

<InlineVoucher />