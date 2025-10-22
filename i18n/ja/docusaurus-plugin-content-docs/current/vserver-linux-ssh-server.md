---
id: vserver-linux-ssh-server
title: "VPS: SSHのインストール"
description: "SSHを使ってリモートのLinuxサーバーに安全にアクセス・管理する方法を学び、データ保護とサーバーコントロールを強化しよう → 今すぐ詳しく見る"
sidebar_label: SSHのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

Secure Shell（SSH）は、安全で暗号化されたリモートシステムへのアクセスを可能にするプロトコルです。ネットワークを通じて送信されるデータの機密性と完全性を保証します。

このガイドでは、当社のVPSサーバーで提供しているさまざまなLinuxディストリビューションにSSHサーバーをインストールまたは再インストールする方法を解説します。当社のVPSで提供しているほとんどのLinuxディストリビューションにはデフォルトでSSHサーバーが搭載されているため、製品のウェブインターフェースから簡単に管理できます。操作方法は当社のガイド：[初回アクセス（SSH）](vserver-linux-ssh.md)をご覧ください。

サーバーのセキュリティをさらに強化したい場合は、当社の[セキュリティのヒント](vserver-linux-security-tips.md)ガイドもぜひチェックしてください。サーバーをより安全にするためのツールやサービスを紹介しています。

<InlineVoucher />

## インストール

インストールを始めるには、VNC経由でサーバーにアクセスしてください。手順は[VNCコンソール](vserver-vnc.md)のガイドを参考にしてください。


<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`yum remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
yum update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
yum install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します：
```
systemctl start sshd
```

システム起動時に自動でサービスが開始されるように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```

</TabItem>

<TabItem value="Debian" label="Debian">

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`apt remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
apt update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
apt install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します：
```
systemctl start sshd
```

システム起動時に自動でサービスが開始されるように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`apt remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
apt update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
apt install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します：
```
systemctl start sshd
```

システム起動時に自動でサービスが開始されるように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
SSHサーバーを再インストールする場合は、まずアンインストールしてください。以下のコマンドでアンインストールできます：`dnf remove openssh`
:::

SSHサーバーをインストールする前に、システムを最新の状態に更新しましょう。以下のコマンドを実行してください：
```
dnf update
```

続いて、SSHサーバーをインストールします。以下のコマンドを実行してください：
```
dnf install openssh-server
```

インストールが完了したら、SSHサーバーサービスを起動します：
```
systemctl start sshd
```

システム起動時に自動でサービスが開始されるように設定しましょう。以下のコマンドを実行してください：
```
systemctl enable sshd
```
</TabItem>
</Tabs>

## rootログインの有効化

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
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

これを以下のように変更し、rootのリモートログインを許可します：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian" default>
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

これを以下のように変更し、rootのリモートログインを許可します：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu" default>
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

これを以下のように変更し、rootのリモートログインを許可します：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora" default>
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

これを以下のように変更し、rootのリモートログインを許可します：
```
PermitRootLogin yes
```

最後に、新しい設定を反映させるためにSSHサーバーを再起動します。以下のコマンドを実行してください：
```
systemctl restart sshd
```
</TabItem>
</Tabs>


## まとめ

おめでとうございます！SSHサービスのインストールと設定が無事に完了しました！もし質問や問題があれば、いつでも対応可能なサポートチームまでお気軽にお問い合わせください！


<InlineVoucher />