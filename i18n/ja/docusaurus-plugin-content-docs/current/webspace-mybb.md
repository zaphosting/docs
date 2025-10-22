---
id: webspace-mybb
title: "ホスティング：MyBBフォーラムソフトのインストール"
description: "自分だけのMyBBフォーラムを立ち上げて、活気あるオンラインコミュニティを作る方法をチェック → 今すぐ詳しく見る"
sidebar_label: MyBBをインストール
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

MyBB（旧MyBulletinBoard）は、MyBBグループが開発した無料でオープンソースのフォーラムソフトです。このガイドでは、当社のホスティング製品にこのフォーラムソフトをインストールする方法を解説します。

<InlineVoucher />

## 準備

MyBBの実際のインストールを行う前に、いくつか準備が必要です。フォーラムソフトの入手、使用するデータベースの設定、メールサーバー（メールアドレス）の準備が含まれます。

**ソフトウェア**

フォーラムソフトはMyBBの公式サイトからダウンロードできます。ダウンロードはこちらから：[MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

ダウンロードしたファイルは圧縮されているので、ローカルPCで解凍してください。中に**Upload**という名前のフォルダがあります。この中身が必要で、**FTPまたはファイルマネージャー**を使ってアップロードします。Pleskの**Websites & Domains**の**FTPアクセス**からFTPユーザーを作成可能です。

Pleskパネルのファイルマネージャーを開いたら、**httpdocs**ディレクトリに移動し、フォーラムソフトのファイルをアップロードしましょう。

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**データベース**

次に、フォーラムの全情報を保存するためのデータベースを作成します。再び**Websites & Domains**をクリックし、**Databases**を選択。次に「Add Database」をクリックしてデータベースを作成します：

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

**OK**をクリックするとデータベースが作成されます。

**メールサーバー（メールアドレス）**

フォーラムのアカウント登録には、登録メールをユーザーに送信するためのメールサーバーとメールアドレスが必要です。メールアドレスの設定方法はこちらを参照してください：[メール送信設定](webspace-plesk-sendmail.md)

## インストール

準備がすべて整ったら、いよいよMyBBのセットアップを開始します。ブラウザでウェブサイトを開くと、以下のような画面が表示されます：

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

ここから9つのカテゴリを設定していきます。セットアップでは、必要条件のチェック、データベースやフォーラムソフトの設定などが行われます。まずは匿名統計をMyBBに送信するかどうかを選択し、その後ライセンス条項に同意します。

必要なシステム要件の概要が表示されます。PHPのバージョンやメモリなどが含まれますが、ホスティングはデフォルトでこれらの要件を満たすように設定されています。

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

もし要件を満たしていない場合はサポートに連絡してください。問題なければ**Next**をクリックしてセットアップを続行します。次に、先ほど作成したデータベースの情報を入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

データベースの設定が始まります。少し時間がかかる場合があります。その後、デフォルトのデータやテーマがインストールされます。ここは**Next**をクリックするだけでOKです。

続いて一般設定です。ここでウェブサイト名、フォーラム名、URLなどを決められます：

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

最後に、セットアップ完了前に管理者アカウントを作成します。

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

これらを終えて設定が成功すると、以下のメッセージが表示され、フォーラムにアクセスできるようになります：

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />