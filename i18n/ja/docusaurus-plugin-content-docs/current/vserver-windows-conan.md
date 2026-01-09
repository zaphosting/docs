---
id: vserver-windows-conan
title: "VPS: Conan Exiles 専用サーバー Windows セットアップ"
description: "Windows VPS に Conan Exiles 専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに Conan Exiles 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初期アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

:::note サーバーランチャーツール
SteamCMD を使う代わりに、Conan Exiles の開発者が Windows 用の便利なサーバーランチャーツールを提供しているよ。これを使うとサーバーの起動がもっと簡単になる。

使いたいなら、[公式フォーラム投稿](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699)をチェックしてみてね。
:::

サーバーにアクセスしたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントのコマンドライン版で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接 [こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバー内の好きな場所に新しいフォルダを作成しよう。ここでは `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、その `steamcmd` フォルダに移動させてね。次に、右クリックして Windows の解凍機能や 7zip、Winrar などで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

あとは **steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストール完了！次のセクションで Conan Exiles 専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるよ。まずはログインが必要なので、以下のコマンドで匿名ユーザーとしてログインしよう：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを開始しよう。

:::tip
任意で、インストール先ディレクトリを指定したい場合は以下のコマンドを使ってね。`[path]` をサーバーに使いたいパスに置き換えて。
```
force_install_dir C:\Conan-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **443030** は Conan Exiles の専用サーバーアプリケーションだよ。
```
app_update 443030
```

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが終わったら、サーバーファイルが保存されたディレクトリに移動しよう。ここで **StartServer.bat** を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。Powershell コマンドで簡単に設定する方法と、Windows Defender ファイアウォールの画面から設定する方法がある。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershell で設定" default>

Windows の検索ボックスで **Powershell** を検索しよう。右クリックして **管理者として実行** するのを忘れずに。そうしないと権限不足で設定が反映されないよ。

:::info
必ず管理者モードで Powershell を起動してね。そうしないと設定が正しく適用されないことがあるよ。
:::

次に、以下のコマンドをコピーして Powershell に貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

これで Conan Exiles サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは **詳細設定** をクリックして開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Conan Exiles サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：7777, 25575
- UDP 受信・送信：7777, 7778, 27015

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドも参考にしてみて。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。接続する前に、次のセクションでサーバー設定を済ませるのがおすすめ。

## 設定

ここまでで Conan Exiles サーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内の設定ファイルを編集して行うよ。

まずは以下のディレクトリに移動しよう：
```
../Conan-Server/Engine/Config/Windows
```

ここに **WindowsServerEngine.ini** という設定ファイルがある。このファイルに特定のパラメータを追加することで、様々な設定を変更できるよ。

例えば、サーバー名、パスワード、管理者パスワードを設定するには、以下のように書き加えよう：
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

詳しい設定項目は [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) をチェックしてみてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。Conan Exiles サーバーのベースディレクトリに移動して、先ほど作成した **StartServer.bat** を実行すると、コマンドプロンプトでサーバーコンソールが開き起動が始まるよ。

起動後は、ゲーム内のサーバーブラウザからサーバーの IP アドレスとポート（デフォルトは 7777）を入力して直接接続できるよ。

## まとめ

おめでとう！VPS に Conan Exiles 専用サーバーを無事インストール＆設定できたね！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />