---
id: dedicated-windows-foundry
title: "専用サーバー：Foundry専用サーバー Windowsセットアップ"
description: "Windows VPSや専用サーバーにFoundry専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSや専用サーバーを持っていて、そこにFoundry専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Windows VPSでFoundry専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時も、最高の情報収集方法だよ！"/>

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）でVPSに接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、必要な専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは例として`steamcmd`と名付けるよ。ダウンロードフォルダから先ほどダウンロードした**steamcmd.zip**を見つけて、その`steamcmd`フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能や7zip、Winrarなどのアプリで解凍しよう。すると**steamcmd.exe**ファイルが展開されるはず。

あとは**steamcmd.exe**を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

**Loading Steam API.... OK**のメッセージが表示されたら、インストール完了！次のセクションでFoundry専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した**steamcmd.exe**のコマンドプロンプトでコマンドを実行できるようになっているよ。何か操作する前に、まずは**anonymous**ユーザーでログインしよう。コマンドは以下：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを始められるよ。

:::tip
任意：インストール先のディレクトリを指定したい場合は、以下のコマンドで設定できるよ。`[path]`はサーバーに使いたいパスに置き換えてね。例：
```
force_install_dir C:\Foundry-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **2915550**は**Foundry**のアプリケーションIDだよ。
```
app_update 2915550
```

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが完了したら、ダウンロード先フォルダに移動しよう。そこにサーバーファイルが全部入っているよ。**FoundryDedicatedServerLauncher.exe**を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。PowerShellコマンドで設定する方法が簡単だけど、Windows Defenderファイアウォールの設定画面からもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスで**PowerShell**を検索しよう。右クリックして**管理者として実行**を選ぶのを忘れずに。そうしないと権限不足で設定が反映されないことがあるよ。

:::info
必ず管理者モードでPowerShellを起動してね。そうしないと設定が正しく適用されないよ。
:::

次に、以下のコマンドをPowerShellにコピー＆ペーストして実行しよう：
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

これでFoundryサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows Defender ファイアウォールの詳細設定**を開こう。基本のファイアウォール画面が開いたら、**詳細設定**をクリックして必要なウィンドウを表示してね。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Foundryサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方のルールを追加してね：
- TCP 受信・送信：3724, 27015
- UDP 受信・送信：3724, 27015

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーが外部からアクセス可能になるよ。メインメニューのマルチプレイヤーから「IPダイレクト接続」を選んで、サーバーのIPアドレスとデフォルトのポート3724を入力すれば接続できるよ。

サーバーにアクセスする前に、次のセクションでサーバー設定を済ませるのがおすすめ！

## 設定

ここまででFoundryサーバーのセットアップは完了。さらに細かい設定は設定ファイルで行えるよ。ゲームフォルダに戻って、ルートディレクトリに**app.cfg**ファイルを作成しよう（まだなければ）。このファイルは**FoundryDedicatedServerLauncher.exe**と同じフォルダに置くのがポイント。

**app.cfg**をメモ帳や好きなエディタで開いて、調整したいパラメータを追加していこう。パラメータごとに新しい行を作り、`=`の後に設定したい値を書くだけ。

例として、以下の3つの設定を追加してみたよ：
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

他の設定項目や詳細は[サーバー設定](foundry-configuration.md)ガイドをチェックしてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ルートディレクトリにある**FoundryDedicatedServerLauncher.exe**を実行すると、コマンドプロンプトでサーバーのコンソールが開いて起動が始まるよ。

起動後は、マルチプレイヤーの「IPダイレクト接続」からサーバーのIPアドレスとポート3724を入力して直接接続できるよ。これはデフォルトのポートで、ポートフォワーディングも済んでいるはず。

サーバーリストに表示させたい場合は、[サーバー設定](foundry-configuration.md)ガイドを見て`server_name`や`server_is_public`のパラメータを設定ファイルに追加しよう。保存したらサーバーを再起動してね。

これでWindows専用サーバーにFoundryを無事インストール完了！

<InlineVoucher />