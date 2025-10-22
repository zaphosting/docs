---
id: fivem-licensekey
title: "FiveM: カスタムライセンスキーを追加する"
description: "FiveMのライセンスキーを自分で作成・管理して、サブスクリプション特典をアンロックし、サーバー設定をパーソナライズする方法 → 今すぐチェック"
sidebar_label: 自分のライセンスキー
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

デフォルトでは、FiveMゲームサーバーには自動生成されたライセンスキーが付属しています。このキーを変更して自分のFiveMライセンスキーを使うことで、OnesyncなどのFiveM Element Clubのサブスクリプション特典にアクセスできたり、サーバーオーナー名を自分の名前に変更したりと、さまざまなメリットがあります。このガイドでは、FiveMゲームサーバーに自分のライセンスキーを作成して追加する手順を解説します。

<InlineVoucher />

## 準備

キー作成を始めるには、まず公式の **[Cfx.re ポータル](https://portal.cfx.re/)** にアクセスし、Cfx.reフォーラムのアカウントでログインしてください。まだアカウントを持っていない場合は、登録オプションから新規作成が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info 新しいCfx.reポータルについて
Cfx.reポータルは、FiveMに関するすべてを管理する新しい拠点で、旧FiveM KeymasterやPatreonの仕組みを置き換えました。このポータルでは、サーバーのライセンスキー管理、購入済みアセットのアクセス、FiveMサブスクリプションの管理を一元化できます。

Patreonサブスクリプションを新しいCfx.reポータルに移行して特典を維持する方法については、[公式ブログ記事](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/)をぜひチェックしてください。
:::

## ライセンスキーの生成

ポータルにログインしたら、上部ナビゲーションバーの **Servers** セクションに移動して、キー管理のメイン画面を開きます。ここが旧FiveM Keymasterの代わりとなるオールインワンの管理画面です。既存のライセンスキーはこのページの **Re-Activate** オプションで更新も可能です。

**Generate Key** ボタンを押して登録画面を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

表示された入力欄に、後でわかりやすいようにキーの名前を入力し、準備ができたら生成ボタンを押します。

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

テーブルに新しいキーが追加されているはずです。右側のアクションボタンからキーをコピーして、次のステップに備えましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## サーバーへのキー追加

ライセンスキーが準備できたら、FiveMゲームサーバーの既存のライセンスキーを新しく作成したキーに差し替えます。これには、FiveMゲームサーバーのtxAdminパネルにアクセスする必要があります。サーバーのウェブインターフェースのダッシュボードからアクセス可能です。画面に表示されているログイン情報を使ってパネルにログインしてください。

txAdminの画面に入ったら、左側メニューの **CFG Editor** を開き、`server.cfg` ファイルを編集します。`sv_licensekey` パラメータの行を探し、そこに自分のカスタムライセンスキーを入力してください。編集が終わったら保存ボタンを押して変更を確定します。

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## まとめ

カスタムライセンスキーの設定が完了したら、サーバーを再起動して新しいキーを有効にしましょう。これでFiveMゲームサーバーにカスタムライセンスキーを無事追加できました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせくださいね！🙂

<InlineVoucher />