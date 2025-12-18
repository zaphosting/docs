---
id: vserver-windows-change-language
title: "VPS: Windowsサーバーの言語管理"
description: "Windowsサーバーの言語設定をカスタマイズしてローカライズされた使いやすさを実現 → 今すぐチェック"
sidebar_label: 言語の追加＆管理
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSは多言語に対応しているので、自分の母国語で簡単に使えます。このガイドでは、Windowsサーバーの言語を変更する方法を紹介します。

:::info
サーバー初期設定時に、OSバージョン選択画面で**(EN)**と**(DE)**タグが付いた英語版かドイツ語版のどちらかを選べます。
:::

<InlineVoucher />

## 言語パックの追加

言語パックはWindowsに標準搭載された便利な機能で、サーバー上でローカライズされた言語パックを簡単に管理できます。

まずはRDPでWindowsサーバーに接続しましょう。接続方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参照してください。

接続したら、Windowsの検索バーかWindowsキーを押してスタートメニューの検索バーで「**言語**」を検索します。

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

この画面で言語セクションを見つけて、**言語を追加する**ボタンを押します。

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

メニューからインストールしたい言語を検索し、**次へ**を押して選択します。次の画面で、すべてのオプションにチェックを入れ、すぐに有効にしたい場合は**Windowsの表示言語として設定する**も必ず選択してください。

:::important
Windows OS全体の言語を変更するには、選択した言語が**表示言語**機能に対応している必要があります。
:::

:::tip
もし**表示言語**対応の言語が見つからない場合は、設定の**更新とセキュリティ**から保留中のWindowsアップデートをインストールしてください。これでこの[バグ](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience)が解決します。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windowsが選択した言語パックのダウンロードを開始します。完了まで時間がかかることがあるので気長に待ちましょう。

ダウンロード完了後、もしダウンロード時に**Windowsの表示言語として設定する**を選んでいなければ、再度言語ページに戻ってドロップダウンメニューから設定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

最後にサーバーを再起動すれば、新しい言語が適用されます。これでWindowsサーバーの言語パック管理は完了です。

## サーバーOSの再インストール

言語パックの変更で問題が解決しない場合や、サーバーがまだ新品の場合は、英語版かドイツ語版のWindowsサーバーを再インストールするのも手です。

:::warning
OSの再インストールはデータを完全に消去する破壊的な処理です。重要なデータは必ずバックアップを取ってから実行してください。
:::

サーバーのウェブインターフェースの**設定**セクションから操作できます。

ここで**Windows (EN)**か**Windows (DE)**を選択し、サーバーの再インストールを開始しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

再インストール開始後は、完了まで最大30分ほどかかるので気長に待ってください。

<InlineVoucher />