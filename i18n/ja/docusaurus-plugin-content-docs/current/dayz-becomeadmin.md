---
id: dayz-becomeadmin
title: "DayZ: 管理者になる方法"
description: "管理者権限を割り当ててゲームオプションを効果的に管理し、サーバーを完全にコントロールする方法を発見しよう → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、ゲームサーバーを簡単かつ包括的にフルコントロールで管理できます。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接適用することが可能です。以下では、ゲームサーバーに管理者権限を割り当てるために必要なすべての手順を説明します。  
<InlineVoucher />

## 設定方法

管理者権限の設定はサーバーの設定ファイルを通じて行います。ゲームサーバー管理の**Configs**からサーバーの設定ファイルにアクセスできます。そこには利用可能な設定ファイルの一覧が表示されます。青いボタンをクリックして**server.DZ.cfg**を開きましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

設定ファイル内に**passwordAdmin**という項目があるはずです。ここにアクセス用の希望パスワードを設定してください。希望のパスワードを入力し、下の**保存**ボタンをクリックします。

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

変更を適用するにはサーバーの再起動が必要です。再起動後、サーバーに接続してゲーム内チャットを開き、以下のコマンドを実行して管理者としてログインしてください：

```
#login password
```

## よく使うコマンド

以下は管理者権限で使える代表的なコマンド一覧です：

| コマンド                                     | 説明                                                        |
| :------------------------------------------ | :----------------------------------------------------------- |
| #login adminpassword                        | サーバーの管理者としてログインします。                      |
| #logout                                     | 管理者ログアウトします。                                     |
| #mission filename Difficulty                | 指定したミッション名でミッションを選択し、難易度を設定します。難易度パラメータは任意で、設定しない場合は現在の難易度が維持されます。 |
| #missions                                   | ミッションを選択します。                                    |
| ##restart                                   | ミッションを再起動します。                                  |
| #reassign                                   | すべてをリセットして役割を再割り当てします。                |
| #shutdown                                   | サーバーをシャットダウンします。                            |
| #restartserver                              | サーバーを再起動します。                                    |
| #shutdownserveraftermission                 | ミッション終了後にサーバーをシャットダウンします。          |
| #restartserveraftermission                  | ミッション終了後にサーバーを再起動します。                  |
| #init                                       | -configオプションで読み込まれたサーバー設定ファイルをリロードします。 |
| #exec ban Name#exec ban ID#exec ban #Player | プレイヤーをBANします。                                      |
| #kick Name#kick ID#kick #Player             | プレイヤーをサーバーからキックします。                      |
| #monitor (interval in seconds)              | サーバーのパフォーマンス情報を表示します。intervalが0の場合は監視を停止します。 |
| #monitords (interval in seconds)            | サーバーコンソール上にパフォーマンス情報を表示します。intervalが0の場合は監視を停止します。 |
| #debug off                                  | デバッグを無効にします。                                    |
| #debug (interval in seconds)                | デフォルトの間隔は10秒です。                                |
| #debug (command) (param)                    | 利用可能なコマンドはJIPQueue、userQueue、checkFile、totalSent、userSent、userInfoです。各コマンドの後にoffを付けると無効化できます（例：#totalSent off）。出力はコマンドによってログファイルや画面など異なります。クライアント側でOutputDebugStringをキャッチできるデバッガーが必要です。 |
| #debug (command)                            | 管理者ログアウトします。                                    |
| #logout                                     | 利用可能なコマンドはconsole（サーバーコンソールの内容を送信）とvon（server.cfgで定義されたログファイルに出力、例：server_console.log）です。チャットチャンネルでコマンドの確認が表示されます。 |

## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />