---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI：サーバーのパフォーマンス最適化"
description: "Over the Top WWIのゲームサーバーでパフォーマンスとサーバー挙動を最適化する方法 → 今すぐチェック"
sidebar_label: パフォーマンス設定
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のパフォーマンス設定は、特に多人数プレイや大量のAI使用時にサーバーの動作の滑らかさに大きく影響します。適切な設定を行うことで、安定性が向上し、ラグが減り、全プレイヤーにとって快適なゲーム体験を提供できます。

これらの値を調整することで、ビジュアルシミュレーション、AI計算、サーバー負荷のバランスを取ることが可能です。

<InlineVoucher />

## 設定方法

パフォーマンス設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**から該当ファイルにアクセスして編集してください。`ServerConfiguration.ini`という設定ファイルを開き、以下のパラメータを探します：

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` はサーバーのパフォーマンスプロファイルを定義します

  - `0` → デフォルト
  - `1` → 多人数プレイ向け最適化
  - `2` → 超多人数プレイ向け最適化

- `NavCalcsPerFrame` は1フレームあたりのナビゲーション計算数を制御
- `NavMeshFrames` はナビメッシュの更新頻度を定義
- `NavMeshAutoSeed` はAIのナビゲーションパス生成に影響
- `ResetIfNoPlayers` はプレイヤー不在時にサーバーを自動リセット

  - `0` → 無効
  - `1` → 有効

これらの設定を調整することで、特に多くのボットを動かしたり大規模な戦闘をホストする際のサーバーパフォーマンスが向上します。

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。新しいパフォーマンス設定が自動的に適用されます。

## まとめ

おめでとうございます！これで**Over the Top WWIゲームサーバー**のパフォーマンス設定を無事に最適化できました。適切なチューニングにより、重い負荷がかかっても安定してスムーズなプレイが可能になります。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />