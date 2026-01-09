---
id: dedicated-linux-security-tips
title: "専用サーバー：Linux セキュリティのコツ"
description: "Linuxサーバーのセキュリティを強化するための必須のヒントを紹介。不正アクセスを防ぎ、サービスを守ろう → 今すぐチェック"
sidebar_label: セキュリティのコツ
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Linuxサーバーをより安全にするためのヒントやアドバイスを紹介します。特にサーバーは外部からアクセスされるため、不正アクセスを防ぐ基本的な対策は必須で、絶対に無視してはいけません。

:::info
この手順は網羅的ではなく、より詳しい情報はZAPの他のドキュメントセクションにあります。（例：[2FA (SSH)](vserver-linux-ssh2fa.md)）
:::

:::tip
サーバーを守る一番簡単な方法はいつも同じ：強力なパスワードを使い、サービスは定期的にアップデートし、どのサービスを入れるか・どのガイドに従うかをしっかり考えること！
:::

## SSHのセキュリティ強化

SSH（Secure Shell）は、サーバーのコンソールにリモートでアクセスしてコマンドを実行できるサービスです。SSHの設定方法はこちら：[初回アクセス (SSH)](vserver-linux-ssh.md)

デフォルトではパスワード認証が使われていますが、これはブルートフォース攻撃で突破されやすいという大きな弱点があります。特に簡単すぎるパスワードを使っている場合は要注意。パスワード認証を使うなら、**強力なパスワード**を必ず設定してください。

さらに安全にするには、SSHキー認証のみを有効にしてパスワードログインを無効化しましょう。SSHキーの生成と登録方法は[SSHキーガイド](vserver-linux-sshkey.md)をチェック！

## サービスのポート設定

| サービス | ポート番号 |
|----------|------------|
| SSH      | 22         |
| FTP      | 21         |
| メール   | 25         |
| DNS      | 53         |
| HTTP     | 80         |
| HTTPS    | 443        |

SSHやFTPなどのサービスはデフォルトで決まったポートを使います（上記表参照）。悪意ある攻撃者がSSHをブルートフォース攻撃したい場合、まずどのポートが使われているかを知る必要があります。ポートを変えなければ、22番や21番が狙われやすいです。

これを防ぐために、標準サービスのポートはユーザー定義のものに変更することをおすすめします。次のセクションでやり方を説明します。

:::danger
希望するポート番号は1024〜65536の範囲内で、かつ既に使われていないポートを選んでください！
:::
`cat /etc/services` コマンドで標準ポート一覧を確認し、重複しないポートを選びましょう。

### SSHポートの変更

SSHポートを変えるには設定ファイルを編集します。通常は `/etc/ssh/sshd_config` にありますが、見つからない場合は以下のコマンドで探せます。
```
find / -name "sshd_config" 2>/dev/null
```

nanoでファイルを開きます（rootまたはsudoで）。
```
sudo nano /etc/ssh/sshd_config
```

`Port` の行を探し、コメントアウト（`#Port 22`）されていたら「#」を外し、22を希望のポート番号に変更します。編集後は保存（Ctrl + o）して閉じる（Ctrl + x）。

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

変更を反映させるためにSSHサービスを再起動します。
```
# Ubuntu/Debian/CentOSの場合例
sudo systemctl restart sshd
```

### FTPポートの変更

FTPサービス（例：**proFTPd**）を入れている場合も、設定ファイルを編集してポートを変えられます。SSHとほぼ同じ手順です。

`proftpd.conf` を探します。
```
find / -name "proftpd.conf" 2>/dev/null
```

通常は `/etc/proftpd.conf`（CentOS）か `/etc/proftpd/proftpd.conf`（Ubuntu、Debian）にあります。

nanoで開き、`port` の前の「#」を外して希望のポート番号を設定します。無効なポートを入れないように注意してください。

:::tip
nano内で検索は Ctrl + W でできます。
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## ファイアウォールの利用

サーバーを外部からアクセス可能にするには、必ずどこかのポートを開ける必要があります。SSHならデフォルトで22/TCPポートです（上記で変更方法を説明）。

問題は、このポートが誰でもアクセス可能になってしまうこと。悪意ある攻撃者がログイン試行を大量に送ってきたり（ブルートフォース攻撃）、サーバーのネットワークを過負荷にする攻撃（DDoSなど）を仕掛けてくるリスクがあります。

これを軽減するために、ファイアウォールルールでアクセスを制限しましょう。

主に2つの方法があります：
- **IPTables**：Linuxの標準ファイアウォール。多機能ですが少し難しい。
- **UFW**：IPTablesの簡易インターフェース。使いやすいけど機能は限定的。

どちらを使うかはお好みで。用途によってはIPTablesの柔軟性が必要ですが、単純にポート開閉だけならUFWで十分です。

### IPTables

ここではIPTablesで接続試行数を制限するルールを作ります。以下のコマンドはすべてポート22に対してのみ有効なので、他のサービス用には適宜変更してください。

:::note
コマンドはすべてのLinuxディストリビューションで動くわけではありませんが、主要なものでは問題なく動作します。
:::

まずLinuxサーバーにログインしてください。方法は[初回アクセス (SSH)](vserver-linux-ssh.md)を参照。以下のコマンドを順に実行します。

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. 1つのIPからポート22への接続が2つを超えたらパケットを破棄
2. 新しい接続のIPをrecentリストに追加
3. 1秒以内に2回以上接続しようとしたIPからの新規接続を破棄

### UFW

UFWはIPTablesの簡易版です。まずUFWをインストールしましょう（多くのLinuxでデフォルトでは入っていません）。rootまたはsudoで実行してください。

Linuxサーバーにログイン後、Debian/Ubuntuを例に説明しますが他のディストリビューションでも似た手順です。

