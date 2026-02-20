---
id: dedicated-linux-docker
title: "LinuxサーバーにDockerをセットアップ - インフラ上でコンテナを実行・管理しよう"
description: "LinuxサーバーにDockerをインストールして、アプリを効率的に隔離実行＆リソース最適化 → 今すぐチェック"
sidebar_label: Dockerのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに

Dockerは軽量でオープンソースの仮想化ソフトウェアで、単一システム上でサービスやアプリを隔離して提供します。リアルな仮想マシンとは違い、追加のOSをエミュレートやホストするのではなく、ホストシステム内にアプリ環境だけを作る仕組みです。これによりリソースを節約できるだけでなく、フル仮想化に比べてオーバーヘッドも低く抑えられます。このガイドでは、サーバーにDockerをインストールする手順を解説します。

## 準備

まずはSSHでLinuxサーバーに接続してください。接続方法がわからない場合は、[初回アクセス（SSH）](dedicated-linux-ssh.md)ガイドを参考にしてください。このガイドではUbuntuを例に進めます。

### Docker互換性を有効化

Dockerコンテナを動かすには、サーバーのウェブインターフェースで**Docker互換性**を有効にする必要があります。これをしないと`Permission Denied`エラーが出ます。

サーバーのウェブインターフェースの**設定**セクションに行き、**Docker互換性**オプションをオンにして保存してください。

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

保存後は、必ずサーバーを再起動してから次に進みましょう。

## インストール

Linuxサーバーに接続できたら、以下のLinuxディストリビューション別のインストール手順から選んで進めてください。

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

まずは`apt`を使ってDockerのパッケージを追加し、セットアップします。これで将来的にリポジトリから簡単にDockerをインストール・アップデートできるようになります。

以下のコマンドでDocker公式のGPGキーをリポジトリリストに追加します。
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

続いて、以下のコマンドでDockerリポジトリを`apt`のソースに追加します。
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

リポジトリを追加したら、`apt-get update`で変更を反映させます。
```
sudo apt-get update
```

ここまででDockerの`apt`リポジトリのセットアップは完了です。最後にDockerパッケージをインストールします。最新バージョンは以下のコマンドでインストール可能です。
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

まずはリポジトリ管理に必要な`dnf-plugins-core`パッケージをインストールします。
```
sudo dnf -y install dnf-plugins-core
```

パッケージが入ったら、以下のコマンドでDockerリポジトリを追加し、インストールします。
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Dockerがインストールされたら、最後に起動＆自動起動を有効化します。
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

インストールが成功したか確認するには、以下のコマンドで**hello-world**イメージを実行してみてください。
```
sudo docker run hello-world
```

成功すれば、基本情報が書かれた挨拶メッセージが表示されます。`Permission Denied`エラーが出る場合は、準備段階で説明した**Docker互換性**の有効化とサーバー再起動を見直してください。

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

これでLinuxサーバーにDockerが無事インストールされました。

## インストール後の設定

Dockerがインストールできたら、sudoなしでDockerコマンドを使えるようにしたり、サーバー起動時にDockerを自動起動させる設定をしておくと便利です。

### sudoなしでDockerを使う

毎回`sudo`を付けずにDockerコマンドを使いたい場合は、新しく`docker`グループを作ってユーザーを追加しましょう。ただしこれによりroot権限に近い権限がユーザーに付与されるので注意してください。

以下のコマンドで`docker`グループを作成し、現在のユーザーを追加します。
```
# Dockerグループ作成
sudo groupadd docker

# 現在のユーザーをDockerグループに追加
sudo usermod -aG docker $USER
```

設定後はサーバーを再起動してグループ権限を反映させるか、`newgrp docker`コマンドを使ってください。

その後、`docker run hello-world`をsudoなしで実行できるか試してみましょう。

:::tip
以前にsudo付きでDockerコマンドを実行していて設定ファイルのエラーが出る場合は、`rmdir ~/.docker/`でDockerディレクトリを削除してください。次回コマンド実行時に自動で再作成されます。
:::

問題なく動けば、sudoなしでDockerが使えるようになっています。

### 起動時にDockerを自動起動させる

多くのLinuxディストリビューションで使われている`systemd`を使って、サーバー起動時にDockerを自動起動させることができます。

:::tip
UbuntuとDebianでは、Dockerはデフォルトで起動時に自動起動する設定になっています。これらのディストリビューションを使っている場合は特に設定不要です。
:::

以下のコマンドでDockerサービスの自動起動を有効化できます。
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

逆に自動起動を無効化したい場合は、`enable`を`disable`に置き換えてください。その他、`systemctl`のサブコマンドでサービスの起動・停止・再起動も管理可能です。
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

## まとめ

おめでとうございます！LinuxサーバーにDockerのインストールと基本設定が完了しました。もし質問や問題があれば、いつでもサポートチームに連絡してくださいね！