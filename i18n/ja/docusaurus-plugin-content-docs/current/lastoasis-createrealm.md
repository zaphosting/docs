---
id: lastoasis-createrealm
title: "Last Oasis: 新しいRealmの作成"
description: "Last OasisのRealmとOasisを作成・認証して、スムーズなゲームプレイとサーバー管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Realmを作成
services:
  - gameserver-lastoasis
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Last Oasisのゲームサーバーは、公式サイトと認証するためにいくつかの設定ステップが必要です。このガイドでは、Last Oasisで自分のRealmを作成し、新しいRealm内にOasisをセットアップする手順を解説します。

<InlineVoucher />

## 準備
新しいRealmをセットアップするための前提条件のひとつは、公式サイトからキーを生成し、公式オンラインサービスと認証できるようにすることです。

まずは、[公式Last Oasis](https://myrealm.lastoasis.gg/)サイトにアクセスし、SteamまたはXboxの好きなプラットフォームでログインしましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/Z2sPJLFks9LY8cg/preview)

## サーバーキーの設定
ログインすると、すでにゲームサーバー用の**CustomerKey**が発行されています。

![](https://screensaver01.zap-hosting.com/index.php/s/DgdDoCHf7DDjZ2s/preview)

ゲームサーバーのウェブインターフェースの**Settings**セクションに移動し、このコードを**Customer Key**欄に入力してください。変更後は必ず保存しましょう。

## プロバイダーキーの設定
ゲームサーバーを一意に識別するためのプロバイダーキーも作成する必要があります。**Add Key**ボタンを押してメニューを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/JMQPTZrHcCxgEz2/preview)

メニューでわかりやすい名前と説明を入力し、**Add**を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/bfiaA2gjjjxESpM/preview)

:::tip
Realm内で複数のOasisを同時に接続・稼働させたい場合は、[Multiple Oases](lastoasis-multiple-oases.md)ガイドを参考に設定方法をチェックしてね。
:::

再度、ゲームサーバーのウェブインターフェースの**Settings**セクションに戻り、このコードを**ProviderKey**欄に入力して保存してください。

## Realmの作成
これでRealmを作成する準備が整いました。同じく[公式Last Oasis](https://myrealm.lastoasis.gg/)サイトの**Realms**セクションに移動し、新しいRealmを作成しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/ydzjKZTgG4L7QpQ/preview)

名前を決めて、必要に応じて追加情報を入力します。準備ができたらRealmを保存してください。これでサーバーに接続できるようになります。

![](https://screensaver01.zap-hosting.com/index.php/s/4rJq5r2zfHx66Qs/preview)

Realmを作成すると、全体の概要が表示され、追加設定や便利な情報の確認が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/j5egcHeicf3QPiR/preview)

## Oasisの作成
最後のステップは、Realm内にOasisを作成することです。所有しているゲームサーバーごとに別々のOasisを作成する必要があります。例えば、ゲームサーバーを2台持っている場合は、それぞれにOasisを作成しましょう。

Realmの概要画面で**Manage**ボタンを押します。

![](https://screensaver01.zap-hosting.com/index.php/s/GNDZ7DaeLT2qAoC/preview)

新しいページでOasisを設置したい場所を選び、**Add**を押して確定します。

![](https://screensaver01.zap-hosting.com/index.php/s/dXKXKod6y8NE8SC/preview)

名前を設定し、マップを選択する画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/aKJmGmGQmz65Xnz/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/Hrq49c3TArdYXdG/preview)

設定が完了したら、**Add Oasis**を押してOasisを作成し、**Activate**ボタンで有効化しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/tfEXd4GgAMDd8sE/preview)

:::tip
Realm内で複数のOasisを同時に接続・稼働させたい場合は、[Multiple Oases](lastoasis-multiple-oases.md)ガイドを参考に設定方法をチェックしてね。
:::

これで、Last Oasisのゲームサーバー用に新しいRealmとOasisのセットアップが完了です。

<InlineVoucher />