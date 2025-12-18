---
id: vserver-linux-xrdp
title: "VPS：xRDP（リモートデスクトップ）のインストール"
description: "UbuntuやDebianサーバーでリモートデスクトップアクセスを設定して、管理や操作をもっと簡単に → 今すぐチェック"
sidebar_label: xRDPをインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Linuxでは通常、サーバー管理にSSHコンソールがデフォルトで用意されています。でも、Windowsのようにリモートデスクトップ接続を使ったほうが楽な場合もありますよね。  
ほとんどのLinuxディストリビューションでインストール後に設定が可能です。このガイドではUbuntuとDebianでのやり方を解説します。  
<InlineVoucher />

:::info
重要：OSは最低でもUbuntu 18.04.X LTS（Bionic Beaver）またはDebian 10（Buster）を使ってください。より新しいバージョンを推奨します。  
:::

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
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

ステータスが問題なければ、ユーザーを作成してからxRDPサービスを再起動します： 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

設定が完了したら、リモートデスクトップでrootまたは各ユーザーのアカウントに接続できます。  
デフォルトのポートは：3389

## 接続方法

接続は任意のRDPツールから、IP:PORTで行います。  
接続時にログイン情報を求められます： 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

ログイン成功後、デスクトップが表示されます。  
UbuntuとDebianで見た目が少し違います：

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## まとめ

おめでとうございます、xRDPのインストールが無事完了しました！  
もし質問や問題があれば、いつでも対応可能なサポートチームにお気軽にお問い合わせくださいね！  

<InlineVoucher />