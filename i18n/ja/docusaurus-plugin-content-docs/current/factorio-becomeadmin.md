---
id: factorio-becomeadmin
title: "Factorio: 管理者になる方法"
description: "サーバーを完全にコントロールするための管理者権限の付与方法とゲーム内オプションの効果的な管理方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を付与することで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 設定方法

管理者権限があれば、Configを変更せずにゲーム内で直接サーバーの設定を変更できます。管理者の追加は、インターフェースのConfigs内にある**server-settings.json**のConfigファイルで行います。

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

Configファイルの最後に重要な部分があります。管理者はここで定義します：

```
  "_comment_admins": "大文字小文字を区別しないユーザー名のリスト。即座に昇格されます",
  "admins": []
}
```

管理者権限を付与したいプレイヤーの名前をここに記載します。複数の管理者を追加する場合は、例えば以下のようになります：

```
  "_comment_admins": "大文字小文字を区別しないユーザー名のリスト。即座に昇格されます",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

これで**PlayerName1, PlayerName2, PlayerName3**という名前のプレイヤーに権限が付与されました。管理者コマンドはゲーム内のコンソールから実行可能です。以下に一般的に使われるコマンドの一覧を紹介します。



### よく使われるコマンド

|                コマンド                 |                         説明                          |
| :------------------------------------: | :---------------------------------------------------: |
|                 /admin                 |               プレイヤー管理GUIを開きます。               |
|           /ban player reason           |                          プレイヤーをBANする                          |
|                 /bans                  |               BANされたプレイヤーのリストを表示します。               |
|             /unban player              |                         プレイヤーのBANを解除                         |
|  /banlist add/remove/get/clear player  | BANリストにプレイヤーを追加・削除します。/banや/unbanと同様の機能です。 |
|          /kick player reason           |                         プレイヤーをキック                         |
|              /mute player              |                         プレイヤーをミュート                         |
|             /unmute player             |                        プレイヤーのミュート解除                         |
| /whitelist add/remove/get/clear player |         ホワイトリストにプレイヤーを追加・削除します          |

さらに詳しいコマンドは公式の[Factorio Wiki](https://wiki.factorio.com/Console)で確認できます。


## まとめ

おめでとうございます、管理者権限の設定が完了しました！もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />