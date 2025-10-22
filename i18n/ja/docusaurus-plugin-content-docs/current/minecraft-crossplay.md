---
id: minecraft-crossplay
title: "Minecraft: Minecraft Java版とBedrock版のクロスプレイ設定方法"
description: "GeyserMCとFloodgateプラグインを使ってMinecraft Java版とBedrock版のシームレスなクロスプレイを実現 → 今すぐ詳しくチェック"
sidebar_label: Java & Bedrock クロスプレイ
services:
  - gameserver-minecraft
---

## はじめに

これまでMinecraft Java版とBedrock版は完全に別のプラットフォームとして扱われており、一緒に遊ぶことはできませんでした。でも今は、Java版サーバーに特定のプラグインを導入することで、Bedrock版プレイヤーも参加できるクロスプレイが可能になっています。このガイドでは、GeyserMCプラグインとFloodgateプラグインのインストールと設定方法を解説し、両プラットフォーム間のクロスプレイを簡単に実現する方法を紹介します。

## 準備

クロスプレイを設定するには、対応しているJava版サーバーソフトのいずれかが動いているMinecraftゲームサーバーが必要です。おすすめは人気の高いPaper、Spigot、Bukkitのいずれかです。

これらのいずれかのゲームがインストール・有効化されたMinecraftゲームサーバーを用意してください。設定方法がわからない場合は、[ゲーム変更](gameserver-gameswitch.md)ガイドを参考にしてください。

## インストール

まずはゲームサーバーのウェブインターフェースのダッシュボードにアクセスし、**設定 -> プラグイン**のセクションに移動します。このページで**GeyserMC**のドロップダウンメニューを見つけて選択し、インストールボタンを押してプラグインを自動でサーバーにインストールします。進行バーが完了するまで待ちましょう。

また、同じセクションにある**Floodgate**プラグインのインストールもおすすめします。Floodgateは以下のようなメリットがあります：
- Bedrock版プレイヤーがJavaアカウントなしで参加可能に。
- Java版でBedrock版のスキンを表示可能。
- 開発者向けの様々な便利機能。

:::note
Floodgateプラグインは必須ではありませんが、Bedrockプレイヤーにとってクロスプレイが格段に楽になるので強くおすすめします。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

プラグインのインストールが完了したら、次のセクションで設定を行いましょう。

## プラグインの設定

同じ**プラグイン**セクションで、GeyserMCプラグインの横にある青い設定アイコンをクリックすると、該当する**設定**ページに自動で移動します。

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

ここでは、Bedrock版プレイヤー向けに表示されるサーバー名やMOTD（メッセージ・オブ・ザ・デイ）をカスタマイズできます。

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

ページ下部までスクロールすると、サーバーに割り当てられているポートも確認できます。

- **ゲームポート**はJava版クライアントで接続する際に使うメインのサーバーポートです。
- **ポート5**はGeyserMCプラグインが使用するポートで、Bedrock版クライアントで接続する際に使います。

クライアントから接続する際は、Minecraftのエディションに応じて正しいポートを使うようにしてください。

:::tip
「**Own IP**」サーバー設定オプションを利用している場合は、ポートのカスタム割り当てが可能です。ご希望の方は[サポート](https://zap-hosting.com/en/customer/support/)にチケットでお問い合わせください。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

<!--

### Floodgateプラグイン

Floodgateプラグインをインストールした場合は、GeyserMCの設定ファイルを編集してFloodgateをメインの認証方法に設定する必要があります。設定ファイルを編集する際は、サーバーを必ず停止してから行ってください。そうしないと変更が上書きされる可能性があります。

ゲームサーバーのウェブインターフェースの**設定**セクションから`plugins/Geyser-[your_servertype]/config.yml`ファイルを青い編集ボタンで開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/ixCtkQ5WWWacfGe/preview)

ファイル内の`remote`セクションにある`auth-type`パラメータを**online**から**floodgate**に変更して保存してください。

![](https://screensaver01.zap-hosting.com/index.php/s/c6JRFxPfjGBSWZi/preview)

これでGeyserMCはFloodgateプラグインを使ったユーザー認証を行い、先述のメリットが利用可能になります。
-->

## 接続とトラブルシューティング

プラグインの設定が完了したら、サーバーを再起動して設定を反映させましょう。その後、両方のゲームエディションから接続を試みて、正常に動作するか確認してください。

ゲームエディションに応じて正しいポートを使っているか必ずチェックしてください。Bedrock版は**ポート5**、Java版は**ゲームポート**を使います。これらはウェブインターフェースの**設定**タブやダッシュボードの情報アイコンにカーソルを合わせると確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

接続に成功すれば、Java版とBedrock版の両方から簡単にクロスプレイが楽しめるようになっています。

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

もし接続に問題がある場合は、以下のトラブルシューティングを試してみてください。

#### クライアントのバージョンが古い・サーバーのバージョンが古い

このエラーはサーバーとクライアントのゲームバージョンが合っていないことを示しています。Java版でこの問題が起きたら、ランチャーから正しいゲームバージョンに切り替えてください。

Bedrock版はゲームバージョンの切り替えが簡単ではないので、アプリとサーバーの両方を最新バージョンにアップデートしてください。

また、ViaVersionとViaBackwardsプラグインを導入すると、サーバーが対応するゲームバージョンの幅が広がり、古い・新しいバージョンのユーザーも接続しやすくなります。ウェブインターフェースの**プラグイン**セクションで、**All Plugins**のドロップダウンからViaVersionとViaBackwardsを探し、緑のダウンロードアイコンでインストールしましょう。

:::note
ウェブインターフェースからプラグインのインストールがうまくいかない場合、安定版の最新リリースがない可能性があります。その場合は公式サイトからベータ版を手動でダウンロードし、FTPでアップロードする方法がおすすめです。詳しくは[FTPアクセス](gameserver-ftpaccess.md)ガイドを参照してください。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

プラグインをインストールしたら、再度接続を試みてください。より多くのゲームバージョンから接続可能になっているはずです。

#### ワールドに接続できない

このエラーの多くは、クライアントでサーバーを追加する際に間違ったポートを使っていることが原因です。Bedrock版クライアントから接続する場合は、ゲームサーバーのウェブインターフェースの**設定**セクションにある**ポート5**を使っているか確認してください。Java版クライアントはメインの**ゲームポート**を使います。

問題が解決しない場合は、GeyserMCプラグインの設定ファイルを確認して、正しいポートが設定されているかチェックしましょう。ウェブインターフェースの**設定**セクションから`plugins/Geyser-[your_servertype]/config.yml`を青い編集ボタンで開きます。

ファイル内の`bedrock`と`remote`セクションにある`port`パラメータを探し、Bedrock用ポートが**ポート5**の値に、remote用ポートが**25565**または**ゲームポート**の値になっているか確認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## まとめ

おめでとうございます！これでMinecraftサーバーにGeyserMCプラグインを導入し、Java版とBedrock版のクロスプレイが可能になりました！もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