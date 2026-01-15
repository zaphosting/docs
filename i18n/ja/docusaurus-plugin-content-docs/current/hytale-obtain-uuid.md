---
id: hytale-obtain-uuid
title: "Hytale: UUIDの取得方法"
description: "サーバー設定や権限管理で使うプレイヤーのUUIDの見つけ方や取得方法をチェック → 今すぐ詳しく知ろう"
sidebar_label: Modのインストール
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Hytaleサーバーの各プレイヤーは、UUID（Universally Unique Identifier：ユニバーサリー・ユニーク・アイデンティファイア）という内部識別子で管理されています。この識別子は永久的で、たとえ後でユーザー名を変更しても変わりません。

UUIDは、権限管理やグループ割り当て、サーバーコマンドや設定ファイルでプレイヤーを参照する際など、さまざまな管理タスクに必須です。

:::info 早期アクセスについて

Hytaleは2026年1月13日にリリースされ、現在は早期アクセス版です。ゲームはまだ開発中のため、サーバーソフトウェアや設定ファイル、Mod対応、インストール手順などは今後も変わる可能性があります。

:::

<InlineVoucher />


## UUIDの取得方法

プレイヤーのUUIDは、ゲーム内のサーバー標準チャットコマンドから直接取得できます。この方法は、プレイヤーがすでにオンラインで、すぐにUUIDが必要な場合に特に便利です。

十分な権限でログインした状態で、ゲーム内チャットを開き、対象プレイヤーのUUIDを調べるコマンドを実行します：

```
/whoami <playername>
```

コマンドを実行すると、サーバーがチャット内で指定したプレイヤーに紐づくUUIDを直接返します。返されたUUIDはそのプレイヤーを一意に識別し、権限管理やグループ割り当て、ホワイトリスト登録、その他サーバー側の操作にコピーして使えます。



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## まとめ

プレイヤーのUUIDを取得することは、Hytaleサーバーの高度な管理作業において欠かせないステップです。質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ 🙂


<InlineVoucher />