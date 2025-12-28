---
id: dedicated-windows-eval-to-full
title: "専用サーバー：Windows Server 評価版からフルバージョンへの変換"
description: "Windows Server 評価版からフルバージョンへの変換方法をチェック → 今すぐ詳しく見る"
sidebar_label: 評価版からフル版へ変換
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows Server 評価版はテスト目的で設計されており、使用期限が限られています。同じインストール環境を本番環境で使い続けたい場合、OSを再インストールせずに評価版から正式ライセンス版へ変換することが可能です。

MicrosoftはDISMツールを使ったインプレース変換をサポートしており、有効な対象エディションのプロダクトキーがあれば実行できます。

<InlineVoucher />



## 前提条件

変換を始める前に、StandardやDatacenterなど、切り替えたいWindows Serverエディションの有効なプロダクトキーを用意してください。プロダクトキーは対象エディションと完全に一致している必要があります。



## 現在のエディションの確認

現在インストールされているエディションを確認するには、管理者権限でコマンドプロンプトまたはPowerShellを開き、以下のコマンドを実行します：

```powershell
DISM /Online /Get-CurrentEdition
```

出力には現在のエディション識別子が表示されます。評価版の場合は通常 `ServerStandardEval` または `ServerDatacenterEval` と表示されます。



## 対応可能な変換先エディションの確認

すべてのエディション間で変換が可能なわけではありません。現在のインストールでサポートされているライセンス版エディションを確認するには、以下のコマンドを実行してください：

```
DISM /Online /Get-TargetEditions
```

表示されるエディションが変換可能な有効な対象エディションです。



## 評価版からフルバージョンへのアップグレード

対象エディションが判明し、有効なプロダクトキーが用意できたら、アップグレードを開始します。`<TargetEdition>` の値は、先ほどのDISMコマンドで確認したサポート対象のいずれかと一致させてください。

よく使われる対象エディション例：
- `ServerStandard`
- `ServerDatacenter`

以下のコマンドで変換を開始します。`<TargetEdition>` を希望のエディションに、`<ProductKey>` を25文字のWindows Serverプロダクトキーに置き換えてください：


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| OSエディション                  | ジェネリックボリュームライセンスキー   |
| ------------------------------ | --------------------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832           |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF           |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H           |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33           |

処理中、一時的に進行が止まったように見えることがありますが、これは正常な動作です。変換が完了したら、エディション変更を確定するために再起動が必要です。



## Windows Server バージョンの確認

サーバー再起動後、管理者権限のコマンドプロンプトまたはPowerShellを開き、以下を実行してください：

```powershell
DISM /Online /Get-CurrentEdition
```

出力に `ServerStandard` や `ServerDatacenter` といった正式ライセンス版のエディションが表示されていれば、評価版からの変換が成功したことを意味します。

この段階で画面右下に **Windowsを有効化してください** のウォーターマークが表示されます。購入済みのWindows Serverライセンスを使って、Windows Server StandardまたはDatacenterエディションを有効化しましょう。



## まとめ

おめでとうございます！これでWindows Serverの評価版からフルバージョンへの切り替えが完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂



<InlineVoucher />