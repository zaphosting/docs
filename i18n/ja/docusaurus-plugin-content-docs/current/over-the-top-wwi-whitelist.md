---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: ホワイトリストの設定"
description: "Over the Top WWIサーバーでホワイトリストを有効化・管理する方法 → 今すぐチェック"
sidebar_label: ホワイトリスト
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ホワイトリストを使うと、**Over the Top WWI** ゲームサーバーへのアクセスを承認されたプレイヤーだけに制限できます。プライベートサーバーやコミュニティ、テスト環境など、アクセスをコントロールしたい場合に超便利です。

ホワイトリストを有効にすると、リストに載っているプレイヤーだけがサーバーに接続可能になります。

<InlineVoucher />

## 設定方法

ホワイトリストはサーバーの設定ファイル内で管理します。**ゲームサーバーのコントロールパネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを開いて、以下のパラメータを探してください：

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` はホワイトリスト機能のオン・オフを切り替えます

- `False` → 無効
- `True` → 有効

- `WhiteListPathString` は許可されたプレイヤーIDを保存するファイル名を指定します

ホワイトリストが有効な場合、指定されたファイルに載っているプレイヤーだけがサーバーに参加できます。

## ホワイトリストの管理

ホワイトリストファイルは通常サーバーディレクトリ内にあり、許可されたプレイヤーIDのリストが記載されています。

プレイヤーIDは1行ずつ追加してください：

```
SteamID1
SteamID2
SteamID3
```

正しいプレイヤーIDを使わないとアクセスが拒否されるので注意！ホワイトリストファイルや`ServerConfiguration.ini`を更新したら、必ず保存してサーバーを再起動してください。これでホワイトリストが反映されます。

## まとめ

おめでとう！これで**Over the Top WWIゲームサーバー**のホワイトリスト設定が完了しました。これにより、サーバーへのアクセスをしっかり管理して、プライベートやモデレートされた環境を作れます。

質問やサポートが必要なときは、いつでもお気軽にサポートチームに連絡してくださいね！毎日対応してますよ 🙂 

<InlineVoucher />