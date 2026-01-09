---
id: dedicated-windows-enshrouded
title: "専用サーバー：Enshrouded 専用サーバー Windows セットアップ"
description: "Windows VPS または専用サーバーに Enshrouded 専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Windows VPS または専用サーバーを持っていて、そこに Enshrouded 専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Windows VPSでEnshrouded専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解が深まる？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり情報を吸収したい時もおすすめ！"/>

## 準備

まずは、リモートデスクトップ（RDP）でVPSに接続しよう。やり方がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、必要な専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは例として `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** ファイルを見つけて、それを `steamcmd` フォルダに移動してね。次に、右クリックしてWindowsの解凍機能か、.7zipやWinrarなどのアプリで解凍しよう。これで **steamcmd.exe** ファイルが展開されるはず。

あとは **steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは成功。次のセクションでEnshrouded専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：`login anonymous`

ログインできたら、ファイルのダウンロードを始められるよ。

:::tip
任意：サーバーのインストール先ディレクトリを指定したい場合は、`force_install_dir [パス]` コマンドを使ってね。`[パス]` はサーバー用に使いたいパスに置き換えて。例：
```
force_install_dir C:\Enshrouded-Server
```
:::

次に、`app_update 2278520` コマンドを実行するとダウンロードが始まるよ。App ID **2278520** は **Enshrouded** のアプリケーションIDだ。

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、我慢する価値あり！ :)
:::

ダウンロードが完了したら、サーバーファイルが保存されたディレクトリに移動しよう。ここで **enshrouded_server.exe** を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバーの設定をおすすめするよ。

### サーバーのポートフォワーディング

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。Powershellコマンドでやるのが簡単だけど、Windows Defender ファイアウォールの画面から設定することもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスを開いて **Powershell** を検索。右クリックして **管理者として実行** するのを忘れずに。権限がないと設定が反映されないよ。

:::info
必ず管理者モードでPowershellを起動してね。そうしないと設定が正しく適用されないことがあるよ。
:::

次に、以下のコマンドをPowershellにコピー＆ペーストして実行しよう：
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

これでEnshroudedサーバーが外部からアクセス可能になるために必要なファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で **Windows Defender ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは **詳細設定** をクリックして開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Enshroudedサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：15636-15637
- UDP 受信・送信：15636-15637

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。ゲームのメインメニューでキャラクターを選択し、**ゲームを探す** タブに行って **サーバーを追加** を押そう。ここでサーバーのIPアドレスとポート（デフォルトは15636）、サーバーパスワード（設定していれば）を入力すればOK。

:::tip
サーバーにパスワードを設定したり、細かい設定をしたい場合は、[サーバー設定](enshrouded-configuration.md)ガイドをチェックしてね。
:::

サーバーにアクセスする前に、まずは次のセクションで設定を済ませるのがおすすめだよ。

## 設定

ここまででEnshroudedサーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内にある設定ファイルでさらに調整できるよ。

まずは以下のディレクトリに移動しよう：
```
..EnshroudedServer/ (ルートディレクトリ)
```

ここに **enshrouded_server.json** という設定ファイルがあるよ。このファイルでサーバーのいくつかのパラメータを設定可能。利用できる設定項目や意味は、[サーバー設定](enshrouded-configuration.md)ガイドで詳しく解説しているから参考にしてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。Enshroudedサーバーのルートディレクトリに移動して、**enshrouded_server.exe** を実行すると起動プロセスが始まるよ。コマンドプロンプトでサーバーのコンソールが開き、起動が進む。

起動後は、ゲームの **ゲームを探す** タブから **サーバーを追加** を押して、サーバーのIPアドレスとポート（デフォルトは15636）を入力すれば直接接続できるよ。

これでWindows専用サーバーにEnshroudedを無事インストール完了！お疲れさま！