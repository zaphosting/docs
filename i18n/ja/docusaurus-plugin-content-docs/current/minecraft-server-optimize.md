---
id: minecraft-server-optimize
title: "Minecraft: サーバーパフォーマンス最適化"
description: "Minecraftゲームサーバーを効果的な設定調整でパフォーマンス向上＆スムーズなプレイを実現 → 今すぐ詳しくチェック"
sidebar_label: Minecraftサーバー最適化
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### 最適化で具体的に何が起こるの？

Minecraftゲームサーバーの最適化は、スムーズに動作させるために超重要。特に公開サーバーなら、じっくり時間をかけてテストしまくるのがベスト。ここで紹介する内容は必ずしも完全に従う必要はなく、正しい方向に進むためのヒントとして活用してね。

多くの場合、最適化はサーバーの設定を大量に変更して、サーバーの挙動自体が大きく変わることもあるよ。例えば、負荷を減らすために設定を絞り込んで、結果的にパフォーマンスアップを狙う感じ。ただし、ゲーム体験があまり損なわれないように、バランスを見つけるのが大事。

## バニラ（Vanilla）

バニラサーバーは設定の自由度が低いのが残念だけど、以下の対策で少しでもパワーアップを狙おう。

### 視界範囲の調整

よくやられるのが視界範囲の縮小。標準は10チャンクだけど、6〜8チャンクで遊ぶ人も多い。逆に32チャンクとかに設定しちゃうと、サーバーが大量のチャンクを読み込んで処理しなきゃいけなくなり、パフォーマンスがガクッと落ちるよ。

バニラサーバーの視界範囲は「server.properties」内の「view-distance」設定で変更可能。ゲーム体験をあまり損なわないように、5〜6チャンクに設定するのがおすすめ。これだけでサーバー負荷を最大50%軽減できるよ。
詳しくは[こちら](minecraft-default-config.md)のドキュメントもチェックしてね。

### データ圧縮

サーバーと接続プレイヤー間では常にデータのやり取りがあるよね。プレイヤーの動きや、爆発などのイベント情報も含めて何度も送受信されてる。

この通信を効率化するために、パックされたデータのサイズを倍にできる設定があるよ。これでサーバーの通信負荷が半分になるイメージ。設定は「server.properties」の「network-compression-threshold」を512にするだけ。こちらも[ドキュメント](minecraft-default-config.md)で詳しく解説してるよ。

## Forge

バニラ同様、サーバー側の設定は限られてるけど、追加MODを入れられるのが強み。これでサーバー負荷を軽減できるよ。

### チャンクの事前読み込み

サーバー負荷を減らす方法のひとつがチャンクの事前読み込み。プレイヤーが入る前にチャンクデータを読み込んでおけば、動作中に生成する必要がなくなるから楽になる。

夜間に走らせるのがベストで、専用のMODが必要。おすすめは[こちら](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator)のMOD。サーバーに通常通りインストールして使ってね。

サーバー再起動前に「server.properties」の「max-tick-time」を「-1」に設定しないとクラッシュする可能性あり。あと、8〜10GB以上のRAMがあると安心。夜間だけRAM増強して、終わったら戻すのもアリ。

:::info
使うMODやForgeのバージョンによっては互換性がない場合もあるから注意してね。手順もMODによって違うことがあるよ。
:::

MODを入れてサーバー起動したらコンソールを開いて、まずは半径16,000ブロックのワールドボーダーを設定しよう。コマンドは順に以下を実行：

- worldborder center 0 0
- worldborder set 16000

:::info
必要に応じて「center」コマンドの座標は自分のワールド中心に変更してね。既に作ったワールドが切れちゃうのを防ぐためだよ。
:::

ボーダー設定後、事前読み込み開始コマンドを実行：

- pregen gen startWorldBorder

これでボーダー内のチャンクが順番に読み込まれる。MODや環境によるけど最大8時間くらいかかることも。進捗はコンソールに定期的に表示されるからチェックしてね。完了もコンソールで通知されるよ！

:::info
処理完了後もMODはサーバーに入れたままでOK。動作中もチャンク最適化を続けてくれるし、プレイヤーがいなくても動くよ。
:::

