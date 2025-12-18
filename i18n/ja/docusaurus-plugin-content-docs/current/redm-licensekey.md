---
id: redm-licensekey
title: "RedM：カスタムライセンスキーの追加"
description: "RedMのライセンスキーを自分で作成・管理して、サブスクリプション特典をアンロックし、サーバー設定をカスタマイズする方法をチェック → 今すぐ詳しく見る"
sidebar_label: 自分のライセンスキー
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

デフォルトでは、あなたのRedMゲームサーバーには自動生成されたライセンスキーが付属しています。このキーを変更して自分のRedMライセンスキーを使うことには、OnesyncなどのRedMエレメントクラブのサブスクリプション特典にアクセスできたり、サーバーオーナー名を自分の名前に変更できたりと、さまざまなメリットがあります。このガイドでは、自分のライセンスキーを作成し、RedMゲームサーバーに追加する手順を解説します。

<InlineVoucher />

## 準備

キー作成を始めるには、まず公式の **[Cfx.re ポータル](https://portal.cfx.re/)** にアクセスし、Cfx.reフォーラムのアカウントでログインしてください。まだアカウントを持っていない場合は、登録オプションから新規作成できます。

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info 新しいCfx.reポータルについて
Cfx.reポータルは、旧RedM KeymasterやPatreonの仕組みに代わる、RedM関連のすべてを管理できる新しい拠点です。このポータルでは、サーバーのライセンスキー管理、購入済みアセットのアクセス、RedMサブスクリプションの管理が一括で行えます。

Patreonサブスクリプションを新しいCfx.reポータルに移行して特典を維持する方法については、[公式ブログ記事](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/)をぜひチェックしてください。
:::

## ライセンスキーの生成

ポータルにログインしたら、上部ナビゲーションバーの **Servers** セクションに移動して、メインのキー管理画面を開きます。ここが旧RedM Keymasterの代わりとなるオールインワンの管理画面です。このページでは、既存のライセンスキーを **Re-Activate** オプションで更新することもできます。

**Generate Key** ボタンを押して、登録画面を開きましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

表示されたフォームに、後でわかりやすいようにキーの名前を入力し、準備ができたら生成ボタンを押します。

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

テーブルに新しいキーが追加されているはずです。右側のアクションボタンからキーをコピーして、次のステップに備えましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## サーバーへのキー追加

ライセンスキーが準備できたら、RedMゲームサーバーの既存のライセンスキーを新しく作成したキーに差し替えます。これには、RedMゲームサーバーのtxAdminパネルにアクセスして設定を変更する必要があります。txAdminはゲームサーバーのウェブインターフェースのダッシュボードからアクセス可能です。ページに記載されているログイン情報を使ってパネルにログインしてください。

txAdminの画面に入ったら、左側メニューの **CFG Editor** に進み、`server.cfg` ファイルを開きます。エディター内で `sv_licensekey` パラメータの行を探し、そこに先ほどコピーしたカスタムライセンスキーを貼り付けて編集します。編集が終わったら保存ボタンを押して変更を保存しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## まとめ

カスタムライセンスキーの設定が完了したら、サーバーを再起動して新しいキーを有効にしてください。これでRedMゲームサーバーにカスタムライセンスキーを無事追加できました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせくださいね！🙂

<InlineVoucher />