まずパッケージリストを更新し、アップグレードします。
```
sudo apt update && sudo apt upgrade -y
```

次にUFWをインストール。
```
sudo apt install ufw -y
```

インストール成功を確認。
```
sudo ufw status
> Firewall not loaded
```

ファイアウォールを有効にする前に、SSHのポートを許可して自分がサーバーから締め出されないようにします。

:::caution
SSHのポートを変更している場合は22の代わりに新しいポート番号を使ってください。
:::

SSHポートを許可し、UFWを有効化します。
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

成功するとこんな感じになります。
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
UFWの制限は1分あたり6回までとシンプルです。より細かい設定が必要ならIPTablesを直接使うのがおすすめ。
:::

:::tip
ファイアウォールは接続試行を数えてブロックするだけですが、Fail2Banならログファイルを監視して異常を検知できます。次のセクションでFail2Banの導入方法を紹介します。
:::

## Fail2Banでさらに強力に守る

Fail2Banは不正アクセスの疑いがあるIPを自動でブロックするサービスです。ログファイルを監視して異常を検知し、簡単にシステムを強力に守れます。

インストール直後から以下のよく使われるサービス用の設定が入っています：
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server

他のサービスも正規表現（RegEx）とログファイル指定で追加可能。

例として `/var/log/auth.log` を見てみましょう。ここにはSSHのログイン試行（成功・失敗）が記録されています。
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

こんなログが見えます：
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Banはこのログを監視し、失敗した認証があったIPを検知。攻撃者のIPを数回失敗したらブロックします。

### Fail2Banのインストール

Linuxサーバーにログイン後（[初回アクセス (SSH)](vserver-linux-ssh.md)参照）、rootまたはsudoで以下を実行。

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

インストール後、`systemctl`でサービスの状態を確認できます（Ctrl+Cで終了）。
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

Fail2Banはインストール直後はまだ有効化されていません。`/etc/fail2ban`を見てみると以下のファイルがあります。
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
有効な「jail」を作るには `jail.local` を作成し、`jail.conf` の内容をコピーします。
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

`jail.local` で監視対象サービスなどの設定を行います。まずは `[Default]` セクションを見てください。ここで基本設定をします。

少しスクロールして以下のように設定例を参考にしてください。

| 属性          | 説明                                         | 値          |
|---------------|----------------------------------------------|-------------|
| ignoreip      | ブロックしないIPアドレス                     | 127.0.0.1/8 |
| ignorecommand | 関係なし                                     |             |
| bantime       | ブロック時間                                 | 1h          |
| findtime      | 失敗をカウントする期間                       | 10m         |
| maxretry      | ブロックまでの失敗回数                       | 5           |

```
# スペースやカンマで区切って複数指定可能
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" はブロック時間（秒）
bantime  = 1h

# "findtime" は失敗回数をカウントする期間（秒）
findtime  = 10m

# "maxretry" はブロックまでの失敗回数
maxretry = 5
```

基本設定が終わったら、SSHサービスを監視するために `[sshd]` セクションを探します。ポートを変更している場合は `port` に新しい番号を入れてください。

```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```

:::tip
サービスごとに個別設定も可能です（例：`maxretry`を一般設定より低くするなど）。設定しなければ一般設定が使われます。
:::

設定を反映させるためにFail2Banを再起動します。
```
sudo systemctl restart fail2ban.service
```

### Fail2Banの動作確認

VPNや別のサーバーがあれば、Fail2Banがちゃんと動いているかテストできます。VPNやスマホのホットスポットで違うIPを使い、SSHで間違ったパスワードを連続で入力してみてください。

:::danger
普段使っているネットワークで試すと自分のIPがブロックされてログインできなくなるので絶対にやめてください！
:::

間違ったパスワードを何度か入れると、以下のように接続が拒否されます。
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

ブロック解除したい場合は以下のコマンドを使います。
```
fail2ban-client set sshd unbanip {あなたのIP}
```

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

多くの人がドメインのDNS管理にCloudflareを使っています。Cloudflareは世界最大級のネットワークを持ち、ページの読み込み速度やレイテンシを下げるだけでなく、DoS/DDoS攻撃や新種の攻撃からウェブサイトを守ってくれます。

ここではウェブサーバーを攻撃から守る方法を紹介します。

まず、あなたのドメインがすでにCloudflareで管理されている前提で話を進めます。まだなら[こちらのガイド](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/)を参考にドメインを移管してください。

CloudflareのダッシュボードのDNSレコードタブに行き、ウェブサーバーのレコードがオレンジの雲アイコンで「Proxied」になっていることを確認します。

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

これでドメインを通るトラフィックはCloudflare経由でサーバーに届き、正当なトラフィックとして扱われます。

ただしサーバーはまだCloudflare以外からもアクセス可能なので、LinuxサーバーのTCPポート80と443へのアクセスをCloudflareの正当なIPからのみ許可するように制限しましょう。

そのためには、[CloudflareのIPv4リスト](https://cloudflare.com/ips-v4)と[IPv6リスト](https://cloudflare.com/ips-v6)を使ってファイアウォールルールを手動で設定します。

または、[Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw)のようなツールを使うと、これらのルールを一括で簡単にインポートできます。

なお、最近追加したルール以外にウェブサーバーへの無制限アクセスを許可するルールがあると効果がありません。必ず不要なルールは削除してください。

## まとめ - これでサーバーはかなり安全に！

このガイドではLinuxサーバーの基本的かつ高度なセキュリティ対策を紹介しました。該当する対策をすべて実施すれば、以前よりかなり安全なサーバーになっています。おめでとう！

さらにできることもあります：
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Fail2Banの追加設定
- Fail2Banのメール通知設定
- その他いろいろ...

ぜひ挑戦してみてください！