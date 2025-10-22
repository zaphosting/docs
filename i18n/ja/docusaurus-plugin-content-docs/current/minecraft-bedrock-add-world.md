---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock：自分のワールドをインポート"
description: "カスタムMinecraft Bedrockワールドをサーバーにインポートして、シームレスなマルチプレイヤー体験を楽しむ方法をチェック → 今すぐ詳しく見る"
sidebar_label: 自分のワールドをインポート
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Minecraft Bedrock Editionでは、自分だけのワールドを作成してサーバーで使うことができます。このガイドでは、Minecraft: Bedrockサーバーに自分のワールドをインポートして、友達と共有する方法を紹介します。

<InlineVoucher />

## 準備

Minecraft Bedrockサーバーにワールドをインポートするには、FTPで接続する必要があります。FTPに慣れていない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドをチェックするのがおすすめです。

インポートしたいワールドがすでにパソコンに保存されていることを確認してください。ワールドは対応するファイルが入ったフォルダになっている必要があります。  
Minecraft: Bedrockのシングルプレイヤーからワールドをアップロードしたい場合は、以下のパスにあります：
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## インストール

### サーバーを停止する

インポートを始める前に、Minecraft Bedrockサーバーを停止してください。これでデータの損失を防ぎ、インポートがスムーズに進みます。

### ワールドをアップロードする

FTPでサーバーのワールドが保存されているディレクトリに移動します。通常のパスは以下の通りです：

```
/gXXXXXX/minecraft-bedrock/worlds
```

ここには現在サーバーに保存されているすべてのワールドのフォルダが表示されます。各ワールドはユニークな名前が付いています。

インポートしたいワールドのフォルダをこのディレクトリにアップロードしてください。フォルダ名を変更しないように注意してください。変更するとMinecraftがワールドを認識しません。

次に、サーバーのメインフォルダにある `server.properties` ファイルを開き、以下の設定の `level-name` の値をアップロードしたワールドのフォルダ名に変更します：

```
level-name=Bedrock level
```
:::tip
デフォルトのワールドを再度使いたい場合は、値を元の `Bedrock level` に戻してサーバーを再起動すればOKです！
:::

### サーバーを起動する

ワールドのアップロードが完了したら、サーバーを再起動してください。インポートしたワールドが自動的に読み込まれるはずです。

### 変更を確認する

サーバーに接続して、インポートしたワールドが正しく読み込まれているか確認しましょう。新しいワールドで遊べるはずです。もしうまくいかない場合は、手順をもう一度見直し、ワールドフォルダの名前や配置が正しいかチェックしてください。

## まとめ

Minecraft Bedrockサーバーにワールドをインポートするのは簡単な作業で、自分の作品をみんなと共有できます。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />