---
id: palworld-pal-spawn-rate
title: "Palworld: Palスポーン率"
description: "サーバーのPal出現頻度設定を編集してPalworldのPalスポーン率を変更する方法を学びましょう -> 今すぐ詳細を確認"
sidebar_label: Palworld: Palスポーン率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldでは、サーバーの設定を通じてPalの出現頻度を制御できます。このガイドでは、ZAP-Hostingのゲームサーバー管理画面で正しい設定ファイルを編集し、安全にPalのスポーン率を変更する方法を説明します。



## Preparation

開始する前に、以下を確認してください：

- ZAP-HostingのウェブインターフェースでPalworldゲームサーバーにアクセスできること
- サーバーがオフラインであるか、変更後に再起動する準備ができていること
- スポーン率を高く設定するとサーバー負荷が増加し、パフォーマンスが低下する可能性があることを理解していること

:::info 手動設定が必要です
この変更はゲームサーバー管理画面の**Configs**からサーバー設定ファイルを手動で編集して行います。ZAP-Hostingのパネル内にこの設定専用のスライダーはありません。
:::

## Palworld設定ファイルを開く

Palのスポーン率を変更するには、`PalWorldSettings.ini`ファイルを編集する必要があります。

ZAP-Hostingのゲームサーバー管理画面で：

1. **Palworld**サーバーを開く
2. **Configs**に移動
3. `PalWorldSettings.ini`ファイルを開く

このファイルにはPalのスポーン倍率を含む主要なゲームプレイ関連のサーバー設定が含まれています。

:::note 設定ファイルの場所
ZAP-HostingのPalworldサーバーでは、該当ファイルはゲームサーバー管理画面の**Configs**セクションから直接アクセス可能です。
:::

## Palスポーン率を変更する

必要な設定は`PalSpawnNumRate`です。

### `PalSpawnNumRate`の役割

`PalSpawnNumRate`はサーバー上のPalのスポーン頻度の倍率を制御します。

| 設定キー | デフォルト値 | 説明 |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | ワールドに出現するPalの数を制御。値が大きいほどスポーン頻度が増加。 |

Palworldでは、この値は通常`PalWorldSettings.ini`の`OptionSettings`行内に含まれています。

### 設定の編集

`PalWorldSettings.ini`を開き、`OptionSettings=`のセクションを探します。その中にある`PalSpawnNumRate`の項目を見つけてください。

既に項目がある場合は値を変更します。例：

```ini
PalSpawnNumRate=1.000000
```

このように増やせます：

```ini
PalSpawnNumRate=2.000000
```

この例ではデフォルトの2倍のPalスポーン倍率になります。

:::tip 推奨開始値
`1.500000`や`2.000000`など小さな増加から始めて、サーバーのパフォーマンスを確認しながら調整してください。
:::

### 設定例の抜粋

既存のファイル内容によっては、以下のような長い`OptionSettings`行の中に設定が含まれている場合があります。

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution 既存の構文を保持してください
`OptionSettings`行からカンマや括弧、他の値を削除しないでください。`PalWorldSettings.ini`の書式が正しくないとサーバーが設定を正しく読み込めなくなります。
:::

## 推奨値とパフォーマンスへの影響

ゲームプレイ体験に応じて異なる値を使用できます。

| 値 | 効果 |
| --- | --- |
| `1.000000` | デフォルトのPalスポーン率 |
| `1.500000` | やや増加したスポーン頻度 |
| `2.000000` | 明らかに多いPalの出現 |
| `3.000000`以上 | 大幅なスポーン増加、パフォーマンスに影響する可能性あり |

値が高いほど世界が活気づきますが、サーバーが処理するエンティティ数も増加します。

:::danger 高いスポーン率は安定性を低下させる可能性があります
非常に高いスポーン設定は、特に負荷の高いサーバーや他の負荷の高いワールド設定と組み合わせた場合にサーバーのパフォーマンスに悪影響を及ぼすことがあります。ラグを感じたら値を下げてサーバーを再起動してください。
:::

## 保存してサーバーを再起動

編集後は：

1. `PalWorldSettings.ini`の変更を保存
2. ZAP-Hostingのゲームサーバー管理画面からPalworldサーバーを再起動

新しいPalスポーン率を反映させるには再起動が必要です。

## 変更を確認する

サーバーがオンラインに戻ったら、Palworldサーバーに参加してPalが通常出現するエリアの世界の動きを観察してください。

スポーン率が変わっていない場合は：

- `PalWorldSettings.ini`を再度開き、`PalSpawnNumRate`が存在するか確認
- 正しい`OptionSettings`セクション内に値があるか確認
- ファイルが正常に保存されたか確認
- 変更を確認後、再度サーバーを再起動

## 設定リファレンス

| 項目 | 値 |
| --- | --- |
| 設定ファイル | `PalWorldSettings.ini` |
| ZAP-Hostingの場所 | ゲームサーバー管理画面 → `Configs` |
| 設定名 | `PalSpawnNumRate` |
| デフォルト値 | `1.000000` |
| 再起動必要 | はい |

## Conclusion

おめでとうございます。PalworldサーバーのPalスポーン率を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