---
id: dedicated-linux-sshkey
title: "専用サーバー：Linuxサーバー用SSHキーの生成と使用方法"
description: "Linuxサーバーの接続をより安全にするためのSSHキーの安全な生成と管理方法をチェック → 今すぐ詳しく見る"
sidebar_label: SSHキー
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## SSHキーの生成

SSHパスワードによる通常の接続よりもはるかに安全な接続のために、SSHキーの使用をおすすめします。Linuxサーバーのダッシュボードで「**アクセス＆セキュリティ**」タブを開いてください。

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

「**アクセス＆セキュリティ**」内の「**SSHキーを生成**」ボタンでキーを生成できます。  
ボタンを押すとポップアップが開き、ランダムに生成されたキーがPCに直接ダウンロードされます。  
キーをサーバーに追加するには、「**キーを追加**」ボタンをクリックしてください。

:::info
Linux VPSの場合はキーが直接追加されます。Linux専用サーバーの場合は、変更を反映させるためにサーバーの再起動が必要です。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

さらにキーが必要な場合は、同じウィンドウの「**キーを生成**」ボタンを押してください。  
「**キー名**」でZAP-Hostingパネルに表示されるキーの名前を設定できます。管理がしやすくなるのでおすすめです。

すべての必要なキーを生成・追加すると、「**アクセス＆セキュリティ**」の下に一覧表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

外部で生成した自分の公開鍵を持っている場合は、「**＋**」アイコンをクリックして統合できます。

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

空のパネルが開くので、そこに自分の公開鍵を貼り付けてください。  
「**キーを追加**」を押すとサーバーに追加され、パネルに表示されます。

## OpenSSH形式のSSHキーをPuTTY用プライベートキーに変換（PuTTYGen使用）

当社パネルで作成されるSSHキーはOpenSSH形式です。PuTTYで使うには、PuTTYのプライベートキー形式に変換する必要があります。PuTTYに自動でインストールされる「**PuTTYGen**」ソフトを使いましょう。

PuTTYGenはPuTTYのルートディレクトリにあります。例の画像では「**C:>Program Files>PuTTY**」にPuTTYフォルダが表示されています。

PuTTYGenを起動し、「**ファイル**」→「**プライベートキーを読み込む**」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

ZAP-Hostingで生成したファイルを開きます。通常はダウンロードフォルダにあります。

:::info
**重要：** 画像のようにフィルターを「**すべてのファイル**」に設定してください。システムが作成した.priファイルは通常のフィルターでは見えません。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

読み込みが完了したら、コメントやパスワードを設定できます。パスワードを設定する場合は「**Key passphrase**」と「**Confirm passphrase**」の両方に同じパスワードを入力してください。  
*注意:* 空欄のままパスワードなしでキーを作成することも可能ですが、セキュリティが少し落ちるのでおすすめしません。  
設定が完了したら、「**Save private key**」ボタンでPuTTY対応のキーを保存しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

.ppkファイルに名前を付けて保存し、後で見つけやすくしてください。

## SSHキー接続

キーを接続に使うには、まずPuTTYにキーを紐付ける必要があります。  
「**SSH**」→「**Auth**」→「**Browse...**」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

先ほどPuTTYGenで作成したキーを選択し、「**Open**」を押します。

毎回設定を繰り返さなくて済むように、セッションに保存するのがおすすめです。  
「**Session**」→「**Default Settings**」→「**Save**」をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

これでPuTTYでサーバーにログインできます。PuTTYGenで入力した「**キーコメント**」も表示されます。

## パスワードログインの無効化

SSHキーはセキュリティ強化のために作られました。パスワードでのSSHログインがまだ可能だと、サーバーの安全性は変わりません。  
そのため、パスワードによるSSHログインを無効化する必要があります。Linux VPSとLinux専用サーバーで無効化方法が異なります。  
正しく無効化されていれば、作成したSSHキーを持つユーザーのみ接続可能になります。

### Linux VPS

アクセス＆セキュリティタブで簡単にパスワードログインを無効化できます。  
「**SSHキーを生成**」ボタンの隣にある「**パスワードログインを無効化**」ボタンを押してください。  
無効化されると、パスワードログインでのサーバー接続はできなくなります。

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

「**パスワードによるSSHログイン**」の表示も「**無効**」に変わります。

<InlineVoucher />