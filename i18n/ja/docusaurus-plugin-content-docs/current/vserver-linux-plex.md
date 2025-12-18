---
id: vserver-linux-plex
title: "VPS: LinuxでPlexをセットアップ"
description: "Plexで個人のメディアライブラリを簡単に管理＆ストリーミングして、どのデバイスからでもシームレスにアクセス → 今すぐチェック"
sidebar_label: Plexのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Plexは、映画、テレビ番組、音楽、写真などのメディアコンテンツを一元管理・ストリーミングできるプラットフォームです。Plex Media Serverを使えば、ライブラリを整理し、メタデータを自動で補完し、ローカルネットワークやインターネット経由で様々なデバイスにストリーミング可能。個人のメディアコレクションに簡単かつ便利にアクセスできる柔軟なソリューションです。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

自分でこのサービスをホスティングしようと考えてる？セットアップから設定まで、必要なポイントを全部わかりやすく解説するよ。

<InlineVoucher />

## 前提条件

**Plex**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしているか確認してね。

| ハードウェア | 最低限       | ZAP-Hosting推奨          |
| ------------ | ------------ | ------------------------ |
| CPU          | 4 vCPUコア   | 8 vCPUコア               |
| RAM          | 4 GB         | 8 GB                     |
| ディスク容量 | 25GB         | 25 GB                    |

ソフトウェアは必要な依存関係がすべてインストールされていて、対応OS上で動作している必要があるよ。インストール前に以下の条件を満たしているかチェックしよう：

**依存関係:** なし

**対応OS:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64ビット

依存関係が揃っていて、正しいOSバージョンを使っていることを確認し、Plexのインストール時の互換性トラブルを避けよう。

## インストール

公式Plex MediaサイトからLinux版Plex Media Serverの最新版をダウンロードできるよ。64ビット版を使うことで最新のLinux環境に対応できる。以下のコマンドで`.deb`ファイルをダウンロードしよう。

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

ダウンロードが終わったら、インストーラーを実行してPlex Media Serverをセットアップ。インストール後はブラウザのウェブインターフェースで設定を行い、ライブラリ作成やメディア管理ができるよ。インストールは以下のコマンドで開始。

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Plex Media Serverのセットアップは、インストールした同じマシンでブラウザを開き、`http://127.0.0.1:32400/web`にアクセス。ここで既存のPlexアカウントでログインするか、まだ持っていなければ新規作成を求められるよ。

このログインはサーバーを個人アカウントに紐付けるために必要で、リモートアクセスやユーザー管理、デバイス間同期などの機能を使えるようにするんだ。認証が成功すると、自分のPlex Mediaインスタンスに入れる。そこから映画、テレビ番組、音楽、写真のライブラリを作成し、メタデータを自動取得、ローカルネットワークやインターネット経由で他のユーザーとコンテンツを共有できるよ。

セットアップ後は、ブラウザで`http://<ip-address>:32400`にアクセスすれば外部からもPlex Media Serverに接続可能。`<ip-address>`はサーバーのパブリックIPアドレスに置き換えてね。

ポート32400はPlexのウェブアクセスのデフォルトポートだから、インターネット経由で接続したい場合はファイアウォールやルーターで許可が必要になることもあるよ。

アクセスするとPlexのログインページにリダイレクトされ、ライブラリや設定の管理ができる。安全な外部アクセスにはPlex設定の「リモートアクセス」を有効にするのがおすすめ。これで通信が暗号化され、Plexサービス経由でトラフィックが中継されるから安心だよ。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## まとめ＆参考リンク

おめでとう！これでVPSにPlexを無事インストール＆設定できたよ。サーバー設定の参考になる以下のリソースもぜひチェックしてみてね。

- [Plex.com](https://Plex.com/) - 公式サイト
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plexヘルプセンター（ドキュメント）

ここにない質問や困ったことがあれば、いつでもサポートチームに連絡してね。毎日対応してるから気軽にどうぞ！🙂

<InlineVoucher />