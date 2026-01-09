---
id: vserver-windows-soulmask
title: "VPS: Soulmask 専用サーバー Windows セットアップ"
description: "Windows VPS または専用サーバーに Soulmask 専用サーバーをインストールして快適なゲームプレイを実現 → 今すぐチェック"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS または専用サーバーをお持ちで、そこに Soulmask 専用サーバーをインストールしたいですか？ここがまさにその場所です。このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説します。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）を使って VPS に接続しましょう。接続方法がわからない場合は、[初期アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてください。

サーバーにアクセスしたら、必要な専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップする必要があります。SteamCMD は Steam クライアントの **コマンドライン（CLI）版** で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールです。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接 [こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からダウンロードしてください。

サーバー内の任意の場所に新しいフォルダを作成します。ここでは例として `steamcmd` と名付けます。ダウンロードフォルダにある **steamcmd.zip** ファイルをこの `steamcmd` フォルダに移動してください。次に、右クリックして Windows の解凍機能や 7zip、Winrar などのアプリで解凍します。解凍後、**steamcmd.exe** ファイルが生成されます。

**steamcmd.exe** を実行し、インストールが完了するまで待ちましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

「**Loading Steam API.... OK**」というメッセージが表示されたら、インストールは正常に完了しています。次のセクションで Soulmask 専用サーバーのインストールを始めましょう。

## インストール

インストール後、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるようになります。まずはログインが必要です。匿名ユーザーでログインするには、以下のコマンドを入力してください：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを開始しましょう。

:::tip
任意で、インストール先ディレクトリを指定したい場合は、以下のコマンドを使ってください。`[path]` をサーバーに使いたいパスに置き換えます。例：
```
force_install_dir C:\Soulmask-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始します：
```
app_update 3017310
```
App ID **3017310** は **Soulmask** のアプリケーションIDです。

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
ダウンロードが完了するまで中断しないでください。少し時間がかかることもありますが、焦らず待ちましょう！ :)
:::

ダウンロードが完了したら、ダウンロード先フォルダに移動してください。ここにサーバーファイルがすべてあります。**StartServer.bat** を使ってサーバーを起動できますが、まずはポートフォワーディングとサーバー設定を行うことをおすすめします。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使用するポートのポートフォワーディング設定を変更する必要があります。PowerShell コマンドで設定する方法が簡単ですが、Windows Defender ファイアウォールの設定画面からも設定可能です。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellで設定" default>

Windowsの検索ボックスを開き、**PowerShell** を検索してください。右クリックして **管理者として実行** を選択し、権限を確保してから実行しましょう。

:::info
管理者モードで PowerShell を実行しないと設定が正しく反映されないので注意してください。
:::

次に、以下のコマンドを PowerShell にコピー＆ペーストして実行します：
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

これで Soulmask サーバーが外部からアクセス可能になるために必要なファイアウォールルールが自動で作成されます。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索機能で **Windows Defender ファイアウォールの詳細設定** を開きます。基本のファイアウォール画面を開いた場合は、**詳細設定** をクリックして必要な画面を表示してください。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Soulmask サーバー用に新しいルールを作成します。以下のプロトコルとポートで、受信と送信の両方のルールを追加してください：
- TCP 受信・送信：8777, 27015
- UDP 受信・送信：8777, 27015

設定方法がわからない場合は、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてください。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になります。ゲームのメインメニューからマルチプレイヤーに進み、「IP直接接続」を選択して、サーバーの IP アドレスと設定したポート（デフォルトは 3724）を入力して接続できます。

サーバーにアクセスする前に、次のセクションで設定を行うことをおすすめします。

## 設定

ここまでで Soulmask サーバーのセットアップは完了しています。さらに細かい設定は、ルートディレクトリにある **StartServer.bat** ファイルや、`../WS/Saved/Config/WindowsServer` フォルダ内の **GameUserSettings.ini** ファイルを編集して行えます。

利用可能なパラメータや設定オプションは、[サーバー設定ガイド](soulmask-configuration.md) を参照してください。

## サーバーの起動と接続

いよいよサーバーを起動しましょう。ルートディレクトリに移動し、**StartServer.bat** を実行すると、コマンドプロンプトでサーバーのコンソールが開き、起動処理が始まります。

:::tip
もしサーバーが起動せず、コマンドプロンプトがすぐに閉じてしまう場合は、`../WS/Saved/Logs` フォルダ内の最新ログを確認して原因を調べてください。

Windows 専用サーバーバイナリで Steam オンラインサービスの起動に失敗する問題がよくあります。エラーが Steam 関連の場合は、ルートディレクトリから以下のファイルを `../WS/Binaries/Win64` フォルダに移動してください：`steamclient64.dll`、`tier0_s64.dll`、`vstdlib_s64.dll`。その後、再度サーバーを起動すれば正常に起動するはずです。
:::

ゲーム内のマルチプレイヤーメニューで、サーバーの IP アドレスとポート 8777 を入力して直接接続できます。

サーバーリストに表示させたい場合は、[サーバー設定ガイド](soulmask-configuration.md) を参考にして、**StartServer.bat** に適切な `-SteamServerName` パラメータを追加してください。保存後、バッチファイルを再度実行しましょう。

これで Windows 専用サーバーに Soulmask を無事インストールできました！

## まとめ

おめでとうございます！VPS に Soulmask サーバーを無事インストール・設定できました。もし質問や問題があれば、いつでもサポートチームにお問い合わせください。毎日サポートしています！

<InlineVoucher />