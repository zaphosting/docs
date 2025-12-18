---
id: scp-becomeadmin
title: "SCP Secret Laboratory：自分のサーバーで管理者になる方法"
description: "ゲームサーバーで管理者権限を割り当ててサーバーを完全にコントロールし、役割を効果的に管理する方法を発見しよう → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

:::info
最近のSCPアップデートにより、パスワードログインは機能しなくなりました。SteamIDで直接役割を追加するために、以下のガイドを参照してください。 
:::


## Remote Admin Configの設定

### 準備

まずは、自分のSteam64IDを確認しましょう。  
以下のツールを使えます：[SteamID Lookup](https://steamid.io/lookup)。  
このIDは後で設定ファイルに入力します。

プロフィールリンクを入力してSteamIDを取得する例はこちら：

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## 管理者の追加

次に設定ファイルを開いて編集します。  
「**Configs**」の中の「**Settings**」にあります。

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

そこで「**config_remoteadmin.txt**」を開き、必要な行を書き換えます。

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

ここで役割を作成し割り当てます。  
「**@steam: owner**」の前にある「**SomeSteamId64**」を、先ほど確認したSteamID64に置き換えてください。

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

追加で権限を与えたいユーザーがいれば、同様に設定可能です。  
例では3人に権限を設定し、1人は「**owner**」、残り2人は「**admin**」にしています。

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## パスワードを上書きするためにさらに役割を追加する

複数の役割でリモート管理者パスワードを上書きしたい場合は、以下のファイルの該当行を調整してください：  
「**config_remoteadmin.txt**」

以下のセクションを探します：

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

役割を追加するには、カンマで区切って希望の役割を追記します。  
例えば、adminとmoderatorを追加してパスワードを上書きする場合：

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
ゲーム内でリモート管理コンソールを開くには、サーバーにログイン後「**M**」キーを押します。サーバーが稼働中の場合は設定を反映させるために再起動が必要です。サーバーがオフラインなら起動してからゲーム内のリモート管理コンソールを確認してください。
:::


## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。  
さらに質問やサポートが必要な場合は、いつでも毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />