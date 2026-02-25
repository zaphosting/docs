---
id: webspace-plesk-ssl
title: "ホスティング：PleskでSSL証明書を作成する方法"
description: "PleskでSSL証明書を設定してウェブサイトを保護し、HTTPSで暗号化接続を有効にする方法を解説します。"
sidebar_label: SSL証明書の作成
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

SSL証明書は、あなたのウェブサイトと訪問者間の接続を暗号化します。HTTPSが有効になると、ブラウザは安全な接続を確立し、アドレスバーに鍵アイコンを表示します。これにより、機密データが保護され、信頼性が向上し、ブラウザがサイトを安全でないと表示するのを防ぎます。

<InlineVoucher />

## メインドメインの保護

Pleskでドメインを初めて作成すると、HTTPでアクセス可能ですが暗号化はされていません。Pleskのコントロールパネルでは、まだ証明書が割り当てられていないことが確認できます。この状態でブラウザでドメインを開くと、通常は安全でないと表示されます：

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

暗号化を有効にするには、Pleskパネルでドメインを開き、**SSL/TLS証明書**に移動します。対応するメニューが開きます：

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

ここから無料のLet's Encrypt証明書をリクエストできます。リクエスト時には有効なメールアドレスを入力し、保護したいドメイン名を選択します。ほとんどの場合、ルートドメインとwwwサブドメインの両方が選択されます（DNS設定にwwwエントリがある場合）：

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

**無料で取得**をクリックしてリクエストを確定すると、PleskがLet's Encryptと通信し、自動的に証明書を発行します。証明書が正常に作成されたら、ホスティング設定でHTTPからHTTPSへの恒久的リダイレクトを有効にして、HTTPSを強制しましょう：

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

有効化後、すべての訪問者は自動的に暗号化されたHTTPS版のウェブサイトにリダイレクトされます。ブラウザでhttps付きのドメインを開いてインストールを確認できます。



## ワイルドカード証明書で全サブドメインを保護

複数のサブドメインを使っている、または使う予定がある場合は、ワイルドカード証明書が効率的です。メインドメインと既存および将来のすべてのサブドメインを保護します。ワイルドカード証明書をリクエストするには、再度**SSL/TLS証明書**メニューを開きます：

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Let's Encrypt証明書の更新またはリクエストオプションを選択し、ワイルドカードドメインを保護するオプションを有効にします：

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

リクエストを確定すると、PleskはDNS TXTレコードを作成する必要があることを示す青い情報ボックスを表示します：

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

このTXTレコードは、ドメインのDNSゾーンに正確に追加する必要があります。これによりドメイン所有権が確認され、Let's Encryptがリクエストを検証できます。DNSエントリは以下のような例になります：

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning DNS伝播の遅延について
DNSの伝播には最大24時間かかることがあります。この間、一部のDNSサーバーが古い情報を返すため検証に失敗することがあります。その場合は、レコードが完全に伝播するまで待ってから再度検証してください。
:::



TXTレコードが正しく伝播し、公開されているかを確認するには、MXToolbox SuperToolなどの外部DNS検索ツールを使うと便利です：

https://mxtoolbox.com/SuperTool.aspx

サイトを開き、**TXT Lookup**を選択。Pleskで提供された完全なホスト名（通常は`_acme-challenge.yourdomain.com`の形式）を入力して検索を開始します。ツールは公開DNSサーバーに問い合わせ、現在見えるTXTレコードを表示します。

Pleskに表示されている検証値と完全に一致する値が表示されれば、DNSエントリは正常に伝播しており、Let's Encryptがドメイン所有権を検証できます。結果が返らないか値が異なる場合は、DNS伝播がまだ完了していない可能性があります。その場合は時間を置いて再度検索してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

レコードが確認できたらPleskに戻り、再度検証を実行します。成功すればワイルドカード証明書が発行され、保護済みとして表示されます。これ以降、新しく作成されたサブドメインも自動的に保護されます。



## まとめ

おめでとうございます！あなたのウェブサイトはSSL暗号化でしっかり保護されました。サーバーと訪問者間で送受信されるすべてのデータが安全になり、ブラウザはあなたのドメインを信頼済みとして認識し、HTTPSが自動的に強制されます。

さらに質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />