---
id: redm-change-servericon
title: "RedM: サーバーリストのアイコンを変更する方法"
description: "RedMサーバーのアイコンを完璧な96x96のPNG画像でカスタマイズして、ユニークな見た目にしよう → 今すぐ詳しくチェック"
sidebar_label: サーバーアイコンの変更
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
サーバーをカスタマイズして、自分だけのオリジナルアイコンを設定したい？簡単にできちゃいます！このガイドでは、画像の準備方法と新しいカスタムサーバーアイコンとして設定する方法を解説します。

<InlineVoucher />

## 準備
RedMサーバーにカスタムサーバーアイコンを設定するには、まず96x96ピクセルのPNG画像（`.png`ファイル拡張子）を用意する必要があります。GIMPのような画像編集ソフトを使うか、オンラインのツールで既存の画像をリサイズ＆変換するのがおすすめです。指定の条件に合った画像が準備できたら、アップロードしてサーバー設定に反映させましょう。

## 設定手順

### ファイルのアップロード

次に、用意した画像をRedMゲームサーバーにFTPでアップロードします。FTPの使い方がわからない場合は、[FTPアクセス](gameserver-ftpaccess.md)のガイドをチェックしてみてください。

FTPにログインしたら、`gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/` フォルダに移動して、サーバーアイコンのファイルをアップロードします。ここではCFXのデフォルトテンプレートを例にしていますが、自分の使っているフレームワークのフォルダにアップロードしてください。ファイル名は忘れないようにメモしておきましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/XyxtsR2FbmjD6SM/download)

### 有効化

サーバー起動時にアイコンを読み込むために、サーバーの `server.cfg` ファイル内の `load_server_icon` パラメータに設定を追加します。例えば、アイコンの名前を `zaphosting96x96` にした場合は、以下のように記述します：

```
# サーバーアイコンの読み込み（96x96 PNGファイル）
load_server_icon zaphosting96x96.png
```

:::info
コマンドで指定する画像ファイル名は、アップロードしたファイル名と完全に一致している必要があります。大文字・小文字も区別されるので注意してください。
:::

## まとめ

すべての手順を正しく行えば、次回サーバーを再起動した際に新しいサーバーアイコンが表示されるはずです。もしわからないことがあれば、いつでもサポートチームにお問い合わせください。毎日対応しているので安心してね！🙂

<InlineVoucher />