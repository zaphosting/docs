---
id: ddos-protection-ovh
title: ZAP HostingのOVH DDoS保護
description: "ZAP Hostingが提供する、サービスごとに最適化されたリアルタイムのプロアクティブDDoS防御でサーバーを守る方法 → 今すぐ詳しくチェック"
sidebar_label: OVH
---

## はじめに

DDoS（分散型サービス拒否）攻撃は、標的となるサーバーやサービス、ネットワークの通常のトラフィックを過剰なインバウンドトラフィックで圧倒し、妨害しようとする悪意ある攻撃です。ZAP Hostingでは、お客様の安定したサービス運用を守るため、各データセンター所在地に合わせた専用のDDoS保護システムを導入しています。

当社のグローバルインフラに統合されている保護プラットフォームの一つがOVHのAnti-DDoSシステムです。OVHは完全自動化されたネットワークレベルの緩和ソリューションを提供し、非常に大規模な攻撃でもサービスの安定性に影響を与えずに吸収します。このセクションでは、OVHの保護の仕組みと、どの製品がこの保護の恩恵を受けているかを解説します。

## 保護が利用されている場所

OVHのDDoS保護は、ロンドン（イギリス）、シドニー（オーストラリア）、シンガポール（アジア）のホスティング拠点で稼働中です。これらの拠点では、ゲームサーバーとボイスサーバーの製品ラインを対象に保護が適用されており、激しい攻撃シナリオでも安定した運用を実現しています。

## DDoS保護の仕組み

OVHはグローバルで常時稼働するAnti-DDoSインフラを運用しています。受信トラフィックはリアルタイムで常に監視され、攻撃が検知されると自動的にOVHのスクラビングネットワークへリダイレクトされます。スクラビングシステムは悪意あるパケットを除去し、クリーントラフィックは中断なく通過させます。このプロセスにより、正当なプレイヤーやボイスユーザーは攻撃緩和中でも通常通り接続を続けられます。

### インテリジェントなネットワークレベルフィルタリング
OVHは複数層のフィルタリング技術を駆使し、トラフィックパターン、パケットシグネチャ、接続挙動を分析します。悪意あるトラフィックは、ボリューム異常、プロトコルの不整合、疑わしいパケットフローに基づいてフィルタリングされます。正当なトラフィックはレイテンシへの影響を最小限に抑えてサーバーへ転送されます。

ゲーム環境向けには、UDPベースのプロトコルやレイテンシが重要なサービスを守るためのゲーム特化型フィルタリング層も提供しています。これらのフィルターには以下が含まれます：
- 人気ゲームエンジンやUDPゲームトラフィックの保護
- 異常なパケットバーストの挙動検知
- 既知の攻撃パターンを識別するシグネチャベースのフィルタリング
- プレイヤーの接続を途切れさせないリアルタイム適応

TeamSpeakなどのリアルタイムコミュニケーションサービスは、OVHの低レイテンシフィルタリングの恩恵を受けています。緩和処理はバックボーン内で行われるため、音声品質、接続安定性、低Pingを維持できます。

<details>
<summary>ゲームサーバー</summary>
- ARK: Survival Evolved
- Arma II / Arma III
- Counter Strike 2
- Multi Theft Auto San Andreas (MTA:SA)
- Grand Theft Auto San Andreas Multiplayer (SA:MP)
- FiveM (CFX.re GTA V Multiplayer)
- Half-Life / Half-Life Deathmatch Classic / Team Fortress Classic / Counter Strike 1.6 / Day of Defeat
- Half-Life 2 / Team Fortress 2 / Counter Strike: Source / Counter Strike: Global Offensive / Day of Defeat: Source / Left 4 Dead / Left 4 Dead 2 / Garry’s Mod
- Minecraft Bedrock (RakNetクッキー対応)
- Minecraft Java (クエリプロトコル保護)
- Minecraft Pocket Edition
- Minecraft Query
- Mumble
- Rust (RakNetクッキー対応)
- TeamSpeak 2
- TeamSpeak 3
- TrackMania / TrackMania 2 / ShootMania Storm
- Valheim
</details>

<details>
<summary>ボイスサーバー</summary>
- TeamSpeak
</details>