---
id: rust-becomeadmin
title: "Rust: 自分のサーバーで管理者になる方法"
description: "管理者権限を割り当ててサーバーを完全にコントロールし、ゲームを効果的に管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されているすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## RCONを使って管理者になる方法

RCONを使うと、コマンドを直接実行して自分を管理者にできます。  
まずは、[RCON接続](rust-connectrcon.md)を行ってください。

接続が完了したら、コンソールコマンドを実行できる画面に移動します。ここでは例としてRustAdminを使用しています。

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

ここで以下のコマンドを実行します：  
`ownerid Steam64ID`

:::info
**Steam64ID** は実際のSteam64IDに置き換えてください。Steam64IDはこの[ツール](https://steamid.io/)で確認できます。
:::

これで直接管理者に設定されます。

:::info
ゲーム内にいる状態で実行した場合は、サーバーに再ログインしてください。
:::

これであなたは管理者です！ :)

## FTPを使って管理者になる方法

別の方法として、FTP経由で直接管理者権限を割り当てることもできます。  
まずは、[FTPアクセス](gameserver-ftpaccess.md)で接続してください。

接続に成功したら、以下のディレクトリに移動します：

`/g#####/rust/server/<your_server_save>/cfg`

このフォルダ内に**新しいファイル**を**作成**します。ファイル名は **users.cfg** にしてください。

このファイルに以下のフォーマットでエントリーを追加します：

`<role> <Steam64ID> <reason/user>`

:::info
**Steam64ID** は実際のSteam64IDに置き換えてください。Steam64IDはこの[ツール](https://steamid.io/)で確認できます。
:::

例は以下の通りです：

```
ownerid 76561198114248380 "ここに参考用のメモを書けます"
moderatorid 76561198114248380 "テスト用ユーザー"
```
:::info
設定を反映させるにはサーバーの再起動が必要です。
:::

## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。  
もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />