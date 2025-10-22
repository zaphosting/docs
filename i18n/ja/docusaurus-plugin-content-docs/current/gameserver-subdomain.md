---
id: gameserver-subdomain
title: 'ゲームサーバー: ZAPサブドメイン'
description: "ゲームサーバーのサブドメイン設定と管理方法をチェックして、アクセス性とカスタマイズ性をアップ → 今すぐ詳しく見る"
sidebar_label: ゲームサーバーサブドメイン
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

当社のゲームサーバーでは、サーバー用のサブドメインを簡単かつスピーディに設定できる機能がついています。このガイドでは、DNSサブドメイン機能を使ってZAP Cloudのサブドメインを生成したり、自分のドメインを設定して使う方法を紹介します。

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="ゲームサーバー向けZAP Cloudドメイン" description="実際に動いているところを見ると理解が深まる？そんなあなたに！忙しい時も、じっくり情報を楽しみたい時も、わかりやすく解説した動画をどうぞ！"/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## 利用可能状況

サブドメイン機能は新規・既存のお客様どちらも利用可能です。新規のお客様はインストール時に自動で`xxx`**.zap.cloud**のサブドメインが設定されます。既存のお客様はゲームサーバーのウェブインターフェースの**設定->DNS設定**から手動で有効化してください。この操作方法は次のセクションで詳しく説明します。

すべてのゲームに対応しているわけではありませんが、FiveMやMinecraftなど人気ゲームで既に利用可能です！今後は対応ゲームをどんどん増やしていく予定です。技術的に対応が難しいゲームもありますが、そういった場合は通常通りIPアドレスがウェブインターフェースに表示されます。

:::tip
もしインストールしたゲームがまだ対応していなくても、[サポートチームにお問い合わせ](https://zap-hosting.com/en/customer/support/)いただければ対応可能か検討しますよ :)
:::

## サブドメインの管理（DNS）

ゲームサーバーのサブドメイン管理は簡単です。まずは**設定->DNS設定**にアクセスしましょう。

このページでは、無料のZAP Cloudサブドメインの管理や、ZAP-Hostingアカウントに登録済みの自分のドメインを使った設定ができます。

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
現在、1製品あたり最大3つのサブドメインをアクティブにできます（ランダム生成されるZAP Cloudサブドメインは除く）。
:::

### ランダムZAP Cloudサブドメイン

ランダムなZAP Cloudサブドメインを生成するには、この設定ページにある**サブドメインを解決する**ボタンを使います。

:::info
既存のお客様も初めてランダムZAP Cloudサブドメインを生成する際は、このボタンを使ってください。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### カスタムZAP Cloudサブドメイン

自分好みのZAP Cloudサブドメインを作成できます。使いたいサブドメイン名を入力し、ドロップダウンメニューから**.zap.cloud**（デフォルト）を選択するだけ。

:::note
エラーが出た場合、そのサブドメインは既に使われているか、禁止ワード・文字が含まれている可能性があります。お客様保護のための制限です。
:::

あとは**エントリーを作成**ボタンを押せば、リストにサブドメインが表示されます。完全に機能するまで数分かかることがあります。

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### 自分のドメイン

:::info
自分のドメインでサブドメインを作るには、そのドメインがZAP-Hostingアカウントに紐づいている必要があります。[当社サイトで購入](https://zap-hosting.com/en/shop/product/domain/)するか、他社から移管してください。
:::

自分のドメインでサブドメインを作る手順はカスタムZAP Cloudサブドメインと同じです。使いたいサブドメイン名を入力し、ドロップダウンメニューから自分のドメインを選択します。

:::note
エラーが出た場合、そのサブドメインは既に使われているか、禁止ワード・文字が含まれている可能性があります。お客様保護のための制限です。
:::

**エントリーを作成**ボタンを押せばリストに表示されます。完全に機能するまで数分かかることがあります。

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## トラブルシューティング

### ZAP Cloudサブドメイン

ZAP Cloudサブドメインで問題が起きたら、先ほど説明した**設定->DNS設定**に行き、ページ下部の**サブドメインを解決する**ボタンを押してみてください。

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

数分待ってから、正常に動作しているか再度チェックしましょう。

### カスタムドメイン

サブドメイン作成時に自分のドメインがドロップダウンに表示されない場合は、そのドメインがZAP-Hostingアカウントに紐づいていない可能性が高いです。

ドメインがアカウントに登録されているか確認し、必要なら他社から移管してください。

それでも問題が解決しない場合は、[サポートチームにチケットを作成](https://zap-hosting.com/en/customer/support/)して相談してください。喜んでサポートします！

<InlineVoucher />