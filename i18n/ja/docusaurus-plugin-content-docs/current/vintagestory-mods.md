---
id: vintagestory-mods
title: "Vintage Story：Modsのインストール"
description: "Vintage StoryサーバーにModsをインストールして、新しい機能やゲームプレイの仕組みを追加する方法 → 今すぐ詳しく学ぼう"
sidebar_label: Modsのインストール
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ModsはVintage Storyの体験に欠かせない要素で、サーバーオーナーが新しい仕組みやアイテム、ワールド生成機能、または利便性向上をゲームに追加できます。サーバーにModsをインストールすることで、接続している全プレイヤーが同じゲームプレイの拡張を楽しめます。

Vintage Storyは、小さな調整から大規模なゲームプレイのオーバーホールまで、多彩なModsを揃えた大規模なコミュニティライブラリを提供しています。多くのModsは公式のVintage Story Modデータベースやコミュニティフォーラムで見つけられます。

<InlineVoucher />



## 準備

Vintage StoryサーバーにModsをインストールする前に、以下の手順を完了していることを確認してください：

- Vintage Story Modデータベースなど信頼できるソースから目的のModをダウンロードする  
- Modのバージョンがサーバーのゲームバージョンと一致していることを確認する  
- 新しいファイルをアップロードする前にサーバーを停止する  

ほとんどのVintage Story Modsは`.zip`ファイルとして配布されており、インストール前に解凍しないでください。



## インストール

Vintage StoryのサーバーModsはサーバーのファイルシステムに直接アップロードする必要があります。これは[FTP](gameserver-ftpaccess.md)でサーバーに接続して行います。まずFTPクライアントでサーバーに接続し、サーバーのFTP認証情報でログインしてください。

接続したら、以下のディレクトリに移動します：

```
/gxxxxxx/VintagestoryData/
```

このディレクトリ内に、まだ存在しない場合は以下の2つのフォルダを作成してください：

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – インストールしたサーバーModsをすべて格納  
- **ModConfigs** – インストールしたModsが作成する設定ファイルを保存

フォルダを作成したら、ダウンロードしたModファイルを**Mods**フォルダにアップロードします。例：

```
VintagestoryData
└── Mods
    ├── examplemod.zip
    ├── anothermod.zip
```

Vintage Storyはサーバー起動時にこのフォルダ内のModファイルを自動で読み込みます。



## インストールの確認

すべてのModファイルをアップロードしたら、サーバー管理パネルに戻りサーバーを再起動してください。起動時にサーバーは`Mods`フォルダ内のModsを検出し、自動で読み込みます。Modによっては初回起動後に`ModConfigs`フォルダ内に新しい設定ファイルを生成することがあります。

サーバーが正常に起動したら、サーバーに接続してModが有効になっているか確認しましょう。Modsは起動時のサーバーログに表示されます。もしModが読み込まれない場合は以下をチェックしてください：

- Modのバージョンがサーバーのバージョンと一致しているか  
- 必要な依存Modがすべてインストールされているか  
- `.zip`ファイルが正しい`Mods`フォルダ内にあるか



## まとめ

おめでとうございます！Vintage StoryサーバーにModsを無事インストールできました。Modsを使えばゲームプレイを拡張し、新しい仕組みを導入し、コミュニティ向けに体験をカスタマイズできます。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />