---
id: dedicated-linux-plesk
title: "専用サーバー：Pleskのインストール"
description: "Pleskの多機能プラットフォームでウェブサイトやサーバーを効率的に管理する方法を発見しよう → 今すぐ詳しく見る"
sidebar_label: Pleskのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Pleskは、ウェブサイト、サーバー、メールアカウントなどを使いやすいインターフェースで管理できる総合的なホスティング＆サーバー管理プラットフォームです。初心者から経験豊富なウェブ開発者やシステム管理者まで幅広く対応できる万能ソリューションです。



## Pleskのインストール

:::info
インストール前に、サーバーに最新パッケージを適用するために `apt update` と `apt upgrade` を実行してください。
:::
Pleskは現在、Debian 9（Stretch）、Debian 10（Buster）、Ubuntu 18.04（Bionic Beaver）、Ubuntu 20.04（Focal Fossa）、CentOS 7/8、Red Hat Enterprise Linux 7.x/8.x、CloudLinux 7.1+/8、AlmaLinux OS、Rocky Linux 8.x、Virtuozzo Linux 7にのみインストール可能です。アーキテクチャは64ビットである必要があります。

サーバーへの接続は、例えばPuttyを使って行います。


## インストール開始

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="ワンクリックインストール" default>

Pleskを標準コンポーネントと多くのPleskユーザーが使う機能で完全自動インストールするには、以下のコマンドを1回実行するだけです：

> Pleskインストーラーは常に最新のPleskバージョンをインストールします。ここに表示されている画面やスクリーンショットは最新バージョンと異なる場合があります。

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
もし「-bash: curl: command not found」というエラーが出たら、`apt install curl`でcurlをインストールしてください。
:::

このコマンド実行後、Pleskの完全インストールには通常15分から60分かかります。

:::info
インストール中はSSHセッションを閉じないでください。閉じるとインストールが中断されます。
:::
また、インストールを再開するにはサーバーの再インストールが必要になります。  
サーバーを再インストールせずにインストーラーを再起動すると、インストール中やPleskパネル内で機能不全が発生する恐れがあります。

:::info
インストーラーが「止まった」ように見えることがありますが、99%のケースで数分後に処理が続行されます。パッケージや設定の構成中だからです。
:::


インストール完了は以下の画面が表示されたら完了です。

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="Webインストール">

Web経由でPleskをインストールするには、数コマンドだけでOKです。

:::info
Pleskインストーラーは常に最新のPleskバージョンをインストールします。ここに表示されている画面やスクリーンショットは最新バージョンと異なる場合があります。
:::

Pleskインストーラーをダウンロード：

```
wget https://autoinstall.plesk.com/plesk-installer
```

実行権限を付与：

```
chmod +x plesk-installer
```

インストーラーを起動：

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="コンソールインストール">

コンソールからPleskをインストールするには、数コマンドだけでOKです。

:::info
Pleskインストーラーは常に最新のPleskバージョンをインストールします。ここに表示されている画面やスクリーンショットは最新バージョンと異なる場合があります。
:::

インストーラーをダウンロード：

```
wget https://autoinstall.plesk.com/plesk-installer
```

実行権限を付与：

```
chmod +x plesk-installer
```

インストーラーを起動：

```
./plesk-installer
```

上記3つのコマンドを実行後、ライセンス承認を「F」で行います：

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

承認後、どのPleskをインストールするか聞かれます。Plesk ObsidianかPlesk Onyxで、より安定している方が表示されます。通常は「安定版」を選択し、「F」で確定してください。

Pleskが製品改善のためにデータ収集を行ってよいかは、「Y」（はい）か「n」（いいえ）で答えます。

続いて、選択したPleskバージョンのタイプを聞かれます。通常は「Recommended（推奨）」のままでOKです。後からPleskパネルで必要なモジュールを追加インストールできます。

パッケージのインストールやアップグレードの許可は「F」で承認します。

これでインストーラーがインストールを開始します。

:::info
インストール中はSSHセッションを閉じないでください。閉じると中断され、再開にはサーバーの再インストールが必要です。
:::
インストーラーが「止まった」ように見えることがありますが、99%のケースで数分後に処理が続行されます。パッケージや設定の構成中だからです。

インストール完了は以下の画面が表示されたら完了です。

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Webインストーラーを開く

インストーラー起動後はブラウザでインストールを進めます。  
インストールページは https://IP:8447 または https://Domain.xx:8447 でアクセス可能です。

## Pleskウェブパネル

:::info
Webパネルにアクセスすると「安全な接続ではありません」と表示されます。初回はこれを承認するとページが開きます。
:::

ウェブインターフェースはサーバーの https://IP:8443 または https://Domain.xx:8443 からアクセスできます。  
ログイン情報は root/admin と現在のrootパスワードです。  
または表示されているURLのいずれかを使えます。無効になっている場合は、`plesk login` コマンドで新しいURLを作成可能です。

### セットアップ

登録が成功すると、管理者アカウントの設定が必要です。  
連絡先名、メールアドレス、パスワードを入力します。  
既にPleskライセンスを持っている場合はここで入力可能です。  
またはPleskから15日間のトライアルライセンスを取得できます。  
最後に利用規約を承認すればPleskが使えるようになります。

### 言語設定

インストール直後はPleskパネルは英語表示です。  
「ツール＆設定」➡️「Pleskの外観」➡️「言語」からドイツ語（de-DE）を選択できます。  
「デフォルトに設定」をクリックすると全ユーザーの言語が固定されます。  
ログアウト＆ログインするとPleskパネルがドイツ語表示になります。

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### ドメイン追加

最初のドメインを追加するには、青い「ドメインを追加」ボタンをクリック。

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

自分のドメインを入力します。  
また、ドメインのホスティング用ユーザー名とパスワード、IPアドレスも設定します。  
DNSに「www」サブドメインが登録済みなら、Let's EncryptのSSL証明書を直接作成可能です。  
メールアドレスを入力後、青い「OK」ボタンで確定します。

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)


:::info
ドメインはホスティングのIPアドレスを指している必要があります。  
ZAP-HostingのドメインならEasyDNSで簡単にリダイレクト可能です。  
外部ドメインの場合はAレコードをIPに設定し、「www」や「webmail」サブドメインもIPに向けてください。  
MXレコードもホスティングのIPに設定することを推奨します。

DNSの新規・変更反映には最大24時間かかることがあります。
:::

## SSL暗号化

ドメイン登録・ホスティング作成時にLet's EncryptのSSL証明書が生成されています。  
これはドメインの「ホスティング設定」から選択・適用可能です。  
適用後は「適用」ボタンをクリックして確定してください。

:::info
ウェブサイトを常にHTTPS（SSL）で表示させるには、「HTTPからHTTPSへの恒久的かつSEOに適した301リダイレクト」のチェックボックスをオンにしてください。
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

ブラウザでドメインを開くと、暗号化されていることが確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
インストールと最初のドメインのSSL設定はこれで完全に完了です。
:::
