---
id: dedicated-windows-foundry
title: "専用サーバー: Foundry 専用サーバー Windows セットアップ"
description: "Windows VPS または専用サーバーに Foundry 専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS または専用サーバーを持っていて、そこに Foundry 専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Windows VPSでFoundry専用サーバーをセットアップする方法！" description="実際に動いているのを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでいる時も、じっくり学びたい時も、最高の方法で情報をゲットしよう！"/>



## 準備

まずは、リモートデスクトップ（RDP）でVPSに接続しよう。やり方がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、必要な専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMDはSteamクライアントのコマンドライン（CLI）版で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは例として `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、その `steamcmd` フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能や7zip、Winrarなどで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

あとは **steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは成功。次のセクションでFoundry専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるようになっているはず。まずは何かする前に、`login anonymous` コマンドで匿名ユーザーとしてログインしよう。

ログインできたら、ファイルのダウンロードを開始できるよ。

:::tip
任意で、`force_install_dir [パス]` コマンドを使ってインストール先ディレクトリを指定できるよ。`[パス]` はサーバーに使いたいパスに置き換えてね。例：
```
force_install_dir C:\Foundry-Server
```
:::

次に、`app_update 2915550` コマンドを実行するとダウンロードが始まるよ。App ID **2915550** は **Foundry** のアプリケーションIDだ。

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが完了したら、ダウンロード先フォルダに移動しよう。ここにサーバーファイルが全部入っているよ。**FoundryDedicatedServerLauncher.exe** を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。PowerShellコマンドで設定する方法が簡単だけど、Windows Defender ファイアウォールの画面から設定することもできる。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスを開いて **PowerShell** を検索。右クリックして **管理者として実行** しよう。権限が必要だからこれを忘れずに。

:::info
管理者モードでPowerShellを実行しないと設定が正しく反映されないよ。
:::

次に、以下のコマンドをPowerShellにコピー＆ペーストして実行してね：
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

これでFoundryサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で **Windows ファイアウォールの詳細設定** を開こう。基本のWindowsファイアウォール画面からは、**詳細設定** をクリックして必要なウィンドウを開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Foundryサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方のルールを追加してね：
- TCP 受信・送信: 3724, 27015
- UDP 受信・送信: 3724, 27015

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。メインメニューのマルチプレイヤーから「IPダイレクト接続」を選び、サーバーのIPアドレスとデフォルトのポート3724を入力して接続できるはず。

サーバーにアクセスする前に、次のセクションでサーバー設定を済ませるのがおすすめだよ。

## 設定

ここまででFoundryサーバーのセットアップは完了。さらに細かい設定は設定ファイルで行えるよ。ゲームフォルダに戻って、ルートディレクトリに **app.cfg** ファイルを作成しよう（まだなければ）。このファイルは **FoundryDedicatedServerLauncher.exe** と同じフォルダに置く必要があるよ。

**app.cfg** をメモ帳や好きなエディタで開いて、調整したいパラメータを追加していこう。パラメータごとに新しい行を作り、`=` の後に設定したい値を書くだけ。

例として、以下の3つの設定があるよ：
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

他の設定オプションや詳細は、[サーバー設定](foundry-configuration.md) ガイドをチェックしてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。ルートディレクトリにある **FoundryDedicatedServerLauncher.exe** を実行すると、コマンドプロンプトでサーバーのコンソールが開いて起動が始まるよ。

起動後は、マルチプレイヤーの「IPダイレクト接続」からサーバーのIPアドレスとポート3724を入力して直接接続できる。

サーバーリストに表示させたい場合は、[サーバー設定](foundry-configuration.md) ガイドを参考にして、`server_name` と `server_is_public` のパラメータを設定ファイルに追加しよう。保存したらサーバーを再起動してね。

これでWindows専用サーバーにFoundryを無事インストール完了！