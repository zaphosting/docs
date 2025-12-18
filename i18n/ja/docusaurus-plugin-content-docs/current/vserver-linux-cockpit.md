---
id: vserver-linux-cockpit
title: "VPS: Cockpitのインストール"
description: "初心者も上級者も使いやすいCockpitのウェブインターフェースでLinuxサーバーを効率的に管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Cockpitのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Cockpitは、1台または複数のLinuxサーバー（クラスタ）を管理するためのウェブインターフェースです。シンプルなログ出力からRAID管理まで、多彩な機能を備えています。  
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
その後、Cockpitをインストールします：
```
// Cockpitのインストール
sudo apt install cockpit -y
```
インストールが完了したら、IP:9090でCockpitのパネルにアクセスできます。  
ログインはサーバー/ユーザーの通常のログイン情報を使います。  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## まとめ

おめでとうございます！Cockpitのインストールと設定が無事完了しました。  
もし質問や問題があれば、いつでも対応可能なサポートチームまでお気軽にお問い合わせください！  

<InlineVoucher />