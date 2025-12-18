---
id: dedicated-setup
title: "専用サーバー：初期セットアップ"
description: "ZAP専用サーバーのセットアップ方法を簡単に解説。多彩なOSにアクセス可能 → 今すぐチェック"
sidebar_label: 初期セットアップ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
この分野がまだ初めてで、サービスのセットアップがうまくできるか不安だったり、途中で困るんじゃないかと心配してる？大丈夫！このガイドとセットアップアシスタントが、ZAP専用サーバーの初期セットアップの全ステップをしっかりサポートするよ。  

## 準備

### iLOの有効化
初期セットアップでは、まずiLO管理インターフェースを有効化する必要があるよ。この処理には少し時間がかかることがある。iLO管理インターフェースの詳細や使い方については、[iLO](dedicated-ilo.md)ガイドをチェックしてみてね。

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

iLOが有効化されると、iLOのステータスが**Active**（アクティブ）と表示されるよ。iLOセッションはデフォルトで3時間有効で、その後またアクセスしたい場合は再度有効化が必要になる。これでISOの選択に進めるよ。

### ISOの選択

次は初期セットアップ用にマウントするISOを選ぶステップ。ドロップダウンメニューをクリックしてISOファイルを選択し、**挿入**ボタンを押してね。

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Debian、Ubuntu、FreeBSD、Windows、CentOS、ArchLinux、Proxmoxなど、主要なOSのISOファイルを幅広く用意しているよ。以下の表で利用可能なOSとバージョンを確認してね。

| ISO (OS)             | バージョン                                              |
| -------------------- | ------------------------------------------------------ |
| Debian               | 12, 11, 10.9, 9.13                                     |
| Ubuntu               | 22.04.3, 22.04, 22.02, 18.04                           |
| FreeBSD              | 13.0, 12.2, 11.4                                       |
| Windows              | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS               | 7.9, 8.3                                               |
| ArchLinux            | 2023                                                   |
| Proxmox              | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1               |

自分だけのISOを追加してマウントすることも可能だよ。自作ISOのマウント方法については、**[Own ISO](dedicated-iso.md)**ガイドを参考にしてね。

## インストール

### ISOのマウントと起動

ISOファイルを選択して挿入したら、システムを一度再起動して変更を反映させ、ISOからのブートを開始する必要があるよ。**Reboot**ボタンをクリックするだけでOK。再起動には少し時間がかかることがあるから待っててね。

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### iLOを使ったOSインストール

これで希望のOSインストールの準備が整ったよ。システムはISOをマウントしてセットアップを開始している状態。次にサーバーの**iLO管理インターフェース**を開いて、「Integrated Remote Console: **HTML 5**」をクリックするとサーバーの画面にアクセスできるよ。iLO管理インターフェースのコンソール操作については、[iLO](dedicated-ilo.md)ガイドを参照してね。

OSのセットアップはHTMLコンソール上で行うよ。主要なOS向けのガイドも用意しているから、次のリンクから必要な手順をチェックしてみてね：

- [Windowsのインストール](dedicated-windows.md)
- [Debianのインストール](dedicated-linux-debian.md)
- [Ubuntuのインストール](dedicated-linux-ubuntu.md)
- [FreeBSDのインストール](dedicated-freebsd.md)
- [CentOSのインストール](dedicated-centos.md)
- [Proxmoxのインストール](dedicated-proxmox.md)