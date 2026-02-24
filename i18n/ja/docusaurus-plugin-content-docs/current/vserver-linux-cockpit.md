---
id: vserver-linux-cockpit
title: "LinuxサーバーにCockpitをセットアップ - Webインターフェースでサーバー管理"
description: "初心者も上級者も使えるCockpitのWebインターフェースでLinuxサーバーを効率的に管理する方法 → 今すぐチェック"
sidebar_label: Cockpitのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Cockpitは、1台または複数のLinuxサーバー（クラスタ）を管理するためのWebインターフェースです。シンプルなログ出力からRAID管理まで、多彩な機能を備えています。  
初心者にも使いやすく、短時間で重要な情報を確認・管理したい上級者にもピッタリ。さらに、ほぼどんなデバイスからでもアクセス可能です。  
プロジェクトの公式サイトはこちら → https://cockpit-project.org/ 。

:::info
このガイドはDebian（Buster以降）およびUbuntu（Bionic Beaver以降）向けのインストール方法を解説しています。Fedora、Red Hat、Fedora CoreOS、CentOS、Clear Linux、Arch Linux、Tumbleweed向けのインストール方法はプロジェクトページで確認可能です。  
:::

<InlineVoucher />

## インストール

まずはサーバーを最新状態にアップデートしましょう：
```
// アップデート
sudo apt update; sudo apt upgrade -y
```
続いてCockpitをインストールします：
```
// Cockpitのインストール
sudo apt install cockpit -y
```
インストールが完了したら、IPアドレス:9090でCockpitのパネルにアクセスできます。  
ログインはサーバーの通常のユーザーアカウント情報を使って行います。

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## まとめ

おめでとうございます！Cockpitのインストールと設定が無事に完了しました。  
もし何か質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />