---
id: satisfactory-connect
title: "Satisfactory: サーバーへの接続方法"
description: "Satisfactoryサーバーへの接続と管理方法をマスターして、快適なゲーム体験を → 今すぐチェック！"
sidebar_label: サーバーへの接続
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="ZAPでSatisfactoryサーバーを作成し、自分のセーブデータをアップロードする方法" description="実際に見て理解したい？そんなあなたにピッタリ！この動画でわかりやすく解説。急いでいる時も、じっくり楽しみたい時も、最高の情報収集方法です！"/>

:::info
すでにQWERTYキーボードレイアウトを使っている場合は、この手順は不要です。CTRL + SHIFT + Lを押して、~キーでコンソールを開いてください。
:::

Satisfactoryのゲームサーバーに接続するには、ゲーム内のコンソールを開く必要があります。開き方は2通りあります。

<InlineVoucher />

## コンソールを開く方法

### キーボードレイアウトの切り替え
キーボードレイアウトは簡単に切り替えられます。
Satisfactoryを起動してメインメニューまで進みます。
次に `CTRL + Shift` を押すと、キーボードレイアウトが `EN` に切り替わります。
切り替わったか確認するには、デスクトップに切り替えてタスクバー右下に `EN` が表示されているかチェックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

切り替えが成功したらゲームに戻り、`CTRL + SHIFT + L` を押します。
次にキーボードの `^` キーを押すとコンソールが開きます。

### コンソールを開くキーを変更する方法
`Windowsキー + R` を押すか、スタートメニューで「ファイル名を指定して実行」を検索します。
以下のパスをコピーして貼り付けてください。

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

Enterを押します。

お好きなエディター（例：メモ帳）でInput.iniファイルを開いてください。

:::info
ファイルがまだない場合は、新規作成してください。
:::

以下のテキストをファイルに追加します。

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

保存してゲームを再起動すると、`F6` キーでコンソールを開けるようになります。

## Satisfactoryゲームサーバーに接続する方法
サーバーのダッシュボードからIPアドレスをコピーします。

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

先ほどの手順でゲーム内コンソールを開き、

`open サーバーのIPアドレス`

と入力します。

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

Enterを押してください。

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

これでSatisfactoryサーバーに接続完了です！

## HUBについて
HUBはワールド内にすでに設置されています。`F`キーで破壊して、別の場所に設置し直すことも可能です。
マークを辿れば簡単にHUBを見つけられます。

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## オートセーブ
サーバーは5分ごとに進行状況を自動保存します。セーブデータはサーバーダッシュボードのセーブゲームマネージャーで確認可能です。
常に最新6つ（30分分）のセーブを保持します。

<InlineVoucher />