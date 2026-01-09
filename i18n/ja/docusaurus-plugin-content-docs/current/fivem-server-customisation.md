---
id: fivem-server-customisation
title: "FiveM：サーバー詳細のカスタマイズ"
description: "サーバーリストで目立つように、色や絵文字でサーバー名をカスタマイズする方法をチェック → 今すぐ詳しく学ぼう"
sidebar_label: サーバー詳細のカスタマイズ
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
サーバーリストにカスタム情報を表示するためにサーバーをカスタマイズしたい？簡単にできるよ！このガイドでは、サーバーリストで目立つために使える様々なカスタマイズ方法を紹介するね！



<InlineVoucher />



## カスタムサーバー名

### カラーコード

サーバー名に使える色はたくさんあるよ。色を変えたい時は、色ごとに決まったプレフィックスを使って指定するんだ。使える色の一覧は下の表でチェックしてね。

:::info
サーバー名に色を使うには、有効な[Cfx.reサブスクリプション](https://portal.cfx.re/subscriptions)が必要で、その特典に含まれている必要があるよ。もし持っているのに使えない場合は、[Own License Key](fivem-licensekey.md)を設定しているか確認してね。
:::

txAdminのCFGエディターを開いて、`sv_hostname`を検索し、好きなようにカスタマイズすればサーバー名を変えられるよ。色の使い方と結果の例はこんな感じ：
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| コード | 色          | 16進コード |
| ------ | ----------- | ---------- |
| ^0     | ホワイト    | #F0F0F0    |
| ^1     | レッド      | #F44336    |
| ^2     | グリーン    | #4CAF50    |
| ^3     | イエロー    | #FFEB3B    |
| ^4     | ブルー      | #42A5F5    |
| ^5     | ライトブルー| #03A9F4    |
| ^6     | パープル    | #9C27B0    |
| ^7     | ホワイト    | #F0F0F0    |
| ^8     | オレンジ    | #FF5722    |
| ^9     | グレー      | #9E9E9E    |

### 絵文字

FiveMではサーバー名に絵文字を直接入れることもできるよ。`sv_hostname`パラメータに好きな絵文字を入れるだけでOK。Cfx.reサブスクリプションは不要だよ。



## プロジェクト詳細の設定

### サーバー説明

サーバー説明は、サーバーの簡潔な概要を伝えるのに便利だよ。FiveMゲームサーバーのプロジェクト説明を簡単に設定できて、サーバーリストのサーバー名の横に表示されるよ。設定例とその表示例はこんな感じ：

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### サーバータグ

サーバータグを設定すると、サーバーの特徴を絞り込んで伝えられるし、プレイヤーが好みに合わせてサーバーをフィルターするときに見つけやすくなるよ。タグを設定すると、サーバーリストのページに表示され、フィルターにも使われるよ。設定例と表示例はこんな感じ：

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### その他の詳細設定

いくつかの細かいサーバー詳細も好きに変えられるよ。

#### ゲームタイプ

`gametype`パラメータを設定すると、サーバーリストのページに表示される内容が変わるよ。これはサーバー内のゲームモード自体は変えないから注意。ゲームサーバーのウェブインターフェースからか、タグを設定して変えられるよ：

```
sets gametype "Freeroam"
```

#### 言語

最後に、サーバーリストに表示されるサーバーの言語も変えられるよ。[言語 / ロケーション（国旗）](fivem-locale.md)のガイドがあるから参考にしてね。これもゲームサーバーのウェブインターフェースかタグで設定可能：

```
sets locale "en-GB"
```

利用可能なロケールタグ一覧は[こちらのリソース](https://github.com/TiagoDanin/Locale-Codes#locale-list)などで確認できるよ。



## まとめ

ここまでの手順を踏めば、FiveMゲームサーバーのカスタマイズはバッチリ完了！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />