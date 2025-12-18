---
id: beammp-authkey
title: "BeamMP: Auth Keyの作成"
description: "Auth Keyの生成と適用方法を解説。サーバーを公開リストに表示し、アクセス管理を簡単に → 今すぐチェック"
sidebar_label: Auth Keyの作成
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## なぜキーが必要なの？

Auth Keyは、サーバーをサーバーリストに表示させたい場合に必要です。キーがないと、直接接続のみでの利用になります。

<InlineVoucher />

## 準備
まずは https://beammp.com/keymaster にDiscordアカウントでログインします。
ログイン後、左の「Keys」をクリックするとライセンスキーの一覧画面に移動します：

![](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

ここで青い「here」をクリックしてキーを作成します：

![](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## データの入力

以下のようにデータを入力します：

- **サーバー名:** サーバーの名前。設定の名前と同じである必要はありません。
- **サーバーIP:** サーバーのIPアドレス（ポートなし）。


### IPの指定

IPはポートなしで指定します。インターフェースの上部で確認できます：

![](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## キーの作成

「Create」をクリックするとキーが生成されます。

![](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## キーの設定

ゲームサーバーの設定を開き、下にスクロールして「Auth Key」の欄に先ほど作成したキーを入力します。完成イメージはこんな感じです。

![](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

設定を保存してサーバーを再起動しましょう。

これで完了！キーが適用され、サーバーがまもなくリストに表示されます。

<InlineVoucher />