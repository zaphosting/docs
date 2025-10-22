---
id: fivem-useprofiler
title: "FiveM: Profilerを使ってサーバーの問題を特定しよう"
description: "FiveM Profilerでサーバーのパフォーマンスを分析し、リソースの問題を見つけて快適なプレイ環境を実現 → 今すぐチェック"
sidebar_label: Profilerの使い方
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

Profilerはサーバーのパフォーマンスを測定するのに便利で簡単に使えるゲームツールです。これを使うことで、パフォーマンス問題の原因となるコードやスレッドをチェックできます。例えば、開発が不十分なリソースなどが原因の場合があります。Profilerはサーバーソフトウェアに直接組み込まれています。

<InlineVoucher />

## Profilerの使い方
FiveM Profilerの使い方はとてもシンプルです。ライブコンソールでコマンド `profiler record 100` と `profiler view` を実行してください。100フレームのプロファイルが作成され、コンソールに表示されるリンクからアクセスできます。 ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## 問題の特定
Profilerには個々のアクティビティ（ティック）に関する情報が含まれており、詳しく調べる必要があります。ティックの範囲を選択してズームインしましょう。選択したティックに基づいて、どのプロセスが実行され、どれくらい時間がかかったかが見えます。

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

この方法で、どのリソースが多くの時間を消費しているかもわかります。合計で6ms以上かかるリソースは問題の原因になる可能性があります。
:::



## まとめ

おめでとうございます！FiveMのプロファイルを作成して、潜在的な問題を特定できました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />