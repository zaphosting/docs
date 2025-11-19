---
id: dedicated-windows-2016
title: "専用サーバー：Windows Server 2016のインストール"
description: "専用サーバーにWindows Serverをインストール・設定して、最高のパフォーマンスとセキュリティを実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
このガイドでは、専用サーバーにWindows ServerのOSをインストールし、設定する手順をステップごとに解説します。指示にしっかり従って、OSを確実にセットアップし、最大限に活用しましょう。

:::info Windows Server 2016
本ガイドのセットアップ手順と画面例はWindows Server 2016（2019の見た目と同じデザイン）をベースにしています。古いOSバージョンは構成や見た目が異なる場合がありますが、基本的な流れは同じです。
:::

:::warning 新しいバージョンの案内 / EOL情報

Microsoftの最新Windows Serverバージョンは[2025](dedicated-windows.md)です。長期プロジェクトには最新バージョンの利用をおすすめします。

古いWindows Serverのサポートはいずれ終了します。2016バージョンのサポート期限は以下の通りです：

- アクティブサポート終了：2022年1月11日
- セキュリティサポート終了：2027年1月12日

:::

## 準備
OSのインストール・設定には、まず対応するOSのISOをマウントする必要があります。マウント方法は主に以下の3つです：

1. 初期セットアップ時のマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[Own ISO](dedicated-iso.md)ガイドを参照するのがベストです。

## インストール
Windows Serverをインストールするには、まずISOファイルが必要です。ZAP-Hostingのウェブインターフェースから希望のWindowsバージョンを選択できます。または、自分で用意したISOファイルを使うことも可能です。その場合は[Own ISO](dedicated-iso.md)ガイドを参考にしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

リモートコンソールにこの画面が表示されたら、ISOの読み込みが成功しています。セットアップを始めましょう。
言語を選択して「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

「今すぐインストール」を押してセットアップを開始。

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windowsはプロダクトキーの入力を求めます。持っている場合は入力してください。

:::note
Windowsライセンスは販売していません。キーはご自身で購入してください。
:::

Windowsのプロダクトキーは各種オンラインショップで購入可能です。購入時は自分のWindowsバージョンに合った有効なキーか必ず確認しましょう。例えばWindows Server 2019には通常版とDatacenter版があります。
キーがわからない場合は「プロダクトキーがありません」を選択し、後から追加も可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

インストールしたいバージョンを選択します。
後から変更できないので、間違いのないように選んでください。
「(Desktop Experience)」付きのバージョンを選ばないと、Windowsはシェルベースになります。
決めたらバージョンを選択し、「次へ」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

利用規約に同意し、「次へ」を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Windowsの新規インストールなら「カスタム」を選択。例えば2016から2019へのアップグレードなら「アップグレード」を選びます。

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

次に専用サーバーのパーティションを作成します。通常はまだパーティションがないはずですが、あれば選択して「削除」を押してください。

複数の小さいパーティションを作るか、大きな1つのパーティションにするか選べます。小さいパーティションを作る場合でも、Windowsのメインパーティションは最低50GBは確保するのがおすすめです。
「新規」をクリックしてパーティションを作成。

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

大きな1つのパーティションにしたい場合は「適用」を押すだけでOK。セットアップが自動で最大サイズを割り当てます。

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windowsは小さなシステムパーティションを自動で作成します。「OK」を押して承認。

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

パーティション設定に問題なければ、Windowsをインストールするパーティションを選択して「次へ」をクリック。
Windowsセットアップが自動で進みます。数分かかるので完了まで待ちましょう。
セットアップ中は特に操作不要です。

## 設定

セットアップ完了後、Windowsがパスワード設定を求めます。

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
パスワードを入力してログイン。

次にリモートデスクトップを有効化します。これで簡単にサーバーへ接続可能に。
エクスプローラーを開き、「PC」を右クリック。

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

「プロパティ」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

「リモートの設定」を開く。

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

ファイアウォールの警告は「OK」で承認し、「適用」をクリック。

パソコンのリモートデスクトップを起動し、ZAPのインターフェースのIPアドレスを入力。
ユーザー名は常に「Administrator」、パスワードは先ほど設定したもの。

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

証明書警告は無視してOK。「今後このコンピューターへの接続で確認しない」にチェックを入れて、「はい」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

リモートデスクトップ接続が専用サーバーに確立され、利用可能になります。
ネットワーク設定はDHCPで自動適用されるので、特に追加設定は不要です。

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
質問やトラブルがあれば、サポートチームがいつでも助けます！
:::

## まとめ
おめでとうございます！専用サーバーにWindows Server 2016のOSを無事インストールできました。何かあれば、毎日対応しているサポートまで気軽にお問い合わせくださいね！🙂