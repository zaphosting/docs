---
id: dedicated-proxmox
title: "専用サーバー：Proxmox VEのインストール"
description: "統合ツールと高可用性を備えた企業向け仮想化プラットフォーム、Proxmox VEのセットアップと管理方法をチェック → 今すぐ詳しく見る"
sidebar_label: Proxmoxのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Proxmox Virtual Environmentは、企業向け仮想化のための完全なオープンソースのサーバー管理プラットフォームです。KVMハイパーバイザーとLinuxコンテナ（LXC）、ソフトウェア定義ストレージやネットワーク機能を単一プラットフォームにシームレスに統合しています。統合されたウェブベースのユーザーインターフェースを使えば、VMやコンテナの管理、クラスタの高可用性、統合された災害復旧ツールも簡単に操作できます。



## 準備

まずは、Proxmox VE（Virtual Environment）のISOインストーラーを専用サーバーにマウントして起動する必要があります。方法は2つあり、簡単なのは専用サーバーのウェブインターフェースから行う方法、もう一つはサーバーのiLOパネルを使って手動で行う少し手間のかかる方法です。



### ウェブインターフェースからISOをマウントする
専用サーバーのウェブインターフェースの**初期インストール**セクションにアクセスしてください。まずは緑色の**iLOを有効にする**ボタンを押します。しばらく待つとセクションが表示されるので、ページをリロードして完全に読み込まれるのを確認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

次に、ドロップダウンメニューから**Proxmox VE**のISOを選択します。最新バージョンを使うことをおすすめします。選択したら緑色の**挿入**ボタンを押しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

最後に、ISOから起動できるように専用サーバーを再起動します。ステップ3の下にある再起動ボタンから行えます。



### iLOからISOをマウントする
まずは[Proxmoxダウンロードサイト](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso)からProxmox VEのISOを用意してください。その後、[iLO](dedicated-ilo.md)と[Own ISO](dedicated-iso.md)のガイドに従って、専用サーバーにログインしカスタムISOをアップロード＆マウントします。



## セットアップ＆設定

:::important
新しいISOをインポート＆マウントした後は、必ずサーバーを再起動してから次に進んでください。
:::

ISOをマウントしたら、そこから起動する必要があります。iLOパネルの**HTML5リモートコンソール**を使って起動しましょう。ウェブインターフェースからは、`iLO web access`の下にある**ここを開く**リンクを押すとパネルにアクセスできます。表示された認証情報でログインしてください。

:::note
ブラウザがセキュリティ警告を表示する場合がありますが、無視して続行してください。
:::

ログイン後、**概要**セクションの`統合リモートコンソール`にある**HTML5**リンクをクリックするとパネルのオーバーレイが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Proxmoxのセットアップ画面が表示されます。`矢印キー`、`Enter`、`Esc`で操作可能です。ガイドでは**グラフィカル**版のProxmoxを選ぶことをおすすめします。

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

数秒待つとセットアップが進みます。ProxmoxのEULAに同意するため、右下の**同意します**ボタンを押してください。次の画面では環境をインストールするターゲットドライブを選択します。単一ドライブの場合はデフォルト設定で問題ないので、**次へ**を押して進みましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
専用サーバーによっては2台ドライブがある場合があり、その場合は**オプション**ボタンから`RAID`モードを選択できます。`RAID1`（ミラーリング）がおすすめです。

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

次は言語やキーボードの設定です。通常は自動検出されるので、そのまま進めてください。

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

続いて強力なパスワードとメールアドレスを設定します。メールアドレスはパネルからの重要な通知やアラート送信に使われます。

:::important
パスワードは忘れないように！インストール後の初回ログイン時に必要です！
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

最後にネットワーク設定です。管理用インターフェースとサーバーのホスト名を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

専用サーバーのウェブインターフェースの**IPアドレス**セクションに移動し、利用可能なIPを確認しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Proxmoxパネルで使いたいIPアドレスを選び、インストーラーにIPアドレス、ネットマスク、ゲートウェイを入力します。DNSサーバーにはGoogleのパブリックDNSである`8.8.8.8`を入れてOKです。

すべて入力したら**次へ**を押し、設定内容の確認画面で問題なければ**インストール**を押して進めましょう！

## パネルへのアクセス
インストール完了後、システムが再起動したらメニューから**Proxmox Environment GNU/Linux**を選択して**Enter**を押します。起動後、コンソールにProxmoxからのウェルカムメッセージが表示され、IPアドレスとブラウザでアクセスするためのリンクが記載されています。指定したリンクにアクセスしてください。

:::note
再度ブラウザのセキュリティ警告が出る場合がありますが、無視して続行してください。
:::

もしリンクにアクセスできない場合は、セットアップ時のネットワーク設定に誤りがある可能性があります。

パネルにアクセスできたらログインしましょう。ユーザー名は`root`、パスワードはインストール時に設定したものを使います。**Realm**は`Linux PAM standard authentication`に設定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

ログイン後、サブスクリプションメッセージは**OK**ボタンで無視できます。これで専用サーバーにProxmox VEを無事インストールし、パネルにログインできました！



## 最初のVMを作成しよう
ここではProxmoxパネルから最初の仮想マシン（VM）を作成する基本ステップを紹介します。`local (panel)`の**ISOイメージ**セクションに移動し、`.iso`ファイルを手動でアップロードするか、直接ダウンロードURLを指定してProxmoxに取得させることができます。

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

アップロードが完了したら、右上の**VMを作成**ボタンを押して新規作成メニューを開きます。豊富なオプションが用意されています。

まずは一般設定です。`Node`はデフォルトのまま（この場合は`panel`）でOK。ユニークなVM IDを入力します。デフォルトは`100`で、既存のVMがあれば自動でインクリメントされます。VMの名前は自由に決めてください。

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

次にOS設定です。先ほどアップロードしたISOイメージを選択し、使用するOSの種類とバージョンも指定します。

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

システム設定はデフォルトのままで問題ありません。ディスク設定ではVMに割り当てるディスクサイズを指定できます。ストレージプールも選べますが、デフォルトは`local-lvm`です。その他の設定も基本的にデフォルトでOKです。

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

CPU設定ではソケット数やコア数を自由に設定可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

メモリ設定ではVMに割り当てるRAM容量とバルーニングの状態を指定できます。

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

ネットワーク設定も基本的にデフォルトのままで問題ありません。最後にこれまでの設定をすべて確認し、`作成後に起動`オプションをオンにしておくとVMが自動で起動します。問題なければ**完了**ボタンを押してVMを作成しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

これでProxmoxパネル上に最初のVMが作成されました！パネル左側のサーバービューで確認できます。



## まとめ

おめでとうございます！専用サーバーにProxmoxを無事インストールできました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね 🙂