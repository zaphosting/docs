---
id: dedicated-linux-debian
title: "専用サーバー：Debianのインストール"
description: "専用サーバーにDebian OSをインストールして最適なパフォーマンスと信頼性を実現する方法を学ぼう → 今すぐ詳しく見る"
sidebar_label: Debianのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

以下では、専用サーバーにDebian OSをインストールし設定する手順をステップバイステップで解説します。これらの手順をしっかりと守って、OSを確実にセットアップし、最大限に活用しましょう。

:::info

このガイドはDebian 10をベースに構成されています。以前のバージョンや新しいバージョンのインストール手順は多少異なる場合があります。

:::

<InlineVoucher />

## 準備

OSのインストールと設定には、まず対応するOSのISOをマウントすることが重要です。マウント方法はいくつかあります：

1. 初期セットアップからのマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、まず[初期セットアップ](dedicated-setup.md)や[独自ISO](dedicated-iso.md)のガイドを参照するのがおすすめです。



## インストール

ISOが正常に読み込まれると、サーバーはセットアッププロセスに入ります。

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

ここでは「classic」インストールを使ったインストール手順を進めていきます。

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

インストールウィザードの表示言語を選択します。この言語は最終的にインストールされるシステムにも影響するので注意してください。

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

希望の地域が最初の選択肢にない場合は、「その他」を選んで次のページへ進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

ここでは「ヨーロッパ」を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

希望のタイムゾーンに合わせて、この例ではドイツのタイムゾーンを選びます。

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

ロケールはアメリカ合衆国を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

キーボードレイアウトはドイツのQWERTZレイアウトを選択。アメリカの場合はデフォルトのQWERTYになります。

:::info
サーバーはインストールに必要なコンポーネントを準備中です。数分かかる場合があります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

サーバーはDHCPを使ってネットワークインターフェースを自動設定します。`eno1`を選択してください。これはZAP専用サーバーのデフォルトネットワークアダプターです。 ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

ホスト名は必要に応じて変更可能ですが、変更しなくても問題ありません。

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

ドメイン名も変更する必要はありません。

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

ここで「root」アカウントのパスワードを設定します。選んだパスワードは必ずメモしておきましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

パスワードの確認のため、もう一度入力します。

:::info
インストールウィザードは2つ目のユーザーアカウントの作成を促します。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

通常ユーザーアカウントの所有者名を入力します。ここは自由に決めてOKです。

:::info
もちろん最終的には「root」アカウントを使うことも可能です。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

ユーザー名を入力し、任意のパスワードを設定して再度確認します。サーバーは次のインストールステップを準備します。

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

パーティションを作成するか、SSD全体を1つのパーティションとして使うか選べます。パーティションを変更しない場合は「ガイド付き - ディスク全体を使用」を選択してください。

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

サーバーに搭載されているSSDを選択します。 ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

基本的には全ての構造を1つのパーティションにまとめて問題ありません。 ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

「パーティション設定を終了して変更をディスクに書き込む」で設定を確定します。

:::info
SSDに古いパーティションがある場合は上書きの確認で「はい」を選択してください。
:::

サーバーはパーティションを作成し、システムのインストール準備を進めます。

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

もし他のインストールメディア（特定のパッケージ用など）を追加したい場合はここで可能です。ただし通常はパッケージマネージャー（apt）で後から簡単にダウンロードできます。

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

当社の専用サーバーはドイツにあるため、最速のダウンロード速度を得るにはドイツのミラーサイトを選ぶのがおすすめです。

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

基本的にはデフォルトのDebianリポジトリを使うことを推奨します。

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

HTTPプロキシを使いたい場合はここで設定できます（必須ではありません）。

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

システムは匿名統計の収集を希望します。拒否または承認が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

インストールしたいパッケージを選択します：

* Debianデスクトップ環境  
  サーバーにグラフィカルユーザーインターフェースを作成しますが、今回はシェルレベルのみを使用します。

* SSHサーバー  
  例えばPuTTYで接続するために必要です。

* 標準システムユーティリティ  
  基本的なパッケージを提供するために必要です。

パッケージの選択は`TAB`と矢印キーで行い、スペースバーで選択・解除します。選択が完了したら`TAB`で「続行」まで移動し、Enterで確定します。

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

このOSがサーバー上で唯一のOSであることを`はい`で確認します。

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

ストレージの場所はSSDのデフォルトを選択します。

:::info
🎉 Debianシステムのインストールが完了しました。
:::

iLOの「Virtual Media」を開き、「Eject Media」を押してISOファイルをシステムから取り外します。

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

取り外しが成功したら「続行」を選択し、サーバーが再起動します。

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## 設定

### SSHログイン

サーバーの再起動が完了し、インストールが成功するとログイン画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

もちろんPuTTYなどを使ってSSHでサーバーを管理したいですよね。なのでログインを有効にしましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

nanoでSSHサービスの設定ファイルを開きます：`nano /etc/ssh/sshd_config`

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

`#PermitRootLogin no`を探して`PermitRootLogin yes`に変更します。

`CTRL + X`で保存し、`Y`で変更を確定。

その後、`service ssh restart`でSSHサービスを再起動します。

これでSSHログインが有効になり、PuTTYなどで接続可能です。ZAPのダッシュボードに表示されているIPアドレスと先ほど設定した認証情報を使ってログインしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
質問や問題があれば、いつでもサポートに気軽にお問い合わせください！
:::





## まとめ

おめでとうございます！専用サーバーにDebian OSを無事インストールできました。さらに質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />