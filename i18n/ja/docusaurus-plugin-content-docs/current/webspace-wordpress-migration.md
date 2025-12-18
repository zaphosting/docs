---
id: webspace-wordpress-migration
title: "ホスティング：WordPressサイトをZAP-Hostingに移行する方法"
description: "WordPressサイトをZAP-Hostingのホスティングにスムーズに移行して、ウェブプレゼンスを強化しよう → 今すぐチェック"
sidebar_label: 移行
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

強力なホスティングサービスに興味があって、ZAP-Hostingに乗り換えたい？それならこのガイドがピッタリ！ここでは、WordPressプラグインを使って、あなたのWordPressサイトをZAP-Hostingのホスティングに移行する方法を紹介するよ。

<InlineVoucher />

## 準備

ガイドを進める前に、以下を準備しておいてね：
- DNS設定を管理できる管理者権限のあるドメイン
- 古いWordPressの管理者権限
- ZAP-Hostingの[ホスティング](https://zap-hosting.com/en/shop/product/webspace/)を契約済み

## ステップ1：ホスティングの準備

まずは、[ホスティング](https://zap-hosting.com/en/shop/product/webspace/)のページにアクセスして、あなたのサイトに合ったプランを購入しよう。セットアップが完了したら、WordPressをインストールする必要があるよ。詳しい手順は専用の[インストールガイド](webspace-wordpress.md)をチェックしてね。

WordPressをホスティングにインストールしたら、ドメインを紐付けよう。こちらも専用の[ドメイン追加ガイド](webspace-adddomain.md)で詳しく解説しているよ。

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## ステップ2：Migrate Guruプラグインのセットアップ

移行を自動化するために、無料で人気のある**Migrate Guru**プラグインを使うよ。これを新旧両方のWordPressにインストールしよう。

:::tip 管理画面へのログイン方法
WordPressの管理者としてログインするには、ブラウザであなたのサイトのURLの後ろに `/wp-admin` を付けてアクセス（例：`[your_website].com/wp-admin`）。これでWordPressの管理画面のログインページに飛べるから、古いホスティングの管理者アカウントでログインしてね。

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

WordPressの管理画面で左側メニューの**プラグイン**を開き、**新規追加**を選択。検索バーに「Migrate Guru」と入力しよう。

検索結果が出たら、**インストール**してから**有効化**。これを新旧両方のWordPressでやってね。

有効化すると、メールアドレスの入力と利用規約への同意を求められる画面が出るから、入力して進もう。

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## ステップ3：移行キーの取得

Migrate Guruプラグインを両方にインストールしたら、**新しい**ZAP-HostingのWordPress管理画面で**Migrate Guru**メニューを開いて、**Migration Key**をコピーしよう。

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip バックアップの準備
念のため、プラグインで移行を始める前に古いWordPressのバックアップを取るのがおすすめ。データが消えることはないけど、万が一に備えておこう。
:::

## ステップ4：移行作業

次に、**古い**WordPressの管理画面に戻ろう。**Migrate Guru**メニューで**Migrate**ボタンを押し、リストから**Other Hosts**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

先ほどコピーした新しいZAP-Hosting WordPressの移行キーを貼り付けて、**Migrate**ボタンを押して移行を開始。

:::warning
必ず**新しい**ZAP-HostingのWordPress管理画面から移行キーをコピーして、**古い**WordPressの管理画面に貼り付けてね。逆にするとデータが消えちゃうよ。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

**Migrate**を押すと、数回のチェックの後すぐに移行が始まるよ。

移行はバックグラウンドで行われ、ダウンタイムなしで数分で完了するはず。サイトの規模によって時間は変わるから気長に待ってね。完了すると成功画面が表示されるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
移行が終わったら、新しいWordPressでサイトをしっかりテストして、問題なく移行できているか確認しよう。
:::

## ステップ5：ドメインのDNS設定更新

移行が完了したら、最後にドメインのDNS設定を更新して、新しいホスティングに向ける必要があるよ。ドメインのDNS設定で、ZAP-HostingのホスティングのIPアドレスを指定して、WordPressサイトをZAP-Hostingのサーバーから表示させよう。

ホスティングのIPアドレスは、ZAP-Hostingのウェブインターフェースの**DNS**セクションで確認できるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

IPアドレスがわかったら、もしドメインがZAP-Hostingアカウントにない場合は、ドメイン提供元のサイトにログインしてDNS設定を開こう。

外部プロバイダのDNS設定で、古いホスティングを指している**Aレコード**をすべてZAP-HostingのIPアドレスに置き換えてね。

これでドメインがZAP-HostingのWordPressサイトを指すようになるよ。

:::info
DNSレコードの変更は最大24時間ほど反映にかかることがあるよ。通常はすぐだけど、遅れることもあるから気長に待とう。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## ステップ6：SSL証明書の設定

最後に、新しいホスティングのWordPressサイトにSSL証明書を設定しよう。デフォルトではドメインを追加しても暗号化されていないから、必ず設定しておくのがおすすめ。

詳しい手順は専用の[SSL証明書作成ガイド](webspace-plesk-ssl.md)を読んでね。

## まとめ

このガイドに沿って進めれば、古いWordPressサイトを新しいZAP-Hostingのホスティングに無事移行できるはず。移行後はしっかり動作確認して、問題がないかチェックしよう。

<InlineVoucher />