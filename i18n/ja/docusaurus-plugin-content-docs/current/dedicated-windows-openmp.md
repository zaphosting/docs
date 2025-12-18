---
id: dedicated-windows-openmp
title: "専用サーバー: Open.mp 専用サーバー Windows セットアップ"
description: "Windows専用サーバーにopen.mp専用サーバーサービスをセットアップしてマルチプレイヤーゲームを快適に楽しむ方法 → 今すぐチェック"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows専用サーバーを持っていて、そこにopen.mp専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

## 準備

まずは、リモートデスクトップ（RDP）で専用サーバーに接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、[open.mp GitHubリポジトリ](https://github.com/openmultiplayer/open.mp/releases)から最新リリースをダウンロードしよう。**win-x86**バージョンを選ぶのを忘れずに。

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## インストール

ダウンロードしたら、7zipやWinRARなどのツールでファイルを解凍しよう。すると、必要なサーバーファイルが入った**Server**フォルダができるはず。

サーバーを起動するには、**omp-server.exe**を実行するだけでOK。ただし、先にポートフォワーディングの設定をしておくのがおすすめ。

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディングルールを変更する必要があるよ。PowerShellコマンドで直接設定する方法が簡単だけど、Windows Defenderファイアウォールの画面から設定することもできる。

:::tip
サーバーを初めて起動するとUAC（ユーザーアカウント制御）の確認が出るよ。これを許可するとファイアウォールのルールが自動で設定されるから、そのまま次のステップに進めるよ。もし許可しなかった場合は、以下の方法で設定してね。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスで**PowerShell**を検索しよう。右クリックして**管理者として実行**を選ぶのを忘れずに。そうしないと権限不足で設定が反映されないよ。

:::info
必ず管理者モードでPowerShellを起動してね。そうしないと設定が正しく適用されないことがあるよ。
:::

次に、以下のコマンドをPowerShellにコピー＆ペーストして実行しよう：
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

これでopen.mpサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows Defender ファイアウォール 高度なセキュリティ**を開こう。基本画面からは**詳細設定**をクリックして開く必要があるかも。

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

open.mpサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方のルールを追加する必要があるよ：
- TCP 受信・送信: 7777
- UDP 受信・送信: 7777

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーのIPアドレスで外部から接続できるようになるよ。

アクセスする前に、次のセクションでサーバー設定を先に調整するのがおすすめ。

## 設定

ここまででopen.mpサーバーのセットアップは完了。さらに細かい設定は設定ファイルで行えるよ。

ルートフォルダに戻って、**config.json**ファイルを開こう。このファイルでポートやパスワードなど、いろんなサーバーパラメータを調整できる。

例として、以下のような設定があるよ：
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

全オプションと詳細は[サーバー設定](openmp-configuration.md)ガイドをチェックしてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ルートディレクトリで**omp-server.exe**を実行すると、コマンドプロンプトでサーバーコンソールが開いて起動が始まるよ。

ゲーム内のopen.mpランチャーから直接サーバーに接続できるようになるよ。サーバーリストに情報を表示したい場合は、[サーバー設定](openmp-configuration.md)ガイドを見て`enable_query`パラメータをtrueに設定しよう（デフォルトでtrueのはず）。設定を保存してからサーバーを再起動してね。

## まとめ

おめでとう！専用サーバーにopen.mpサーバーを無事インストール＆設定できたよ！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！