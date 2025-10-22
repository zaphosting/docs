---
id: dedicated-linux-cockpit
title: "専用サーバー：Cockpitのインストール"
description: "CockpitのウェブインターフェースでLinuxサーバーを効率的に管理・監視する方法を発見 → 今すぐ詳しく学ぼう"
sidebar_label: Cockpitのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Cockpitは、1台または複数のLinuxサーバー（クラスタ）を管理するためのウェブインターフェースです。シンプルなログ出力からRAID管理まで、多彩な機能を備えています。  
Cockpitは初心者にも使いやすく、重要な情報を短時間で確認・管理したい上級ユーザーにも最適です。さらに、ほぼどんなデバイスからでもアクセス可能です。  
プロジェクトの公式サイトはこちら → https://cockpit-project.org/ 。

:::info
このガイドはDebian（Buster以降）およびUbuntu（Bionic Beaver以降）向けのインストール方法を解説しています。Fedora、Red Hat、Fedora CoreOS、CentOS、Clear Linux、Arch Linux、Tumbleweed向けのインストール方法はプロジェクトページでも確認可能です。  
:::

<InlineVoucher />

## インストール

まずはサーバーを最新の状態にアップデートします：
```
// アップデート
sudo apt update; sudo apt upgrade -y
```
その後、Cockpitをインストールします：
```
// Cockpitのインストール
sudo apt install cockpit -y
```
インストールが完了したら、IP:9090でCockpitのパネルにアクセスできます。  
ログインはサーバー/ユーザーの通常のログイン情報を使います。  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)

<InlineVoucher />