---
id: dedicated-windows-avorion
title: "専用サーバー: Avorion 専用サーバー Windows セットアップ"
description: "Windows VPS に Avorion 専用サーバーをセットアップして、スムーズなゲームサーバー運用を始めよう → 今すぐチェック"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに Avorion 専用サーバーサービスをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Windows VPSでAvorion専用サーバーをセットアップする方法！" description="実際の動きを見たほうが理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり学びたい時も、最高の情報収集方法だよ！"/>
<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントのコマンドライン（CLI）版で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接 [こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) からもOK。

サーバー内の好きな場所に新しいフォルダを作成しよう。ここでは `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、この `steamcmd` フォルダに移動させてね。次に、右クリックして Windows の解凍機能や 7zip、Winrar などで解凍しよう。解凍すると **steamcmd.exe** ファイルができるはず。

**steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストール完了！次のセクションで Avorion 専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：`login anonymous`

ログインできたら、ファイルのダウンロードを始められるよ。

:::tip
任意で、インストール先のディレクトリを指定したい場合は、`force_install_dir [パス]` コマンドを使ってね。`[パス]` はサーバーに使いたいパスに置き換えて。例：
```
force_install_dir C:\Avorion-Server
```
:::

次に、`app_update 565060` コマンドを実行するとダウンロードが始まるよ。App ID **565060** は Avorion のアプリケーションIDだよ。

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが完了したら、サーバーファイルが保存されたディレクトリに移動しよう。ここで **server.bat** ファイルをコピーして、コピーしたファイルの名前を **startserver.bat** などに変更してね。この新しい `.bat` ファイルを使ってサーバーを起動し、次のセクションでサーバー設定の編集もできるよ。まずはポートフォワーディングとサーバーの設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。Powershell コマンドで設定するのが簡単だけど、Windows Defender ファイアウォールの設定画面からもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスを開いて **Powershell** を検索しよう。右クリックして **管理者として実行** するのを忘れずに。そうしないと権限不足で設定が反映されないよ。

:::info
必ず管理者モードで Powershell を実行してね。そうしないと設定が正しく適用されないことがあるよ。
:::

次に、以下のコマンドをコピーして Powershell に貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

これで Avorion サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは **詳細設定** を押して開く必要があるかも。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Avorion サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信: 27000
- UDP 受信・送信: 27000, 27003, 27020, 27021

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。ゲーム内のメインメニューでキャラクターを選択し、**ゲームを探す** タブに行って **サーバーを追加** を押そう。ここでサーバーの IP アドレスとポート（デフォルトは 15636）、サーバーパスワード（設定していれば）を入力すれば接続できるよ。

まずは次のセクションでサーバー設定を済ませてからアクセスするのがおすすめ。

## 設定

ここまでで Avorion サーバーのセットアップは完了。先ほどコピーした **startserver.bat** ファイルをテキストエディタ（メモ帳など）で開いて、サーバーのパラメーターを設定しよう。

ワールド固有の設定を編集したい場合は、ギャラクシーセーブの中にある **server.ini** ファイルを編集する必要があるよ。Windows の AppData に保存されていて、以下のパスからアクセスできるよ。
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
このパスには、`CTRL` + `R` を同時押しして「ファイル名を指定して実行」ダイアログを開き、以下のパスを入力すると簡単にアクセスできるよ：
`%userprofile%/AppData/Roaming/Avorion/galaxies`
**OK** を押せばフォルダが開くよ。

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## サーバーの起動と接続

いよいよサーバーを起動しよう。Avorion サーバーのベースディレクトリに移動して、先ほど作成した **startserver.bat** を実行してね。コマンドプロンプトでサーバーのコンソールが開き、起動プロセスが始まるよ。ゲーム内のサーバーブラウザから、サーバーの IP とポート（デフォルトは 27000）を入力して直接接続できるようになるよ。

## まとめ

おめでとう！VPS に Avorion サーバーを無事インストール＆設定できたね！もし何か質問やトラブルがあれば、毎日対応しているサポートチームに気軽に連絡してね！

<InlineVoucher />