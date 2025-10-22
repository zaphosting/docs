---
id: dedicated-linux-ssh
title: "専用サーバー：SSHでの初回アクセス"
description: "GUIなしでLinuxサーバーを管理するための人気SSHクライアントをチェックして、安全にSSH接続する方法を理解しよう → 今すぐ詳しく見る"
sidebar_label: 初回アクセス（SSH）
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linuxサーバー製品にはデフォルトでグラフィカルな管理インターフェースが含まれていないため、接続と管理はSSHクライアント（コンソール）を使って行います。利用できるSSHクライアントは多種多様です。以下はよく知られている／よく使われるSSHクライアントの一覧です。



| SSHクライアント | 対応OS | オープンソース |                           ダウンロード                           |
| :-------------: | :----: | :------------: | :--------------------------------------------------------------: |
|     Putty       | Windows, Linux |      あり      |               [クリック](https://www.putty.org/)                |
|     Kitty       | Windows, Linux |      あり      |        [クリック](http://www.9bis.net/kitty/)                   |
|   MobaXterm     | Windows, Linux |      あり      |           [クリック](https://mobaxterm.mobatek.net/)            |
|   SecureCRT     | Windows, Linux, Mac | なし       | [クリック](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
|   mRemoteNG     |    Windows     |      あり      |           [クリック](https://mremoteng.org/download)            |


<InlineVoucher />

## IPアドレスとアクセス

以下ではPutty SSHクライアントを使った接続方法を説明します。設定画面でサーバーのIPアドレスとSSHポート22を**ホスト名**欄に入力します。その後、**Open**ボタンで接続を開始できます。



![](https://screensaver01.zap-hosting.com/index.php/s/Jp2Wn3s9kQG5t55/preview)



:::info
SSHのパスワードログインはデフォルトで無効になっています。パスワードでログインしたい場合は、まず**アクセス＆セキュリティ**で該当オプションを有効にしてください。
:::



![](https://screensaver01.zap-hosting.com/index.php/s/4fSRwzaq8QQLZ3o/preview)



:::info
サーバーに初めて接続すると、Puttyから「ホストキーがレジストリにキャッシュされていません」というセキュリティメッセージが表示されます。毎回このメッセージを表示させたくない場合は、**Yes**で承認してください。
:::

 

これでSSHコンソールが開き、**ユーザー名**と**パスワード**の入力を求められます。ユーザー名は「**root**」です。パスワードはWebインターフェースの「**アクセス＆セキュリティ**」で確認または設定できます。



![](https://screensaver01.zap-hosting.com/index.php/s/pG4dTmCGFyzK3dY/preview)





## SSHによる管理

SSHクライアントを最大限に活用するには、基本コマンドを知っておくことが重要です。以下に主要なコマンドとその意味をざっくりまとめました：


### アカウント管理

| コマンド  |                説明                |            書式            |
| :-------: | :-------------------------------: | :------------------------: |
| useradd   |          新規ユーザー作成          | useradd [オプション] [ユーザー名] |
| usermod   |      既存ユーザーの編集       | usermod [オプション] [ユーザー名] |
| userdel   |        既存ユーザーの削除        | userdel [オプション] [ユーザー名] |
| passwd    | 既存ユーザーのパスワード変更 |      passwd [オプション]       |



### システム管理

| コマンド |                         説明                         | 書式                                       |
| :------: | :--------------------------------------------------: | ------------------------------------------ |
|   top    | 負荷やプロセスなどの概要表示（Windowsのタスクマネージャーに似ている） | top                                        |
|   df     | ストレージ使用状況の表示（パーティション）          | df -h                                      |
|   du     | ストレージ使用量の表示（ディレクトリ単位）           | du -sh *                                   |
|  free    | システムのメモリ使用状況。RAMとスワップ領域に分かれる。 | free                                       |
|  kill    | 指定したプロセスID（PID）のプロセスを終了            | kill [ID]                                  |
| killall  | 指定した名前の全プロセスを終了                        | killall [名前]                             |
|   mv     | ファイルやディレクトリを別の場所に移動                | mv ソースパス 新しいパス                    |
|  mkdir   | 新しいディレクトリを作成                              | mkdir ディレクトリ名                        |
| service  | サービスの開始、停止、再起動、状態確認                | service サービス名 start/stop/restart/status |
| reboot   | システムの再起動                                      | reboot                                     |



### ファイル管理

| コマンド | 説明 | 書式 |
| -------- | ------------------------------------------ | ---------------------------------------- |
| ls       | ディレクトリ内のファイルやフォルダを表示 | ls                                       |
| cd       | ディレクトリを移動                         | cd [オプション] ディレクトリ             |
| cp       | ファイルやディレクトリをコピー             | cp [オプション] コピー元 コピー先        |
| mv       | ファイルやディレクトリを移動                 | mv [オプション] 移動元 移動先            |
| mkdir    | 新しいディレクトリを作成                   | mkdir [オプション] ディレクトリ名        |
| rmdir    | 既存のディレクトリを削除                   | rmdir [オプション] ディレクトリ          |
| find     | ファイルシステムを検索                     | find [オプション] [ディレクトリ] [アクション] |
| grep     | テキストファイル内を検索                   | grep [オプション] 検索パターン [ファイル] |



### ネットワーク管理

| コマンド | 説明 | 書式 |
| -------- | ---------------------------------------------- | ----------------------------------------- |
| ip       | ネットワークインターフェースの照会・設定      | ip [オプション] オブジェクト [コマンド [引数]] |
| netstat  | ネットワークインターフェースの状態照会        | netstat [オプション]                       |
| nslookup | DNS情報の照会                                 | nslookup                                  |
| ping     | ネットワーク接続の確認                         | ping [オプション] 宛先                     |


<InlineVoucher />