---
id: vserver-windows-avorion
title: "VPS: Avorion 専用サーバー Windows セットアップ"
description: "Windows VPS に Avorion 専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに Avorion 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Windows VPSでAvorion専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり情報を吸収したい時もぜひ！"/>
<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントのコマンドライン版で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。公式 Valve サイトから [SteamCMD をダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD) するか、直接 [こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、この `steamcmd` フォルダに移動させてね。次に、右クリックして Windows の解凍機能か、7zip や Winrar などのアプリで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

**steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストールは成功。次のセクションで Avorion 専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを打てるようになっているよ。まずはログインが必要。`login anonymous` コマンドで匿名ユーザーとしてログインしよう。

ログインできたら、ファイルのダウンロードを開始できるよ。

:::tip
任意で、インストール先ディレクトリを指定したい場合は、`force_install_dir [パス]` コマンドを使ってね。例えば：
```
force_install_dir C:\Avorion-Server
```
:::

次に、`app_update 565060` コマンドを実行するとダウンロードが始まるよ。App ID **565060** は Avorion のアプリケーションIDだ。

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが完了したら、サーバーファイルが保存されたフォルダに移動しよう。ここで **server.bat** ファイルをコピーして、コピーしたファイル名を **startserver.bat** などに変更してね。この新しい `.bat` ファイルを使ってサーバーを起動し、次のセクションでサーバー設定の編集もできるよ。まずはポートフォワーディングの設定をおすすめする。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。PowerShell コマンドで設定するのが簡単だけど、Windows Defender ファイアウォールの設定画面からもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShell で設定" default>

Windows の検索ボックスで **PowerShell** を検索しよう。右クリックして **管理者として実行** するのを忘れずに。権限がないと設定が反映されないよ。

:::info
必ず管理者モードで PowerShell を起動してね。そうしないと設定が正しく適用されないことがあるよ。
:::

次に、以下のコマンドを PowerShell にコピー＆ペーストして実行しよう：
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

これで Avorion サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは **詳細設定** をクリックして開く必要があるかも。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Avorion サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：27000
- UDP 受信・送信：27000, 27003, 27020, 27021

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーの IP アドレスを使って外部から接続できるようになるよ。アクセス前に、次のセクションでサーバー設定を済ませておくのがおすすめ。

## 設定

ここまでで Avorion サーバーのセットアップは完了。先ほどコピーした **startserver.bat** ファイルをテキストエディタ（メモ帳など）で開いて、サーバーのパラメータを設定しよう。

ワールド固有の設定を編集したい場合は、ギャラクシーセーブの **server.ini** ファイルを編集する必要があるよ。Windows の AppData フォルダ内に保存されている。パスは以下の通り：
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
このパスには、`CTRL` + `R` を同時押しして「ファイル名を指定して実行」ダイアログを開き、以下を入力すると簡単にアクセスできるよ：
`%userprofile%/AppData/Roaming/Avorion/galaxies`  
あとは **OK** を押すだけ。

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Avorion サーバーのベースディレクトリに移動して、先ほど作成した **startserver.bat** を実行してね。コマンドプロンプトでサーバーのコンソールが開き、起動処理が始まるよ。ゲーム内のサーバーブラウザから、サーバーの IP アドレスとポート（デフォルトは 27000）を入力して接続できるようになるよ。

## まとめ

おめでとう！VPS に Avorion サーバーを無事インストール＆設定できたね！もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日サポートしてるよ！

<InlineVoucher />