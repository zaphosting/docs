---
id: dedicated-linux-fivem
title: "専用サーバー：FiveM専用サーバーLinuxセットアップ（GS/TS3インターフェース）"
description: "txAdminを使って自分だけのFiveM専用サーバーをセットアップ＆運用する方法をチェック → 今すぐ詳しく見る"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## はじめに
専用サーバーを持っていて、txAdminで自分だけのFiveM専用サーバーをインストール＆運用したい？それならここがピッタリ！以下でインストールや設定に必要なステップや注意点を全部解説していくよ。

:::warning  OSの選択とインストール済みが前提
専用サーバーにすでにOSを選んでインストール済みであることが前提だよ。まだなら、まずは[専用サーバーの初期セットアップ](dedicated-setup.md)ガイドを参考にしてね。
:::



## 準備

FiveMサーバーをセットアップするには、実際のFiveM専用サーバーのセットアップを始める前にやっておくべき準備があるよ。


### データベースの準備

GS/TS3インターフェースオプションでは、すでに当社のデータベースが含まれているよ。でも、自分でデータベースサーバーやデータベースを用意したい場合は、[データベースのインストール](dedicated-linux-databases.md)ガイドをチェックするのがおすすめ。

:::warning
自分のデータベースを使う場合は、txAdminセットアップ時にあらかじめ設定されているデータベース情報を自分のものに置き換える必要があるよ。
:::



### GS/TS3インターフェースのインストール
使いやすいGS/TS3インターフェースを使えば、FiveM専用サーバーを数クリックでインストールできるよ。専門知識は不要。必要なパッケージやサーバーファイルのセットアップ、実際のインストールはすべて自動化されていて、時間も手間も節約できる。

:::warning
GS/TS3インターフェース機能は以下のOSで使えるよ：

- Debian: 10, 11
- Ubuntu: 20.04

(*) 近いうちに他のOSや新しいバージョンも対応予定だからお楽しみに！
:::

GS/TS3インターフェースをまだ使ったことがないなら、[GS/TS3インターフェース](dedicated-linux-gs-interface.md)ガイドを見てみてね。

GS/TS3インターフェースをインストールしたら、新しく作成されたゲームサーバーサービスを開こう。そこでゲームを選択する必要があるよ。**Games**ページに移動して、利用可能なゲームからtxAdminを探してインストールボタンをクリックしてね。

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### FiveMサーバーのライセンスキー作成

FiveMサーバーにはそれぞれ専用のライセンスキーが必要で、これは新しい[Cfx.reポータル](http://portal.cfx.re/)で管理されているよ。ライセンスキーはCfx.reアカウントに紐づいているから、サイトにログインして**Server**カテゴリに行き、**Generate Key**ボタンをクリックしてキーを作成しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 設定

これでFiveMサーバーとtxAdminの設定を始められるよ。ゲームサーバーのダッシュボードを開いて、txAdminセクションにあるリンクとログイン情報を使ってtxAdminを開き、ログインしよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdminセットアップ

txAdminセットアップでは、自分のFiveMサーバーを5ステップでインストール＆設定するよ。txAdminの指示に従って、まず**サーバー名**を決めてね。次に希望の**サーバータイプ**を選択。この例では、QBCoreがプリインストールされたFiveMサーバーのインストールを紹介しているよ。

**Deployment Type**ステップで**Popular Recipes**を選び、続けて**QBCore Framework Template**を選択。希望の**Data Directory**を確認して、**Recipe Deployer**を起動してインストールを完了させよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### ファイアウォール設定

GS/TS3インターフェース経由でFiveMサーバーをインストールすると、必要なポート転送はファイアウォールで**自動的に**設定されるよ。もし問題があれば、SSHで以下のコマンドを使って手動でポート転送を設定することもできる。

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## まとめ

これで専用サーバーにFiveM専用サーバーサービスを無事インストール＆設定できたよ。もし質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね！毎日対応してるから安心して 🙂



