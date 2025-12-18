---
id: voiceserver-query
title: "ボイスサーバー：TeamSpeak Queryアクセス"
description: "Queryログインを使ってTeamSpeakサーバーを外部から効率的に管理・運用する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Queryログイン
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

TeamSpeakのQueryログインを使うと、サーバークエリインターフェースにアクセスでき、コマンドでTeamSpeakサーバーを外部から管理できます。

:::warning サーバー管理者用Queryアクセスについて
当社のTeamSpeakサーバー製品にはサーバー管理者用Queryアクセスは含まれていません。 
:::

<InlineVoucher />

## ログイン情報

<Tabs>
<TabItem value="Webinterface" label="TeamSpeakサーバー製品" default>

セキュリティ上の理由から、**TeamSpeakサーバー製品**では**サーバー管理者用Query**ログインは利用できません。ただし、TeamSpeakサーバーの管理者権限を持っている場合は、以下の手順で自分専用のQueryログインを作成できます。

:::info
スナップショットのインポートやスロット・ポートの変更などの機能は利用できません。これらの設定は当社であらかじめ決められており、手動で変更することはできません。 
:::

自分専用のQueryログインを作成するには、TeamSpeakクライアントの「ツール」から「Server Query Login」をクリックします。
次にログイン名を入力します。これがログイン名にもなります。例：「MyQueryLogin」：

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

「OK」を押すとパスワードが表示されます。これは必ず保存してください。後から変更できません。 

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)


作成したログイン情報を使って、例えば[YaTQA](https://yat.qa)から接続できます。その際はサーバーのIPアドレス、Queryポート、サーバーポート、Queryログイン名とパスワードが必要です。 

サーバーのIPアドレス、Queryポート、サーバーポートはWebインターフェースのダッシュボードで確認できます： 

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="自分でホスト（VPS/専用サーバー）">

TeamSpeakサーバーを自分のVPSや専用サーバーにWebインターフェース経由でインストールした場合は、通常の「サーバー管理者用Query」が使えます。ログイン情報はTeamSpeakインスタンスのWebインターフェースで確認可能です。

</TabItem>
</Tabs>

## Queryへのアクセス

提供された、または自分で作成したQueryログイン情報を**YatQA**アプリのクイックコネクトに入力し、**接続ボタン**をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning カスタムQueryポートのエラーについて
初期インストール後にデフォルトのQueryポート以外を指定するとエラーが発生することがあります。これは正常な動作で、以下の方法で解決できます：

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## まとめ

YatQAを使って無事にQueryへの接続ができました！質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />