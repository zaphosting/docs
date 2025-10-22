---
id: dedicated-windows
title: "専用サーバー：Windows Server 2025のインストール"
description: "専用サーバーにWindows Server 2025を成功裏にインストール＆設定して最高のパフォーマンスを実現する方法 → 今すぐチェック"
sidebar_label: Windows Server 2025
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
このガイドでは、専用サーバーにWindows ServerのOSをインストールし設定する手順をステップごとに解説します。指示にしっかり従って、OSを問題なくセットアップし、最大限に活用しましょう。



:::info Windows Server 2025

本ガイドのセットアップ手順とデモは**Windows Server 2025**をベースにしています。**旧バージョンのOS**は**構成**や**見た目**が異なる場合がありますが、基本的な流れはほぼ同じです。  
:::



<InlineVoucher />

## 準備
OSのインストールと設定を始めるには、まず対応するOSのISOイメージをマウントする必要があります。マウント方法は主に以下の3つです：

1. 初期セットアップ時にマウント
2. iLO（Virtual Media）経由でマウント
3. iLO（リモートコンソール）経由でマウント

ISOファイルのマウントに慣れていない場合は、まず[初期セットアップ](dedicated-setup.md)や[自作ISO](dedicated-iso.md)のガイドを参考にするのがおすすめです。



## インストール

ISOファイルのマウントが完了すると、次回システム再起動時に自動でWindows Serverのインストールが始まります。まず言語とキーボードレイアウトを指定し、セットアップオプションで**Windows Serverのインストール**を選択してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/gW4cr5WDGYEdBzw/download)

インストールが開始されると、システムが必要なコンポーネントを準備します。この処理には少し時間がかかることがあります。準備が完了したら、インストールしたいWindows Serverのエディションを選択します。選択肢は以下の通りです：

- Windows Server 2025 Standard Evaluation
- Windows Server 2025 Standard Evaluation (Desktop Experience)
- Windows Server 2025 Datacenter Evaluation
- Windows Server 2025 Datacenter Evaluation (Desktop Experience)

GUIやRDPを使いたい場合は、Desktop Experience付きのバージョンを選びましょう。StandardとDatacenterの違いについては、公式の[Microsoftサイト](https://learn.microsoft.com/en-us/windows-server/get-started/editions-comparison?pivots=windows-server-2025)で詳しく確認できます。

:::warning Windows Serverのエディションとライセンスについて
有効なライセンスキーを持っているエディションを必ず選択してください。ZAP-Hostingではこの商品にWindows Serverのライセンスは付属していません。試用期間終了後は別途ライセンスを購入する必要があります。
:::

希望のイメージを選択したら、注意事項とライセンス条件に同意し、OSをインストールするパーティションを指定します。**パーティションの作成**をクリックして新しいパーティションを作成し、作成したディスク/パーティションを選択して「次へ」をクリック。最後に**インストール**をクリックしてインストールを開始します。

![img](https://screensaver01.zap-hosting.com/index.php/s/2RQcBKiqoJE9MAg/download)

Windows Serverのインストールが始まります。途中で数回再起動が入るので、完了までしばらく待ちましょう。

ログイン情報を設定したら、インストールしたOSにログイン可能です。ログイン情報は今後ずっと使うので大切に保管してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/FiXwH85pT24DYnJ/download)



## 設定

OSのセットアップが完了したら、外部からの接続を許可するためにRDPアクセスを有効化しましょう。リモートデスクトップの設定画面に移動し、該当オプションをオンにします。

![img](https://screensaver01.zap-hosting.com/index.php/s/gCCcTzpn69LpgSr/download)



## まとめ
おめでとうございます！専用サーバーにWindows Server 2025のインストールが無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />