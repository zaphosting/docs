---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: アドオンのインストール"
description: "Minecraft Bedrockサーバーをアドオンで拡張して、ゲームプレイをカスタマイズしよう → 今すぐ詳しくチェック"
sidebar_label: アドオンのインストール
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに
Minecraft Bedrock Editionはネイティブのモッディングサポートと巨大なコミュニティを持っており、友達と一緒にゲームプレイを拡張・強化できます。このガイドでは、Minecraft Bedrockゲームサーバーにアドオンをインストールして有効化する手順を解説します。

<InlineVoucher />

## 準備

Minecraft: Bedrockゲームサーバーにアドオンマップをインストールするには、FTPで接続する必要があります。FTPに慣れていない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドをチェックすることをおすすめします。

インストールを進める前に、サーバーにインストールしたいアドオンを見つけておく必要があります。コミュニティが作成した膨大なアドオンやリソースパックが揃っている[CurseForge](https://www.curseforge.com/minecraft-bedrock)をぜひ覗いてみてください。

## インストール方法

Minecraft Bedrockでアドオンをインストールする方法は2つあります。新しいワールドにインストールする簡単な方法と、既存のワールドにインストールする少し難しい方法です。

## 新しいワールドを使う（簡単）

アドオンを使った新しいワールドを作成するには、まずダウンロードした `.mcaddon` または `.mcpack` ファイルを開くだけです。
これでMinecraft Bedrockが起動し、アドオンがゲームにインポートされます。

### ワールド作成

ワールドを作成してアドオンをインストールするには、`Play` をクリックしてから `Create new world` を選択します。
その後、通常のワールド設定を自由に選べます：

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### アドオンの有効化

`Create` をクリックする前に、`Resource packs` または `Behavior packs` に移動します。
そこでアドオン名の横にある `Activate` をクリックしてください：

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

一部のアドオンはリソースパックとビヘイビアパックの両方があるので、両方を有効化する必要があります。すべてのアドオンを有効化したら、`Create` をクリックしましょう。

ワールドをエクスポートしてサーバーにアップロードする方法は、[独自ワールドのインポート](minecraft-bedrock-add-world.md)ガイドを参照してください。

## 既存のワールドを使う（難しい）

既存のワールドにアドオンをインストールするのは少し難しいですが、アドオンを使いながらこれまでの進行状況を維持できるメリットがあります。

### 7-zipのインストール

既存のMinecraftワールドにアドオンをインストールするには、7-zipをインストールしてアドオンファイルを開けるようにする必要があります。
インストールは簡単で、[7-zipダウンロードページ](https://www.7-zip.org/)から最新のセットアップファイルを入手してください：

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

ダウンロード後、ファイルを開いて **Install** をクリックします。

### アドオンの解凍

希望のアドオンをダウンロードしたら、7-zipで `.mcaddon` ファイルを右クリックし、`7-zip` にカーソルを合わせて `Extract to FOLDERNAME` をクリックして解凍します：

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

アドオンにリソースパックとビヘイビアパックの両方が含まれている場合は、フォルダ内の `.mcpack` ファイルも同様に解凍してください：

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

リソースパックとビヘイビアパックの違いはフォルダ名にあります。リソースパックは `RP`、ビヘイビアパックは `BP` が名前に含まれています。

<Tabs>
  <TabItem value="resource-pack" label="リソースパック" default>

### リソースパックのアップロード

FTPクライアントで以下のフォルダに移動します：

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

その後、RPディレクトリをFTPクライアントにドラッグ＆ドロップしてください：

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
リソースパックが直接入っている正しいフォルダをアップロードしてください。サブフォルダだけをアップロードしないように注意！
アップロードするフォルダの中身は以下のようになっているはずです：

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### リソースパックの有効化

RPフォルダ内の `manifest.json` を開きます。次にFTPクライアントでワールドフォルダに移動します：

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

ここで `world_resource_packs.json` を開きます。
もしアドオンを一度もインストールしていなければ、このファイルを新規作成してください。以下のテキストを貼り付けます：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

`pack_id` と `version` の値は先ほど開いた `manifest.json` からコピーして置き換えます：

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
複数のパックをインストールしたい場合は、複数の値を追加できます。
値の間はカンマ `,` で区切る必要がありますが、最後の値の後にはカンマを付けないでください：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="ビヘイビアパック">

### ビヘイビアパックのアップロード

FTPクライアントで以下のフォルダに移動します：

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

その後、BPディレクトリをFTPクライアントにドラッグ＆ドロップしてください：

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
ビヘイビアパックが直接入っている正しいフォルダをアップロードしてください。サブフォルダだけをアップロードしないように注意！
アップロードするフォルダの中身は以下のようになっているはずです：

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### ビヘイビアパックの有効化

BPフォルダ内の `manifest.json` を開きます。次にFTPクライアントでワールドフォルダに移動します：

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

ここで `world_behavior_packs.json` を開きます。
もしアドオンを一度もインストールしていなければ、このファイルを新規作成してください。以下のテキストを貼り付けます：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

`pack_id` と `version` の値は先ほど開いた `manifest.json` からコピーして置き換えます：

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
複数のパックをインストールしたい場合は、複数の値を追加できます。
値の間はカンマ `,` で区切る必要がありますが、最後の値の後にはカンマを付けないでください：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::
</TabItem>
</Tabs>

### 変更の確認

サーバーを起動し、接続してアドオンが正しくインストールされているか確認しましょう。新しい機能やリソースをテストして、問題なく動作しているかチェックしてください。もしうまくいかない場合は、手順を再確認し、ファイルが正しくアップロードされているか、サーバーコンソールにエラーがないかを調べてみてください。

## まとめ

Minecraft Bedrockゲームサーバーにアドオンをインストールすることで、ゲームプレイを大幅に拡張し、新しいコンテンツを追加できます。このガイドを参考にすれば、簡単にアドオンを導入してサーバーをカスタマイズ可能です。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂

<InlineVoucher />