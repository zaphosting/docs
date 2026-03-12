---
id: starrupture-mods
title: "StarRupture：MODのインストール"
description: "StarRuptureのゲームプレイを拡張するために、サーバーとクライアントにMODをインストールする方法を学ぼう → 今すぐチェック"
sidebar_label: MODのインストール
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

MODは、コミュニティが作成した新しいメカニクス、コンテンツ、利便性向上、ゲームプレイ調整などを追加して、StarRuptureのゲーム体験を拡張することができます。多くのStarRupture MODはNexusModsなどのコミュニティプラットフォームで配布されており、サーバーとクライアントの両方にインストール可能です。

サーバーにMODをインストールすると、サーバー環境が改変されたコンテンツを読み込みます。一方、クライアントにローカルでインストールすると、MOD導入済みのサーバーに接続する際に同じファイルを使用できます。

<InlineVoucher />

## サーバーへのMODインストール

StarRuptureサーバーにMODをインストールするには、まず信頼できる配布元（例：**NexusMods**）から目的のMODファイルをダウンロードしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

MODをアップロードする前に、インストール中のファイル競合を避けるためにサーバーを停止しておきましょう。次に、FTPクライアントを使って[FTPアクセス](gameserver-ftpaccess.md)でサーバーに接続します。接続後、サーバー内の以下のディレクトリに移動してください：

```
/gxxxxxxx/StarRupture/Content/Paks
```
ダウンロードした`.zip`形式のMODファイルをこのフォルダにアップロードします。アップロード完了後、アーカイブの中身を`Paks`ディレクトリ内で直接展開してください。ファイル展開が終わったら、サーバー管理パネルに戻り、サーバーを再起動しましょう。

起動時にサーバーが自動的にMODを検出して読み込みます。

## クライアントへのMODインストール

一部のStarRupture MODはクライアント側にもローカルインストールが必要です。ローカルにインストールしたMODは、ほとんどの場合サーバー接続時に有効になります。まず、信頼できる配布元（例：NexusMods）から目的のMODをダウンロードしてください。

次に、**Steamライブラリ**を開き、**StarRupture**を右クリックして、**管理**にカーソルを合わせ、**ローカルファイルを閲覧**を選択します。ゲームのインストールディレクトリ内で、以下のパスを探してください：

```
StarRupture/StarRupture/Content/Paks
```

ダウンロードした`.zip`形式のMODファイルをこのフォルダにコピーします。コピー後、アーカイブを`Paks`ディレクトリ内で直接展開してください。展開が完了すると、次回ゲーム起動時にMODが自動的に読み込まれます。

## まとめ

おめでとうございます！StarRuptureのサーバーとクライアントの両方にMODを無事インストールできました。MODを導入することで、コミュニティが作り出した新機能やメカニクス、改善点でゲームプレイをさらに楽しめます。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />