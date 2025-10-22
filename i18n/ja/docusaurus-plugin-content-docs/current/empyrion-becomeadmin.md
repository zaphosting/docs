---
id: empyrion-becomeadmin
title: "Empyrion: 管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、ゲーム機能を効果的に管理する方法を学ぼう → 今すぐチェック"
sidebar_label: 管理者になる
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下に説明します。  
<InlineVoucher />

## Steam64IDの確認

まずは、自分のSteam64IDを確認しましょう。  
以下のツールを使うと便利です: [SteamID Lookup](https://steamid.io/lookup)  
このIDは後で設定ファイルに入力します。

プロフィールリンクを入力してsteamidを取得する例はこちら：

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## adminconfigの設定

編集が必要な「**adminconfig.yaml**」は「**Saves**」フォルダ内にあります。  
このフォルダを開くには、[FTPアクセス](gameserver-ftpaccess.md)の手順に従ってください。

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

デフォルトでは以下の値が設定されています：

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

先ほど確認したSteam64IDを「**Id:**」の後に記入します。

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

「**Permission**」でユーザーに与えるランクを指定します。  
ランクは以下の通り割り当てられます：

Permission | ランク
-----|-------
3 | gamemaster
6 | moderator
9 | admin


## まとめ

おめでとうございます！管理者権限の設定が完了しました。  
もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />