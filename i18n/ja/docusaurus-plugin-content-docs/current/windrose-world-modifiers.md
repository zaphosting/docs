---
id: windrose-world-modifiers
title: "Windrose: ワールドモディファイア"
description: "Windroseのワールドモディファイアを設定し、float値、戦闘設定、協力プレイのスケーリングパラメータの完全なリファレンス例を紹介 -> 今すぐ詳しく学ぶ"
sidebar_label: ワールドモディファイア
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windroseのカスタムワールドモディファイアを使うと、戦闘、海戦、探索、クエスト、協力プレイのスケーリングを細かく調整できます。このガイドでは、`WorldDescription.json`ファイルの編集方法、各パラメータの意味、Windroseゲームサーバーへのカスタム設定の適用方法を学びます。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 準備

開始する前に、以下を確認してください：

- ZAP-Hostingで稼働中のWindroseゲームサーバー
- ゲームサーバー管理画面へのアクセス
- ファイル編集前にサーバーを停止していること
- ゲームサーバー管理の**Configs**または**ファイルマネージャー**へのアクセス

:::info 設定ファイルの場所
カスタムワールドモディファイアは、`WorldDescription.json`ファイル内の`WorldSettings`ブロックに保存されています。
:::

:::caution サーバーは必ず停止してから
`WorldDescription.json`を編集する前に必ずサーバーを停止してください。起動中や自動保存中の編集はファイル破損や変更の上書きを招く恐れがあります。
:::

## ワールドモディファイアの理解

カスタム設定はすべて`WorldDescription.json`の`WorldSettings`内に個別に定義されています。ゲームは値の種類ごとに区分しています：

- `float`：体力やダメージなどの数値乗数
- `bool`：真偽値（true/false）
- `tag`：戦闘難易度などの名前付き難易度値

この構造は重要で、各パラメータは正しいセクションに配置しなければなりません。`float`値を`bool`に入れたり、無効なタグを使うと設定が正しく反映されません。

:::note パラメータとは
パラメータとは、ゲームが使用する設定可能な値のことです。このガイドでは、各パラメータがワールドの難易度やゲームプレイの挙動の一部を制御します。
:::

## ワールド設定ファイルを開く

カスタムワールドモディファイアを適用するには、正しいワールドファイルを編集します。

1. ゲームサーバー管理でWindroseサーバーを停止します。
2. **ファイルマネージャー**を開きます。
3. 以下のパスに移動します：

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

プレースホルダーの意味：

| プレースホルダー | 意味 |
| --- | --- |
| `[your_game_version]` | 現在のWindroseゲームバージョンのフォルダ名 |
| `[your_world_id]` | 編集したいワールドのID |

:::tip 正しいワールドの見つけ方
複数のワールドがある場合は、必ず編集したい`[your_world_id]`フォルダ内の`WorldDescription.json`を編集してください。間違えると別のセーブに影響します。
:::

## WorldSettingsブロックの編集

`WorldDescription.json`内の`WorldSettings`ブロックを見つけて、カスタム値を追加または調整します。

以下の構造を使います：

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

保存後、サーバーを再起動してください。

:::info プリセットの動作
カスタム値を手動で設定すると、次回サーバー起動時に`WorldPresetType`が自動的に`Custom`に切り替わります。プリセットを使いたい場合は、カスタム値と混ぜずに適切なプリセット設定を使いましょう。
:::

## パラメータ完全リファレンス

以下の表は利用可能なすべてのカスタムワールドモディファイアのリファレンスです。

### 戦闘パラメータ

| パラメータ | セクション | デフォルト | 範囲 | 効果 |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | 敵の体力乗数 |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | 敵のダメージ乗数 |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | ボスの攻撃性と遭遇難易度 |

`CombatDifficulty`はタグ値として記述します。例：

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

利用可能な値：

| 難易度 | TagName値 |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### 海戦パラメータ

| パラメータ | セクション | デフォルト | 範囲 | 効果 |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | 敵船の体力乗数 |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | 敵船のダメージ乗数 |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | 船乗りの撃破数（乗船戦の難易度） |

小規模クルー向けに海戦を簡単にしたり、熟練グループ向けに難しくしたりするのに便利です。

### 協力プレイスケーリングパラメータ

| パラメータ | セクション | デフォルト | 範囲 | 効果 |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | プレイヤー数に応じた敵の体力と姿勢減少の調整 |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | プレイヤー数に応じた敵船の体力調整 |

大人数クルーでの戦闘バランス調整に特に役立ちます。

