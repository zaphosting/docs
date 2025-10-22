---
id: unturned-becomeadmin
title: "Unturned: サーバー管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、ゲーム内管理を強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接使うことができます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 準備

サーバーに管理者を追加するには、設定ファイルを編集する必要があります。変更を適用する際に問題が起きないよう、必ず事前にサーバーを停止してください！

また、サーバーがプレイヤーを識別できるように、それぞれのSteam ID（64ビット）が必要です。こちらの[ツール](https://steamidfinder.com/)を使うと簡単に調べられます。  
ツールのページにアクセスしたら、名前を入力するだけで必要な情報がわかります。

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## 設定ファイルを開く

サーバー上のファイルを編集する方法は2つあります。  
1つは[FTPアクセス](gameserver-ftpaccess.md)を使う方法です。

もう1つは、ウェブインターフェース内の設定エディターを使う方法です。  
今回はウェブインターフェースの内蔵エディターを使います。サーバーの左サイドバーにある「設定」タブ内の「Configs」メニューを開いてください。  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

システムが利用可能なすべての設定ファイルを読み込み、一覧表示します。少し待つ必要がありますが、通常数秒で完了します。すべての設定ファイルが読み込まれたら、「commands.dat」ファイルを編集します。青い「ファイルを開く」ボタンをクリックすると、ウェブエディターでファイルが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## 管理者を追加する

設定ファイル内で管理者（admin）またはオーナー（owner）を指定できます。オーナー権限は1人だけ割り当て可能なので注意してください！

オーナー権限を割り当てる場合は、新しい行に以下を入力します：

`owner Steam64IDReplacedHere //<-- ここを自分のSteam64-IDに置き換えてください`

管理者を追加する場合は、「owner」を「admin」に置き換えるだけです。

`admin Steam64IDReplacedHere //<-- ここを自分のSteam64-IDに置き換えてください`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

すべての権限を設定ファイルに追加したら、「保存」をクリックして設定を保存します。サーバーを再起動すれば、設定ファイルに登録されたプレイヤーに自動的に権限が付与されます。

## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />