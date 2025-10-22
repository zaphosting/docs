---
id: eco-becomeadmin
title: "ECO: 管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、効率的にゲームを管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールし、シンプルかつ包括的に管理できます。管理者として、ゲーム内で提供されているすべてのオプションや機能を直接使うことが可能です。ここでは、あなたのゲームサーバーに管理者権限を割り当てるための手順を詳しく説明します。  
<InlineVoucher />

## 設定方法
管理者の追加は、インターフェースの「Configs」内にある**Users.eco**設定ファイルで行います。

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)

新しいプレイヤーを管理者に追加するには、**Users.eco**設定ファイルの以下の部分を編集します：

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```

管理者にしたいプレイヤーは、**values**フィールドに指定します。複数の管理者がいる場合はカンマ区切りで追加してください。プレイヤーの識別にはSteamID64を使います。

SteamID64は、Steamプロフィールにアクセスし、プロフィールのどこかを右クリックしてプロフィールのSteam URLをコピーすることで取得できます。

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)

その後、コピーしたURLを以下のいずれかのサイトに入力してください：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)

これでアカウントの一般情報とSteam IDが表示されます。このSteam IDを**values**に入力します。結果は以下のようになります：

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```

サーバーを再起動すると、登録されたプレイヤーに管理者権限が付与されます。管理者を追加したい場合、もう毎回Configを編集する必要はありません。ゲーム内で以下のコマンドを使って追加できます：

```
/admin [player]
```

以下に、管理者として使えるよく使われるコマンドの一覧を紹介します。

## よく使われるコマンド一覧

|              コマンド              |                      説明                       |
| :--------------------------------: | :----------------------------------------------: |
|             /allblocks             |                   すべてのブロックをスポーン                    |
|          /allconstructed           |         プレイヤーが建設可能なすべてのブロックをスポーン         |
|             /allplants             |                すべての植物ブロックをスポーン                 |
|             /allskills             |                   すべてのスキルをアンロック                   |
|            /allterrain             |               掘削可能なすべてのブロックをスポーン               |
|          /allworldobjects          |                すべてのワールドオブジェクトをスポーン                |
|      /kick [player],(reason)       |                      プレイヤーをキック                      |
|       /ban [player],(reason)       |                      プレイヤーをBAN                       |
|     /give [itemname],(amount)      |                 アイテムを自分に与える                  |
| /giveskillpoints [player],(amount) |           他のプレイヤーにスキルポイントを与える           |
|                /fly                |                    飛行モードの切り替え                    |
|         /move [x],[y],[z]          | x, y, zの座標に移動（xyzは整数） |
|       /removeadmin [player]        |               管理者権限を剥奪               |

さらに詳しいコマンドは公式の[ECO Wiki](https://eco.gamepedia.com/Chat_Commands)でチェックしてね。

## まとめ

おめでとう！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもサポートチームに気軽に連絡してくださいね。毎日対応してるよ！🙂

<InlineVoucher />