---
id: vserver-windows-ragemp
title: "VPS: RageMP 専用サーバー Windows セットアップ"
description: "Windows VPS に RageMP 専用サーバーをインストールしてマルチプレイヤーゲームを快適に楽しむ方法 → 今すぐチェック"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに RageMP 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

まずは、リモートデスクトップ（RDP）で VPS に接続しよう。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてね。

サーバーにアクセスできたら、RageMP が必要とする前提条件として [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe) をインストールしよう。これがインストールされていないと先に進めないから必ず済ませてね。すでにインストール済みか不安な場合は、インストーラーを実行すればセットアップ中に教えてくれるよ。

依存関係が整ったら、[RageMP公式サイト](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe) から最新のサーバーリリースをダウンロードしよう。

:::tip
すでに RageMP をインストール済みなら、**サーバーブランチへの切り替え** セクションに進んでOK。再インストールは不要だよ。
:::

## インストール

リリースファイルをダウンロードしたら、**RAGEMultiplayer_Setup.exe** を実行してインストールを進めよう。セットアップ中にインストール先のパスを変更できるので、好きな場所に設定するのがおすすめ。

RageMP がインストールできたら、Windows のアプリ一覧から **RAGE Multiplayer** を起動しよう。

初回起動時には GTA:V のインストールフォルダのパスを指定する必要があるよ。ゲームをインストールしたランチャーによって場所は変わるけど、通常は `C:/Program Files` または `C:/Program Files (x86)` の中にあるはず。

次に、サーバーファイルをダウンロードするためにブランチの切り替えを行うよ。

### サーバーブランチへの切り替え

RageMP をインストールしたフォルダに移動して、**config.xml** ファイルを探そう。この中の `channel` パラメータを `prerelease` から `prerelease_server` に変更して保存してね。

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

次に、**updater.exe** を実行すると、ブランチ変更に応じたサーバーファイルがダウンロードされるよ。RageMP フォルダ内に新しく **server-files** フォルダができているはず。これがサーバー起動に必要なファイル群だよ。

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

必要に応じて `channel` パラメータを元の `prerelease` に戻し、**update.exe** を再実行すればクライアント版に切り替えてゲームプレイもできるよ。

:::tip
サーバーファイルは好きな場所に移動してフォルダ名を変えてもOK。必ずしも `RAGEMP` フォルダ内で実行する必要はないよ。
:::

サーバーを起動するには、`server-files` フォルダ（またはサーバーフォルダ）内の **ragemp-server.exe** を実行すれば起動が始まる。ただし、先にポート開放とサーバー設定を済ませるのがおすすめ。

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### サーバーのポート開放

サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。PowerShell コマンドでの設定が簡単だけど、Windows Defender ファイアウォールの設定画面からもできるよ。

:::tip
初回サーバー起動時に UAC（ユーザーアカウント制御）の確認が出るはず。許可すればファイアウォールのルールが自動で設定されるから、そのまま次のセクションに進んでOK。許可しなかった場合は以下の方法で設定してね。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShell で設定" default>

Windows の検索ボックスで **PowerShell** を検索し、右クリックして **管理者として実行** を選択しよう。管理者権限で実行しないと設定が反映されないから注意してね。

:::info
必ず管理者モードで PowerShell を起動してね。そうしないと設定が正しく適用されないよ。
:::

次に、以下のコマンドをコピーして PowerShell に貼り付けて実行しよう：

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

これで RageMP サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは **詳細設定** をクリックして開く必要があるかも。

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

RageMP サーバー用に新しいルールを作成しよう。受信ルールと送信ルールの両方で、以下のプロトコルとポートを追加してね：

- TCP 受信・送信：22005
- UDP 受信・送信：22005

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドも参考にしてみて。

</TabItem>
</Tabs>

これでサーバーが外部からアクセス可能になったよ。つまり、サーバーの IPアドレスを使って接続できるようになったってこと。

アクセスする前に、次のセクションでサーバー設定を済ませておくのがおすすめだよ。

## 設定

ここまでで RageMP サーバーのセットアップは完了。さらに細かい設定は設定ファイルで行えるよ。

ルートフォルダに戻って、**conf.json** ファイルを開こう。この中でポート番号やサーバー名など、いくつかのパラメータを調整できるよ。

例として、以下のような設定があるよ：

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## サーバーの起動と接続

いよいよサーバーを起動しよう。`server-files` フォルダ（またはサーバーフォルダ）に移動して、**ragemp-server.exe** を実行すると起動プロセスが始まるよ。コマンドプロンプトでサーバーのコンソールが開くはず。

ゲーム内の RageMP ランチャーから直接サーバーに接続できるようになるよ。

## まとめ

おめでとう！VPS に RageMP サーバーを無事インストール＆設定できたね！もし何か質問やトラブルがあれば、毎日対応しているサポートチームに気軽に連絡してね！

<InlineVoucher />