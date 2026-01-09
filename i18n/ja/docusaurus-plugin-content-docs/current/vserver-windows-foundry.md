---
id: vserver-windows-foundry
title: "VPS: Foundry 専用サーバー Windows セットアップ"
description: "Windows VPS に Foundry 専用サーバーをセットアップして、スムーズなゲームプレイホスティングを実現 → 今すぐチェック"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに Foundry 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="Windows VPSでFoundry専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり学びたい時もバッチリ！"/>
<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。やり方がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、必要な専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントのコマンドライン（CLI）版で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、その `steamcmd` フォルダに移動させてね。次に、右クリックして Windows の解凍機能や 7zip、Winrar などで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

あとは **steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストール完了！次のセクションで Foundry 専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：`login anonymous`

ログインできたら、ファイルのダウンロードを開始できるよ。

:::tip
任意で、インストール先ディレクトリを指定したい場合は、`force_install_dir [パス]` コマンドを使ってね。`[パス]` はサーバー用に使いたいパスに置き換えて。例えば：
```
force_install_dir C:\Foundry-Server
```
:::

次に、`app_update 2915550` コマンドを実行するとダウンロードが始まるよ。App ID **2915550** は **Foundry** のアプリケーションIDだよ。

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが終わったら、ダウンロード先フォルダに移動しよう。そこにサーバーファイルが全部あるよ。**FoundryDedicatedServerLauncher.exe** を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。PowerShell コマンドでやるのが簡単だけど、Windows Defender ファイアウォールの設定画面からもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windows の検索ボックスを開いて **PowerShell** を検索。右クリックして **管理者として実行** しよう。権限が必要だから必ず管理者モードでね。

:::info
管理者モードで実行しないと設定が正しく反映されないことがあるよ。
:::

次に、以下のコマンドをコピーして PowerShell に貼り付けて実行してね：
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

これで Foundry サーバーが外部からアクセスできるように必要なファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面を開いた場合は、**詳細設定** をクリックして必要な画面を表示してね。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Foundry サーバー用に新しいルールを作成しよう。受信ルールと送信ルールの両方で、以下のプロトコルとポートを追加してね：
- TCP 受信・送信：3724, 27015
- UDP 受信・送信：3724, 27015

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドも参考にしてみて。

</TabItem>
</Tabs>

これでルールを追加したら、サーバーが外部からアクセス可能になるよ。メインメニューのマルチプレイヤーから「IPダイレクト接続」を選んで、サーバーの IP アドレスとポート（デフォルトは3724）を入力すれば接続できるよ。

アクセスする前に、次のセクションでサーバー設定を済ませるのがおすすめ！

## 設定

ここまでで Foundry サーバーのセットアップは完了。さらに細かい設定は設定ファイルでできるよ。ゲームフォルダに戻って、ルートディレクトリに **app.cfg** ファイルを作成しよう（まだなければ）。このファイルは **FoundryDedicatedServerLauncher.exe** と同じフォルダに置くのがポイント。

**app.cfg** はメモ帳や好きなエディターで開いて、設定したいパラメータを追加していこう。パラメータごとに新しい行を作って、`パラメータ名=値` の形で書くだけ。

例として、以下の3つの設定があるよ：
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

他の設定項目や詳細は、[サーバー設定](foundry-configuration.md) をチェックしてみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ルートディレクトリにある **FoundryDedicatedServerLauncher.exe** を実行すると、コマンドプロンプトでサーバーコンソールが開いて起動が始まるよ。

起動したら、マルチプレイヤーの「IPダイレクト接続」からサーバーの IP アドレスとポート（デフォルトは3724）を入力して接続できるよ。

サーバーリストに表示させたい場合は、[サーバー設定](foundry-configuration.md) を見て `server_name` と `server_is_public` のパラメータを設定ファイルに追加しよう。保存したらサーバーを再起動してね。

## まとめ

おめでとう！VPS に Foundry サーバーを無事インストール＆設定できたよ！もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />