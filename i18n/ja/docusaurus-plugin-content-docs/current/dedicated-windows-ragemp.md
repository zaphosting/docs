---
id: dedicated-windows-ragemp
title: "専用サーバー：RageMP専用サーバー Windowsセットアップ"
description: "Windows専用サーバーにRageMP専用サーバーをインストールしてマルチプレイヤーGTA Vセッションをホストする方法 → 今すぐ詳しく学ぼう"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows専用サーバーを持っていて、そこにRageMP専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

## 準備

まずは、リモートデスクトップ（RDP）で専用サーバーに接続しよう。接続方法がわからなければ、[初期アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、RageMPが必要とする前提条件として[Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe)をインストールしよう。これがインストールされていることを確認してから次に進んでね。すでにインストール済みか不安な場合は、インストーラーを実行すればセットアップ中に教えてくれるよ。

依存関係が整ったら、[RageMP公式サイト](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe)から最新のサーバーリリースをダウンロードしよう。

:::tip
すでにRageMPがインストールされている場合は、**サーバーブランチへの切り替え**の項目に進んでOK。再インストールは不要だよ。
:::

## インストール

リリースファイルをダウンロードしたら、**RAGEMultiplayer_Setup.exe**を実行してインストールを進めよう。セットアップ中にインストール先のパスを変更できるので、好きな場所に設定するのがおすすめ。

RageMPがインストールできたら、Windowsのアプリ一覧から**RAGE Multiplayer**を起動しよう。

初回起動時には、GTA:Vのゲームインストールフォルダのパスを設定する必要があるよ。インストールディレクトリはゲームをインストールしたランチャーによって異なるけど、通常は`C:/Program Files`か`C:/Program Files (x86)`の中にあるはず。

次に、サーバーファイルをダウンロードするためにブランチを切り替えよう。

### サーバーブランチへの切り替え

RageMPをインストールしたフォルダに移動して、**config.xml**ファイルを探そう。このファイル内の`channel`パラメータを`prerelease`から`prerelease_server`に変更して保存してね。

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

次に、**updater.exe**を実行すると、ブランチ変更に応じた必要なサーバーファイルがダウンロードされるよ。RageMPフォルダ内に新しく**server-files**フォルダができているはず。これがサーバー起動に必要なファイル群だよ。

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

必要に応じて、`channel`パラメータを`prerelease`に戻して**update.exe**を再実行すれば、クライアント版に切り替えてゲームプレイもできるよ。

:::tip
サーバーファイルは好きな場所に移動してフォルダ名を変えてもOK。必ずしも`RAGEMP`フォルダ内で実行する必要はないよ。
:::

サーバーを起動するには、`server-files`フォルダ（またはサーバーフォルダ）内の**ragemp-server.exe**を実行すればOK。サーバーが起動し始めるよ。ただし、先にポートフォワーディングとサーバー設定を済ませるのがおすすめ。

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。PowerShellコマンドで設定する方法が簡単だけど、Windows Defenderファイアウォールの画面から設定することもできるよ。

:::tip
サーバーを初めて起動するとUAC（ユーザーアカウント制御）の確認が出るはず。これを許可するとファイアウォールのルールが自動で設定されるから、そのまま次のセクションに進んでOK。許可しなかった場合は以下の方法で設定してね。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスで**PowerShell**を検索しよう。右クリックして**管理者として実行**を選択し、権限を持った状態で起動するのがポイント。

:::info
管理者モードでPowerShellを起動しないと設定が正しく反映されないことがあるので注意してね。
:::

以下のコマンドをコピーしてPowerShellに貼り付けて実行しよう：

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

これでRageMPサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows Defender ファイアウォールの詳細設定**を開こう。基本のファイアウォール画面からは**詳細設定**をクリックして開く必要があるかも。

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

RageMPサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信ルールと送信ルールの両方を追加してね：

- TCP 受信・送信：22005
- UDP 受信・送信：22005

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてみて。

</TabItem>
</Tabs>

これらのルールを追加すれば、サーバーのIPアドレスを使って外部から接続できるようになるよ。

サーバーにアクセスする前に、次のセクションでサーバー設定を済ませておくのがおすすめ。

## 設定

ここまででRageMPサーバーのセットアップは完了。さらに細かい設定は設定ファイルで行えるよ。

ルートフォルダに戻って、**conf.json**ファイルを開こう。このファイルでポート番号やサーバー名など、いくつかのパラメータを調整できる。

例として、以下のような設定があるよ：

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。`server-files`フォルダ（またはサーバーフォルダ）に移動して、**ragemp-server.exe**を実行すると起動プロセスが始まるよ。コマンドプロンプトにサーバーコンソールが表示されるはず。

ゲーム内のRageMPランチャーから直接サーバーに接続できるようになるよ。

## まとめ

おめでとう！専用サーバーにRageMPサーバーを無事インストール＆設定できたね！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！