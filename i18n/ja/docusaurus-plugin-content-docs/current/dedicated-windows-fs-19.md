---
id: dedicated-windows-fs-19
title: "専用サーバー: Farming Simulator 2019 専用サーバー Windows セットアップ"
description: "Windows VPSや専用サーバーにFarming Simulator 2019専用サーバーを素早く効率的にセットアップする方法を解説 → 今すぐチェック"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSや専用サーバーを持っていて、そこにFarming Simulator 2019専用サーバーをインストールしたい？それならここがピッタリ！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで説明するよ。

<InlineVoucher />

## 準備

Windows Server 2016/2019ベースのサーバーで、最低でも4x 2.4 GHz CPU（AMD/Intel）、2GB以上のRAM（DDR3/4）、6GBの空きディスク（SSD推奨）が必要。サーバーは64ビットアーキテクチャで動作していることが条件だよ。  
さらに、専用のゲームライセンス（Steam版は不可）とパブリックIPv4アドレスも必須。GPUやサウンドカードは専用サーバーには不要。  
専用サーバーにどれだけMODやDLCを入れるかによって、必要なリソースは増えるかも。

## ステップ1 デジタルライセンスの購入

Farming Simulator 2019のデジタル版が必要で、Steam版は使えないよ。  
デジタル版は[Farming Simulator公式サイト](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)で購入できる。  
購入後、メールで届くリンクから[Farming Simulatorをオンラインでダウンロード](https://eshop.giants-software.com/downloads.php)できるよ。  
:::info
重要：メールにはダウンロードや後のインストール認証に必要なGameKeyが記載されているから大事に保管してね。  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## ステップ2 Farming SimulatorをWindowsサーバーに直接ダウンロード

[初期アクセス（RDP）](vserver-windows-userdp.md)でWindowsサーバーに接続しよう。接続できたらブラウザを開いて、メールのリンクにアクセス。GameKeyを入力してWindows8/10用のダウンロードを選択してね。

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

ファイルがダウンロードされて、通常はダウンロードフォルダに保存されるよ。（フォルダは環境によって異なる場合あり）

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

ファイルをダブルクリックして開き、Setup.exeを実行しよう。  
利用規約を読んで同意したら、インストールは標準かカスタムを選べるけど、通常は標準でOK。  
最後に「インストール」をクリックすると、Farming Simulator 2019のインストールが始まる。数分かかるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

インストールが完了すると、以下のメッセージが表示されるので「完了」をクリックしてね。

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

これで基本インストールは完了！

## ステップ3 ゲームのアクティベーションと専用サーバーの設定

Farming Simulatorを起動しよう。デスクトップにショートカットがなければ、Windowsメニューから起動してね。  
GPUがないなどのエラーは無視して「いいえ」や「キャンセル」で閉じてOK。ゲームはキー入力のために起動するだけだから。

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

キーが認識されると確認画面が出るよ。

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

次に、専用サーバーのWebインターフェースにログインするためのユーザー名とパスワードを設定または確認しよう。  
設定ファイルは標準インストールの場合、  
`C:\Program Files (x86)\Farming Simulator 2019` フォルダ内の `"dedicatedServer.xml"` にあるよ。  
ログイン情報は自由にカスタマイズ可能。

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## ステップ4 Farming Simulator 2019 専用サーバーの起動

専用サーバーを起動するには、`"dedicatedServer.xml"` と同じフォルダにある `"dedicatedServer.exe"` を実行しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

起動後、Webインターフェースは `https://SERVER-IP:8080` で開けるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

ログインは先ほど設定・確認した `"dedicatedServer.xml"` の情報でできる。  
Webインターフェースは直感的で、数クリックで自分好みに設定できるよ。

## ステップ5 ファイアウォールでポートを開放

友達と遊ぶためにサーバーは公開されている必要があるよね。  
そのためにWindowsファイアウォールでサーバーのポートを開放しよう。  
TCPプロトコルでポート10823と8080を開ける必要があるよ。  
10823はゲームサーバーポート、8080はWebインターフェース用のポート。Webポートは必要な場合だけ開放してね。管理はRDP経由でローカルからもできるから安心して。  
Windowsでのポート開放方法はこちら：[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)。

ポート開放後、サーバーが起動していれば公開アクセス可能になるよ。

<InlineVoucher />