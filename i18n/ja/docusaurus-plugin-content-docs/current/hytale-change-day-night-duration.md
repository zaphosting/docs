---
id: hytale-change-day-night-duration
title: "Hytale：昼夜サイクルの時間変更"
description: "Hytaleサーバーでワールド間のテレポート方法をチェック → 今すぐ詳しく見る"
sidebar_label: 昼夜サイクルの時間変更
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Hytaleサーバーの昼夜サイクルは、ワールド内で昼と夜のフェーズがどれくらい続くかを決めています。このサイクルの時間を調整することで、サーバーオーナーはゲームプレイのテンポや雰囲気、難易度に影響を与えられます。

夜の時間を短くするとリラックスした環境になりやすく、逆に夜を長くするとチャレンジや緊張感がアップします。昼夜の長さをカスタマイズすることで、サーバーのプレイスタイルに合わせた世界を作り出せます。

:::info 早期アクセスのお知らせ

Hytaleは2026年1月13日にリリースされ、現在は早期アクセス版です。ゲームはまだ開発途中のため、サーバーソフトウェアや設定ファイル、モッド対応、インストール手順などは今後も変わる可能性があります。

:::

<InlineVoucher />

## 設定方法

昼夜の時間を変更するには、ワールドの `config.json` ファイルを直接編集します。ファイルの場所は以下です：

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

もし昼夜の時間設定がまだファイル内に存在しない場合は、手動で追加する必要があります。ファイル内で以下の行を探してください：

```
"GameplayConfig":
```

この行のすぐ下に、昼と夜の時間設定を挿入します：

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

これらの値は昼と夜の長さを秒単位で指定します。例えば、`1800` は昼の時間が長くなる設定で、`1000` は夜の長さを決めています。変更後は `config.json` を保存し、サーバーを再起動してください。

## まとめ

この設定を完了すれば、Hytaleサーバーの各ワールドで昼夜の長さを自由にコントロールできます。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />