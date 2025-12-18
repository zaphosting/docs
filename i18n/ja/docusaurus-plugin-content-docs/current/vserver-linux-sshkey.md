---
id: vserver-linux-sshkey
title: "VPS: Linuxサーバー用SSHキーの生成と使い方"
description: "Linuxサーバーの接続セキュリティと管理を強化するためのSSHキーの安全な生成と管理方法をチェック → 今すぐ詳しく見る"
sidebar_label: SSHキー
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SSHキーを生成する

SSHパスワードによる従来の接続よりもはるかに安全な接続を実現するために、SSHキーの使用をおすすめします。Linuxサーバーのダッシュボードで「**アクセス＆セキュリティ**」タブを開いてください。

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

「**アクセス＆セキュリティ**」内の「**SSHキーを生成**」ボタンでキーを生成できます。  
ボタンを押すとポップアップが開き、ランダムに生成されたキーがPCに直接ダウンロードされます。  
キーをサーバーに追加するには「**キーを追加**」ボタンをクリックしてください。

:::info
Linux VPSの場合はキーが直接追加されます。Linux専用サーバーの場合は、変更を反映させるためにサーバーの再起動が必要です。
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

さらにキーが必要な場合は、同じウィンドウの「**キーを生成**」ボタンを押してください。  
「**キー名**」でZAP-Hostingパネルに表示されるキーの名前を設定できます。管理しやすくなるのでおすすめです。

すべての必要なキーを生成・追加すると、「**アクセス＆セキュリティ**」に一覧表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

外部で生成した自分の公開鍵を使いたい場合は、「**＋**」アイコンをクリックして統合できます。

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

空のパネルが開くので、そこに自分の公開鍵を貼り付けてください。  
「**キーを追加**」を押すとサーバーに追加され、パネルに表示されます。

## OpenSSH形式のSSHキーをPuTTY用プライベートキーに変換（PuTTYGen使用）

当社パネルで作成されるSSHキーはOpenSSH形式です。PuTTYで使うにはPuTTYのプライベートキー形式に変換する必要があります。PuTTYに自動でインストールされる「**PuTTYGen**」ソフトを使いましょう。

PuTTYGenはPuTTYのルートディレクトリにあります。例の画像では「**C:>Program Files>PuTTY**」にPuTTYフォルダが表示されています。

PuTTYGenを起動し、「**ファイル**」→「**プライベートキーを読み込む**」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

ZAP-Hostingで生成したファイルを開きます。通常はダウンロードフォルダにあります。

:::info
**重要:** 画像のようにフィルターを「**すべてのファイル**」に設定してください。システムが作成した.priファイルは通常のフィルターでは見えません。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

読み込んだら、コメントやパスワードを設定できます。パスワードを設定する場合は「**Key passphrase**」と「**Confirm passphrase**」の両方に同じパスワードを入力してください。  
*注意:* 空欄のままパスワードなしで作成も可能ですが、セキュリティが少し落ちるのでおすすめしません。  
設定が終わったら「**Save private key**」ボタンでPuTTY対応のキーを保存します。

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

.ppkファイルに名前を付けて保存し、後で見つけやすくしてください。

## SSHキー接続設定

キーを接続に使うには、まずPuTTYにキーを紐付ける必要があります。  
「**SSH**」→「**Auth**」→「**Browse...**」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

先ほどPuTTYGenで作成したキーを選択し、「**Open**」を押します。

毎回設定を繰り返さなくて済むように、セッションに保存するのがおすすめです。  
「**Session**」→「**Default Settings**」→「**Save**」をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

これでPuTTYでサーバーにログインできます。PuTTYGenで入力した「**キーコメント**」も表示されます。

## パスワードログインを無効化する

SSHキーはセキュリティ向上のために作られました。パスワードログインがまだ有効だとサーバーの安全性は変わりません。  
そのため、パスワードによるSSHログインを無効化しましょう。Linux VPSとLinux専用サーバーで無効化方法が異なります。  
正しく無効化されると、作成したSSHキーを持つユーザーだけが接続可能になります。

### Linux VPS

アクセス＆セキュリティタブで簡単にパスワードログインを無効化できます。  
「**SSHキーを生成**」ボタンの隣にある「**パスワードログインを無効化**」ボタンを押してください。  
無効化されると、パスワードログインでの接続はできなくなります。

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

「**パスワードによるSSHログイン**」の表示も「**無効**」に変わります。

## まとめ

おめでとうございます！SSHキーのインストールと設定が無事完了しました！  
もし質問や問題があれば、毎日対応しているサポートチームまで気軽にお問い合わせください！

<InlineVoucher />