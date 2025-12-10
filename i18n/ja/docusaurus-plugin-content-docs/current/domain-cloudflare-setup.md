---
id: domain-cloudflare-setup
title: "ドメイン: Cloudflareでドメインを設定する方法"
description: "ZAP-HostingのドメインでCloudflareを使ってウェブサイトのセキュリティとパフォーマンスを強化する方法 → 今すぐチェック"
sidebar_label: Cloudflare設定
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Cloudflareは超人気のCDN（コンテンツ配信ネットワーク）プロバイダーで、ウェブサイトのセキュリティ強化、DDoS保護、そして使いやすいダッシュボードでの管理を提供します。このガイドでは、ZAP-HostingのドメインをCloudflareで使うために、ExpertDNSの設定とネームサーバーの調整方法を解説します。

<InlineVoucher />

## 準備
このガイドを進めるには以下が必要です：
- ZAP-Hostingアカウントで管理しているドメイン
- Cloudflareアカウント
  
## ステップ1: ExpertDNSオプションを有効にする

まずはZAP-Hostingアカウントのドメイン管理画面にアクセス。**ExpertDNS**オプションを見つけて、チェックを入れて保存ボタンを押して有効化しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## ステップ2: Cloudflareでドメインを設定する

次はCloudflareの操作です。Cloudflareアカウントにログインして、ダッシュボードからウェブサイトを追加し、Cloudflareの案内に沿ってセットアップを進めてください。

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

セットアップの4ステップ目で、設定すべきネームサーバーが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

ZAP-Hostingのドメイン管理画面に戻り、**ExpertDNS**セクションを開きます。ここで、デフォルトのZAP-Hostingネームサーバーを削除し、Cloudflareから提供されたネームサーバーに置き換えましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

変更を保存するのを忘れずに！

## ステップ3: Cloudflareでのセットアップ完了

再びCloudflareのダッシュボードに戻ります。ドメインのセットアップ画面で、Cloudflareにネームサーバーの変更を再チェックさせるボタンがあるはずです。

:::info
ネームサーバーの変更が反映されるまで最大24時間かかることがありますが、通常はもっと早く完了します。
:::

Cloudflareがネームサーバーの変更を認識すると、セットアップ完了のメールが届きます。ダッシュボードでも確認でき、設定したドメインの下に**Active**と表示されていれば成功です。

これでドメインとCloudflareの連携が完了し、ウェブサイトのパフォーマンス、セキュリティ、管理性がグッとアップしました！

<InlineVoucher />