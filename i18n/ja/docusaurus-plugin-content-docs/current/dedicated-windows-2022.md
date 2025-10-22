---
id: dedicated-windows-2022
title: "専用サーバー：Windows Server 2022のインストール"
description: "専用サーバーにWindows Serverをインストールして最適なパフォーマンスとセキュリティを実現する方法を解説 → 今すぐチェック"
sidebar_label: Windows Server 2022
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
以下では、専用サーバーにWindows ServerのOSをインストールし設定する手順をステップごとに説明します。OSを確実にセットアップし、最大限に活用するために、指示にしっかり従ってください。

:::info Windows Server 2022
本ガイドのセットアップ手順とデモはWindows Server 2022（2019の見た目と同様のデザイン）をベースにしています。古いOSバージョンは構成や見た目が異なる場合がありますが、手順はほぼ同じです。
:::

:::warning 新しいバージョンの提供 / EOL情報

Microsoftの最新Windows Serverバージョンは[2025](dedicated-windows.md)です。長期プロジェクトには最新バージョンの利用を推奨します。

古いWindows Serverバージョンのサポートはいずれ終了します。2022バージョンのサポート期限は以下の通りです：

- アクティブサポート終了：2026年6月13日
- セキュリティサポート終了：2031年10月14日

:::

<InlineVoucher />

## 準備
OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法はいくつかあります：

1. 初期セットアップ時のマウント
2. iLO経由のマウント（Virtual Media）
3. iLO経由のマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[Own ISO](dedicated-iso.md)ガイドを参照するのがおすすめです。



## インストール
Windows Serverをインストールするには、まずISOファイルが必要です。弊社のウェブインターフェースから希望のWindowsバージョンを選択できます。もしくは、独自のISOファイルを使うことも可能で、その場合は[Own ISO](dedicated-iso.md)ガイドをご覧ください。

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

リモートコンソールにこの画面が表示されたら、ISOの読み込みが成功しています。セットアップを開始しましょう。
希望の言語を選択し、「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

「今すぐインストール」を押してセットアップを開始。

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windowsはプロダクトキーを要求します。お持ちの場合は入力してください。

:::note
弊社ではWindowsライセンスの販売はしていません。キーはご自身で購入してください。
:::

Windowsのプロダクトキーは各種オンラインショップで購入可能です。購入時はご自身のWindowsバージョンに合った有効なキーか必ず確認してください。Windows Server 2022には通常版とDatacenter版など複数のエディションがあります。
キーがわからない場合は「プロダクトキーがありません」を選択し、後から追加することも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

インストールしたいバージョンを選択してください。
後から変更できないので、間違いのないように選びましょう。
また、「(Desktop Experience)」付きのバージョンを選ばないと、Windowsがシェルベースになります。
選択したら「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

利用規約に同意し、「次へ」を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Windowsの新規インストールを行う場合は「カスタム」を選択してください。例えば2016から2022へのアップグレードを行う場合は「アップグレード」を選びます。

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

次に専用サーバーのパーティションを作成します。通常はまだパーティションは作成されていません。もし既存のパーティションがあれば選択して「削除」を押してください。

複数の小さいパーティションを作るか、大きなパーティション1つにするか選べます。小さいパーティションを作る場合でも、メインのWindowsパーティションは最低50GBは確保するのがおすすめです。
「新規」をクリックしてパーティションを作成。

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

大きなパーティション1つで良ければ「適用」を押すだけでOK。セットアップが自動的に最大サイズを割り当てます。

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windowsはシステム用に小さなパーティションを作成します。これを許可するため「OK」を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

パーティション設定に問題なければ、Windowsをインストールするパーティションを選択し「次へ」をクリック。
Windowsセットアップが自動で処理を進めます。数分かかることがあります。
セットアップ完了まで特に操作は不要です。

## 設定

セットアップが完了すると、Windowsはパスワード設定を求めます。

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

ここで希望のパスワードを設定してください。

:::info
特殊文字を含む強力なパスワードを推奨します。

パスワードを忘れると復旧できないので、必ずメモを残してください。
:::

パスワード設定後、Windowsのロック画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Windowsにログインするには、`CTRL + ALT + DELETE`キーを押します。リモートコンソールから簡単に操作可能です。
（Javaコンソールの「キーボード」から操作できます）
設定したパスワードでログインしてください。

次にリモートデスクトップを有効化します。これで簡単にサーバーへ接続可能になります。
エクスプローラーを開き、「PC」を右クリック。

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

「プロパティ」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

「リモートの設定」を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

ファイアウォールの警告が出たら「OK」を押し、「適用」をクリック。

お使いのPCでリモートデスクトップを開き、ZAPのインターフェースのIPアドレスを入力してください。
ユーザー名は常にAdministrator、パスワードは先ほど設定したものです。

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

証明書警告は無視してOKです。「今後このコンピューターへの接続で確認しない」にチェックを入れ、
「はい」を押して接続を完了させます。

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

リモートデスクトップ接続が確立され、専用サーバーを使えるようになります。
ネットワーク設定はDHCPで自動的に適用されるため、追加設定は不要です。

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
質問やトラブルがあれば、いつでもサポートにご連絡ください！
:::


## まとめ
おめでとうございます！専用サーバーにWindows Server 2022のOSを無事インストールできました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />