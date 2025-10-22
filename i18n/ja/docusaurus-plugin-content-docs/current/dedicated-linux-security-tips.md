---
id: dedicated-linux-security-tips
title: "専用サーバー：Linuxセキュリティのコツ"
description: "Linuxサーバーのセキュリティを強化するための必須のヒントを紹介。無断アクセスを防ぎ、サービスを守ろう → 今すぐチェック"
sidebar_label: セキュリティのコツ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Linuxサーバーをより安全にするためのヒントやアドバイスを紹介します。特にサーバーは外部からアクセスされるため、不正アクセスを防ぐ基本的な対策は必須であり、決して怠ってはいけません。

:::info
ここでの説明は網羅的ではありません。より詳しい情報はZAPの他のドキュメントセクションをご覧ください。（例：[2FA（SSH）](vserver-linux-ssh2fa.md)）
:::

:::tip
サーバーを守る一番簡単な方法はいつも同じ：強力なパスワードを使い、サービスは定期的にアップデートし、どのサービスを入れるか、どのガイドに従うかをしっかり考えること。
:::

<InlineVoucher />

## SSHのセキュリティ強化

SSH（Secure Shell）は、サーバーのコンソールにリモートでアクセスしコマンドを実行できるサービスです。SSHの設定方法はこちら：[初期アクセス（SSH）](vserver-linux-ssh.md)

デフォルトではパスワード認証が使われていますが、これはブルートフォース攻撃で比較的簡単に突破されるリスクがあります。特に単純なパスワードを使っている場合は要注意。パスワード認証を使うなら、**強力なパスワード**を必ず設定してください。

さらに安全にするには、SSHキー認証のみを有効にしてパスワードログインを無効化しましょう。[SSHキー](vserver-linux-sshkey.md)ガイドで、キーの生成と追加方法をチェック！

## サービスのポート設定

| サービス | ポート |
|----------|--------|
| SSH      | 22     |
| FTP      | 21     |
| メール   | 25     |
| DNS      | 53     |
| HTTP     | 80     |
| HTTPS    | 443    |

SSHやFTPなどのサービスはデフォルトで決まったポートを使います（上記表参照）。悪意ある攻撃者がSSHをブルートフォース攻撃したい場合、まずどのポートが使われているかを知る必要があります。ポートを変更しなければ、22番や21番ポートが狙われやすいです。

これを防ぐために、標準サービスのポートはユーザー定義のものに変更することをおすすめします。次のセクションでやり方を説明します。

:::danger
希望するポートは1024〜65536の範囲内で、かつ既に使われていないポートを選んでください！
:::
`cat /etc/services`コマンドで標準ポート一覧を確認し、重複しないポートを選びましょう。

### SSHポートの変更

SSHポートを変えるには設定ファイルを編集します。通常は`/etc/ssh/sshd_config`にありますが、見つからない場合は以下のコマンドで探せます。
```
find / -name "sshd_config" 2>/dev/null
```

nanoでファイルを開きます（rootまたはsudoで）。
```
sudo nano /etc/ssh/sshd_config
```

`Port`の行を探し、コメントアウト（`#Port 22`）されていたら`#`を外し、22を希望のポート番号に変更します。保存はCtrl + o、終了はCtrl + x。

![Port sshd](https://github.com/zaphosting/docs/assets/42719082/0adec0a9-f1b3-4428-9ce2-f78497cf1818)

変更を反映させるためにSSHサービスを再起動します。
```
# Ubuntu/Debian/CentOSの場合例
sudo systemctl restart sshd
```

### FTPポートの変更

FTPサービス（例：**proFTPd**）を使っている場合も、設定ファイルを編集してポートを変更可能です。手順はSSHと似ています。

`proftpd.conf`を探します。
```
find / -name "proftpd.conf" 2>/dev/null
```

通常は`/etc/proftpd.conf`（CentOS）か`/etc/proftpd/proftpd.conf`（Ubuntu、Debian）にあります。nanoで開き、`port`の前の`#`を外して希望のポート番号を設定してください。無効なポートを入れないように注意。

:::tip
nanoで検索はCtrl + Wを使おう。
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://github.com/zaphosting/docs/assets/42719082/b6f1d33e-8409-4fd7-9f32-5e2d641275c9)

## ファイアウォールの活用

サーバーを外部からアクセス可能にするには、ポートを開ける必要があります。SSHならデフォルトで22/TCPポートです（上記で変更方法を説明）。

問題は、このポートが誰でもアクセス可能になってしまうこと。悪意ある攻撃者がログイン試行を大量に送ってパスワードを割り出したり（パスワード認証が有効なら）、DDoS攻撃でサーバーを過負荷にする恐れがあります。

これを防ぐために、ファイアウォールでアクセス制限をかけましょう。

方法は2つあります：
- **IPTables**：Linuxの元祖ファイアウォール。多機能だけど少し難しい。
- **UFW**：IPTablesの簡単インターフェース。使いやすいけど機能はやや制限される。

どちらを使うかはお好みで。用途によってはIPTablesの柔軟性が必要ですが、単純にポート開閉したいだけならUFWで十分です。

### IPTables

ここではIPTablesで接続試行数を制限するルールを作ります。以下のコマンドは**ポート22**にのみ適用されるので、他のサービスは適宜書き換えてください。

:::note
全てのLinuxディストリビューションで動作するわけではありませんが、主要なディストリビューションの多くで使えます。
:::

まずLinuxサーバーにログインし、以下のコマンドを順に実行します。

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. 1つのIPからポート22への`TIME_WAIT`状態の接続が2つを超えたらパケットを破棄。
2. 新規接続のIPを`recent`リストに追加。
3. 1秒以内に2回以上接続しようとしたIPからの新規接続を破棄。

### UFW

UFWはIPTablesの簡単インターフェースです。まずはインストールしましょう（rootまたはsudoで実行）。

Linuxサーバーにログインし、以下のコマンドを実行（Debian/Ubuntuでの例）。

```
sudo apt update && sudo apt upgrade -y
sudo apt install ufw -y
```

インストール確認：
```
sudo ufw status
> Firewall not loaded
```

ファイアウォールを有効にする前に、SSHサービスを許可して自分がロックアウトされないようにします。

:::caution
SSHポートを変更している場合は22の代わりに新しいポート番号を使ってください。
:::

SSHを許可し、ファイアウォールを有効化。
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

成功するとこんな感じに表示されます。
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

次に接続数を1分あたり6回に制限します。
```
ufw limit 22/tcp
```

:::note
UFWの制限は1分あたり6回までとシンプルです。より詳細な設定が必要ならIPTablesをおすすめします。
:::

:::tip
ファイアウォールは接続試行を数えてブロックするだけ。ログを監視して異常を検知するにはFail2Banが便利です。次のセクションで導入方法を解説します。
:::

## Fail2Banでさらに強力な防御を

Fail2Banは、不正アクセスの疑いがあるIPアドレスを自動でブロックするサービスです。ログファイルを監視し、異常を検知して効果的にシステムを守ります。

インストール直後から、以下のよく使われるサービス用の設定が用意されています：
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server

他のサービスも正規表現（RegEx）とログファイル指定で追加可能。

例として`/var/log/auth.log`を見てみましょう。ここにはSSHのログイン試行（成功・失敗）が記録されています。
![/var/log/auth.log](https://github.com/zaphosting/docs/assets/42719082/2758141d-c2dd-4d24-9aee-876aab5d27e7)

こんなログが見えます：
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Banはこのログを監視し、失敗した認証を検知。攻撃者のIPを特定し、数回失敗したらブロックします。

### Fail2Banのインストール

Linuxサーバーにログインし、以下を実行（rootまたはsudoで）。

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

インストール後、`systemctl`で状態を確認（Ctrl+Cで終了）。
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Fail2Banの設定

インストールは完了しましたが、まだ有効化・設定はされていません。`/etc/fail2ban`を見てみると以下のファイルがあります。
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
有効な「jail」を作るには`jail.local`ファイルを作成します。`jail.conf`の内容をコピーして編集しましょう。
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

設定は`jail.local`で行います。まずは`[Default]`セクションを確認。ここで基本設定をします。

少しスクロールして以下のように設定例を参考に調整してください。

| 属性          | 説明                                         | 値           |
|---------------|----------------------------------------------|--------------|
| ignoreip      | ブロックしないIPアドレス                      | 127.0.0.1/8  |
| ignorecommand | 関係なし                                     |              |
| bantime       | ブロック時間                                 | 1h           |
| findtime      | 失敗ログをカウントする期間                   | 10m          |
| maxretry      | ブロックまでの失敗回数                       | 5            |

```
# スペースやカンマで区切って複数指定可能
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" はブロック時間（秒）
bantime  = 1h

# "findtime" は失敗をカウントする期間（秒）
findtime  = 10m

# "maxretry" はブロックまでの失敗回数
maxretry = 5
```

基本設定が終わったら、SSHサービスを監視する設定をします。`[sshd]`セクションを探し、ポート番号を変更していれば`port`に設定してください。

```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
サービスごとに個別設定も可能です（例：`maxretry`をデフォルトより低く設定）。個別設定がなければ基本設定が使われます。
:::

設定後はFail2Banを再起動して有効化。
```
sudo systemctl restart fail2ban.service
```

### Fail2Banの動作確認

VPNや別のサーバーがあれば、Fail2Banがちゃんと動いているかテスト可能です。違うIPアドレスからSSH接続を試み、パスワードを間違えてみましょう。

:::danger
普段使っているネットワークで試すと、自分のIPがブロックされてログインできなくなるので絶対にやめてください！
:::

違うIPから何度も間違ったパスワードでログインすると、以下のように接続拒否されます。
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

Fail2Banで保護されたサーバーは接続を拒否（`Connection refused`）します。

Fail2Banの状態を確認すると、ブロックされたIPが表示されます。
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

ブロック解除したい場合は以下のコマンドで解除可能：`fail2ban-client set sshd unbanip {あなたのIP}`。

:::info
IPブロックが多すぎる場合は、ブロック時間を失敗ごとに延長する設定をするとログイン試行を減らせます。
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# ブロック時間を失敗ごとに増やす
bantime.increment = true
# 24時間単位で増加（1h,24h,48h,3d,4d....）
bantime.factor = 24
# 最大ブロック時間は5週間
bantime.maxtime = 5w
```

## Cloudflareでウェブサーバーを守る

多くの人がCloudflareをドメインのDNS管理に使っています。Cloudflareは世界最大級のネットワークを持ち、ページの読み込み速度やレイテンシを下げるだけでなく、DoS/DDoS攻撃や新種の攻撃からもウェブサイトを守ってくれます。

ここではウェブサーバーを攻撃から守る方法を紹介します。

まず、あなたのドメインがすでにCloudflareで管理されている前提で話を進めます。まだなら[こちらのガイド](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/)を参考に移行してください。CloudflareのダッシュボードのDNSレコードタブに行き、ウェブサーバーのレコードがオレンジの雲アイコンで「Proxied」になっていることを確認。

![](https://github.com/zaphosting/docs/assets/42719082/a3572480-75df-4c43-bbba-e60ddedf9316)

これでドメインを経由するトラフィックはCloudflareを通り、正当なトラフィックだけがサーバーに届きます。

ただしサーバーはまだCloudflareの外からもアクセス可能なので、LinuxサーバーのTCPポート80と443へのアクセスをCloudflareの正当なIPからのみ許可するように制限しましょう。

方法は、[CloudflareのIPv4リスト](https://cloudflare.com/ips-v4)と[IPv6リスト](https://cloudflare.com/ips-v6)を使ってファイアウォールルールを手動で設定するか、[Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw)のようなツールで一括インポートすると楽です。

なお、ウェブサーバーへの無制限アクセスを許可する別のルールがないか必ず確認してください。あると今回追加したルールが効きません。

## まとめ - これでサーバーはかなり安全に！

このガイドではLinuxサーバーの基本的かつ高度なセキュリティ対策を紹介しました。該当する推奨をすべて実施すれば、サーバーは以前より格段に安全になっています。おめでとう！

さらにできる対策もあります：
- [2FA（SSH）](vserver-linux-ssh2fa.md)
- Fail2Banの追加設定
- Fail2Banのメール通知設定
- その他多数...

<InlineVoucher />