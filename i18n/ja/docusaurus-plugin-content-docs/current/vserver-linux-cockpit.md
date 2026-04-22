---
id: vserver-linux-cockpit
title: "LinuxサーバーにCockpitをセットアップ - Webインターフェースでサーバー管理"
description: "初心者も上級者も使いやすいCockpitのWebインターフェースでLinuxサーバーを効率的に管理 → 今すぐチェック"
sidebar_label: Cockpitのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Cockpitは、1台または複数のLinuxサーバー（クラスタ）を管理するためのWebインターフェースです。シンプルなログ出力からRAID管理まで、多彩な機能を備えています。  
初心者にも使いやすく、重要な情報を短時間で確認・管理したい上級者にもピッタリ。さらに、ほぼどんなデバイスからでもアクセス可能です。  
プロジェクトの公式サイトはこちら → https://cockpit-project.org/ 。

## One Click AppsインストーラーでCockpitをインストール

VPSのWebインターフェースにある**One Click Appsインストーラー**から、**Cockpit**を直接インストールできます。初期アプリ設定が完了したら、アプリカタログを開いて**Cockpit**を検索し、お好みのプロジェクト・環境・ドメイン設定でデプロイを開始しましょう。  
これにより、コマンドラインでの手動セットアップなしで、Webベースの管理、カスタムドメイン対応、SSL発行（対応環境のみ）などのメリットを活かしつつ、素早く簡単に**Cockpit**を導入・管理できます。

:::info
このガイドはDebian（Buster以降）およびUbuntu（Bionic Beaver以降）向けのインストール方法を解説しています。Fedora、Red Hat、Fedora CoreOS、CentOS、Clear Linux、Arch Linux、Tumbleweed向けのインストール方法はプロジェクトページで確認可能です。  
:::

<InlineVoucher />

## インストール手順

まずはサーバーをアップデートしましょう：
```
// アップデート
sudo apt update; sudo apt upgrade -y
```
続いてCockpitをインストールします： 
```
// Cockpitのインストール
sudo apt install cockpit -y
```
インストール完了後、IPアドレス:9090でCockpitパネルにアクセス可能です。  
ログインはサーバー/ユーザーの通常のログイン情報を使います。

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## まとめ

おめでとうございます！Cockpitのインストールと設定が無事完了しました。  
もし質問や問題があれば、いつでも対応可能なサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />