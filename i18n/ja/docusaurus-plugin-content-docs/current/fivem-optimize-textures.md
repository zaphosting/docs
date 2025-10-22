---
id: fivem-optimize-textures
title: "FiveM: テクスチャを最適化する"
description: "GTA5のMODテクスチャを最適化してサイズを削減し、ゲームパフォーマンスを向上させる方法をチェック → 今すぐ詳しく見る"
sidebar_label: テクスチャの最適化
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
GTA5のMODテクスチャを品質を落とさずにサイズダウンしたい？このガイドでは、テクスチャを16MB以下に効果的に圧縮する方法を紹介するよ。ちょっとした手順と適切なツールを使えば、ゲームのパフォーマンスがアップしてストレージも節約できる。さらに、以下のような問題を回避するのにも役立つんだ：

```
Asset hevo/hevo.ytd uses 166.0 MiB of physical memory. Oversized assets can and will lead to streaming issues (models not loading/rendering, commonly known as 'texture loss', 'city bug' or 'streaming isn't great').
```

<InlineVoucher />


## 準備

始める前に、必要なツールをダウンロードしてインストールしておこう。公式サイトから**OpenIV**と**XnResize**を入手して、インストール手順に従ってね。これらのツールでテクスチャの編集を行うよ：

- **OpenIV**  [(ダウンロード)](https://openiv.com/)
- **XnResize** [(ダウンロード)](https://www.xnview.com/en/xnresize/#downloads)



## 設定
必要なツールをインストールしたら、テクスチャの編集を始めよう。OpenIVでMODの.ytdファイルを見つけて開くと、テクスチャにアクセスできるよ。

![OpenIV Texture Dictionary](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

OpenIVの左下にある「Export all textures（すべてのテクスチャをエクスポート）」をクリックして、MODの全テクスチャをエクスポートしよう。車両MODのフォルダ内に「textures」などのフォルダを作って保存すると管理しやすいよ。



## 最適化

テクスチャをエクスポートしたら、編集とリサイズの作業に入ろう。PCでXnResizeを起動して、エクスポートしたすべての.ddsファイルをXnResizeのウィンドウにドラッグ＆ドロップ。アプリ内にテクスチャが一覧表示されるはず。

XnResizeの「Action」タブで、幅と高さをパーセントに設定し、元のサイズの50%に縮小しよう。比率は必ず維持してね。

![XnResize Action Tab](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



「Output」タブでは、編集後のテクスチャの保存先フォルダ（例：「textures_resized」）を指定し、フォーマットは「DDS - Direct Draw Surface」に設定しよう。

![XnResize Output Tab](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## まとめ
すべてのテクスチャを編集してサイズを調整したら、MOD内の古いテクスチャと差し替えよう。圧縮後のテクスチャサイズはかなり小さくなり、ストレージ節約だけでなくゲームのパフォーマンス向上にもつながるよ。

| **説明**                  | **元のテクスチャ辞書**           | **圧縮後のテクスチャ辞書**       | **何倍良くなったか** |
| :------------------------ | :------------------------------ | :------------------------------ | :------------------- |
| **圧縮サイズ**            | 11.8 MB                        | 1.23 MB                        | 9.6倍                |
| **非圧縮サイズ**          | 164 MB                        | 11 MB                         | 14.9倍               |
| **仮想メモリ**            | 0.05 MiB                      | 0.05 MiB                      | -                    |
| **物理メモリ**            | 166.00 MiB                    | 10.69 MiB                     | 15.5倍               |

ゲーム内でテクスチャを必ずテストしてね。問題があれば、個別のテクスチャを元のサイズに戻したり、元の.ddsファイルを使うこともできるよ。

<InlineVoucher />