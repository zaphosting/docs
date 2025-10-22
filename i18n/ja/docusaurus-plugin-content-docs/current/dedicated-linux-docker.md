---
id: dedicated-linux-docker
title: "専用サーバー：Dockerのインストール"
description: "LinuxサーバーにDockerをインストールして、アプリケーションを効率的に隔離して実行し、リソースの最適化を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Dockerのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに

Dockerは、軽量でオープンソースの仮想化ソフトウェアで、単一のシステム上でサービスやアプリケーションを隔離して提供します。実際の仮想マシンとは異なり、追加のOSをエミュレートしたりホストしたりするのではなく、ホストシステム内にアプリケーション環境のみを構築します。これにより、リソースの節約だけでなく、フル仮想化に比べてオーバーヘッドも低く抑えられます。このガイドでは、サーバーにDockerをインストールする手順を解説します。

<InlineVoucher />

## 準備

まずはSSHでLinuxサーバーに接続してください。接続方法がわからない場合は、[初回アクセス（SSH）](dedicated-linux-ssh.md)ガイドを参考にしてください。このガイドではUbuntuをLinuxディストリビューションとして使用します。

### Docker互換性の有効化

Dockerコンテナを動作させるには、サーバーのウェブインターフェースで**Docker互換性**を有効にする必要があります。これをしないと`Permission Denied`エラーが発生します。

サーバーのウェブインターフェースの**設定**セクションに移動し、**Docker互換性**オプションを有効にして保存してください。

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

保存後は、必ずサーバーを再起動してから次のステップに進んでください。

## インストール

Linuxサーバーに接続できたら、以下のLinuxリポジトリから該当するインストール手順を選んでください。

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

まずは`apt`を使ってDockerのパッケージを追加し、セットアップします。これにより将来的にリポジトリから簡単にDockerをインストール・更新できます。

以下のコマンドでDockerの公式GPGキーをリポジトリリストに追加します。
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

セットアップが完了したら、次のコマンドで`apt`のソースにリポジトリを追加します。
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Dockerリポジトリを追加したら、`apt-get update`コマンドで変更を反映させます。
```
sudo apt-get update
```

これでDockerの`apt`リポジトリがセットアップされました。最後にDockerパッケージをインストールします。以下のコマンドで最新バージョンをインストール可能です。
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

まずはリポジトリ管理に役立つ`dnf-plugins-core`パッケージをインストールします。
```
sudo dnf -y install dnf-plugins-core
```

パッケージがインストールできたら、以下のコマンドでDockerリポジトリを追加し、インストールします。
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

これでDockerがインストールされました。最後にDockerを起動し、自動起動を有効にします。
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

インストールが成功したか確認するために、以下のコマンドで**hello-world**イメージを実行してみましょう。
```
sudo docker run hello-world
```

成功すると、基本情報が書かれた挨拶メッセージが表示されます。もし`Permission Denied`エラーが出る場合は、[準備](#準備)で説明したようにウェブインターフェースで**Docker互換性**を有効にし、サーバーを再起動したか確認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

これでLinuxサーバーにDockerが無事インストールされました。

## インストール後の設定

Dockerがインストールできたら、sudoなしでDockerコマンドを実行できるようにしたり、サーバー起動時にDockerを自動起動させる設定を行うこともできます。

### sudoなしでDockerを操作する

すべてのDockerコマンドに`sudo`を付ける必要をなくすには、新しくDockerグループを作成し、ユーザーを追加します。便利になりますが、ユーザーにroot権限相当の権限が付与されるので注意してください。

以下のコマンドで`docker`グループを作成し、現在のユーザーを追加します。
```
# Dockerグループ作成
sudo groupadd docker

# 現在のユーザーをDockerグループに追加
sudo usermod -aG docker $USER
```

設定後は、グループメンバーシップを反映させるためにサーバーを再起動するか、`newgrp docker`コマンドを実行してください。

その後、`docker run hello-world`コマンドをsudoなしで実行できるか確認しましょう。

:::tip
以前にsudo付きでコマンドを実行していて設定ファイルのエラーが出る場合は、`rmdir ~/.docker/`でDockerディレクトリを削除してください。次回コマンド実行時に自動で再作成されます。
:::

問題なく実行できれば、sudoなしでDockerを使えるようになっています。

### サーバー起動時にDockerを自動起動する

多くのLinuxディストリビューションで使われている`systemd`を使い、サーバー起動時にDockerを自動起動させることができます。

:::tip
UbuntuとDebianでは、Dockerはデフォルトで起動時に自動起動する設定になっています。この2つのディストリビューションを使っている場合は特に設定不要です。
:::

以下のコマンドでDockerサービスの自動起動を有効にできます。
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

逆に自動起動を無効にしたい場合は、`enable`を`disable`に置き換えてください。また、以下のように`systemctl`のサブコマンドでサービスを管理できます。
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

## まとめ

おめでとうございます！LinuxサーバーにDockerを無事インストール・設定できました。もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />