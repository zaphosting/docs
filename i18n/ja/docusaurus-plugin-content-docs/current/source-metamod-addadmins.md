---
id: source-metamod-addadmins
title: サーバー管理者になる方法
description: "Steam IDを取得してサーバー管理の権限を設定し、管理者になる方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 管理者になる方法

管理者登録をするには、Source- / Metamodのインストールが必須です。

さらに、あなたのSteamアカウントのSteam IDが必要になります。取得方法はいくつかあります。外部のウェブサイトを使うか、ゲーム内コンソールを使う方法です。

<InlineVoucher />

### ウェブサイトでSteamIDを取得する

まずSteamでプロフィールを開き、プロフィールのどこかで右クリックします。そこでプロフィールのSteam URLをコピーできます。

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

その後、以下のいずれかのサイトでURLを入力します：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

すると、一般的なアカウント情報に加えてSteam IDが表示されます。ここで必要なのは**Steam ID 32**です：

```
steamID32: STEAM_0:1:XXXXXX
```

### ゲームコンソールでSteamIDを取得する

ゲームを起動してサーバーに接続します。ゲームコンソールを開いて`status`コマンドを入力すると、以下のような出力が得られます：

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### 設定方法

次にFTPでサーバーに接続し、`admins.cfg`という設定ファイルを開きます。場所は以下のディレクトリです：addons/sourcemod/configs

ファイルには管理者エントリーの例がすでにあります。これをコピーして以下のように編集してください：

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

**Player name**はSteamアカウントの名前と**一致する必要はありません**。これは設定内での管理用の名前です。`auth`は認証方法で、ここではSteamに固定されているので変更不要です。`identity`にはSteamアカウントのSteamID32を入力します。`flags`は権限を表します。権限レベルはいくつかあります。

| 権限 | フラグ | 内容 |
| ------------|:----:|:--------:|
| 予約 | a || スロット予約 |
| 基本 | b | 基本操作（必須） |
| キック | c || プレイヤーをキック |
| バン | d || プレイヤーをBAN |
| バン解除 | e || プレイヤーのBAN解除 |
| キル | f || プレイヤーを倒す・キル |
| マップ変更 | g | マップ切り替え |
| cvar変更 | h | サーバー設定値の変更 |
| config実行 | i | サーバー設定の実行 |
| チャット | j | 高度なチャット権限 |
| 投票 | k | 管理者投票 |
| パスワード設定 | l || サーバーパスワード設定 |
| rcon | m | RCONコマンド実行 |
| チート | n | ゲーム内のsv_cheats有効化 |
| フル権限 | z | フルアクセス |

付与したい権限に応じて、フラグを連続して書きます。例えばキック権限だけなら`b`と`c`を指定します。フルアクセスなら`z`だけでOKです。

### 管理者メニューの使い方

チャットで`admin`コマンド、またはコンソールで`sm_admin`コマンドを入力するとメニューが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />