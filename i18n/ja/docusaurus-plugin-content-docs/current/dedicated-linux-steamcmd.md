---
id: dedicated-linux-steamcmd
title: "専用サーバー：SteamCMD Linux セットアップ"
description: "LinuxサーバーでSteamCMDをセットアップして専用ゲームサーバーを効率的にインストールする方法をチェック → 今すぐ詳しく見る"
sidebar_label: SteamCMD セットアップ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

SteamCMDは、PalworldやEnshroudedなど多くのゲームの専用サーバーをインストールするために必須のツールです。このガイドでは、LinuxサーバーにSteamCMDを初めてセットアップする手順を解説します。例ではUbuntuを使用しますが、他のディストリビューションでもほぼ同様の手順です。

## 準備

まずはSSHで専用サーバーに接続しましょう。接続方法がわからない場合は、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

## SteamCMDのインストール

サーバーにアクセスしたら、専用サーバーファイルをダウンロードするために**SteamCMD**をセットアップする必要があります。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用サーバーファイルを簡単にダウンロードできるツールです。

Linuxではまずシステムをアップデートするのが基本です。使用しているディストリビューションに合わせて以下を実行してください：

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

次にいくつかのパッケージをインストールします。内容は以下の通りです：

- **software-properties-common** パッケージは、ディストリビューションや独立したソフトウェアソースの管理を簡単にします。
- SteamCMDは32ビットツールなので、**i386**アーキテクチャを追加して対応するソフトウェアをインストールする必要があります。
- SteamCMDはプロプライエタリ（独自）ソフトウェアなので、Linuxディストリビューションによっては**multiverse**または**non-free**パッケージを追加する必要があります。これらは通常デフォルトリポジトリに含まれていません。

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & その他の非Debian系ディストリビューション
sudo apt-add-repository non-free
```

パッケージの変更を反映させるため、再度アップデートを実行します：

```
sudo apt update
```

最後に、以下のコマンドでSteamCMDをインストールします。ライセンス同意のプロンプトが表示されたら、続行のために同意してください。

```
sudo apt install steamcmd
```

:::tip
`steamcmd`コマンドを実行して、SteamCMDが正しくインストールされたか確認できます。起動するとプロンプトが `Steam>` と表示されます。終了するには `quit` と入力してください。
:::

これで準備が整ったので、次はSteamCMDを使って専用サーバーをインストールするステップに進みましょう。

## ユーザー作成

SteamCMDを使う際は、別のユーザーを作成して利用することを強くおすすめします。rootユーザーでの実行は多くの理由から推奨されません。

以下のコマンドで `steam` という名前のユーザーを作成し、任意でパスワードを設定してください。

```
sudo useradd -m steam
sudo passwd steam # パスワードは任意で設定
```

ユーザー作成後、SteamCMDがある `/usr/games` パスにアクセスできるように `.bashrc` ファイルを編集して環境変数PATHを追加します。

nanoエディタでファイルを開きます：

```
sudo nano /home/steam/.bashrc
```

ファイルの一番下までスクロールし、以下の行を追加してください：

```
export PATH="/usr/games/:$PATH"
```

保存してnanoを終了するには、`CTRL + X` → `Y` → `ENTER` の順に押します。

## まとめ

これでLinuxサーバーにSteamCMDの基本セットアップが完了しました。`steam`ユーザーでログインして、Steamコンテンツのインストールを進められます。

このセクションの他のガイドもぜひチェックしてみてください。SteamCMDを使った特定ゲームのインストール方法を詳しく解説しています。