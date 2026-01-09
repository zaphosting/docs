---
id: redm-server-customisation
title: "RedM: サーバー詳細のカスタマイズ"
description: "サーバーリストで目立つように、色や絵文字でサーバー名をカスタマイズする方法をチェック → 今すぐ詳しく知ろう"
sidebar_label: サーバー詳細のカスタマイズ
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
サーバーリストにカスタム情報を表示するためにサーバーをカスタマイズしたい？簡単にできちゃいます！このガイドでは、サーバーリストで目立たせるために使える様々なカスタマイズ方法を紹介します！



<InlineVoucher />



## カスタムサーバー名

### カラーコード

サーバー名に使える色はたくさんあります。色を変えたい時は、色ごとに決まったプレフィックスを使って指定します。使える色の一覧は下の表でチェックしてね。

:::info
サーバー名に色を使うには、有効な[Cfx.reサブスクリプション](https://portal.cfx.re/subscriptions)が必要で、その特典に含まれている必要があります。もし持っているのに使えない場合は、[Own License Key](redm-licensekey.md)を設定しているか確認してみてください。
:::

サーバー名の変更は、設定アクセス方法の3つのうちいずれかで行えます。以下は色を使った例とその見た目です：
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

RedMではサーバー名に直接絵文字を入れることもできます。サーバー設定の`sv_hostname`パラメータに好きな絵文字を入れるだけでOK。Cfx.reサブスクリプションは不要です。



## プロジェクト詳細の設定

### サーバー説明

サーバー説明は、サーバーの簡潔な概要を伝えるのに便利です。RedMゲームサーバーのサーバーリストでサーバー名の横に表示される短い説明を簡単に設定できます。以下はプロジェクト説明の設定例とその見た目です：

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### サーバータグ

サーバータグを設定すると、サーバーの特徴を絞り込みやすくなり、プレイヤーが好みでサーバーをフィルターするときに見つけやすくなります。タグを設定すると、サーバーリストのサーバーページに表示され、フィルターにも使われます。以下はタグ設定例とその見た目です：

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### その他の細かい設定

いくつかの細かいサーバー詳細も好みに合わせて変更できます。

#### ゲームタイプ

`gametype`パラメータを設定すると、サーバーリストのサーバーページに表示される内容が変わります。これはサーバー内のゲームモード自体は変えません。ゲームサーバーのウェブインターフェースから、またはタグを設定して変更可能です：

```
sets gametype "Freeroam"
```

#### 言語

最後に、サーバーリストのサーバーページに表示される言語を変更できます。[言語 / ロケーション（国旗）](redm-locale.md)の設定ガイドがあります。こちらもゲームサーバーのウェブインターフェースかタグ設定で行えます：

```
sets locale "en-GB"
```

利用可能なロケールタグ一覧は[こちらのリソース](https://github.com/TiagoDanin/Locale-Codes#locale-list)などで確認できます。



## まとめ

すべての手順を踏めば、RedMゲームサーバーのカスタマイズは完了です。もし質問やサポートが必要なら、毎日対応しているサポートチームまで気軽に連絡してくださいね！🙂

<InlineVoucher />