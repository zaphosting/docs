---
id: webspace-plesk-ftp
title: "ホスティング: ホスティングのFTPアクセス設定"
description: "複数のFTPアクセスを管理して共同作業をスムーズにし、フォルダ権限を効果的にコントロールする方法をチェック → 今すぐ詳しく見る"
sidebar_label: FTPアクセス
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

FTPは*ファイル転送プロトコル*の略で、PCからホスティングへファイルをアップロードするために必要です。  
ご注文いただいたホスティングには、すべてのお客様に自動的にFTPアクセスが付与されます。

ここでは、さらにFTPアクセスを追加設定する方法を説明します。  
複数人でプロジェクトを進める場合に、それぞれが自分専用のFTPアクセスを持つのに便利です。

追加したFTPアクセスは、ホスティングのオーナーが指定したフォルダのみアクセス可能に設定できます。

<InlineVoucher />

## FTPアクセスの設定

Pleskのダッシュボードで「**FTPアクセス**」機能を開きます。

:::info
このメインページには、後でテストに使うIPアドレスも表示されています。
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

ここには、ホスティングの注文完了時にシステムが自動作成したFTPアクセスが1つ表示されています。  
新しいアカウントを作成するには、「**FTPアカウントを追加**」ボタンをクリックします。

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

続いて必要な情報を入力します。入力が完了したら「**OK**」で確定します。

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
「**ベースディレクトリ**」では、FTPアクセスが許可されるディレクトリを選択できます。  
すべてのフォルダを閲覧・編集可能にしたい場合は、ここを変更する必要はありません。
:::

## FTPアクセスのテスト

FTPアクセスをテストするには、FTPクライアントソフトが必要です。  
ここでは例として*Filezilla Client*を使います。

「**サーバー**」には、メインページに表示されているサーバーのIPアドレスを入力します。  
「**ユーザー名**」と「**パスワード**」には、作成したFTPアカウントの情報を入力します。  
デフォルトのポートは「**21**」です。

## ユーザーアカウントが既に存在する場合

このメッセージは、FTPアカウント名がすでに他のユーザーに使われている場合に表示されます。  
ホスティングは複数のお客様が利用するシステム上に作成されているため、同じ名前は使えません。  
その場合は、別のアカウント名を選んでください。

<InlineVoucher />