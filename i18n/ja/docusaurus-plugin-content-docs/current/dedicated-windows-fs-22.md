---
id: dedicated-windows-fs-22
title: "専用サーバー：Farming Simulator 2022 専用サーバー Windows セットアップ"
description: "Windows VPSや専用サーバーにFarming Simulator 2022専用サーバーをセットアップする方法をチェック → 今すぐ詳しく"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSや専用サーバーを持っていて、そこにFarming Simulator 2022専用サーバーをインストールしたい？ここがまさにその場所！このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。



## 準備
Windows Server 2016/2019ベースのサーバーで、最低でも4x 2.4 GHz CPU（AMD/Intel）と2GB以上のRAM（DDR3/4）、6GBの空きディスク（SSD推奨）が必要。サーバーは64ビットアーキテクチャで動作していることが条件だよ。  
さらに、専用のゲームライセンス（Steam版は不可）とパブリックIPv4アドレスが必要。専用サーバーなのでGPUやサウンドカードは不要。  
専用サーバーにどれだけMODやDLCを入れるかによって、必要なリソースは増える可能性があるよ。 


## ステップ1 デジタルライセンスの購入

Farming Simulator 2022のデジタル版が必要で、Steam版は使えないよ。  
デジタル版は[Farming Simulator公式サイト](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)で購入できる。  
購入後、Giantsから届くメール内のリンク[こちら](https://eshop.giants-software.com/downloads.php)からオンラインでダウンロード可能。  
:::info
重要：メールにはダウンロードや後のインストール認証に必要なGameKeyが記載されているから必ずチェックしてね。 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## ステップ2 Farming SimulatorをWindowsサーバーに直接ダウンロード

[初期アクセス（RDP）](vserver-windows-userdp.md)でWindowsサーバーに接続。接続後、ブラウザを開いてメールのリンク[こちら](https://eshop.giants-software.com/downloads.php)にアクセス。GameKeyを入力してWindows8/10用のダウンロードを選択しよう。 

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

ファイルがダウンロードされ、通常はダウンロードフォルダに保存されるよ。（フォルダは環境によって異なる場合あり）

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

ファイルをダブルクリックして開き、Setup.exeを実行。  
利用規約を読んで同意したら、インストールは標準かカスタムを選べるけど、通常は標準でOK。  
あとは「インストール」をクリックすればFarming Simulator 2022のインストールが始まる。数分かかることもあるよ。 

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

インストール完了後、以下のメッセージが表示されるので「完了」をクリックして閉じよう。 

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

これで基本インストールは完了だよ。 

## ステップ3 ゲームのアクティベーションと専用サーバーの設定

Farming Simulatorを起動しよう。デスクトップにショートカットがなければWindowsメニューから起動可能。  
GPUがないなどのエラーは無視して「いいえ」や「キャンセル」で閉じてOK。ゲームはキー入力のために起動するだけだからね。 

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

次に、専用サーバーのWebインターフェースにログインするためのユーザー名とパスワードを設定または確認しよう。  
設定ファイルは標準インストールの場合、  
`C:\Program Files (x86)\Farming Simulator 2022` フォルダ内の `"dedicatedServer.xml"` にあるよ。  
ログイン情報は自由にカスタマイズ可能。 

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## ステップ4 Farming Simulator 2022 専用サーバーの起動

専用サーバーを起動するには、`"dedicatedServer.xml"`と同じフォルダにある `"dedicatedServer.exe"` を実行しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

起動後は、`https://サーバーIP:8080` でWebインターフェースにアクセス可能。 

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

ログインは先ほど設定・確認した `"dedicatedServer.xml"` の情報で行えるよ。  
Webインターフェースは直感的で、数クリックで自分好みに設定できるから安心してね。 

## ステップ5 ファイアウォールでポートを開放

友達と遊ぶためにサーバーは外部からアクセスできる必要があるよね。  
そのためにWindowsファイアウォールでサーバーのポートを開放しよう。  
TCPプロトコルのポート10823（ゲームサーバーポート）と8080（Webインターフェース用ポート）を開ける必要がある。  
ただし、8080はWebインターフェースを外部から使いたい場合のみ開放すればOK。管理はRDP経由でローカルからもできるよ。  
Windowsでのポート開放方法は[こちらのガイド](vserver-windows-port.md)を参考にしてね。  

ポート開放後、サーバーが起動していれば外部からアクセス可能になるよ。 


