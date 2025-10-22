---
id: vserver-vnc
title: "VPS: VNC（Virtual Network Computing）コンソール"
description: "起動中やネットワークトラブル時でもリモートでサーバーにアクセス＆操作できる方法をチェック → 今すぐ詳しく見る"
sidebar_label: VNCコンソール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

VNC（Virtual Network Computing）は、リモートコンピューターの画面をローカルコンピューターに表示し、逆にローカルのキーボードやマウス操作をリモートに送信するソフトウェアです。これにより、サーバーが正常に起動していなくてもリモートからアクセス可能になります。

起動時やネットワークの問題があっても、システムにアクセスして対処できるのがポイントです。

<InlineVoucher />


## VNCの使い方
VNCのウェブクライアントはVPSのダッシュボード内にあります。管理画面のツールセクションにあるシリアルコンソールのオプションをクリックし、**Start VNC tunnel**ボタンでVNC接続を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/AgSL8QcynHSfXFA/preview)



するとVNCコンソールのウェブクライアントが開きます。ここではサーバーが現在表示している情報を確認できます。例えば起動プロセスやログイン画面、OSのGUIなどです。

以下の例はWindows VPSの画面です。このサーバーは正常に起動済みなので、VNCコンソールにはログイン画面が表示されています。サーバーにインターネット接続がなくてもここからログイン可能です。「Send CtrlAltDel」ボタンを押して、ユーザー名とパスワードでログインしてください。



![](https://screensaver01.zap-hosting.com/index.php/s/XTFS35AJBJaS86r/preview)

<InlineVoucher />