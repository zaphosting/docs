---
id: csgo-configuration
title: "CS:GO: サーバー設定"
description: "Counter-Strikeサーバーをゲームモード、マップグループ、GSLトークンで最適化する方法をチェック → 今すぐ詳しく学ぼう"
sidebar_label: サーバー設定
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Counter-Strikeのゲームサーバーは幅広く設定可能です。基本設定は**server.cfg**の設定ファイルやウェブインターフェースの設定ページから行えます。高度な設定は、gamemode_competitive.cfg、gamemode_custom.cfg、gamemode_casual.cfg、gamemode_cooperative.cfgなどのゲームモード設定ファイルで行います。

設定ページでは使用したいゲームモードを選択できます。選択した設定に応じてコマンドが読み込まれます。これらはゲームサーバー管理画面から、またはFTPで**gXXXXXX/CS:GO/game/csgo/cfg/**にアクセスして手動で管理可能です。

<InlineVoucher />

## 設定方法



### インターフェース（設定）からの設定

設定ページでは、GSLトークン、ゲームタイプ／ゲームモード、マップグループなどの基本設定を調整できます。

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**GSLトークン**

Gameserver Login Tokens（GSLT）はSteamが導入した保護機能です。特定のSteamゲーム（主にSourceゲーム）のゲームサーバーを運用するにはトークンの生成が必要です。詳しくはこちら：

[GSL-Token](source-gsltoken.md)



**ゲームタイプ**

利用可能なゲームモードは以下の通りです：

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**マップグループ**

マップグループは通常、特定のカテゴリに対応するマップのグループです。デフォルトでは**mg_active, mg_allclassic**があります。独自のマップグループを作成することも可能で、その場合は**gamemodes_server.txt**に追加する必要があります。マップグループの構造はシンプルで以下のようになります：

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



**スタートマップ**

スタートマップはサーバー起動時に読み込むマップを指定します。マップ名は完全かつ正確に記述する必要があり、拡張子は不要です。



**Pingboost**

Pingboostはゲームの感覚を変えるために様々な方法でPingを可能な限り低くする仕組みです。



### server.cfgによる設定

**server.cfg**ではサーバー名、rconパスワード、サーバーパスワードなどの設定を変更できます。

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

ホスト名はサーバーの名前を定義します。サーバーリストやスコアボードに表示されます。



**rcon_password**

rcon_passwordはゲーム内やHLSWなどのRconツールでサーバーコマンドを実行するために必要です。以下のように設定します：

```
rcon_password YourPassword
rcon command // 例: rcon changelevel de_dust2
```



**sv_password**

サーバーをプライベートにしたい場合や特定の人だけアクセスさせたい場合はサーバーパスワードを設定できます。接続時にパスワードの入力が求められます。



**sv_cheats**

特定のコマンドは保護されており、チートが有効な場合のみ使用可能です。0（無効）または1（有効）で設定します。保護されたコマンド例：

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 など。



### ゲームモード別設定

冒頭で説明したように、設定ページで使用したいゲームモード／ゲームタイプを選択します。その後、対応する設定ファイルを編集して詳細設定を行います。ゲームモード設定ファイルではゲームプレイやボットの挙動などを細かく調整可能です。



#### ボットコマンド



**bot_chatter**  
ボットがゲーム内で話す内容を設定します。off、radio、minimal、normalのいずれかに設定可能です。



**bot_difficulty**  
ボットの難易度を設定します。設定値は以下の通り：

- 0 - 簡単
- 1 - 普通
- 2 - 難しい
- 3 - エキスパート



**bot_quota**  
サーバーに配置できるボットの最大数を設定します。デフォルトは10です。



**bot_quota_mode**  
ボット数の制御モードを設定します。選択肢はnormal、fill、matchです。normalは通常動作、fillはbot_quotaで設定した数までボットを埋めます。matchはプレイヤースロットを埋めます。例えばプレイヤーが3人接続し、bot_quotaが10の場合、7体のボットが使用されます。




#### お金関連コマンド

**cash_player_bomb_defused**  
爆弾解除時にプレイヤーが得る金額を設定します。サーバーで得られる最大金額を超えることはできません。



**cash_player_bomb_planted**  
爆弾設置時にプレイヤーが得る金額を設定します。



**cash_player_damage_hostage**  
人質にダメージを与えた際に差し引かれるまたは得られる金額を設定します。デフォルトでは人質が傷つくたびに30ドルが差し引かれます。



**cash_player_interact_with_hostage**  
人質とのインタラクションで得られるまたは失う金額を設定します。



**cash_player_killed_enemy_default**  
デフォルト武器で敵を倒した際に得られるまたは失う金額を設定します。



**cash_player_killed_enemy_factor**  
主要武器（標準ピストル、AK/M4などのプライマリライフル）で敵を倒した際に得られる金額を設定します。



**cash_player_killed_hostage**  
人質を倒した際に得られるまたは失う金額を設定します。



**cash_player_killed_teammate**  
味方を倒した際に得られるまたは失う金額を設定します。



**cash_player_rescued_hostage**  
人質モードで人質を安全に救出した際に得られるまたは失う金額を設定します。



**cash_team_elimination_bomb_map**  
MirageやDust IIのような爆弾解除マップで敵5人全員を倒した場合、チームメンバー全員が得る金額を設定します。



**cash_team_elimination_hostage_map_t**  
人質マップでテロリストチームが全滅勝利した場合に得る金額を設定します。



**cash_team_elimination_hostage_map_ct**  
人質マップでカウンターテロリストチームが敵5人全員を倒した場合に得る金額を設定します。



**cash_team_hostage_alive**  
ラウンド終了時に人質が生存していた場合に得られるまたは失う金額を設定します。



**cash_team_hostage_interaction**  
人質とインタラクションしたプレイヤーが得るまたは失う金額を設定します。



**cash_team_loser_bonus**  
ラウンドに負けたチームが得る初期金額を設定します。この金額は別のコマンドで制御される固定ステップで増加します。



**cash_team_loser_bonus_consecutive_rounds**  
連続して負けたラウンドごとに増加する金額を設定します。デフォルトは500ドルで、最大5連敗まで適用されます。



**cash_team_planted_bomb_but_defused**  
爆弾が設置されて最終的に解除された場合、テロリストチームが得る金額を設定します。これはラウンド負けボーナスと**重複して加算**されます。デフォルトは800ドルです。



**cash_team_rescued_hostage**  
1人のプレイヤーが人質を救出した際に**チーム全体**が得る金額を設定します。



**cash_team_terrorist_win_bomb**  
爆弾爆発でテロリストチームがラウンドに勝利した際に各プレイヤーが得る金額を設定します。



**cash_team_win_by_defusing_bomb**  
爆弾解除でCTチームがラウンドに勝利した際に得る金額を設定します。



**cash_team_win_by_hostage_rescue**  
人質救出で勝利したチームメンバーが得る金額を設定します。



**cash_team_win_by_time_running_out_hostage**  
制限時間内に人質救出ができず、守る側のチームが勝利した場合に得る金額を設定します。



**cash_team_win_by_time_running_out_bomb**  
制限時間内に爆弾設置や敵全滅ができず、CTチームが勝利した場合に得る金額を設定します。



#### ゲームプレイコマンド



**mp_afterroundmoney**  
ラウンド終了時に勝敗に関係なく各プレイヤーに支払われる金額を設定します。デフォルトは0（勝敗ボーナスは別コマンドで設定）。



**mp_buytime**  
ラウンド開始後、プレイヤーが装備を購入できる時間（秒）を設定します。



**mp_buy_anywhere**  
バイゾーン外でも購入メニューを開けるかどうかを設定します。購入時間は引き続き適用されます。



**mp_death_drop_defuser**  
死亡時に解除キットを落とすかどうかを設定します。



**mp_death_drop_grenade**  
死亡時に落とすグレネードの種類を設定します：

- 0 - グレネードを落とさない
- 1 - 最も価値の高いグレネードを落とす



**mp_death_drop_gun**  
死亡時に落とす武器を設定します。デフォルトは1（最良の武器）です。選択肢：

- 0 - 武器を落とさない
- 1 - 最良の武器を落とす
- 2 - 死亡時に手に持っている武器を落とす。持っていなければ最も価値の高い武器を落とす



**mp_defuser_allocation**  
ラウンド開始時に解除キットを無料で配布するかどうか、また誰に配布するかを設定します：

- 1 - 無料配布なし
- 2 - ランダムなプレイヤーに配布
- 3 - 全プレイヤーに配布



**mp_force_pick_time**  

プレイヤーがチームを選択するまでの時間（秒）を設定します。時間切れになると自動でチームが割り当てられます。デフォルトは15秒。



**mp_forcecamera**

観戦者が誰を観戦できるかを設定します：

- 0 - 死亡プレイヤーは全プレイヤーを観戦可能
- 1 - 死亡プレイヤーは味方のみ観戦可能
- 2 - 次ラウンドまで画面がブラックアウト



**mp_free_armor**

ラウンド開始時にプレイヤーが無料でアーマーとヘルメットを受け取るか設定します：

- 0 - 無効
- 1 - 有効



**mp_freezetime**

ラウンド開始時にプレイヤーが動けない時間（秒）を設定します。この時間は装備購入や戦術の相談に使えます。デフォルトは15秒。



**mp_friendlyfire**

味方への攻撃が有効かどうかを設定します。競技モードでは有効、カジュアルモードでは無効がデフォルトです。



**mp_win_panel_display_time**

ラウンド間にスコアボードを表示する時間（秒）を設定します。デフォルトは3秒。



**mp_respawn_immunitytime**

リスポーン後の無敵時間（秒）を設定します。デスマッチモードで使用されます。



**mp_halftime**

ハーフタイムでチームを入れ替えるかどうかを設定します。デフォルトは1（入れ替えあり）。



**mp_maxmoney**

プレイヤーが所持できる最大金額を設定します。



**mp_maxrounds**

サーバーがプレイする最大ラウンド数を設定します。



**mp_roundtime**

ラウンドの最大時間（分）を設定します。時間切れでラウンドが終了した場合、カウンターテロリストの勝利となります。秒は小数点で指定可能（例：1.92 = 1分55秒）。



**mp_solid_teammates**

味方との衝突判定を設定します：

- 0 - 衝突なし
- 1 - 衝突あり



**mp_startmoney**

ハーフ開始時にプレイヤーが受け取る金額を設定します。デフォルトは800ドル。



**mp_timelimit**

ゲームの最大時間（分）を設定します。デフォルトは無効（0）。



**mp_warmuptime**

実際のゲーム開始前のウォームアップ時間（秒）を設定します。



**sv_allow_votes**

投票（例：タイムアウト投票）を許可するか設定します：

- 0 - 無効
- 1 - 有効



**sv_infinite_ammo**

無限弾薬を付与するか設定します：

- 1 - リロード不要の無限弾薬
- 2 - 弾倉は無限だが空になるとリロードが必要



**ammo_grenade_limit_flashbang**

プレイヤーが持てるフラッシュグレネードの最大数を設定します。



**ammo_grenade_limit_total**

プレイヤーが持てるグレネードの合計最大数を設定します。

<InlineVoucher />