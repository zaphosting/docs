---
id: dedicated-windows-ragemp
title: "専用サーバー：RageMP専用サーバー Windowsセットアップ"
description: "Windows専用サーバーにRageMP専用サーバーをセットアップしてマルチプレイヤーGTA Vセッションをホストする方法 → 今すぐチェック"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows専用サーバーを持っていて、そこにRageMP専用サーバーサービスをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で専用サーバーに接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、RageMPが必要とする前提条件として[Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe)をインストールしよう。これがインストールされていることを確認してから次に進んでね。すでにインストール済みか不安な場合は、インストーラーを実行すればセットアップ中に教えてくれるよ。

依存関係が整ったら、[RageMP公式サイト](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe)から最新のサーバーリリースをダウンロードしよう。

:::tip
すでにRageMPがインストール済みなら、**サーバーブランチへの切り替え**のサブセクションに進んでOK。再インストールは不要だよ。
:::

## インストール

リリースファイルをダウンロードしたら、**RAGEMultiplayer_Setup.exe**を実行してインストールを進めよう。セットアップ中にインストールパスを変更できるので、好きな場所に設定するのがおすすめ。

RageMPがインストールできたら、Windowsのアプリ一覧から**RAGE Multiplayer**を起動しよう。

初回起動時にGTA:Vのゲームインストールフォルダのパスを設定する必要があるよ。インストールディレクトリはゲームをインストールしたランチャーによって異なるけど、通常は`C:/Program Files`か`C:/Program Files (x86)`の中にあるはず。

次に、サーバーファイルをダウンロードするためにブランチを切り替える必要があるよ。

### サーバーブランチへの切り替え

RageMPをインストールしたディレクトリに移動しよう。そこにある**config.xml**ファイルを見つけて、`channel`パラメータを`prerelease`から`prerelease_server`に変更して保存してね。

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

次に**updater.exe**を実行すると、ブランチ変更に応じて必要なサーバーファイルがダウンロードされるよ。RageMPディレクトリ内に新しく**server-files**フォルダができているはず。これがサーバー起動に必要なファイル群だよ。

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

必要に応じて`channel`パラメータを`prerelease`に戻して、**update.exe**を再実行すればクライアント版に切り替えてゲームプレイもできるよ。

:::tip
サーバーファイルは好きな場所に移動してフォルダ名を変えてもOK。必ずしも`RAGEMP`フォルダ内で実行する必要はないよ。
:::

サーバーを起動するには、`server-files`フォルダ（またはサーバーフォルダ）内の**ragemp-server.exe**を実行すればOK。サーバーが起動し始めるよ。ただし、先にポートフォワーディングとサーバー設定を済ませるのがおすすめ。

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。PowerShellコマンドで直接設定する方法が簡単だけど、Windows Defenderファイアウォールの画面から設定することもできるよ。

:::tip
サーバーを初めて起動するとUAC（ユーザーアカウント制御）の確認が出るはず。これを許可するとファイアウォールのルールが自動で設定されるから、そのまま次のセクションに進んでOK。許可しなかった場合は以下の方法で設定してね。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスで**PowerShell**を検索しよう。右クリックして**管理者として実行**を選ぶのを忘れずに。権限がないと設定が正しく反映されないよ。

:::info
必ず管理者モードでPowerShellを起動してね。そうしないと設定が適用されないことがあるよ。
:::

次に、以下のコマンドをPowerShellにコピー＆ペーストして実行しよう：

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

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

RageMPサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信ルールと送信ルールの両方を追加してね：

- TCP 受信・送信：22005
- UDP 受信・送信：22005

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてね。

</TabItem>
</Tabs>

これでサーバーが外部からアクセス可能になったよ。つまり、サーバーのIPアドレスを使って接続できるってこと。

サーバーにアクセスする前に、次のセクションでサーバー設定を済ませるのがおすすめだよ。

## 設定

ここまででRageMPサーバーのセットアップは完了。さらに細かい設定は設定ファイルでできるよ。

ルートフォルダに戻って、**conf.json**ファイルを開こう。このファイルでポートやサーバー名など、いくつかのパラメータを調整できるよ。

例として、以下のような設定があるよ：

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## サーバーの起動＆接続

いよいよサーバーを起動しよう。`server-files`フォルダ（またはサーバーフォルダ）に移動して、**ragemp-server.exe**を実行してね。コマンドプロンプトでサーバーのコンソールが開き、起動処理が始まるよ。

これでRageMPランチャーからゲーム内で直接サーバーに接続できるようになるよ。

## まとめ

おめでとう！専用サーバーにRageMPサーバーを無事インストール＆設定できたね！もし何か質問やトラブルがあれば、毎日対応しているサポートチームに気軽に連絡してね！

<InlineVoucher />