### 探索パラメータ

| パラメータ | セクション | デフォルト | 効果 |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | 興味ポイントのマップマーカーを無効化 |

:::note EasyExploreの名前について
名前とは逆に、`EasyExplore`を`true`にすると探索が難しくなります。マップマーカーが消えるため、没入型の探索モードになります。
:::

### クエストパラメータ

| パラメータ | セクション | デフォルト | 効果 |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | 1人が協力クエストをクリアすると、同じクエストを持つ他のプレイヤーも自動クリアされる |

グループの進行を簡単にしたい場合や、個別クリアを求めたい場合に使い分けます。

## 乗数スケールリファレンス

`float`値がゲームプレイにどう影響するか分からない場合は、以下のスケールを参考にしてください。

| 値 | 効果 |
| --- | --- |
| `0.5` | `50%` - 明らかに簡単になる |
| `1.0` | `100%` - デフォルト（標準） |
| `2.0` | `200%` - 明らかに難しくなる |
| `5.0` | `500%` - 非常に難しい |

この表はワールドのバランス調整に役立つ実用的な例です。値を下げると難易度が下がり、上げると大幅に上がります。

:::tip 小さな調整から始めよう
バランス調整を試すときは、一度に1つのパラメータだけ増減させると、どの設定が影響したか分かりやすくなります。
:::

## 設定例

以下の例はカスタム設定の参考になります。

### カジュアルクルー

戦闘のプレッシャーを下げ、クエスト共有を有効にし、乗船戦を簡単にします。

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### ハードコアシーズ

陸上・海上の難易度を上げ、クエスト共有を無効にし、没入型探索を有効にします。

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### 大人数グループスケーリング

8人などの大人数グループ向け。デフォルトのスケーリングが簡単すぎる場合に使います。

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## 値編集のベストプラクティス

### 有効な範囲を使う

各`float`パラメータは定義された範囲内のみサポートされます。範囲外の値は予期しない動作の原因になります。

| パラメータ | 最小値 | 最大値 |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution 無効な値の使用に注意
サポートされていない値や誤ったフォーマット、間違ったセクションへの配置は、設定が無視されたり正しく適用されなかったりします。
:::

### JSONフォーマットを正しく保つ

`WorldDescription.json`編集時は以下に注意してください：

- すべてのキーはダブルクォーテーションで囲む
- カンマの位置を正しくする
- 波括弧`{}`や角括弧`[]`を閉じる
- `true`と`false`は小文字で書く
- 小数点はピリオド（例：`1.5`）を使う

JSONが壊れるとワールド設定が正しく読み込まれません。

### 保存後は再起動

編集が終わったら：

1. `WorldDescription.json`を保存
2. サーバーを再起動
3. サーバーに接続してゲームプレイで変更を確認

戦闘や乗船、協力プレイ中に確認するのが最も分かりやすいです。

## ゲームサーバー管理での設定管理

ZAP-Hostingのゲームサーバー管理画面からWindroseの設定ファイルを直接管理できます。外部ツールを使いたくない場合はこちらの方法がおすすめです。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

もし該当の設定項目が直接見つからない場合は、**ファイルマネージャー**を使い、前述のワールドファイルパスに手動で移動してください。

:::info 設定管理について
ゲームサーバーのインターフェースやワールド構成によっては、ファイル一覧が異なる場合があります。特定の設定が見つからない場合は、機能がないと決めつけずにファイルパスから直接アクセスしましょう。
:::

## トラブルシューティング

### 変更が反映されない

変更が反映されない場合は以下を確認してください：

- 正しい`WorldDescription.json`を編集しているか
- 編集前にサーバーを停止しているか
- JSONの構文が正しいか
- 各パラメータが正しいセクション（`float`、`bool`、`tag`）にあるか
- 保存後にサーバーを完全に再起動したか

### 難易度が変わらない気がする

モディファイアによっては変化が分かりやすいものとそうでないものがあります。

- `MobHealthMultiplier`は通常の戦闘で分かりやすい
- `ShipHealthMultiplier`は海戦時にのみ分かる
- `Coop_StatsCorrectionModifier`は複数プレイヤー時に効果が見える
- `EasyExplore`は探索行動やマップマーカーにのみ影響

### プリセットがCustomに変わった

カスタム値を手動で設定すると、次回起動時にワールドプリセットタイプが自動的に`Custom`に切り替わるのは正常な動作です。

## まとめ

Windroseのワールドモディファイアを無事に設定できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