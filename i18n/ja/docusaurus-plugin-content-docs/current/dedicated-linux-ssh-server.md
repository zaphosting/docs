---
id: dedicated-linux-ssh-server
title: "専用サーバー：SSHのインストール"
description: "Linux VPSでSSHサーバーを安全にインストール・管理し、安全なリモートアクセスと強化されたサーバー保護を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: SSHのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Secure Shell（SSH）は、安全で暗号化されたリモートシステムへのアクセスを可能にするプロトコルです。ネットワークを通じて送信されるデータの機密性と完全性を保証します。

このガイドでは、当社のVPSサーバーで提供しているさまざまなLinuxディストリビューションにSSHサーバーをインストールまたは再インストールする方法を解説します。ほとんどのLinuxディストリビューションはデフォルトでSSHサーバーが搭載されているため、製品のウェブインターフェースから簡単に管理可能です。操作方法は当社のガイド：[初回アクセス（SSH）](vserver-linux-ssh.md)をご覧ください。

サーバーのセキュリティをさらに強化したい場合は、当社の[セキュリティのヒント](vserver-linux-security-tips.md)ガイドもぜひチェックしてください。さまざまなツールやサービスでサーバーの安全性を高める方法を紹介しています。

<InlineVoucher />

## インストール

インストールを開始するには、VNC経由でサーバーにアクセスしてください。手順は[VNCコンソール](vserver-vnc.md)のガイドを参考にしてください。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストール可能です：`yum remove openssh`
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

システム起動時に自動でサービスが開始されるように設定します。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」をエディタとして使用します。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを実行します：`yum install nano`
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

最後に、設定を反映させるためSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストール可能です：`apt remove openssh`
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

システム起動時に自動でサービスが開始されるように設定します。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」をエディタとして使用します。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを実行します：`apt install nano`
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

最後に、設定を反映させるためSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストール可能です：`apt remove openssh`
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

システム起動時に自動でサービスが開始されるように設定します。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」をエディタとして使用します。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを実行します：`apt install nano`
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

最後に、設定を反映させるためSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストール可能です：`dnf remove openssh`
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

システム起動時に自動でサービスが開始されるように設定します。以下のコマンドを実行してください：
```
systemctl enable sshd
```

## rootログインの有効化

rootログインを有効にするには、opensshの設定ファイルを編集する必要があります。このガイドでは「nano」をエディタとして使用します。

:::info
「nano」がインストールされていない場合は、先にインストールしてください。以下のコマンドを実行します：`dnf install nano`
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

最後に、設定を反映させるためSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>
</Tabs>

これでサーバーにSSHサービスが正常にインストールされ、SSH経由でサーバーにアクセスできるようになりました。

<InlineVoucher />