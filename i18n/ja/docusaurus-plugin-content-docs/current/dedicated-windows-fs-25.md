---
id: dedicated-windows-fs-25
title: "専用サーバー：Farming Simulator 2025 専用サーバー Windows セットアップ"
description: "WindowsでFarming Simulator 2025専用サーバーをセットアップしてマルチプレイヤーゲームをスムーズにホストする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows専用サーバーを持っていて、Farming Simulator 2025専用サーバーサービスをインストールしたい？ここがまさにその場所！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

## 準備

Farming Simulator 2025専用サーバーをホストするには、Windowsサーバーが準備できていて、専用サーバーを動かすための有効なゲームライセンスが必要だよ。

インストールを始める前に、リモートデスクトップ（RDP）でWindowsサーバーに接続してね。接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参考にしてみて。

### ゲームライセンス

Windowsサーバーで専用サーバーをホストするには、[Farming Simulator](https://www.farming-simulator.com/buy-now.php)公式サイトからFarming Simulator 2025のデジタル版を購入しておく必要があるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

ゲームをプレイしているライセンスキーと同じものは使えないから、専用サーバー用に**もう1本**ゲームを買わなきゃいけないよ。

:::info Steamゲームライセンスについて
Steamのゲームライセンスを使って専用サーバーをホストすることもできるけど、Steamクライアントを常にバックグラウンドで起動し続ける必要があってかなり面倒。さらに、Steamの制限で同じアカウントで他のPCでゲームをプレイできなくなるから、公式サイトで単体キーを買うことを強くおすすめするよ。

もし**Steam**ライセンスを使うなら、通常通りSteamからファイルをインストールして、ガイドの**専用サーバーセットアップ**セクションに進んでね。
:::

公式サイトでデジタル版を購入すると、購入時に入力したメールアドレスにプロダクトコードが届くよ。このライセンスキーは次のセクションでゲームのダウンロードや専用サーバーのセットアップ時に必要になるから大事に保管してね。

## インストール

### ファイルのインストール

ライセンスキーとWindowsサーバーの準備ができたら、Windowsサーバー上で[Giants Software ダウンロードページ](https://eshop.giants-software.com/downloads.php)にアクセスして、メールで受け取ったライセンスキーを入力しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

成功すると、ゲームのダウンロード方法がいくつか表示されるページにアクセスできるよ。Windows用の**Farming Simulator 25 (Windows 10/11)**を見つけてダウンロードを選択。

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

ゲーム全体のダウンロードだから時間がかかるかもしれないけど、気長に待ってね。

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

ダウンロードが終わったら、ダウンロードフォルダにある**.img**ファイルをダブルクリックして開こう。これでドライブがエクスプローラーにマウントされるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

次に**Setup.exe**を実行してUACプロンプトを許可。セットアップメニューに従ってゲームをインストールしよう。利用規約の同意やインストール先の変更もここでできるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

インストールが完了するまでまた少し待ってね。終わったらセットアップメニューを閉じて、エクスプローラーでマウントされた**DVDドライブ**を右クリックして**取り出し**を選ぶのがおすすめ。これでゲームの基本インストールは完了だよ。

### ゲームのアクティベート

ゲームがインストールできたら、一度ゲームを起動してアクティベートしよう。デスクトップのショートカットかWindowsの検索バーから起動してね。

初回起動時にライセンスキー入力画面が出るから、メールで受け取ったキーを入力して確定。成功するとゲームがアクティベートされてロードが始まるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

ゲームはもう使わないから閉じてOK。次は専用サーバーと付属のウェブインターフェースのセットアップに進もう。もし**ビデオドライバー**エラーが出たら、**いいえ**を選んで起動をキャンセルしてね。

## 専用サーバーセットアップ

ゲームの準備ができたら、専用サーバー用の設定を少し変更する必要があるよ。まずはゲームのインストールフォルダにアクセスしよう。デフォルトは`C:\Program Files (x86)\Farming Simulator 2025`だけど、インストール時に変更していたらそちらを探してね。

ここで**dedicatedServer.xml**ファイルをテキストエディタで開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

ファイルの一番上にある`username`と`passphrase`を自分の好きなものに変更するのがおすすめ。これはサーバーのウェブインターフェースにログインするための認証情報になるよ。編集後は保存して閉じてね。

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### ウェブインターフェースへのアクセス

認証情報を設定したら、ゲームのルートフォルダにある**dedicatedServer.exe**を実行してサーバーを起動しよう。

:::info 管理者権限について
専用サーバーの実行ファイルは必ず管理者権限で起動してね。そうしないとゲームサーバーの起動時に問題が起きやすいよ。ファイルを右クリックして**管理者として実行**を選択しよう。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

起動すると新しいCMDウィンドウが開いて必要な証明書の生成やアップデート、ツールのインストールが自動で行われるよ。初回は時間がかかるから気長に待ってね。

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

準備ができたら、ブラウザで`http://[あなたのサーバーIP]:8080`にアクセスしてウェブインターフェースにログインしよう。先ほど設定した認証情報を使ってね。

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

このウェブインターフェースからは設定変更、セーブゲーム管理、MOD管理など色んな操作ができるよ。

### サーバーのポート開放

サーバーをインターネットからアクセス可能にするには、専用サーバーが使うポートのポートフォワーディング設定が必要だよ。PowerShellでの設定が簡単だけど、Windows Defenderファイアウォールから設定することもできる。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="PowerShellでの設定" default>

Windowsの検索ボックスで**PowerShell**を検索して、右クリックから**管理者として実行**を選んで起動しよう。

:::info
管理者モードでPowerShellを起動しないと設定が正しく反映されないから注意してね。
:::

以下のコマンドをコピーしてPowerShellに貼り付けて実行してね：
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

これでFarming Simulator 2025サーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderでの設定">

Windowsの検索で**Windows ファイアウォールの詳細設定**を開こう。基本のファイアウォール画面からは**詳細設定**を押して開く必要があるかも。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

FS2025サーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：8080, 10823
- UDP 受信・送信：8080, 10823

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてみて。

</TabItem>
</Tabs>

これでサーバーが外部からアクセス可能になり、ウェブインターフェースやゲーム内から接続できるようになるよ。

### サーバーの起動

設定とファイアウォールルールの追加が終わったら、ウェブインターフェースのホーム画面に戻って**Start**ボタンを押してサーバーを起動しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

成功するとサーバーが起動し、画面の表示や新しいCMDウィンドウでゲームサーバーの起動が確認できるよ。もし起動時にエラーが出るなら、管理者権限でインターフェースを実行しているか確認してね。

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## まとめ

おめでとう！Farming Simulator 2025専用サーバーを専用サーバーに無事インストール＆設定できたよ！もし何か質問や問題があれば、いつでもサポートチームに連絡してね。毎日サポートしてるから安心して！