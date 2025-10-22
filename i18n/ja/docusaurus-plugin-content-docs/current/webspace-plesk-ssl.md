---
id: webspace-plesk-ssl
title: "ホスティング：SSL証明書の作成"
description: "SSL暗号化でウェブサイトを安全に保護し、HTTPSを有効化してより安全なブラウジングを実現 → 今すぐ詳しくチェック"
sidebar_label: SSL証明書の作成
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SSLでウェブサイトを暗号化しよう

:::info
ドメインがすでにホスティングのIPアドレスを指していることが前提です。
:::

ホスティングにドメインを作成すると、最初は常に暗号化されていません。Pleskパネルで確認できます：

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

ドメインをブラウザで開いたときの通知：

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

SSL証明書を使えば、ドメインをしっかり保護・暗号化できます。

<InlineVoucher />

## 証明書の作成方法

Step 1️⃣: 「SSL/TLS証明書」をダブルクリックすると、以下のメニューが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Let's Encryptの証明書は無料でリクエスト可能です。

Step 2️⃣: 必要な情報を入力・記入します。証明書をリクエストするには詳細の入力が必須です。

メールアドレスを指定し、証明書の有効範囲をチェックします。通常、各ドメインには「www」のサブドメインも有効になっているので、DNSに登録されていればこちらも選択されます。

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

「無料で取得」をクリックすると証明書がリクエストされます。

Step 3️⃣: 証明書が作成されると、右上に表示されます。さらに、HTTPからHTTPSへの自動リダイレクトを設定しないと暗号化が機能しません：

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

設定が完了するとリダイレクトが有効になります。ブラウザでhttpでもhttpsでもアクセスしても、常にhttpsに転送されるようになります。

Step 4️⃣: ブラウザで証明書が認識されているか確認しましょう：

鍵マークが表示されているはず：

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

鍵マークをクリックすると証明書情報が開き、ドメイン名が表示されていることを確認できます：

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

これでウェブサイトはしっかり保護・暗号化されています。

## サブドメイン用の証明書

理論上はサブドメインでも同じ手順で証明書を作成できますが、すでにあるものも新しく作るものもまとめて暗号化できる「ワイルドカード証明書」を使うのが簡単です。これにはドメインのDNSに特別なTXTレコードを追加する必要があります。設定が完了すれば、すべてのサブドメインに対してSSL証明書を発行できます。

Step 1️⃣: 再度SSL/TLS証明書のメニューを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

左上の「証明書を更新」をクリック。Let's Encryptのリクエスト画面が開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

「ワイルドカードドメインを保護する」を選択：

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

「www」と「webmail」のサブドメインが自動で追加されます。
再度「無料で取得」をクリック。

Step 2️⃣: 重要な情報が青いボックスで表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

ドメイン名と値が示されており、これをドメインのDNSにTXTレコードとして永久に登録する必要があります。これによりLet's Encryptがドメインの正当性を確認できます。

DNSの設定例：

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
DNSの反映には最大24時間かかることがあります。
:::

TXTレコードが反映されているか確認するには、mxtoolboxの「TXT Lookup SuperTool」を使うと便利です：https://mxtoolbox.com/SuperTool.aspx

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

設定が反映されていれば、Pleskの青いボックス内の「リロード」をクリックして確認します。DNSレコードが見つかれば数秒後に「SSL/TLS証明書（ワイルドカード証明書）」が「保護済み」と表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

これで新しく作成したサブドメインも自動的に保護されます：

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

これでサイト全体の通信が暗号化されました。完了です。

<InlineVoucher />