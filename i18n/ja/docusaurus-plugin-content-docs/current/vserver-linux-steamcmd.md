---
id: vserver-linux-steamcmd
title: "VPS: SteamCMD Linux セットアップ"
description: "SteamCMDをLinuxにセットアップして専用ゲームサーバーを効率的にインストールし、サーバー管理を最適化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: SteamCMD セットアップ
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
SteamCMDは、PalworldやEnshroudedなど多種多様なゲームの専用ゲームサーバーをインストールするために必須のツールです。このガイドでは、LinuxサーバーにSteamCMDを初めてセットアップする手順を解説します。例ではUbuntuを使いますが、他のディストリビューションでもほぼ同様の流れです。

<InlineVoucher />

## 準備

まずはSSHでVPSに接続しましょう。接続方法がわからなければ、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

## SteamCMDのインストール

サーバーにアクセスしたら、専用ゲームサーバーファイルをダウンロードするために**SteamCMD**をセットアップする必要があります。SteamCMDはSteamクライアントの**コマンドライン（CLI）版**で、Steamワークショップや専用ゲームサーバーファイルを簡単にダウンロードできるツールです。

Linuxではいつものように、まずはシステムをアップデートするのがベストです。使っているディストリビューションに合わせて以下を実行してください：
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

次にいくつかのパッケージをインストールします。内容は以下の通り：

- **software-properties-common** パッケージは、ディストリビューションや独立系ソフトウェアソースの管理を簡単にします。
- SteamCMDは32ビットツールなので、対応するソフトウェアをインストールするために**i386**アーキテクチャを追加する必要があります。
- SteamCMDはプロプライエタリなので、Linuxディストリビューションによっては通常のリポジトリに含まれていない**multiverse**または**non-free**パッケージが必要です。

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & その他の非Debian系ディストリビューション
sudo apt-add-repository non-free
```

パッケージの変更を反映させるため、再度アップデートコマンドを実行します：
```
sudo apt update
```

最後に、以下のコマンドでSteamCMDをインストールします。ライセンス同意のプロンプトが出たら、続行のために承諾してください。
```
sudo apt install steamcmd
```

:::tip
`steamcmd`コマンドを実行して、SteamCMDが正しくインストールされたか確認できます。起動するとプロンプトが`Steam>`になります。終了するには`quit`を入力してください。
:::

これで準備が整ったので、次はSteamCMDを使って専用ゲームサーバーをインストールするステップに進めます。

## ユーザー作成

SteamCMDは専用のユーザーで使うことを強くおすすめします。rootユーザーでの実行は多くの理由から推奨されません。

以下のコマンドで`steam`という名前のユーザーを作成し、任意でパスワードを設定しましょう。

```
sudo useradd -m steam
sudo passwd steam # 任意のパスワード設定
```

ユーザー作成後、SteamCMDがある`/usr/games`パスにアクセスできるように`.bashrc`ファイルを編集して環境変数PATHに追加します。

nanoエディタでファイルを開くには：
```
sudo nano /home/steam/.bashrc
```

ファイルの最後までスクロールし、以下のPATH環境変数を追加してください：
```
export PATH="/usr/games/:$PATH"
```

`CTRL + X`で保存してnanoを終了、`Y`で変更を確定し、最後に`ENTER`を押します。

## まとめ

これでLinuxサーバーにSteamCMDの基本機能を無事セットアップできました。`steam`ユーザーでSteamコンテンツのインストールを進められます。

このセクションの他のガイドもぜひチェックしてみてください。SteamCMDを使った特定ゲームのインストール方法を詳しく解説しています。

<InlineVoucher />