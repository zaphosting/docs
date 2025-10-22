---
id: dedicated-linux-ubuntu-1804
title: "専用サーバー：Ubuntu 18.04のインストール"
description: "専用サーバーにUbuntuをインストールして最適なパフォーマンスと長期サポートを実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Ubuntu 18.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

以下では、専用サーバーにUbuntu OSをインストールし設定する手順をステップごとに解説します。これらの手順をしっかりと守って、OSを確実にセットアップし、最大限に活用しましょう。



:::warning 新しいバージョンあり / EOL情報

Ubuntuの最新バージョンは[24.04](dedicated-linux-ubuntu.md)です。長期プロジェクトには最新バージョンの利用をおすすめします。

古いUbuntuバージョンのサポートはいずれ終了します。18.04バージョンのサポート終了予定は以下の通りです：

- 標準サポート終了：2023年3月1日
- Ubuntu Proサポート終了：2028年4月1日
- レガシーサポート終了：2030年4月1日

詳細は[公式サイト](https://ubuntu.com/about/release-cycle)をご覧ください。
:::


<InlineVoucher />

## 準備

OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法はいくつかあります：

1. 初期セットアップからのマウント
2. iLO経由でのマウント（バーチャルメディア）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[独自ISO](dedicated-iso.md)のガイドを参照するのがベストです。



## インストール

ISOが正常にマウントされ読み込まれると、サーバーはセットアッププロセスに入ります。最初にOSで使用する言語を選択します。利用したい言語を選び、`Enter`キーで確定してください。 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

次に、言語に合ったキーボードレイアウトを選択して設定します。ここでも自分に合ったキーボードレイアウトを選んでください。 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

続いてネットワーク設定です。サーバーはデフォルトでDHCP設定になっています。デフォルトのネットワークアダプターは`eno1`です。設定を確認して続行してください。 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

オプションでプロキシの設定も可能ですが、必須ではありません。不要な場合はこのステップをスキップしてください。 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

次にUbuntuのアーカイブミラー（パッケージダウンロードサーバー）を指定します。弊社の専用サーバーはドイツにあるため、最速のダウンロード速度を得るにはドイツのミラーを選ぶのがおすすめです。

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

ストレージ設定でパーティションを決めます。大きな1つのパーティションにするか、必要に応じて分割も可能です。SSD全体を1パーティションで使いたい場合は「ディスク全体を使用」を選択して続行してください。

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

セットアップが自動でボリュームを作成します。`完了`を選んで次に進みましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

処理を開始する前に、既存のデータがすべて削除される旨の警告が表示されます。`続行`を選んで確定してください。 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

ユーザーアカウントを好みに合わせて設定してください。最終的にrootアカウントを使いたい場合はパスワードを変更すればOKです。
タブキーや矢印キーで選択肢を移動し、設定が終わったら`完了`にチェックを入れて進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





SSHセットアップのインストールを推奨します。SSHでサーバーを管理したい場合はインストールを選択して確定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntuにはいくつかのデフォルトsnapパッケージがあります。使いたいものがあればチェックを入れてください。

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

最後に、ISOを取り出して再起動時に再読み込みされないようにします。サーバーを再起動してプロセスを完了させましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## 設定



### rootユーザーのパスワード変更

rootユーザーのパスワードは簡単に変更可能です。`sudo su`を実行し、自分のパスワードを入力します。その後、`sudo passwd`を実行してパスワードを変更してください。新しいrootパスワードを入力すれば完了です。これで`root`ユーザーでログインできます。



## まとめ

おめでとうございます！専用サーバーにUbuntu 18.04のインストールが無事完了しました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂






<InlineVoucher />