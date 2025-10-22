---
id: satisfactory-commands
title: "Satisfactory: コンソールコマンド"
description: "Satisfactoryのプレイを最適化するための必須コンソールコマンドとキー割り当てのコツをチェック → 今すぐ詳しく見る"
sidebar_label: コンソールコマンド
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Satisfactoryにはクライアント設定を調整するための便利なコマンドが豊富に用意されています。このページでは、プレイヤーに人気でよく使われるコマンドをまとめています。

<InlineVoucher />

## コンソールの開き方
Satisfactory内でコンソールを使うのはとっても簡単。`キー（TABキーの上にあるバックティック）`を押すだけでコンソールの表示を切り替えられます。コンソールは閉じている状態、画面下に小さなコマンドウィンドウが表示されている状態、または完全に展開された状態のいずれかになります。

:::info
もしバックティックキーが反応しない場合は、以下のサブセクションの手順に従って新しいキー割り当てを設定してください。
:::

### コンソールが開けない場合
地域ごとのキーボード配列の違いで、デフォルトのバックティックキーが効かないことがあります。その場合は新しいキー割り当てを設定する必要があります。設定前にSatisfactoryを終了してください。

`Windowsキー + R`を押すか、スタートメニューで「ファイル名を指定して実行」を検索し、以下のパスをコピーして貼り付けます。

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

`Input.ini`ファイルをテキストエディタ（メモ帳など）で開きます。

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

次に、以下の行をファイルの一番下にコピー＆ペーストします。

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

最後に保存してゲームを再起動すれば、`F6`キーでコンソールを開けるようになります。

## コンソールコマンド一覧

以下の表はコマンド名、受け付ける値（ある場合）、説明をまとめています。

全コマンド一覧を表示したい場合は、コンソールで `?` を入力すると、全コマンドのホバーリストが表示されます。上下の矢印キーでリストをスクロール可能です。

`?` を使ったコマンド一覧表示の例は以下の通りです。

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
このページで紹介しているコマンドはすべてバニラ版Satisfactory向けです。
:::

| コマンド構文                  | 受け付ける値 | 説明 | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | 全コマンドのリストを表示         | 
| Stat FPS      | -          | ゲーム内のFPSカウンターを切り替え         | 
| Stat UNIT      | -          | フレーム時間、ゲームデータ、描画時間などの統計表示を切り替え         | 
| t.MaxFPS "maxfps"      | 整数 (例: 120)          | ゲームの最大FPSを設定         | 
| r.ScreenPercentage "value"      | 整数 (デフォルト100)          | 画面解像度のスケールを変更（UIではなくワールドレンダリングのみ）         | 
| r.ViewDistanceScale "value"      | 整数 (デフォルト1)          | 岩や木などのオブジェクトの描画距離を変更         | 
| Suicide      | -          | 自分のプレイヤーをキル         | 
| FOV "value"      | 整数 (例: 90)          | ゲームの視野角（FOV）を設定         | 
| r.Atmosphere "1 or 0"      | true (1)/false (0)          | 大気効果のオン・オフを切り替え        | 
| r.Fog "1 or 0"      | true (1)/false (0)          | 霧のオン・オフを切り替え         | 
| Gamma "value"      | 整数 (デフォルト50)          | ゲームの明るさレベルを設定         | 

もっと詳しいコマンド一覧は、[Satisfactory wiki](https://satisfactory.fandom.com/wiki/Console)で技術的なコマンドも含めて確認できます。

<InlineVoucher />