---
id: dedicated-raid
title: "専用サーバー：RAID構成"
description: "SSD搭載の専用サーバーでRAID構成がデータのパフォーマンスと冗長性をどう向上させるか → 今すぐ詳しくチェック"
sidebar_label: RAIDの設定
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RAID（Redundant Array of Independent Disks）は、複数のハードディスクを1つの論理ドライブにまとめて、データの冗長性やパフォーマンス向上を実現する技術です。RAIDにはさまざまなレベルがあり、データの分散方法や耐障害性の組み合わせが異なります。

<InlineVoucher />

## 利用可能なRAIDタイプ
当社の専用サーバーは現在2つのSSDベイを搭載しており、RAIDの構成は2種類が可能です。1つ目はRAID0で、複数のボリュームを1つの大きなボリュームにまとめる用途に使われます。2つ目はRAID1で、ボリュームをミラーリングしてデータの冗長性を保つために使われます。以下でそれぞれ詳しく解説します。

:::info
RAID0は2台のドライブがあるため、読み書き速度がわずかに速くなります。
:::

### RAID0
このRAID構成では、存在するすべてのボリュームを1つの大きなボリュームにまとめます。例えば、1TBのSSDが2台ある場合、2TBのパーティションが作成され、全容量を使えます。

ただしデータの冗長性はなく、技術的な故障が起きるとデータ損失のリスクが高いです。データは異なるセクターに分散して書き込まれるためです。

重要なデータを保存する場合はRAID0は避けるか、少なくとも定期的にシステムのバックアップを取ることを強くおすすめします。

:::info
専用サーバーにSSDが1台しかない場合は、自動的にRAID0となります。
:::

### RAID1
RAID0とは異なり、RAID1はデータの冗長性を持ちます。つまり、サーバーに保存したすべてのデータが複製され、両方のSSDにミラーリングされます。これにより、1台のSSDが故障してもデータは安全に保たれます。

技術的な故障が起きた場合は、故障したSSDを交換し、サーバーがRAIDを再構築（データの再ミラーリング）します。特に重要なデータを扱う場合はこの構成が強く推奨されますが、バックアップの代わりにはなりません。

:::info
重要なデータは必ず定期的にバックアップを取りましょう！
:::

## 設定アシスタント

サーバー起動時にRAID設定ツールを起動する必要があります。起動の適切なタイミングで `F8` キーを押してください。

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

この画面でF8を押すとRAID設定ツールが開きます。

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

数秒後にこの設定画面が表示されます。

***

メニューには以下のオプションがあります：

* Create Logical Drive  
新しいボリュームを作成します。

* View Logical Drive  
現在のRAID構成を表示します。

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive  
現在のRAID構成を削除し、新しい構成を作成できます。

* Select Boot Volume  
別のストレージから起動する場合に選択しますが、通常は必要ありません。

* Manage License Keys  
ここでの設定は不要です。ライセンスは事前に設定済みです。

* Cache Settings  
SSDの読み書き速度を少し向上させるためのキャッシュ設定が可能です。書き込み時に最後のデータブロックをキャッシュし、停電などの際の安全性を高めますが、わずかなパフォーマンス低下が発生します。

### 新しいRAIDの作成

まず既存のボリュームがないか確認するため、`Delete Logical Drive`を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

`F8`を押して既存のRAIDを削除します。

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

`F3`を押して削除を確定します。

***

RAIDの削除が完了したら、`Create Logical Drive`を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

ここでSSDが一覧表示され、RAID構成を選べます。現在の構成で実装可能なRAIDは限られています。

例としてRAID0かRAID1を選択します。

:::info
メニュー間は `TAB` キーで切り替え可能です。
:::

RAID構成を選んだら、`Enter`で確定します。

:::info
設定アシスタントは `ESC` キーで閉じられます。
:::

### ブートボリュームの選択

RAIDを変更した場合は、必ずブートボリュームを選択してください。  
**Select Boot Volume**で作成した論理ドライブを選ばないと、サーバーがブートループに陥ります。

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**`F8`を押してブートボリュームとして保存**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

最後に `F8` を押すとシステムを再起動できます。`Enter`を押すとメインメニューに戻ります。  
RAID構成を変更したら、必ずブートボリュームを設定してください。

## まとめ

おめでとうございます！専用サーバーのRAID設定が無事完了しました。  
もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />