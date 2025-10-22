---
id: dedicated-windows-palworld
title: "専用サーバー: Palworld 専用サーバー Windows セットアップ"
description: "Windows VPSや専用サーバーにPalworld専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSや専用サーバーを持っていて、そこにPalworld専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Windows VPSでPalworld専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時もこれでバッチリ！"/>

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）でVPSに接続しよう。やり方がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてね。

サーバーにアクセスできたら、必要な専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップしよう。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成し、ここでは`steamcmd`と名付けるよ。ダウンロードフォルダから先ほどダウンロードした**steamcmd.zip**を見つけて、この`steamcmd`フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能や7zip、Winrarなどで解凍しよう。すると**steamcmd.exe**ファイルが展開されるはず。

あとは**steamcmd.exe**を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

**Loading Steam API.... OK**のメッセージが表示されたらインストール完了！次のセクションでPalworld専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した**steamcmd.exe**のコマンドプロンプトでコマンドを打てるようになっているよ。まずは何かする前に**anonymous**ユーザーでログインしよう。コマンドはこれ：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを始めよう。

:::tip
任意で、インストール先のディレクトリを指定したい場合は、次のコマンドを使ってね。`[path]`はサーバーに使いたいパスに置き換えて。
```
force_install_dir C:\Palworld-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **2394010**は**Palworld**のアプリケーションIDだよ。
```
app_update 2394010
```

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが終わったら、サーバーファイルがあるディレクトリに移動しよう。ここで**PalServer.exe**を使ってサーバーを起動できるけど、まずはポートフォワーディングとサーバー設定を済ませるのがおすすめ。

### サーバーのポートフォワーディング

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。簡単なのはPowershellコマンドを使う方法だけど、Windows Defenderファイアウォールの設定画面からもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索しよう。右クリックして**管理者として実行**を選んで、権限を確保してね。

:::info
管理者モードでPowershellを起動しないと設定が正しく反映されないから注意！
:::

次に、以下のコマンドをコピーしてPowershellに貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

これでPalworldサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows ファイアウォールの詳細設定**を開こう。基本のファイアウォール画面が開いたら、**詳細設定**をクリックして必要なウィンドウを開いてね。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Palworldサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方のルールを追加してね：
- TCP 受信・送信：8211
- UDP 受信・送信：8211

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドを参考にしてね。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。サーバーリストの検索バーに`[あなたのIPアドレス]:8211`を入力して接続できるか試してみて。

アクセス前に、次のセクションでサーバー設定を済ませるのがおすすめだよ。

## 設定

ここまででPalworldサーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内の設定ファイルでさらに細かく調整できるよ。

まずは以下のディレクトリに移動しよう：
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

ここに**PalWorldSettings.ini**という設定ファイルがあるはず。このファイルでサーバーの様々なパラメータを設定できるよ。詳しいオプションは[サーバー設定](palworld-configuration.md)ガイドをチェックしてね。

:::note
もしファイルが見当たらなければ、サーバーを**一度起動**して自動生成させてね。もしくは`steamapps/common/PalServer/DefaultPalWorldSettings.ini`のデフォルト設定をコピーして使ってもOK。
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

保存してサーバーを再起動すればXboxモードで起動するよ。

:::info
XboxコンソールはIPアドレスで直接接続できないから、Xboxで遊ぶなら専用サーバーを公開設定にする必要があるよ。

ルートディレクトリに`StartServer.bat`ファイルを作成し、以下を記述してね：
```
PalServer.exe -publiclobby
```
`-publiclobby`オプションでコミュニティサーバーモードが有効になり、サーバーリストに表示されるようになるよ。

サーバー名もわかりやすく設定しよう。設定方法は[サーバー設定](palworld-configuration.md)ガイドを参照してね。
:::

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Windows専用サーバーにまだ入っていなければ、[DirectXランタイム](https://www.microsoft.com/en-gb/download/details.aspx?id=35)のインストールが必要かも。

Palworldサーバーのベースディレクトリに移動して、**PalServer.exe**を実行しよう。コマンドプロンプトでサーバーのコンソールが開き、起動が始まるよ。問題なければサーバーリストに表示されるはず。もしくはサーバーリストの検索バーに`[あなたのIPアドレス]:8211`を入力して直接接続してみて。

これでWindows専用サーバーにPalworldを無事インストール完了！

<InlineVoucher />