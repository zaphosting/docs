---
id: vserver-windows-expand-disk
title: "VPS: Windowsサーバーでのディスク（パーティション）拡張"
description: "Windowsサーバーのパーティションを安全に拡張して新しいディスク容量を有効活用する方法をチェック → 今すぐ詳しく見る"
sidebar_label: ディスク（パーティション）拡張
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSには、パーティションの拡張やディスクの分割など、さまざまなディスク管理操作を簡単に行えるディスクとパーティション管理の機能が標準搭載されています。その中でも特に重要なのがパーティションの拡張機能で、Windowsサーバーのストレージ容量をアップグレードした後に活用します。このガイドでは、Windowsサーバーのパーティションを拡張する手順を解説します。

<InlineVoucher />

## 準備

まずはRDPでWindowsサーバーに接続してください。接続方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参照してください。

ディスクとパーティションの管理方法は2つあります。1つは**ディスクの管理**ユーティリティツールを使う方法、もう1つは**diskpart**コマンドラインツールを使う方法です。**ディスクの管理**ツールはDiskpartのGUI版で、パーティションの拡張など一般的な操作はほぼ対応しています。一方、上級者向けにはより多機能で強力な`diskpart`が利用可能です。

## パーティションの拡張

新しいディスク容量を活用するために、既存のパーティションを拡張する必要がある場合があります。例えば、サーバーのディスク容量をアップグレードした際、メインドライブのパーティションを拡張しないと新しい容量は割り当てられません。

初心者には操作が簡単な**ディスクの管理**ツールを使う方法をおすすめします。この方法は安全で、データに影響を与えません。

<Tabs>
<TabItem value="disk-management" label="ディスクの管理（GUI）" default>

まずは**ディスクの管理**ツールを開きます。スタートメニューで検索するか、`Windowsキー + R`を押して「ファイル名を指定して実行」を開き、`diskmgmt.msc`と入力して実行してください。

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

ツールが開いたら、メインパーティションを右クリックして**ボリュームの拡張**を選択すると、ウィザードが起動します。

:::tip
メインのブートドライブは常に**C:**ドライブです。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

ウィザードで**次へ**をクリックすると、割り当てる容量を設定する画面になります。通常は未割り当ての全容量が自動で入力されているので、そのまま**次へ**をクリックし、最後に**完了**を押して処理を完了させます。

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

処理が完了すると、ディスクの管理画面に更新されたディスクサイズが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Diskpart（CLI）">

まずは管理者権限でコマンドプロンプトを開きます。スタートメニューで検索し、右クリックから**管理者として実行**を選択してください。

`diskpart`コマンドを実行してCLIユーティリティに入ります。ロードされたら、`list disk`を実行して接続されているディスクの一覧を表示します。

次に、拡張したいドライブの番号を確認し、`select disk [disk_number]`（`[disk_number]`は対象ディスク番号に置き換え）を実行します。

:::tip
メインのブートドライブは常に**C:**ドライブです。
:::

ディスクを選択したら、`list volume`を実行してそのディスク内のボリューム一覧を表示します。拡張したいボリュームを見つけ、`select volume [volume_number]`（`[volume_number]`は対象ボリューム番号に置き換え）を実行します。

ドライブとボリュームが選択されたら、以下のコマンドでボリュームを拡張できます。未割り当ての全容量を使う場合は単に`extend`を実行し、特定のサイズを指定する場合は`extend size=サイズ（MB単位）`を使います。
```
# 未割り当て全容量を拡張
extend

# 特定サイズ（例：10240MB = 10GB）を拡張
extend size=10240
```

成功すると、再度ディスク一覧を表示したりエクスプローラーで確認するとボリュームサイズが増えているはずです。CLIを終了するには`quit`コマンドを実行してください。

</TabItem>
</Tabs>

## まとめ

これでディスクのメインパーティションを無事に拡張し、全容量を活用できるようになりました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ 🙂 

<InlineVoucher />