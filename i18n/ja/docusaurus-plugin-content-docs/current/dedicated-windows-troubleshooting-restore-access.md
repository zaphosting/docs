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

こんなことってすぐに起こります… Windowsサーバーにログインしようとしたら、パスワードが受け付けられなくなったり、単純に忘れてしまったり。突然ロックアウトされて、大事なデータやアプリにアクセスできなくなります。もちろんイライラしますが、これで終わりじゃありません。以下の手順に従えば、Windows専用サーバーへのアクセスを取り戻して、作業をほとんど止めずに続けられますよ。



## 準備
管理者アカウントのアクセスリセットはWindowsのISOファイルを使って行います。つまり、WindowsサーバーOSのインストール時に使ったのと同じISOファイルを使います。

このステップは、[**初回インストール**](dedicated-setup.md)または**[ISO](dedicated-iso.md)**から実施可能です。使った方法に応じて、元々使ったISOファイルを選択または指定してください。

ISOをマウントして、システムを再起動します。次回起動時にWindowsのインストール画面が表示されるはずです。こんな感じになります：

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## アクセス復旧

ここから管理者アカウントのアクセスリセットを行います。セットアップの最初のステップをもう一度進めますが、インストール開始まで進んだら、**コンピューターの修復**を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



詳細オプションが開きます。**トラブルシューティング**をクリックし、次に**コマンドプロンプト**を選択。これでコマンドプロンプト（cmd.exe）が開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

以下のコマンドをコマンドプロンプトで1つずつ実行してください：

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

iLOのHTMLコンソールのキーボードレイアウトはあなたの環境と異なる場合があり、記号の位置が違うことがあります。コマンド実行時は注意してください。

:::

サーバーが再起動したら、ログイン画面で**Win+U**キーを押してください。コマンドプロンプトが開くので、以下を入力します：

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

この手順を終えれば、管理者ユーザーの新しいパスワード設定が完了しています。これでリモートデスクトップ接続から再ログイン可能です。もし質問やサポートが必要なら、いつでもお気軽にサポートチームにご連絡くださいね！🙂