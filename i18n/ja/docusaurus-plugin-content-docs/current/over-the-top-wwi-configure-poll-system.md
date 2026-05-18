---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI：投票システムの設定"
description: "Over the Top WWIサーバーでの投票・アンケート設定方法 → 今すぐ詳しく学ぼう"
sidebar_label: 投票システム
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** の投票システムでは、プレイヤーがキックやマップ変更、ゲームプレイ設定の変更など様々なアクションに投票できます。この機能はコミュニティの交流を促進し、管理者の介入を減らすのに役立ちます。

投票設定をカスタマイズすることで、どの投票が許可されるか、またゲームプレイ中にどのように動作するかをコントロールできます。

<InlineVoucher />

## 設定方法

投票システムはサーバーの設定ファイル内で構成します。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini` ファイルを見つけて開いてください。ファイル内の以下のパラメータを探します：

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` は投票が成立するために必要な投票率（％）を定義します
- `EnableBanPlayerPoll` はプレイヤーが他プレイヤーをBANする投票を許可します
- `EnableKickPlayerPoll` はプレイヤーが他プレイヤーをキックする投票を許可します
- `EnableChangeMapsPoll` はマップ変更の投票を許可します
- `EnableMutePlayerPoll` はプレイヤーをミュートする投票を許可します
- `EnableCustomPoll` はカスタム投票オプションを有効にします
- `ChangeMapImmediately` はマップ投票が成功した場合に即座に変更を適用するかどうかを決定します

許可されている投票対象のゲームモード：

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

これらの設定は、投票時に選択可能なゲームモードを定義します。

- `1` → 有効
- `0` → 無効

特定のモードを無効にすることで、投票オプションを制限し、一貫したゲームプレイ体験を維持できます。

`ServerConfiguration.ini` を編集後、ファイルを保存してサーバーを再起動してください。更新された投票設定が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**の投票システム設定が完了しました。プレイヤーが意思決定に参加できるようになり、サーバー管理の自動化にも役立ちます。

ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応しています！🙂

<InlineVoucher />