### 視界範囲の調整

Forgeサーバーもバニラ同様、「server.properties」の「view-distance」で調整可能。5〜6チャンクに設定すると最大50%の負荷軽減が期待できるよ。
詳しくは[こちら](minecraft-default-config.md)を参照してね。

### データ圧縮

バニラと同じく「network-compression-threshold」を512に設定して通信負荷を減らそう。設定は「server.properties」で行うよ。詳細は[こちら](minecraft-default-config.md)。

## Bukkit

### 視界範囲の調整

Bukkitサーバーも「server.properties」の「view-distance」で視界範囲を調整可能。5〜6チャンクに設定するとサーバー負荷が最大50%軽減されるよ。
詳しくは[こちら](minecraft-default-config.md)をチェック。

### データ圧縮

「network-compression-threshold」を512に設定して通信負荷を減らそう。設定は「server.properties」で行うよ。詳細は[こちら](minecraft-default-config.md)。

### スポーン制限

モブのスポーン数を少し減らして負荷を抑える設定。体感はほぼ変わらないけど、モブファームなどでは影響が出ることもあるよ。

「bukkit.yml」の「spawn-limits」内の以下の値を調整しよう：
- monsters: 50 #デフォルト: 70
- animals: 10 #デフォルト: 15
- water-animals: 3 #デフォルト: 5
- ambient: 4 #デフォルト: 15

:::info
もちろん自分で値を調整してもOK。上記はバランスの良い平均値だよ。
:::

さらに「bukkit.yml」の「ticks-per」の「monster-spawns」も変更推奨：
- monster-spawns: 2 #デフォルト: 1

モンスター関連で問題があれば（タイミングレポートなどで確認可能）、最大5まで上げて様子を見てね。

### チャンク処理

Minecraftは16x16ブロックのチャンク単位で世界を管理。サーバーは必要なチャンクだけRAMに読み込むけど、標準設定だと一度読み込んだチャンクはアンロードされずRAMを大量消費しちゃう。

「bukkit.yml」の「chunk-gc」設定を以下のように変更して、不要なチャンクを定期的にアンロードしよう：
- period-in-ticks: 300 #デフォルト: 600
- load-threshold: 300 #デフォルト: 0

period-in-ticksはチャンクをアンロードする間隔（秒）を決めるよ。短くしすぎるとチャンクの読み込みとアンロードがループして逆に負荷が増えることがあるから注意。

## Spigot

### 視界範囲の調整

Spigotサーバーは「spigot.yml」の「view-distance」で視界範囲を調整可能。5〜6チャンクに設定すると最大50%の負荷軽減が期待できるよ。

:::info
好みによっては4チャンクに設定するのもあり。特に1.13+のファームワールドサーバーでラグ軽減に効果的。
:::

### データ圧縮

「server.properties」の「network-compression-threshold」を512に設定して通信負荷を減らそう。詳細は[こちら](minecraft-default-config.md)。

### スポーン制限

「bukkit.yml」の「spawn-limits」を以下に調整：
- monsters: 50 #デフォルト: 70
- animals: 10 #デフォルト: 15
- water-animals: 3 #デフォルト: 5
- ambient: 4 #デフォルト: 15

:::info
値は自由に調整OK。上記はバランスの良い平均値。
:::

「monster-spawns」も2に変更推奨（デフォルトは1）。問題あれば最大5まで上げて様子見。

### チャンク処理

「bukkit.yml」の「chunk-gc」設定を以下に変更：
- period-in-ticks: 300 #デフォルト: 600
- load-threshold: 300 #デフォルト: 0

### スポーン範囲

「spigot.yml」の「world-settings」で以下を設定：
- mob-spawn-range: 3 #デフォルト: 4

### エンティティ範囲

「spigot.yml」の「entity-activation-range」を以下に設定：
- animals: 6 #デフォルト: 32
- monsters: 16 #デフォルト: 32
- misc: 2 #デフォルト: 16
- water: 6 #デフォルト: 6
- tick-inactive-villagers: true #デフォルト: true

### ホッパー最適化

