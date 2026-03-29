---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI：スポーン設定のカスタマイズ"
description: "Over the Top WWIサーバーでのスポーン挙動の設定方法 → 今すぐチェック"
sidebar_label: スポーン設定
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のスポーン設定は、プレイヤーが戦場に再登場するタイミングや方法をコントロールします。この設定はゲームのテンポ、公平性、そしてマッチ全体の流れに大きく影響します。

スポーンタイマーや猶予時間、リスポーン挙動を調整することで、よりスピーディーなゲームプレイや、戦術的でシビアな戦闘シナリオを作り出せます。

<InlineVoucher />

## 設定方法

スポーン設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを開いて、以下のパラメーターを探してください：

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod`：プレイヤーがペナルティや制限なしでスポーンできる猶予時間（秒）
- `AttackerRespawnTime`：攻撃側チームのリスポーン遅延時間（秒）
- `DefenderRespawnTime`：防御側チームのリスポーン遅延時間（秒）

- `WaveSpawning`：ウェーブ単位でのスポーンを有効（1）または無効（0）にする設定

- `WaveLegnth`：スポーンウェーブの継続時間（秒）
- `WaveBuildUpTime`：ウェーブが完全に形成されるまでの時間（秒）

これらの値を調整することで、プレイヤーが個別にスポーンするか、連携したウェーブでスポーンするか、そしてどれくらいの速さで戦場に戻れるかをコントロールできます。

`ServerConfiguration.ini`を編集したら、ファイルを保存してサーバーを再起動してください。新しいスポーン設定が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のスポーン設定が無事にカスタマイズできました。これによりゲームのテンポを細かく調整し、プレイヤー体験をより良いものにできます。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />