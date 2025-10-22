---
id: vserver-linux-docker
title: "VPS: Dockerのインストール"
description: "LinuxサーバーにDockerをインストールして、アプリケーションを効率的に隔離して実行し、システムリソースを節約する方法を発見 → 今すぐ詳しく見る"
sidebar_label: Dockerのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに

Dockerは、軽量でオープンソースの仮想化ソフトウェアで、単一のシステム上でサービスやアプリケーションを隔離して提供します。実際の仮想マシンとは異なり、追加のOSをエミュレートしたりホストしたりするのではなく、ホストシステム内にアプリケーション環境だけを構築します。これにより、リソースの節約だけでなく、フル仮想化に比べてオーバーヘッドも低く抑えられます。このガイドでは、サーバーにDockerをインストールする手順を解説します。

<InlineVoucher />

## 準備

まずはSSHでLinuxサーバーに接続してください。接続方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドを参考にしてください。このガイドではUbuntuをLinuxディストリビューションとして使用します。

## インストール

Linuxサーバーに接続できたら、以下のLinuxリポジトリから該当するインストール手順を選択してください。

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

まずは`apt`を使ってDockerのパッケージを追加し、セットアップします。これにより、今後Dockerをリポジトリから簡単にインストール・アップデートできるようになります。

以下のコマンドでDockerの公式GPGキーをリポジトリリストに追加します。

```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

セットアップが完了したら、次に以下のコマンドで`apt`のソースにリポジトリを追加します。

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

Dockerがインストールされたら、最後に起動と自動起動を有効化します。

```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

インストールが成功したか確認するために、以下のコマンドで**hello-world**イメージを実行してみましょう。

```
sudo docker run hello-world
```

成功すると、基本情報が書かれた挨拶メッセージが表示されます。`Permission Denied`エラーが出る場合は、Webインターフェースで**Docker互換モード**を有効にし、サーバーを再起動したか確認してください（[準備](#準備)参照）。

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

これでLinuxサーバーにDockerが無事インストールされました。

## インストール後の設定

Dockerがインストールできたら、sudoなしでDockerコマンドを実行できるようにしたり、サーバー起動時にDockerを自動起動させる設定を行うこともできます。

### sudoなしでDockerを使う

すべてのDockerコマンドに`sudo`を付ける必要をなくすには、新しく`docker`グループを作成し、ユーザーを追加します。便利になりますが、root権限に近い権限をユーザーに与えることになるので注意してください。

以下のコマンドで`docker`グループを作成し、現在のユーザーを追加します。

```
# Dockerグループを作成
sudo groupadd docker

# 現在のユーザーをDockerグループに追加
sudo usermod -aG docker $USER
```

設定後はサーバーを再起動してグループメンバーシップを反映させるか、`newgrp docker`コマンドを使ってください。

sudoなしでDockerコマンドが使えるか、再度`docker run hello-world`を実行して確認しましょう。

:::tip
以前にsudo付きでコマンドを実行していて設定ファイルのエラーが出る場合は、`rmdir ~/.docker/`でDockerディレクトリを削除してください。次回コマンド実行時に自動で再作成されます。
:::

問題なく動けば、sudoなしでDockerが使えるようになっています。

### 起動時にDockerを自動起動させる

多くのLinuxディストリビューションで使われている`systemd`を使い、サーバー起動時にDockerを自動起動させることができます。

:::tip
UbuntuとDebianでは、Dockerはデフォルトで起動時に自動起動する設定になっています。これらのディストリビューションを使っている場合は特に設定不要です。
:::

以下のコマンドでDockerサービスを起動時に有効化できます。

```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

逆に自動起動を無効化したい場合は、`enable`を`disable`に置き換えてください。`systemctl`のサブコマンドでサービスの起動・停止・再起動も管理可能です。

```
sudo systemctl start [サービス名]
sudo systemctl stop [サービス名]
sudo systemctl restart [サービス名]
```

## まとめ

おめでとうございます！LinuxサーバーにDockerを無事インストール・設定できました。もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />