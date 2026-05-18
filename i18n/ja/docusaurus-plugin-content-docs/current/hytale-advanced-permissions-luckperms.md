---
id: hytale-advanced-permissions-luckperms
title: "Hytale: LuckPermsで高度な権限管理"
description: "HytaleサーバーでLuckPermsをインストール＆設定して、高度な権限やランクを管理する方法を解説 → 今すぐチェック"
sidebar_label: 高度な権限管理
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Hytaleサーバーでスタッフ役割やカスタムランク、特別なプレイヤー特典を扱い始めると、権限管理がどんどん重要になります。デフォルトのゲーム内権限システムは基本的な管理には十分ですが、コマンドや機能を細かく制御したい場合はすぐに限界が来ます。

**LuckPerms** はHytaleサーバー向けの強力でカスタマイズ性の高い権限管理システムです。プレイヤーやグループごとにどの権限やコマンドを使えるかを正確に設定できます。

<InlineVoucher />



## LuckPermsのインストール

LuckPermsのmodをインストールするには、まず最新のLuckPermsの`.jar`ファイルをダウンロードしてください。  
ダウンロード後、サーバーの管理パネルを開き、サーバーを停止してからmodを安全にアップロードします。

サーバーの**ファイル**セクションに移動し、`mods`フォルダを開きます。そこにLuckPermsの`.jar`ファイルをアップロードしてください。modのインストール方法の詳細は、[Install Mods](hytale-mods)ガイドを参考にするとわかりやすいです。

アップロードが完了したら、サーバーを再起動します。起動後、サーバーコンソールを開いてLuckPermsが正常に動作しているか確認しましょう。正常にインストールされていれば、コンソールに起動メッセージが表示されます。



## 初期権限の付与

インストール後、LuckPermsを効果的に使うには設定が必要です。まずは自分にLuckPermsコマンドを使う権限を付与しましょう。コンソールかゲーム内チャットで以下のコマンドを実行します：

```
lp user <playername> permission set luckperms.* true
```

これで指定したプレイヤーにLuckPermsの全コマンドへのフルアクセス権限が付与されます。



## LuckPermsのウェブエディターの使い方

LuckPermsにはグループ作成や権限管理を便利に行えるウェブエディターが付属しています。エディターセッションを生成するには、以下を入力します：

```
lp editor
```

コンソールに生成されたエディターリンクが表示されるので、ブラウザで開いてください。

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

エディター内で表示される**コマンドリンク**をコピーし、サーバーコンソールに戻ってペーストして実行します。これでエディターセッションとサーバーの信頼関係が確立されます。

```
/lp trusteditor XXXX-XXXX
```

エディターが接続されると、ウェブインターフェース上でユーザー、グループ、権限を直接設定可能です。変更後は**Apply**をクリックして保存します。LuckPermsが適用用コマンドを表示したら、それをコピーしてサーバーコンソールに貼り付けて変更を確定しましょう。



## 管理者グループの作成

ブラウザでエディターリンクを開き、**Groups**セクションに移動します。プラスアイコンで新しいグループを作成し、グループ名を`admin`に設定します。表示名、重み（weight）、親グループ、接頭辞/接尾辞などの詳細も任意で設定可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

グループ作成後、`admin`グループを選択して権限を追加します。Hytaleの全権限を付与するには以下を入力：

```
hytale.*
```

この権限でHytaleのすべての権限にフルアクセスできます。権限を追加したら、プレイヤーをグループに割り当てます。エディターの**Users**セクションで対象ユーザーを選び、**Parent groups**に`admin`を追加してください。

最後に**Apply**をクリックして変更を保存します。適用コマンドが表示されたらサーバーコンソールに貼り付けて確定しましょう。



## よく使うLuckPermsコマンド

LuckPermsはウェブエディターかコマンドで管理できます。よく使うコマンドは以下の通りです：

| コマンド                                                      | 説明                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | プレイヤーをグループに追加します。                          |
| `/lp user <playername> parent remove <group>`                | プレイヤーをグループから削除します。                        |
| `/lp user <playername> permission set <permission>`          | プレイヤーに権限を付与します。                              |
| `lp user <playername> permission settemp <permission> true <duration>` | 一定時間だけ権限を付与します。例：`1h`は1時間、`1m`は1分。 |
| `/lp user <playername> permission unset <permission>`        | プレイヤーから権限を剥奪します。                            |
| `/lp group <group> permission set <permission>`              | グループに権限を付与します。                                |
| `/lp group <group> permission unset <permission>`            | グループから権限を剥奪します。                              |



## まとめ

LuckPermsはHytaleサーバーで高度な権限管理を実現する強力なツールです。グループや権限、ウェブエディターを活用すれば、コミュニティの規模に合わせた役割システムを簡単に作れます。

設定後はスタッフランクやプレイヤー特典、アクセス制御をスムーズに管理でき、サーバー運営もクリーンで一貫性があり、パフォーマンスにも優しい状態を保てます。

何か質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ 🙂 

<InlineVoucher />