---
id: redm-txadmin-setup
title: "RedM: txAdmin セットアップ"
description: "txAdminのフル機能ウェブパネルでRedMサーバーを効率的に管理・監視する方法 → 今すぐ詳しくチェック"
sidebar_label: txAdmin セットアップ
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

txAdminは完全無料で使える、RedMゲームサーバーを管理＆監視するためのフル機能ウェブパネルです。RedMサーバーの管理を超簡単にするための多彩な機能が揃っています。txAdminのセットアップは完全無料なので、シンプルかつ機能的なRedMサーバー用ウェブパネルの利用を今すぐ始めましょう。

<InlineVoucher />

## アクセス

ゲームサーバーのダッシュボード内のtxAdminエリアに、txAdminへのリンクとアクセス情報が記載されています。これで簡単にtxAdminインターフェースにアクセスしてセットアップを開始できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

ユーザー名とパスワードの情報をコピーし、リンク（IPアドレス:ポート）をクリックしてtxAdminインターフェースにアクセスしログインしてください。txAdminインターフェースは新しいウィンドウで開き、指定されたアクセス情報でログインします。

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## セットアップ

ログインに成功したら、txAdminとサーバーのセットアップを始めましょう。txAdminのホームページ（ダッシュボード）が表示されているはずです。左上に「サーバーはまだ設定されていません」というメッセージがあるので、**セットアップページへ移動**をクリックしてセットアップを開始します。

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### ようこそ＆サーバー名

まずはプロジェクト用に使いたいサーバー名を決めましょう。この名前はサーバーリスト用ではなく、txAdminインターフェース内やチャット・Discordメッセージ用にのみ使われます。

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### デプロイタイプ

デプロイタイプでは、サーバーのセットアップ方法を選びます。選択肢は**Popular Recipes（人気テンプレート）**、既存サーバーデータ、**Remote URL Template（リモートURLテンプレート）**、**Custom Template（カスタムテンプレート）**の4つです。以下でそれぞれ詳しく説明しますので、自分に合った方法を選んでください。

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### 人気テンプレート

人気テンプレートはすぐに使えるパッケージで、RedMサーバーを最も簡単に立ち上げられる方法です。初めてのサーバーならこれが超おすすめ。必要な設定やリソースが全部入っているので、初期セットアップに悩むことなく、カスタマイズやゲームプレイに集中できます。自分のニーズに合ったテンプレートを選ぶだけ。

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### 既存サーバーデータ

すでにtxAdminでサーバーを運用していて、当社でホスティングしたい場合はこちらを選びます。FTPでサーバーデータをアップロードし、セットアップ時にパスを指定するだけ。FTPの使い方がまだわからないなら、[FTPアクセス](gameserver-ftpaccess.md)ガイドをチェックするとスムーズにファイル転送できます。当社プラットフォームでのサーバー起動が簡単になりますよ。

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### リモートURLテンプレート

txAdminにリンクされていないテンプレートを使いたい場合、この機能でカスタムレシピのURLを指定できます。指定したURLからレシピを取得してサーバーに適用します。デフォルトのtxAdminオプションにないカスタム設定や特定のセットアップを展開したいときに便利です。URLを入力すれば、自動でテンプレートをダウンロード＆適用してくれます。

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### カスタムテンプレート

すでに自分で作成したレシピを再読み込みしたい場合はこちら。最初から全部設定し直す必要なく、カスタム設定を素早く適用できます。既存のレシピを選ぶだけで、txAdminがサーバーを希望通りに設定してくれます。

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### レシピデプロイヤー

デプロイタイプを決めて手順を進めたら、**Go to Recipe Deployer（レシピデプロイヤーへ）**をクリックして最後のステップに進みます：**レシピの確認**、**パラメータ入力**、**レシピ実行**、**server.cfgの設定**。

最初のステップでは選択または追加したレシピをさらにカスタマイズ可能です。調整不要ならステップ2へ。ここで自分の[Own License Key](redm-licensekey.md)を入力し、データベース情報を確認します。問題なければ**Run Recipe（レシピ実行）**をクリック。少し時間がかかる場合があります。最後にサーバー設定ファイル（`server.cfg`）を必要に応じて調整してください。

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

最後に**Save & Run Server（保存してサーバー起動）**をクリックすれば、txAdminのセットアップ完了。サーバーに接続できます。


## 追加サポート

txAdminに関するサポートは、[公式サイト](https://txadm.in/)からtxAdminチームに連絡するか、[Discordコミュニティ](https://discord.gg/txAdmin/)に参加してください。コミュニティやサポートチームが、txAdminの使い方やトラブル解決を全力でサポートしてくれます。最高の管理体験を楽しんでくださいね。

<InlineVoucher />