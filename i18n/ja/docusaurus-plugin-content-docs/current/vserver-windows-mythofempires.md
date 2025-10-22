---
id: vserver-windows-mythofempires
title: "VPS: Myth of Empires 専用サーバー Windows セットアップ"
description: "Windows VPS に Myth of Empires 専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: MOE 専用サーバーセットアップ
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Windows VPS を持っていて、そこに MOE 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="Windows VPSでMyth Of Empiresサーバーをセットアップする方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり情報を吸収したい時もバッチリ！"/>
<InlineVoucher />

## 準備
まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、専用サーバーファイルをダウンロードするために **SteamCMD** をセットアップしよう。SteamCMD は Steam クライアントの **コマンドライン（CLI）版** で、Steam ワークショップや専用サーバーファイルを簡単にダウンロードできるツールだよ。[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)からもOK。

サーバーのどこかに新しいフォルダを作成しよう。ここでは `steamcmd` と名付けるよ。ダウンロードフォルダから先ほどダウンロードした **steamcmd.zip** を見つけて、その `steamcmd` フォルダに移動させてね。次に、右クリックして Windows の解凍機能や 7zip、Winrar などで解凍しよう。すると **steamcmd.exe** ファイルが展開されるはず。

**steamcmd.exe** を実行して、インストールが完了するまで待とう。

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

**Loading Steam API.... OK** のメッセージが表示されたら、インストール完了！次のセクションで MOE 専用サーバーのインストールに進もう。

## インストール

インストール後、先ほど実行した **steamcmd.exe** のコマンドプロンプトでコマンドを実行できるようになるよ。まずはログインが必要で、匿名ユーザーでログインするには以下のコマンドを使おう：
```
login anonymous
```

ログインできたら、ファイルのダウンロードを始められるよ。

:::tip
任意で、インストール先ディレクトリを指定したい場合は、以下のコマンドを使って `[path]` を希望のパスに置き換えてね。例：
```
force_install_dir C:\MOE-Server
```
:::

次に、以下のコマンドを実行してダウンロードを開始しよう。App ID **1794810** は MOE のアプリケーションIDだよ。
```
app_update 1794810
```

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
ダウンロードが完了するまで中断しないでね。少し時間がかかるけど、じっくり待つ価値あり！ :)
:::

ダウンロードが完了したら、サーバーファイルが保存されたディレクトリに移動しよう。

### PrivateServerTool へのアクセス

通常の SteamCMD インストールとは違い、MOE は Windows でサーバーを動かすためにローカルの Steam ゲームインストールからフォルダを取得する必要があるよ。

Steam を開いて、**Myth of Empires** を右クリックし、**管理** の中の **ローカルファイルを参照** を選択しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

開いたルートフォルダ内にある **PrivateServerTool** フォルダを探してね。このフォルダをサーバーにコピーする必要があるよ。ローカルPCで `CTRL+C` でコピーして、RDP 経由で Windows サーバーに `CTRL+V` で貼り付けよう。必ず専用サーバーのルートディレクトリに貼り付けてね。

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

次は、ポート開放とサーバー設定のために次のセクションへ進もう。

### サーバーのポート開放

サーバーを外部からアクセス可能にするために、専用サーバープロセスが使うポートのポートフォワーディング設定を変更しよう。Powershell コマンドでの設定が簡単だけど、Windows Defender ファイアウォールの画面から設定することもできるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Powershell で設定" default>

Windows の検索ボックスで **Powershell** を検索しよう。右クリックして **管理者として実行** するのを忘れずに。そうしないと権限不足で設定が反映されないことがあるよ。

:::info
必ず管理者モードで Powershell を実行してね。
:::

以下のコマンドをコピーして Powershell に貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

これで MOE サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは **詳細設定** をクリックして開く必要があるかも。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

MOE サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信: 11888, 12888
- UDP 受信・送信: 11888, 12888

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

設定が終わったら、次のセクションで設定ファイル作成と起動用 `.bat` ファイルの準備をしよう。

## 設定

先ほどゲームファイルからコピーしたフォルダ内にあるサーバーツールを使って、設定ファイルとサーバー起動用の `.bat` ファイルを作成するよ。

以下のディレクトリに移動しよう（コピーしたフォルダ）：
```
../MOE/PrivateServerTool
```

このフォルダ内の **PrivateServerTool.exe** を実行。ツールを使って、MODやゲーム設定などサーバーのオプションを自由にカスタマイズできるよ。

最低でも **サーバー名** など基本的なパラメータは設定しておくのがおすすめ。

準備ができたら、ツールの **Start Console** タブに移動し、**Save Config** ボタンを押してから **Start Server** ボタンを押そう。これでサーバー起動用の `StartPrivateServer.bat` ファイルが生成されるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

`StartPrivateServer.bat` ファイルのショートカットを作成しておくと起動が楽になるよ。右クリックして **ショートカットの作成** を選んでね。

:::note
自動生成された `StartPrivateServer.bat` ファイル内のゲームフォルダのパスを編集する必要があるかも。メモ帳などで開いて、ファイルの先頭にあるパスがサーバーフォルダのパスと一致しているか確認しよう。

もし違っていたら、専用サーバーフォルダのルートで上部のパスバーをダブルクリックしてパスをコピーし、ファイル内の該当箇所に貼り付けてね。
:::

## サーバーの起動＆接続

いよいよサーバーを起動しよう。Myth of Empires サーバーのディレクトリに移動して、**StartPrivateServer.bat**（ショートカットを作ったならそちら）を実行すると、コマンドプロンプトでサーバーコンソールが開いて起動が始まるよ。

ゲーム内の **カスタムサーバー** タブから検索ボックスでサーバーを探して直接接続できるようになるよ。

:::tip
接続に問題がある場合は、`StartPrivateServer.bat` ファイルをメモ帳などで開いて、2つの IP パラメータが Windows サーバーの IP と一致しているか確認してみて。通常はツールが自動で設定するけど、トラブルシューティングとして有効だよ。
:::

## まとめ

おめでとう！VPS に Myth of Empires 専用サーバーを無事インストール＆設定できたね！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるよ！

<InlineVoucher />