---
id: palworld-server-modding
title: "Palworld：PalworldのMOD導入方法"
description: "Palworldのゲームプレイをサーバー＆クライアント用MODで安全かつ効果的に強化する方法 → 今すぐチェック"
sidebar_label: MODのインストール
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldのリリース以来、ゲーム体験を向上させてさらに楽しくする新しいワクワクするMODがオンラインで続々登場しています。このガイドでは、Palworldのゲームサーバーやゲームクライアントにゲームの改造（MOD）を追加する手順を解説します。

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="PalworldサーバーにMODをインストールする方法！" description="実際の動きを見て理解したい？そんなあなたにピッタリ！動画でわかりやすく解説。急いでいる時も、じっくり情報を吸収したい時もどうぞ！"/>

<InlineVoucher />

### 重要ポイント

現時点では、サードパーティのMOD配布サイトからMODを閲覧・ダウンロードできます。MOD界隈で信頼されている[ Nexus Mods](https://www.nexusmods.com/palworld/)や[ Curseforge](https://www.curseforge.com/palworld/)の利用をおすすめします。Steam WorkshopからのMODダウンロードは現状できません。

:::note
ZAP-HostingはMOD導入によるサーバーファイルやワールドの改変・破損に関して一切の責任を負いません。必ずバックアップを取ってから作業を進めてください。バックアップについては専用の[セーブゲーム管理](palworld-server-savegames.md)ガイドで詳しく解説しています。
:::

:::info
現在サポートしているのはPAK MOD（.PAKファイル）のみです。セキュリティ上の理由から実行ファイルを必要とするMODは使用できません。
:::



### サーバー側MODとクライアント側MOD

MODを選ぶ際は、まずサーバー側かクライアント側かを判別しましょう。最も簡単なのはMODの説明文を確認するか、MOD作者に直接問い合わせることです。

サーバー側スクリプトはサーバーに直接インストールし、プレイヤー側での操作は不要です。一方、クライアント側MODは接続するユーザーが自分のゲームファイルにMODをダウンロード＆インストールする必要があります。

:::info
使用したいMODが現在のPalworldのゲームビルドバージョンに対応しているか必ず確認してください。
:::



## ステップ1：PAKファイルの準備

はじめに、イントロで紹介したようなMOD配布サイトにアクセスし、様々なMODを閲覧・ダウンロードしましょう。

:::info
注意：セキュリティ上の理由から、現在はPAK MOD（.PAKファイル）のみサポートしています。
:::

使いたいMODを選び、ローカルデバイスにダウンロードします。必要に応じて[7zip](https://www.7-zip.org/)などのツールで解凍し、**.pak**ファイルを取り出してください。

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## ステップ2：FTPでアップロード

PAKファイルの準備ができたら、ゲームサーバーのウェブインターフェースの**ツール->FTPブラウザ**にアクセスします。

サーバーに接続するにはFTPクライアントが必要です。FTPクライアントのセットアップや接続方法がわからない場合は、専用の[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

ウェブインターフェース内の**直接接続**ボタンを使うと、お使いのFTPプログラムが自動で起動しログインされます。

または、FTPブラウザページに表示されている認証情報を使ってFTPクライアントに手動で入力し接続してください。

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

次に、先ほど準備したMODのPAKファイルを以下のディレクトリにアップロードします：
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Windows版用
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Linux版用
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

これでサーバー側の作業は完了！次はクライアント側の準備です。



## ステップ3：クライアント側にMODをインストール

サーバーにMODをすべてインストールしたら、サーバーに接続したいクライアント側でも同じ作業を行う必要があります。現状、クライアントが自動でMODを取得・ダウンロードする方法はありません。

まずSteamを開き、Palworldを右クリックして「管理」→「ローカルファイルを閲覧」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Palworldのゲームインストールフォルダが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

次に以下のディレクトリに移動します：
```
../Palworld/Pal/Content/Paks/
```

MODの**.pak**ファイルをこのフォルダにコピーしてください。追加したMODも同様に繰り返します。

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## ステップ4：Palworldを起動してサーバーに接続

これでPalworldサーバーに接続して、新しいMODを楽しめるようになります。接続方法がわからない場合は専用の[サーバー接続](palworld-connect.md)ガイドを参考にしてください。

ゲームに入ると、MODによる変化が確認できるはずです。

例えば、テストサーバーではMinecraftブロックMODを導入しています：

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

これでPalworldサーバーへのMOD導入は完了です。もしMOD導入で問題があれば、以下のデバッグセクションをチェックしてください。



## デバッグ

このデバッグセクションでは、よくある問題の原因とトラブルシューティング手順を紹介します。MODはまだ初期段階で公式対応外のため、バグが発生しやすいことをご了承ください。

#### MODのバージョン互換性を確認

導入したMODが現在のPalworldのゲームビルドバージョンに対応しているか必ず確認してください。非対応の場合、エラーが出たりMODの機能が正常に動作しないことがあります。古い場合はMOD作者にアップデートを依頼しましょう。

#### サーバーを再起動

変更後やMODが反映されない場合はサーバーを再起動してください。特定のMODでエラーやバグが出る場合はMOD作者に相談するのがおすすめです。

#### ログを確認してエラーを探す

まずはゲームサーバーのウェブインターフェースの**情報->ログファイル**を確認しましょう。ここにはサーバーのイベントやヒント、エラーメッセージなどが記録されています。

特にエラーメッセージは問題の原因を特定し理解するのに役立ちます。ログをじっくり見ることで問題の発見と解決につながることが多いです。

:::info
もっとサポートが必要？大丈夫！気軽に[Discordコミュニティ](https://discord.com/invite/zaphosting)に参加するか、[r/zaphostingサブレディット](https://www.reddit.com/r/zaphosting/)で質問してください。私たちやコミュニティが助けます。

公式サポートが必要な場合は、できるだけ詳しい内容で[チケットを作成](https://zap-hosting.com/en/customer/support/)してください。できるだけ早く対応します！ :)
:::


<InlineVoucher />