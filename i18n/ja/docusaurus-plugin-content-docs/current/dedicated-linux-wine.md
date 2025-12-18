---
id: dedicated-linux-wine
title: "専用サーバー：Wine互換レイヤー Linuxセットアップ"
description: "UbuntuなどのLinuxでWindowsゲームサーバーをスムーズに動かすためのWineセットアップ方法 → 今すぐチェック"
sidebar_label: Wine互換レイヤーのセットアップ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

WineはLinux上でWindows向けに開発されたソフトを動かせるオープンソースの互換レイヤーです。これはWindows専用のゲームサーバーファイルしか提供されていない専用ゲームサーバーにとって特に重要で、他のLinux専用ゲームサーバーのガイドの前提条件になることもあります。このガイドでは、LinuxサーバーにWineを初めてインストールする手順を解説します。例ではUbuntuを使いますが、他のディストリビューションでもほぼ同じ流れです。

## 準備

まずはSSHで専用サーバーに接続しましょう。接続方法がわからない場合は、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

## Wineのインストール

Wineをインストールするには、まず`/etc/apt/keyrings/`ディレクトリが存在するか確認します。これはWineに必要なディレクトリです。
```
sudo mkdir -pm755 /etc/apt/keyrings
```

次に、WineのGPGキーをダウンロードしてこのディレクトリに保存します。これによりパッケージの正当性が保証されます。
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

さらに、WineHQのソースリストも保存する必要があります。以下のコマンドで簡単にできます：
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

パッケージ情報を更新して変更を反映させましょう。
```
sudo apt update
```

いよいよWineの最新バージョンをインストールします。完了まで少し時間がかかる場合があります。
```
sudo apt install --install-recommends winehq-staging
```

最後に、専用ゲームサーバーでWineを問題なく動かすために必要な追加パッケージをインストールします。
```
sudo apt install cabextract winbind screen xvfb
```

## まとめ

これでWine互換レイヤーのセットアップが完了し、Linuxサーバー上でWindowsプログラムを動かせるようになりました。この重要な前提条件が整ったので、Windows向けに作られた専用ゲームサーバーもインストール可能です。

SteamCMDやWineを使ったWindowsベースの専用サーバーファイルのインストール方法を扱った他のガイドもぜひチェックしてみてください。