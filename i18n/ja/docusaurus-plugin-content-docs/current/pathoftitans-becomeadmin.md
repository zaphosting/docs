---
id: pathoftitans-becomeadmin
title: 管理者になる
description: "ゲームサーバーで完全なサーバー管理のために管理者権限を割り当てて管理する方法を発見 → 今すぐ詳しく学ぼう"
sidebar_label: 管理者になる
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限の割り当てにより、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で直接利用できるすべてのオプションや機能を使うことができます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 準備

管理者権限の設定は、サーバーの設定ファイルを通じて行います。ゲームサーバーのダッシュボードで **Configs** に移動し、Game.ini 設定ファイルを開いてください。

## 設定

[/Script/PathOfTitans.IGameSession] セクションの下に、管理者の Alderon Games ID（AGID）を入力します。記述は `ServerAdmins=` に続けてAGIDを記入します。複数の管理者を追加したい場合は、それぞれ新しい行に記述してください。例えば、3人のプレイヤーに管理者権限を割り当てる場合、設定は以下のようになります：

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. 管理者レコード
ServerAdmins=XXX-XXX-XXX # 2. 管理者レコード
ServerAdmins=XXX-XXX-XXX # 3. 管理者レコード
```

保存をクリックし、その後サーバーを再起動してください。これで管理者権限の設定は完了です。管理者権限を持つと、チャットコマンドを使って他のプレイヤーを管理者に任命したり、管理者権限を剥奪したりすることができます。これらの機能はサーバーが稼働している間利用可能です。コマンドの詳細は公式の [GitHub Wiki](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools) をご覧ください。

## まとめ

おめでとうございます、管理者権限の設定が無事に完了しました。ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応しています！🙂

<InlineVoucher />