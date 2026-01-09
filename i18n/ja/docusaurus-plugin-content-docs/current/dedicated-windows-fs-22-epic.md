---
id: dedicated-windows-fs-22-epic
title: "専用サーバー: Farming Simulator 2022 (Epic Games) 専用サーバー Windows セットアップ"
description: "Farming Simulator 22 Epic Games版の専用サーバーを最適化されたパフォーマンスと独自の要件でセットアップする方法 → 今すぐ詳しくチェック"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Farming Simulator 22 Epic Games版のサーバーセットアップは、通常のサーバーとは少し異なります。このガイドでは、Epic Games版特有のポイントにフォーカスしてセットアップ手順を解説します。

## 準備

開始前に、以下の要件を満たしていることを確認してください：
- **OS:** Windows Server 2016/2019 (64ビット)
- **CPU:** 4コア以上、2.4 GHz以上（AMD/Intel）
- **RAM:** 4GB以上（DDR3/4推奨）
- **ディスク容量:** 50GB以上の空き（SSD推奨）
- **Epic Gamesアカウント:** Farming Simulator 22を所有しているEpic Gamesアカウント

:::info
サーバーを起動中は、同じEpic Gamesアカウントでサーバーをホストしながらプレイすることはできません。サーバーでプレイしたい場合は、別のアカウントでゲームをもう1本用意する必要があります。
:::

## ステップ1: サーバーインストールの準備
まずはリモートデスクトップ（RDP）でサーバーに接続します。接続方法がわからない場合は、[初期アクセス（RDP）](vserver-windows-userdp.md)ガイドを参照してください。

接続後、必須の前提条件であるMicrosoft Visual C++ 再頒布可能パッケージをインストールします。こちらは[Microsoft公式サイト](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170)からダウンロード可能です。ダウンロード後は画面の指示に従ってインストールしてください。

:::tip
すでにC++再頒布可能パッケージがインストールされている場合、インストーラーがエラーを返すことがありますが、無視して問題ありません。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

次にEpic Gamesランチャーをインストールします。こちらは[Epic Games公式サイト](https://store.epicgames.com/en-US/download)からダウンロード可能です。こちらも画面の指示に従ってインストールしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

インストール後、ランチャーが起動する前に追加のファイルやアップデートをダウンロードすることがあります。

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

ランチャーが起動したら、Farming Simulator 2022を所有しているEpic Gamesアカウントでログインしてください。

## ステップ2: Farming Simulator 2022のダウンロード

Epic Gamesランチャーの**ライブラリ**タブを開き、Farming Simulator 22を見つけます。**インストール**ボタンを押し、ゲームをダウンロードしたい場所を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

ダウンロードとインストールが完了するまで待ちます。ダウンロード速度はサーバーの帯域幅に依存します。

## ステップ3: 起動オプションの設定

ゲームがインストールされたら、Epic Gamesランチャーの**ライブラリ**タブに戻ります。Farming Simulator 22の横にある三点リーダーをクリックし、**管理**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

下にスクロールして**起動オプション**を有効にし、表示されたテキストボックスに `-server` と入力してメニューを閉じます。

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## ステップ4: サーバーの起動

Epic GamesランチャーまたはデスクトップのショートカットからFarming Simulator 2022を起動します。コマンドプロンプト（CMD）経由で専用サーバーモードで起動するはずです。起動しない場合は、起動オプションの設定を再確認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## ステップ5: Webインターフェースの有効化（任意）

Farming Simulator 22専用サーバーにはWebインターフェースが付属しており、設定変更や情報確認に便利です。必須ではありませんが、ぜひ有効化をおすすめします。

まず、コマンドプロンプトを閉じてサーバーを停止してください。これにより、設定変更が上書きされるのを防ぎます。

ゲームのインストールパスに移動します。通常はデフォルトインストールの場合、`C:\Program Files\Epic Games\FarmingSimulator22` です。

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

ルートディレクトリにある `dedicatedServer.xml` ファイルをメモ帳などのテキストエディタで開きます。

管理者用のユーザー名とパスワードを以下のように設定してください。
```xml
  <initial_admin>
    <username>admin</username> // ユーザー名
    <passphrase>your_password</passphrase> // パスワード
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

編集後は必ず保存して閉じ、同じルートディレクトリにある `dedicatedServer.exe` を実行します。

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

ブラウザで `http://[your_serverip]:8080` にアクセスするとWebインターフェースが開きます。`[your_serverip]` はサーバーのIPアドレスに置き換えてください。同じサーバー上でアクセスする場合は `http://127.0.0.1:8080` でもOKです。

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Epic Games版の独特なセットアップのため、Webインターフェースの全機能が使えない場合があります。Webインターフェースからサーバーの停止や設定変更は可能ですが、起動はできません。

問題があれば、まず `dedicatedServer.exe` を停止し、Farming Simulator 22を直接起動してサーバーが動作していることを確認してください。その後に `dedicatedServer.exe` を起動してWebインターフェースを有効化します。

サーバーは**先に起動**し、Webインターフェースは**後から起動**することが重要です。そうしないとEpic Gamesが両者を同一ファイルと認識し、メインサーバーの起動を妨げる可能性があります。
:::

## ステップ6: ポート開放

サーバーを外部からアクセス可能にするため、専用サーバープロセスが使用するポートのポートフォワーディング設定を変更する必要があります。PowerShellコマンドでの設定が簡単ですが、Windows Defenderファイアウォールの設定画面からも可能です。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスで **PowerShell** を検索し、右クリックで **管理者として実行** を選択してください。管理者権限がないと設定が反映されません。

:::info
必ず管理者モードでPowerShellを起動してください。そうしないと設定が正しく適用されません。
:::

以下のコマンドをコピーしてPowerShellに貼り付け、実行します：
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

これでFarming Simulator 22サーバーが外部からアクセス可能になるために必要なファイアウォールルールが自動で作成されます。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索から **Windows Defender ファイアウォール 高度なセキュリティ** を開きます。基本画面からは **詳細設定** を押して開く必要があります。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Farming Simulator 22用に新しい受信・送信ルールを作成します。以下のプロトコルとポートを設定してください：
- TCP 受信・送信: 3724, 27015
- UDP 受信・送信: 3724, 27015

設定方法がわからない場合は、[ポート開放（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてください。

</TabItem>
</Tabs>

## ステップ7: サーバーへの接続
ゲームを起動し、マルチプレイヤーメニューに進みます。Webインターフェースで確認できるサーバー名を探してください。

サーバーを見つけたらクリックして接続します。パスワードを求められた場合は、Webインターフェースに表示されているパスワードを入力してください。

これでWindows専用サーバーにFarming Simulator 22（Epic Games版）を無事インストールできました！