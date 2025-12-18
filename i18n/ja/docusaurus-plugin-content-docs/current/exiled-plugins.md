---
id: exiled-plugins
title: "SCP EXILED: プラグインのインストール"
description: "信頼できるプラグインで機能拡張＆カスタマイズ！サーバーをもっと自由に楽しもう → 今すぐチェック"
sidebar_label: プラグインのインストール
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## はじめに

プラグインを使うことで、ゲームサーバーをさらに拡張＆カスタマイズできます。ここでは、よく使われるプラグインの入手先と設定方法をわかりやすく解説します。

<InlineVoucher />

## 準備

まずは、サーバーにインストールしたいプラグインをダウンロードしましょう。EXILEDのプラグインは公式GitHubページで豊富に見つかります。プラグインのリポジトリを選んだら、リリースセクションから最新バージョンをダウンロードしてください。詳しい手順は以下で説明します。

プラグインは色んな場所からダウンロードできますが、公式GitHubのような信頼できるプラットフォームを使うのがおすすめ。安全性が高いので安心です。プラグインを追加する際は、必ず出所を確認し、開発者をチェックし、プラグインの内容を理解してからインストールしましょう。

GitHubからプラグインをダウンロードするには、まず公式の[EXILED GitHubページ](https://github.com/Exiled-Team)にアクセスし、使いたいプラグインのリポジトリを選びます。  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

リポジトリ内の右側にある**Releases**セクションを探します。  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Releasesセクションにはダウンロード可能な**.dll**ファイルがあります。クリックしてダウンロードを開始しましょう。  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

これでダウンロード完了！あとはこのガイドの後半で紹介するインストール手順に進み、**.dll**ファイルをサーバーに導入しましょう。


## インストール

プラグインのダウンロードが済んだら、インストール作業に移ります。これは**FTP**経由で行うので、FTPクライアントが必要です。FTPの使い方がまだわからない場合は、こちらのガイドを参考にしてください：[FTPアクセス方法](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

プラグインの正しいディレクトリは ```/gXXXXXX/.config/EXILED/Plugins``` です。ダウンロードした**.dll**ファイルをこのフォルダにアップロードしてください。アップロード後はこんな感じになります：  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

これでプラグインのインストールは完了です。最後に**ライブコンソール**をチェックして、プラグインが正常にコンパイル＆ロードされたか確認しましょう。コンソールに以下のような表示が出ればOKです：  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## 人気プラグイン

まだピッタリのプラグインが見つかっていない？そんなあなたに、人気＆おすすめのプラグインを厳選したリストを用意しました。ゲームプレイをもっと楽しく、サーバーを個性的に彩るプラグインを探してみてください。

<SearchableItemList items={items} />


## まとめ

ここまでの手順をしっかり踏めば、プラグインのインストールはバッチリ完了しているはずです。もしわからないことがあれば、いつでもサポートチームにお問い合わせください。毎日対応しているので安心してどうぞ！🙂

<InlineVoucher />