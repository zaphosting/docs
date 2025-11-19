---
id: dedicated-windows-fs-19
title: "専用サーバー：Farming Simulator 2019 専用サーバー Windows セットアップ"
description: "Windows VPSや専用サーバーにFarming Simulator 2019専用サーバーを素早く効率的にセットアップする方法を解説 → 今すぐチェック"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSや専用サーバーを持っていて、そこにFarming Simulator 2019専用サーバーをインストールしたい？それならここがピッタリ。 このガイドでは、サーバーにこのサービスをインストールする手順をステップバイステップで説明するよ。

## 準備

Windows Server 2016/2019ベースのサーバーで、最低でも4x 2.4 GHzのCPU（AMD/Intel）、2GB以上のRAM（DDR3/4）、6GBの空きディスク（SSD推奨）が必要。サーバーは64bitアーキテクチャで動作していることが条件だよ。  
さらに、独自のゲームライセンス（Steam版は不可）とパブリックIPv4アドレスが必要。GPUやサウンドカードは専用サーバーには不要。  
専用サーバーにどれだけMODやDLCを入れるかによって、必要なリソースは増える可能性があるから注意してね。

## ステップ1 デジタルライセンスの購入

Farming Simulator 2019のデジタル版が必要で、Steam版は使えないよ。  
デジタル版は[Farming Simulator公式サイト](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital)で購入できる。  
購入後、Giantsから届くメール内のリンク[こちら](https://eshop.giants-software.com/downloads.php)からオンラインでダウンロード可能。  
:::info
重要：メールにはダウンロードや後のインストール認証に必要なGameKeyが記載されているから必ず確認してね。  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## ステップ2 Farming SimulatorをWindowsサーバーに直接ダウンロード

[初期アクセス（RDP）](vserver-windows-userdp.md)でWindowsサーバーに接続。接続後、ブラウザを開いてメールのリンク[こちら](https://eshop.giants-software.com/downloads.php)にアクセス。GameKeyを入力してWindows8/10用のダウンロードを選択しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

ファイルがダウンロードされ、通常はダウンロードフォルダに保存されるよ。（フォルダは環境によって異なる場合あり）

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

ファイルをダブルクリックして開き、Setup.exeを実行。  
利用規約（TOS）を読み、同意したらインストールを標準（Standard）かカスタム（Custom）で選択。通常は標準でOK。  
「インストール」をクリックするとFarming Simulator 2019のインストールが始まる。数分かかることもあるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

インストール完了後、以下のメッセージが表示されるので「Finish」をクリックして終了。

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

これで基本インストールは完了！

## ステップ3 ゲームのアクティベーションと専用サーバーの設定

Farming Simulatorを起動しよう。デスクトップにショートカットがあるはずだけど、なければWindowsメニューから起動してね。  
GPUがないなどのエラーは無視して「No」や「Cancel」で閉じてOK。ゲームはキー入力のためだけに起動するよ。

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

キーが認識されると確認メッセージが表示される。

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

次に、専用サーバーのWebインターフェースにログインするためのユーザー名とパスワードを設定または確認しよう。  
設定ファイルは標準インストールの場合、  
`C:\Program Files (x86)\Farming Simulator 2019` フォルダ内の `"dedicatedServer.xml"` にあるよ。  
ログイン情報は自由にカスタマイズ可能。

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## ステップ4 Farming Simulator 2019 専用サーバーの起動

専用サーバーを起動するには、`"dedicatedServer.xml"` と同じフォルダにある `"dedicatedServer.exe"` を実行しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

起動後、Webインターフェースは `https://SERVER-IP:8080` でアクセス可能。

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

ログインは先ほど設定・確認した `"dedicatedServer.xml"` のログイン情報で行うよ。  
Webインターフェースは直感的で、数クリックで自分好みに設定できるから安心してね。

## ステップ5 ファイアウォールでポートを開放

友達と遊ぶためにサーバーは当然パブリックにアクセス可能である必要があるよね。  
そのためにWindowsファイアウォールでサーバーのポートを開放しよう。  
TCPプロトコルでポート10823と8080を開放する必要がある。  
10823はゲームサーバーポート、8080はWebインターフェース用のポート。Webインターフェースを使わないなら8080の開放は不要で、管理はRDP経由でローカルからできるよ。  
Windowsでのポート開放方法はこちら：[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)。

ポート開放後、サーバーが起動していればパブリックにアクセス可能になるよ。