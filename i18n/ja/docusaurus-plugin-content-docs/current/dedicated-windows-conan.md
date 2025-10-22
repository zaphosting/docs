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

Windows専用サーバーを持っていて、そこにConan Exiles専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で専用サーバーに接続しよう。接続方法がわからなければ、[初期アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

:::note サーバーランチャーツール
SteamCMDの代わりに、Conan Exilesの開発者がWindowsで使える便利なサーバーランチャーを提供しているよ。これを使うとサーバー起動がもっと簡単になる。

使いたい場合は、[公式フォーラム投稿](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699)をチェックしてみてね。
:::

サーバーにアクセスしたら、必要な専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは例として `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、その `steamcmd` フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能や7zip、Winrarなどで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

あとは **steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは成功だよ。次のセクションでConan Exiles専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるようになっているよ。まずは何かする前に、`login anonymous` コマンドで匿名ユーザーとしてログインしよう。

ログインできたら、ファイルのダウンロードを始められるよ。

:::tip
任意で、`force_install_dir [パス]` コマンドを使ってインストール先ディレクトリを指定できるよ。例えば：
```
force_install_dir C:\Conan-Server
```
:::

次に、`app_update 443030` コマンドを実行してダウンロードを開始しよう。App ID **443030** は **Conan Exiles** のIDだよ。

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、我慢する価値あり！ :)
:::

ダウンロードが完了したら、サーバーファイルが保存されたディレクトリに移動しよう。ここで **StartServer.bat** を使ってサーバーを起動できるけど、先にポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。Powershellコマンドで簡単に設定する方法と、Windows Defenderファイアウォールの画面から設定する方法がある。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで **Powershell** を検索しよう。右クリックして **管理者として実行** するのを忘れずに。そうしないと権限不足で設定が反映されないよ。

:::info
必ず管理者モードでPowershellを起動してね。
:::

次に、以下のコマンドをコピーしてPowershellに貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

これでConan Exilesサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で **Windows ファイアウォールの詳細設定** を開こう。基本のWindowsファイアウォール画面を開いた場合は、**詳細設定**をクリックして必要な画面を表示してね。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Conan Exilesサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信: 7777, 25575
- UDP 受信・送信: 7777, 7778, 27015

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてみて。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーのIPアドレスで外部から接続できるようになるよ。アクセスする前に、次のセクションでサーバー設定を済ませるのがおすすめ。

## 設定

ここまででConan Exilesサーバーのセットアップは完了しているよ。さらに細かい設定は、サーバーディレクトリ内の設定ファイルで行えるよ。

まずは以下のディレクトリに移動しよう：
```
../Conan-Server/Engine/Config/Windows
```

ここにある **WindowsServerEngine.ini** ファイルが設定ファイルだよ。このファイルに特定のパラメータを追加して、いろんな設定を変更できる。

例えば、サーバー名、パスワード、管理者パスワードを設定するには、以下のように書き加えるよ：
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

詳しい設定項目は、[Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration)をチェックしてみてね。

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Conan Exilesサーバーのベースディレクトリに移動して、先ほど作成した **StartServer.bat** を実行してね。コマンドプロンプトでサーバーのコンソールが開き、起動が始まるよ。

ゲーム内のサーバーブラウザから、サーバーのIPアドレスとポート（デフォルトは7777）を入力して接続できるようになるよ。

## まとめ

おめでとう！これで専用サーバーにConan Exilesサーバーを無事インストール＆設定できたよ！もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />