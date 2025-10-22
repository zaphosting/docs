---
id: minecraft-add-own-world
title: "Minecraft: サーバーに自分のワールドを追加する方法"
description: "サーバーにカスタムMinecraftワールドをアップロードして設定し、あなただけのゲーム体験を楽しもう → 今すぐ詳しくチェック"
sidebar_label: 自分のワールドを追加する
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

自分のワールドやインターネットからダウンロードしたワールドをサーバーで使いたい？それならここがピッタリ！必要なのはワールドデータとFTPクライアントだけ。FTPクライアントって何？どう使うの？って人は、こちらのガイドをチェックしてね：[FTPアクセスについて](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="MinecraftサーバーにカスタムMAPをアップロードする方法" description="実際の操作を見たほうが理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時も、どっちもOK！"/>

FTPでサーバーに接続できたら、自分のワールドの設定を始めよう。まずは現在のワールドがあるディレクトリに移動する必要があるよ。場所はここ：/gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

新しいワールドをこのディレクトリにアップロードしよう。古い**world**フォルダを削除して置き換えるか、別の名前でアップロードしてもOK。今回は新しい名前でアップロードする例を紹介！

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

アップロードしたワールドを使うには、**server.properties**の設定を変更する必要があるよ。これは**ゲームサーバー管理**の**Configs**から開ける。ここで**level-name=**の値をアップロードしたワールド名に変えてね。

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

サーバーを再起動すれば、新しいワールドが反映されるはず。新しいワールドで思いっきり楽しんでね！🙂

<InlineVoucher />

<InlineVoucher />