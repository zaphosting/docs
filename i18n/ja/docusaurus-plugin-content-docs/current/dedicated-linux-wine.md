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

WineはLinux向けのオープンソース互換レイヤーで、Windows用に開発されたソフトをLinux上で動かせるようにします。これはWindows専用のゲームサーバーファイルしか提供されていない専用ゲームサーバーにとって超重要で、他のLinux専用ゲームサーバーのガイドでも前提条件になることがあります。このガイドでは、LinuxサーバーにWineを初めてインストールする手順を解説します。例ではUbuntuを使いますが、他のディストリビューションでもほぼ同じ流れです。

<InlineVoucher />

## 準備

まずはSSHで専用サーバーに接続しましょう。接続方法がわからなければ、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

## Wineのインストール

Wineのインストールには、まず`/etc/apt/keyrings/`ディレクトリが必要なので、以下のコマンドで作成します。
```
sudo mkdir -pm755 /etc/apt/keyrings
```

次に、Wineのパッケージの正当性を確認するためのGPGキーをこのディレクトリにダウンロードして保存します。
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

さらに、WineHQのソースリストも保存します。以下のコマンドを使えば自動で取得できます。
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

パッケージ情報を更新して、変更を反映させましょう。
```
sudo apt update
```

いよいよWineの最新版をインストールします。完了まで少し時間がかかるかもです。
```
sudo apt install --install-recommends winehq-staging
```

最後に、専用ゲームサーバーでWineが問題なく動くように、以下の追加パッケージもインストールします。
```
sudo apt install cabextract winbind screen xvfb
```

## まとめ

これでWine互換レイヤーのセットアップは完了です。Linuxサーバー上でWindowsプログラムを動かせるようになりました。この重要な前提が整ったので、Windows向けに作られた専用ゲームサーバーもインストール可能です。

SteamCMDやWineを使ったWindows専用サーバーファイルのインストール方法を解説した他のガイドもぜひチェックしてみてください。

<InlineVoucher />