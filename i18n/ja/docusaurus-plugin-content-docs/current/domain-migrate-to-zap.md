---
id: domain-migrate-to-zap
title: "ZAPへの移行：ドメイン"
description: "ドメインをZAP-Hostingにスムーズに移管して、簡単な管理と信頼できるホスティングサービスを楽しもう → 今すぐ詳しくチェック"
sidebar_label: ドメイン
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ZAP-Hostingのサービスに興味がある初心者さん？それならここがピッタリ！まずはZAP-Hostingへようこそ！当社のサービスに興味を持っていただき、他社から既存のドメインをどうやって移管するか知りたいあなたのために、このガイドを用意しました。ここでは、ドメインをZAPに無事に移管するための基本的なステップをわかりやすく説明します。

## メリット

どのプロバイダーが自分に合っているか、迷っている人も多いはず。そんな決断には時間がかかることもありますよね。だからこそ、ZAP-Hostingのメリットをシェアして、あなたの決断をサポートしたいと思います。ZAP-Hostingは10年以上にわたりサービスを提供しており、サーバーのレンタル業界で信頼と実績のあるプロバイダーです。

管理画面は直感的で簡単にドメイン管理ができるのが特徴。さらに、他のZAP製品用にサブドメインをワンクリックで作成できるのも便利です。

もしZAPに決めたなら、さっそく既存のドメインをZAP-Hostingに移管しましょう。移管は3つのステップで進みます：準備（Authコードの取得）、移管（ドメインの登録と移管）、そして移管後の設定調整ですべてがスムーズに動くようにします。

## 準備

すでに登録済みのドメインを移管するには、**Authコード**（認証コード）が必要です。これはドメインのパスワードのようなもので、ドメインを別のプロバイダーに移す際に必須です。このコードがあることで、ドメイン移管が正当な所有者からのリクエストであることが保証されます。

一部のプロバイダーは管理画面で直接Authコードを提供しています。もし見つからなければ、現在のプロバイダーに移管希望を伝え、Authコードを発行してもらいましょう。

:::warning 有効期限について

Authコードには有効期限があります。有効期限が切れたら新しいコードを再度取得する必要があります。有効期限はドメインの種類（拡張子）によって異なります。
:::

## 移管

Authコードを用意できたら、ZAP-Hostingでドメインの注文と登録を進めましょう。こちらの[**ドメイン注文ページ**](https://zap-hosting.com/en/shop/product/domain/)にアクセスし、まずは個人情報を入力。その後、移管したいドメインを検索します。

![](https://screensaver01.zap-hosting.com/index.php/s/3dmY76dZscz9DPM/preview)

:::info
ドメイン移管時には、注文手続きの中で1年分の更新料金を支払う必要があります。これはどのプロバイダーでも共通のルールです。
:::

希望のドメインと利用可能なドメイン拡張子の一覧が表示されます。すでに他社で登録されているドメインは、矢印付きのグレーのボタンで識別できます。

![](https://screensaver01.zap-hosting.com/index.php/s/omnaMqXJgarxsqW/preview)

移管したいドメインの矢印ボタンをクリックすると、ZAP-Hostingアカウントへの移管を承認するための入力フォームが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/fXjwGCX7kFtPnTB/preview)

ここに、準備段階で前のプロバイダーから受け取った**Authコード**を入力してください。入力が完了したら、緑色の**追加**ボタンで送信します。

:::danger 入力内容の確認を忘れずに

**Authコード**は正確かつ有効なものを入力してください。間違っていると注文処理やドメイン移管が遅れたり失敗したりする可能性があります。
:::

これでドメイン移管の手続きが開始されました。移管完了までの時間はドメイン拡張子や前のプロバイダーによって異なりますが、通常は72時間以内に完了します。ただし、状況によってはもっと時間がかかることもあります。

## 設定

ドメインが無事にZAPに移管されたら、設定を始めましょう。管理画面からDNS設定やネームサーバーの変更などが可能です。ドメイン関連の便利なガイドも用意していますので、ぜひ参考にしてください：

- [はじめに](domain-introduction.md)
- [ドメインの注文](domain-order.md)
- [EasyDNS](domain-easydns.md)
- [ProfiDNS](domain-profidns.md)
- [ExpertDNS](domain-expertdns.md)
- [ドメインレコード](domain-records.md)
- [ゲームサーバー転送](domain-gameserver-srv-link.md)
- [TeamSpeak 3転送](domain-teamspeak-redirect.md)
- [Cloudflare設定](domain-cloudflare-setup.md)

## サポート

質問やトラブルがあれば、サポートチームが毎日朝から深夜まで対応しています。移管で困ったら、[**ライブチャット**](https://zap-hosting.com/)、**[チケットシステム](https://zap-hosting.com/en/customer/support/)**、またはメール（[**support@zap-hosting.com**](mailto:support@zap-hosting.com)）で気軽にご連絡ください。全力でサポートします！ :)

<InlineVoucher />