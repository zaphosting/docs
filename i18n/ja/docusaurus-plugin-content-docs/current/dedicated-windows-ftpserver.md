---
id: dedicated-windows-ftpserver
title: "WindowsサーバーでFTPをセットアップ - 安全なファイル転送サービスをホストしよう"
description: "WindowsでFileZilla FTPサーバーをセットアップ＆管理して、安全なファイル転送とユーザーアクセス制御を実現 → 今すぐチェック"
sidebar_label: FTPのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**FTP（ファイル転送プロトコル）**は、TCP/IPネットワーク上でファイルを転送するためのネットワークプロトコルです。システム間でのファイル交換を簡単にするために開発されました。

**FileZilla Server**を使えば、Windows OS上にFTPサーバーを簡単に構築できます。FileZilla Serverはインストールや設定がシンプルで、ユーザーアカウントの作成、アクセス権の管理、ファイル転送など多彩な機能を備えています。



## 準備

### ダウンロード

FTPサーバーをセットアップするには対応するソフトウェアが必要です。WindowsサーバーOS向けの選択肢としてFileZilla Serverがあります。こちらからダウンロード可能です: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### インストール

セットアップファイルをダウンロードしたら、実行します。ダウンロードしたファイルをクリックすると、以下のウィンドウが開きます: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



ここでインストールするパッケージを選べますが、デフォルトのままで問題ないので、そのまま**Next**をクリックし、インストール先を選択します:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

この例ではFileZilla Serverを**C:\Program Files (x86)\FileZilla Server**にインストールしますが、好きなパスを選んでもOK。パスを決めたら、FTPサーバーの起動方法やポート番号、管理者パスワードの設定を行います。



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

続けて**Next**をクリックし、最後に**Install**を押してインストール開始。FileZilla FTPサーバーの管理画面が開きます。**Connect to FileZilla FTP Server**ボタンをクリック。

ホスト、ポート、パスワードの入力画面が出るので、ホストとポートはそのままにして、先ほど設定した管理者パスワードを入力。**Ok**を押して接続します。



## 設定

### ユーザー作成

FTPでサーバーに接続するにはユーザーを作成する必要があります。  
上部メニューの**Server**をクリックし、続けて**Configure**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

次にUsersメニューから**Add**をクリックして新しいユーザーを追加します:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

この例ではユーザー名を**YourUserName**にしていますが、好きな名前でOKです。



### パスワードと権限設定

ユーザーを作成したら、アクセス権限を設定します。ユーザーを有効化し、**General**カテゴリの**Credentials**でパスワード設定を行います。セキュリティのためパスワードは必須推奨。**Require a password to log in**を選び、希望のパスワードを入力しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

ユーザーに適切な権限を与えるため、アクセス可能なディレクトリを**Add**でマウントポイントに追加します。仮想パスと実際のパスを指定。例ではCドライブを\に割り当てています。

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

右側の**Permissions**で指定したパスへのアクセス権を設定可能。読み書き両方したいなら**Read+Write**がおすすめ。

::: danger
セキュリティのため、ユーザーには必要なフォルダだけアクセス権を与えるようにしましょう。
:::

設定が終わったら**Apply**をクリックして変更を保存します。



## Windowsファイアウォールの例外設定

FTPサーバーへの接続を許可するため、WindowsファイアウォールでFileZilla Serverの通信を許可する必要があります。  
**コントロールパネル\システムとセキュリティ\Windows Defender ファイアウォール**を開き、**Windows Defender ファイアウォールでアプリまたは機能を許可する**をクリック。

次の画面で許可するアプリを選択します:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

この例ではパスが**C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**です:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

最後に**OK**を押して設定を閉じれば、FTPサーバーへの接続が可能になります。



## まとめ

おめでとうございます！FTPサーバーのインストールが無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね。毎日対応しています！🙂