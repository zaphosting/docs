---
id: vserver-windows-fs-25
title: "VPS: Farming Simulator 2025 専用サーバー Windows セットアップ"
description: "Windows VPS に Farming Simulator 2025 専用サーバーをセットアップして、スムーズなマルチプレイを楽しむ方法 → 今すぐチェック"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに Farming Simulator 2025 専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をわかりやすく解説するよ。

<InlineVoucher />

## 準備

Farming Simulator 2025 専用サーバーをホストするには、Windows サーバーが用意されていて、専用サーバーを動かすための有効なゲームライセンスが必要だよ。

インストールを始める前に、リモートデスクトップ（RDP）で Windows サーバーに接続してね。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドを参考にしてみて。

### ゲームライセンス

Windows サーバーで専用サーバーをホストするには、[Farming Simulator](https://www.farming-simulator.com/buy-now.php) の公式サイトから Farming Simulator 2025 のデジタル版を購入しておく必要があるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

プレイに使っているライセンスキーは専用サーバーには使えないから、専用サーバー用に**もう1本**ゲームを買わないとダメだよ。

:::info Steam ゲームライセンスについて
Steam のゲームライセンスで専用サーバーをホストすることもできるけど、Steam クライアントを常にバックグラウンドで起動し続ける必要があってかなり不便。さらに、同じ Steam アカウントで他のゲームを別のPCで遊べなくなる制限もあるんだ。だから、公式サイトでスタンドアロンのキーを買うのを強くおすすめするよ。

もし Steam ライセンスを使うなら、通常通り Steam からファイルをインストールして、**専用サーバーセットアップ** の章に進んでね。
:::

公式サイトでデジタル版を購入すると、購入時に登録したメールアドレスにプロダクトコードが届くよ。このライセンスキーは次のセクションでゲームのダウンロードや専用サーバーの認証に使うから大事にしてね。

## インストール

### ファイルのインストール

ライセンスキーと Windows サーバーの準備ができたら、Windows サーバー上で [Giants Software ダウンロードページ](https://eshop.giants-software.com/downloads.php) にアクセスして、メールで届いたライセンスキーを入力しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

認証が成功すると、ゲームのダウンロード方法がいくつか表示されるページにアクセスできるよ。Windows 用の「Farming Simulator 25 (Windows 10/11)」を見つけてダウンロードを選択。

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

ゲーム全体のダウンロードだから時間がかかるかも。気長に待ってね。

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

ダウンロードが終わったら、ダウンロードフォルダにある **.img** ファイルをダブルクリックして開こう。これでドライブがエクスプローラーにマウントされるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

次に、**Setup.exe** を実行して UAC（ユーザーアカウント制御）の許可を出してね。セットアップメニューに従ってゲームをインストールしよう。利用規約の同意やインストール先の変更もここでできるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

インストールが完了するまで待ってね。終わったらセットアップメニューを閉じて、エクスプローラーでマウントされた **DVDドライブ** を右クリックして **取り出し** を選ぶのがおすすめ。これでゲームの基本インストールは完了だよ。

### ゲームのアクティベート

ゲームがインストールできたら、一度ゲームを起動してアクティベートしよう。デスクトップのショートカットか、Windows の検索バーから起動してね。

初回起動時にライセンスキー入力画面が出るから、メールで届いたキーを入力して確定しよう。成功するとゲームがアクティベートされてロードが始まるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

ゲームはもう使わないから閉じてOK。次は専用サーバーと付属のウェブインターフェースのセットアップに進もう。もし「ビデオドライバー」エラーが出たら、**いいえ** を選んで起動をキャンセルしてね。

## 専用サーバーセットアップ

ゲームの準備ができたら、専用サーバーの設定を少し変更しよう。まずはゲームのインストールフォルダにアクセス。デフォルトは `C:\Program Files (x86)\Farming Simulator 2025` だけど、インストール時に変えていたらそちらを開いてね。

ここで、**dedicatedServer.xml** ファイルをテキストエディタで開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

ファイルの一番上にある `username` と `passphrase` を自分の好きなものに変更しよう。これはサーバーのウェブインターフェースにログインするための認証情報になるよ。編集が終わったら保存して閉じてね。

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### ウェブインターフェースへのアクセス

認証情報を設定したら、ゲームのルートフォルダにある **dedicatedServer.exe** を実行してサーバーを起動しよう。

:::info 管理者権限での実行
専用サーバーの実行ファイルは必ず管理者権限で起動してね。そうしないとサーバー起動時に問題が起きやすいよ。ファイルを右クリックして **管理者として実行** を選ぼう。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

起動すると新しい CMD ウィンドウが開いて、必要な証明書の生成やアップデート、ツールのインストールが自動で行われるよ。初回は時間がかかるから気長に待ってね。

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

準備ができたら、ブラウザで `http://[あなたのサーバーIP]:8080` にアクセスしてウェブインターフェースにログインしよう。先ほど設定した認証情報を使ってね。

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

このウェブインターフェースでは、設定変更、セーブゲーム管理、MOD管理など色んな操作ができるよ。

### サーバーのポート開放

サーバーを外部からアクセス可能にするには、専用サーバーが使うポートのポートフォワーディング設定が必要だよ。PowerShell での設定が簡単だけど、Windows Defender ファイアウォールから設定することもできる。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShell で設定" default>

Windows の検索で **PowerShell** を探して、右クリックから **管理者として実行** して起動しよう。

:::info
管理者モードで PowerShell を起動しないと設定が正しく反映されないから注意してね。
:::

以下のコマンドをコピーして PowerShell に貼り付けて実行してね：
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

これで Farming Simulator 2025 サーバーが外部からアクセス可能になるファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defender で設定">

Windows の検索で **Windows ファイアウォールの詳細設定** を開こう。基本のファイアウォール画面からは **詳細設定** をクリックして開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

FS2025 サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：8080, 10823
- UDP 受信・送信：8080, 10823

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md) ガイドを参考にしてね。

</TabItem>
</Tabs>

これでサーバーが外部からアクセス可能になり、ウェブインターフェースやゲーム内から接続できるようになるよ。

### サーバーの起動

設定とファイアウォールルールの追加が終わったら、ウェブインターフェースのホーム画面に戻って **Start** ボタンを押してサーバーを起動しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

起動に成功すると、インターフェースが更新されて新しい CMD ウィンドウでゲームサーバーが動き始めるよ。もし起動時にエラーが出るなら、管理者権限でインターフェースを実行しているか確認してね。

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## おわりに

おめでとう！これで VPS に Farming Simulator 2025 専用サーバーを無事インストール＆設定できたよ！もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！

<InlineVoucher />