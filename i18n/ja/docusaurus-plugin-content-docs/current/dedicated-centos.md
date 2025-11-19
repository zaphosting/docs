---
id: dedicated-centos
title: "専用サーバー：CentOSのインストール"
description: "専用サーバーにCentOSを成功裏にインストール・設定して、最高のパフォーマンスとセキュリティを実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: CentOSのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

以下では、専用サーバーにCentOSのOSをインストールし設定する手順をステップごとに解説します。これらの指示にしっかり従って、OSを確実にセットアップし、最適に活用しましょう。

:::info

このガイドはCentOS 8.3をベースに構成されています。以前のバージョンや新しいバージョンのインストール手順は多少異なる場合があります。

:::



## 準備

OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法は主に以下の3つです：

1. 初期セットアップからのマウント
2. iLO（バーチャルメディア）経由でのマウント
3. iLO（リモートコンソール）経由でのマウント

ISOファイルのマウントに慣れていない場合は、当社の[初期セットアップ](dedicated-setup.md)や[独自ISO](dedicated-iso.md)ガイドを参照するのがおすすめです。



## インストール

ISOが正常に読み込まれると、サーバーはセットアッププロセスに入ります。

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* キーボード  
お好みのキーボードレイアウトを選択

* 時刻と日付  
タイムゾーンを選択

* rootパスワード  
rootアカウントのパスワードを設定します。どんなものでもOKですが、強力なパスワードを使い、安全な場所に保存してください。

* インストール先  
CentOSをインストールするSSDを選択

* ネットワークとホスト名  
互換性の問題でネットワークはまだ設定できません。最後に設定します。

すべての設定が完了したら、「インストール開始」を押してください。

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

インストールが完了したら、サーバーからISOファイルを取り外し、「システムを再起動」をクリックします。



## 設定

### ネットワーク

次にネットワークデバイスの設定を行います。いくつかのファイルを更新する必要があるため、リモートコンソールまたはiLOから以下のISOファイルをサーバーにマウントしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

ISOファイルが正常にマウントされたら、システムにマウントしてアクセスできるようにします。

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

nanoを終了するには`CTRL+X`を押し、`Y`で保存します。

次に、`ifup eno1`でネットワークデバイスを起動します。

:::info
これで専用サーバーはインターネット接続ができる状態になっているはずです。
:::





## まとめ

おめでとうございます！専用サーバーにCentOS OSを無事インストールできました。もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにご連絡ください。毎日対応していますよ！🙂


