---
id: vserver-linux-ssh
title: "VPS: SSHでの初回アクセス"
description: "Linuxサーバーをコンソール経由で管理するための人気SSHクライアントを紹介し、Puttyを使った安全な接続方法を解説 → 今すぐチェック"
sidebar_label: 初回アクセス（SSH）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linuxサーバー製品にはデフォルトでグラフィカルな管理インターフェースが付属していないため、接続や管理はSSHクライアント（コンソール）を使って行います。SSHクライアントは多種多様にありますが、以下に代表的でよく使われるSSHクライアントをまとめました。



| SSHクライアント | 対応OS | オープンソース |                           ダウンロード                           |
| :-------------: | :----: | :------------: | :--------------------------------------------------------------: |
|     Putty       | Windows, Linux |      あり      |               [クリック](https://www.putty.org/)                |
|     Kitty       | Windows, Linux |      あり      |        [クリック](http://www.9bis.net/kitty/)                   |
|   MobaXterm     | Windows, Linux |      あり      |           [クリック](https://mobaxterm.mobatek.net/)            |
|   SecureCRT     | Windows, Linux, Mac | なし       | [クリック](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
|   mRemoteNG     |    Windows     |      あり      |           [クリック](https://mremoteng.org/download)            |


<InlineVoucher />

## IPアドレスとアクセス

以下ではPutty SSHクライアントを使った接続方法を説明します。設定画面でサーバーのIPアドレスとSSHのポート22を**ホスト名**欄に入力します。その後、**Open**ボタンで接続を開始できます。



![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)



:::info
SSHのパスワードログインはデフォルトで無効になっています。パスワードでログインしたい場合は、まず**アクセス＆セキュリティ**で該当オプションを有効化してください。
:::



![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)



:::info
サーバーに初めて接続すると、Puttyから「ホストキーがレジストリにまだ保存されていません」というセキュリティ警告が表示されます。今後このメッセージを表示させたくない場合は、**Yes**を選択して承認してください。
:::

 

これでSSHコンソールが開き、**ユーザー名**と**パスワード**の入力を求められます。ユーザー名は「**root**」です。パスワードはウェブインターフェースの「**アクセス＆セキュリティ**」で確認するか、そこで設定可能です。



![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## SSHによる管理

SSHクライアントを使いこなすには基本コマンドの理解が必須です。以下に主要なコマンドとその意味をざっくりまとめました：


### アカウント管理

| コマンド  |                説明                |            書式            |
| :-------: | :-------------------------------: | :------------------------: |
| useradd   |          新規ユーザー作成          | useradd [オプション] [ユーザー名] |
| usermod   |      既存ユーザーの編集       | usermod [オプション] [ユーザー名] |
| userdel   |        既存ユーザーの削除        | userdel [オプション] [ユーザー名] |
| passwd    | 既存ユーザーのパスワード変更 |      passwd [ユーザー名]       |



### システム管理

| コマンド  |                         説明                         | 書式                                       |
| :-------: | :--------------------------------------------------: | ------------------------------------------ |
|   top     | 負荷状況やプロセスなどの概要（Windowsのタスクマネージャーに似ている） | top                                        |
|   df      | ストレージの使用状況（パーティション）を表示            | df -h                                      |
|   du      | ストレージ使用量（ディレクトリ単位）を表示               | du -sh *                                   |
|  free     | システムのメモリ使用状況。RAMとスワップ領域に分かれる。 | free                                       |
|  kill     | 指定したプロセスID（PID）のプロセスを終了させる          | kill [PID]                                 |
| killall   | 指定した名前の全プロセスを終了させる                     | killall [プロセス名]                        |
|   mv      | ファイルやディレクトリを別の場所に移動                     | mv [元パス] [移動先パス]                    |
|  mkdir    | 新しいディレクトリを作成                                  | mkdir [ディレクトリ名]                       |
| service   | サービスの起動、停止、再起動、状態確認                    | service [サービス名] start/stop/restart/status |
| reboot    | システムの再起動                                         | reboot                                     |



### ファイル管理

| コマンド | 説明 | 書式 |
| -------- | ------------------------------------------ | ---------------------------------------- |
| ls       | ディレクトリ内のファイルやフォルダを表示 | ls                                       |
| cd       | ディレクトリを移動                         | cd [オプション] [ディレクトリ]            |
| cp       | ファイルやディレクトリをコピー             | cp [オプション] [コピー元] [コピー先]     |
| mv       | ファイルやディレクトリを移動                 | mv [オプション] [移動元] [移動先]         |
| mkdir    | 新しいディレクトリを作成                     | mkdir [オプション] [ディレクトリ名]        |
| rmdir    | 既存のディレクトリを削除                     | rmdir [オプション] [ディレクトリ名]        |
| find     | ファイルシステムを検索                       | find [オプション] [ディレクトリ] [アクション] |
| grep     | テキストファイル内を検索                     | grep [オプション] [検索パターン] [ファイル] |



### ネットワーク管理

| コマンド | 説明 | 書式 |
| -------- | ---------------------------------------------- | ----------------------------------------- |
| ip       | ネットワークインターフェースの確認・設定       | ip [オプション] [オブジェクト] [コマンド] [引数] |
| netstat  | ネットワークインターフェースの状態確認         | netstat [オプション]                      |
| nslookup | DNS情報の問い合わせ                            | nslookup                                 |
| ping     | ネットワーク接続の確認                         | ping [オプション] [宛先]                  


<InlineVoucher />