---
id: vserver-linux-security-tips
title: "VPS: Linux セキュリティのコツ"
description: "Linuxサーバーのセキュリティを強化するための必須のヒントを紹介。不正アクセスを防ぎ、サービスを守ろう → 今すぐチェック"
sidebar_label: セキュリティのコツ
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Linuxサーバーのセキュリティを高めるためのヒントやアドバイスを紹介します。特に（仮想）サーバーは外部からアクセスされるため、不正アクセスを防ぐ基本的な対策は必須で、絶対に無視してはいけません。

:::info
この手順は網羅的ではなく、より詳しい情報はZAPの他のドキュメントセクションで確認できます。（例：[2FA (SSH)](vserver-linux-ssh2fa.md)）
:::

:::tip
サーバーを守る一番簡単な方法はいつも同じ：強力なパスワードを使い、サービスは定期的にアップデートし、どのサービスを入れるか・どのガイドに従うかをしっかり考えること！
:::

<InlineVoucher />

## SSHのセキュリティ強化

SSH（Secure Shell）は、サーバーのコンソールにリモートでアクセスしてコマンドを実行できるサービスです。SSHの設定方法はこちら：[初回アクセス（SSH）](vserver-linux-ssh.md)

デフォルトではパスワード認証が使われていますが、これはブルートフォース攻撃で比較的簡単に突破されるリスクがあります。特に単純なパスワードを使っている場合は要注意。パスワード認証を使うなら、**強力なパスワード**を必ず設定してください。

さらに安全にするなら、SSHキー認証のみを有効にしてパスワードログインを無効化しましょう。SSHキーの生成と登録方法は[SSHキー](vserver-linux-sshkey.md)ガイドをチェック！

## サービスのポート設定

| サービス | ポート |
|----------|--------|
| SSH      | 22     |
| FTP      | 21     |
| メール   | 25     |
| DNS      | 53     |
| HTTP     | 80     |
| HTTPS    | 443    |

SSHやFTPなどのサービスはデフォルトで決まったポートを使います（上の表参照）。悪意ある攻撃者がSSHをブルートフォース攻撃する場合、まずどのポートが使われているかを知る必要があります。ポート設定を変えなければ、通常は22番や21番ポートが狙われます。

これを防ぐために、標準サービスのポートはユーザー定義のものに変更することをおすすめします。次の章で設定方法を紹介します。

:::danger
希望するポート番号は1024〜65536の範囲で、すでに使われていないポートを選んでください！
:::
`cat /etc/services`コマンドで標準ポート一覧を確認し、重複を避けましょう。

### SSHポートの変更

SSHポートを変えるには設定ファイルを編集します。通常は`/etc/ssh/sshd_config`にありますが、見つからない場合は以下のコマンドで探せます。
```
find / -name "sshd_config" 2>/dev/null
```

nanoでファイルを開きます（rootまたはsudoで）。
```
sudo nano /etc/ssh/sshd_config
```

`Port`の行を探し、コメントアウト（`#Port 22`）されていたら`#`を外して22を希望のポートに変更。保存はCtrl + o、終了はCtrl + x。

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

変更を反映させるためSSHサービスを再起動します。
```
# Ubuntu/Debian/CentOSの場合例
sudo systemctl restart sshd
```

### FTPポートの変更

FTPサービス（例：**proFTPd**）を使っている場合も設定ファイルを編集してポートを変えられます。手順はSSHと似ています。

`proftpd.conf`を探します。
```
find / -name "proftpd.conf" 2>/dev/null
```

通常は`/etc/proftpd.conf`（CentOS）か`/etc/proftpd/proftpd.conf`（Ubuntu、Debian）にあります。nanoで開き、`port`の前の`#`を外して希望のポート番号を設定。無効なポートを入れないよう注意してください。

:::tip
nanoで検索はCtrl + Wを使おう。
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## ファイアウォールの活用

サーバーを外部からアクセス可能にするには、必ずどこかのポートを開ける必要があります。SSHならデフォルトで22/TCPポートです（上で変更方法を説明）。

問題は、このポートが誰でもアクセス可能になってしまうこと。悪意ある攻撃者がログイン試行を大量に送ってパスワードを割り出そうとしたり（パスワード認証が有効なら）、DDoS攻撃でサーバーのネットワークを圧迫しようとしたりします。

これを軽減するために、ファイアウォールで開放ポートへのアクセスを制限するルールを設定しましょう。

方法は主に2つ：
- **IPTables**：Linuxの元祖ファイアウォール。多機能だけど少し難しい。
- **UFW**：IPTablesの簡易インターフェース。コマンドがシンプルで使いやすいが、機能はやや制限される。

どちらを使うかはお好みで。用途によってはIPTablesの柔軟性が必要ですが、単純にポート開閉だけならUFWで十分です。

### IPTables

ここではIPTablesで接続試行回数を制限するルールを作ります。以下のコマンドは**ポート22**にのみ適用されるので、他のサービス用には適宜変更してください。

:::note
すべてのLinuxディストリビューションで動作するわけではありませんが、主要なものではほぼ問題なく使えます。
:::

