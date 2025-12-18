---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Mods / Modpacks のインストール"
description: "MinecraftのModsやModpacksをダウンロードしてインストールし、サーバーのゲームプレイを強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Mods / Modpacks のインストール
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## はじめに

MinecraftサーバーにMod / Modpackをダウンロードしてインストールする方法を学びます。

<InlineVoucher />

## 準備

- ゲームサーバー（[こちらから入手可能](https://zap-hosting.com/en/gameserver-hosting/)）
- FTPクライアント（例：WinSCP、FileZilla）
- FTPでサーバーに接続する方法はこちら：[FTPアクセス](gameserver-ftpaccess.md)



## ModsやModpacksの探し方＆ダウンロード

Mods / Modpacksを探せる場所はネット上にたくさんありますが、一番大きなプラットフォームはCurseForgeです。Minecraft用のほぼ99％のMods / Modpacksがここで見つかり、数クリックでダウンロードできます。このガイドではCurseForgeの使い方にフォーカスします。Modsは[こちら](https://www.curseforge.com/minecraft/mc-mods)、Modpacksは[こちら](https://curseforge.com/minecraft/modpacks)から検索可能です。

:::note
Modsは特定のModローダーのバージョンでしか動作しません。必要なバージョンはModのページで確認してください。複数のModsを入れる場合は、すべて同じバージョンを使っているか必ずチェックしましょう。また、ForgeのModsはFabricのModsと互換性がなく、その逆も同様です。
:::

お好みのMod / Modpackのページに行き、「Files」タブをクリック。

![](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


欲しいバージョンを見つけてクリックし、「File Details」セクションへ進みます。

:::tip
「Files」タブの上部にあるドロップダウンメニューでバージョンやModローダーで絞り込みができます。

![](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Mods向け" default>
「File Details」セクションで「Download」ボタンを押します。ファイルをどこかに保存してください。後で使います。

![](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="Modpacks向け">
「File Details」セクションをスクロールして「Additional Files」を見つけ、三点リーダーをクリックし「Download file」を選択。ファイルをどこかに保存してください。後で使います。

![](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## ステップ2 - ダウンロードファイルの解凍（Modpacksのみ）

PCでダウンロードしたファイルを見つけて右クリック、「すべて展開...」を選択。解凍先のフォルダを指定して覚えておいてください！

![](https://github.com/Yoshlix/docs/assets/26007280/edbc753d-1906-4d81-9f05-354ff48ceebb)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

解凍したフォルダにはmods、config、defaultconfigフォルダが含まれているはずです。ここにないフォルダが他にもある場合もあります。

:::note
AllOfFabric6のように追加の手順が必要なModpackもあります。AllOfFabric6の場合は「startserver.bat」（Windows）または「startserver.sh」（Linux / MacOS）を実行して上記のフォルダを取得します。このスクリプトがフォルダをダウンロードしてくれます。ほとんどの場合は追加手順なしでフォルダが揃っています。解凍フォルダにスクリプトがない場合は、ネットでModpackのサーバーファイル取得方法を調べてみてください。
:::


## ステップ3 - 正しいサーバーバージョンのインストール

Zap-Hostingのウェブインターフェースで、対象のゲームサーバーを選択し、設定の「Games」へ進みます。

![](https://github.com/Yoshlix/docs/assets/26007280/47e88856-0120-408a-8bec-41e54e3b0738)

「Available Games」を展開し、Modローダー（ForgeはForge Mods / Modpacks用、FabricはFabric Mods / Modpacks用）を探して、緑のダウンロードボタンをクリック。

![](https://github.com/Yoshlix/docs/assets/26007280/e3b4e5d3-11c9-4f09-ae46-27cea93a58a3)


「Game version」のドロップダウンメニューから、Mod / Modpackに対応したMinecraftバージョンを選択。Forgeの場合は最新バージョンか推奨バージョンを選べます。まずは最新バージョンを試して、うまく動かなければ推奨バージョンを試してみてください。「Accept and Install」をクリック。

![](https://github.com/Yoshlix/docs/assets/26007280/3530466f-bd58-4d0e-9ca3-8d964ac76d80)


:::tip
どのMinecraftバージョンが必要かわからない場合は、CurseForgeの「File Details」ページに戻ってください。ゲームコントローラーアイコンの横にバージョンが表示されています。

![](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

インストールが完了すると、ゲーム名（例：Forge、Fabric）の横に青いボタンが表示されます。このボタンをクリックしてゲームを有効化しましょう。

![](https://github.com/Yoshlix/docs/assets/26007280/53cf9569-3529-42fb-9a7d-6ae636ca4f9c)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## ステップ4 - FTPでMods / Modpackをアップロード

選んだFTPクライアントでサーバーに接続します。サーバーは停止していることを確認してください。

### Modのアップロード

接続したら、ゲームフォルダ（例：minecraft-forge、minecraft-fabric）に移動。modsフォルダを開き、ダウンロードしたModファイルをドラッグ＆ドロップでアップロード。

![](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

アップロードが終わったらサーバーを起動できます。

### Modpackのアップロード

接続したら、ゲームフォルダ（例：minecraft-forge、minecraft-fabric）に移動。サーバー上のworld、mods、config、defaultconfigフォルダを削除します。次に、先ほど解凍したフォルダ内のjre、librariesフォルダ以外のすべてのフォルダを選択してサーバーディレクトリにドラッグ＆ドロップでアップロード。

![](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

アップロードが完了したらサーバーを起動しましょう。



## 人気のMods

まだサーバーにぴったりのModsを探してる？ゲームプレイを強化し、サーバーに最高の仕上げを加えるために厳選した人気＆おすすめModsリストをチェックしよう。インスピレーションを得て、プロジェクトにぴったりの追加要素を見つけてね。

<SearchableItemList items={mods} />

## 人気のModpacks

まだサーバーにぴったりのModpacksを探してる？ゲームプレイを強化し、サーバーに最高の仕上げを加えるために厳選した人気＆おすすめModpacksリストをチェックしよう。インスピレーションを得て、プロジェクトにぴったりの追加要素を見つけてね。

<SearchableItemList items={modpacks} />

<InlineVoucher />