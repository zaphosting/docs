---
id: webspace-htaccess-discord
title: "ホスティング：ドメイン経由でDiscord転送を設定する方法"
description: "ドメインを特定のURLにリダイレクトする方法を、ウェブサーバー設定で簡単に実現 → 今すぐチェック"
sidebar_label: Discord転送
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ドメインは通常、特定のURLではなく、サーバーやウェブサイトのメインアドレスにしか転送できません。でも、特定のURLに向けたい場合は、ウェブサーバーと`.htaccess`ファイルを使ったリダイレクト設定で実現可能です。これでドメインアクセスを自動的に目的のURLに転送できます。

<InlineVoucher />



## 準備

この転送を実現するには、すでに自分のドメイン（TLD）とホスティングパッケージを持っていることが前提です。ドメインをホスティングパッケージに接続しましょう。やり方がわからない場合は、簡単に使える[EasyDNS](domain-easydns.md)オプションを活用してください。

:::warning DNSの変更には時間がかかるよ

DNS設定の変更は、世界中で完全に反映されるまで最大**24時間**かかることがあります。場合によってはもっと早いこともありますが、サーバーごとのキャッシュの影響で遅延は普通です。

:::

ドメインが無事ホスティングに向いてアクセスできるようになったら、Discord転送の設定を始めましょう。



## 設定方法

転送設定には`.htaccess`ファイルを作成して設定する必要があります。まず、Pleskの管理画面でドメインのファイルマネージャーにアクセスしてください。そこでプラスアイコンをクリックして、`discord`という名前の新しいフォルダを作成します。

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

`discord`フォルダに移動し、そこで`.htaccess`という名前の新しいファイルを作成します。作成したファイルをテキストエディタで開き、転送ルールを追加します。以下の内容をコピー＆ペーストしてください：
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

このルールとリダイレクトを自分のドメインで機能させるために、`example-example.de`の部分を自分のドメイン名に書き換えてください。また、Discordの招待URLも自分のサーバーのものに置き換えて保存しましょう。

これで、`beispiel-example.de/discord`のように、ドメイン＋`/discord`パスでリダイレクトが使えるはずです。

## まとめ

すべての手順を正しく行えば、ドメインからDiscordサーバーへの転送設定が完了しています。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />