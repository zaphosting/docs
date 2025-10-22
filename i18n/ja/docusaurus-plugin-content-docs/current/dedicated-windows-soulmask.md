---
id: dedicated-windows-soulmask
title: "専用サーバー：Soulmask 専用サーバー Windows セットアップ"
description: "Windows VPS または専用サーバーに Soulmask 専用サーバーを素早く効率的にインストールする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS または専用サーバーをお持ちで、そこに Soulmask 専用サーバーサービスをインストールしたいですか？ここがまさにその場所です。このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで説明します。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）を使って VPS に接続しましょう。接続方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてください。

サーバーにアクセスしたら、必要な専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップする必要があります。SteamCMD は Steam クライアントの **コマンドライン（CLI）版** で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールです。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からダウンロードしてください。

サーバーのどこかに新しいフォルダを作成します。ここでは例として `steamcmd` と名付けます。ダウンロードフォルダにある **steamcmd.zip** ファイルを見つけて、この `steamcmd` フォルダに移動させましょう。次に、ファイルを右クリックして Windows の解凍機能や 7zip、Winrar などのアプリで解凍します。これで **steamcmd.exe** ファイルが展開されます。

**steamcmd.exe** を実行し、インストールが完全に完了するまで待ちます。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

**Loading Steam API.... OK** というメッセージが表示されたら、インストールは成功です。次のセクションで Soulmask 専用サーバーのインストールを始めましょう。

## インストール

インストール後、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるようになります。何か操作をする前に、まずは **anonymous** ユーザーでログインする必要があります。以下のコマンドを入力してください：`login anonymous`

ログインできたら、ファイルのダウンロードを開始しましょう。

:::tip
任意：サーバーのインストール先ディレクトリを指定したい場合は、`force_install_dir [パス]` コマンドを使います。`[パス]` はサーバー用に使いたいパスに置き換えてください。例：
```
force_install_dir C:\Soulmask-Server
```
:::

次に、`app_update 3017310` コマンドを実行するとダウンロードが始まります。App ID **3017310** は **Soulmask** のアプリケーションIDです。

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
ダウンロードが完了するまで中断しないでください。少し時間がかかるかもしれませんが、じっくり待つ価値ありです！ :)
:::

ダウンロードが完了したら、ダウンロード先フォルダに移動してください。そこにサーバーファイルがすべてあります。**StartServer.bat** を使ってサーバーを起動できますが、まずはポートフォワーディングとサーバー設定を行うことをおすすめします。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があります。PowerShell コマンドで設定する方法（簡単）か、Windows Defender ファイアウォールの設定画面から通常の方法で設定できます。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスを開き、**PowerShell** を検索します。右クリックして **管理者として実行** するのを忘れずに。権限がないと設定が正しく反映されません。

:::info
必ず管理者モードで PowerShell を実行してください。そうしないと設定が適用されないことがあります。
:::

次に、以下のコマンドを PowerShell にコピー＆ペーストして実行してください：
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

これで Soulmask サーバーが外部からアクセス可能になるために必要なファイアウォールルールが自動で作成されます。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索機能で **Windows ファイアウォールの詳細設定** を開きます。基本の Windows ファイアウォール画面を開いた場合は、**詳細設定** をクリックして必要な画面を表示してください。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Soulmask サーバー用に新しいルールを作成します。以下のプロトコルとポートで、受信ルールと送信ルールの両方を追加してください：
- TCP 受信・送信：8777, 27015
- UDP 受信・送信：8777, 27015

設定方法がわからない場合は、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてください。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になります。ゲームのメインメニューからマルチプレイヤーを選び、「IPダイレクト接続」でサーバーの IP アドレスとポート（デフォルトは 3724、設定した場合はそのポート）を入力して接続できます。

サーバーにアクセスする前に、次のセクションでサーバー設定を行うことをおすすめします。

## 設定

ここまでで Soulmask サーバーのセットアップは完了です。さらに細かい設定は、ルートディレクトリにある **StartServer.bat** ファイルや、`../WS/Saved/Config/WindowsServer` フォルダ内の **GameUserSettings.ini** ファイルを編集して行えます。

利用可能なパラメータや設定オプションは、[サーバー設定](soulmask-configuration.md) ガイドをチェックしてください。

## サーバーの起動と接続

いよいよサーバーを起動しましょう。ルートディレクトリに移動して **StartServer.bat** を実行すると、コマンドプロンプトでサーバーのコンソールが開き、起動プロセスが始まります。

:::tip
もしサーバーが起動せず、コマンドプロンプトがすぐに閉じてしまう場合は、`../WS/Saved/Logs` フォルダ内の最新ログを確認して原因を調べてください。

Windows 専用サーバーバイナリで Steam オンラインサービスの起動に失敗する問題がよくあります。これはパッケージングの不具合が原因です。エラーが Steam 関連の場合は、ルートディレクトリから以下のファイルを `../WS/Binaries/Win64` フォルダに移動してください：`steamclient64.dll`、`tier0_s64.dll`、`vstdlib_s64.dll`。その後、再度サーバーを起動すると正常に起動するはずです。
:::

これでゲーム内のマルチプレイヤーメニューから、サーバーの IP アドレスとポート 8777 を入力して直接接続できるようになります。

サーバーリストに表示させたい場合は、[サーバー設定](soulmask-configuration.md) ガイドを参考にして、**StartServer.bat** ファイルに適切な `-SteamServerName` パラメータを追加してください。保存後、再度バッチファイルを実行しましょう。

これで Windows 専用サーバーに Soulmask を無事インストールできました。

<InlineVoucher />