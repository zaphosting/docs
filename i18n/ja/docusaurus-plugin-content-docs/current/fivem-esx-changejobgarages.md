---
id: fivem-esx-changejobgarages
title: "FiveM: ジョブガレージ - 車両の追加"
description: "ジョブガレージに車両をカスタマイズ・追加して、ゲームプレイをもっと楽しもう → 今すぐチェック"
sidebar_label: ジョブガレージ車両の追加
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ジョブガレージで使える車両を変更したり、追加したりしたい？ここではその方法と手順をわかりやすく解説するよ！

<InlineVoucher />



## 設定方法

ジョブガレージに車両を追加するにはFTPを使うよ。まずはゲームサーバーにFTPで接続しよう。FTPの使い方がわからない場合は、こちらの[FTPアクセス](gameserver-ftpaccess.md)ガイドをチェックしてね。

FTPで接続したら、ESXリソースフォルダに移動して、`esx_addons`フォルダを開こう。フォルダ構成はこんな感じ：`/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

次に、例えば Ambulance（救急）や Police（警察）のジョブを選んで、リソース内の`config.lua`設定ファイルを開いてみて。

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)



設定ファイル内の`Config.AuthorizedVehicles`セクションを編集する必要があるよ。検索機能で探して、自分の好きなように追加・変更してみてね：

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
新しい車両を追加するときは、前の行の最後にカンマを忘れずに！これがないと不具合が起きることがあるから注意してね。
:::



## まとめ

ここまでの手順をしっかりやれば、ジョブガレージの車両をカスタマイズ・拡張できてるはず！もしわからないことや困ったことがあったら、いつでもサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />