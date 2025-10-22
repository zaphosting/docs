---
id: vserver-windows-fs-19
title: "VPS: Farming Simulator 2019 専用サーバー Windows セットアップ"
description: "Windows VPS に Farming Simulator 2019 専用サーバーをセットアップして快適なマルチプレイ環境を作る方法 → 今すぐチェック"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPS を持っていて、そこに Farming Simulator 2019 専用サーバーをインストールしたい？それならここがピッタリ。この記事では、サーバーにこのサービスをインストールする手順をわかりやすく解説するよ。
<InlineVoucher />

## 準備

Windows Server 2016/2019 ベースのサーバーで、最低でも 4x 2.4 GHz CPU（AMD/Intel）、2GB RAM（DDR3/4）、6GB の空きディスク（SSD推奨）が必要。サーバーは64ビットアーキテクチャで動作していることが条件だよ。  
さらに、専用のゲームライセンス（Steam版は不可）とパブリック IPv4 アドレスも必須。GPUやサウンドカードは専用サーバーには不要。  
専用サーバーに導入するMODやDLCの量によっては、もっとリソースが必要になる場合もあるから注意してね。

## ステップ1 デジタルライセンスの購入

Farming Simulator 2019 のデジタル版が必要で、Steam版は使えないよ。  
デジタル版は [Farming Simulator公式サイト](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) から購入できる。  
購入後は、Giantsから届くメール内のリンク [こちら](https://eshop.giants-software.com/downloads.php) からオンラインでダウンロード可能。  
:::info
重要：メールにはダウンロードや後のインストール認証に必要なゲームキーが記載されているから大切に保管してね。  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## ステップ2 Farming Simulator を Windows サーバーに直接ダウンロード

[初期アクセス（RDP）](vserver-windows-userdp.md) で Windows サーバーに接続しよう。接続後、ブラウザを開いてメールのリンク [こちら](https://eshop.giants-software.com/downloads.php) にアクセス。ゲームキーを入力して Windows8/10 用のダウンロードを選択してね。

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

ファイルがダウンロードされ、通常はダウンロードフォルダに保存されるよ。（フォルダは環境によって異なる場合あり）

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

ファイルをダブルクリックして開き、Setup.exe を実行しよう。  
利用規約（TOS）を読んで同意したら、インストールは「標準」か「カスタム」を選べるけど、基本は標準でOK。  
あとは「インストール」をクリックすれば、Farming Simulator 2019 のインストールが始まる。数分かかることもあるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

インストールが完了すると、以下のメッセージが表示されるので「完了」をクリックして閉じてね。

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

これで基本インストールは完了！

## ステップ3 ゲームのアクティベーションと専用サーバーの設定

Farming Simulator を起動しよう。デスクトップにショートカットがなければ、Windows メニューから起動してね。  
GPUがないなどのエラーは無視して「いいえ」や「キャンセル」で閉じてOK。ゲームキー入力のためだけに起動するからね。

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

キーが認識されると確認メッセージが出るよ。

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

次に、専用サーバーのウェブインターフェースにログインするためのユーザー名とパスワードを設定または確認しよう。  
設定ファイルは標準インストールの場合、  
`C:\Program Files (x86)\Farming Simulator 2019` フォルダ内の `"dedicatedServer.xml"` にあるよ。  
ログイン情報は自由に変更可能。

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## ステップ4 Farming Simulator 2019 専用サーバーの起動

専用サーバーを起動するには、`"dedicatedServer.xml"` と同じフォルダにある `"dedicatedServer.exe"` を実行しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

起動後は、ブラウザで `https://サーバーIP:8080` にアクセスしてウェブインターフェースを開けるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

ログインは先ほど設定した `"dedicatedServer.xml"` のユーザー名とパスワードで行う。  
ウェブインターフェースは直感的で使いやすく、数クリックで好みの設定ができるよ。

## ステップ5 ファイアウォールでポートを開放

友達と遊ぶためにはサーバーを公開する必要があるから、Windows ファイアウォールでポートを開放しよう。  
TCP プロトコルでポート 10823（ゲームサーバーポート）と 8080（ウェブインターフェース用ポート）を開けてね。  
8080は必要な場合のみ開放すればOK。管理はRDP経由でローカルからもできるよ。  
Windowsでのポート開放方法はこちら → [ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)。

ポート開放後、サーバーが起動していれば外部からアクセス可能になるよ。

## まとめ

おめでとう！これで VPS に Farming Simulator 2019 専用サーバーを無事インストール＆設定できたね！  
もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなの助けになるよ！

<InlineVoucher />