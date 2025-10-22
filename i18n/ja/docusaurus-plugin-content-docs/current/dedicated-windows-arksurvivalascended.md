---
id: dedicated-windows-arksurvivalascended
title: "専用サーバー: ARK Survival Ascended 専用サーバー Windows セットアップ"
description: "Windows VPS または専用サーバーに ARK: Survival Ascended 専用サーバーを簡単にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Windows VPS または専用サーバーを持っていて、そこに ARK: Survival Ascended 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="ARK: Survival Ascended 専用サーバー Windows VPS セットアップ" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時も、どっちもOK！"/>

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。やり方がわからなければ、[初回アクセス (RDP)](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップする必要があるよ。SteamCMD は Steam クライアントの **コマンドライン版（CLI）** で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだ。公式 Valve サイトから [SteamCMD をダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD) するか、直接 [こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) からもOK。

サーバーのどこかに新しいフォルダを作ろう。ここでは `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、その `steamcmd` フォルダに移動させてね。次に、右クリックして Windows の解凍機能や 7zip、Winrar などで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

**steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストール完了！次のセクションで ARK: Survival Ascended 専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを開始できるよ。

:::tip
任意で、インストール先ディレクトリを指定したい場合は、以下のコマンドを使ってね。`[path]` はサーバー用に使いたいパスに置き換えて。
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **2430930** は **ARK: Survival Ascended 専用サーバー** のアプリケーションIDだよ。
```
app_update 2430930
```

![](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

### スタートアップファイルの作成

ダウンロードが完了したら、インストールしたディレクトリに移動して、以下のサブディレクトリを開こう：
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

ここで、専用サーバーを起動するためのスタートアップファイルを作成するよ。名前は `start-ark.bat` にしよう。まずはテキストドキュメントを作ってから、拡張子を `.bat` に変更してもOK。

:::info
ファイルエクスプローラーで「ファイル拡張子を表示」オプションを有効にして、正しい拡張子が使われているか確認してね。
:::

テキストエディタ（Notepad++ など）でファイルを開いて、以下の内容を貼り付けよう：
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

`[server_name]`、`[admin_password]`、`[max_players]` は自分の好きな値に置き換えてね。

もし一般プレイヤー用の参加パスワードも設定したいなら、上記コマンドに `?ServerPassword=[join_password]` を追加しよう。こうなるよ：
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

変数を設定してファイルを保存したら閉じてOK。

このスタートアップファイルを実行すると、サーバーはローカルの `127.0.0.1:7777` でアクセス可能になるよ。ただし、外部からアクセスできるようにするには Windows ファイアウォールのポート開放設定が必要だから、次のセクションで説明するね。

### サーバーのポート開放

サーバーを外部からアクセス可能にするには、専用サーバーが使うポートのポートフォワーディング設定を変更しよう。簡単なのは Powershell でコマンドを使う方法だけど、Windows Defender ファイアウォールの設定画面からもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershell で設定" default>

Windows の検索ボックスで **Powershell** を検索して、右クリックから **管理者として実行** しよう。管理者権限がないと設定が反映されないから注意！

:::info
必ず管理者モードで Powershell を起動してね。
:::

次に、以下のコマンドをコピーして Powershell に貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

これで Ark: Survival Ascended サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは「詳細設定」を押して開く必要があるかも。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Ark: Survival Ascended サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信: 27020
- UDP 受信・送信: 27015
- UDP 受信・送信: 7777-7778

設定方法がわからなければ、[ポートフォワーディング (ファイアウォール)](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

これでルールを追加したら、サーバーは外部からアクセス可能になるよ。ゲーム内コンソールで以下のコマンドを使って接続できる：
```
open [あなたのIPアドレス]:7777
```

アクセス前に、次のセクションでサーバー設定を調整するのがおすすめ！

## 設定

ここまでで Ark: Survival Ascended 専用サーバーのセットアップは完了。サーバーの設定は、サーバーディレクトリ内の2つの設定ファイルで細かく調整できるよ。

まずは以下のディレクトリに移動しよう：
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

ここにある **DefaultGameUserSettings.ini** と **GameUserSettings.ini** ファイルで、サーバーの様々なオプションや変数を編集できるよ。

:::warning[CROSSPLAY サポート]
2023年11月18日以降、サーバーオーナーは https://dev.epicgames.com/（または http://crl.r2m02.amazontrust.com/r2m02.crl）から取得できる証明書失効リストを手動でインストールする必要があるよ。ダウンロードした r2m02.crl ファイルは右クリックで「すべての証明書を次のストアに配置」を選び、「信頼されたルート証明機関」にインストールしよう。システムの再起動が必要な場合もある。

もし2023年11月18日以前に r2m02.cer 証明書をインストールしていてサーバーが表示されない場合は、その証明書をシステムから削除しないとサーバーが再び見えるようにならないよ。削除は（Windows + R）で certmgr.msc を開き、「信頼されたルート証明機関」内の Amazon RSA 2048 M02 を探して削除。certlm.msc でも同様に行ってね。最後にシステム再起動が必要になることもあるよ。
:::

## サーバーの起動と接続

いよいよサーバーを起動しよう。ただし、サーバーを正常に起動するには、Windows VPS に [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) をインストールしておく必要があるよ。

:::info
まだインストールしていない場合は、必ず [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) を先にインストールしてね。これがないとサーバーが起動しない可能性があるよ。
:::

インストールが済んだら、先ほど作成した **start-ark.bat** ファイルを実行しよう。

これでコマンドプロンプトにサーバーのコンソールが開き、起動プロセスが始まるよ。問題なく起動すれば、サーバーリストに表示されるはず。もしくはゲーム内コンソールで以下を実行して直接接続もできるよ：
```
open [あなたのIPアドレス]:7777
```

これで Windows 専用サーバーに Ark: Survival Ascended を無事インストール完了！

<InlineVoucher />