---
id: vserver-windows-rdp-freeze
title: "VPS: リモートデスクトップ接続が切断される問題"
description: "接続の安定性を改善してRDPのフリーズ問題を解決し、リモートデスクトップの生産性を向上させる方法 → 今すぐチェック"
sidebar_label: RDP接続切断
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RDPのフリーズ問題は、使用しているOSやバージョンによってリモートデスクトップセッションが突然フリーズしてしまうよくある現象です。この問題はイライラの原因になり、生産性を大きく下げてしまいます。このドキュメントでは、問題の原因と解決方法について詳しく解説します。

<InlineVoucher />

## 主な原因

さまざまな情報源によると、この問題はRDPプロトコルがパケットロスや破損したパケットに対して耐性が低いことが原因とされています。さらに、一部のWindowsバージョンに存在するバグにより、OSがTCPとUDPプロトコルの切り替えをスムーズに行えず、問題が悪化してしまうこともあります。

## 解決方法

この問題を解決するには、RDP接続でUDPプロトコルを無効にし、より安定したTCPプロトコルを使用するように設定します。手順は以下の通りです。管理者権限でコマンドプロンプト（cmd.exe）を開き、次のコマンドを実行してください：

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

このコマンドを実行すると、RDPセッションでUDPではなくTCPプロトコルが使われるようになります。特に接続が不安定だったりパケットロスが多いネットワーク環境で、接続の安定性が向上します。

:::info 
**入力を確定するには** Enterキーを押し、**変更を反映させるためにPCを再起動してください**。
:::

<InlineVoucher />