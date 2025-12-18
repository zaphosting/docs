---
id: vserver-linux-wine
title: "VPS: Wine互換レイヤー Linuxセットアップ"
description: "LinuxでWineをセットアップしてWindowsソフトやゲームサーバーをスムーズに動かす方法をチェック → 今すぐ詳しく見る"
sidebar_label: Wine互換レイヤーのセットアップ
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

WineはLinux向けのオープンソース互換レイヤーで、Windows向けに開発されたソフトをLinux上で動かせるようにします。特にWindows専用のゲームサーバーファイルしか提供されていない専用ゲームサーバーにとって重要で、他のLinux専用ゲームサーバーのガイドの前提条件になることもあります。このガイドでは、LinuxサーバーにWineを初めてインストールする手順を解説します。例ではUbuntuを使いますが、他のディストリビューションでもほぼ同じ流れです。

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しましょう。接続方法がわからなければ、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

## Wineのインストール

まず、Wineのために`/etc/apt/keyrings/`ディレクトリが存在するか確認し、なければ作成します。
```
sudo mkdir -pm755 /etc/apt/keyrings
```

次に、WineのGPGキーをダウンロードしてこのディレクトリに保存します。これでパッケージの正当性が保証されます。
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

さらに、WineHQのソースリストも保存する必要があります。以下のコマンドで自動的に行えます。
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

パッケージ情報を更新して変更を反映させます。
```
sudo apt update
```

いよいよWineの最新バージョンをインストールします。完了まで少し時間がかかることがあります。
```
sudo apt install --install-recommends winehq-staging
```

最後に、専用ゲームサーバーでWineが問題なく動くように、以下の追加パッケージもインストールしましょう。
```
sudo apt install cabextract winbind screen xvfb
```

## まとめ

これでWine互換レイヤーのセットアップが完了し、Linuxサーバー上でWindowsプログラムを動かせるようになりました。この重要な前提条件が整ったので、Windows向けに作られた専用ゲームサーバーもインストール可能です。

SteamCMDやWineを使ったWindows専用サーバーファイルのインストールを扱う他のガイドもぜひチェックしてみてください。

<InlineVoucher />