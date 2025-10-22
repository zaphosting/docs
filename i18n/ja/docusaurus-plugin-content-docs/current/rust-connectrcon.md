---
id: rust-connectrcon
title: "Rust: RCONでサーバーに接続する方法"
description: "RCONを使ってサーバーをリモート管理し、効率的にコマンドを実行・操作する方法をチェック → 今すぐ詳しく見る"
sidebar_label: RCONで接続
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## RCONって何？

RCONは、サーバーのコンソールに直接アクセスせずにコマンドを実行できるプロトコルです。

<InlineVoucher />

### WebRCONを有効化する

まず、接続する前にWeb RCONが有効になっていることを確認しましょう。  
有効にするには、**設定**タブにアクセスしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

そして、このページで直接有効化します。  
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
有効化後はサーバーの再起動が必要です。 
:::

### RCONプログラムをインストールする

RCONプログラムから接続する必要があります。いくつか種類がありますが、  
ここではおすすめの[RustAdmin](https://www.rustadmin.com/)を例に紹介します。

公式サイトのボタンから簡単にインストールできます。  
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## RCONで接続する

WebAdminを開いたら、上部の**Server**を押して、次に**Connect**を押します。

:::info
サーバーが完全にONLINE状態でないとRCONから接続できません。 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

すると設定画面に移動します。  
ここでサーバーの情報を入力してください。

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
TIP: RCONポートとRCONパスワードは、WebRCONを有効にした**設定**タブで確認できます。 
:::

情報を入力したら設定を保存します。

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

そして、Server -> Connectを押します。

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

接続に成功すると、画面下部に緑色の「Connected」が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

これでRCONを使ってサーバーを管理できるようになりました！ :)

<InlineVoucher />