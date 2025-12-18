---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Abiotic Factorのセーブデータ管理"
description: "Abiotic Factorのセーブデータをローカルとサーバー上で安全に管理・バックアップする方法を解説 → 今すぐチェック"
sidebar_label: セーブデータ管理
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Abiotic Factorのゲームサーバー上でのセーブデータ管理方法を紹介します。ローカルとサーバーのセーブデータのバックアップやサーバーへのアップロード方法も解説します。

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php)や[FileZilla](https://filezilla-project.org/)などのFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザ** にある認証情報を使ってFTPクライアントからサーバーに接続してください。接続方法の詳細は[FTPアクセス](gameserver-ftpaccess.md)ガイドも参考にどうぞ。

## セーブデータのバックアップ

### ローカルセーブデータ

ローカルセーブデータは、自分のデバイスでマルチプレイヤーゲームをホストした際に作成されるものです。WindowsのローカルAppData内、以下のパスにあります：
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[your_steamid]/Worlds
```

:::tip
`CTRL` + `R`を同時押しして「ファイル名を指定して実行」を開き、以下のパスを入力すると直接アクセスできます：`%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`。OKを押せばフォルダが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Steam IDフォルダの中の`Worlds`フォルダに進んでください。ここにローカルのセーブデータがすべて保存されています。

### FTP経由でのセーブデータアクセス

サーバー上のセーブデータのバックアップは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

ここにセーブデータが保存されています。フォルダを右クリックして**ダウンロード**を選択すれば、ローカルに保存できます。

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### 自動バックアップ

ウェブインターフェースからセーブデータ（と設定ファイル）の自動バックアップも設定可能です。ゲームサーバーのウェブインターフェースの **ツール->バックアップ** セクションにアクセスし、スケジュール設定ができます。10GBの無料バックアップストレージが利用可能です。バックアップの詳細は[バックアップ](gameserver-backups.md)ガイドをチェックしてください。

## セーブデータのアップロード

バックアップと同様に、セーブデータのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、以下のパスに移動してください：
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
現状、Abiotic Factorの専用サーバーはセーブデータの切り替えに対応していません。そのため、アップロードするセーブデータの中身をメインの`world`フォルダに直接入れる必要があります。
:::

アップロードしたいセーブデータのフォルダを開き、中のファイルすべてをサーバーの`world`フォルダにドラッグ＆ドロップしてください。これでセーブデータがサーバーにアップロードされます。

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
もし`world`フォルダが見当たらない場合は、一度サーバーを停止して再起動してみてください。それでもダメなら、ゲームサーバーのダッシュボードにある**Steamファイルの検証**ボタンを使ってデフォルトファイルを復元しましょう。
:::

## セーブデータの有効化

通常は設定ファイルを編集してセーブデータを有効化しますが、Abiotic Factorの専用サーバーはセーブデータの切り替えに対応していないため不要です。

サーバーを再起動すれば、次回起動時にアップロードした`world`フォルダ内のセーブデータが自動的に読み込まれます。

<InlineVoucher />