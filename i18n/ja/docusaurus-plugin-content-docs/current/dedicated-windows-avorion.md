---
id: dedicated-windows-avorion
title: "専用サーバー: Avorion 専用サーバー Windows セットアップ"
description: "Windows VPSにAvorion専用サーバーをセットアップして、スムーズなゲームサーバーホスティングを実現しよう → 今すぐチェック"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSを持っていて、そこにAvorion専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Windows VPSでAvorion専用サーバーをセットアップする方法！" description="実際に動いているのを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり学びたい時も、どっちもOK！"/>

## 準備

まずは、リモートデスクトップ（RDP）でVPSに接続しよう。やり方がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン版（CLI）**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作ろう。ここでは`steamcmd`と名付けるよ。ダウンロードフォルダから先ほどダウンロードした**steamcmd.zip**を見つけて、その`steamcmd`フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能か、7zipやWinrarなどのアプリで解凍しよう。すると**steamcmd.exe**ファイルが展開されるはず。

**steamcmd.exe**を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

**Loading Steam API.... OK**というメッセージが出たら、インストール完了！次のセクションでAvorion専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した**steamcmd.exe**のコマンドプロンプトでコマンドを打てるようになっているよ。まずはログインが必要。`login anonymous`コマンドで匿名ユーザーとしてログインしよう。

ログインできたら、ファイルのダウンロードを始められるよ。

:::tip
任意で、インストール先のディレクトリを指定したい場合は、`force_install_dir [パス]`コマンドを使ってね。`[パス]`はサーバーに使いたいフォルダのパスに置き換えて。例：
```
force_install_dir C:\Avorion-Server
```
:::

次に、`app_update 565060`コマンドを実行するとダウンロードが始まるよ。App ID **565060**はAvorionのアプリケーションIDだよ。

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが終わったら、サーバーファイルがあるフォルダに移動しよう。ここで**server.bat**ファイルをコピーして、コピーしたファイル名を**startserver.bat**などに変更してね。この新しい.batファイルを使ってサーバーを起動し、次のセクションでサーバー設定の編集もできるよ。まずはポート開放とサーバー設定を済ませるのがおすすめ。

### サーバーのポート開放

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。Powershellコマンドでやるのが簡単だけど、Windows Defenderファイアウォールの画面から設定することもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索して、右クリックから**管理者として実行**を選んで起動しよう。権限が必要だから必ず管理者モードでね。

:::info
管理者モードで実行しないと設定が正しく反映されないことがあるよ。
:::

次に、以下のコマンドをコピーしてPowershellに貼り付けて実行してね：
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

これでAvorionサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows ファイアウォールの詳細設定**を開こう。基本のファイアウォール画面が開いたら、**詳細設定**をクリックして必要なウィンドウを開いてね。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Avorionサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：27000
- UDP 受信・送信：27000, 27003, 27020, 27021

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてね。

</TabItem>
</Tabs>

これでルール追加完了！サーバーのIPアドレスを使って接続できるようになるよ。ゲームのメインメニューでキャラを選んだら、**ゲームを探す**タブに行って**サーバーを追加**を押そう。ここでサーバーのIPとポート（デフォルトは15636）、パスワード（設定していれば）を入力してね。

サーバーにアクセスする前に、まずは次のセクションで設定を済ませるのがおすすめ。

## 設定

ここまででAvorionサーバーのセットアップは完了。先ほどコピーした**startserver.bat**ファイルをテキストエディタ（メモ帳など）で開いて、サーバーのパラメータを編集しよう。

ワールド固有の設定を編集したい場合は、ギャラクシーセーブの**server.ini**ファイルを編集する必要があるよ。WindowsのAppDataに保存されているから、以下のパスからアクセスしてね。
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
このパスには、`CTRL` + `R`を同時押しして「ファイル名を指定して実行」を開き、以下を入力すると簡単にアクセスできるよ：
```
%userprofile%/AppData/Roaming/Avorion/galaxies
```
OKを押せばフォルダが開くよ。

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Avorionサーバーのベースディレクトリに移動して、先ほど作成した**startserver.bat**を実行してね。コマンドプロンプトでサーバーのコンソールが開き、起動が始まるよ。ゲーム内のサーバーブラウザから、サーバーのIPとポート（デフォルトは27000）を入力して直接接続できるようになるよ。

## まとめ

おめでとう！これでVPSにAvorionサーバーのインストールと設定が完了したよ！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！