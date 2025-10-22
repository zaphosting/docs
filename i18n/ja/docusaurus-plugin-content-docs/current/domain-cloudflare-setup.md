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

Cloudflareは超人気のCDN（コンテンツ配信ネットワーク）プロバイダーで、ウェブサイトのセキュリティ強化、DDoS保護、そして使いやすいダッシュボードでの管理を提供します。このガイドでは、ZAP-HostingのドメインをExpertDNSを使ってCloudflareに対応させ、ネームサーバーを調整する方法を紹介します。

## 準備
このガイドを進めるには以下が必要です：
- ZAP-Hostingアカウントで管理しているドメイン
- Cloudflareアカウント

## ステップ1: ExpertDNSオプションを有効にする

まずはZAP-Hostingアカウントのドメイン管理画面にアクセスし、**ExpertDNS**オプションを見つけてチェックを入れ、保存ボタンを押して有効化しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## ステップ2: Cloudflareでドメインを設定する

次はCloudflareの操作です。Cloudflareアカウントにログインし、ダッシュボードからウェブサイトを追加して、Cloudflareの案内に沿ってセットアップを進めてください。

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

セットアップの4ステップ目で、設定すべきネームサーバー情報が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

ZAP-Hostingのドメイン管理画面に戻り、**ExpertDNS**セクションを開きます。ここで、デフォルトのZAP-Hostingネームサーバーを削除し、Cloudflareから提供されたネームサーバーに置き換えましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

変更を保存するのを忘れずに！

## ステップ3: Cloudflareでのセットアップを完了する

Cloudflareのダッシュボードに戻り、先ほどの設定画面でネームサーバーの再チェックを強制するボタンを押します。

:::info
ネームサーバーの変更が反映されるまで最大24時間かかることがありますが、通常はもっと早く完了します。
:::

Cloudflareがネームサーバーの変更を認識すると、セットアップ完了のメールが届きます。また、Cloudflareのダッシュボードで設定したドメインのステータスが**Active**になっているのを確認できます。

これでドメインとCloudflareの連携が完了し、ウェブサイトのパフォーマンス、セキュリティ、管理性が大幅にアップしました！

<InlineVoucher />