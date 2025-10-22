---
id: dedicated-linux-fivem
title: "専用サーバー：FiveM専用サーバーLinuxセットアップ（GS/TS3インターフェース）"
description: "txAdminで自分だけのFiveM専用サーバーをセットアップ＆運用して、マルチプレイを快適に楽しもう → 今すぐチェック"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## はじめに
専用サーバーを持っていて、txAdminで自分だけのFiveM専用サーバーをインストール＆運用したい？それならここがピッタリ！以下でインストールや設定に必要なステップと注意点を全部解説するよ。

:::warning  OSの選択とインストール済みが前提
専用サーバーにすでにOSを選んでインストール済みであることが前提だよ。まだなら、まずは[初期セットアップ](dedicated-setup.md)ガイドを参考にしてね。
:::



## 準備

FiveMサーバーをセットアップするには、実際のFiveM専用サーバーのセットアップ前にやっておくべき準備があるよ。


### データベースの準備

GS/TS3インターフェースオプションでは、すでに当社のデータベースが含まれているよ。でも、自分でデータベースサーバーやデータベースを用意したいなら、[データベースのインストール](dedicated-linux-databases.md)ガイドをチェックしてみてね。

:::warning
自分のデータベースを使う場合は、txAdminセットアップ時にあらかじめ用意されたデータベース情報を自分の情報に置き換える必要があるよ。
:::



### GS/TS3インターフェースのインストール
使いやすいGS/TS3インターフェースを使えば、FiveM専用サーバーを数クリックでインストールできるよ。事前知識は不要。必要なパッケージやサーバーファイルのセットアップ、インストール作業はすべて自動化されているから、時間も手間も節約できる！

:::warning
GS/TS3インターフェースは以下のOSで使えるよ：

- Debian: 10, 11
- Ubuntu: 20.04

(*) 近いうちに他のOSや新しいバージョンにも対応予定だよ。
:::

GS/TS3インターフェースがまだよくわからないなら、[GS/TS3インターフェース](dedicated-linux-gs-interface.md)ガイドを見てみてね。

GS/TS3インターフェースをインストールしたら、新しく作成されたゲームサーバーサービスを開こう。次にゲームを選ぶ必要があるから、**Games**ページに移動して、利用可能なゲームからtxAdminを探してインストールボタンをクリックしてね。

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### FiveMサーバーのライセンスキー作成

FiveMサーバーには必ず専用のライセンスキーが必要で、これは新しい[Cfx.reポータル](http://portal.cfx.re/)で管理されているよ。ライセンスキーはCfx.reアカウントに紐づいているから、サイトにログインして**Server**カテゴリに行き、**Generate Key**ボタンを押してキーを作成しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 設定

これでFiveMサーバーとtxAdminの設定を始められるよ。ゲームサーバーのダッシュボードを開いて、txAdminセクションにあるリンクとログイン情報からtxAdminを開いてログインしよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdminセットアップ

txAdminセットアップでは、5ステップで自分のFiveMサーバーをインストール＆設定するよ。txAdminの指示に従って、まずは**サーバー名**を決めてね。次に希望の**サーバータイプ**を選択。この例では、QBCoreがプリインストールされたFiveMサーバーのインストールを紹介しているよ。

**Deployment Type**ステップで**Popular Recipes**を選び、続けて**QBCore Framework Template**を選択。希望の**Data Directory**を確認して、**Recipe Deployer**を起動すればインストール完了。

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

これで専用サーバーにFiveM専用サーバーサービスを無事インストール＆設定できたよ。もし質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね！毎日対応してるから安心して🙂


<InlineVoucher />