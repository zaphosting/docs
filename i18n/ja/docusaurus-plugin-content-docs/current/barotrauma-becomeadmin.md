---
id: barotrauma-becomeadmin
title: "Barotrauma: 自分のサーバーで管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、ゲーム内でスムーズに管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されているすべてのオプションや機能を直接使うことができます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 設定方法
管理者の追加は、インターフェースの「Configs」内にある**Clientpermissions.xml**設定ファイルを使って行います。

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


新しいプレイヤーを追加するには、設定ファイルに新しいクライアントエントリを追加する必要があります。構文は以下の通りです：

```xml
<Client
    name="<player name>"
    steamid="<steamid>"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



クライアントエントリには、**Name, SteamID, Permissions, Command** の変数が含まれています。これらを編集します。nameは任意で設定可能で、一覧表示用のプレースホルダーとして使われます。次に、あなたのSteamアカウントのSteamID64を指定します。

SteamID64は、Steamプロフィールを開き、プロフィールのどこかで右クリックしてプロフィールのSteam URLをコピーすることで取得できます。



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



コピーしたURLを以下のいずれかのサイトに入力してください：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



これでアカウントの一般情報とSteam IDが表示されます。ここで必要なのは**Steam ID 64**です。このSteam IDをクライアントエントリの**SteamID**に追加します。結果は以下のようになります：

```xml
<Client
    name="Name"
    steamid="123456789"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



これで管理者にはなりましたが、まだ具体的な権限は付与されていません。権限や使用可能なコマンドを追加することで設定します。例えば以下のように設定できます：

```xml
...
    permissions="<permission(s)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Name"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



この例では、管理者にサーバーログ、コンソールコマンド、healコマンド、spawnコマンドのアクセス権が付与されています。以下に設定可能な権限の一覧を示します。



## 権限一覧

| 権限名             | 説明                                                         |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | ラウンドの開始/終了が可能。                                  |
| Kick              | 他のプレイヤーをキックできる。                              |
| Ban               | 他のプレイヤーをBANできる。                                 |
| Unban             | 他のプレイヤーのBANを解除できる。                           |
| SelectSub         | 潜水艦を選択できる。                                        |
| SelectMode        | ゲームモードを選択できる。                                  |
| ManageCampaign    | キャンペーンの目的地やミッションを選択し、キャンペーンストアで物資を購入できる。 |
| ConsoleCommands   | コンソールコマンドを使用できる。ただし、個別のコンソールコマンドにも権限を与える必要がある。 |
| ServerLog         | サーバーログを閲覧できる。                                  |
| ManageSettings    | サーバー設定を変更できる。                                  |
| ManagePermissions | 他のクライアントの権限を変更できる。                        |
| KarmaImmunity     | カルマシステムのマイナス効果を免除され、カルマを失わない。  |
| All               | すべての権限を付与。                                        |



## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />