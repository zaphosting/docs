---
id: terraria-tshock-add-admin
title: "Terraria: サーバー管理者になる方法 (tShock)"
description: "Terrariaサーバーで管理者権限を割り当てて、完全なコントロールと管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる (tShock)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを簡単かつ包括的に管理できるようになります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接使うことが可能です。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## トークンの取得

Terrariaサーバーで管理者登録をするには、あなた専用のトークンが必要です。  
このトークンはサーバーを初回起動した際に生成され、その後ライブコンソールを開くとトークンを確認できます：

![](https://screensaver01.zap-hosting.com/index.php/s/5cEQYgBgxAYQRcx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/HEYwEWe5c3DPZ6E/preview)

この例ではトークンは **4914096** です。

## ゲーム内でトークンを入力

管理者登録をするために、Terrariaのサーバーに参加し、ゲーム内でコマンド **/setup 4914096** を入力します。  
もちろん、トークン **4914096** はあなたのトークンに置き換えてください。

![](https://screensaver01.zap-hosting.com/index.php/s/tadkJkQf5cE3dTB/preview)

### チャットに以下のメッセージが表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/JDfKNpaeB63pCeB/preview)


## 管理者の追加

次に、コマンド **/user add USERNAME PASSWORD owner** で新しい管理者をサーバーに追加できます。  
**USERNAME** はあなたの名前に、**PASSWORD** は今後管理者としてログインする際に使う任意のパスワードに置き換えてください。

![](https://screensaver01.zap-hosting.com/index.php/s/iX62CLtn577NfFQ/preview)  
![](https://screensaver01.zap-hosting.com/index.php/s/xeP8Y8sx66LkSJQ/preview)

:::info
パスワードは最低4文字以上にしてください！
:::

## 管理者としてログイン

ゲーム内で管理者登録が完了したら、以下のコマンドでログインできます：  
**/login USERNAME PASSWORD**

もちろん、**USERNAME** はあなたの名前に、**PASSWORD** は先ほど設定したパスワードに置き換えてください。

![](https://screensaver01.zap-hosting.com/index.php/s/ewTra2Fi2yia9jS/preview)

これでサーバーに管理者としてログインでき、さまざまなコマンドで管理が可能になります。

<InlineVoucher />