---
id: vserver-windows-openmp
title: "VPS: Open.mp 専用サーバー Windows セットアップ"
description: "Windows VPS に open.mp 専用サーバーをインストールしてマルチプレイヤーゲームを快適に楽しむ方法 → 今すぐチェック"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに open.mp 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、[open.mp GitHub リポジトリ](https://github.com/openmultiplayer/open.mp/releases)から最新リリースをダウンロードしよう。**win-x86** バージョンを選ぶのを忘れずに。

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## インストール

リリースをダウンロードしたら、7zip や WinRAR などのツールでファイルを解凍しよう。すると、必要なサーバーファイルが入った **Server** フォルダができるはず。

サーバーを起動するには、**omp-server.exe** を実行するだけでOK。ただし、先にポートフォワーディングの設定をしておくのがおすすめ。

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。PowerShell コマンドで直接設定する方法が簡単だけど、Windows Defender ファイアウォールの画面から設定することもできる。

:::tip
初回起動時に UAC（ユーザーアカウント制御）の確認が出るよ。許可すればファイアウォールのルールが自動で設定されるから、そのまま次のセクションに進んでOK。もし許可しなかった場合は、以下の方法で設定してね。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShell で設定" default>

Windows の検索ボックスで **PowerShell** を検索しよう。右クリックして **管理者として実行** を選ぶのを忘れずに。そうしないと権限不足で設定が反映されないよ。

:::info
必ず管理者モードで PowerShell を起動してね。そうしないと設定が正しく適用されないことがあるよ。
:::

次に、以下のコマンドを PowerShell にコピー＆ペーストして実行しよう：
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

これで open.mp サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面が開いたら、**詳細設定** をクリックして必要な画面を表示してね。

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

open.mp サーバー用に新しいルールを作成しよう。受信ルールと送信ルールの両方で、以下のプロトコルとポートを追加してね：
- TCP 受信・送信：7777
- UDP 受信・送信：7777

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドも参考にしてみて。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーの IP アドレスで外部から接続できるようになるよ。

サーバーにアクセスする前に、次のセクションでサーバー設定を先に済ませておくのがおすすめ。

## 設定

ここまでで open.mp サーバーのセットアップは完了。さらに細かい設定は設定ファイルで行えるよ。

ルートフォルダに戻って、**config.json** ファイルを開こう。このファイルでポート番号やパスワードなど、さまざまなサーバーパラメータを調整できる。

例えば、以下のような設定があるよ：
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

利用可能な設定項目や詳細は、[サーバー設定](openmp-configuration.md) をチェックしてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。ルートディレクトリで **omp-server.exe** を実行すると、コマンドプロンプトでサーバーのコンソールが開いて起動が始まるよ。

ゲーム内の open.mp ランチャーから直接サーバーに接続できるようになるはず。サーバーリストに情報を表示したい場合は、[サーバー設定](openmp-configuration.md) ガイドを見て `enable_query` パラメータを true に設定（デフォルトで true のはず）しよう。設定を保存したら、もう一度サーバーを起動してね。

## まとめ

おめでとう！VPS に open.mp サーバーを無事インストール＆設定できたよ！もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />