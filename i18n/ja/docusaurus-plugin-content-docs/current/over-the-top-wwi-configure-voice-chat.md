---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI：ボイスチャットの設定"
description: "Over the Top WWIサーバーでボイスチャットを有効化・設定する方法 → 今すぐチェック"
sidebar_label: ボイスチャット
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ボイスチャットを使うと、**Over the Top WWI** サーバーのプレイヤー同士がゲーム中に直接コミュニケーションを取れます。これにより、連携やチームワーク、そして没入感がアップし、特に戦術的なシーンで効果的です。

ボイスチャットの設定を調整することで、通信の許可・不許可、音質の調整、試合中のボイスチャットの挙動をコントロールできます。

<InlineVoucher />

## 設定方法

ボイスチャットの設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを見つけて開いてください。その中に以下のパラメータがあります：

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed`：サーバーでボイスチャットを有効化（1）または無効化（0）します
- `VoipQuality`：ボイスの音質レベルを調整します
- `VoipDelay`：スポーン後にボイスチャットが使えるまでの遅延時間（秒）を設定します

サーバーの好みやパフォーマンス要件に合わせてこれらの値を調整してください。プレイヤー数が多いサーバーや帯域幅が限られている場合は、低めの音質設定が効果的です。

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。設定が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のボイスチャット設定が完了しました。プレイヤー同士のコミュニケーションがスムーズになり、チームワークがさらに強化されます。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />