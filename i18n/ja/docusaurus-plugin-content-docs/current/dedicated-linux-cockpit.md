---
id: dedicated-linux-cockpit
title: "専用サーバー：Cockpitのインストール"
description: "CockpitのウェブインターフェースでLinuxサーバーを効率的に管理・監視する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Cockpitのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Cockpitは、1台または複数のLinuxサーバー（クラスタ）を管理するためのウェブインターフェースです。シンプルなログ出力からRAID管理まで、多彩な機能を備えています。  
Cockpitは初心者にも使いやすく、短時間で重要な情報を確認・管理したい上級ユーザーにもピッタリ。さらに、ほぼどんなデバイスからでもアクセス可能です。  
プロジェクトの公式サイトはこちら → https://cockpit-project.org/ 。

:::info
このガイドはDebian（Buster以降）およびUbuntu（Bionic Beaver以降）向けのインストール方法を解説しています。Fedora、Red Hat、Fedora CoreOS、CentOS、Clear Linux、Arch Linux、Tumbleweed向けのインストール方法はプロジェクトページで確認可能です。  
:::

## インストール

まずはサーバーをアップデートしましょう：
```
// アップデート
sudo apt update; sudo apt upgrade -y
```
続いて、Cockpitをインストールします：
```
// Cockpitのインストール
sudo apt install cockpit -y
```
インストールが完了したら、IPアドレス:9090でCockpitのパネルにアクセスできます。  
ログインはサーバー/ユーザーの通常のログイン情報を使います。

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)