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

Windows VPS または専用サーバーを持っていて、そこに Soulmask 専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初期アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントの **コマンドライン（CLI）版** で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは `steamcmd` と名付けるよ。ダウンロードフォルダにある **steamcmd.zip** を見つけて、それを `steamcmd` フォルダに移動。次に、右クリックして Windows の解凍機能や 7zip、Winrar などで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

あとは **steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストール完了！次のセクションで Soulmask 専用サーバーのインストールに進もう。

## インストール

インストール後、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるようになるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：`login anonymous`

ログインできたら、ファイルのダウンロードを開始できるよ。

:::tip
任意：サーバーのインストール先ディレクトリを指定したい場合は、`force_install_dir [パス]` コマンドを使って `[パス]` を希望のパスに置き換えてね。例：
```
force_install_dir C:\Soulmask-Server
```
:::

次に、`app_update 3017310` コマンドを実行するとダウンロードが始まるよ。App ID **3017310** は **Soulmask** のアプリケーションIDだよ。

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、我慢する価値あり！ :)
:::

ダウンロードが完了したら、ダウンロード先フォルダに移動しよう。ここにサーバーファイルが全部あるよ。**StartServer.bat** を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。PowerShell コマンドで設定する方法（簡単）か、Windows Defender ファイアウォールの設定画面から通常の方法で設定できるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスを開いて **PowerShell** を検索。右クリックして **管理者として実行** しよう。これで権限が正しく付与されて設定が反映されるよ。

:::info
管理者モードで PowerShell を実行しないと設定が正しく適用されないから注意してね。
:::

次に、以下のコマンドを PowerShell にコピー＆ペーストして実行しよう：
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

これで Soulmask サーバーが外部からアクセス可能になるために必要なファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で **Windows Firewall Settings with Advanced Security** を開こう。基本の Windows ファイアウォール画面が開いたら、**詳細設定** をクリックして必要なウィンドウを開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Soulmask サーバー用に新しいルールを作成しよう。受信と送信のルールをそれぞれ以下のプロトコルとポートで追加してね：
- TCP 受信・送信：8777, 27015
- UDP 受信・送信：8777, 27015

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。ゲームのメインメニューからマルチプレイヤーを開き、「IPダイレクト接続」を選択して、サーバーの IP アドレスと設定したポート（デフォルトは 3724）を入力すれば接続できるよ。

アクセス前に、次のセクションでサーバー設定を済ませるのがおすすめ。

## 設定

ここまでで Soulmask サーバーのセットアップは完了。さらに細かい設定は、ルートディレクトリにある **StartServer.bat** ファイルや、`../WS/Saved/Config/WindowsServer` フォルダ内の **GameUserSettings.ini** ファイルを編集して行えるよ。

利用可能なパラメータや設定オプションは、[サーバー設定](soulmask-configuration.md) ガイドをチェックしてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。ルートディレクトリに移動して **StartServer.bat** を実行すると、コマンドプロンプトでサーバーのコンソールが開き、起動が始まるよ。

:::tip
もしサーバーが起動しなくてコマンドプロンプトがすぐ閉じてしまう場合は、`../WS/Saved/Logs` フォルダの最新ログを確認して原因を探ってみて。

Windows 専用サーバーバイナリで Steam オンラインサービスの起動失敗がよくある問題としてあるよ。もし Steam 関連のエラーが出たら、ルートディレクトリから以下のファイルを `../WS/Binaries/Win64` フォルダに移動してみて：`steamclient64.dll`、`tier0_s64.dll`、`vstdlib_s64.dll`。その後、再度サーバーを起動してみてね。
:::

これでゲーム内のマルチプレイヤーメニューからサーバーの IP アドレスとポート 8777 を入力して直接接続できるよ。

サーバーリストに表示させたい場合は、[サーバー設定](soulmask-configuration.md) ガイドを参考にして、**StartServer.bat** に適切な `-SteamServerName` パラメータを追加しよう。保存したらバッチファイルを再実行してね。

これで Windows 専用サーバーに Soulmask を無事インストール完了だよ！