まずLinuxサーバーにログインしてください。方法は[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドを参照。以下のコマンドを順に実行します。

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. 1つのIPからポート22への接続が2つを超えるとパケットを破棄
2. 新規接続のIPをrecentリストに追加
3. 1秒以内に2回以上接続試行したIPからの新規接続を破棄

### UFW

UFWはIPTablesの簡易版です。まずUFWをインストールしましょう。rootかsudoで実行してください。

Linuxサーバーにログインし、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドを参考に。以下はDebian/Ubuntuでの例ですが他のディストリビューションでも似た手順です。

まずパッケージリストと既存サービスをアップデート。
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

ファイアウォールを有効化する前に、サーバーからロックアウトされないようSSHサービスを許可します。

:::caution
SSHポートを変更している場合は22の代わりに新しいポート番号を使ってください。
:::

SSHサービスを許可し、UFWを有効化。
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

次に1分あたり6回の接続制限を設定。
```
ufw limit 22/tcp
```

:::note
UFWの接続制限は1分あたり6回までとシンプルです。より詳細な設定が必要ならIPTablesを直接使うのがおすすめ。
:::

:::tip
ファイアウォールは接続試行を数えてブロックするだけ。ログファイルを監視して異常を検知するFail2Banもぜひ使おう！次の章で導入方法を解説。
:::

## Fail2Banでさらに強力な防御

Fail2Banは、不正な接続を試みるIPアドレスを自動でブロックするサービス。ログファイルを監視して異常を検知し、簡単にシステムを強力に守れます。

インストール直後から、以下のよく使われるサービス用の設定が用意されています：
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
追加サービスも正規表現（RegEx）とログファイル指定で簡単に追加可能。

例として`/var/log/auth.log`を見てみましょう。ここにはSSHのログイン試行（成功・失敗）が記録されています。
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

こんなログが見えます：
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Banはこのログを監視し、失敗した認証があったIPを検出。攻撃者のIPを数回失敗したらブロックします。

### Fail2Banのインストール

Linuxサーバーにログインし、rootかsudoで以下を実行。
```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

インストール後、`systemctl`で状態を確認。（Ctrl+Cで終了）
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

Fail2Banはインストール済みですが、まだ有効化・設定はされていません。`/etc/fail2ban`を見てみると以下のファイルがあります：
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
有効な「jail」を作るには`jail.local`ファイルを作成します。`jail.conf`の内容をコピーして編集しましょう。
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

設定はすべて`jail.local`で行います。監視対象のサービスもここで指定可能。

まずは`[Default]`セクションを確認。ここで一般的な設定をします。

少しスクロールして以下のように設定例を参考に調整してください。

| 属性          | 説明                                         | 値           |
|---------------|----------------------------------------------|--------------|
| ignoreip      | ブロックしないIPアドレス                      | 127.0.0.1/8  |
| ignorecommand | 関係なし                                     |              |
| bantime       | ブロック時間                                 | 1h           |
| findtime      | 失敗ログをカウントする期間                   | 10m          |
| maxretry      | ブロックまでの失敗回数                       | 5            |

```
# スペースやカンマで区切って指定可能
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

これで基本設定は完了。SSHサービスを監視するには`[sshd]`セクションを探し、必要に応じて`port`を変更してください。

```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
サービスごとに個別設定も可能（例：`maxretry`を一般設定より低く）。設定しなければ一般設定が使われます。
:::

設定を反映させるためFail2Banを再起動。
```
sudo systemctl restart fail2ban.service
```

### Fail2Banの動作確認

VPNや別のサーバーがあれば、Fail2Banがちゃんと動いているかテスト可能。VPNやスマホのホットスポットで別IPを取得し、SSH接続でわざと間違ったパスワードを何度も入力してみてください。

:::danger
普段使っているネットワークで試すと自分のIPがブロックされて**ログイン不能になる**ので絶対にやめて！
:::

接続試行の結果はこんな感じになるはず：
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

Fail2Banで保護されたサーバーは接続を拒否するようになります（`Permission denied`ではなく`Connection refused`）。

Fail2Banの状態を確認。
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

ブロック解除したいIPは以下で可能：`fail2ban-client set sshd unbanip {あなたのIP}`。

:::info
IPブロックが多すぎる場合は、ブロック時間を失敗ごとに延長する設定がおすすめ。ログイン試行をさらに減らせます。
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

ここではウェブサーバーを攻撃から守る方法を紹介。

まず、ドメインがすでにCloudflareで管理されている前提です。まだなら[こちらのガイド](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/)を参考に移行してください。CloudflareのダッシュボードのDNSレコードタブで、ウェブサーバーのレコードがオレンジの雲アイコンで「Proxied」になっていることを確認。

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

これでドメインへのトラフィックはCloudflare経由でサーバーに届き、正当なトラフィックだけが通ります。

ただしサーバーはまだCloudflare以外からもアクセス可能なので、LinuxサーバーのTCPポート80と443へのアクセスをCloudflareの正当なIPからのみに制限する必要があります。

そのためには、[CloudflareのIPv4リスト](https://cloudflare.com/ips-v4)と[IPv6リスト](https://cloudflare.com/ips-v6)を使ってファイアウォールルールを手動で設定するか、

[Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw)のようなツールを使って一括でルールをインポートすると楽です。

なお、最近追加したルール以外にウェブサーバーへの無制限アクセスを許可するルールがあると効果がありません。必ず不要なルールは削除しましょう。

## まとめ - これでサーバーはかなり強固に！

このガイドでLinuxサーバーの基本的かつ高度なセキュリティ対策を紹介しました。該当する推奨をすべて実施すれば、サーバーは以前より格段に安全になっています。おめでとう！

さらにできることもたくさんあります：
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Fail2Banの追加設定
- Fail2Banのメール通知設定
- などなど...

<InlineVoucher />