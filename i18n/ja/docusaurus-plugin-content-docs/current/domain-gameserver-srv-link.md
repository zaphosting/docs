---
id: domain-gameserver-srv-link
title: "ドメイン：ゲームサーバー転送の設定"
description: "ドメインやサブドメインをゲームサーバーに転送して、簡単アクセス＆接続性アップ → 今すぐ詳しくチェック"
sidebar_label: ゲームサーバー転送
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
ドメイン全体を転送するか、サブドメインだけをゲームサーバーに転送することができます。これにより、数字だけの複雑なIPアドレスを覚える必要がなく、ドメイン経由でゲームサーバーに接続できるようになります。このガイドでは、DNSレコードを使ってドメインをゲームサーバーに転送する設定方法を解説します。

:::info
DNSエントリの変更が反映されるまで最大24時間かかる場合があるのでご注意ください！
:::

## 機能説明

IPアドレス転送には、ゲームサーバーのIPアドレスに転送するサブドメインを作成する方法と、サブドメインなしでドメイン全体を転送する方法があります。ゲームサーバーがゲームのデフォルトポートを使っている場合はドメイン全体の転送で十分です。デフォルトポート以外を使う場合は、サブドメインをゲームサーバーに転送するために追加の**SRVレコード**が必要です。

:::info
すべてのゲームがSRVレコードによるドメインからゲームポートへの転送をサポートしているわけではないので、事前にゲームがSRVレコードに対応しているか確認してください。
:::

### SRVサービス

サービス名はゲームによって異なり、必ず**アンダースコア**から始まります。例えば、Minecraftゲームサーバーのサービス名は常に**_minecraft**、FiveMゲームサーバーは**_cfx**です。

### SRVプロトコル

接続に使うインターネットプロトコルを指定します。ここでは**UDP**と**TCP**が利用可能です。どちらを使うかはゲームによって異なり、プロトコル名も**アンダースコア**から始まり、**_udp**か**_tcp**のどちらかになります。

## 準備

サブドメインを作らずにドメインをゲームサーバーに転送するには、まずダッシュボードでドメインを開き、左メニューからDNS管理を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

ここでドメインの既存DNSエントリをすべて確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## ドメイン転送（Minecraft）

まず転送したいMinecraftサーバーのIPとポートを調べます。この情報をもとに以下の手順を進めます。

例として、ドメイン名は `testserver-domain.de`、サーバーIPは `123.123.123.123`、ポートは `25500` を使います。

### Aレコードの作成

新しいレコードを作成するには、**新規エントリ**ボタンを使います。

4つの入力欄があるウィンドウが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

**名前**は転送先のIPに紐づくメインまたはサブドメイン名で、自由に決められます。ここではそのまま使います。**タイプ**はこの段階では**A**のままにします。**値**には先ほど調べたMinecraftサーバーのIPを入力します。例はこんな感じです。

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

保存すると、以下のように表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### SRVレコードの作成

次にSRVレコードを作成します。これはデフォルトポート以外を使う場合のポート転送に必要です。
再度**新規エントリ**ボタンをクリック。

**名前**にはプロトコルと接続ドメインを入力します。ここで入力したドメイン名が後でサーバー接続に使われます。**タイプ**はドロップダウンメニューから**SRV**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

**値**には3つの値を入力します。まず優先度（通常は0のままでOK）、次にゲームサーバーのポート（例では `25500`）、最後に先ほど作成した**Aレコード**のドメイン名を入力。

例はこんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### トラブルシューティング＆結果

:::important
エントリの最後には必ずドットを付けてください。ドットがないとシステムがドメインを自動で付け足そうとしてしまいます。
:::

この注意を守らないと、`minecraft.testserver-domain.de` が `minecraft.testserver-domain.de.testserver-domain.de` にリダイレクトされて失敗します。

## ドメイン転送（FiveM）

まず転送したいFiveMサーバーのIPとポートを調べます。この情報をもとに以下の手順を進めます。

例として、ドメイン名は `testserver-domain.de`、サーバーIPは `123.123.123.123`、ポートは `30300` を使います。

### Aレコードの作成

新しいレコードを作成するには、**新規エントリ**ボタンを使います。

4つの入力欄があるウィンドウが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

**名前**は転送先のIPに紐づくメインまたはサブドメイン名で、自由に決められます。ここではそのまま使います。**タイプ**はこの段階では**A**のままにします。**値**には先ほど調べたFiveMサーバーのIPを入力します。例はこんな感じです。

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

保存すると、以下のように表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### SRVレコードの作成

次にSRVレコードを作成します。これはデフォルトポート以外を使う場合のポート転送に必要です。
再度**新規エントリ**ボタンをクリック。

**名前**にはプロトコルと接続ドメインを入力します。ここで入力したドメイン名が後でサーバー接続に使われます。**タイプ**はドロップダウンメニューから**SRV**を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

**値**には3つの値を入力します。まず優先度（通常は0のままでOK）、次にゲームサーバーのポート（例では `30300`）、最後に先ほど作成した**Aレコード**のドメイン名を入力。

例はこんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### トラブルシューティング＆結果

:::important
エントリの最後には必ずドットを付けてください。ドットがないとシステムがドメインを自動で付け足そうとしてしまいます。
:::

この注意を守らないと、`fivem.testserver-domain.de` が `fivem.testserver-domain.de.testserver-domain.de` にリダイレクトされて失敗します。

<InlineVoucher />