---
id: domain-gameserver-srv-link
title: "ドメイン：ゲームサーバー転送の設定"
description: "ドメインやサブドメインをゲームサーバーに転送して、簡単アクセス＆接続性アップ → 今すぐチェック"
sidebar_label: ゲームサーバー転送
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
ドメイン全体を転送するか、サブドメインだけをゲームサーバーに転送することができます。これにより、数字だけの複雑なIPアドレスを覚える必要がなく、ドメイン名でゲームサーバーに接続できるようになります。このガイドでは、DNSレコードを使ってドメインをゲームサーバーに転送する方法を解説します。

<InlineVoucher />

:::info
DNSエントリーの変更が反映されるまで最大24時間かかることがありますのでご注意ください！
:::

## 機能説明

IPアドレスを転送するには、サブドメインを作成してゲームサーバーのIPアドレスに転送するか、サブドメインなしでドメイン全体を転送します。ゲームサーバーがゲームのデフォルトポートを使っている場合はこれで十分です。もしデフォルトポート以外を使っている場合は、サブドメインをゲームサーバーに転送するために追加の**SRVエントリー**が必要です。

:::info
すべてのゲームがSRVエントリーによるドメインからゲームポートへの転送をサポートしているわけではないので、事前にゲームがSRVエントリーに対応しているか確認してください。
:::

### SRVサービス

サービス名はゲームによって異なり、必ず**アンダースコア**から始まります。例えば、Minecraftゲームサーバーのサービス名は常に**_minecraft**、FiveMゲームサーバーは**_cfx**です。

### SRVプロトコル

接続に使うインターネットプロトコルを指定します。ここでは**UDP**と**TCP**が選べます。どちらを使うかはゲームによって異なり、プロトコル名も必ず**アンダースコア**から始まり、**_udp**か**_tcp**になります。

## 準備

サブドメインを作らずにドメインをゲームサーバーに転送するには、まずダッシュボードでドメインを開き、左メニューからDNS管理を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

ここでドメインの既存DNSエントリーをすべて確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## ドメイン転送（Minecraft）

まず転送したいMinecraftサーバーのIPとポートを調べます。この情報をもとに以下の手順を進めます。

例として、ドメイン名を `testserver-domain.de`、サーバーIPを `123.123.123.123`、ポートを `25500` とします。

### Aレコードの作成

新しいレコードを作成するには、**新規エントリー**ボタンを使います。

4つの入力欄があるウィンドウが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

**名前**は転送先のIPに紐づくメインまたはサブドメイン名で、自由に決められます。**タイプ**はこの段階では**A**のままにします。**値**には先ほど調べたMinecraftサーバーのIPを入力します。例はこんな感じです。

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

保存すると、このように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### SRVレコードの作成

次にSRVレコードを作成します。これはデフォルトポート以外を使う場合のポート転送に必要です。
再度**新規エントリー**ボタンをクリック。

**名前**にはプロトコルと接続ドメインを入力します。ここで入力したドメイン名が後でサーバー接続時に使われます。**タイプ**はドロップダウンメニューから**SRV**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

**値**には3つの値を入れます。まず優先度（通常は0でOK）、次にゲームサーバーのポート（例では `25500`）、最後に先ほど作成した**Aレコード**のドメイン名です。

例はこんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### トラブルシューティング＆結果

:::important
エントリーの最後には必ずドットを付けてください。ドットがないとシステムがドメインを自動で付加しようとしてしまいます。
:::

この注意を守らないと、`minecraft.testserver-domain.de` が `minecraft.testserver-domain.de.testserver-domain.de` にリダイレクトされて失敗します。

## ドメイン転送（FiveM）

まず転送したいFiveMサーバーのIPとポートを調べます。この情報をもとに以下の手順を進めます。

例として、ドメイン名を `testserver-domain.de`、サーバーIPを `123.123.123.123`、ポートを `30300` とします。

### Aレコードの作成

新しいレコードを作成するには、**新規エントリー**ボタンを使います。

4つの入力欄があるウィンドウが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

**名前**は転送先のIPに紐づくメインまたはサブドメイン名で、自由に決められます。**タイプ**はこの段階では**A**のままにします。**値**には先ほど調べたFiveMサーバーのIPを入力します。例はこんな感じです。

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

保存すると、このように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### SRVレコードの作成

次にSRVレコードを作成します。これはデフォルトポート以外を使う場合のポート転送に必要です。
再度**新規エントリー**ボタンをクリック。

**名前**にはプロトコルと接続ドメインを入力します。ここで入力したドメイン名が後でサーバー接続時に使われます。**タイプ**はドロップダウンメニューから**SRV**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

**値**には3つの値を入れます。まず優先度（通常は0でOK）、次にゲームサーバーのポート（例では `30300`）、最後に先ほど作成した**Aレコード**のドメイン名です。

例はこんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### トラブルシューティング＆結果

:::important
エントリーの最後には必ずドットを付けてください。ドットがないとシステムがドメインを自動で付加しようとしてしまいます。
:::

この注意を守らないと、`fivem.testserver-domain.de` が `fivem.testserver-domain.de.testserver-domain.de` にリダイレクトされて失敗します。

<InlineVoucher />