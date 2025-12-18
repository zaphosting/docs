---
id: fivem-change-servericon
title: "FiveM: サーバーリストのアイコンを変更する方法"
description: "FiveMサーバーをユニークな96x96 PNGアイコンでカスタマイズして、サーバーの個性をアップしよう → 今すぐチェック"
sidebar_label: サーバーアイコンの変更
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
サーバーをカスタマイズして、自分だけのオリジナルアイコンを設定したい？簡単にできるよ！このガイドでは、画像の準備から新しいカスタムサーバーアイコンの設定方法までを解説するよ。

<InlineVoucher />

## 準備
FiveMサーバーにカスタムサーバーアイコンを設定するには、まず96x96ピクセルのPNG形式（`.png`拡張子）の画像ファイルを用意しよう。GIMPのような画像編集ソフトを使うか、オンラインのツールで既存の画像をリサイズ＆変換するのがおすすめ。指定の条件に合った画像が用意できたら、アップロードしてサーバー設定に反映させる準備は完了だよ。

## 設定手順

### ファイルのアップロード

次は、用意した画像をFiveMゲームサーバーにアップロードするよ。FTPを使って行うから、FTPの使い方がわからない場合は[FTPアクセス](gameserver-ftpaccess.md)のガイドをチェックしてね。

FTPにログインしたら、`gXXXXXX/fivem/YOUR_FRAMEWORK/`フォルダに移動して、サーバーアイコンのファイルをアップロードしよう。ここではCFXのデフォルトテンプレートを例にしてるけど、自分の使っているフレームワークのフォルダにアップロードしてね。ファイル名は覚えておくこと！

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### 有効化

サーバー起動時にアイコンが読み込まれるように、`server.cfg`ファイルの`load_server_icon`パラメータに設定を追加しよう。例えば、アイコンの名前を`zaphosting96x96`にした場合は、以下のように書くよ：

```
# サーバーアイコンの読み込み（96x96 PNGファイル）
load_server_icon zaphosting96x96.png
```

:::info
コマンドで指定する画像ファイル名は、アップロードしたファイル名と完全に一致している必要があるよ。大文字・小文字も区別されるから注意してね。
:::

## まとめ

すべての手順を正しく行えば、次回サーバーを再起動したときに新しいサーバーアイコンが表示されるはず！もしわからないことがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！🙂

<InlineVoucher />