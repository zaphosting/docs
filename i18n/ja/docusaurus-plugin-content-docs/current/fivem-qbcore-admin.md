---
id: fivem-qbcore-admin
title: "FiveM：QBCoreで管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、ゲーム内管理を強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接使うことができます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。

<InlineVoucher />

## 設定方法

管理者権限の設定は、``server.cfg`` 設定ファイルを通じて行います。まず、txAdminのインターフェースにログインし、CFGエディターを開きます。次に設定ファイルの最後までスクロールし、`Permissions` セクションを探します。

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCoreは複数のプレイヤー識別子をサポートしており、FiveM ID（`identifier.fivem:`）、Rockstarライセンス（`identifier.license:`）、Discord ID（`identifier.discord:`）などがあります。これらの識別子はtxAdminのインターフェースから直接取得可能です。取得後、GOD、Admin、Modのいずれかのステータスを付与するか選べます。

識別子を取得し、付与したいステータスを決めたら、`server.cfg` の permissions セクションに個別のプレイヤー権限を追加していきます。以下の3つのオプションのいずれかを新しいエントリーとして追加してください：

```
add_principal identifier.license:xxxxxx qbcore.god   # プレイヤー名
add_principal identifier.license:xxxxxx qbcore.admin # プレイヤー名
add_principal identifier.license:xxxxxx qbcore.mod   # プレイヤー名
```

最終的には、例えばこんな感じになります：

```
## Permissions ##
add_ace group.admin command allow # すべてのコマンドを許可
# Deployer Note: この管理者マスターには自動追加される識別子がありません。
# add_principal identifier.discord:111111111111111111 group.admin #例

add_principal identifier.fivem:16219250 qbcore.admin # プレイヤー名
```

## まとめ

すべての手順を正しく実行できていれば、あなたは自分のサーバーの管理者になっています。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />