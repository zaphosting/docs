---
id: vrising-firststeps-connect
title: "V Rising: V Risingサーバーへの接続方法"
description: "V Risingサーバーに直接またはサーバーリスト経由で接続する方法を解説 → 今すぐチェック！"
sidebar_label: サーバーに接続
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、V Risingサーバーへの接続方法を紹介します。接続方法は2つあり、サーバーのIPアドレスを使った直接接続か、サーバーリスト経由の接続です。事前にサーバーを自分好みに設定することをおすすめします。詳しくは[サーバー設定](vrising-configuration.md)ガイドをチェックしてね。

<InlineVoucher />

## IPを使った直接接続

### サーバーIPの確認

まずはV RisingサーバーのIPアドレスとポート番号を知る必要があります。ZAP-Hostingの[ウェブインターフェース](https://zap-hosting.com/en/customer/)にログインして、IPとポートを確認しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

もし外部の専用サーバーでV Risingを運用している場合は、ホストマシンのIPがサーバーIPとなり、ポートは設定ファイルで指定した番号（デフォルトは9876）になります。ポートについては[サーバー設定](vrising-configuration.md)ガイドも参考にしてね。

### ゲーム内での接続方法

まずはゲームランチャーからV Risingを起動。メインメニューで**Play**を選択し、次に**Online Play**を選びます。

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

プレイしたいゲームモードを選ぶか、右下の**Show all Servers**を押してサーバーブラウザに直接アクセスしてもOK。

画面下の**Direct Connect**ボタンを押して、IPアドレスとポートを「123.456.679.123:9876」のように入力。パスワードが設定されている場合は、接続後に入力を求められます。

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

接続できずタイムアウトエラーが出る場合は、IPとポートが正しいか、サーバーがオンラインかを確認してね。ウェブインターフェースのコンソール機能もデバッグに役立ちます。

## サーバーリスト経由で接続

もっと簡単に接続したいならサーバーリスト経由がおすすめ。ただし、サーバー設定で公開設定（public）にしておく必要があります。

[サーバー設定](vrising-configuration.md)ガイドを参考に、設定ファイルやウェブインターフェースで`Name`と`ListOnMasterServer`のパラメータを追加してね。

設定が完了したら、メインメニューの**Play** → **Online Play** → 右下の**Show all Servers**を押してサーバーブラウザを開こう。名前検索やゲームモード、難易度などのフィルターを使ってサーバーを簡単に見つけられるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />