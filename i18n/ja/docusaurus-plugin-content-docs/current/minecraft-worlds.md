---
id: minecraft-worlds
title: "Minecraft: ワールドセーブの管理"
description: "Minecraftのワールドをプラットフォーム間で管理、変換、バックアップする方法を解説。ゲームの進行を安全かつスムーズに保とう → 今すぐ詳しく見る"
sidebar_label: ワールド管理
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Minecraftのゲームセーブは基本的に**ワールド**として保存されており、各ワールドは独立したセーブデータです。このガイドでは、Minecraftゲームサーバー上でのワールド管理方法、プラットフォーム間のワールド変換、ワールドの再生成、ローカルおよびサーバー上のワールドのバックアップ、そしてワールドのアップロード方法について解説します。

<InlineVoucher />

## 準備

ワールドを管理するには、まずFTPを使ってMinecraftゲームサーバーにアクセスする必要があります。FTPの使い方がわからない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドをご覧ください。

## プラットフォームの違い比較

バニラサーバーとサーバープラットフォームの大きな違いの一つは、バニラサーバーは通常ワールド、ネザー、エンドの次元を一つのセーブとしてまとめている点です。

一方、Spigot、PaperMC、Bukkitなどのサーバープラットフォームは、それぞれの次元を別々のワールドセーブとして分割しています。以下の表は、例として「**zapdocs**」というワールドが両タイプのサーバープラットフォームでどのように扱われるかを比較したものです。

| ワールド次元       | バニラサーバー（統合） | サーバープラットフォーム（個別）  |
| ------------------ | ---------------------- | --------------------------------- |
| 通常/オーバーワールド | zapdocs                 | zapdocs                           |
| ネザー             | zapdocs                 | zapdocs_nether                    |
| エンド             | zapdocs                 | zapdocs_the_end                   |

## ワールドの変換

バニラサーバーとサーバープラットフォーム間でワールドセーブを保持したい場合、上記の違いによりファイル構造を調整し、ネザーやエンドの個別ワールドを抽出または統合する必要があります。

:::info
これはバニラとサーバープラットフォーム間で既存のワールドを保持して移動したい場合のみ必要です。単にバニラ間やサーバープラットフォーム間で移動する場合は変換は不要です。
:::

:::note
作業前に必ずサーバーを停止して、競合やロールバックを防いでください。
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="バニラから変換" default>

バニラからサーバープラットフォーム形式に変換するには、特定のフォルダを抽出して各次元ごとに新しい個別ワールドを作成します。通常はSpigot、PaperMC、Bukkitなどのサーバープラットフォームを動かす新しいサーバーに全ワールドを移動する想定です。

FTPでサーバーにアクセスし、`../vanilla/[your_world]` のパスにある変換したいワールドセーブを開きます。**DIM1** と **DIM-1** フォルダを探してください。

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

**DIM1** フォルダはエンドのデータ、**DIM-1** フォルダはネザーのデータ用です。

それぞれのフォルダを新しい個別ワールドフォルダに移動します：
- ネザー用にルートフォルダ直下に `[your_world]_nether` フォルダを作成し、**DIM-1** フォルダをそこに移動。
- 同様にエンド用に `[your_world]_the_end` フォルダを作成し、**DIM1** フォルダを移動。

:::info
`DIM` フォルダを上書きする必要がある場合がありますが、サーバープラットフォームはデフォルトで全次元をすぐ生成するため通常です。
:::

この例ではワールド名が `world` なので、ルートに `world_nether` と `world_the_end` フォルダを作成し、それぞれに対応する `DIM` フォルダを移動しています。

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

これで3つの個別ワールドがサーバープラットフォームで使える状態になりました。

</TabItem>

<TabItem value="converting-to-vanilla" label="バニラへ変換">

サーバープラットフォームからバニラ形式に変換する場合は、ほぼ同じ手順を逆に行います。ネザーとエンドの個別ワールドからデータを抽出し、単一のワールド形式に統合します。通常はバニラサーバーを動かす新しいサーバーに統合ワールドを移動する想定です。

FTPでサーバーにアクセスし、ルートパスにある3つの個別ワールドフォルダ `[your_world]`、`[your_world]_nether`、`[your_world]_the_end` を探します。`[your_world]` はワールド名に置き換えてください。

`[your_world]_nether` フォルダを開き、`DIM-1` フォルダをメインの `[your_world]` フォルダに移動します。この例でもワールド名はデフォルトで `world` です。

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

同様に `[your_world]_the_end` フォルダを開き、`DIM1` フォルダをメインの `[your_world]` フォルダに移動します。

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

これで統合されたワールドがバニラサーバーで使える状態になりました。

</TabItem>
</Tabs>

## ワールドの生成

ワールドの生成は簡単で、新しいワールドを生成するか、現在のワールドを新規に再生成するか選べます。Minecraftは**シード**システムを使っており、シードがあればワールドの正確な初期状態を再生成できます。

<Tabs>
<TabItem value="generating-new" label="新しいワールドを生成" default>

