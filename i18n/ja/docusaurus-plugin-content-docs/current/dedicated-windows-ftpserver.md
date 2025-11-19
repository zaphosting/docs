---
id: dedicated-windows-ftpserver
title: "専用サーバー: FTPのインストール"
description: "WindowsでFileZilla FTPサーバーをセットアップして、安全なファイル転送とユーザーアクセス管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: FTPのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**FTP（ファイル転送プロトコル）**は、TCP/IPネットワーク上でファイルを転送するためのネットワークプロトコルです。システム間でファイルを簡単に交換できるように開発されました。

**FileZilla Server**を使えば、Windows OS上にFTPサーバーを簡単に構築できます。FileZilla Serverはインストールと設定が簡単で、ユーザーアカウントの作成、アクセス権の管理、ファイル転送など多彩な機能を備えています。



## 準備

### ダウンロード

FTPサーバーを構築するには対応するソフトウェアが必要です。WindowsサーバーOS向けの選択肢としてFileZilla Serverソフトウェアがあります。こちらからダウンロード可能です: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### インストール

セットアップファイルをダウンロードしたら、実行します。ダウンロードしたファイルをクリックすると、以下のウィンドウが開きます: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



ここでインストールするパッケージを選択できますが、デフォルトのままで問題ないので、そのまま**Next**をクリックし、インストール先を選択します:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

この例ではFileZilla Serverを**C:\Program Files (x86)\FileZilla Server**にインストールしますが、好きなパスを選んでもOKです。パスを選んだら、FTPサーバーのインストールと起動方法を指定し、ポート番号を決めて管理者パスワードを設定します。



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

その後も**Next**をクリックし、最後に**Install**を押してインストールを開始。FileZilla FTPサーバーの管理画面が開きます。**Connect to FileZilla FTP Server**ボタンをクリックしましょう。

ホスト、ポート、パスワードの入力画面が出るので、ホストとポートはそのままにして、FTPサーバーで設定した管理者パスワードを入力。**Ok**を押して接続します。



## 設定

### ユーザー作成

FTPでサーバーに接続するにはユーザーを作成する必要があります。  
上部メニューの**Server**をクリックし、次に**Configure**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

続いてUsersメニューで**Add**をクリックして新しいユーザーを追加します:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

この例ではユーザー名を**YourUserName**にしていますが、もちろん好きな名前でOKです。



### パスワードと権限設定

ユーザーを作成したら、アクセス権とパスワードを設定します。ユーザーを選択し、**General**カテゴリの**Credentials**でパスワード設定を行います。セキュリティのためパスワードは必須です。**Require a password to log in**を選び、希望のパスワードを入力しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

ユーザーに適切な権限を与えるため、アクセス可能なディレクトリを**Add**でマウントポイントに追加します。仮想パスと実際のパスを指定します。例ではCドライブを\に割り当てています。

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

右側の**Permissions**で指定したパスへのアクセス権を設定可能。データの読み書きを行いたい場合は**Read+Write**にするのがおすすめです。

::: danger
セキュリティのため、ユーザーには必要なフォルダのみアクセス権を与えましょう。
:::

設定が終わったら**Apply**をクリックして変更を保存します。



## Windowsファイアウォールの例外設定

FTPサーバーへの接続を許可するため、WindowsファイアウォールでFileZilla Serverの通信を許可する必要があります。  
**コントロールパネル\システムとセキュリティ\Windows Defender ファイアウォール**を開き、**Windows Defender ファイアウォールでアプリまたは機能を許可する**をクリック。

次の画面で許可するアプリケーションを選択します:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

この例ではパスが**C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**です:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

最後に**OK**を押して設定を閉じれば、FTPサーバーへの接続が可能になります。



## まとめ

おめでとうございます！FTPサーバーのインストールが無事完了しました。  
もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせくださいね！🙂