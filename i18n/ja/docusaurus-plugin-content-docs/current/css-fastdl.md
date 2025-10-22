---
id: css-fastdl
title: "Counter-Strike: Source: FastDLの設定"
description: "ZAP-Hostingのホスティングを使ってFastDLでゲームコンテンツ配信を最適化し、ダウンロード高速化＆サーバー負荷軽減 → 今すぐチェック"
sidebar_label: FastDL
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

FastDL（Fast Download）は、マップやサウンド、モデルなどのカスタムコンテンツをゲームサーバーではなく外部のHTTPウェブサーバーから配信する方法です。これによりプレイヤーのダウンロード速度が向上し、ゲームサーバーの負荷も軽減されます。

FastDLを使うには、公開されているHTTPウェブサーバーが必要です。おすすめはゲームコンテンツ配信に最適な**ZAP-Hostingのホスティングパッケージ**です。このガイドではZAPホスティングを使ったFastDLの設定方法を解説します。

<InlineVoucher />

## 必要なもの

ZAP-Hostingで稼働中のCounter-Strike: Sourceゲームサーバーと、追加のホスティングパッケージが必要です。ゲームサーバーとホスティングの両方でFTPアクセスまたはファイルマネージャーへのアクセスが可能であることが条件です。

ゲームサーバー側では、配信したいファイル（例：`.bsp`マップ、サウンドファイル、モデル）が正しく整理されている必要があります。ホスティング側でも同じフォルダ構成を再現しなければFastDLは正常に動作しません。

## ホスティングの準備

FastDL用ファイルの管理・アップロードには、ZAPホスティングの**ファイルマネージャー**を使うのがおすすめです。ウェブパネルの**ホスティング > ファイルマネージャー**から直接アクセスできます。

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

ホスティングのルートディレクトリに`fastdl`というフォルダを作成し、その中に`maps`や`sound`、`models`など配信したいコンテンツに合わせたサブフォルダを作成します。フォルダ構成はCounter-Strike: Sourceサーバーのものと完全に一致させてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

ファイルをアップロードする前に、**ファイルは必ず`.bz2`形式（bzip2圧縮）にしておきましょう**。Sourceエンジン系のゲームはこの形式での配信を要求します。例えばマップファイル`custom_map.bsp`は`custom_map.bsp.bz2`としてアップロードします。

:::info 7-Zipでの圧縮方法
FastDL用にファイルを圧縮するには、**7-Zip**などのツールを使って`.bz2`形式に変換しましょう。ファイルを右クリックし、**7-Zip > 圧縮してアーカイブに追加...**を選択、アーカイブ形式に`bzip2`を指定してOKを押すだけです。
:::

圧縮済みファイルを対応するフォルダにアップロードしたら、**すべてのディレクトリとファイルに正しい読み取り権限が設定されているか必ず確認**してください。ファイルマネージャーで権限の調整が可能です。

アップロードと権限設定が完了すると、FastDLコンテンツは以下の公開URLからアクセス可能になります。

```
https://[あなたのドメイン名].zap.cloud/fastdl/
```

ブラウザでこのURLを開き、ファイルが見えるかどうか確認してみましょう。

## ゲームサーバーの設定

ZAPのゲームサーバー管理画面で、**Configs**ページから`server.cfg`を開き、以下の行を追加します。

```cfg
sv_downloadurl "https://[あなたのドメイン名].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

FastDLのURLはホスティングのフォルダ構成と完全に一致していることを必ず確認してください。保存後、ゲームサーバーを再起動して設定を反映させましょう。

## まとめ

ZAPホスティングを使えば、FastDLの設定は簡単かつ確実に行えます。これによりカスタムコンテンツの高速配信が可能になり、Counter-Strike: Sourceサーバーを利用する全プレイヤーの体験が向上します。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />