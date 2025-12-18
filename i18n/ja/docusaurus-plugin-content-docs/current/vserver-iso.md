---
id: vserver-iso
title: "VPS: ISOファイルのマウント"
description: "お好みのISOでVPSをカスタマイズして、サーバー環境を完全にコントロールする方法をチェック → 今すぐ詳しく見る"
sidebar_label: ISOファイルのマウント
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## はじめに
システム選びでさらに自由度を求めたい？OSテンプレートに加えて、自分だけのISOをマウントすることももちろん可能！VPSなら超簡単にできちゃいます。これで本当に使いたいOSをサーバーにインストールできるよ！

<InlineVoucher />



## 利用可能なISOファイル

当社の標準OSテンプレートに加えて、追加のISOファイルをマウントするオプションも用意しています。これにより、サーバー環境のセットアップや管理がさらに柔軟になります。現在、当社のVPS製品でサポートしているISOファイルは以下の通りです：

<SearchableItemList items={items} />

:::info ISOファイルが見つからない？
使いたいISOがリストにない？そんな時はサポートチームに気軽に連絡してね。追加できるかどうか確認してみるよ！
:::





## ISOファイルのマウント方法
ISOをマウントするには、VPSの管理パネルにアクセスして **設定 → ISO** を開いてください。使いたいISOファイルを選択し、起動順序を調整したらサーバーを再起動します。

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

再起動後はVNCクライアントでサーバーに接続し、OSのインストールと設定を開始できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning ISOマウント後のオンラインステータスやリモート接続について

ISOをマウントした直後はサーバーのセットアップが完了していません。そのため、パネルには**オンラインステータス**が表示されず、**RDP**や**SSH接続**も利用できません。OSのインストールと設定が完了して初めて利用可能になります。

:::




## まとめ
おめでとう！ISOファイルの選択とマウントが無事完了しました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂



<InlineVoucher />