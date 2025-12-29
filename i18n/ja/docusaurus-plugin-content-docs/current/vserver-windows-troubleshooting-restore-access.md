---
id: vserver-windows-troubleshooting-restore-access
title: "VPS: アクセス復旧"
description: "パスワードロックアウト後にWindows VPSへのアクセスを取り戻し、ダウンタイムを最小限に抑える方法 → 今すぐチェック"
sidebar_label: アクセス復旧
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

こんなことってすぐに起こります… Windowsサーバーにログインしようとしたら、パスワードが受け付けられなくなったり、単純に忘れてしまったり。突然ロックアウトされて、大事なデータやアプリにアクセスできなくなります。これは確かにイライラしますが、終わりではありません。以下の手順に従えば、Windows VPSへのアクセスを取り戻して、作業をほとんど止めずに続けられますよ。



## 準備
管理者アカウントのアクセスをリセットするには、WindowsのISOファイルを使います。つまり、WindowsサーバーのOSインストール時に使ったのと同じISOファイルを使う必要があります。

この作業は、[**初回インストール**](dedicated-setup.md)からでも、**[ISO](dedicated-iso.md)** からでも行えます。使った方法に応じて、元々使ったISOファイルを選択または指定してください。

ISOをマウントして、システムを再起動します。次回起動時にWindowsのインストール画面が再び表示されるはずです。こんな感じになります：

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## アクセス復旧

ここから管理者アカウントのアクセスリセットを行います。セットアップの最初のステップをもう一度進めますが、インストール開始まで進んだら、**コンピューターの修復**を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



詳細オプションが開きます。**トラブルシューティング**をクリックし、次に**コマンドプロンプト**を選択します。これでコマンドプロンプト（cmd.exe）が開きます。

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

サーバーが再起動したら、ログイン画面で **Win+U** キーを押してください。コマンドプロンプトのウィンドウが開くので、以下を入力します：

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

これでパスワードが変更されました。ただし、**Utilmanファイル**の変更は元に戻す必要があります。サーバーを再起動して、再度同じ手順を繰り返してください。コマンドプロンプトで以下を実行します：

```
d:
cd Windows
cd System32
del utilman.exe
ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## まとめ

この手順を終えれば、管理者ユーザーの新しいパスワードが設定できているはずです。これでリモートデスクトップ接続から再ログインできます。もし質問やサポートが必要なら、いつでもお気軽にサポートチームに連絡してくださいね！🙂