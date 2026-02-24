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

Dockerは軽量でオープンソースの仮想化ソフトウェアで、単一システム上でサービスやアプリを隔離して提供します。実際の仮想マシンとは違い、追加のOSをエミュレート・ホストするのではなく、ホストシステム内にアプリケーション環境だけを作る仕組みです。これによりリソースを節約でき、フル仮想化に比べてオーバーヘッドも低くなります。このガイドでは、LinuxサーバーにDockerをインストールする手順を解説します。

## 準備

まずはSSHでLinuxサーバーに接続してください。接続方法がわからない場合は、[初回アクセス（SSH）](dedicated-linux-ssh.md)ガイドを参考にしてください。このガイドではUbuntuを例に説明します。

## インストール

Linuxサーバーに接続できたら、以下のLinuxリポジトリから該当するインストール手順を選んでください。

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

まずは`apt`を使ってDockerのパッケージを追加し、セットアップします。これにより今後リポジトリから簡単にDockerをインストール・アップデートできます。

以下のコマンドでDocker公式のGPGキーをリポジトリリストに追加します。
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

セットアップが完了したら、以下のコマンドで`apt`のソースにリポジトリを追加します。
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

これでDockerの`apt`リポジトリがセットアップされました。最後にDockerパッケージをインストールします。最新バージョンは以下のコマンドでインストール可能です。
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="debian" label="Debian" default>

まずは`apt`を使ってDockerのパッケージを追加し、セットアップします。これにより今後リポジトリから簡単にDockerをインストール・アップデートできます。

以下のコマンドでDocker公式のGPGキーをリポジトリリストに追加します。
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

セットアップが完了したら、以下のコマンドで`apt`のソースにリポジトリを追加します。
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

リポジトリを追加したら、`apt-get update`で変更を反映させます。
```
sudo apt-get update
```

これでDockerの`apt`リポジトリがセットアップされました。最後にDockerパッケージをインストールします。最新バージョンは以下のコマンドでインストール可能です。
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

まずはリポジトリ管理に便利な`dnf-plugins-core`パッケージをインストールします。
```
sudo dnf -y install dnf-plugins-core
```

パッケージがインストールできたら、以下のコマンドでDockerリポジトリを追加し、インストールします。
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

これでDockerがインストールされました。最後にDockerを起動し、自動起動を有効化します。
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

インストールが成功したか確認するために、以下のコマンドで**hello-world**イメージを実行してみましょう。
```
sudo docker run hello-world
```

成功すれば、チャットに基本情報が書かれた挨拶メッセージが表示されます。`Permission Denied`エラーが出る場合は、Webインターフェースで**Docker互換性**オプションを有効にし、サーバーを再起動したか確認してください（準備セクション参照）。

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

これでLinuxサーバーにDockerを無事インストールできました。

## インストール後の設定

Dockerがインストールできたら、sudoなしでDockerコマンドを実行できるようにしたり、サーバー起動時にDockerを自動起動させる設定をしておくと便利です。

### sudoなしでDockerを使う

すべてのDockerコマンドに`sudo`を付ける手間を省くために、新しく`docker`グループを作成し、ユーザーを追加します。ただしこれによりユーザーにrootレベルの権限が間接的に付与されるので注意してください。

以下のコマンドで`docker`グループを作成し、現在のユーザーを追加します。
```
# Dockerグループ作成
sudo groupadd docker

# 現在のユーザーをDockerグループに追加
sudo usermod -aG docker $USER
```

設定後はサーバーを再起動してグループメンバーシップを反映させるか、`newgrp docker`コマンドを使ってください。

その後、再度`docker run hello-world`を実行してsudoなしで動くか確認しましょう。

:::tip
以前にsudo付きでコマンドを実行していて設定ファイルのエラーが出る場合は、`rmdir ~/.docker/`でDockerディレクトリを削除してください。次回コマンド実行時に自動で再作成されます。
:::

問題なく動けば、sudoなしでDockerを使えるようになっています。

### サーバー起動時にDockerを自動起動

多くのLinuxディストリビューションで使われている`systemd`を使い、サーバー起動時にDockerを自動起動させる設定ができます。

:::tip
UbuntuとDebianでは、Dockerはデフォルトで起動時に自動起動する設定になっています。これらのディストリビューションを使っている場合は特に設定不要です。
:::

以下のコマンドでDockerサービスを起動時に有効化できます。
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

逆に無効化したい場合は`enable`を`disable`に置き換えてください。`systemctl`のサブコマンドでサービスの起動・停止・再起動も管理可能です。
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

## まとめ

おめでとうございます！LinuxサーバーにDockerを無事インストール＆設定できました。もし質問や問題があれば、いつでもサポートチームに連絡してくださいね！毎日サポートしています！