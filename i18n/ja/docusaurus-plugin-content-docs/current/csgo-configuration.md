---
id: csgo-configuration
title: "CSGO: サーバー設定"
description: "Counter-Strikeのゲームモードや設定ごとにゲームプレイ体験を最適化するためのサーバー設定方法をチェック → 今すぐ詳しく見る"
sidebar_label: サーバー設定
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
このドキュメントはアーカイブされています。内容が古くなったり、正確でなくなった場合にアーカイブされます。アーカイブ理由は以下の通りです：

理由：CS:GOは現在アクティブに提供されておらず、開発も終了しています。CS2がCS:GOの後継です。CS2への移行をおすすめします。
::::



## はじめに

Counter-Strikeのゲームサーバーは幅広く設定可能です。基本設定は**Server.cfg**ファイルやウェブインターフェースの設定ページから行えます。高度な設定は、gamemode_competitive.cfg、gamemode_custom.cfg、gamemode_casual.cfg、gamemode_cooperative.cfg、gamemode_demolition.cfgなどのゲームモード設定ファイルで行います。

設定画面では使用したいゲームモードを選択できます。選択したモードのコマンドが読み込まれます。これらの設定はゲームサーバー管理画面から、またはFTPで**gXXXXXX/csgo/csgo/cfg/**にアクセスして手動で管理可能です。


<InlineVoucher />

## 設定方法


### インターフェースからの設定（設定画面）

設定ページでは、GSLトークン、ゲームタイプ／ゲームモード、マップグループ、ティックレートなどの基本設定を調整できます。  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**GSLトークン**

Gameserver Login Tokens（GSLT）はSteamが導入した保護措置です。特定のSteamゲーム（主にSourceエンジンのゲーム）のゲームサーバーを運用するにはトークンの生成が必要です。詳しくはこちら：

[GSL-Token](source-gsltoken.md)



**ゲームタイプ**

利用可能なゲームモードは以下の通りです：

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**マップグループ**

マップグループは通常、特定のカテゴリに対応したマップのグループです。デフォルトでは**mg_active, mg_armsrace, mg_demolition, mg_allclassic**があります。独自のマップグループも作成可能で、**Gamemodes_server.txt**に追加します。マップグループの構造はシンプルで以下のようになります：

```
{	 	 	 	 
 	"mg_meine_mapgroup"	 	 	 
 	{	 	 	 
 	 	"name"	"mg_meine_mapgroup"	 
 	 	"maps"	 	 
 	 	{	 	 
 	 	 	"de_map1"	""
 	 	 	"de_map2"	""
 	 	 	"de_map3"	""
 	 	 	"de_map4"	""
 	 	}	 	 
 	}	 	 	 
}
```



**ティックレート**

ティックレートはサーバーがプレイヤーの位置情報を他プレイヤーに送信する頻度を決めます。値が高いほどゲーム体験が向上します。設定可能な値は33、64、100、128（最高値）です。 



**スタートマップ**

スタートマップはサーバー起動時に読み込むマップを指定します。マップ名は完全かつ正確に記述してください。拡張子は不要です。 



**Pingboost**

Pingboostはゲームの感覚を変えるために様々な方法でPingを可能な限り低くする仕組みです。



### server.cfgによる設定

**server.cfg**ではサーバー名、rconパスワード、サーバーパスワードなどの設定を変更できます。 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

ホスト名はサーバーの名前を定義します。サーバーリストやスコアボードに表示されます。



**rcon_password**

rcon_passwordはゲーム内やHLSWなどのRconツールでサーバーコマンドを実行するために必要です。以下のように使います：

```
rcon_password YourPassword
rcon command // 例：rcon changelevel de_dust2
```



**sv_password**

サーバーをプライベートにしたい場合や特定の人だけアクセスさせたい場合にサーバーパスワードを設定できます。接続時にパスワード入力が求められます。



**sv_cheats**

特定のコマンドは保護されており、チートを有効にしないと使えません。0（無効）か1（有効）で設定します。保護されたコマンド例：

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 など。



### ゲームモード別設定

冒頭で説明したように、設定画面で使用したいゲームモード／タイプを選択します。その後、対応する設定ファイルを編集して詳細設定を行います。ゲームモード設定ファイルではゲームプレイやボットの挙動などを細かく調整可能です。



#### ボットコマンド



**bot_chatter**
ボットがゲーム内で話す内容を設定します。off、radio、minimal、normalのいずれかに設定可能です。



**bot_difficulty**
ボットの難易度を設定します。設定可能な値は：

- 0 - 簡単
- 1 - 普通
- 2 - 難しい
- 3 - エキスパート



**bot_quota**
サーバーに配置できる最大ボット数を設定します。デフォルトは10です。



**bot_quota_mode**
ボット数を制御するモードを設定します。normal、fill、matchの3種類があります。normalは通常動作、fillはbot_quotaの数までボットを埋める、matchはプレイヤースロットを埋めます。例えばプレイヤーが3人接続し、bot_quotaが10の場合、matchモードでは7ボットが使用されます。




#### お金関連コマンド

**cash_player_bomb_defused**
爆弾解除時にプレイヤーが得るお金の額を設定します。サーバーの最大所持金を超えることはできません。



**cash_player_bomb_planted**
爆弾設置時にプレイヤーが得るお金の額を設定します。



**cash_player_damage_hostage**
人質にダメージを与えた際に減額または加算されるお金の額を設定します。デフォルトでは人質が傷つくたびに30ドルが減額されます。



**cash_player_interact_with_hostage**
人質とのインタラクションで得るまたは失うお金の額を設定します。



**cash_player_killed_enemy_default**
デフォルト武器で敵を倒した際に得るまたは失うお金の額を設定します。



**cash_player_killed_enemy_factor**
主要武器（標準ピストル、AK/M4などのプライマリライフル）で敵を倒した際に得るお金の額を設定します。



**cash_player_killed_hostage**
人質を倒した際に得るまたは失うお金の額を設定します。



**cash_player_killed_teammate**
味方を倒した際に得るまたは失うお金の額を設定します。



**cash_player_rescued_hostage**
人質モードで人質を安全に救出した際に得るまたは失うお金の額を設定します。



**cash_team_elimination_bomb_map**
MirageやDust IIのような爆弾解除マップで敵5人全員を倒した場合、チームメンバー全員が得るお金の額を設定します。



**cash_team_elimination_hostage_map_t**
人質マップでテロリスト側が全員倒してラウンドに勝利した際に得るお金の額を設定します。



**cash_team_elimination_hostage_map_ct**
人質マップでカウンターテロリスト側が全員倒した際にチームメンバー全員が得るお金の額を設定します。



**cash_team_hostage_alive**
人質がラウンドを生き残った場合に得るまたは失うお金の額を設定します。



**cash_team_hostage_interaction**
人質とインタラクトしたプレイヤーが得るまたは失うお金の額を設定します。



**cash_team_loser_bonus**
ラウンドに負けたチームが最初に得るお金の額を設定します。これは別のコマンドで段階的に増加します。



**cash_team_loser_bonus_consecutive_rounds**
連続して負けたラウンドごとに増加するお金の額を設定します。デフォルトは500ドルで、最大5連敗まで適用されます。



**cash_team_planted_bomb_but_defused**
爆弾を設置したが解除された場合にテロリストチームが得るお金の額を設定します。これはラウンド負けボーナスと重複します。デフォルトは800ドルです。



**cash_team_rescued_hostage**
人質を救出したプレイヤー1人あたり、チーム全体が得るお金の額を設定します。



**cash_team_terrorist_win_bomb**
爆弾爆発でテロリストチームがラウンドに勝利した際に各プレイヤーが得るお金の額を設定します。



**cash_team_win_by_defusing_bomb**
爆弾解除でカウンターテロリストチームがラウンドに勝利した際に得るお金の額を設定します。



**cash_team_win_by_hostage_rescue**
人質救出でラウンドに勝利した際にチームメンバーが得るお金の額を設定します。



**cash_team_win_by_time_running_out_hostage**
制限時間内に人質が救出されずにラウンドに勝利した場合、守るチームが得るお金の額を設定します。



**cash_team_win_by_time_running_out_bomb**
制限時間内に爆弾設置や敵全滅が達成されず、カウンターテロリストが勝利した場合に得るお金の額を設定します。



#### ゲームプレイコマンド



**mp_afterroundmoney**
ラウンド終了時に勝敗に関係なく各プレイヤーに支払われるお金の額を設定します。デフォルトは0（勝敗ボーナスは別コマンドで設定）。



**mp_buytime**
ラウンド開始後、装備購入が可能な時間（秒）を設定します。



**mp_buy_anywhere**
購入ゾーン外でも購入メニューを開けるかどうかを設定します。購入時間は適用されます。



**mp_death_drop_defuser**
死亡時に解除キットを落とすかどうかを設定します。



**mp_death_drop_grenade**
死亡時に落とす手榴弾の種類を設定します：

- 0 - 手榴弾を落とさない
- 1 - 最も価値の高い手榴弾を落とす



**mp_death_drop_gun**
死亡時に落とす武器を設定します。デフォルトは1（最も良い武器）。選択肢：

- 0 - 武器を落とさない
- 1 - 最も良い武器を落とす
- 2 - 死亡時に手に持っている武器を落とす。なければ最も価値の高い武器を落とす



**mp_defuser_allocation**
ラウンド開始時に解除キットを無料配布するか、誰に配布するかを設定します：

- 1 - 無料配布なし
- 2 - ランダムなプレイヤーに配布
- 3 - 全プレイヤーに配布



**mp_force_pick_time** 

プレイヤーがチームを選択するまでの秒数を設定します。時間切れで自動的にチームが割り当てられます。デフォルトは15秒。



**mp_forcecamera**

観戦時の視点範囲を設定します：

- 0 - 死亡プレイヤーは全プレイヤーを観戦可能
- 1 - 死亡プレイヤーは味方のみ観戦可能
- 2 - 次ラウンドまで画面が黒くなる



**mp_free_armor**

ラウンド開始時に無料でアーマーとヘルメットを付与するか設定します：

- 0 - 無効
- 1 - 有効



**mp_freezetime**

ラウンド開始時にプレイヤーが動けない時間（秒）を設定します。装備購入や戦術相談のための時間です。デフォルトは15秒。



**mp_friendlyfire**

味方への攻撃（フレンドリーファイア）を有効／無効にします。競技モードでは有効、カジュアルでは無効がデフォルトです。



**mp_win_panel_display_time**

ラウンド間にスコアボードを表示する時間（秒）を設定します。デフォルトは3秒。



**mp_respawn_immunitytime**

リスポーン後の無敵時間（秒）を設定します。デスマッチモードで使用されます。



**mp_halftime**

ハーフタイムでチームを入れ替えるかどうかを設定します。デフォルトは1（入れ替えあり）。



**mp_maxmoney**

プレイヤーが所持できる最大金額を設定します。



**mp_maxrounds**

サーバーでプレイする最大ラウンド数を設定します。



**mp_roundtime**

ラウンドの最大時間（分）を設定します。時間切れでラウンドが終了し、カウンターテロリストの勝利となります。秒数は小数点で指定可能（例：1.92 = 1分55秒）。



**mp_solid_teammates**

味方との衝突判定を設定します：

- 0 - 衝突なし
- 1 - 衝突あり



**mp_startmoney**

ハーフ開始時にプレイヤーが持つ初期金額を設定します。デフォルトは800ドル。



**mp_timelimit**

ゲームの最大時間（分）を設定します。デフォルトは無効（0）。



**mp_warmuptime**

ゲーム開始前のウォームアップ時間（秒）を設定します。



**sv_allow_votes**

投票（タイムアウト投票など）を許可するか設定します：

- 0 - 無効
- 1 - 有効



**sv_infinite_ammo**

無限弾薬を有効にするか設定します：

- 1 - リロード不要の無限弾薬
- 2 - マガジンはリロード必要だが無限マガジン数



**ammo_grenade_limit_flashbang**

プレイヤーが持てるフラッシュグレネードの最大数を設定します。



**ammo_grenade_limit_total**

プレイヤーが持てる手榴弾の合計数を設定します。





### eスポーツ対応設定（ESL設定）

eスポーツ用途でサーバーを使うなら、ESLが提供する設定ファイルをアップロードするのがおすすめです。公式サイトからダウンロード可能：[Download](https://play.eslgaming.com/download/26251762/)

設定ファイルは**cfg**ディレクトリにアップロードし、ゲーム内で以下のコマンドで実行します：

```
rcon_password YourPassword // rconでログインしてコマンド実行
rcon exec esl5on5
```

これでESLの設定が読み込まれ、ゲームを開始できます！

<InlineVoucher />