---
id: minecraft-pregenerate-world
title: "Minecraft: ワールドの事前生成（チャンク）"
description: "プラグインやMODを使ってMinecraftのワールドを効率的に事前生成し、スムーズなプレイとサーバーのパフォーマンス最適化を実現する方法 → 今すぐチェック"
sidebar_label: ワールドの事前生成（チャンク）
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
ゲームプレイ中ではなく、ワールドを素早く効率的かつ安全に事前生成したいですか？Minecraftにはデフォルトでこの機能はありませんが、専用のプラグインやMODを使うことで実現可能です。ここでは、それらの使い方や注意点を詳しく解説します。



## 準備

まずは、サーバーがプラグインやMODの使用に対応していることを確認しましょう。以下のMinecraftバージョンのいずれかを使う必要があります：

- Minecraft: Forge、Minecraft Fabric（MOD用）
- Minecraft: Spigot、Minecraft Bukkit、Minecraft: Paper Spigot（プラグイン用）

もし現在これらのMinecraftバージョンを使っていない場合は、[ゲーム切替(gameserver-gameswitch.md)機能]で希望のゲームを選択してください。


## インストール
チャンクを事前生成する最も一般的な方法は、[Chunky](https://github.com/pop4959/Chunky)を使うことです。これは多くのサーバー環境でプラグイン版・MOD版の両方が利用可能です。ここではChunkyを使ったチャンク生成の方法を説明します。

| バージョン | ダウンロード |
| -------- | ------------------------------------------------------------ |
| MOD | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| プラグイン | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

**Chunky**をプラグインまたはMODとしてダウンロードし、サーバーにインストールしてください。プラグインやMODのインストール方法がわからない場合は、それぞれの[プラグインインストールガイド](minecraft-pluginuploader.md)や[MODインストールガイド](minecraft-forge-fabric-add-mods-modpacks)を参考にしてください。




## 使い方

**Chunky**のインストールが完了したら、チャンクの生成を開始できます。コマンド `chunky start` で生成をスタートします。

途中で生成を一時停止して後で再開したい場合は、`chunky pause` と `chunky continue` を使います。完全に終了させたい場合は `chunky cancel` を使いましょう。これらのコマンドはライブコンソールから、またはゲーム内でオペレーター権限を持つプレイヤーが直接実行可能です。

:::warning 負荷過多に注意
長時間にわたりリソース制限を超過し続けると、一時的にサービス停止となる可能性があります。負荷を抑えるため、チャンク生成はバランスの良いペースと範囲で行い、システム負荷を適切に管理しましょう。

リソース制限や対策については、[リソース制限ガイド](gameserver-resourcelimit.md)もチェックしてください。 
:::



## コマンド一覧

Chunkyでチャンク生成や管理に使えるコマンドをまとめました。 

#### タスク管理

| コマンド         | 説明                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | 現在の選択範囲から新しいチャンク生成タスクを開始する |
| chunky pause    | 現在のチャンク生成タスクを一時停止し進行状況を保存する |
| chunky continue | 現在または保存されたチャンク生成タスクを再開する    |
| chunky cancel   | 現在のチャンク生成タスクを停止し進行状況をキャンセルする |



#### 選択範囲設定

| コマンド                                    | 説明                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | 現在選択中のワールドを設定する                            |
| chunky shape `<shape>`                     | 生成する形状を設定する                                    |
| chunky center [`<x>` `<z>`]                | 中心ブロックの座標を設定する                              |
| chunky radius `<radius>`                   | 半径を設定する                                          |
| chunky worldborder                         | 選択中ワールドのワールドボーダーに合わせて中心と半径を設定する |
| chunky spawn                               | 中心をスポーン地点に設定する                              |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | 角の座標で選択範囲を設定する                              |
| chunky pattern `<pattern>`                 | 好みの生成パターンを設定する                              |
| chunky selection                           | 現在の選択範囲を表示する                                  |





#### その他

| コマンド                   | 説明                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | 更新メッセージの表示を切り替える                     |
| chunky quiet `<interval>` | 更新メッセージの静かな間隔（秒）を設定する             |
| chunky progress           | すべてのタスクの事前生成進捗をゲーム内に表示する         |
| chunky reload             | 設定をリロードする                             |
| chunky trim               | 選択範囲外のチャンクを削除する                       |



## まとめ

以上の手順でChunkyを無事インストールし、ワールド（チャンク）を事前生成できるようになりました。すべてうまくいっていれば、サーバーへの接続も問題なくできているはずです。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />