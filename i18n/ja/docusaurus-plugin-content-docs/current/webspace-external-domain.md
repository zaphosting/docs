---
id: webspace-external-domain
title: "ホスティング：外部ドメインの連携方法"
description: "外部ドメインをZAP-Hostingのホスティングに接続して、ウェブサイトやメールをスムーズに使う方法を解説 → 今すぐチェック"
sidebar_label: 外部ドメインを連携する
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

すでに他社でドメインを取得していて、それをZAP-Hostingのホスティングに接続したい？問題なし！そのためには、ドメインのDNS設定をドメイン提供元で調整する必要があります。このガイドでは、ドメインを正しくホスティングに向けるために作成すべきDNSレコードを詳しく説明します。

:::info ドメインを移管しよう
ドメインをZAP-Hostingに移管すれば管理がもっとラクに。数クリックでホスティングにドメインを接続でき、さらに多くの便利な機能も使えます。ドメイン移管の方法は[ドメイン移管](domain-transfer.md)ガイドでチェック！
:::

<InlineVoucher />



## Pleskでドメインを追加する

外部ドメインをホスティングに連携する前に、まず**Plesk**でドメインを追加する必要があります。これは**ホスティング設定**の項目からドメインを追加すればOK。やり方がわからなければ、詳しい手順は[ドメイン追加](https://zap-hosting.com/guides/docs/webspace-adddomain)ガイドを見てみてね。

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## DNS設定を調整する

外部ドメインをZAP-Hostingのホスティングに接続するには、まずドメインを取得したプロバイダーでDNS設定を変更する必要があります。ウェブサイトやメールが正しく動くためには、ドメインがどのサーバーにアクセスやメールを送るべきかを知っている必要があるからです。これを実現するために必要なDNSレコードを作成します。

Aレコードを設定するには、ホスティングのIPアドレスが必要です。この情報はZAPホスティングのホスティングダッシュボードで確認できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

IPアドレスがわかったら、ドメインプロバイダーの管理画面で必要なDNSレコードを追加しましょう。Aレコードでドメインをホスティングに向け、MXやTXTレコードでメールの配送やドメイン認証を設定します。

DNSレコードの種類や役割についてもっと詳しく知りたい場合は、[ドメインレコード](domain-records.md)ガイドを参考にしてみてください。

以下は設定に必要なDNSレコードの一覧です：

| 名前                           | 種類 | 値                             | TTL  | 優先度 |
| ------------------------------ | ---- | ------------------------------- | ---- | ------ |
| *                              | A    | ホスティングのIPアドレス       | 3600 | 0      |
| mail                           | A    | ホスティングのIPアドレス       | 3600 | 0      |
| www                            | A    | ホスティングのIPアドレス       | 3600 | 0      |
| domain.tld.                    | A    | ホスティングのIPアドレス       | 3600 | 0      |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10     |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0      |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0      |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0      |

:::warning DNS設定の反映には時間がかかることも

DNS設定の変更は世界中に完全に反映されるまで最大24時間かかることがあります。この間、ドメインがすぐに新しいホスティングやメールサービスに向かない場合があるので、しばらく待ってみてくださいね。
:::




## まとめ
この手順でドメインをホスティングに設定・連携できます。もしわからないことや困ったことがあれば、毎日対応しているサポートチームまで気軽にお問い合わせくださいね！🙂


<InlineVoucher />