新しいワールドを生成するには、サーバーを停止してFTPで接続します。`server.properties` 設定ファイルを開きます。これはサーバーのウェブインターフェースの **Configs** セクションかFTP経由で編集可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

新しいワールドを生成するには、以下のどちらかを行います：
- FTPで、設定ファイルの `level-name` パラメータと同じ名前のワールドフォルダを削除する。
- 設定ファイルの `level-name` パラメータを別の名前に変更して保存する。

古いセーブを残したい場合は2番目の方法がおすすめです。こうすると古いワールドはサーバーに残りますが「非アクティブ」になります。

サーバーを再起動すると、`level-name` の名前のワールドがないことを検知し、新しいシードで新規ワールドを生成します。

</TabItem>

<TabItem value="regenerating-current" label="現在のワールドを再生成">

現在のワールドを再生成するには、まずシードを確認します。これはサーバーのウェブインターフェースの **Console** セクションか、ゲーム内でOP権限を持っていれば `/seed` コマンドで確認できます。

コンソールかゲーム内で `/seed` コマンドを実行し、現在のワールドの**シード**値をメモしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

シードがわかったら、`server.properties` 設定ファイルの `level-seed` パラメータをそのシード値に変更します。編集はウェブインターフェースの **Configs** セクションかFTPで行えます。

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
ファイルの保存が正しく行われるよう、編集前にサーバーを停止してください。
:::

`level-seed` パラメータをシード値に変更して保存したらFTPでサーバーに接続します。

ワールドを再生成するには、以下のどちらかを行います：
- FTPで、設定ファイルの `level-name` パラメータと同じ名前のワールドフォルダを削除する。
- 設定ファイルの `level-name` パラメータを別の名前に変更して保存する。

古いセーブを残したい場合は2番目の方法がおすすめです。こうすると古いワールドはサーバーに残りますが「非アクティブ」になります。

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

サーバーを再起動すると、`level-name` の名前のワールドがないことを検知し、`level-seed` パラメータで指定したシードを使って現在のワールドを再生成します。

</TabItem>
</Tabs>

## ワールドセーブのバックアップ

### ローカルセーブ

ローカルワールドセーブはシングルプレイ中に作成したものです。WindowsのAppData内、以下のパスにあります：
```
../AppData/Roaming/.minecraft/saves
```

:::tip
`CTRL` + `R` を同時に押して「ファイル名を指定して実行」を開き、以下のパスを入力すると直接アクセスできます：`%appdata%/.minecraft/saves/`。OKを押すだけでフォルダが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

このフォルダ内にローカルの全ワールドセーブがまとめて見られます。

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### FTP経由でのセーブアクセス

サーバー上のワールドセーブをバックアップするのも簡単です。FTPクライアントでゲームサーバーに接続し、利用しているサーバープラットフォームのルートフォルダにアクセスしてください。ワールドセーブはそこに直接あり、デフォルトのワールド名は `world` です。

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### 自動バックアップ

当社のウェブインターフェースからワールドセーブ（と設定ファイル）を自動でバックアップするオプションもあります。ゲームサーバーのウェブインターフェースで **ツール -> バックアップ** セクションに移動し、スケジュール設定など様々なオプションを設定可能です。10GBの無料バックアップストレージが利用でき、そこにバックアップが保存されます。バックアップの詳細は専用の[バックアップ](gameserver-backups.md)ガイドもご覧ください。

## ワールドセーブのアップロード

バックアップと同様に、ワールドセーブのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、利用しているサーバープラットフォームのルートパスに移動します。

:::info バニラ＆サーバープラットフォームのワールド
バニラサーバーとサーバープラットフォームはワールドの保存形式が少し異なります。

バニラからPaperMCなどのサーバープラットフォーム、またはその逆にセーブを移動する場合は、ワールドの変換セクションを必ずご覧ください。
:::

FTPクライアントでワールドセーブフォルダをルートフォルダにドラッグ＆ドロップするだけでサーバーにアップロードされます。

:::tip
アップロードしたゲームセーブフォルダの名前を控えておくと、次のセクションで有効化する際に便利です。
:::

## ワールドセーブの有効化

特定のワールドセーブを使うには、`server.properties` 設定ファイルの `level-name` パラメータを編集する必要があります。

これはサーバーのウェブインターフェースの **Configs** セクションかFTPで行えます。

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

ファイル内の `level-name` パラメータを、使用したいワールドセーブのフォルダ名に合わせて編集してください。サーバープラットフォームを使っている場合は、`_nether` や `_the_end` フォルダではなくメインのフォルダ名を指定します。





## まとめ

これでMinecraftのワールド管理がバッチリわかりましたね。バニラとサーバープラットフォーム間のセーブ変換、新規ワールド生成、シードを使ったワールド再生成、確実なバックアップ、カスタムワールドのアップロード、そしてサーバーでの有効化まで、スムーズに扱えるようになりました。

何か質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにご連絡ください！毎日対応していますよ！🙂

<InlineVoucher />