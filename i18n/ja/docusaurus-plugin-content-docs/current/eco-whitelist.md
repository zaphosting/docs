---
id: eco-whitelist
title: "ECO: ホワイトリストを有効化する"
description: "ECOのホワイトリスト機能でプレイヤーのアクセスを管理し、サーバーを安全に守る方法をチェック → 今すぐ詳しく見る"
sidebar_label: ホワイトリスト
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

ECOのホワイトリスト機能を使えば、リストに登録された選ばれたプレイヤーだけがサーバーに接続できるようにして、サーバーを守れます。

<InlineVoucher />

### 有効化（設定）

ホワイトリストの有効化は自動で行われます。リストに少なくとも1人のプレイヤーが追加されると有効になります。プレイヤーは**Users.eco**の設定ファイルに追加する必要があります。 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



**$values** フィールドにはホワイトリストに追加したいプレイヤーのSteamIDを入れます。Steamプロフィールを開いて、どこかで右クリックすると、プロフィールのSteam URLをコピーできます。 



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


その後、以下のいずれかのサイトを開いて、コピーしたプロフィールのURLを貼り付けてください。 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

これでアカウントの一般情報とSteam IDが表示されます。ここで必要なのはSteamID64だけです。SteamID64を**$values**にセットします。例はこんな感じです：

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "weitereSteamID"      
      ]
    }
```



### 有効化（チャット）

また、ゲーム内の管理者権限を持つプレイヤーはチャットコマンドでホワイトリストにプレイヤーを追加することも可能です。追加は以下のコマンドで行います：

```
/whitelist [player]
```



## ホワイトリストの管理

ホワイトリストの管理は**Users.eco**の設定ファイルでしかできません。サーバーコマンドでプレイヤーをホワイトリストから削除することはできないためです。プレイヤーを削除したい場合は、設定ファイルから該当プレイヤーを削除してください。変更を反映させるにはサーバーの再起動も必要です。 

<InlineVoucher />