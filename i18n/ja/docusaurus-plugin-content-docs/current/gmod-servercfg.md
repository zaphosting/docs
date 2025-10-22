---
id: gmod-servercfg
title: "Garry's Mod: Server.cfg 設定"
description: "Garry's Mod ゲームサーバーの設定をカスタマイズして、ゲームプレイやスポーン制限を最適化 → 今すぐ詳しくチェック"
sidebar_label: Garry's Mod Server.cfg 編集
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Garry's Mod の server.cfg を設定しよう。

webインターフェースから直接 server.cfg を変更するには、まず「Configs」タブに移動します。

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

次に、内蔵の設定エディターで server.cfg を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

これで設定エディターに入ったので、好きな変数を自由に変更できます。ただし、Settingsタブの設定と server.cfg の設定を混ぜないように注意してください。hostname、rcon_password、sv_password に影響が出る可能性があります。

Garry's Mod ゲームサーバーをカスタマイズできる主な変数：

スポーン設定:
```
sbox_maxprops 150		// プレイヤーが持てる最大プロップ数を設定
sbox_maxragdolls 10		// プレイヤーが持てる最大ラグドール数を設定
sbox_maxballoons 10		// プレイヤーが持てる最大バルーン数を設定
sbox_maxeffects 10		// プレイヤーが持てる最大エフェクト数を設定（FPSに影響あり）
sbox_maxdynamite 10		// プレイヤーが持てる最大ダイナマイト数を設定
sbox_maxlamps 10		// プレイヤーが持てる最大ランプ数を設定
sbox_maxthrusters 10	// プレイヤーが持てる最大スラスター数を設定
sbox_maxwheels 10		// プレイヤーが持てる最大ホイール数を設定
sbox_maxnpcs 10			// プレイヤーが持てる最大NPC数を設定
sbox_maxhoverballs 10	// プレイヤーが持てる最大ホバーボール数を設定
sbox_maxvehicles 10		// プレイヤーが持てる最大ビークル数を設定
sbox_maxbuttons 10		// プレイヤーが持てる最大ボタン数を設定
```

ゲーム設定:
```
sbox_plpldamage 0 / 1	// 0 = PVPオフ, 1 = PVPオン
sbox_godmode	0 / 1	// 0 = オフ, 1 = オン（全プレイヤーのゴッドモード）
sbox_noclip		0 / 1	// 0 = ノークリップオフ, 1 = ノークリップオン
sv_noclipaccelerate 3	// ノークリップの移動速度を変更
sv_alltalk 1			// 有効にすると、サーバー内の全プレイヤーと話せる
```

ネットワーク関連設定（変更は推奨しません）
```
sv_minrate 0			// 最低接続速度
sv_maxrate 10000		// 最高接続速度
sv_minupdaterrate 10	// 最低ティックレート
sv_maxupdaterrate 66	// 最高ティックレート
net_maxfilesize	64		// FastDLなしで転送可能な最大ファイルサイズ
sv_lan 0				// オンラインゲームとして動作させる
sv_region 3				// 0+1 = 米国, 2 = 南アフリカ, 3 = ヨーロッパ, 4 = アジア, 5 = オーストラリア, 6 = 中東, 7 = アフリカ, 255 = 全世界
```

設定が完了したら、変更を保存するだけ。

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

サーバーを再起動すると、すべての変更が反映されます。

<InlineVoucher />