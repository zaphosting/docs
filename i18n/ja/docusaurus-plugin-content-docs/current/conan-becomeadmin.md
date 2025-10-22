---
id: conan-becomeadmin
title: "Conan Exiles：自分のサーバーで管理者になる方法"
description: "管理者権限の割り当てでサーバーを完全にコントロールし、ゲーム機能を効果的に管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 設定方法
自分自身や他のプレイヤーに管理者権限を割り当てるには、まずサーバー管理者パスワードを設定する必要があります。このパスワードは、サーバーの**設定**内で定義します。設定はコントロールパネルのインターフェースからアクセス可能です。


![](https://screensaver01.zap-hosting.com/index.php/s/gpHQXB9tk46RpLL/preview)

**設定**ページ内で「Admin Password」を探し、お好きなパスワードに変更してください。


![](https://screensaver01.zap-hosting.com/index.php/s/bKWx4qCj3aj6agA/preview)



パスワードを設定したら、変更を保存しサーバーを一度再起動してください。その後、サーバーに接続し、ESCキーを押してサーバー設定を開きます。そこで管理者パスワードを入力して管理者権限を取得できます。



![](https://screensaver01.zap-hosting.com/index.php/s/giLP794irsw8bjK/preview)



これで管理者としてすべてのサーバーコマンドを実行可能です。以下に、よく使われるコマンドの一覧を紹介します。





## よく使われるコマンド

| コマンド                                                | 説明                                                  |
| ------------------------------------------------------ | ----------------------------------------------------- |
| MakeMeAdmin [AdminPassword]                            | 管理者モードを有効化                                  |
| MakeMeNormal                                           | 管理者モードを無効化                                  |
| LearnEmote [emote]                                     | チャットで /emote [emote] と入力、またはRを長押しでエモートメニュー表示（管理者モード必須） |
| God                                                    | ゴッドモードの有効化/無効化                           |
| PlayerCanBuildEverywhere [PlayerName]                  | 指定プレイヤーが建築禁止エリアでも建築可能にする      |
| Teleport                                               | 地面や空中へのテレポート                              |
| TeleportPlayer X[float] Y[float] Z[float]              | 指定座標へ自分または他プレイヤーをテレポート          |
| TeleportToPlayer [PlayerName]                          | 指定プレイヤーの元へテレポート                        |
| Fly                                                    | 飛行モードを有効化                                   |
| Ghost                                                  | ゴーストモード（透明・ノークリップ）を有効化          |
| SetServerSetting serverSetting[FString] Value[FString] | ゲーム中にServerSettings.iniのサーバー設定を変更可能  |

ゲームに関連するさらに多くの管理者コマンドは、[Conan ExilesのGamepedia](https://conanexiles.gamepedia.com/Admin_Panel)で確認できます。 


## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />