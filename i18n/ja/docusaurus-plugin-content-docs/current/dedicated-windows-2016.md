---
id: dedicated-windows-2016
title: "専用サーバー：Windows Server 2016のインストール"
description: "専用サーバーにWindows Serverをインストールして最適なパフォーマンスとセキュリティを実現する方法を解説 → 今すぐチェック"
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
このガイドでは、専用サーバーにWindows ServerのOSをインストールし、設定する手順をわかりやすく説明します。手順をしっかりと守って、OSを正しくセットアップし、最大限に活用しましょう。

:::info Windows Server 2016
本ガイドのセットアップ手順と画面はWindows Server 2016（2019年版の見た目とほぼ同じ）をベースにしています。古いOSバージョンでは構成や見た目が異なる場合がありますが、基本的な流れは同じです。
:::

:::warning 新しいバージョンの案内 / EOL情報

Microsoftの最新Windows Serverバージョンは[2025](dedicated-windows.md)版です。長期プロジェクトには最新バージョンの利用をおすすめします。

古いWindows Serverバージョンのサポートは順次終了します。2016版のサポート期限は以下の通りです：

- アクティブサポート終了：2022年1月11日
- セキュリティサポート終了：2027年1月12日

:::

<InlineVoucher />

## 準備
OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法は主に以下の3つです：

1. 初期セットアップ時のマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[Own ISO](dedicated-iso.md)ガイドを参考にしてください。



## インストール
Windows Serverをインストールするには、まずISOファイルが必要です。弊社のウェブインターフェースから希望のWindowsバージョンを選択できます。もちろん、自分で用意したISOファイルを使うことも可能です。その場合は[Own ISO](dedicated-iso.md)ガイドをご覧ください。

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

リモートコンソールにこの画面が表示されたら、ISOの読み込みが成功しています。セットアップを開始しましょう。
言語を選択して「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

「今すぐインストール」を押してセットアップを開始。

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windowsはプロダクトキーの入力を求めます。お持ちの場合は入力してください。

:::note
当社ではWindowsライセンスの販売はしていません。キーはご自身でご購入ください。
:::

Windowsのプロダクトキーは各種オンラインショップで購入可能です。購入時はご自身のWindowsバージョンに合った有効なキーかどうかを必ず確認してください。例えばWindows Server 2019には通常版とDatacenter版の2種類があります。
キーがわからない場合は「プロダクトキーがありません」を選択し、後から追加することも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

インストールしたいバージョンを選択してください。
後から変更できないので、間違いのないように注意しましょう。
「(Desktop Experience)」付きのバージョンを選ばないと、Windowsはシェルベースになります。
選択したら「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

利用規約に同意し、「次へ」を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Windowsの新規インストールを行う場合は「カスタム」を選択。例えば2016から2019へのアップグレードをしたい場合は「アップグレード」を選びます。

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

次に専用サーバーのパーティションを作成します。通常はまだパーティションは作成されていません。もしあれば選択して削除してください。

複数の小さいパーティションを作ることも、大きな1つのパーティションにすることも可能です。小さいパーティションを作る場合でも、メインのWindowsパーティションは最低50GBは確保することをおすすめします。
「新規」をクリックしてパーティションを作成。

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

大きな1つのパーティションにしたい場合は「適用」を押すだけでOK。セットアップが自動で最大サイズを割り当てます。

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windowsは小さなシステムパーティションを必要とします。表示されたら「OK」を押して承認。

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

パーティション設定に問題なければ、Windowsをインストールするパーティションを選択し「次へ」をクリック。
Windowsセットアップが自動でインストールを進めます。数分かかるのでしばらく待ちましょう。
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

Windowsにログインするには、`CTRL + ALT + DELETE`キーを押します。リモートコンソールから簡単に操作可能です。（Javaコンソールの「Keyboard」から操作できます）
設定したパスワードでログインしましょう。

次にリモートデスクトップを有効化します。これで簡単にサーバーへ接続可能になります。
エクスプローラーを開き、「PC」を右クリック。

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

「プロパティ」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

「リモートの設定」を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

表示されるファイアウォールの警告は「OK」で承認し、「適用」を押します。

お使いのPCでリモートデスクトップを開き、ZAPのインターフェースのIPアドレスを入力。
ユーザー名は常に「Administrator」、パスワードは先ほど設定したものです。

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

証明書警告は無視してOKです。「今後このコンピューターへの接続で確認しない」にチェックを入れ、「はい」を押して完了。

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

これでリモートデスクトップ接続が確立し、専用サーバーを操作できます。
ネットワーク設定はDHCPで自動的に適用されるため、追加設定は不要です。

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
質問やトラブルがあれば、いつでもサポートチームに相談してくださいね！
:::

## まとめ
おめでとうございます！専用サーバーにWindows Server 2016のインストールが無事完了しました。何かあれば、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />