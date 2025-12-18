---
id: dedicated-linux-sshkey
title: "専用サーバー：Linuxサーバー用SSHキーの生成と使用方法"
description: "Linuxサーバーの接続をより安全にするためのSSHキーの安全な生成と管理方法をチェック → 今すぐ詳しく見る"
sidebar_label: SSHキー
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## SSHキーの生成

SSHパスワードによる通常の接続よりもはるかに安全な接続のために、SSHキーの使用をおすすめします。Linuxサーバーのダッシュボードで「**アクセス＆セキュリティ**」タブを開いてください。

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

「**アクセス＆セキュリティ**」では、「**SSHキーを生成**」ボタンでキーを生成できます。  
ボタンを押すとポップアップが開き、ランダムに生成されたキーが直接PCにダウンロードされます。  
キーをサーバーに追加するには、「**キーを追加**」ボタンをクリックしてください。

:::info
Linux VPSの場合はキーが直接追加されます。Linux Rootサーバーの場合は、変更を反映させるためにサーバーの再起動が必要です。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

さらにキーが必要な場合は、同じウィンドウ内の「**キーを生成**」ボタンを押してください。  
「**キー名**」では、ZAP-Hostingパネルに表示されるキーの名前を設定できます。管理しやすくなるのでおすすめです。

すべての必要なキーが生成・追加されると、「**アクセス＆セキュリティ**」の下に表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

外部で生成した自分の公開鍵を持っている場合は、「**＋**」アイコンをクリックして統合できます。

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

空のパネルが開くので、そこに自分の公開鍵を貼り付けてください。  
「**キーを追加**」を押すとサーバーに追加され、パネルに表示されます。

## OpenSSH形式のSSHキーをPuTTY用プライベートキーに変換（PuTTYGen使用）

当社パネルで作成されたSSHキーはOpenSSH形式です。PuTTYで使うには、PuTTYのプライベートキー形式に変換する必要があります。PuTTYに自動でインストールされる「**PuTTYGen**」ソフトを使いましょう。

PuTTYGenはPuTTYのルートディレクトリにあります。例の画像では「**C:>Program Files>PuTTY**」にPuTTYフォルダが表示されています。

PuTTYGenを起動し、「**ファイル**」→「**プライベートキーを読み込む**」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

次にZAP-Hostingで生成したファイルを開きます。通常はダウンロードフォルダにあります。

:::info
**重要：** 画像のようにフィルターを「**すべてのファイル**」に設定してください。システムが作成した.priファイルは通常のフィルターでは見えません。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

読み込んだら、コメントやパスワードを設定できます。パスワードを設定する場合は、「**キーのパスフレーズ**」と「**パスフレーズの確認**」に同じパスワードを入力してください。  
*注意:* 空欄のままパスワードなしでキーを作成することもできますが、セキュリティが少し落ちるのでおすすめしません。  
設定が完了したら、「**プライベートキーを保存**」ボタンでPuTTY対応のキーを保存しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

.ppkファイルに名前を付けて保存し、後で見つけやすくしてください。


## SSHキーでの接続

キーを接続に使うには、まずPuTTYにキーを紐付ける必要があります。  
「**SSH**」→「**認証**」→「**参照...**」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

先ほどPuTTYGenで作成したキーを選択し、「**開く**」を押します。

毎回設定を繰り返さなくて済むように、セッションに保存するのがおすすめです。  
「**セッション**」→「**デフォルト設定**」→「**保存**」をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

これでPuTTYでサーバーにログインできます。PuTTYGenで入力した「**キーコメント**」も表示されます。

## パスワードログインの無効化

SSHキーはセキュリティ向上のために作られました。パスワードでのログインがまだ可能だと、サーバーの安全性は変わっていません。  
そのため、SSHのパスワードログインを無効化する必要があります。Linux VPSとLinux Rootサーバーで無効化方法が異なります。  
正しく無効化されると、作成したSSHキーを持つユーザーだけが接続可能になります。

### Linux VPS

アクセス＆セキュリティタブで簡単にパスワードログインを無効化できます。  
「**パスワードログインを無効化**」ボタンを「SSHキーを生成」ボタンの隣に押してください。  
無効化されると、パスワードログインでのサーバー接続はできなくなります。

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

「**パスワードによるSSHログイン**」の表示も「**無効**」に切り替わります。