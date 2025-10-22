---
id: fivem-txadmin-setup
title: "FiveM: txAdmin セットアップ"
description: "txAdminの無料でフル機能のウェブパネルでFiveMサーバーを簡単に管理・監視する方法 → 今すぐチェック"
sidebar_label: txAdmin セットアップ
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

txAdminは完全無料で使える、FiveMサーバーを管理＆監視するためのフル機能ウェブパネルです。FiveMサーバーの管理を超簡単にするための多彩な機能が揃っています。txAdminのセットアップは完全無料。シンプルだけど機能的なFiveMサーバー用ウェブパネルの世界へ、さあスタートしましょう。

<YouTube videoId="n3RoiExrvN0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/AeKiyc9Jtat5ygE/preview" title="txAdminサーバーのセットアップ" description="実際に動いているのを見ると理解しやすい？そんなあなたにピッタリ！動画でわかりやすく解説。急いでる時も、じっくり情報を吸収したい時もどうぞ！"/>

<InlineVoucher />

## アクセス

txAdminへのリンクとアクセス情報は、あなたのゲームサーバーのダッシュボード内のtxAdminエリアで確認できます。ここで、txAdminインターフェースに簡単にアクセスしてセットアップを始めるための情報が手に入ります。

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

ユーザー名とパスワードの情報をコピーし、リンク（IPアドレス:ポート）をクリックしてtxAdminインターフェースにアクセスしログインしましょう。txAdminの画面が新しいウィンドウで開き、指定されたアクセス情報でログインします。

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## セットアップ

無事ログインできたら、txAdminとサーバーのセットアップを始めましょう。txAdminのホームページ（ダッシュボード）が表示されているはずです。左上に「サーバーの設定がまだ必要です」というメッセージが見えるので、**セットアップページへ移動**をクリックしてセットアップを開始します。

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### ようこそ＆サーバー名

まずはプロジェクトで使いたいサーバー名を決めましょう。この名前はサーバーリスト用ではなく、txAdminのインターフェース内やチャット・Discordメッセージ用に使われます。

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### デプロイタイプ

デプロイタイプでは、サーバーのセットアップ方法を選びます。選択肢は、**人気のレシピ（Popular Recipes）**、既存のサーバーデータ、**リモートURLテンプレート（Remote URL Template）**、**カスタムテンプレート（Custom Template）**の4つ。以下でそれぞれ詳しく説明するので、自分に合ったものを選んでください。

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### 人気のテンプレート

人気のテンプレートはすぐに使えるパッケージで、FiveMサーバーを最も簡単に立ち上げられます。初めてのサーバーならこれが超おすすめ！必要な設定やリソースが全部入っているので、初期セットアップに悩むことなく、カスタマイズやゲームプレイに集中できます。自分のニーズに合ったテンプレートを選ぶだけ。

![](https://screensaver01.zap-hosting.com/index.php/s/PSsf22NeebNBRw7/preview)



### 既存のサーバーデータ

すでにtxAdminでサーバーを運用していて、今回当社でホスティングしたい場合はこちらを選びます。FTPでサーバーデータをアップロードし、セットアップ時にパスを指定するだけ。FTPの使い方がまだわからないなら、[FTPアクセス](gameserver-ftpaccess.md)のガイドをチェックするとスムーズに移行できます。サーバーファイルの転送手順を丁寧に解説しているので、当社プラットフォームでのサーバー稼働もすぐに始められます。

![img](https://screensaver01.zap-hosting.com/index.php/s/KS4raRtHWmmw5iN/preview)





### リモートURLテンプレート

txAdminに標準でリンクされていないテンプレートを使いたい場合、この機能でカスタムレシピのURLを指定できます。指定したURLからレシピを取得してサーバーに適用します。デフォルトのtxAdminオプションにないカスタム設定や特定のセットアップを導入したい時に便利です。URLを入力すれば、自動でテンプレートをダウンロード＆適用してくれます。

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### カスタムテンプレート

すでに自分で作成したレシピを再読み込みしたいユーザー向けのオプションです。最初から全部設定し直す必要なく、カスタム設定を素早く適用できます。既存のレシピを選ぶだけで、txAdminがサーバーを希望通りにセットアップしてくれます。

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### レシピデプロイヤー

デプロイタイプを決めて指示に従ったら、**レシピデプロイヤーへ移動**をクリックして最後のステップへ。ここでは、**レシピの確認**、**パラメータ入力**、**レシピ実行**、**server.cfgの設定**を行います。

最初のステップで選んだレシピをさらにカスタマイズ可能。調整不要ならステップ2へ進みましょう。ここで自分の[Own License Key](fivem-licensekey.md)を入力し、データベース情報を確認します。問題なければ**レシピ実行**をクリック。少し時間がかかる場合があります。最後にサーバー設定ファイル（`server.cfg`）を必要に応じて編集してください。

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

最後に**保存してサーバー起動**をクリックすれば、txAdminのセットアップ完了。あとはサーバーに接続するだけです。


## 追加サポート

txAdminに関するサポートは、[公式サイト](https://txadm.in/)からtxAdminチームに問い合わせるか、[Discord](https://discord.gg/txAdmin/)のコミュニティに参加してください。コミュニティやサポートチームが、txAdminの使い方やトラブルに関する質問に親切に対応してくれます。最高のサーバー管理体験をサポートします。

<InlineVoucher />