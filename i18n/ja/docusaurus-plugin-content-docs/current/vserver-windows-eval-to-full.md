---
id: vserver-windows-eval-to-full
title: "VPS: Windows Server 評価版から正式版への変換"
description: "Windows Server 評価版から正式版への変換方法をチェック → 今すぐ詳しく見る"
sidebar_label: 評価版から正式版へ変換
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows Server 評価版はテスト用に設計されており、使用期限が限られています。同じインストール環境を本番環境で使い続けたい場合は、OSを再インストールせずに評価版から正式なライセンス版へ変換できます。

Microsoft は DISM ツールを使ったインプレース変換をサポートしており、有効な対象エディションのプロダクトキーがあれば変換可能です。

<InlineVoucher />



## 前提条件

変換を始める前に、Standard や Datacenter など、切り替えたい Windows Server エディションの有効なプロダクトキーを用意してください。プロダクトキーは対象エディションと完全に一致している必要があります。



## 現在のエディションの確認

現在インストールされているエディションを確認するには、管理者権限でコマンドプロンプトまたは PowerShell を開き、以下のコマンドを実行します：

```powershell
DISM /Online /Get-CurrentEdition
```

出力結果に現在のエディション識別子が表示されます。評価版の場合は通常 `ServerStandardEval` または `ServerDatacenterEval` と表示されます。



## 対応している変換先エディションの確認

すべてのエディション間で変換できるわけではありません。現在のインストールに対してサポートされている正式版エディションを確認するには、以下のコマンドを実行してください：

```
DISM /Online /Get-TargetEditions
```

表示されるエディションが変換可能な対象エディションです。



## 評価版から正式版へのアップグレード

対象エディションがわかり、有効なプロダクトキーが用意できたら、アップグレードを開始します。`<TargetEdition>` は DISM のターゲットエディション確認で表示されたサポート対象のいずれかと一致させてください。

よく使われる対象エディション例：
- `ServerStandard`
- `ServerDatacenter`

以下のコマンドで変換を開始します。`<TargetEdition>` を希望のエディションに、`<ProductKey>` を25文字の Windows Server プロダクトキーに置き換えてください：

```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| OSエディション                 | 汎用ボリュームライセンスキー       |
| ------------------------------ | ---------------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832     |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF     |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H     |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33     |

処理中は一時的に進行が止まったように見えることがありますが、これは正常な動作です。変換が完了したら、エディション変更を確定するために再起動が必要です。



## Windows Server バージョンの確認

サーバー再起動後、管理者権限のコマンドプロンプトまたは PowerShell を開き、以下を実行してください：

```powershell
DISM /Online /Get-CurrentEdition
```

出力に `ServerStandard` や `ServerDatacenter` といった正式版エディションが表示されていれば、評価版からの変換が成功したことを意味します。

この時点で画面右下に **Windows を有効化してください** のウォーターマークが表示されます。購入済みの Windows Server ライセンスを使って、Windows Server Standard または Datacenter エディションを有効化できます。



## まとめ

おめでとうございます！これで Windows Server の評価版から正式版への切り替えが完了しました。もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにご連絡ください。毎日対応していますよ！🙂



<InlineVoucher />