---
id: starrupture-mods
title: "StarRupture：MODのインストール"
description: "StarRuptureのゲームサーバーとクライアントにMODをインストールしてゲームプレイを拡張する方法 → 今すぐ詳しく学ぼう"
sidebar_label: MODのインストール
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

MODは、コミュニティが作成した新しいメカニクス、コンテンツ、利便性向上、ゲームプレイ調整などを追加して、StarRuptureのゲームプレイを拡張することができます。多くのStarRupture MODはNexusModsなどのコミュニティプラットフォームで配布されており、ゲームサーバーとクライアントの両方にインストール可能です。

ゲームサーバーにMODをインストールすると、サーバー環境が変更されたコンテンツを読み込みます。一方、クライアントにローカルでインストールすると、MOD導入済みのサーバーに接続する際に同じファイルを使用できます。

<InlineVoucher />

## ゲームサーバーへのMODインストール

StarRuptureのゲームサーバーにMODをインストールするには、まず信頼できるサイト（例：**NexusMods**）から目的のMODファイルをダウンロードしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

MODをアップロードする前に、インストール中のファイル競合を避けるためにサーバーを停止してください。次に、FTPクライアントを使って[FTP](gameserver-ftpaccess.md)経由でサーバーに接続します。接続後、サーバー内の以下のディレクトリに移動します：

```
/home/container/StarRupture/Content/Paks
```
ダウンロードした`.zip`形式のMODファイルをこのフォルダにアップロードしてください。アップロード完了後、アーカイブの中身を`Paks`ディレクトリ内で直接展開します。ファイルの展開が終わったら、サーバー管理パネルに戻り、サーバーを再起動してください。

起動時にサーバーが自動的にMODを検出して読み込みます。

## クライアントへのMODインストール

一部のStarRupture MODはクライアント側にもローカルインストールが必要です。多くのローカルMODはサーバー接続時にも有効なままです。まず、信頼できるサイト（例：NexusMods）から目的のMODをダウンロードしてください。

次に、**Steamライブラリ**を開き、**StarRupture**を右クリックして、**管理**にカーソルを合わせ、**ローカルファイルを閲覧**を選択します。ゲームインストールディレクトリ内の以下のパスを探してください：

```
StarRupture/StarRupture/Content/Paks
```

ダウンロードした`.zip`形式のMODファイルをこのフォルダに移動します。ファイルをコピーしたら、アーカイブを`Paks`ディレクトリ内で直接展開してください。展開後、次回ゲーム起動時にMODが自動的に読み込まれます。

## まとめ

おめでとうございます！StarRuptureのゲームサーバーとクライアントの両方にMODを無事インストールできました。MODを導入することで、コミュニティが作った新機能やメカニクス、改善点でゲームプレイ体験を大幅に拡張できます。

ご不明点やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />