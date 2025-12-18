---
id: nmrih-fastdl
title: "No More Room In Hell：FastDLの設定方法"
description: "ZAP-Hostingのホスティングを使ってFastDLでゲームコンテンツ配信を最適化し、ダウンロード速度アップ＆サーバー負荷軽減 → 今すぐチェック"
sidebar_label: FastDL
services:
  - gameserver-nmrih
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

FastDL（Fast Download）は、マップやサウンド、モデルなどのカスタムコンテンツをゲームサーバーではなく外部のHTTPウェブサーバーから配信する方法です。これによりプレイヤーのダウンロード速度が向上し、ゲームサーバーの負荷を軽減できます。

FastDLを使うには、パブリックなHTTPウェブサーバーへのアクセスが必要です。おすすめは、ゲームコンテンツ配信に最適な**ZAP-Hostingのホスティングパッケージ**です。このガイドではZAPホスティングを使ったFastDLの設定方法を解説します。

<InlineVoucher />

## 必要なもの

ZAP-Hostingで稼働中のNo More Room In Hellゲームサーバーと、追加のホスティングパッケージが必要です。ゲームサーバーとホスティングの両方でFTPアクセスまたはファイルマネージャーへのアクセスが可能であることが条件です。

ゲームサーバー側では、配信したいファイル（`.bsp`マップやサウンドファイル、モデルなど）がすでに正しいフォルダ構成で整理されている必要があります。ホスティング側でも同じフォルダ構成を再現することでFastDLが正常に機能します。

## ホスティングの準備

FastDL用ファイルの管理・アップロードには、ZAPホスティングの**ファイルマネージャー**の利用を推奨します。ウェブパネルの**ホスティング > ファイルマネージャー**から直接アクセス可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

ホスティングのルートディレクトリに`fastdl`というフォルダを作成し、その中に`maps`や`sound`、`models`など配信したいコンテンツに合わせたサブフォルダを作成します。フォルダ構成はNo More Room In Hellサーバーのものと完全に一致させてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

ファイルをアップロードする前に、**ファイルは必ず`.bz2`形式（bzip2）で圧縮**してください。Sourceエンジン系ゲームではこの形式での配信が必須です。例えばマップファイル`custom_map.bsp`は`custom_map.bsp.bz2`としてアップロードします。

:::info 7-Zipでの圧縮方法
FastDL用ファイルの圧縮には**7-Zip**などのツールが便利です。ファイルを右クリックして**7-Zip > 圧縮してアーカイブに追加...**を選び、アーカイブ形式に`bzip2`を指定してOKを押すだけでOKです。
:::

圧縮ファイルを対応するフォルダにアップロードしたら、**すべてのフォルダとファイルに正しい読み取り権限が設定されているか必ず確認**してください。ファイルマネージャーで権限の調整が可能です。

アップロードと権限設定が完了すると、FastDLコンテンツは以下の公開URLでアクセス可能になります：

```
https://[あなたのドメイン名].zap.cloud/fastdl/
```

ブラウザでこのURLを開き、ファイルにアクセスできるかテストしてみましょう。

## ゲームサーバーの設定

ZAPのゲームサーバー管理画面で、**Configs**ページから`server.cfg`ファイルを開き、以下の行を追加してください：

```cfg
sv_downloadurl "https://[あなたのドメイン名].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

FastDLのURLはホスティングのフォルダ構成と完全に一致していることを確認してください。保存後、ゲームサーバーを再起動して設定を反映させましょう。

## まとめ

ZAPホスティングを使えばFastDLの設定は簡単かつ確実に行えます。これによりカスタムコンテンツの高速配信が可能になり、No More Room In Hellサーバーを利用する全プレイヤーの体験が向上します。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />