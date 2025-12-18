---
id: dedicated-windows-2019
title: "専用サーバー：Windows Server 2019のインストール"
description: "専用サーバーにWindows Serverをインストールして最適なパフォーマンスとセキュリティを実現する方法を解説 → 今すぐチェック"
sidebar_label: Windows Server 2019
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
このガイドでは、専用サーバーにWindows ServerのOSをインストールし、設定する手順をステップバイステップで解説します。指示に沿って進めることで、OSを確実にセットアップし、最大限に活用できるようになります。

:::info Windows Server 2019
本ガイドのセットアップ手順とデモはWindows Server 2019をベースにしています。古いOSバージョンでは構成や見た目が異なる場合がありますが、基本的な流れは同じです。
:::

:::warning 新しいバージョンの案内 / EOL情報

Microsoftの最新Windows Serverバージョンは[2025](dedicated-windows.md)です。長期プロジェクトには最新バージョンの利用をおすすめします。

古いWindows Serverバージョンのサポートは順次終了します。2019バージョンのサポート期限は以下の通りです：

- アクティブサポート終了：2024年1月9日
- セキュリティサポート終了：2029年1月9日

:::

## 準備
OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法は以下の3つがあります：

1. 初期セットアップ時のマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[Own ISO](dedicated-iso.md)ガイドを参照するのがベストです。

## インストール
Windows Serverをインストールするには、ISOファイルが必要です。弊社のウェブインターフェースから希望のWindowsバージョンを選択できます。または、独自のISOファイルを使うことも可能です。その場合は[Own ISO](dedicated-iso.md)ガイドをご覧ください。

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

リモートコンソールにこの画面が表示されたら、ISOの読み込みが成功しています。セットアップを開始しましょう。
言語を選択し、「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

「今すぐインストール」を押してセットアップを開始。

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windowsはプロダクトキーの入力を求めます。お持ちの場合は入力してください。

:::note
弊社ではWindowsライセンスの販売はしていません。キーはご自身でご購入ください。
:::

Windowsのプロダクトキーは各種オンラインショップで購入可能です。購入時はご自身のWindowsバージョンに合った有効なキーか必ず確認してください。Windows Server 2019には通常版とDatacenter版など複数のエディションがあります。
不明な場合は「プロダクトキーがありません」を選択し、後からキーを追加することも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

インストールしたいバージョンを選択してください。
後から変更できないので、間違いのないように注意しましょう。
「(Desktop Experience)」付きのバージョンを選ばないと、Windowsはシェルベースになります。
選択したら「次へ」で進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

利用規約に同意し、「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Windowsの新規インストールを行う場合は「カスタム」を選択。例えば2016から2019へのアップグレードなら「アップグレード」を選びます。

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

次に専用サーバーのパーティションを作成します。通常はまだパーティションはありません。もしあれば選択して「削除」を押してください。

複数の小さいパーティションを作るか、大きなパーティション1つにするか選べます。小さいパーティションを作る場合でも、メインのWindowsパーティションは最低50GBは確保するのがおすすめです。
「新規」をクリックしてパーティションを作成。

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

大きなパーティション1つで良ければ「適用」を押すだけでOK。セットアップが自動で最大サイズを割り当てます。

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windowsはシステム用に小さなパーティションを自動で作成します。「OK」を押して承認。

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

パーティション設定に問題なければ、Windowsをインストールするパーティションを選択し「次へ」をクリック。
セットアップが自動で進みます。数分かかるので完了まで待ちましょう。

## 設定

セットアップ完了後、Windowsはパスワード設定を求めます。

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

希望のパスワードを設定してください。

:::info
特殊文字を含む強力なパスワードを推奨します。

パスワードを忘れると復旧できないので、必ずメモを残してください。
:::

パスワード設定後、Windowsのロック画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Windowsにログインするには、リモートコンソールから `CTRL + ALT + DELETE` を押します。
（Javaコンソールの「キーボード」から簡単に操作可能）
設定したパスワードでログインしましょう。

次にリモートデスクトップを有効化します。これで簡単にサーバーへ接続可能に。
エクスプローラーを開き、「PC」を右クリック。

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

「プロパティ」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

「リモートの設定」を開く。

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

ファイアウォールの警告は「OK」で承認し、「適用」をクリック。

パソコンのリモートデスクトップを開き、ZAPのインターフェースのIPアドレスを入力。
ユーザー名は常に「Administrator」、パスワードは先ほど設定したものです。

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

証明書警告は無視してOK。「今後このコンピューターへの接続で確認しない」にチェックを入れて「はい」を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

リモートデスクトップ接続が確立され、専用サーバーを使えるようになります。
ネットワーク設定はDHCPで自動適用されるため、追加設定は不要です。

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
質問やトラブルがあれば、いつでもサポートに相談してくださいね！
:::

## まとめ
おめでとうございます！専用サーバーにWindows Server 2019のOSを無事インストールできました。何かあれば、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね 🙂