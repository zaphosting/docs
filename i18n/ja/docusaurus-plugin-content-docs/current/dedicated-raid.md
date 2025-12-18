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



## 利用可能なRAIDタイプ
当社の専用サーバーは現在2つのSSDベイを搭載しているため、RAIDの構成は2種類が可能です。1つ目はRAID0で、複数のボリュームを1つの大きなボリュームにまとめる用途に使われます。2つ目はRAID1で、ボリュームをミラーリングしてデータの冗長性を確保します。以下で両方について詳しく解説します。

:::info
RAID0は2台のドライブがあるため、読み書き速度がわずかに速くなります。
:::

### RAID0
このRAID構成では、存在するすべてのボリュームを1つの大きなボリュームにまとめます。例えば、1TBのSSDが2台ある場合、2TBのパーティションが作成され、全容量を使うことができます。

ただしデータの冗長性はなく、技術的な故障が起きるとデータ損失が避けられないことが多いです。データは異なるセクターに分散して書き込まれるためです。

重要なデータを保存する場合はRAID0の使用は避けるか、少なくとも定期的なシステムバックアップを行うことを強く推奨します。

:::info
専用サーバーにSSDが1台しかない場合は、自動的にRAID0となります。
:::

### RAID1
RAID0とは異なり、RAID1はデータの冗長性を持ちます。つまり、サーバーに保存したすべてのデータが複製されます。
2台のSSDにミラーリングされているため、1台のSSDが故障してもデータは安全に保たれます。

技術的な故障が起きた場合は、故障したSSDだけを交換すればよく、サーバーはRAIDを再構築（データの再ミラーリング）します。
特に重要なデータを扱う場合はこの構成が強く推奨されますが、バックアップの代わりにはなりません。

:::info
重要なデータは必ず定期的にバックアップを取りましょう！
:::

## 設定アシスタント

サーバー起動時にRAID設定ツールを起動する必要があります。起動の適切なタイミングで `F8` キーを押すことで起動可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

この画面でF8を押すとRAID設定ツールが開きます。

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

数秒後にこの設定概要画面が表示されます。

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
ここでの設定変更は不要です。ライセンスはあらかじめ設定済みです。

* Cache Settings  
SSDの読み書き速度を少し向上させるためのキャッシュ設定が可能です。  
書き込み時に最後のデータブロックをキャッシュし、例えば停電時の安全性を高めますが、わずかなパフォーマンス低下を伴います。

### 新しいRAIDの作成

まずは既存のボリュームがないか確認するため、`Delete Logical Drive`を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

`F8`を押して既存のRAIDを削除します。

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

`F3`を押して削除を確定します。

***

RAIDの削除が完了したら、`Create Logical Drive`を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

ここでSSDが一覧表示され、RAID構成の選択が可能です。  
もちろん、現在の構成で実装可能なRAIDは限られています。

例としてRAID0またはRAID1を選択します。

:::info
`TAB`キーでメニュー間の切り替えができます。
:::

RAID構成を選択したら、`Enter`キーで確定します。

:::info
設定アシスタントは`ESC`キーで閉じられます。
:::

### ブートボリュームの選択

RAIDを変更した場合は、必ずブートボリュームを選択する必要があります。  
**Select Boot Volume**で作成した論理ドライブを選択しないと、サーバーがブートループに陥ります。

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

最後に`F8`を押すとシステムを再起動できます。`Enter`を押すとメインメニューに戻ります。  
RAID構成を変更したら、必ずブートボリュームを設定してください。



## まとめ

おめでとうございます！専用サーバーのRAID構成が無事に完了しました。  
もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにご連絡ください。毎日対応していますよ！🙂



