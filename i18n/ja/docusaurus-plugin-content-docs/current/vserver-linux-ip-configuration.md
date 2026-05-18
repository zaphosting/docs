---
id: vserver-linux-ip-configuration
title: "VPS: IP設定（Ubuntu/Debian）"
description: "UbuntuまたはDebianを実行しているLinuxサーバーで静的IPアドレスを設定する方法 → 今すぐ詳しく学ぼう"
sidebar_label: IPアドレスの設定
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに

Linux VPSでIPアドレスを設定することで、サーバーのネットワーク内での通信方法をコントロールできます。これにはIPアドレスの割り当て、デフォルトゲートウェイの設定、ネットワーク接続に必要なDNSサーバーの設定が含まれます。

:::warning インターネット接続がなくてサーバーにアクセスできない？
ネットワーク設定の誤りやインターネット接続の欠如によりサーバーにアクセスできなくなった場合、SSHでのリモートアクセスができなくなることがあります。その場合は、ウェブインターフェースの[VNCコンソール](vserver-vnc.md)を使ってサーバーに接続し、ネットワーク設定を修正してください。
:::

<InlineVoucher />

## 準備

静的IPアドレスを設定する前に、以下の情報を用意してください：

- 割り当てたいIPアドレス  
- サブネットマスク  
- デフォルトゲートウェイ  
- DNSサーバー  

これらの情報はウェブインターフェースで確認できます。**VPS管理**を開き、**IPアドレス**の項目に進んでください。

## 設定方法

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Ubuntuではネットワーク設定に**Netplan**を使用しています。SSHでVPSに接続し、`/etc/netplan/`ディレクトリ内のNetplan設定ファイルを探します。設定ファイルを開きましょう：

```bash
nano /etc/netplan/50-cloud-init.yaml
```

静的IPアドレスを設定するように内容を編集します：
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

以下の値をあなたのネットワーク設定に合わせて変更してください：

- 109.230.238.45 → あなたの静的IPアドレス
- 109.230.238.1 → あなたのゲートウェイ
- DNSアドレス → お好みのDNSサーバー

ファイルを保存したら、設定を適用します：

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

DebianではNetplanの代わりにネットワークインターフェース設定ファイルを使うことが多いです。SSHでVPSに接続し、ネットワークインターフェース設定ファイルを開きます：

```
nano /etc/network/interfaces
```

ネットワークインターフェースの設定を追加または修正します。例：

```bash
auto lo
iface lo inet loopback

# メインネットワークインターフェース
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # dns-* オプションは resolvconf パッケージがインストールされている場合に有効
        dns-nameservers 1.1.1.1
```

以下の値をあなたのネットワーク設定に合わせて変更してください：
- address → あなたの静的IPアドレス
- netmask → あなたのサブネットマスク
- gateway → あなたのデフォルトゲートウェイ
- dns-nameservers → お好みのDNSサーバー

設定ファイルを保存したら、ネットワークサービスを再起動します：

```
systemctl restart networking
```

</TabItem> </Tabs>



## 動作確認

設定を適用したら、新しいIPアドレスが正しく反映されているか確認しましょう。ターミナルで以下のコマンドを実行してください：

```
ip a
```

このコマンドはシステム上のすべての**ネットワークインターフェース**とその現在の設定を表示します。出力の中から先ほど設定したインターフェース（通常は`eth0`や`ens18`など）を探してください。

インターフェースのセクション内にある**`inet`エントリ**がIPv4アドレスを示しています。ここに設定した静的IPアドレスが表示されていれば成功です。例：

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

正しいアドレスが表示されない場合は、設定ファイルを再度確認し、変更が正しく保存されているかチェックしてください。その後、再度設定を適用します：

```
sudo netplan apply
```



## まとめ

おめでとうございます！LinuxサーバーでのIPアドレス設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日あなたをサポートしますよ！🙂

<InlineVoucher />