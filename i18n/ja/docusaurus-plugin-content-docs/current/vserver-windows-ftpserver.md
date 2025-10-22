---
id: vserver-windows-ftpserver
title: "VPS: FTPのインストール"
description: "WindowsでFileZilla FTPサーバーをセットアップして、安全なファイル転送とユーザーアクセス管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: FTPのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**FTP（ファイル転送プロトコル）**は、TCP/IPネットワーク上でファイルを転送するためのネットワークプロトコルです。システム間でファイルを簡単に交換できるように開発されました。

**FileZilla Server**を使えば、Windows OS上にFTPサーバーを簡単に構築できます。FileZilla Serverはインストールと設定がシンプルで、ユーザーアカウントの作成、アクセス権管理、ファイル転送など多彩な機能を備えています。
<InlineVoucher />


## 準備

### ダウンロード

FTPサーバーを構築するには対応するソフトウェアが必要です。WindowsサーバーOS向けの選択肢としてFileZilla Serverソフトウェアがあります。ダウンロードはこちらから可能です: [FileZilla server](https://filezilla-project.org/download.php?type=server)。



### インストール

セットアップファイルをダウンロードしたら、実行します。ダウンロードしたファイルをクリックすると、以下のウィンドウが開きます: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



ここでインストールするパッケージを選択できますが、デフォルトのままで問題ないので、そのまま**Next**をクリックし、インストール先を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

この例ではFileZilla Serverを**C:\Program Files (x86)\FileZilla Server**にインストールしますが、任意のパスを選択可能です。パスを決めたら、FTPサーバーのインストール形態と起動方法を指定し、ポート番号を決め、管理者パスワードを設定します。



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

その後も**Next**をクリックし、最後に**Install**を押してインストールを開始します。FileZilla FTPサーバーの管理画面が開くので、**Connect to FileZilla FTP Server**ボタンをクリック。

ホスト、ポート、パスワードの入力画面が表示されます。ホストとポートはそのままでOK、FTPサーバーで設定した管理者パスワードを入力し、**Ok**を押して接続します。



## 設定

### ユーザー作成

FTPでサーバーに接続するにはユーザーを作成する必要があります。  
上部メニューの**Server**をクリックし、次に**Configure**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

続いてUsersメニューから**Add**をクリックして新しいユーザーを追加します。

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

この例ではユーザー名を**YourUserName**にしていますが、もちろん好きな名前でOKです。



### パスワードと権限設定

ユーザー作成後はアクセス権限を設定します。ユーザーを有効化し、**General**の**Credentials**でパスワード設定を行います。セキュリティのためパスワードは必須推奨です。**Require a password to log in**を選び、希望のパスワードを設定しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

ユーザーに適切な権限を与えるため、アクセス可能なディレクトリを**Add**でマウントポイントに追加します。仮想パスと実際のパスを指定します。例ではCドライブを\に割り当てています。

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

右側の**Permissions**で指定パスへのアクセス権を設定可能。読み書き両方したいなら**Read+Write**がおすすめです。

::: danger
セキュリティ上、ユーザーには必要なフォルダのみアクセス権を与えるようにしましょう。
:::

設定が終わったら**Apply**をクリックして変更を保存します。



## Windowsファイアウォールの例外設定

FTPサーバーへの接続を許可するため、WindowsファイアウォールでFileZilla Serverの通信を許可する必要があります。  
**コントロールパネル\システムとセキュリティ\Windows Defender ファイアウォール**を開き、**Windows Defender ファイアウォールでアプリまたは機能を許可する**をクリック。

次の画面で許可するアプリケーションを選択します:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

この例ではパスが**C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**です:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

最後に**OK**を押して設定を閉じれば、FTPサーバーへの接続が可能になります。


## まとめ

おめでとう！VPSにFTPサーバーを無事インストール＆設定できました！  
もし何か質問やトラブルがあれば、いつでも頼れるサポートチームに気軽に連絡してくださいね！

<InlineVoucher />