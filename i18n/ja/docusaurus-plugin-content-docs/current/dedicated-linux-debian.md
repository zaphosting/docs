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

以下では、専用サーバーにDebian OSをインストールし設定する手順をステップバイステップで解説します。これらの手順をしっかりと守ることで、OSを確実にセットアップし、最適に活用できます。

:::info

このガイドはDebian 10をベースに構成されています。以前のバージョンや新しいバージョンでは、インストール手順が若干異なる場合があります。

:::



## 準備

OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法はいくつかあります：

1. 初期セットアップからのマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、当社の[初期セットアップ](dedicated-setup.md)または[独自ISO](dedicated-iso.md)ガイドを参照するのがおすすめです。



## インストール

ISOが正常に読み込まれると、サーバーはセットアッププロセスに入ります。

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

ここでは「classic」インストールを使ったインストール手順を進めていきます。

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

インストールウィザードの表示言語を選択します。この言語は最終的にインストールされるシステムにも影響するので注意してください。

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

希望の地域が最初の選択肢にない場合は、「その他」で次のページへ進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

例として「ヨーロッパ」を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

希望のタイムゾーンに応じて、この例ではドイツのタイムゾーンを選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

ロケールはアメリカ合衆国を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

キーボードレイアウトはドイツのQWERTZレイアウトを選択します。アメリカの場合はデフォルトのQWERTYになります。

:::info
サーバーはインストールに必要なコンポーネントを準備中です。数分かかる場合があります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

サーバーはDHCPを使ってネットワークインターフェースを自動設定します。`eno1`を選択してください。これはZAP専用サーバーのデフォルトネットワークアダプターです。 ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

ホスト名は必要に応じて変更可能ですが、必須ではありません。

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

ドメイン名も変更する必要はありません。

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

ここで「root」アカウントのパスワードを設定します。選んだパスワードは必ずメモしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

パスワードの確認入力をします。

:::info
インストールウィザードは2つ目のユーザーアカウントの作成を求めます。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

通常ユーザーアカウントの所有者名を入力します。自由に好きな名前を設定できます。

:::info
もちろん最終的には「root」アカウントを使うことも可能です。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

アカウントのユーザー名を入力し、任意のパスワードを設定して再度確認入力します。サーバーは次のインストールステップを準備します。

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

パーティションを作成するか、SSD全体を1つのパーティションとして使うか選べます。パーティションを変更しない場合は「ガイド付き - ディスク全体を使用」を選択してください。

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

サーバーに搭載されているSSDを選択します。 ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

基本的には全ての構造を1つのパーティションにまとめて問題ありません。 ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

「パーティションの終了とディスクへの書き込み」を選択して設定を確定します。

:::info
SSDに古いパーティションがある場合は上書きの確認で「はい」を選択してください。
:::

サーバーはパーティションを作成し、システムのインストール準備を行います。

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

追加のインストールメディア（特定のパッケージ用など）を含めたい場合はここで設定可能です。通常はパッケージマネージャー（apt）で後から簡単にダウンロードできます。

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

当社の専用サーバーはドイツにあるため、最高のダウンロード速度を得るにはドイツのミラーサイトを選ぶのがおすすめです。

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

基本的にはデフォルトのDebianリポジトリを使うことを推奨します。

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

HTTPプロキシを使いたい場合はここで設定可能です。（必須ではありません）

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

システムは匿名統計の収集を希望します。拒否または承認が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

インストールしたいパッケージを選択します：

* Debianデスクトップ環境  
  サーバーにGUIを作成しますが、今回はシェルレベルのみを使用します。

* SSHサーバー  
  PuTTYなどで接続するために必要です。

* 標準システムユーティリティ  
  基本的なパッケージを提供します。

パッケージの選択は`TAB`と矢印キーで操作し、スペースバーで選択・解除します。選択が完了したら`TAB`で「続行」まで移動し、Enterで確定します。

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

このOSが現在のサーバー上で唯一のOSであることを`はい`で確認します。

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

ストレージの場所はSSDのデフォルトを選択します。

:::info
🎉 Debianシステムのインストールが完了しました。
:::

iLOの「Virtual Media」を開き、「Eject Media」を押してISOファイルをシステムから取り出します。

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

取り出しが完了したら「続行」を選択し、サーバーが再起動します。

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## 設定

### SSHログイン

サーバーの再起動が完了しインストールが成功すると、ログイン画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

もちろんPuTTYなどでSSH経由でサーバーを管理したいので、SSHログインを有効にしましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

nanoでSSHサービスの設定ファイルを開きます：`nano /etc/ssh/sshd_config`

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

`#PermitRootLogin no`を探して`PermitRootLogin yes`に変更します。

`CTRL + X`で保存し、`Y`で変更を確定します。

その後、`service ssh restart`でSSHサービスを再起動します。

これでSSHログインが有効になり、PuTTYなどで接続可能です。  
ZAPのダッシュボードに表示されているサーバーのIPアドレスを入力し、先ほど設定した認証情報を使ってログインしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
質問や問題があれば、いつでもサポートチームにお気軽にお問い合わせください！
:::





## まとめ

おめでとうございます！専用サーバーにDebian OSを無事インストールできました。  
さらに質問やサポートが必要な場合は、毎日対応している当社のサポートチームまでお気軽にご連絡くださいね！🙂