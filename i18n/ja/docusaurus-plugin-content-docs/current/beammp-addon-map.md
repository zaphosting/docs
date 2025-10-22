---
id: beammp-addon-map
title: "BeamMP: アドオンマップのインストール"
description: "BeamMPサーバーをカスタムマップアドオンで強化してマルチプレイをもっと楽しもう → 今すぐチェック"
sidebar_label: アドオンマップのインストール
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

BeamNG.Driveはネイティブのモッディング対応と巨大なコミュニティを持っていて、友達と一緒にゲームプレイを拡張・強化できるよ。BeamMPはマルチプレイヤー用の改造だから、ほとんどのマップアドオンはBeamMPゲームサーバーでも使えるはず。このガイドでは、BeamMPゲームサーバーにカスタムマップアドオンをインストールして有効化する方法を解説するよ。

<InlineVoucher />

## 準備

BeamMPゲームサーバーにアドオンマップをインストールするには、FTPでサーバーに接続する必要があるよ。FTPに慣れていないなら、[FTPアクセス](gameserver-ftpaccess.md)のガイドをチェックしてみてね。

インストールを始める前に、サーバーに入れたいマップアドオンを探そう。コミュニティが作った大量のモッドやマップアドオンがある[公式BeamNG.Driveフォーラム](https://www.beamng.com/resources/categories/terrains-levels-maps.9/)がおすすめだよ。

:::tip
BeamMPはBeamNG.Driveのマルチプレイヤー改造だから、ほとんどのマップアドオンはBeamMPゲームサーバーで使えるはず。ただし、特定のマップがうまく動かない場合もあるから、必ずテストしてみてね。
:::

## インストール

まずは、サーバーに追加したいアドオンマップをダウンロードしておこう。ファイル形式は`.zip`であることが多いよ。

### マップ名の確認

次のステップに進む前に、正しいマップ名を使っているか確認しよう。ダウンロードした`.zip`ファイルの名前が正しいことが多いけど、必ずしもそうとは限らないから要チェック。

やり方は、ダウンロードした`.zip`ファイルを開いて、中の`levels`フォルダを探して開くとマップ本体が入っているよ。

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

このフォルダ内にあるマップアドオンのフォルダ名をコピーしよう。右クリックして「プロパティ」を選び、表示された名前を`CTRL + C`でコピーできるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### マップの設定

マップ名がわかったら、設定ファイルを編集してアクティブなマップを指定するパラメータを変更しよう。

#### 設定の上書きを無効化

まずは、設定でデフォルトのマップ選択をオフにしよう。これをしないと変更が上書きされちゃうからね。

ゲームサーバーのウェブインターフェースの**設定**セクションにアクセスして、

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

「Map」設定をオフにするよ。

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

最後にページ下部の保存ボタンを押して設定を保存しよう。

#### 設定ファイルでマップを変更

次に、ウェブインターフェースの**Configs**セクションに移動して、

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

`ServerConfig.toml`ファイルを開き、以下の行を探すよ：
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

この値を、先ほど確認したマップ名を使って
`Map = "/levels/[your_mapname]/info.json"`
に書き換えて保存しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
まれにマップのフォーマットが違う場合があるよ。もし手順通りにやってもうまく動かない場合は、`Map = "/levels/[your_mapname]/info.json"`の代わりに
`Map = "/levels/[your_mapname]/[your_mapname].mis"`
を指定してみてね。
:::

:::tip
いつでも設定でデフォルトマップを有効にして、ゲーム標準のマップを使うこともできるよ：
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### マップのアップロード

最後に、ダウンロードした`.zip`ファイルをFTPでBeamMPゲームサーバーにアップロードしよう。FTPの使い方は[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてね。

FTPクライアントで以下のパスを開くよ：
```
../beammp/Resources/Client
```

ここにマップアドオンの`.zip`ファイルをドラッグ＆ドロップでアップロードすればOK。設定ファイルの編集とマップファイルのアップロードが完了すれば、アドオンマップの準備は完了だよ。

## まとめ

すべての手順を終えたら、BeamMPゲームサーバーを再起動しよう。これでアドオンマップのインストールは完了！もしわからないことがあれば、いつでもサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />