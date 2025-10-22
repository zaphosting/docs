---
id: arma3-altislife-ranks
title: "Arma 3: Altis Lifeサーバーにランクを追加する方法"
description: "Arma 3でCop、Medic、Adminなどのプレイヤーランクを割り当てて管理し、ゲームプレイやサーバーの役割を強化する方法を学ぼう → 今すぐチェック"
sidebar_label: Altis Lifeランク
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Arma 3では、プレイヤーに割り当てられるさまざまなランクがあります。これにはCop、Medic、そしてさまざまなAdminランクが含まれます。  
サーバーによっては、新しい派閥や職業が追加されると他のランクも存在する場合があります。  
以下では、ゲーム内でCop、Medic、管理者のランクを割り当てる方法を、**players**テーブル内のデータベースを使って解説します。

:::info
重要：データベース内でプレイヤー名を確認するには、そのプレイヤーが少なくとも一度はサーバーに接続している必要があります！
:::

<InlineVoucher />

## データベースを開く

まずは、左メニューの **ツール** > **データベース** からデータベースにアクセスします：

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

青いアイコンをクリックするとデータベースのログイン画面に進みます。左側にはデータベースのログイン情報（ユーザー名とパスワード）も表示されています：

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

このボタンをクリックすると、phpMyAdmin（データベース管理画面）に入ります。  
左側で自分のデータベース名を選択してください：

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

次に、ランクを割り当てるテーブル **players** を左クリックで選択します：

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

割り当てたいプレイヤー名を検索し、**編集** をクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## CopとMedicのランクを割り当てる

CopレベルとMedicレベルのフィールドはリストの一番上にあります：

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

ドロップダウンメニューから簡単にランクレベルを選択できます。  
Copはレベル1から7まで、Medicはレベル1から5まで選べます。  
レベルが高いほど、ゲーム内での権限が増え、使用可能な武器や乗り物にも影響します。

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## 管理者（Adminレベル）のランクを割り当てる

Adminレベルも同様に設定しますが、項目はもう少し下にあります：

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

こちらもドロップダウンで5段階のレベルから選択可能です。  
レベルが高いほど、ゲーム内での管理権限が増えます。

変更を保存するには、右下の **実行（GO）** ボタンをクリックするだけ：

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

これでランクが保存され、プレイヤーが再接続すればランクが反映されます。サーバーの再起動は不要です。

<InlineVoucher />