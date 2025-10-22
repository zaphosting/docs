---
id: dedicated-centos
title: "専用サーバー：CentOSのインストール"
description: "専用サーバーにCentOSを成功裏にインストールし、最適なパフォーマンスとセキュリティを実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: CentOSのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

以下では、専用サーバーにCentOSのOSをインストールし設定する手順をステップごとに解説します。これらの指示をしっかりと守って、OSを確実にセットアップし、最大限に活用しましょう。

:::info

このガイドはCentOS 8.3をベースに構成されています。以前のバージョンや新しいバージョンのインストール手順は多少異なる場合があります。

:::

<InlineVoucher />

## 準備

OSのインストールと設定を行うには、まず対応するOSのISOをマウントする必要があります。マウント方法はいくつかあります：

1. 初期セットアップからのマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、まず[初期セットアップ](dedicated-setup.md)や[Own ISO](dedicated-iso.md)のガイドを参照するのがおすすめです。



## インストール

ISOが正常に読み込まれると、サーバーはセットアッププロセスに入ります。

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* キーボード  
お好みのキーボードレイアウトを選択

* 時刻と日付  
タイムゾーンを選択

* rootパスワード  
rootアカウントのパスワードを設定します。どんなものでも構いませんが、強力なパスワードを使い、安全な場所に保存してください。

* インストール先  
CentOSをインストールするSSDを選択

* ネットワークとホスト名  
互換性の問題により、ネットワークはまだ設定できません。最後に設定します。

すべての設定が完了したら、「インストール開始」を押してください。

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

インストールが完了したら、サーバーからISOファイルを取り外し、「システムを再起動」をクリックします。



## 設定

### ネットワーク

次にネットワークデバイスを設定します。いくつかのファイルを更新する必要があるため、リモートコンソールまたはiLOから以下のISOファイルをサーバーにマウントしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

ISOファイルが正常にマウントされたら、システム内にマウントしてアクセスできるようにします。

```mount /dev/sr0 /mnt```

ISOファイルは現在`/mnt`にマウントされています。

```rpm -i /mnt/be2net.rpm```

次にアップデートパッケージをインストールします。

```modprobe be2net```

このステップでアップデートを実行します。数秒かかる場合があります。  
`ip a s`コマンドで`eno1`というネットワークデバイスが存在するか確認してください。存在すればシステムを再起動してください。

システム再起動後、ネットワークデバイスの設定を続けます。

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

以下の内容をファイルに入力してください：

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

nanoは`CTRL+X`、続けて`Y`で保存して終了できます。

次に、`ifup eno1`でネットワークデバイスを起動します。

:::info
これで専用サーバーはインターネット接続が使える状態になっているはずです。
:::





## まとめ

おめでとうございます！専用サーバーにCentOS OSを無事インストールできました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />