---
id: scum-becomeadmin
title: "SCUM: 管理者になる方法"
description: "ゲームサーバーをフル管理者権限で操作し、強力なコマンドでゲームプレイを強化する方法を発見しよう → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-scum
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに
管理者権限の割り当てにより、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下に説明します。

<InlineVoucher />



## 設定方法

管理者権限の設定は、**ゲームサーバーの設定ページ**から行えます。設定を開き、**Admin List**（管理者リスト）オプションに移動してください。そこに自分の**SteamID64**を入力すると、自分を管理者として割り当てられます。複数のプレイヤーを管理者にしたい場合は、SteamIDを**カンマ**で区切って入力してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/AiMDoy5mdEHjnj3/download)



## 管理者コマンド

以下は、サーバーの管理者として使える一般的な管理者コマンドの一覧です。

| コマンド           | 説明                                                        | 例                           |
| ----------------- | ------------------------------------------------------------ | ----------------------------- |
| #LIST             | SCUMの管理コマンドの完全なリストを表示します。              | #list                        |
| #LISTPLAYERS      | 現在サーバーにいる全プレイヤーのリストを表示します。         | #listplayers                 |
| #KICK             | 指定したプレイヤーをサーバーからキックします。               | #kick playername             |
| #BAN              | 指定したプレイヤーをサーバーから永久にBANします。             | #ban playername              |
| #LOCATION         | 指定したプレイヤーの正確な位置を表示します。                 | #location playername         |
| #LISTASSETS       | ゲーム内の資産をキーワードで絞り込んでリスト表示します。       | #listassets wood             |
| #SPAWNITEM        | 指定したアイテムをプレイヤーの前にスポーンさせます。           | #spawnitem cal_9mm           |
| #SPAWNCHARACTER   | 指定したNPC、動物、パペットをプレイヤーの前にスポーンさせます。 | #spawncharacter bp_cow2      |
| #TELEPORT         | 指定した座標にテレポートします。                             | #teleport 143,1222,1333      |
| #TELEPORTTOPLAYER | 指定したプレイヤーの元にテレポートします。                   | #teleport playername         |
| #SETFAMEPOINTS    | 指定したプレイヤーの名声ポイントを設定します。               | #setfamepoints 400 playername |





## まとめ

おめでとうございます！すべての手順を正しく行えば、サーバーの管理者権限の設定は完了しているはずです。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />