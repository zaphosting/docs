---
id: dedicated-iso
title: "専用サーバー：自分のISO"
description: "iLOやリモートコンソールを使ってISOファイルを簡単にマウントし、効率的にサーバーを起動する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 自分のISO
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
ISOをマウントしたい？当社のISOでも、自分のISOでもOK！問題なし。豊富なISOファイルを用意しているほか、さらに色んなオプションもあるよ。

:::danger ISOファイルの選択と使用について
当社が積極的に提供していない自分のISO（OS）を使う場合、万が一トラブルが起きても動作保証はできません。 
:::



## 利用可能なマウント方法
自分のISOファイルをマウントする方法は2つ。ファイルを読み込むためにサーバーの再起動は必須だよ。基本的にマウントに制限はないけど、ISOファイルは必ずブート可能なものを使ってね。

## iLO経由でのマウント
iLO管理画面を開いて「Virtual Media」を選択
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* マウントしたいISOファイルのURLを入力。リンクは必ず .iso で終わるようにしてね
* 「Insert Media」を押す
* 「Server Reset」をクリックするとサーバーが再起動するよ

これでISOファイルが読み込まれるよ。

## リモートコンソール経由でのマウント

**HTML5コンソール**
リモートコンソール内で簡単にファイルをマウントできるよ：
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* ディスクアイコンをクリック
* 「CD/DVD」を選択
* 「Scripted media URL」か「Local .iso File」を選ぶ

「Scripted media URL」はサーバーやホスティングにアップロード済みのISOをマウントする方法で、「Local *.iso File」は自分のPCから直接ファイルを選んでアップロードなしでマウントできるよ。

ISOファイルを選んだら、サーバーの再起動が必要だよ。


**Javaコンソール**
HTML5コンソールと同じく、アプリ内で直接ISOファイルをマウントできるよ。
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* 「Virtual Drives」を開く

「Image File CD/DVD-ROM」は自分のPCから直接ファイルを選んでマウント、「URL CD/DVD-ROM」はサーバーやホスティングにアップロード済みのISOをマウントする方法だよ。

ISOファイルをセットしたら、サーバーの再起動が必要だよ。


## まとめ
おめでとう！無事にISOファイルを選んでマウントできたね。もし質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね！🙂


