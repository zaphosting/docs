---
id: dedicated-windows-2022
title: "専用サーバー：Windows Server 2022のインストール"
description: "専用サーバーにWindows Serverをインストール・設定して、最高のパフォーマンスとセキュリティを実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Windows Server 2022
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
このガイドでは、専用サーバーにWindows ServerのOSをインストールし、設定する手順をステップバイステップで解説します。指示にしっかり従って、OSを確実にセットアップし、最大限に活用しましょう。

:::info Windows Server 2022
本ガイドのセットアップ手順と画面はWindows Server 2022（2019の見た目と同じデザイン）をベースにしています。古いOSバージョンは構成や見た目が異なる場合がありますが、基本的な流れは同じです。
:::

:::warning 新しいバージョンの案内 / EOL情報

Microsoftの最新Windows Serverバージョンは[2025](dedicated-windows.md)です。長期プロジェクトには最新バージョンの利用をおすすめします。

古いWindows Serverのサポートはいずれ終了します。2022バージョンのサポート期限は以下の通りです：

- アクティブサポート：2026年6月13日
- セキュリティサポート：2031年10月14日

:::

## 準備
OSのインストール・設定には、まず対応するOSのISOをマウントする必要があります。マウント方法は主に以下の3つです：

1. 初期セットアップからのマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[Own ISO](dedicated-iso.md)ガイドを参考にしてください。

## インストール
Windows Serverをインストールするには、まずISOファイルが必要です。ZAPのウェブインターフェースから希望のWindowsバージョンを選択できます。もちろん、自分で用意したISOファイルを使うことも可能で、その場合は[Own ISO](dedicated-iso.md)ガイドを参照してください。

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

リモートコンソールにこの画面が表示されたら、ISOの読み込みが成功しています。セットアップを始めましょう。
言語を選択して「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

「今すぐインストール」を押してセットアップを開始。

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windowsのプロダクトキーを求められます。持っている場合は入力してください。

:::note
Windowsライセンスは販売していません。キーはご自身で購入してください。
:::

Windowsのプロダクトキーは各種オンラインショップで購入可能です。購入時は自分のWindowsバージョンに合った有効なキーか必ず確認しましょう。
Windows Server 2022には通常版とDatacenter版の2種類があります。
迷ったら「プロダクトキーがありません」を選択して、あとからキーを追加することも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

インストールしたいエディションを選択してください。
後から変更できないので、間違えないように注意しましょう。
「(Desktop Experience)」付きのバージョンを選ばないと、Windowsがシェルベースになります。
選択したら「次へ」で進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

利用規約に同意して「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Windowsの新規インストールなら「カスタム」を選択。2016から2022へのアップグレードなどの場合は「アップグレード」を選べます。

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

次に専用サーバーのパーティションを作成します。通常はまだパーティションがないはずですが、もしあれば選択して「削除」してください。

複数の小さいパーティションを作るか、大きな1つのパーティションを作るか選べます。小さいパーティションを作る場合でも、Windowsのメインパーティションは最低50GBは確保するのがおすすめです。
「新規」をクリックしてパーティションを作成。

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

大きな1つのパーティションにしたい場合は「適用」を押すだけでOK。セットアップが自動的に最大サイズを割り当てます。

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windowsは小さなシステム用パーティションを自動で作成します。「OK」を押して承認。

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

パーティション設定に問題なければ、Windowsをインストールしたいパーティションを選択して「次へ」をクリック。
あとはWindowsセットアップが自動で進みます。数分かかるので完了まで待ちましょう。
セットアップ中は特に操作不要です。

## 設定

セットアップ完了後、Windowsがパスワード設定を求めます。

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

希望のパスワードを入力してください。

:::info
特殊文字を含む強力なパスワードを推奨します。

パスワードを忘れると復旧できないので、必ずメモを残しましょう。
:::

パスワード設定後、Windowsのロック画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Windowsにログインするには、リモートコンソールから `CTRL + ALT + DELETE` を押します。
（Javaコンソールの「Keyboard」から簡単に操作可能）
パスワードを使ってログインしてください。

次にリモートデスクトップを有効化します。これで簡単にサーバーへ接続できるようになります。
エクスプローラーを開き、「PC」を右クリック。

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

「プロパティ」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

「リモートの設定」を開く。

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

ファイアウォールの警告は「OK」で承認し、「適用」をクリック。

パソコンのリモートデスクトップを開き、ZAPのインターフェースのIPアドレスを入力。
ユーザー名は常にAdministrator、パスワードは先ほど設定したものです。

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

証明書警告は無視してOK。「今後このコンピューターへの接続で確認しない」にチェックを入れて、「はい」で完了。

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

これでリモートデスクトップ接続が確立し、専用サーバーを使えるようになります。
ネットワーク設定はDHCPで自動的に適用されるので、追加設定は不要です。

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
質問やトラブルがあれば、いつでもサポートに相談してくださいね！
:::

## まとめ
おめでとうございます！専用サーバーにWindows Server 2022のインストールが無事完了しました。何かあれば、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね 🙂