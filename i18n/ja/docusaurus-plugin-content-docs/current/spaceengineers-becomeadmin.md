---
id: spaceengineers-becomeadmin
title: "Space Engineers：サーバー管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、ゲーム内でスムーズに管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを簡単かつ包括的に管理できるようになります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接使うことが可能です。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

ゲーム内で自分のゲームサーバーをしっかり管理するには、管理者ランクを持っていることが重要です。

### SteamID64をウェブサイトで調べる

まずはSteamでプロフィールを開き、どこでもいいので右クリックします。  
そこでプロフィールのSteam URLをコピーできます。

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

コピーしたURLを以下のサイトに入力します：

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### SteamIDを設定ファイルに記入する

次に、あなたのインターフェースとサーバーを開きます。  
**Configs** タブに移動してください。

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

次に **SpaceEngineers-Dedicated.cfg** を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

開いたら **STR + F** を押して *admin* を検索します。

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

ここに以下のように書き込みます：
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
```
最終的にはこんな感じになります：

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

あとは設定ファイルを**保存**するだけで完了です。

## まとめ

おめでとうございます！管理者権限の設定が無事に完了しました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />