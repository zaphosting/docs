---
id: vserver-windows-fs-22
title: "VPS: Farming Simulator 2022 専用サーバー Windows セットアップ"
description: "Windows VPSにFarming Simulator 2022専用サーバーをスムーズにマルチプレイできるようセットアップする方法 → 今すぐチェック"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSを持っていて、そこにFarming Simulator 2022専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。
<InlineVoucher />

## 準備
Windows Server 2016/2019ベースのサーバーで、最低でも4x 2.4 GHz CPU（AMD/Intel）、2GB以上のRAM（DDR3/4）、6GBの空きディスク（SSD推奨）が必要。サーバーは64bitアーキテクチャで動作していることが条件だよ。  
さらに、専用のゲームライセンス（Steam版は不可）とパブリックIPv4アドレスも必須。GPUやサウンドカードは専用サーバーには不要。  
専用サーバーに導入するMODやDLCの量によっては、もっとリソースが必要になる場合もあるから注意してね。  

## ステップ1 デジタルライセンスの購入

Farming Simulator 2022のデジタル版が必要で、Steam版は使えないよ。  
デジタル版は[Farming Simulator公式サイト](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)から購入できる。  
購入後、Giantsから届くメール内のリンク[こちら](https://eshop.giants-software.com/downloads.php)からオンラインでダウンロード可能。  
:::info
重要：メールにはダウンロードや後のインストール認証に必要なGameKeyが記載されているから絶対に無くさないでね。  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## ステップ2 Farming SimulatorをWindowsサーバーに直接ダウンロード

[初期アクセス（RDP）](vserver-windows-userdp.md)でWindowsサーバーに接続。接続後、ブラウザを開いてメールのリンク[こちら](https://eshop.giants-software.com/downloads.php)にアクセス。GameKeyを入力してWindows8/10用のダウンロードを選択しよう。  

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

ファイルがダウンロードされ、通常はダウンロードフォルダに保存されるよ。（保存先は環境によって異なる場合あり）

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

ファイルをダブルクリックして開き、Setup.exeを実行。  
利用規約を読んで同意したら、インストールは標準かカスタムを選べるけど、通常は標準でOK。  
あとは「インストール」をクリックすれば、Farming Simulator 2022のインストールが始まる。数分かかることもあるよ。  

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

インストール完了後、以下のメッセージが出るので「完了」をクリックして閉じよう。  

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

これで基本インストールは完了！

## ステップ3 ゲームのアクティベーションと専用サーバーの設定

Farming Simulatorを起動しよう。デスクトップにショートカットがなければWindowsメニューから起動可能。  
GPUがないなどのエラーは無視して「いいえ」や「キャンセル」で閉じてOK。ゲームはキー入力のために起動するだけだからね。  

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

次に、専用サーバーのWebインターフェースにログインするためのユーザー名とパスワードを設定または確認しよう。  
設定ファイルは標準インストールの場合、  
`C:\Program Files (x86)\Farming Simulator 2022` フォルダ内の `"dedicatedServer.xml"` にあるよ。  
ログイン情報は自由にカスタマイズ可能。  

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## ステップ4 Farming Simulator 2022 専用サーバーの起動

専用サーバーを起動するには、`"dedicatedServer.xml"` と同じフォルダにある `"dedicatedServer.exe"` を実行しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

起動後、Webインターフェースは `https://SERVER-IP:8080` でアクセス可能。  

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

ログインは先ほど設定・確認した `"dedicatedServer.xml"` の情報で行うよ。  
Webインターフェースは直感的で操作しやすく、数クリックで自分好みに設定できるよ。

## ステップ5 ファイアウォールでポートを開放

友達と遊ぶためにサーバーは外部からアクセスできる必要があるよね。  
そのためにWindowsファイアウォールでポートを開放しよう。  
TCPプロトコルでポート10823（ゲームサーバーポート）と8080（Webインターフェース用ポート）を開放する必要がある。  
8080はWeb管理が必要な場合のみ開放すればOK。管理はRDP経由でローカルからもできるよ。  
Windowsでのポート開放方法は[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)を参照してね。  

ポート開放後、サーバーが起動していれば外部からアクセス可能になるよ。

## まとめ

おめでとう！これでVPSにFarming Simulator 2022専用サーバーを無事インストール＆設定できたよ！  
もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日対応してるから安心して！  

<InlineVoucher />