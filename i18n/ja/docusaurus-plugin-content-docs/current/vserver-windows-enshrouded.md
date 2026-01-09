---
id: vserver-windows-enshrouded
title: "VPS: Enshrouded 専用サーバー Windows セットアップ"
description: "Windows VPS に Enshrouded 専用サーバーをセットアップして、快適なゲームプレイと管理を実現 → 今すぐ詳しくチェック"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Windows VPS を持っていて、そこに Enshrouded 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をわかりやすく解説していくよ。

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="Windows VPS に Enshrouded 専用サーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでいる時も、じっくり見たい時も、どっちもOK！"/>
<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントのコマンドライン版で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。公式 Valve サイトから [SteamCMD をダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD) するか、直接 [こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは例として `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、その `steamcmd` フォルダに移動させてね。次に、右クリックして Windows の解凍機能や 7zip、Winrar などで解凍しよう。解凍すると **steamcmd.exe** ファイルができるはず。

**steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストール完了！次は Enshrouded 専用サーバーのインストールに進もう。

## インストール

インストールが終わったら、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるようになっているはず。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを始めよう。

:::tip
任意で、インストール先のディレクトリを指定したい場合は、以下のコマンドを使って `[path]` を希望のパスに置き換えてね：
```
force_install_dir C:\Enshrouded-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **2278520** は Enshrouded の専用サーバーアプリケーションだよ。
```
app_update 2278520
```

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、焦らず待とう！ :)
:::

ダウンロードが完了したら、サーバーファイルが保存されたディレクトリに移動しよう。ここで **enshrouded_server.exe** を使ってサーバーを起動できるけど、まずはポート開放とサーバー設定を済ませるのがおすすめ。

### サーバーのポート開放

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。簡単なのは Powershell コマンドを使う方法だけど、Windows Defender ファイアウォールの設定画面からもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershell で設定" default>

Windows の検索ボックスで **Powershell** を検索して、右クリックから **管理者として実行** を選択しよう。管理者権限がないと設定が反映されないから注意してね。

:::info
必ず管理者モードで Powershell を起動してね。そうしないと設定が正しく適用されないよ。
:::

次に、以下のコマンドをコピーして Powershell に貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

これで Enshrouded サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面が開いたら、右側の **詳細設定** をクリックして必要なウィンドウを表示してね。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Enshrouded サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：15636-15637
- UDP 受信・送信：15636-15637

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドも参考にしてみて。

</TabItem>
</Tabs>

これらのルールを追加したら、サーバーは外部からアクセス可能になるよ。ゲームのメインメニューでキャラクターを選択し、**Find Games** タブに行って **Add Server** を押そう。そこでサーバーの IP アドレスとポート（デフォルトは 15636）、パスワード（設定していれば）を入力すれば接続できるよ。

:::tip
サーバーにパスワードを設定したり、細かい設定をしたい場合は [サーバー設定](enshrouded-configuration.md) ガイドをチェックしてね。
:::

サーバーにアクセスする前に、まずは次のセクションで設定を済ませるのがおすすめだよ。

## 設定

ここまでで Enshrouded サーバーのセットアップは完了しているよ。さらに細かい設定は、サーバーディレクトリ内にある設定ファイルで行えるよ。

まずは以下のディレクトリに移動しよう：
```
..EnshroudedServer/ (ルートディレクトリ)
```

ここにある **enshrouded_server.json** ファイルが設定ファイルだよ。このファイルでサーバーの各種パラメータを調整できる。設定項目の詳細は [サーバー設定](enshrouded-configuration.md) ガイドを見てみてね。

## サーバーの起動と接続

いよいよサーバーを起動しよう。Enshrouded サーバーのルートディレクトリに移動して、**enshrouded_server.exe** を実行すると、コマンドプロンプトでサーバーコンソールが開いて起動が始まるよ。

起動後は、ゲームの **Find Games** タブから **Add Server** を選び、サーバーの IP とポート（デフォルトは 15636）を入力して接続できるよ。

## まとめ

おめでとう！これで VPS に Enshrouded サーバーを無事インストール＆設定できたよ！もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />