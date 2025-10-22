---
id: dst-create-cave
title: "Don't Starve Together: サーバーでの洞窟作成方法"
description: "Don't Starve Togetherで洞窟用のマスター＆スレーブサーバーを設定して、ゲーム体験をアップグレードしよう → 今すぐチェック"
sidebar_label: 洞窟の作成
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 洞窟準備

Don't Starve Togetherで洞窟を使うには、当社で注文した2つのゲームサーバーが必要です。1つは上層世界用の「マスター」サーバー、もう1つは洞窟専用の「スレーブ」サーバーです。どちらをマスターにしてどちらをスレーブにするかは、server.ini と cluster.ini の設定で決まります。

両方の設定ファイルはインターフェースの「**Configs**」から確認・編集可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

.iniファイルの編集は「**[SHARD]**」部分のみです。

## マスター

マスターは上層世界用のゲームサーバーで、設定ファイルでマスターとして指定する必要があります。

### server.ini

:::info
**重要** 「**MASTERIP**」はマスターサーバーのIPアドレスを指します。例えばIPが123.123.123.123なら、`bind_ip = 123.123.123.123` と入力してください。

「**MASTERIP**」はserver.iniの `bind_ip = ` に直接書く固定値ではありません。
:::

デフォルトではserver.iniの「**[SHARD]**」は `is_master = true` のみですが、以下のコマンドを追加します。

```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

cluster.iniの「**[SHARD]**」もデフォルトでは `is_master = true` のみですが、以下を追加します。

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## スレーブ

スレーブは洞窟用のゲームサーバーで、マスターの情報を設定ファイルに入力します。

### server.ini

:::info
**重要** 「**SLAVEIP**」はスレーブサーバーのIPアドレスを指します。例えばIPが123.123.123.123なら、`bind_ip = 123.123.123.123` と入力してください。

「**SLAVEIP**」はserver.iniの `bind_ip = ` に直接書く固定値ではありません。

また、「**MASTERIP**」もserver.iniの `master_ip = ` に直接書く固定値ではありません。
:::

デフォルトではserver.iniの「**[SHARD]**」は `is_master = true` のみですが、以下を追加します。

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

cluster.iniの「**[SHARD]**」もデフォルトでは `is_master = true` のみですが、以下を追加します。

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### 新しいワールドの生成

すべての設定が正しくできたら、スレーブサーバー用に新しいワールドを生成する必要があります。洞窟が正しく作成されるために新しいファイルが必要です。

[FTPアクセス](gameserver-ftpaccess.md) ガイドを使って、スレーブサーバーのディレクトリ `*/starve/Save/Cluster_1/Master/*` に移動します。  
このディレクトリに `*worldgenoverride.lua*` という名前の新しいファイルを作成してください。  
ファイルの中身は以下の内容で埋めます。

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

その後、サーバーで「**TAB**」キーを長押ししてサーバーステータスを表示します。左上の3点メニューをクリックし、「**Regenerate World**」を選んで上書きパラメータでワールドを再生成してください。

再読み込みが完了したら設定は完了！洞窟付きのゲームサーバーで遊べます。

<InlineVoucher />