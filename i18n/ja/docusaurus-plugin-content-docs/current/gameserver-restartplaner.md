---
id: gameserver-restartplaner
title: 'ゲームサーバー: 再起動プランナー - サーバーの自動再起動を実行しよう'
description: "毎日のゲームサーバー再起動を自動化してパフォーマンスと稼働率を向上させる方法 → 今すぐチェック！"
sidebar_label: 再起動プランナー
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
再起動プランナーは、ゲームサーバー向けの機能で、毎日決まった時間にサーバーを自動で再起動する設定ができます。

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="サーバーの再起動プランナー設定方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたにピッタリ！忙しい時も、じっくり情報を吸収したい時も、この動画でわかりやすく解説します！"/>

:::info
この機能はゲームサーバーのみで利用可能です。
:::

この機能はゲームサーバーのインターフェース内で見つけられます。

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## 新しいエントリーを作成する

:::info
***注意:*** 再起動プランナーの変更は、サーバーを再起動した後にのみ反映されます。
:::

自動再起動を追加したい場合は、グレーの「**+**」ボタンをクリックしてください。

次のウィンドウで「週次」か「日次」の再起動を選べます。例として、1日に4回、6時間間隔で再起動したい場合は「**日次**」を選び、「**06:00**」を設定します。設定が終わったら「**保存**」をクリックして確定します。

この手順を希望する自動再起動の数だけ繰り返します。「**24:00**」を設定するとエラーになるので、「**00:00**」を使うようにしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### オフラインサーバーを起動

このオプションを有効にすると、停止中のサーバーも指定した時間に自動で起動します。無効のままだと、ゲームサーバーが「**オンライン**」状態の時だけ再起動されます。

## コマンドオプション

指定した自動再起動の中で、再起動直前にコマンドを自動実行するための機能です。使えるコマンドの種類はゲームによって異なり、すべてのゲームで対応しているわけではありません。

例えば、Minecraftでは再起動前にプレイヤーに警告を出すために *say* コマンドを使えます。

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### 遅延設定

遅延フィールドは、コマンド実行とサーバー再起動の間の時間を秒単位で設定します。例えば5分の遅延を設定したい場合は「300」と入力してください。

<InlineVoucher />