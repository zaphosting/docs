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
もっと自由にシステムを選びたい？OSテンプレートに加えて、自分のISOをマウントすることももちろん可能です。VPSなら超簡単！これで本当に欲しいOSをサーバーにインストールできちゃいます。

<InlineVoucher />



## 利用可能なISOファイル

標準のOSテンプレートに加えて、追加のISOファイルをマウントするオプションもご用意しています。これにより、サーバー環境のセットアップや管理がさらに柔軟になります。現在、当社のVPS製品でサポートされているISOファイルは以下の通りです：

<SearchableItemList items={items} />





## カスタムISOのアップロード

デフォルトリストに目的のISOイメージがない場合は、パブリックなURLからカスタムISOをアップロードできます。URLはHTTPまたはHTTPSでアクセス可能で、認証や期限付きダウンロードリンクは使えません。

**カスタムISOを追加**欄にURLを入力し、**ISOをアップロード**をクリックすると、自動的にISOがインポートされ、サーバーインストール用に利用可能になります。

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

同時に保存できるカスタムISOは最大3つまで。アップロードしたISOは72時間のみ保持され、その後自動で削除されます。期間後もISOが必要な場合は再アップロードしてください。提供されたISOの内容、ライセンス、セキュリティはお客様の責任となります。









## ISOファイルのマウント
ISOをマウントするには、VPSの管理パネルで**設定 → ISO**を開きます。使いたいISOを選択し、起動順序を調整してからサーバーを再起動してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

再起動後はVNCクライアントでサーバーに接続し、OSのインストールと設定を開始できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning ISOマウント後のオンラインステータスやリモート接続について

ISOをマウントしただけではサーバーはまだセットアップされていません。そのため、パネルには**オンラインステータス**が表示されず、**RDP**や**SSH接続**も利用できません。OSのインストールと設定が完了して初めて利用可能になります。

:::




## まとめ
おめでとうございます！ISOファイルの選択とマウントが無事完了しました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂



<InlineVoucher />