---
id: dedicated-linux-ssh-server
title: "LinuxサーバーでSSHをセットアップ - 安全なリモートアクセスを有効化しよう"
description: "LinuxサーバーにSSHサーバーを安全にインストール・管理して、リモートアクセスを安全にし、サーバーの保護を強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: SSHのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Secure Shell（SSH）は、安全で暗号化されたリモートシステムへのアクセスを可能にするプロトコルです。ネットワーク上で送信されるデータの機密性と完全性を保証します。

このガイドでは、当社のVPS/専用サーバーで提供している各種LinuxディストリビューションにSSHサーバーをインストールまたは再インストールする方法を解説します。ほとんどのLinuxディストリビューションはデフォルトでSSHサーバーが搭載されているため、製品のウェブインターフェースから簡単に管理可能です。操作方法は当社のガイド：[初回アクセス（SSH）](vserver-linux-ssh.md)をご覧ください。

さらにサーバーのセキュリティを強化したい場合は、当社の[セキュリティのヒント](vserver-linux-security-tips.md)ガイドもぜひチェックしてください。サーバーをより安全にするためのツールやサービスを紹介しています。



## インストール

インストールを始めるには、VNC経由でサーバーにアクセスしてください。手順は[VNCコンソール](vserver-vnc.md)のガイドを参考にしてください。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
SSHサーバーを再インストールしたい場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`yum remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
yum update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
yum install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します。以下のコマンドを実行してください：
```
systemctl start sshd
```

システム起動時に自動でサービスが起動するように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」エディタを使います。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを使います：`yum install nano`
:::

設定ファイルを開くには、以下のコマンドを実行してください：
```
nano /etc/ssh/sshd_config 
```

矢印キーで移動し、以下の行を探します：
```
#PermitRootLogin prohibit-password
```

これを以下のように変更し、リモートのrootログインを有効にします：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
SSHサーバーを再インストールしたい場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`apt remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
apt update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
apt install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します。以下のコマンドを実行してください：
```
systemctl start sshd
```

システム起動時に自動でサービスが起動するように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」エディタを使います。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを使います：`apt install nano`
:::

設定ファイルを開くには、以下のコマンドを実行してください：
```
nano /etc/ssh/sshd_config 
```

矢印キーで移動し、以下の行を探します：
```
#PermitRootLogin prohibit-password
```

これを以下のように変更し、リモートのrootログインを有効にします：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
SSHサーバーを再インストールしたい場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`apt remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
apt update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
apt install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します。以下のコマンドを実行してください：
```
systemctl start sshd
```

システム起動時に自動でサービスが起動するように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」エディタを使います。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを使います：`apt install nano`
:::

設定ファイルを開くには、以下のコマンドを実行してください：
```
nano /etc/ssh/sshd_config 
```

矢印キーで移動し、以下の行を探します：
```
#PermitRootLogin prohibit-password
```

これを以下のように変更し、リモートのrootログインを有効にします：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
SSHサーバーを再インストールしたい場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`dnf remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
dnf update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
dnf install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します。以下のコマンドを実行してください：
```
systemctl start sshd
```

システム起動時に自動でサービスが起動するように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」エディタを使います。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを使います：`dnf install nano`
:::

設定ファイルを開くには、以下のコマンドを実行してください：
```
sudo nano /etc/ssh/sshd_config 
```

矢印キーで移動し、以下の行を探します：
```
#PermitRootLogin prohibit-password
```

これを以下のように変更し、リモートのrootログインを有効にします：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>
</Tabs>

これでサーバーにSSHサービスが正常にインストールされ、SSH経由でサーバーにアクセスできるようになりました。