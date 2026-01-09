---
id: palworld-connect
title: "Palworld：Palworldサーバーへの接続方法"
description: "Palworldサーバーへの接続方法を解説。マルチプレイにスムーズに参加しよう → 今すぐチェック"
sidebar_label: サーバーに接続
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Palworldサーバーへの接続方法を紹介します。事前にサーバーを自分好みに設定することをおすすめします。詳しくは[サーバー設定](palworld-configuration.md)ガイドをチェックしてね。

:::tip
現在、**Palworld（Xbox版）**もゲームサーバーで利用可能！Xbox/Microsoft Store版のゲームで遊べるよ。ゲームの切り替え方法は[ゲーム変更](gameserver-gameswitch.md)ガイドを見てみて。セーブデータのバックアップは忘れずにね。
:::

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/eA3xonLFkB4x3G6/preview" title="たった1分でPalworldサーバーをセットアップ！" description="実際に動いているところを見ると理解しやすい？そんなあなたにピッタリの動画！急いでいる時も、じっくり見たい時も、わかりやすく解説してるよ！"/>

<InlineVoucher />

## サーバーIPの確認

まずはPalworldサーバーのIPアドレスとポート番号を知る必要があります。直接接続するために、[ZAP-Hostingのウェブインターフェース](https://zap-hosting.com/en/customer/)にアクセスして、IPとポートを確認しておこう。

![](https://screensaver01.zap-hosting.com/index.php/s/DRxKHE7bP3FbFMo/preview)

もし外部の専用サーバーでPalworldサーバーを運用している場合は、ホストマシンのIPアドレスと設定ファイルで指定したポート番号（デフォルトは8211）を使ってね。ポートについては[サーバー設定](palworld-configuration.md)ガイドも参考にしてみて。

## 直接接続方法

まずはゲームランチャーからPalworldを起動し、メインメニューで**マルチプレイヤーゲームに参加**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/TZzLAS29rnpPmi6/preview)

専用サーバーブラウザの画面下部にある検索ボックスに、先ほど確認したIPアドレスとポート番号を入力。準備ができたら**接続**ボタンを押してサーバーに参加しよう。

:::note
必ず画面下の検索ボックスを使ってね。上の検索ボックスはサーバー名で検索するためのものだよ。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CG5gARbSxC3RpTb/preview)

もし接続できずタイムアウトエラーが出る場合は、入力したIPとポートが正しいか、サーバーがオンラインかどうかを確認してね。Palworldサーバーのウェブインターフェースのコンソール機能もデバッグに役立つよ。

<InlineVoucher />