---
id: dedicated-linux-xrdp
title: "専用サーバー：xRDP（リモートデスクトップ）のインストール"
description: "UbuntuやDebianサーバーでリモートデスクトップアクセスを設定して、管理や操作をもっと簡単に → 今すぐチェック"
sidebar_label: xRDPのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Linuxでは通常、SSHコンソールでサーバーを管理しますが、場合によってはWindowsのようなリモートデスクトップ接続の方が簡単なこともあります。  
ほとんどのLinuxディストリビューションでインストール後の設定が可能です。このガイドではUbuntuとDebianでのやり方を解説します。

:::info
重要：OSは最低でもUbuntu 18.04.X LTS（Bionic Beaver）またはDebian 10（Buster）を使用してください。より新しいバージョンを推奨します。
:::

<InlineVoucher />

## xRDPのインストール

まずはサーバーをアップデートしましょう： 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

アップデート後、必要なパッケージをインストールします： 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

次にxRDPをインストールします： 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

インストール後、ステータスが「active」になっているか確認しましょう： 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

ステータスが問題なければ、ユーザーを作成し、xRDPサービスを再起動します： 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

設定が完了したら、rootまたは各ユーザーのアカウントでリモートデスクトップ接続が可能になります。  
デフォルトのポートは：3389

## 接続方法

接続は任意のRDPツールから、IP:PORTで行います。  
接続時にログイン情報の入力を求められます： 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

ログイン成功後、デスクトップ画面が表示されます。  
UbuntuとDebianで見た目が少し違います：

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)

<InlineVoucher />