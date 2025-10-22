---
id: valheim-backup-schedule
title: "Valheim：サーバーの自動バックアップを有効化する方法"
description: "Valheimのバックアップをスケジュール再起動で自動化し、信頼できるデータ保護とサーバー管理を実現する方法 → 今すぐチェック"
sidebar_label: 自動バックアップ
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

残念ながらValheimには直接的な自動バックアップ機能がないので、ちょっとした裏技を使います。

ダッシュボードの「再起動プランナー」に移動しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/FspW5eG7XJNqE4k/preview)

次に「＋」をクリックすると新しいウィンドウが開き、そこで希望の再起動時間を設定できます。

![](https://screensaver01.zap-hosting.com/index.php/s/me5tSbwc8YWT7me/preview)

まず「毎日」を選択します。これは毎日、指定した時間にバックアップが作成されることを意味します。
次に希望の再起動時間を設定しましょう。

:::info
オフラインサーバーを起動 - これは再起動時間になったときにサーバーがオフラインなら自動で起動する設定です。
:::

設定ができたら「保存」をクリック。

:::info
6時間ごとに再起動を設定すると、6時間ごとに自動バックアップが作成されることになります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/rFPWnSH7EkHxoN9/preview)

<InlineVoucher />