---
id: unturned-rocketmod-permissions
title: "Unturned: サーバーの権限を調整する方法"
description: "サーバーの権限を効果的に管理・カスタマイズして、より良いコントロールとセキュリティを実現しよう → 今すぐ詳しくチェック"
sidebar_label: 権限を調整する
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 準備
必要な設定ファイルをサーバー側で生成するためには、まずサーバーを起動する必要があります。  
サーバーがオンラインになったら、再度停止してもOKです。  
これで、私たちやサーバーが必要とするすべてのファイルが作成されます。

## 設定ファイルを開く
権限は「Permissions.config.xml」ファイルに保存されています。  
このファイルは、当社のインターフェースから簡単に閲覧・編集が可能です。  
サーバーのインターフェースで「Configs」タブをクリックするだけ：

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

「Rocket Permissions」という名前の設定ファイルがあり、青いペンのアイコンをクリックすると編集画面が開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## 設定ファイルの理解
設定ファイルは一見すると複雑に見えますが、安心してください！  
ファイルは複数のグループに分かれています。  
グループはすべて `<groups> </groups>` タグ内に表示・リストされています。  
`<groups>` で始まり、`</groups>` で終わります：

開始部分：

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

終了部分：

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

グループはこの間に表示されます。  
例えば、以下のブロックは1つのグループを表しています：

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

この中に、そのグループに割り当てられた必要なパラメータがすべて含まれています。

## 権限を調整する
グループ内には「Permissions」カテゴリがあります。  
以下のスクリーンショットのように：

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

ここでグループの権限を調整できます。  
また、コマンドの再使用までの待機時間（クールダウン）も指定可能です。  
例えば、グループにユーザーをBANする権限を与えたい場合は、以下のように入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

これで、そのグループはゲーム内でユーザーをBANできるようになり、クールダウンが0秒なので連続して実行可能です。

もしグループに自己回復の権限も与えたい場合は、以下のように設定します：

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

ただし、このコマンドは3600秒に1回しか使えません。  
他の権限も同様の手順で設定できますが、一部の権限には対応するプラグインが必要です。

## ユーザーをグループに追加する
権限を設定したグループができたら、次はユーザーをグループに割り当てます。  
そのためにはユーザーのSteam64IDが必要です。  
以下のリンクから調べられます：  
https://steamid.io/

Steam64IDがわかったら、設定ファイルのMemberパラメータに入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

例としてはこんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

新しいユーザーをグループに追加するたびに、新しい行を作成する必要があります。  
すべてのユーザーを入力し終えたら、「保存」ボタンをクリックして設定を保存。  
その後サーバーを起動すれば、ゲーム内でグループに割り当てられています！

<InlineVoucher />