ホッパーはサーバー負荷の大きな原因。チェック間隔を延ばして負荷軽減しよう。

「spigot.yml」で以下を設定：
- hopper-transfer: 24 #デフォルト: 8
- hopper-check: 24 #デフォルト: 8
- hopper-amount: 3 #デフォルト: 1

### 衝突判定

「spigot.yml」の「max-entity-collisions」を1に設定（デフォルトは8）。モブの衝突判定を減らして負荷軽減。プレイヤーには影響なし。

### マージ半径

「spigot.yml」の「merge-radius」を以下に設定：
- item: 4.0 #デフォルト: 2.5
- exp: 6.0 #デフォルト: 3.0

:::info
8以上に設定すると逆にラグが増えるので注意！
:::

## Paper Spigot

### 視界範囲の調整

「spigot.yml」の「view-distance」を5〜6チャンクに設定。4チャンクもラグ軽減に効果的。

### データ圧縮

「server.properties」の「network-compression-threshold」を512に設定。詳細は[こちら](minecraft-default-config.md)。

### スポーン制限

「bukkit.yml」の「spawn-limits」を以下に設定：
- monsters: 50 #デフォルト: 70
- animals: 10 #デフォルト: 15
- water-animals: 3 #デフォルト: 5
- ambient: 4 #デフォルト: 15

「monster-spawns」も2に設定。問題あれば最大5まで。

### チャンク処理

「bukkit.yml」の「chunk-gc」を以下に設定：
- period-in-ticks: 300 #デフォルト: 600
- load-threshold: 300 #デフォルト: 0

### スポーン範囲

「spigot.yml」の「world-settings」で以下を設定：
- mob-spawn-range: 3 #デフォルト: 4

### モブスポナー

「paper.yml」の「mob-spawner-tick-rate」を3に設定（デフォルトは1）。スポナーの動作間隔を延ばして負荷軽減。

:::info
ゲーム挙動にはほとんど影響なし。
:::

### エンティティ範囲

「spigot.yml」の「entity-activation-range」を以下に設定：
- animals: 6 #デフォルト: 32
- monsters: 16 #デフォルト: 32
- misc: 2 #デフォルト: 16
- water: 6 #デフォルト: 6
- tick-inactive-villagers: true #デフォルト: true

### ホッパー最適化

「spigot.yml」で以下を設定：
- hopper-transfer: 24 #デフォルト: 8
- hopper-check: 24 #デフォルト: 8
- hopper-amount: 3 #デフォルト: 1

:::info
「paper.yml」の「use-hopper-check」がtrueになっていることを確認してね！
:::

### 衝突判定

「spigot.yml」の「max-entity-collisions」を1に設定。モブの衝突判定を減らして負荷軽減。

### マージ半径

「spigot.yml」の「merge-radius」を以下に設定：
- item: 4.0 #デフォルト: 2.5
- exp: 6.0 #デフォルト: 3.0

:::info
8以上に設定すると逆にラグが増えるので注意！
:::

### 爆発処理

「paper.yml」の「optimize-explosions」をtrueに設定。爆発処理を最適化してラグ軽減。

### チェスト

猫がチェストの上にいると開けられない判定を無効化して負荷軽減。「paper.yml」の「disable-chest-cat-detection」をtrueに設定。

### インベントリ更新

インベントリの更新頻度を下げて負荷軽減。「paper.yml」の「container-update-tick-rate」を3に設定。

:::info
5以上はバグの原因になるので注意。サバイバルゲームなど箱のアクセスが激しいモードは1推奨。
:::

### ライト更新

ライトの更新を非同期化して負荷軽減。「paper.yml」の「queue-light-updates」をtrueに設定。

### チャンク保存

一度に保存するチャンク数を減らして負荷分散。「paper.yml」の「max-auto-save-chunks-per-tick」を10に設定。

### レッドストーン

Paper Spigotの高速レッドストーン処理を有効化して負荷軽減。「paper.yml」の「use-faster-eigencraft-redstone」をtrueに設定。

:::info
**注意！状況によってはレッドストーンの動作が大きく変わることがあるよ！**
:::

<InlineVoucher />