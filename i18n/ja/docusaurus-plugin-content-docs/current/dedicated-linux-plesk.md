---
id: dedicated-linux-plesk
title: "専用サーバー：Pleskのインストール"
description: "Pleskの多機能プラットフォームで初心者から上級者まで効率的にウェブサイトやサーバーを管理する方法 → 今すぐチェック"
sidebar_label: Pleskのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Pleskは、ウェブサイト、サーバー、メールアカウントなどを使いやすいインターフェースで管理できる総合的なホスティング＆サーバー管理プラットフォームです。初心者から経験豊富なウェブ開発者やシステム管理者まで幅広く対応できる万能ソリューションです。

<InlineVoucher />

## Pleskのインストール

:::info
インストール前に、サーバーに最新パッケージを適用するために `apt update` と `apt upgrade` を実行してください。
:::
Pleskは現在、Debian 9 (Stretch)、Debian 10 (Buster)、Ubuntu 18.04 (Bionic Beaver)、Ubuntu 20.04 (Focal Fossa)、CentOS 7/8、Red Hat Enterprise Linux 7.x/8.x、CloudLinux 7.1+/8、AlmaLinux OS、Rocky Linux 8.x、Virtuozzo Linux 7にのみインストール可能です。アーキテクチャは64ビットである必要があります。

サーバーへの接続はPuttyなどを使って行います。


## インストール開始

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="ワンクリックインストール" default>

Pleskを標準コンポーネントと多くのユーザーが使う機能で完全自動インストールするには、以下のコマンドを1回実行するだけです：

> Pleskインストーラーは常に最新のPleskバージョンをインストールします。ここに表示されている画面やスクリーンショットは最新バージョンと異なる場合があります。

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
エラー「-bash: curl: command not found」が出た場合は、`apt install curl`でcurlをインストールしてください。
:::

このコマンド実行後、Pleskの完全インストールには通常15分から60分かかります。

:::info
インストール中はSSHセッションを閉じないでください。閉じるとインストールが中断されます。
:::
中断するとサーバーを再インストールしてからインストーラーを再起動する必要があります。  
再インストールせずにインストーラーを再起動すると、インストール中やPleskパネル内で機能不全が起こる可能性があります。

:::info
インストーラーが「止まった」ように見えることがありますが、99%のケースで数分後にパッケージや設定の構成を続行します。
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

Pleskが製品改善のためにデータ収集を行うかは「Y」（はい）か「n」（いいえ）で答えます。

次に、選択したPleskバージョンのタイプを聞かれます。通常は「Recommended（推奨）」のままでOKです。後からPleskパネルで必要なモジュールを追加できます。

パッケージのインストールやアップグレードの許可は「F」で確定します。

これでインストーラーがインストールを開始します。

:::info
インストール中はSSHセッションを閉じないでください。閉じると中断され、サーバーを再インストールしないと再開できません。
:::
インストーラーが「止まった」ように見えることがありますが、99%のケースで数分後にパッケージや設定の構成を続行します。

インストール完了は以下の画面が表示されたら完了です。

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Webインストーラーを開く

インストーラー起動後はブラウザでインストールが進みます。  
インストールページは https://IP:8447 または https://Domain.xx:8447 でアクセス可能です。

## Pleskウェブパネル

:::info
Webパネル初回アクセス時に「安全な接続ではありません」と表示されますが、これを承認するとページが開きます。
:::

ウェブインターフェースはサーバーの https://IP:8443 または https://Domain.xx:8443 でアクセス可能です。  
ログイン情報はroot/adminと現在のrootパスワードです。  
または表示されているURLのいずれかを使えます。無効になった場合は、`plesk login` コマンドで新しいURLを作成可能です。

### セットアップ

登録が成功すると、管理者アカウントの設定が必要です。  
連絡先名、メールアドレス、パスワードを入力します。  
すでにPleskライセンスを持っていれば直接入力可能です。  
持っていなければ15日間のトライアルライセンスをPleskから取得できます。  
最後に利用規約を承認すればPleskが使えるようになります。

### 言語設定

インストール直後はPleskパネルは英語表示です。  
「ツール＆設定」➡️「Pleskの外観」➡️「言語」からドイツ語（de-DE）を選択できます。  
「デフォルトに設定」をクリックすると全ユーザーの言語が固定されます。  
ログアウト＆ログイン後にPleskパネルがドイツ語表示になります。

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### ドメイン追加

最初のドメインを追加するには、青い「ドメインを追加」ボタンをクリック。

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

自分のドメインを入力し、IPアドレス、ホスティング用のユーザー名とパスワードを設定します。  
DNSにサブドメイン「www」が登録済みなら、Let's EncryptのSSL証明書を直接作成可能です。  
メールアドレスを入力後、青い「OK」ボタンで確定してください。

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)

:::info
ドメインはホスティングのIPアドレスを指している必要があります。  
ZAP-HostingのドメインならEasyDNSで簡単にリダイレクト可能です。  
外部ドメインの場合はAレコードをIPに設定し、サブドメイン「www」「webmail」もIPに向けてください。  
MXレコードもホスティングのIPに設定することをおすすめします。

DNSの新規・変更反映には最大24時間かかることがあります。
:::

## SSL暗号化

ドメイン登録・ホスティング作成時にLet's EncryptのSSL証明書が自動生成されます。  
これはドメインの「ホスティング設定」から選択・設定可能です。  
設定後は「適用」をクリックしてください。

:::info
ウェブサイトを常にHTTPS（SSL）で表示させるには、「HTTPからHTTPSへの恒久的なSEO対応301リダイレクト」のチェックボックスをオンにしてください。
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

ブラウザでドメインを開くと、SSL暗号化が有効になっていることが確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
これでPleskのインストールと最初のドメインのSSL設定が完全に完了です。
:::

<InlineVoucher />