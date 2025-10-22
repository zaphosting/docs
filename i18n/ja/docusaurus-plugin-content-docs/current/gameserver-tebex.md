---
id: gameserver-tebex
title: 'ゲームサーバー：Tebexマネタイズ設定'
description: "Tebexでゲームサーバーをマネタイズして、ゲーム内アイテムやランクの売上をアップさせる方法をチェック → 今すぐ詳しく見る"
sidebar_label: Tebexマネタイズ
services:
  - gameserver
---

import Card from '@site/src/components/Card/Card';
import Cards from '@site/src/components/Cards/Cards';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Tebexは、ゲームサーバーをマネタイズして、ゲーム内アイテムやランクなどからリアルマネーを稼げるプラットフォームです。プロ仕様のウェブストアが提供され、商品を販売したりストアの状況を確認したりできます。詳しくは[tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a)をチェックしてみてください。

<InlineVoucher />

## 対応ゲーム

以下は、当社のゲームサーバー商品でも提供しているTebex対応ゲームです。その他の対応ゲームや詳細は公式の[ウェブサイト](https://www.tebex.io/game-servers)を参照してください。

<Cards>
  <Card title="ARK" description="プレースホルダー" link="https://www.tebex.io/pricing-for-game-servers/ark" image="https://screensaver01.zap-hosting.com/index.php/s/qnWELD8ik9srBDG/preview"/>
  <Card title="CS:GO" description="プレースホルダー" link="https://www.tebex.io/pricing-for-game-servers/csgo" image="https://screensaver01.zap-hosting.com/index.php/s/RojGnj9TcpGSdzm/preview"/>
  <Card title="Minecraft" description="プレースホルダー" link="https://www.tebex.io/pricing-for-game-servers/minecraft" image="https://screensaver01.zap-hosting.com/index.php/s/e6BtaFzTZ7czqXy/preview"/>
  <Card title="FiveM" description="プレースホルダー" link="https://www.tebex.io/pricing-for-game-servers/fivem" image="https://screensaver01.zap-hosting.com/index.php/s/PQKfzYiMAmSjXNz/preview"/>
  <Card title="Hurtworld" description="プレースホルダー" link="https://www.tebex.io/pricing-for-game-servers/hurtworld" image="https://screensaver01.zap-hosting.com/index.php/s/EJpzMG9gHL4fe5W/preview"/>
  <Card title="Rust" description="プレースホルダー" link="https://www.tebex.io/pricing-for-game-servers/rust" image="https://screensaver01.zap-hosting.com/index.php/s/G82jnYsbexscj5W/preview"/>
  <Card title="Space Engineers" description="プレースホルダー" link="https://zap-hosting.com/guides/docs/spaceengineers-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/wgp2Jofo2BTkcR9/preview"/>
  <Card title="Team Fortress 2" description="プレースホルダー" link="https://zap-hosting.com/guides/docs/tf2-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/PPRN8qRJDBjEzmG/preview"/>
  <Card title="Unturned" description="プレースホルダー" link="https://www.tebex.io/pricing-for-game-servers/7-days-to-die" image="https://screensaver01.zap-hosting.com/index.php/s/GTxekqqTxQyttDS/preview"/>
  <Card title="Garry's Mod" description="プレースホルダー" link="https://zap-hosting.com/guides/docs/gmod-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/LddW8FyQ2ZKKTzN/preview"/>
</Cards>

## Tebexの接続方法

ZAPでのTebex設定はとっても簡単。インストールと設定は数ステップだけで、以下で詳しく説明します。

### 対応ゲームを選ぶ

Tebex対応のゲームを選んで、ゲームサーバーに追加しましょう。ゲームサーバーをクリックして、サイドバーの「Games」を選択。利用可能なゲームから対応ゲームを選び、ダウンロードボタンでインストールします。

### Tebex招待をリクエスト

選んだゲームがTebex対応なら、サイドバーに「Tebex Shop」タブが表示されます。ページ読み込み時に表示される画像をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/SztAWeeNX8fx5kF/preview)

Tebexから、ZAP-Hostingのカスタマーアカウントに登録されているメールアドレス宛に招待メールが届きます。メールの指示に従ってTebexアカウントを有効化し、ショップの基本設定を進めてください。

### Tebexプラグインをインストール

通常はこの作業は自動化されています。もし当社サーバーに自動セットアップ用のプラグインがないか、Tebexからのpingbackが届かない場合は手動セットアップが必要です。

### Tebexプラグインを設定

ゲームごとに対応したゲームサーバープラグインを手動でインストールしてください。セットアップ方法はゲームによって異なります。プラグインのインストール基本手順は[こちら](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition)で確認できます。

## Tebexとの接続確認

最後に、ゲームサーバープラグインが正しくインストールされたか確認します。

![](https://screensaver01.zap-hosting.com/index.php/s/DkDtPMtij2QTKGS/preview)

場合によっては、ZAPからTebexストアへの接続を確立するために、TebexウェブストアプラグインのAPIキー入力が必要になることもあります。接続が成功すると以下のように表示されます：
![](https://screensaver01.zap-hosting.com/index.php/s/4YS2SwHfSTgn4DE/preview)

## まとめ

これでTebexとゲームサーバーサービスの連携が完了です。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />