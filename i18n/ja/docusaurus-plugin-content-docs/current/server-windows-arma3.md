---
id: server-windows-arma3
title: "Arma 3 専用サーバー Windows セットアップ"
description: "WindowsサーバーにArma 3専用サーバーをセットアップして、スムーズなゲームプレイと管理を実現 → 今すぐチェック"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Windows VPS/専用サーバーを持っていて、そこにArma 3専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）でVPS/専用サーバーに接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成し、ここでは`steamcmd`と名付けるよ。ダウンロードフォルダから先ほどダウンロードした**steamcmd.zip**を見つけて、この`steamcmd`フォルダに移動しよう。次に、右クリックしてWindowsの解凍機能や7zip、Winrarなどで解凍してね。解凍すると**steamcmd.exe**ファイルができるはず。

あとは**steamcmd.exe**を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

**Loading Steam API.... OK**のメッセージが表示されたら、インストール完了。次のセクションでArma 3専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した**steamcmd.exe**のコマンドプロンプトでコマンドを実行できるようになるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを開始できるよ。

:::tip
任意で、インストール先ディレクトリを指定したい場合は以下のコマンドを使ってね。`[path]`はサーバーの設置場所に置き換えて。
```
force_install_dir C:\arma3-server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **233780**は**Arma 3**のIDだよ。
```
app_update 233780
```

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、我慢して待とう！ :)
:::

ダウンロードが完了したら、サーバーファイルが保存されたディレクトリに移動しよう。ここで**Arma 3_server.exe**を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、VPS/専用サーバーで使うポートのポートフォワーディング設定を変更する必要があるよ。Powershellコマンドで設定するのが簡単だけど、Windows Defenderファイアウォールの設定画面からもできる。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索して、右クリックから**管理者として実行**を選択しよう。管理者権限で実行しないと設定が反映されないことがあるから注意してね。

:::info
必ず管理者モードでPowershellを起動しよう。そうしないと設定が正しく適用されないよ。
:::

次に、以下のコマンドをコピーしてPowershellに貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

これでArma 3サーバーが外部からアクセスできるように必要なファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索機能で**Windows ファイアウォールの詳細設定**を開こう。基本のファイアウォール画面からは**詳細設定**をクリックして開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Arma 3サーバー用に新しいルールを作成しよう。受信ルールと送信ルールの両方で以下のプロトコルとポートを追加してね：
- UDP 受信・送信：2302～2306

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーのIPアドレスを使って外部から接続できるようになるよ。ゲームのメインメニューでキャラクターを選択し、**ゲームを探す**タブから**サーバーを追加**を押して、サーバーのIPアドレスとポート（デフォルトは2302）、パスワード（設定していれば）を入力しよう。

アクセス前に、次のセクションでサーバー設定を済ませるのがおすすめだよ。

## 設定

ここまででArma 3サーバーのセットアップは完了。サーバーのディレクトリ内にある設定ファイルを編集して、さらに細かい設定ができるよ。

まずは以下のディレクトリに移動しよう：
```
C:\arma3-Server
```

ここに**server.cfg**という設定ファイルがあるよ。このファイルでサーバーの各種パラメータを調整できるんだ。

## サーバーの起動と接続

いよいよサーバーを起動しよう。ゲームのメインディレクトリにある**arma3server_x64.exe**を実行してね。

これでサーバーコンソールが開き、起動プロセスが始まるよ。

プレイヤーは**Arma 3のサーバーブラウザ**から、サーバーのIPアドレスとデフォルトポート2302を使って接続できるよ。

## まとめ

おめでとう！これでVPS/専用サーバーに**Arma 3サーバー**を無事インストール＆設定できたよ！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />