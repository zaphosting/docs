---
id: mta-becomeadmin
title: "Multi Theft Auto: MTAサーバーで管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、効率的にゲーム管理を行う方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

### 準備

まず、後で管理者権限を付与するユーザーアカウントを作成する必要があります。これには、ライブコンソールで以下のコマンドを実行します：

```
addaccount [options] <PASSWORD>
```

ライブコンソールは、ゲームサーバーのダッシュボード内のインターフェースで、サーバーが稼働中にアクセスできます。見た目はこんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)

### 設定

アカウントを作成したら、そのアカウントを**acl.xml**設定ファイルのAdminグループに追加する必要があります。FTPでサーバーに接続し、ファイルを開きます。ファイルの場所は**gXXXX/gtamta/mods/deathmatch/**です。FTPクライアントが何か、使い方がわからない場合は、こちらのガイドをチェックしてください：[FTPファイルアクセス](gameserver-ftpaccess.md)

```xml
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

ここにユーザーオブジェクトを追加して、ユーザーをAdminグループに割り当てます：

```xml
<object name="user.BENUTZERNAME"></object>
```

「BENUTZERNAME」の部分には自分のユーザー名を入力してください。最終的にはこんな感じになります：

```xml
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```

### 管理者としてログイン

**acl.xml**の設定が完了したら、ゲーム／サーバーを起動してサーバーに接続します。その後、以下のコマンドでログインできます：

```
login USERNAME PASSWORD
```

## まとめ

おめでとうございます！管理者権限の設定が無事に完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />