---
id: dedicated-setup
title: "専用サーバー：初期セットアップ"
description: "ZAP専用サーバーのセットアップ方法を簡単に解説。多彩なOSにアクセス可能 → 今すぐ詳しくチェック"
sidebar_label: 初期セットアップ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
この分野がまだ初めてで、サービスのセットアップがうまくできるか不安だったり、途中で困ることがあるかも…と心配してる？安心して！このガイドとセットアップアシスタントが、ZAP専用サーバーの初期セットアップの全ステップをしっかりサポートするよ。

<InlineVoucher />

## 準備

### iLOの有効化
初期セットアップでは、まずiLO管理インターフェースを有効化する必要があるよ。この処理には少し時間がかかることも。iLO管理インターフェースの詳細や活用方法については、[iLO](dedicated-ilo.md)ガイドをチェックしてみてね。

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

iLOが有効になると、iLOのステータスが**Active**と表示されるはず。iLOセッションはデフォルトで3時間有効で、その後またアクセスしたい場合は再度有効化が必要だよ。これでISOの選択に進めるよ。

### ISOの選択

次は、初期セットアップ用にマウントするISOを選ぶステップ。ドロップダウンメニューをクリックしてISOファイルを選択し、**挿入**ボタンを押してね。

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Debian、Ubuntu、FreeBSD、Windows、CentOS、ArchLinux、Proxmoxなど、主要なOSのISOファイルを幅広く用意してるよ。以下の表で対応OSとバージョンをチェックしてみて。

| ISO (OS)             | バージョン                                              |
| -------------------- | ------------------------------------------------------ |
| Debian               | 12, 11, 10.9, 9.13                                     |
| Ubuntu               | 22.04.3, 22.04, 22.02, 18.04                           |
| FreeBSD              | 13.0, 12.2, 11.4                                       |
| Windows              | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS               | 7.9, 8.3                                               |
| ArchLinux            | 2023                                                   |
| Proxmox              | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1               |

自分だけのISOをアップロードしてマウントすることも可能だよ。自作ISOのマウント方法については、**[Own ISO](dedicated-iso.md)**ガイドを参考にしてね。

## インストール

### ISOのマウントと起動

ISOファイルを選択して挿入したら、システムを一度再起動して変更を反映させ、ISOからのブートを開始しよう。**Reboot**ボタンをクリックするだけでOK。再起動には少し時間がかかることもあるよ。

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### iLOを使ったOSインストール

これで希望のOSをインストールする準備が整ったよ。システムはISOをマウントしてセットアップを開始している状態。サーバーの**iLO管理インターフェース**を開いて、「Integrated Remote Console: **HTML 5**」をクリックするとサーバー画面にアクセスできるよ。iLO管理インターフェースのコンソール操作については、[iLO](dedicated-ilo.md)ガイドを参照してね。

OSのセットアップはHTMLコンソール上で進めていくよ。主要なOS向けのガイドも用意してるから、次のリンクから必要な手順を確認してね：

- [Windowsのインストール](dedicated-windows.md)
- [Debianのインストール](dedicated-linux-debian.md)
- [Ubuntuのインストール](dedicated-linux-ubuntu.md)
- [FreeBSDのインストール](dedicated-freebsd.md)
- [CentOSのインストール](dedicated-centos.md)
- [Proxmoxのインストール](dedicated-proxmox.md)

<InlineVoucher />