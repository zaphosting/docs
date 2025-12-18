---
id: minecraft-whitelist
title: "Minecraft: ホワイトリストの有効化と編集"
description: "ホワイトリスト機能でMinecraftゲームサーバーのアクセスを管理し、プレイ環境を守る方法をチェック → 今すぐ詳しく学ぼう"
sidebar_label: ホワイトリスト
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
**Minecraftのホワイトリスト**は、指定したプレイヤーだけがゲームサーバーに接続できるようにしてサーバーを守るオプションです。Minecraftは他のゲームのようにサーバーパスワード機能が標準でないため、この機能が重要になります。

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Minecraftサーバーでホワイトリストを有効にする方法" description="実際の動きを見たほうが理解しやすい？そんなあなたにピッタリの動画です！急いでいる時も、じっくり学びたい時も、わかりやすく解説しています！"/>

<InlineVoucher />

## ホワイトリストの有効化



### 有効化（設定ファイル）

ホワイトリストを有効にするには、**server.properties** 設定ファイル内のコマンドの値を **true** に設定します。変更を反映させるにはサーバーの再起動が必要です。

```
white-list=true
```



### 有効化（チャットコマンド）

また、ゲーム内やライブコンソールからもホワイトリストを有効化できます：

```
/whitelist on			(ホワイトリストを有効化)
/whitelist off			(ホワイトリストを無効化)
```



ゲーム内でホワイトリストを有効にするにはオペレーター権限が必要です！権限がない場合はライブコンソール（インターフェース）から実行可能です。ライブコンソールではコマンドの先頭の **/** は不要なので注意してください。


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## ホワイトリストの管理



### プレイヤーの追加・削除



**チャットコマンド**

以下のコマンドでホワイトリストにプレイヤーを追加・削除できます：

```
/whitelist add プレイヤー名
/whitelist remove プレイヤー名
```



**white-list.json**

プレイヤーのUUIDがわかっている場合は、**white-list.json** ファイルを直接編集して手動で追加も可能です。FTPでアクセス・編集できます。FTP接続方法はこちらのガイドを参照してください：[FTPアクセス方法](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "プレイヤー1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "プレイヤー2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "プレイヤー3"
  }
]
```



### リストの更新

手動でプレイヤーを追加した場合は、ゲーム内でホワイトリストをリロードする必要があります。サーバー再起動を避けるために以下のコマンドでリロード可能です：

```
 /whitelist reload
```



### リストの表示

毎回FTPでファイルを開かなくても、以下のコマンドでホワイトリストに登録されている全プレイヤーを表示できます：

```
/whitelist list
```


<InlineVoucher />