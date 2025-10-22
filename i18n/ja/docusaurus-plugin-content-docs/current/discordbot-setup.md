---
id: discordbot-setup
title: Discordボットのセットアップ
description: "モデレーション、音楽、ギブアウェイなどのDiscordボットをシームレスに運用・管理する方法を解説 → 今すぐ詳しくチェック"
sidebar_label: セットアップ
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

**Discordボットサーバー**を使えば、Discordボットを途切れなくスムーズに動かせます。このボットは、Discordチャンネルの自動モデレーション、音楽再生、ギブアウェイやアンケートの開催など、さまざまなタスクをこなせます。

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Discordボットサーバーのセットアップとボットファイルのアップロード方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたにピッタリ！忙しい時も、じっくり見たい時も、わかりやすく解説した動画をどうぞ！"/>

<InlineVoucher />



## 対応言語

Discordボットはさまざまなプログラミング言語で作れます。当社のサービスでは、以下の言語で書かれたDiscordボットをサポートしています：

- Java
- Python
- NodeJS

  
  

## 準備



### ボットの入手

まずは動作するDiscordボットが必要です。自分で作るか、ネットから既成のボットをダウンロードしてください。後で簡単にアップロードできるように、パソコンに保存しておきましょう。

### ファイルのアップロード

Discordボットのファイルをアップロードします。FTPを使ってアップロード可能です。FTPの使い方がわからない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


フォルダを開いたら、空のフォルダにボットファイルをそのままアップロードしましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## 設定

Dashboardでボットを動かすには、Discord Bot Dashboardの**設定**ページでボットの設定を行う必要があります。

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

ここで、ボットが使うプログラミング言語とメインファイル名を設定します。例ではPython 3を使い、実行するDiscordボットのファイル名を`main.py`と指定しています。

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger 依存関係について
Discordボットは機能のために追加の依存関係を持つことが多いです。すべて正しく設定されているか必ず確認してください。依存関係は以下のファイルで管理されています：

- Python: `requirements.txt`
- Node.js: `package.json`
- Java: `pom.xml`（Maven）または`build.gradle`（Gradle）

:::



## 動作確認

設定を保存したら、ページ上部の緑色のスタートボタンでボットを起動できます。ライブコンソールでボットが正常に起動したかチェックしましょう。



## まとめ

おめでとうございます！Discordボットのインストールと設定が完了しました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂






<InlineVoucher />