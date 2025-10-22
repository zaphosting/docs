---
id: dods-fastdl
title: "Day of Defeat: Source: FastDLの設定方法"
description: "ZAP-Hostingのホスティングを使ってFastDLでゲームコンテンツのダウンロード速度をアップ＆サーバー負荷を軽減する方法 → 今すぐチェック"
sidebar_label: FastDL
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

FastDL（Fast Download）は、マップやサウンド、モデルなどのカスタムコンテンツをゲームサーバーではなく外部のHTTPウェブサーバーから配信する方法です。これによりプレイヤーのダウンロード速度が向上し、ゲームサーバーの負荷も軽減されます。

FastDLを使うには、パブリックなHTTPウェブサーバーへのアクセスが必要です。おすすめは、ゲームコンテンツ配信に最適な**ZAP-Hostingのホスティングパッケージ**です。このガイドではZAPのホスティングを使ったFastDLの設定方法を解説します。

<InlineVoucher />

## 必要なもの

ZAP-Hostingで稼働中のDay of Defeat: Sourceゲームサーバーと、追加のホスティングパッケージが必要です。ゲームサーバーとホスティングの両方でFTPアクセスまたはファイルマネージャーへのアクセスが可能であることが条件です。

ゲームサーバー側では、配信したいファイル（`.bsp`マップ、サウンドファイル、モデルなど）が正しく整理されている必要があります。ホスティング側でも同じフォルダ構成を再現することでFastDLが正常に機能します。

## ホスティングの準備

FastDL用ファイルの管理・アップロードには、ZAPホスティングの**ファイルマネージャー**の利用をおすすめします。ウェブパネルの**ホスティング > ファイルマネージャー**から直接アクセス可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

ホスティングのルートディレクトリに`fastdl`というフォルダを作成し、その中に`maps`、`sound`、`models`など配信したいコンテンツに合わせたサブフォルダを作成します。フォルダ構成はDay of Defeat: Sourceゲームサーバーのものと完全に一致させてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

アップロード前に、ファイルは**`.bz2`形式（bzip2）で圧縮**されている必要があります。Sourceエンジン系ではこの形式での配信が必須です。例えばマップファイル`custom_map.bsp`は`custom_map.bsp.bz2`としてアップロードします。

:::info 7-Zipでの圧縮方法
FastDL用ファイルの圧縮には**7-Zip**などのツールが便利です。ファイルを右クリックし、**7-Zip > 圧縮ファイルに追加...**を選択、アーカイブ形式に`bzip2`を指定してOKを押すだけで圧縮できます。
:::

圧縮ファイルを対応するフォルダにアップロードしたら、**すべてのディレクトリとファイルに正しい読み取り権限が設定されているか確認**してください。ファイルマネージャーで権限の調整が可能です。

アップロードと権限設定が完了すると、FastDLコンテンツは以下のパブリックURLでアクセス可能になります。

```
https://[あなたのドメイン名].zap.cloud/fastdl/
```

ブラウザでこのURLを開き、ファイルにアクセスできるかテストしてみましょう。

## ゲームサーバーの設定

ZAPのゲームサーバー管理画面で、**Configs**ページから`server.cfg`ファイルを開き、以下の行を追加します。

```cfg
sv_downloadurl "https://[あなたのドメイン名].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

FastDLのURLはホスティングのフォルダ構成と完全に一致していることを必ず確認してください。保存後、ゲームサーバーを再起動して設定を反映させましょう。

## まとめ

ZAPのホスティングを使えば、FastDLは簡単かつ確実に設定可能です。カスタムコンテンツの高速配信が実現し、Day of Defeat: Sourceサーバーを利用する全プレイヤーの体験が向上します。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />