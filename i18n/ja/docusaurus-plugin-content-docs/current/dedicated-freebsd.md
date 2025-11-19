---
id: dedicated-freebsd
title: "専用サーバー：FreeBSDのインストール"
description: "専用サーバーにFreeBSDをインストールして最適なパフォーマンスと信頼性を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: FreeBSDのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

以下では、専用サーバーにFreeBSD OSをインストールし設定する手順をステップごとに解説します。指示にしっかり従って、OSを確実にセットアップし、最大限に活用しましょう。

:::info

このガイドはFreeBSD 13.0をベースに構成しています。過去または新しいバージョンのインストール手順は多少異なる場合があります。

:::



## 準備

OSのインストールと設定には、まず対応するOSのISOをマウントする必要があります。マウント方法は主に以下の3つです：

1. 初期セットアップからのマウント
2. iLO経由でのマウント（Virtual Media）
3. iLO経由でのマウント（リモートコンソール）

ISOファイルのマウントに慣れていない場合は、[初期セットアップ](dedicated-setup.md)や[独自ISO](dedicated-iso.md)のガイドを参照するのがおすすめです。



## インストール
ISOが正常に読み込まれると、サーバーはセットアップ画面に入ります。

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

`Enter`キーを押してインストールを開始しましょう！ ![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

好きなキーマップを選択して「続行」を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

希望のホスト名を入力してください。

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

インストールしたいシステムパッケージを任意で選択し、完了したら「OK」を押します。

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

ここでパーティションを作成できます。例ではRAID0を使用しています。RAIDの詳細は[RAIDの設定](dedicated-raid.md)をご覧ください。

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

変更がなければ`Enter`で進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

RAID0なので冗長性なしを選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

ボリュームを`Space`で選択し、`Enter`で進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

すべてのデータが消去されることを確認します。

:::info
セットアップ処理が始まります。数分かかる場合があります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

パスワードを入力し、`Enter`を押して進みます。

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

IPv4/IPv6の設定は最後に行うため、「いいえ」を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

「はい」を選択し、タイムゾーンと日時を設定します。

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

サーバー起動時に自動起動するシステムを変更できます。

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

必要に応じてセキュリティ設定を変更可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

セットアップ完了です。「終了」を選択し、`Enter`で確定します。

:::info
iLOからISOファイルを取り外し、「再起動」を選択してください。
:::



## 設定

### ネットワーク

ネットワークデバイスを有効にするには、パスワードでシステムにログインしてください。

好きなエディタで`loader.conf`を開きます。例：`ee /boot/loader.conf`。以下の行を追加します：

```if_oce_load="YES"```

`CTRL+C`でエディタを終了し、exitと入力してログアウト後、専用サーバーを再起動してください。

***

再起動後、`rc.conf`を編集します。例：`ee /etc/rc.conf`。以下の行を追加してください：

```
ifconfig_oce0="DHCP"
```

:::caution
例にあるネットワークアダプター名 **oce0** は異なる場合があります。正しいアダプター名は`ifconfig`コマンドで確認してください。DHCPサーバーから自動的にIPアドレスが取得されます。
:::

例としてはこんな感じになります：

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

`CTRL+C`でエディタを閉じ、「exit」と入力した後、`/etc/netstart`コマンドを一度実行します。

:::info
これでサーバーはインターネットに接続されているはずです。
:::



## まとめ

おめでとうございます！専用サーバーにFreeBSD OSを無事インストールできました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