---
id: palworld-server-savegames
title: "Palworld: Palworldセーブゲームの管理"
description: "Palworldのセーブデータを安全に管理・バックアップして、スムーズなゲームプレイを実現しよう → 今すぐチェック"
sidebar_label: セーブゲーム管理
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

このガイドでは、ゲームサーバー上でのPalworldセーブゲームの管理方法について解説します。ローカルとサーバーのセーブデータのバックアップ方法や、サーバーへのアップロード方法も紹介します。

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php) や [FileZilla](https://filezilla-project.org/) のようなFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザ** にある認証情報を使ってFTPクライアントからサーバーに接続してください。接続方法の詳細は、[FTPアクセス](gameserver-ftpaccess.md) ガイドを参考にしてください。

## セーブゲームのバックアップ

### ローカルセーブゲーム

ローカルセーブゲームは、あなたのデバイスでマルチプレイヤーゲームをホストしている間に作成されたものです。WindowsのAppData内の以下のパスにあります：
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
`CTRL` + `R` を同時に押して、実行ダイアログに `%localappdata%/Pal/Saved/SaveGames/` と入力すると、直接このフォルダにアクセスできます。**OK**を押すだけでフォルダが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

この場所にはSteamIDの名前のフォルダがあり、その中にすべてのローカルセーブゲームがまとめられています。

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### FTP経由でのセーブゲームアクセス

サーバー上のセーブゲームをバックアップするのは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../palworld/Pal/Saved/SaveGames/0
```

ここにランダムな文字列のフォルダがあり、それがセーブゲームです。フォルダを右クリックして **ダウンロード** を選択すれば、ローカルに保存できます。

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### 自動バックアップ

ウェブインターフェースからセーブゲーム（と設定ファイル）を自動バックアップするオプションもあります。ゲームサーバーのウェブインターフェースの **ツール->バックアップ** セクションにアクセスし、スケジュール設定が可能です。10GBの無料バックアップストレージが利用でき、そこにバックアップが保存されます。バックアップの詳細は専用の[バックアップ](gameserver-backups.md)ガイドをチェックしてください。

## セーブゲームのアップロード

バックアップと同様に、セーブゲームのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、以下のパスに移動します：
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

FTPクライアントでセーブゲームフォルダをドラッグ＆ドロップすれば、サーバーにアップロードされます。

:::tip
アップロードしたセーブゲームフォルダ名は控えておくと、次のセクションで有効化するときに便利です。
:::

## セーブゲームの有効化

特定のセーブゲームを使うには、設定ファイルを編集する必要があります。以下のパスにある **GameUserSettings.ini** ファイルを開いてください：
```
../Pal/Saved/Config/WindowsServer/ # Windows用
../Pal/Saved/Config/LinuxServer/ # Linux用
```

このフォルダ内の **GameUserSettings.ini** ファイルを開き、`DedicatedServerName` パラメータを探します。

この行の内容を、サーバーで有効化したいセーブゲーム（フォルダ名）に書き換えます。

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

ファイルを保存してサーバーを再起動すれば、セーブゲームが有効になります。

## セーブゲームが消えた場合

稀に、サーバー起動時に既存のセーブゲームを読み込まず、新しいセーブゲームを作成してしまうことがあります。

まずFTPクライアントで以下のパスを確認してください：
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

ここに古いセーブゲームと新しく生成されたセーブゲームが両方あるはずです。解決するには、上記の[セーブゲームの有効化](#セーブゲームの有効化)セクションの手順で正しいセーブゲームフォルダ名を設定してください。

ファイルを保存してサーバーを再起動すれば、セーブゲームが再び有効になります。

:::info
Palworldはまだアーリーアクセス段階なので、アップデート時にセーブゲームが消えたり破損したりする可能性があります。前述の[自動バックアップ](#自動バックアップ)を必ず有効にすることを強くおすすめします。
:::

<InlineVoucher />