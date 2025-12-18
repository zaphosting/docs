---
id: gmod-ttt
title: "Garry's Mod: 設定"
description: "TTTサーバーの設定を最適化して、より良いゲームプレイとラウンド管理を実現しよう → 今すぐ詳しくチェック"
sidebar_label: Garry's Mod TTT 設定
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## あなたのTTTサーバーの設定

**重要：すべての変更を行う前にサーバーを停止してください。**

基本設定は、サーバー名やRconパスワード、サーバーパスワードなど、当社のWebインターフェースで簡単に行えます。

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

サーバーの基本設定が完了したら、TTTゲームモードの詳細設定に進みましょう。Webインターフェースを使うか、FTPでファイルを直接編集できます。

設定エディターはWebインターフェースの「Configs」タブにあります。そこでserver.cfgファイルを開いてください。
当社のWebインターフェースでは「Configs」からserver.cfgを開けます。

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

ここでTTTサーバーのゲームプレイを調整するための値を見つけられます。重要な変数をサクッと解説：

<InlineVoucher />

## ラウンドとマップチェンジ

ttt_round_limit  
:::info  
マップが切り替わるまでの最大ラウンド数。（デフォルト：6）  
:::

ttt_time_limit_minutes  
:::info  
マップが切り替わるか投票が始まるまでの最大時間（分）。（デフォルト：75）  
:::

ttt_postround_dm  
:::info  
ラウンド終了後にダメージを有効にします。キルはスコアにカウントされないので、フリーフォーオール状態になります。（デフォルト：1）  
:::

ttt_ragdoll_pinning_innocents  
:::info  
トレイター以外のプレイヤーも死体をピン止めできるようにします。（デフォルト：1）  
:::

## ゲームプレイ

ttt_traitor_pct  
:::info  
トレイターになるプレイヤーの割合。プレイヤー数にこの数値を掛けて切り捨てます。結果が1未満またはプレイヤー数を超える場合は、それぞれに調整されます。（デフォルト：0.25）  
:::

ttt_traitor_max  
:::info  
トレイターの最大人数。（デフォルト：32）  
:::

ttt_detective_pct  
:::info  
探偵になるプレイヤーの割合。（デフォルト：0.13）  
:::

ttt_detective_max  
:::info  
探偵の最大人数。探偵を制限または無効化するのに使えます。（デフォルト：32）  
:::

ttt_detective_min_players  
:::info  
探偵が登場するための最低プレイヤー数。（デフォルト：5）  
:::

ttt_detective_karma_min  
:::info  
プレイヤーのカルマがこの値を下回ると、探偵に選ばれる確率が減ります。（デフォルト：600）  
:::

ttt_minimum_players  
:::info  
ラウンド開始前に必要な最低プレイヤー数。準備フェーズ開始前とラウンド開始前にチェックされます。（デフォルト：2）  
:::

## DNA

ttt_killer_dna_range  
:::info  
殺害者のDNAサンプルが被害者の死体に付着する最大距離。（デフォルト：300）  
:::

## カルマ

ttt_karma  
:::info  
カルマシステムを有効にします。プレイヤーは一定のカルマで開始し、味方（無実なら無実、トレイターならトレイター）を傷つけたり殺したりするとカルマを失います。失う量は相手のカルマに依存します。（デフォルト：1）  
:::

ttt_karma_strict  
:::info  
有効にすると、カルマが下がるほどダメージペナルティが急激に増加します。無効の場合、カルマが800以上ならペナルティは非常に低いです。（デフォルト：1）  
:::

ttt_karma_starting  
:::info  
プレイヤーの開始カルマ。ダメージボーナスを「稼げる」ようにしたいなら、850くらいに設定すると良いです。クリーンなプレイで1000まで上げられ、新規プレイヤーより数％多くダメージを与えられます。（デフォルト：1000）  
:::

ttt_karma_max  
:::info  
プレイヤーが持てる最大カルマ。1000を超えても1100のカルマがあってもダメージボーナスは付きません。ペナルティが付くまでの「バッファ」として機能します。（デフォルト：1000）  
:::

ttt_karma_ratio  
:::info  
被害者のカルマから攻撃者のカルマをどれだけ減らすか計算するためのダメージ比率。（デフォルト：0.001）  
:::

ttt_karma_kill_penalty  
:::info  
カルマペナルティはダメージ量に基づきます。キルペナルティはキル時に追加される「ダメージ」量です。例えば100なら、ライフルのヘッドショットは200ダメージ扱いになります。（デフォルト：15）  
:::

ttt_karma_round_increment  
:::info  
ラウンド終了時に全員のカルマが回復する基本量。（デフォルト：5）  
:::

ttt_karma_clean_bonus  
:::info  
そのラウンドで味方を傷つけたり殺したりしていなければ、追加で30カルマ回復。（デフォルト：30）  
:::

ttt_karma_traitordmg_ratio  
:::info  
ttt_karma_ratioと似ていますが、トレイターにダメージを与えた時のカルマ報酬用です。通常、トレイターにダメージを与えると、無実の味方に与えるペナルティの約1/4の報酬が得られます。（デフォルト：30）  
:::

ttt_karma_traitorkill_bonus  
:::info  
トレイターを倒した時のボーナスカルマ。（デフォルト：40）  
:::

ttt_karma_low_autokick  
:::info  
ラウンド終了時にカルマが低いプレイヤーを自動でキックします。（デフォルト：1）  
:::

ttt_karma_low_amount  
:::info  
ラウンド終了時にキックされるカルマの閾値。（デフォルト：300）  
:::

ttt_karma_low_ban  
:::info  
low_autokickが有効な場合、これも有効にするとキック後にBANします。autokickが無効なら効果なし。（デフォルト：1）  
:::

ttt_karma_low_ban_minutes  
:::info  
BANの時間（分）。（デフォルト：60）  
:::

ttt_karma_persist  
:::info  
ラウンド終了時や切断時にプレイヤーのカルマを永続保存し、再接続時に読み込みます。これによりマップ変更後もカルマが維持されます。（デフォルト：1）  
:::

ttt_karma_clean_half  
:::info  
プレイヤーのカルマが開始値を超えている場合（カルマ最大値が開始値より高く設定されている場合）、カルマの増加量が開始値を超えた分だけ減少します。つまり、カルマが高いほど増えにくくなります。（デフォルト：0.25）  
:::

すべての変数を希望通りに変更したら、次は変更を保存しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

その後、サーバーを起動できます！

<InlineVoucher />