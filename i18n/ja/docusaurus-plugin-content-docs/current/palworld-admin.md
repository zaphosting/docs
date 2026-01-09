---
id: palworld-admin
title: "Palworld: 管理者設定"
description: "Palworldサーバーを管理者パスワードで保護し、信頼できるプレイヤーを効果的に管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者設定
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに
このガイドでは、管理者パスワードを設定し、ゲーム内で自分を管理者として追加する方法を解説します。このパスワードは信頼できるプレイヤーと共有して、さまざまな管理者コマンドを使えるようにできます。サーバーコマンドの詳細は、[サーバーコマンド](palworld-server-commands.md)ガイドで確認できます。
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="たった1分でPalworldサーバーをセットアップ！" description="実際に動いているのを見ると理解しやすい？そんなあなたにピッタリ！忙しい時も、楽しく情報を吸収したい時も、この動画で全部わかります！"/>

<InlineVoucher />

## 管理者パスワードの設定

まずは設定画面にアクセスしましょう。アクセス方法はいくつかありますが、ここではそれぞれの方法とパスワード設定手順を紹介します。最も使いやすいのは**Webインターフェース**からの方法なのでおすすめです。管理者パスワードを設定したら、次のセクションに進みましょう。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webインターフェースから" default>

#### Webインターフェースから

一番簡単なのは、ゲームサーバーのWebインターフェースの**設定**セクションにアクセスする方法です。

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

**設定**内で**ゲームサーバーパスワード**の項目を探し、使いたいパスワードを入力してください。

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
パスワードを入力したら、画面上部までスクロールして緑色の**保存**ボタンを必ず押して設定を確定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="WI設定ファイルから">

#### WI設定ファイルから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると変更が元に戻ってしまいます。
:::

直接ファイルを編集したい場合は、ゲームサーバーのWebインターフェースの**設定ファイル**セクションに行き、青い編集ボタンを押します。

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

サイト上でテキストエディタが開くので、`CTRL+F`で**AdminPassword**を検索し、設定したい管理者パスワードに書き換えます。最後にファイルを保存してサーバーを起動してください。

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="FTPから">

#### FTPから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると変更が元に戻ってしまいます。
:::

最後の方法はFTP経由でファイルにアクセスする方法です。FTPの使い方がわからない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。ただし、この方法は時間がかかるため、ファイルの直接編集はWebインターフェースの**設定ファイル**セクションを使うのがおすすめです。

</TabItem>
</Tabs>

## 自分を管理者に設定する

管理者パスワードを設定したら、ゲーム内で自分を管理者として追加しましょう。Palworldを起動してサーバーに接続します。接続方法がわからない場合は、[サーバーへの接続](palworld-connect.md)ガイドを参照してください。

ゲーム内でチャットを開くには`Enter`キーを押します。次に、以下のコマンドを入力してください。`[password]`は先ほど設定した管理者パスワードに置き換えます。

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

正しく入力できていればチャットに成功メッセージが表示されます。エラーが出た場合は、入力した管理者パスワードが正しいか、前のステップで設定したものと一致しているかを確認してください。

<InlineVoucher />