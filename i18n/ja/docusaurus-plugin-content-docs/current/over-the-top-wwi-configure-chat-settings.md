---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI：チャット設定のカスタマイズ"
description: "Over the Top WWIサーバーでのチャットやコミュニケーション設定のカスタマイズ方法 → 今すぐチェック"
sidebar_label: チャット設定
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のチャット設定は、ゲームプレイ中のテキストによるプレイヤー間のコミュニケーションをコントロールします。これらの設定を調整することで、グローバルチャットの有効化、チャット使用の制限、または必要に応じてプレイヤーの完全ミュートが可能です。

適切なチャット設定は、サーバーの秩序を保ち、プレイヤーの体験を向上させるのに役立ちます。

<InlineVoucher />

## 設定方法

チャット設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からこのファイルにアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを見つけて開いてください。その中に以下のパラメータがあります：

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` はグローバルチャットの有効・無効を切り替えます

- `0` → 無効
- `1` → 有効

- `ServerMuteAll` は全プレイヤーのチャットを無効にします

- `0` → 無効
- `1` → 有効

- `BannedWordsPathString` は禁止ワードをフィルタリングするためのファイルを指定します。このファイルにはチャットで使用禁止の単語リストが含まれています

これらの設定を調整して、プレイヤーのコミュニケーションをコントロールし、チャットのモデレーションルールをサーバーに適用しましょう。

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。更新されたチャット設定が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のチャット設定が無事に完了しました。プレイヤーのコミュニケーション管理ができ、快適でコントロールされた環境を維持できます。

ご不明点やサポートが必要な場合は、いつでもお気軽にお問い合わせください。サポートチームは毎日対応しています！🙂

<InlineVoucher />