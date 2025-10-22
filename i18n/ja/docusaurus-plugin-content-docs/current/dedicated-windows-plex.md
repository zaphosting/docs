---
id: dedicated-windows-plex
title: "専用サーバー：WindowsでPlexをセットアップ"
description: "Plexで個人メディアを簡単に管理＆ストリーミングして、デバイス間でシームレスにアクセス → 今すぐ詳しくチェック"
sidebar_label: Plexのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Plexは、映画、テレビ番組、音楽、写真などのメディアコンテンツを一元管理・ストリーミングできるプラットフォームです。Plex Media Serverを使えば、ライブラリを整理し、メタデータを自動で補完し、ローカルネットワークやインターネット経由で様々なデバイスにストリーミング可能。個人のメディアコレクションに手軽かつ便利にアクセスできる柔軟なソリューションです。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

自分でこのサービスをホスティングしようと考えていますか？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

<InlineVoucher />

## 前提条件

**Plex**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア | 最低要件       | ZAP-Hosting推奨スペック |
| ------------ | -------------- | ----------------------- |
| CPU          | 4 vCPUコア     | 8 vCPUコア              |
| RAM          | 4 GB           | 8 GB                    |
| ディスク容量 | 25GB           | 25 GB                   |

ソフトウェアは必要な依存関係がすべてインストールされており、対応OS上で動作している必要があります。インストール前に以下の条件を満たしているか必ずチェックしてください：

**依存関係:** なし

**対応OS:** Windows 10/11、Windows Server 20XX

依存関係が揃っていること、対応OSを使用していることを確認し、Plexのインストール時の互換性問題を避けましょう。

## インストール

公式Plex MediaサイトからWindows版Plex Media Serverの最新版をダウンロードできます。64ビット版を選ぶことで、最新のWindowsエディションすべてに対応可能です。ダウンロードはこちらから：https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

ダウンロード後、インストーラーを実行してPlex Media Serverをセットアップします。インストール完了後はブラウザのウェブインターフェースで設定を行い、ライブラリ作成やメディア管理が可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

セットアップが完了すると、Plex Media Serverのウェブインターフェースが自動的に既定のブラウザで開きます。ここで既存のPlexアカウントにログインするか、まだ持っていなければ新規作成を求められます。

このログインはサーバーを個人アカウントに紐付けるために必要で、リモートアクセスやユーザー管理、デバイス間同期などの機能を利用可能にします。認証が成功すると、自分専用のPlex Media環境に入れます。ここから映画、テレビ番組、音楽、写真のライブラリを作成し、メタデータを自動取得、ローカルネットワークやインターネット経由で他ユーザーとコンテンツを共有できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

セットアップ後は、`http://<ip-address>:32400` にブラウザでアクセスすることで外部からもPlex Media Serverに接続可能です。`<ip-address>`はサーバーのパブリックIPアドレスに置き換えてください。

ポート32400はPlexのウェブアクセスのデフォルトポートで、インターネット経由で接続する場合はファイアウォールやルーターで許可する必要があります。

アクセスするとPlexのログインページにリダイレクトされ、ライブラリや設定の管理ができます。安全な外部アクセスにはPlex設定のリモートアクセスを有効にすることをおすすめします。これにより通信が暗号化され、Plexサービス経由でトラフィックが中継されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## まとめ＆参考リソース

おめでとうございます！これで専用サーバーにPlexを無事インストール＆設定できました。さらにサーバー設定を深めたい方は、以下のリソースもぜひチェックしてみてください。

- [Plex.com](https://Plex.com/) - 公式サイト
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plexヘルプセンター（ドキュメント）

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームへお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />