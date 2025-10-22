---
id: fivem-editlocalfiles
title: "FiveM: ロケールファイル（言語変数）"
description: "リソースの言語変数をカスタマイズしたり、まだ存在しない言語を追加してパーソナライズされた体験を作ろう → 今すぐ詳しく学ぶ"
sidebar_label: ロケールファイル（言語）
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

リソースの言語変数を変更したり、まだ追加されていない言語をリソースに追加したいですか？ロケールファイルを使えば、目的のリソースの言語変数を自由に調整できます。 

<InlineVoucher />



## ロケールファイルの場所を探す

ロケールファイルはFTPクライアントを使って編集する必要があります。FTPの利用が初めての場合は、まず[FTPアクセス](gameserver-ftpaccess.md)のガイドを読むことをおすすめします。接続できたら、編集したいリソースのESXリソースディレクトリに移動してください。リソースディレクトリ内のlocalesフォルダを開きます。 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

localesフォルダ内には、そのリソースで利用可能なすべての言語ファイルが入っています。ここから既存のファイルを編集するか、新しい言語用に既存のファイルをコピーして名前を変え、編集することができます。 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## ロケールファイルの編集

開いたロケールファイル内の各言語変数の内容を調整できます。言語変数の内容はイコール記号の後、引用符内にあります。好きな内容に変更し、最後に保存してください。 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## ロケール（言語）の設定

使用する言語は、リソースディレクトリ内の設定ファイル `config.lua` で定義できます。`Config.Locale = GetConvar('esx:locale', 'en')` の値を調整してください。 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## まとめ

すべての手順を踏んだなら、リソースのロケールファイルを無事に編集できたはずです。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />