---
id: vserver-windows-palworld
title: "VPS: Palworld 専用サーバー Windows セットアップ"
description: "Windows VPSにPalworld専用サーバーをセットアップして、スムーズなゲームプレイホスティングを実現しよう → 今すぐチェック"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSを持っていて、そこにPalworld専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="Windows VPSでPalworld専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり情報を吸収したい時もおすすめ！"/>
<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）でVPSに接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは例として`steamcmd`と名付けるよ。ダウンロードフォルダから先ほどダウンロードした**steamcmd.zip**を見つけて、その`steamcmd`フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能か、.7zipやWinrarなどのアプリで解凍しよう。すると**steamcmd.exe**ファイルが展開されるはず。

あとは**steamcmd.exe**を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

**Loading Steam API.... OK**のメッセージが表示されたら、インストールは成功。次のセクションでPalworld専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した**steamcmd.exe**のコマンドプロンプトでコマンドを実行できるよ。まずは何かする前に、**anonymous**ユーザーでログインしよう。コマンドは以下：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを始めよう。

:::tip
任意で、インストール先のディレクトリを指定したい場合は、以下のコマンドを使ってね。`[path]`はサーバーの設置場所に置き換えて。
```
force_install_dir C:\Palworld-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。
```
app_update 2394010
```
App ID **2394010**は**Palworld**のアプリケーションIDだよ。

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

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

Windowsの検索ボックスで**Powershell**を検索しよう。右クリックして**管理者として実行**を選ぶのを忘れずに。そうしないと権限不足で設定が反映されないよ。

:::info
必ず管理者モードでPowershellを起動してね。そうしないと設定が正しく適用されないことがあるよ。
:::

次に、以下のコマンドをPowershellにコピー＆ペーストして実行しよう。
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

これでPalworldサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows ファイアウォールの詳細設定**を開こう。基本のWindowsファイアウォール画面を開いた場合は、**詳細設定**をクリックして必要なウィンドウを表示してね。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Palworldサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：8211
- UDP 受信・送信：8211

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。サーバーのIPアドレスとポートを使って接続できるようになるから、サーバーブラウザの検索欄に以下のように入力してみてね：
```
[your_ip_address]:8211
```

アクセス前に、次のセクションでサーバー設定を済ませるのがおすすめだよ。

## 設定

ここまででPalworldサーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内の設定ファイルを編集して行うよ。

まずは以下のディレクトリに移動しよう：
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

ここに**PalWorldSettings.ini**という設定ファイルがあるはず。このファイルでサーバーの様々なパラメータを調整できるよ。設定項目の詳細は[サーバー設定](palworld-configuration.md)ガイドをチェックしてね。

:::note
もしファイルが見当たらなければ、サーバーを**一度起動**して自動生成させてね。もしくは`steamapps/common/PalServer/DefaultPalWorldSettings.ini`のデフォルト設定をコピーして使うこともできるよ。
:::

### Xboxモードを有効化

Palworld専用サーバーは、Microsoft Store/Xbox専用サーバーとして動作させることもできるようになったよ。これでXboxプレイヤーやMicrosoft StoreのPCプレイヤーが同じサーバーで遊べるようになる。

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

ルートディレクトリに`StartServer.bat`ファイルを作成して、以下の内容を入れてね：
```
PalServer.exe -publiclobby
```
`-publiclobby`オプションでコミュニティサーバーモードが有効になり、サーバーリストに表示されるようになるよ。

サーバー名も見つけやすいものに設定しよう。設定方法は[サーバー設定](palworld-configuration.md)ガイドを参考にしてね。
:::

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Windows VPSにまだ入っていなければ、[DirectXランタイム](https://www.microsoft.com/en-gb/download/details.aspx?id=35)のインストールが必要かも。

Palworldサーバーのベースディレクトリに移動して、**PalServer.exe**を実行しよう。コマンドプロンプトでサーバーのコンソールが開き、起動処理が始まるよ。問題なく起動すれば、サーバーリストに表示されるはず。もしくは、サーバーブラウザの検索欄に以下を入力して直接接続もできるよ：
```
[your_ip_address]:8211
```

## まとめ

おめでとう！これでVPSにPalworld専用サーバーを無事インストール＆設定できたよ！もし質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />