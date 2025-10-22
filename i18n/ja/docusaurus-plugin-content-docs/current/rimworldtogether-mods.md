---
id: rimworldtogether-mods
title: "RimWorld Together：MODのインストール方法"
description: "RimWorld Togetherサーバーを人気のMODで強化して、シームレスなオンラインCO-OPプレイを楽しもう → 今すぐチェック"
sidebar_label: MODのインストール
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## はじめに

RimWorld Togetherは、RimWorldコミュニティが完全に運営する超人気のオープンソースマルチプレイヤーMODで、RimWorldのオンラインCO-OPプレイを可能にします。このガイドでは、RimWorld TogetherサーバーにMODをインストールする方法を紹介します。

<InlineVoucher />

## MODの収集

RimWorld Togetherサーバーには、さまざまなRimWorld MODをインストールできます。

MODは以下の3種類に分類されます：
- **必須MOD（Enforced Mods）**：クライアントが必ず持っていなければ接続できません。
- **任意MOD（Optional Mods）**：持っていなくても接続可能です。
- **禁止MOD（Forbidden Mods）**：禁止されているMODで、サーバーはクライアントの接続を即座に拒否します。

これら3種類は次のMODアップロードセクションで登場し、MODは3つのフォルダに分かれています。

### コアファイル＆DLC

RimWorld Togetherでは、コアファイル＆DLCを簡単にダウンロード可能です。これらは他のMODと同じ扱いになります。

コアファイルとDLCは、[RimWorld TogetherのGitHubリポジトリ](https://github.com/RimworldTogether/RimWorld-Together)から直接ダウンロードできます。特に**Extras.zip**フォルダをダウンロードしてください。

### その他のMOD

インターネットで簡単に多種多様なRimWorld MODを見つけられます。特に人気が高くMOD数も多いので、[RimWorldのSteamワークショップ](https://steamcommunity.com/app/294100/workshop/)を使うのがおすすめです。

SteamワークショップからMODを直接サブスクライブすると、Steamクライアント経由で以下のディレクトリにダウンロードされます：`../steamapps/workshop/content/294100`。

:::tip
Steam版のRimWorldを持っていなくても、SteamCMDを使ってSteamワークショップのファイルやMODをダウンロード可能です。まずは[Valve公式サイトからSteamCMDをダウンロード](https://developer.valvesoftware.com/wiki/SteamCMD)するか、直接[こちら](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)から入手してください。**steamcmd.exe**を実行し、インストールが完了するまで待ちます。準備ができたらコンソールに`login anonymous`と入力。

その後、`workshop_download_item 294100 [workshop_id]`コマンドでMODをダウンロード開始します。`[workshop_id]`はSteamワークショップMODのIDに置き換えてください。IDはURLの末尾部分（例：`/?id=3230195082`）から確認できます。

SteamCMDでダウンロードしたMODは、以下のパスに保存されます：`../steamapps/workshop/content/294100`。
:::

MODをダウンロードしたら、次のセクションでゲームサーバーへのアップロード方法を説明します。

:::note
RimWorld Togetherと確実に互換性がないMODもあります。確認済みの[非互換MODリストはこちら](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md)でチェック可能です。

さらに、RimWorld Togetherでの動作が期待通りでないMODもあるため、動作確認や調査が必要になる場合があります。
:::

## MODのアップロード

MODが準備できたら、まずFTPでゲームサーバーに接続しましょう。接続方法は[FTPアクセスガイド](gameserver-ftpaccess.md)を参照してください。

FTPクライアントで以下のディレクトリに移動します：
```
../rimworld-together/Mods
```

このディレクトリには、先ほど説明した3種類のMOD用フォルダがそれぞれあります。まだ読んでいなければ、どのMODをどこに置くか理解するために戻って確認することをおすすめします。

準備ができたら、ダウンロードしたMODのファイルを1つずつ対応するMODカテゴリのフォルダにアップロードしてください。

:::note
MODの追加や編集を行う際は、必ずサーバーを停止してください。サーバーが起動中だと変更が反映されない場合があります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## サーバーの起動

アップロードが完了したら、サーバーを再起動しましょう。次回起動時に追加したMODがサーバーに反映されます。

これでRimWorld Togetherゲームサーバーに新しいMODを無事インストールできました！

## 人気MOD

まだサーバーにぴったりのMODが見つかっていない？ここでは人気でおすすめのMODを厳選して紹介しています。ゲームプレイをさらに楽しくし、サーバーに最高の仕上げを加えましょう。ぜひ参考にして、あなたのプロジェクトにぴったりのMODを見つけてください。

<SearchableItemList items={items} />

<InlineVoucher />