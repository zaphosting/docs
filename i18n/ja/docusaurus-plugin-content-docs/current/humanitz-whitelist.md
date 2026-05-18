---
id: humanitz-whitelist
title: "HumanitZ: ホワイトリスト管理"
description: "HumanitZサーバーのホワイトリスト管理とアクセス制御の方法 → 今すぐ詳しく学ぼう"
sidebar_label: "ホワイトリスト"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

ホワイトリストを使うと、HumanitZゲームサーバーに参加できるプレイヤーを正確にコントロールできます。有効にすると、許可されたプレイヤーのSteam IDがリストにある場合のみ接続可能になります。

<InlineVoucher />



## 設定方法

ホワイトリスト機能は `GameServerSettings.ini` ファイル内で管理されています。サーバーの管理パネルの **Configs** からアクセス可能です。ホワイトリストモードを有効にするには、以下のパラメータを探して設定してください：

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – ホワイトリストモードを有効化。リストにあるプレイヤーのみ参加可能。
- `OnlyAllowedPlayers=0` – ホワイトリストモードを無効化。全プレイヤーが参加可能。

ホワイトリストモードを有効にしたら、ホワイトリストファイルを手動で作成する必要があります。

お好きなFTPクライアントを使って[FTP](gameserver-ftpaccess.md)でサーバーに接続してください。接続後、サーバーのメインディレクトリに移動し、`F_MVPAccess.txt` という名前の新しいファイルを作成します。このファイルには、許可したいプレイヤーの**Steam IDを1行に1つずつ**入力してください。

```
76561198000000001
76561198000000002
```

Steam IDを追加したら、ファイルを保存してください。



## プレイヤーのアクティビティ監視

HumanitZでは、プレイヤーの接続状況を追跡するための追加ファイルも用意されています。`F_ConnectedPlayers.txt` は現在接続中のプレイヤーを表示し、`PlayerConnectedLog.txt` はSteam名やユニークなSteam ID、タイムスタンプ付きで全ての接続・切断ログを記録します。

これらのファイルはSteam IDの特定やサーバーの稼働状況の監視に役立ちます。ホワイトリストやバンリストのファイルを変更した後は、必ずファイルを保存してサーバーを再起動し、変更を反映させてください。

## まとめ

おめでとうございます！ホワイトリストモードを有効にし、`F_MVPAccess.txt` と `F_BannedPlayers.txt` ファイルを管理することで、HumanitZゲームサーバーのアクセス制御がしっかり設定できました。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />