---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI：バン＆モデレーション設定方法"
description: "Over the Top WWIサーバーでのバンリストとモデレーション設定のやり方 → 今すぐチェック"
sidebar_label: バン＆モデレーション
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のモデレーションツールを使えば、プレイヤーの行動をコントロールして、公平で楽しいサーバー環境を維持できます。バンリストやモデレーション設定を調整することで、アクセス制限やペナルティ管理、プレイヤーへの案内を明確にできます。

これらの設定は、積極的なモデレーションが必要なコミュニティサーバーに特に役立ちます。

<InlineVoucher />

## 設定方法

バン＆モデレーション設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**から該当ファイルを開いて編集可能です。`ServerConfiguration.ini`という設定ファイルを探して開いてください。その中に以下のパラメータがあります：

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` は永久バンプレイヤーのリストファイルを指定します
- `TempBanPathstring` は一時バンプレイヤーのリストファイルを指定します

- `CustomUnBanString` はアンバン申請方法を案内するカスタムメッセージを設定できます。例：DiscordリンクやウェブサイトURLなど

### バンファイルの使い方

バンファイルはサーバーディレクトリ内にあり、プレイヤーの識別子が記載されています。

バンされたプレイヤーはファイル内で1行ずつ記載してください：

```
SteamID1
SteamID2
SteamID3
```

これらのファイルはサーバーが自動で読み込み、記載されたプレイヤーのアクセスをブロックします。設定を調整することで、バンの扱い方やプレイヤーの異議申し立て方法をカスタマイズ可能です。

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。更新されたモデレーション設定が自動で反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のバン＆モデレーション設定が完了しました。プレイヤーの行動管理がしっかりできて、コントロールされたサーバー環境を維持できます。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />