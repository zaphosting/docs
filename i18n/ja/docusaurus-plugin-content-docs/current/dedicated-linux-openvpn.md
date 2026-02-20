---
id: dedicated-linux-openvpn
title: "LinuxサーバーでOpenVPNをセットアップ - 安全なVPNインフラを作ろう"
description: "OpenVPNを使ってLinuxサーバーでインターネット接続を安全にし、制限されたコンテンツにアクセスする方法をチェック → 今すぐ詳しく見る"
sidebar_label: OpenVPNのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

OpenVPNは、インターネット上で安全な接続を実現する強力で多機能なVPNソフトウェアです。オープンソースのソリューションで、デバイスとVPNサーバー間に暗号化された接続を確立するための堅牢でカスタマイズ可能なVPN技術を提供します。OpenVPNを使うことで、ユーザーはインターネット接続を安全に保ち、オンラインプライバシーを守り、世界中どこにいても地域制限されたコンテンツにアクセスできます。このガイドでは、Linuxサーバーに**OpenVPN**をインストールし設定する手順を解説します。

## 準備

まず、ネットワークドライバーの**TUN**を有効にする必要があります。root権限の専用サーバーではこのステップは不要です。  
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

`CTRL+O`を押して保存し、`Y`を押して確定、最後に`Enter`を押します。ファイルを閉じるには`CTRL+X`を押してください。  
続いて、以下のコマンドを実行します：

```
chmod +x /usr/sbin/tunscript.sh
```

これが完了したら、``crontab -e``を実行し、**nanoエディター**を選択します[1]。ファイルの最後に以下の行を追加してください：
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

`CTRL+O`で保存し、`Y`を押して確定、`Enter`を押します。ファイルを閉じるには`CTRL+X`を押してください。これで再起動後も設定が反映されます。

## インストール

OpenVPNをインストールするには、コンソールで以下のコマンドを実行します：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

すると、UDPかTCPのどちらを使うか聞かれます。UDPを推奨しているので、`1`を入力して`Enter`を押してください。次にOpenVPNのポート番号を聞かれますが、デフォルトのままで問題ありません。

次にDNSサーバーの設定です。Google Public DNSかCloudflare DNSのどちらかを使うのがおすすめです：
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

最後にクライアント名を設定します。好きな名前を付けてOKです。例えば、接続するデバイス名などがわかりやすいです。

## 設定

### クライアントを追加する

複数の接続を作りたい場合は、複数のアカウントを作るのが便利です。新しいアカウントを作成するには、以下のコマンドを実行してください：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

`1`を選択して確定し、クライアント名を入力します。

### クライアントを削除する

クライアントを削除したい場合は、以下のコマンドを実行します：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

リストから削除したいクライアントの番号を選択し、`Enter`を押します。削除確認が表示されるので、問題なければ`Y`を押して`Enter`を押してください。これでクライアントが削除されます。

## アンインストール

OpenVPNが不要になったら、以下のコマンドでアンインストールできます：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
`3`を押して確定し、もう一度確認を行うとOpenVPNがアンインストールされます。

## VPNに接続する

VPNに接続するには、**[OpenVPNクライアント](https://openvpn.net/community-downloads/)**の使用をおすすめします。接続したいデバイスにダウンロードしてください。

サーバーにSFTPで接続し、作成された.ovpnファイルをダウンロードします。ダウンロード後はサーバー上のファイルを削除してください。クライアントをインストールしたら起動し、タスクバーのOpenVPNアイコンを右クリック。『ファイルをインポート』を選び、先ほどダウンロードしたファイルを選択して『開く』をクリック。接続するには再度アイコンをクリックして「接続」を選択します。

:::info
複数のファイルをインポートしている場合は、使いたいクライアントを選択してから「接続」をクリックしてください。
:::