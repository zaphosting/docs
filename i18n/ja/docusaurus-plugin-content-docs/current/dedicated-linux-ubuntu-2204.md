---
id: dedicated-linux-ubuntu-2204
title: "専用サーバー：Ubuntu 22.04のインストール"
description: "専用サーバーにUbuntuを成功裏にインストール・設定し、最適なパフォーマンスと長期サポートを実現する方法を解説 → 今すぐチェック"
sidebar_label: Ubuntu 22.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

以下では、専用サーバーにUbuntu OSをインストールし設定する手順をステップごとに解説します。これらの手順をしっかりと守ることで、OSを確実にセットアップし、最大限に活用できます。



:::warning 新しいバージョンの案内 / EOL情報

Ubuntuの最新バージョンは[24.04](dedicated-linux-ubuntu.md)です。長期プロジェクトには最新バージョンの利用をおすすめします。

古いUbuntuバージョンのサポートはいずれ終了します。22.04バージョンのサポート終了予定は以下の通りです：

- 標準サポート終了：2027年4月1日
- Ubuntu Proサポート終了：2032年4月1日
- レガシーサポート終了：2034年4月1日

詳細は[公式サイト](https://ubuntu.com/about/release-cycle)をご覧ください。
:::




## 準備

OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法は主に以下の3つです：

1. 初期セットアップからのマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[Own ISO](dedicated-iso.md)のガイドを参照するのがベストです。



## インストール

ISOが正常にマウントされ読み込まれると、セットアッププロセスが開始されます。最初にOSで使用する言語を選択します。利用したい言語を選び、`Enter`キーで確定してください。 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

次に、言語に合ったキーボードレイアウトを選択して設定します。ここでも自分に合ったキーボードレイアウトを選んでください。 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

続いてネットワーク設定です。サーバーはデフォルトでDHCP設定になっています。デフォルトのネットワークアダプターは`eno1`です。設定を確認して続行してください。 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

オプションでプロキシの設定も可能ですが、必須ではありません。不要な場合はこのステップをスキップしてください。 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

次にUbuntuのアーカイブミラー（パッケージダウンロードサーバー）を指定します。当社の専用サーバーはドイツにあるため、最速のダウンロード速度を狙うならドイツのミラーを選ぶのがおすすめです。

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

ストレージ設定でパーティションを決めます。大きな1つのパーティションにするか、必要に応じて分割も可能です。SSD全体を1つのパーティションとして使いたい場合は「Use an entire disk」を選択して続行してください。

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

セットアップが自動でボリュームを作成します。`Done`を選んで次へ進みましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

処理開始前に、既存データがすべて削除される旨の警告が表示されます。`Continue`を選んで確定してください。 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

ユーザーアカウントを好みに合わせて設定してください。rootアカウントもパスワードを変更すれば使えます。
タブキーや矢印キーで選択肢を移動し、設定が終わったら`Done`にチェックを入れて進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





SSHセットアップのインストールを推奨します。SSHでサーバー管理したい場合はインストールを選択し、処理を確定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntuにはいくつかのデフォルトsnapパッケージがあります。使いたいものがあればチェックを入れてください。

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

処理完了のため、ISOを取り出して再起動時に再読み込みされないようにします。サーバーを再起動してセットアップを完了させましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## 設定



### rootユーザーのパスワード変更

rootユーザーのパスワードは簡単に変更可能です。`sudo su`を実行し、自分のパスワードを入力します。続けて`sudo passwd`を実行し、新しいrootパスワードを入力してください。これでrootユーザーでログインできます。



## まとめ

おめでとうございます！専用サーバーにUbuntu 22.04のインストールが無事完了しました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂



