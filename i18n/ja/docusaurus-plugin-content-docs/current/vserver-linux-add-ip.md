---
id: vserver-linux-add-ip
title: "VPS: IPアドレスの設定"
description: "DebianやUbuntuシステムでのメインおよび追加IPアドレスの設定と管理方法を学び、ネットワーク設定を最適化しよう → 今すぐ詳しく見る"
sidebar_label: IPアドレスの設定
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ネットワーク設定をカスタマイズしてIPアドレスを指定したいですか？

<InlineVoucher />

## IPアドレスの設定

ここではメインIPアドレスの定義と確認方法について説明します。

<Tabs>
  <TabItem value="debian" label="Debian" default>

Debianのネットワーク設定はネットワークインターフェースを通じて行います。`sudo nano /etc/network/interfaces` コマンドを実行してネットワーク設定ファイルを開きます。デフォルトでは、設定内容は以下のようになっているはずです：

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

まだ設定がない場合は、上記の内容にしてください。IPアドレスのプレースホルダー（XXX.XXX.XXX.XXX）を、ダッシュボードのサーバー管理画面に表示されている自分のサーバーIPアドレスに置き換えます。サブネットは `255.255.255.0`（クラスCネットワーク）を使い、ゲートウェイの最後のオクテットは必ず「1」にしてください。

変更を保存するにはCTRL+Xを押し、Enterキーで確定します。新しいIPv4アドレスを有効にするためにネットワークモジュールを再起動する必要があります。以下のコマンドで実行してください：

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

 </TabItem>
</Tabs>

## 追加IPアドレスの設定
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   プレースホルダー

</TabItem>
</Tabs>

## 設定のテスト
設定したIPアドレスの正確さと動作確認には、pingテストを行うのがおすすめです。例えば自分のPCでコマンドプロンプト（cmd.exe）を開き、以下のコマンドを実行してください：

```
ping <your_server_ip>
```

コマンド実行後、IPアドレスが正しく設定されていれば、結果は以下のようになります：

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## まとめ

おめでとうございます！ネットワーク設定のIPアドレスを無事に設定できました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにご連絡ください。毎日あなたをサポートしますよ！🙂

<InlineVoucher />