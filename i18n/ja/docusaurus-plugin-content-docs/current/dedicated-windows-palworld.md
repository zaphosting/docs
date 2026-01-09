---
id: dedicated-windows-palworld
title: "専用サーバー: Palworld 専用サーバー Windows セットアップ"
description: "Windows VPSや専用サーバーにPalworld専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSや専用サーバーを持っていて、そこにPalworld専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Windows VPSでPalworld専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時も、最高の情報収集方法だよ！"/>



## 準備

まずは、リモートデスクトップ（RDP）でVPSに接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、必要な専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは`steamcmd`と名付けるよ。ダウンロードフォルダから先ほどダウンロードした**steamcmd.zip**を見つけて、この`steamcmd`フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能や7zip、Winrarなどのツールで解凍しよう。すると**steamcmd.exe**ファイルが展開されるはず。

あとは**steamcmd.exe**を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

**Loading Steam API.... OK**のメッセージが表示されたら、インストール完了！次のセクションでPalworld専用サーバーのインストールに進もう。

## インストール

インストールが終わったら、先ほど実行した**steamcmd.exe**のコマンドプロンプトでコマンドを実行できるようになるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：`login anonymous`

ログインできたら、ファイルのダウンロードを始められるよ。

:::tip
任意で、インストール先のディレクトリを指定したい場合は、`force_install_dir [パス]`コマンドを使ってね。`[パス]`はサーバー用に使いたいパスに置き換えて。例：
```
force_install_dir C:\Palworld-Server
```
:::

次に、`app_update 2394010`コマンドを実行するとダウンロードが始まるよ。App ID **2394010**は**Palworld**のアプリケーションIDだよ。

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが終わったら、サーバーファイルが保存されたディレクトリに移動しよう。ここで**PalServer.exe**を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング設定

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。Powershellコマンドで設定するのが簡単だけど、Windows Defenderファイアウォールの画面から設定することもできる。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスを開いて**Powershell**を検索。右クリックして**管理者として実行**を選んで、権限を確保しよう。

:::info
管理者モードでPowershellを実行しないと設定が正しく反映されないから注意してね。
:::

次に、以下のコマンドをPowershellにコピー＆ペーストして実行しよう：
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

これでPalworldサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索機能で**Windows Defender ファイアウォール 高度なセキュリティ**を開こう。基本のファイアウォール画面が開いたら、**詳細設定**を押して必要なウィンドウを開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Palworldサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：8211
- UDP 受信・送信：8211

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。つまり、サーバーのIPアドレスを使って接続できるってこと。サーバーリストの検索バーに`[あなたのIPアドレス]:8211`を入力して探してみてね。

アクセスする前に、次のセクションでサーバー設定を済ませるのがおすすめだよ。

## 設定

ここまででPalworldサーバーのセットアップは完了。サーバーのディレクトリ内にある設定ファイルを編集して、さらに細かい設定ができるよ。

まずは以下のディレクトリに移動しよう：
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

ここに**PalWorldSettings.ini**という設定ファイルがあるはず。このファイルでサーバーの様々なパラメータを調整できるよ。設定項目の詳細は[サーバー設定](palworld-configuration.md)ガイドをチェックしてね。

:::note
もしこのファイルが見当たらなければ、サーバーを**一度起動**して自動生成させてみて。もしくは`steamapps/common/PalServer/DefaultPalWorldSettings.ini`のデフォルト設定をコピーして使ってもOK。
:::

### Xboxモードを有効化

Palworld専用サーバーは、Microsoft Store/Xbox専用サーバーとして動作させることもできるようになったよ。これでXboxプレイヤーやMicrosoft Store版PCプレイヤーが同じサーバーで遊べるようになる。

:::note
Steam版とMicrosoft Store/Xbox版のクロスプレイはまだ非対応。サーバーはSteam用かMicrosoft Store/Xbox用のどちらかに設定する必要があるよ。
:::

以下のディレクトリにある**PalWorldSettings.ini**を開こう：
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

このファイルに以下の内容を追加してXboxモードを有効にしよう：
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

保存したら、次回サーバー起動時にXboxモードで動作するよ。

:::info
XboxコンソールではIPアドレスで直接接続できないから、Xboxで遊ぶなら専用サーバーを公開設定にする必要があるよ。

ルートディレクトリに新しく`StartServer.bat`ファイルを作成して、以下を記述しよう：`PalServer.exe -publiclobby`。`-publiclobby`オプションでコミュニティサーバーモードが有効になり、サーバーリストに表示されるようになるよ。

サーバー名も見つけやすいものに設定しよう。設定方法は[サーバー設定](palworld-configuration.md)ガイドを参考にしてね。
:::

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Windows専用サーバーにまだ入っていなければ、[DirectXランタイム](https://www.microsoft.com/en-gb/download/details.aspx?id=35)のインストールが必要かも。

Palworldサーバーのルートディレクトリに移動して、**PalServer.exe**を実行しよう。コマンドプロンプトでサーバーのコンソールが開き、起動処理が始まるよ。問題なく起動すれば、サーバーリストに表示されるはず。もしくはサーバーリストの検索バーに`[あなたのIPアドレス]:8211`を入力して直接接続もできるよ。

これでWindows専用サーバーにPalworldを無事インストール完了！お疲れさま！