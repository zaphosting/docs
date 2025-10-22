---
id: dedicated-windows-troubleshooting-restore-access
title: "専用サーバー：アクセス復旧"
description: "パスワードロックアウト後にWindows専用サーバーへのアクセスを取り戻し、ダウンタイムを最小限に抑える方法 → 今すぐチェック"
sidebar_label: アクセス復旧
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

こんなことが起こるかも… Windowsサーバーにログインしようとしたら、パスワードが受け付けられない、または単純に忘れてしまった。突然ロックアウトされて、大事なデータやアプリにアクセスできなくなる。これはかなりイライラする状況ですが、決して終わりではありません。以下の手順に従えば、Windows専用サーバーへのアクセスを取り戻し、作業をほとんど中断せずに続けられます。

<InlineVoucher />

## 準備
管理者アカウントのアクセスをリセットするには、WindowsのISOファイルを使います。つまり、WindowsサーバーのOSインストール時に使ったのと同じISOファイルを使用します。

このステップは、[**初回インストール**](dedicated-setup.md) または **[ISO](dedicated-iso.md)** から実行可能です。使った方法に応じて、元々使ったISOファイルを選択または指定してください。

ISOをマウントしてからシステムを再起動します。次回起動時にWindowsのインストール画面が再び表示されるはずです。こんな感じになります：

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## アクセス復旧

ここから管理者アカウントのアクセスをリセットします。セットアップの最初のステップをもう一度進めますが、インストール開始まで進んだら、**コンピューターの修復**を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



すると詳細オプションが開きます。**トラブルシューティング**をクリックし、次に**コマンドプロンプト**を選択。これでコマンドプロンプト（cmd.exe）が開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

以下のコマンドを、コマンドプロンプトで1つずつ実行してください：

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

iLOのHTMLコンソールのキーボード配列はあなたの環境と異なる場合があり、特定の記号が違うキーに割り当てられていることがあります。コマンドを正しく実行するために注意してください。

:::

サーバーが再起動したら、ログイン画面で **Win+U** キーを押してください。コマンドプロンプトが開くので、以下を入力します：

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

これでパスワードが変更されました。ただし、**Utilmanファイル**の変更は元に戻す必要があります。サーバーを再起動して、再度以下のコマンドをコマンドプロンプトで実行してください：

```
d:
cd Windows
cd System32
del utilman.exe
ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## まとめ

この手順を終えれば、管理者ユーザーの新しいパスワードが設定されているはずです。これでリモートデスクトップ接続から再びログイン可能になります。

<InlineVoucher />