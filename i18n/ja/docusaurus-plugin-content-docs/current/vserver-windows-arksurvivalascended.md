---
id: vserver-windows-arksurvivalascended
title: "VPS: ARK Survival Ascended 専用サーバー Windows セットアップ"
description: "Windows VPS に ARK: Survival Ascended 専用サーバーをセットアップして、快適なゲームプレイとサーバー管理を実現 → 今すぐチェック"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Windows VPS を持っていて、そこに ARK: Survival Ascended 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="ARK: Survival Ascended Dedicated Server Setup on Windows VPS" description="実際の動きを見たほうが理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時もバッチリ！"/>
<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントのコマンドライン版で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバー内の好きな場所に新しいフォルダを作成し、ここでは `steamcmd` と名付けるよ。ダウンロードフォルダから **steamcmd.zip** を見つけて、この `steamcmd` フォルダに移動させてね。次に、右クリックしてWindowsの解凍機能や7zip、Winrarなどで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

**steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

「**Loading Steam API.... OK**」と表示されたらインストール完了。次のセクションで ARK: Survival Ascended 専用サーバーのインストールに進もう。

## インストール

インストール後は、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを開始できるよ。

:::tip
任意で、インストール先のディレクトリを指定したい場合は以下のコマンドを使ってね。`[path]` をサーバーに使いたいパスに置き換えて。
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **2430930** は **ARK: Survival Ascended 専用サーバー** のアプリケーションIDだよ。
```
app_update 2430930
```

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

### スタートアップファイルの作成

ダウンロードが完了したら、インストールしたディレクトリの以下のサブディレクトリに移動しよう：
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

ここで、専用サーバーを起動するためのスタートアップファイルを作成するよ。`start-ark.bat` という名前のファイルを作ろう。最初はテキストファイルを作成してから、拡張子を `.bat` に変更してもOK。

:::info
ファイルエクスプローラーで「ファイル拡張子を表示」オプションを有効にして、正しい拡張子が使われているか確認してね。
:::

テキストエディタ（Notepad++など）でファイルを開き、以下の内容を追加しよう：
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

`[server_name]`、`[admin_password]`、`[max_players]` は好きな値に置き換えてね。

もし一般プレイヤー用の参加パスワードも設定したい場合は、上記コマンドに `?ServerPassword=[join_password]` を追加してこうなるよ：
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

変数を設定してファイルを保存したら閉じてOK。

このスタートアップファイルを実行すると、サーバーはローカルの `127.0.0.1:7777` でアクセス可能になるよ。ただし、外部からアクセスできるようにするには Windows ファイアウォールのポート開放設定が必要で、次のセクションで説明するね。

### サーバーのポート開放

サーバーを外部からアクセス可能にするには、専用サーバーが使うポートのポートフォワーディング設定を変更しよう。Powershellコマンドで簡単に設定する方法と、Windows Defender ファイアウォールの画面から設定する方法があるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで **Powershell** を検索し、右クリックで **管理者として実行** しよう。管理者権限がないと設定が反映されないから注意してね。

:::info
必ず管理者モードで Powershell を起動してね。そうしないと設定が正しく適用されないよ。
:::

以下のコマンドをコピーして Powershell に貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

これで Ark: Survival Ascended サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windowsの検索で **Windows Defender ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは「詳細設定」をクリックして開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Ark: Survival Ascended サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方のルールを追加してね：
- TCP 受信・送信：27020
- UDP 受信・送信：27015
- UDP 受信・送信：7777-7778

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

これでサーバーが外部からアクセス可能になったよ。ゲーム内のコンソールを開いて、以下のコマンドでサーバーに接続できる：
```
open [あなたのIPアドレス]:7777
```

アクセス前に、次のセクションでサーバー設定を調整するのがおすすめだよ。

## 設定

ここまでで Ark: Survival Ascended 専用サーバーのセットアップは完了。さらに細かい設定は、サーバーディレクトリ内の2つの設定ファイルで行えるよ。

以下のディレクトリに移動しよう：
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

ここに **DefaultGameUserSettings.ini** と **GameUserSettings.ini** の設定ファイルがある。これらでサーバーの様々なオプションや変数を編集できるよ。

:::warning[CROSSPLAY サポート]
2023年11月18日以降、サーバーオーナーは https://dev.epicgames.com/ から取得できる証明書失効リスト（CRL）を手動でインストールする必要があるよ（または http://crl.r2m02.amazontrust.com/r2m02.crl から直接ダウンロード可能）。ダウンロードした r2m02.crl ファイルを右クリックして「すべての証明書を次のストアに配置」を選び、「信頼されたルート証明機関」を指定してインストールしよう。システムの再起動が必要な場合もあるよ。

もし2023年11月18日以前に r2m02.cer 証明書をインストールしていてサーバーが表示されない場合は、その証明書をシステムから削除する必要があるよ。Windows + R で `certmgr.msc` を開き、「信頼されたルート証明機関」内で「Amazon RSA 2048 M02」を検索して削除しよう。同様に `certlm.msc` でも同じ操作を行い、最後にシステムを再起動してね。
:::

## サーバーの起動と接続

いよいよサーバーを起動しよう。ただし、サーバーを正常に起動するには、Windows VPS に [Microsoft Visual C++ 2015 再頒布可能パッケージ](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) をインストールしておく必要があるよ。

:::info
まだインストールしていない場合は、必ず [Microsoft Visual C++ 2015 再頒布可能パッケージ](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) を VPS に入れてからサーバーを起動してね。これがないとサーバーが起動しないことがあるよ。
:::

インストールが済んだら、先ほど作成した **start-ark.bat** ファイルを実行しよう。

コマンドプロンプトでサーバーのコンソールが開き、起動処理が始まるよ。問題なく起動すれば、サーバーリストに表示されるはず。もしくはゲーム内コンソールで以下のコマンドを使って直接接続もできるよ：
```
open [あなたのIPアドレス]:7777
```

## まとめ

おめでとう！VPS に ARK: Survival Ascended 専用サーバーを無事インストール＆設定できたね！もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日対応してるから安心して！

<InlineVoucher />