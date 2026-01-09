---
id: dedicated-windows-conan
title: "専用サーバー: Conan Exiles 専用サーバー Windows セットアップ"
description: "Windows専用サーバーにConan Exiles専用サーバーをセットアップして、快適なゲームプレイとサーバー管理を実現しよう → 今すぐチェック"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows専用サーバーを持っていて、そこにConan Exiles専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

## 準備

まずは、リモートデスクトップ（RDP）で専用サーバーに接続しよう。接続方法がわからなければ、[初期アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

:::note サーバーランチャーツール
SteamCMDの代わりに、Conan Exilesの開発者がWindowsで使える便利なサーバーランチャーを提供しているよ。これを使うとサーバー起動がもっと簡単になる。

使いたい場合は、[公式フォーラム投稿](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699)をチェックしてみてね。
:::

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン版（CLI）**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作ろう。ここでは例として `steamcmd` と名付けるよ。ダウンロードフォルダから**steamcmd.zip**を見つけて、その中身を`steamcmd`フォルダに移動。右クリックでWindowsの解凍機能を使うか、7zipやWinrarなどのツールで解凍しよう。すると**steamcmd.exe**ファイルが展開されるはず。

**steamcmd.exe**を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

「**Loading Steam API.... OK**」のメッセージが出たら、インストール完了。次のセクションでConan Exiles専用サーバーのインストールに進もう。

## インストール

インストール後、先ほどの**steamcmd.exe**のコマンドプロンプトでコマンドを実行できるようになるよ。まずはログインが必要。`login anonymous`コマンドで匿名ユーザーとしてログインしよう。

ログインできたら、ファイルのダウンロードを開始できる。

:::tip
任意で、インストール先ディレクトリを指定したい場合は、`force_install_dir [パス]`コマンドを使ってね。例えば：
```
force_install_dir C:\Conan-Server
```
:::

次に、`app_update 443030`コマンドを実行するとダウンロードが始まるよ。App ID **443030**は**Conan Exiles**のIDだよ。

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが終わったら、サーバーファイルがあるディレクトリに移動しよう。ここで**StartServer.bat**を使ってサーバーを起動できるけど、先にポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのフォワーディング設定が必要だよ。Powershellコマンドで簡単に設定できる方法と、Windows Defenderファイアウォールの画面から設定する方法がある。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索して、右クリックから**管理者として実行**を選んで起動しよう。管理者権限がないと設定が反映されないから注意してね。

:::info
必ず管理者モードでPowershellを起動してね。そうしないと設定が正しく適用されないよ。
:::

以下のコマンドをコピーしてPowershellに貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

これでConan Exilesサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows Firewall Settings with Advanced Security**を開こう。基本のWindowsファイアウォール画面からは、**詳細設定**をクリックして必要な画面を開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Conan Exilesサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方のルールを追加してね：
- TCP 受信・送信: 7777, 25575
- UDP 受信・送信: 7777, 7778, 27015

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーはIPアドレス経由でアクセス可能になるよ。アクセス前に次のセクションでサーバー設定を済ませるのがおすすめ。

## 設定

ここまででConan Exilesサーバーのセットアップは完了。さらに細かい設定はサーバーディレクトリ内の設定ファイルで行えるよ。

まずは以下のディレクトリに移動しよう：
```
../Conan-Server/Engine/Config/Windows
```

ここにある**WindowsServerEngine.ini**ファイルが設定ファイル。ここに特定のパラメータを追加して、いろんな設定をカスタマイズできるよ。

例えば、サーバー名、パスワード、管理者パスワードを設定するには、以下のように書き込む：
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

詳しい設定項目は[Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration)をチェックしてみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Conan Exilesサーバーのベースディレクトリに移動して、先ほど作成した**StartServer.bat**を実行すると起動が始まるよ。コマンドプロンプトでサーバーコンソールが開き、起動処理が進む。

ゲーム内のサーバーブラウザから、サーバーのIPアドレスとポート（デフォルトは7777）を入力して直接接続できるよ。

## まとめ

おめでとう！これで専用サーバーにConan Exilesサーバーを無事インストール＆設定できたよ！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！