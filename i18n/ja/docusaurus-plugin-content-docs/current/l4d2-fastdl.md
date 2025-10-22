---
id: l4d2-fastdl
title: "Left 4 Dead 2: FastDLの設定方法"
description: "ZAP-Hostingのホスティングを使ってLeft 4 Dead 2のコンテンツ配信をFastDLで最適化し、ダウンロード速度アップ＆サーバー負荷軽減 → 今すぐチェック"
sidebar_label: FastDL
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

FastDL（Fast Download）は、マップやサウンド、モデルなどのカスタムコンテンツをゲームサーバーではなく外部のWebサーバーから配信する方法です。これによりプレイヤーのダウンロード速度が向上し、ゲームサーバーの負荷を軽減できます。

FastDLを使うには、パブリックなHTTP Webサーバーへのアクセスが必要です。おすすめは**ZAP-Hostingのホスティングパッケージ**で、ゲームコンテンツ配信に最適です。このガイドではZAPホスティングを使ったFastDLの設定方法を解説します。

<InlineVoucher />

## 必要なもの

ZAP-Hostingで稼働中のLeft 4 Dead 2ゲームサーバーと、追加のホスティングパッケージが必要です。ゲームサーバーとホスティングの両方でFTPアクセスまたはファイルマネージャーへのアクセスが可能であることが条件です。

ゲームサーバー側では、配信したいファイル（`.bsp`マップやサウンドファイル、モデルなど）が正しく整理されている必要があります。ホスティング側でも同じフォルダ構成にすることでFastDLが正常に機能します。

## ホスティングの準備

FastDL用ファイルの管理・アップロードには、ZAPホスティングの**ファイルマネージャー**を使うのがおすすめです。Webパネルの**ホスティング > ファイルマネージャー**から直接アクセスできます。

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

ホスティングのルートディレクトリに`fastdl`というフォルダを作成し、その中に`maps`や`sound`、`models`など配信したいコンテンツに合わせたサブフォルダを作成します。フォルダ構成はLeft 4 Dead 2サーバーのものと完全に一致させてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

アップロード前に、ファイルは**`.bz2`形式（bzip2）で圧縮**しておく必要があります。Sourceエンジン系ゲームではこの形式が必須です。例えばマップファイル`custom_map.bsp`は`custom_map.bsp.bz2`としてアップロードします。

:::info 7-Zipでの圧縮方法
FastDL用ファイルの圧縮には**7-Zip**などのツールが便利です。ファイルを右クリックし、**7-Zip > 圧縮してアーカイブに追加...**を選択、アーカイブ形式に`bzip2`を指定してOKを押すだけでOKです。
:::

圧縮ファイルを適切なフォルダにアップロードしたら、**すべてのフォルダとファイルに正しい読み取り権限が設定されているか確認**してください。ファイルマネージャーで権限の調整が可能です。

アップロードと権限設定が完了すると、FastDLコンテンツは以下のパブリックURLからアクセス可能になります：

```
https://[あなたのドメイン名].zap.cloud/fastdl/
```

ブラウザでこのURLを開き、ファイルが見えるかどうかテストしてみましょう。

## ゲームサーバーの設定

ZAPのゲームサーバー管理画面で、**Configs**ページから`server.cfg`ファイルを開き、以下の行を追加してください：

```cfg
sv_downloadurl "https://[あなたのドメイン名].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

FastDLのURLはホスティングのフォルダ構成と完全に一致していることを必ず確認してください。保存後、ゲームサーバーを再起動して設定を反映させましょう。

## まとめ

ZAPホスティングを使えばFastDLの設定は簡単＆確実にできます。これでLeft 4 Dead 2のカスタムコンテンツを高速かつ効率的に配信でき、プレイヤーの体験もグッと良くなります。

もしわからないことがあれば、いつでもサポートチームに気軽にお問い合わせくださいね！毎日対応しています 🙂 

<InlineVoucher />