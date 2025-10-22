---
id: exiled-plugins
title: "SCP EXILED: プラグインのインストール"
description: "信頼できるプラグインで機能性とカスタマイズ性をアップ！サーバーを拡張＆個性化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: プラグインのインストール
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## はじめに

プラグインを使うことで、サーバーをさらに拡張して自分好みにカスタマイズできます。ここでは、よく使われるプラグインの入手場所と設定方法をわかりやすく解説します。

<InlineVoucher />

## 準備

まずは、サーバーにインストールしたいプラグインをダウンロードしましょう。EXILEDのプラグインは公式GitHubページで豊富に見つけられます。プラグインのリポジトリを選んだら、リリースセクションから最新バージョンをダウンロードしてください。詳しい手順は以下で説明します。

プラグインは色んな場所からダウンロードできますが、公式GitHubのような信頼できるプラットフォームを使うのがおすすめです。安全性が高いので安心です。プラグインをサーバーに追加する際は、必ずソースの確認、開発者のチェック、プラグインの内容を理解してからインストールしましょう。

GitHubからプラグインをダウンロードするには、まず公式の[EXILED GitHubページ](https://github.com/Exiled-Team)にアクセスし、使いたいプラグインのリポジトリを選びます。  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

リポジトリ内の右側にある**Releases**セクションを探します。  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Releasesセクションにはダウンロード可能な**.dll**ファイルがあります。クリックしてダウンロードを開始しましょう。  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

これで準備完了！ダウンロードが終わったら、下のインストール手順に進んでサーバーに**.dll**ファイルを導入しましょう。


## インストール

プラグインのダウンロードが完了したら、インストール作業に移ります。これは**FTP**を使って行うので、FTPクライアントが必要です。FTPの使い方がまだわからない場合は、こちらのガイドを参考にしてください：[FTPアクセス方法](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

プラグインの正しいディレクトリは ```/gXXXXXX/.config/EXILED/Plugins``` にあります。ダウンロードした**.dll**ファイルをこのフォルダにアップロードしてください。アップロード後はこんな感じになります：  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

これでプラグインのインストールは完了です。最後に**ライブコンソール**をチェックして、プラグインが正常にコンパイル・読み込みされたか確認しましょう。コンソールに以下のような表示が出ればOKです：  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## 人気プラグイン

まだピッタリのプラグインが見つかっていない？そんな時は、人気＆おすすめのプラグインを厳選したリストをチェックしてみて！ゲームプレイを盛り上げて、サーバーに最高の仕上げを加えられます。インスピレーションを得て、あなたのプロジェクトにぴったりのプラグインを見つけてください。

<SearchableItemList items={items} />


## まとめ

ここまでの手順をしっかり踏めば、プラグインのインストールはバッチリ完了しているはずです。もし質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してくださいね！毎日対応してますよ 🙂 

<InlineVoucher />