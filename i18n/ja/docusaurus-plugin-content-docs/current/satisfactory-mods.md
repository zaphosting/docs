---
id: satisfactory-mods
title: "Satisfactory: SatisfactoryサーバーにMODをインストールする方法"
description: "非公式MODでSatisfactoryのプレイをもっと楽しく！サーバー体験をアップグレードする方法を今すぐチェックしよう"
sidebar_label: MODのインストール
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/satisfactory-mods.json';

## はじめに

Satisfactoryは公式のMODサポートはありませんが、MODを前提に作られているため、早期アクセスから強力なMODコミュニティが成長しています。これらのMODを使うことで、ゲームプレイにさまざまな改善や追加要素を加え、よりワクワクして楽しい体験ができます。このガイドでは、非公式MODをクライアントとSatisfactoryゲームサーバーにインストールする手順を解説します。

<InlineVoucher />

## 準備

まずは使いたいMODを探しましょう。このガイドでは、[Satisfactory Mod Manager](https://ficsit.app/)という人気のオープンソースMODマネージャーを使います。これを使えば、ローカルのゲームとゲームサーバー両方のMOD管理が簡単にできます。

このツールの主なメリットは、自動MOD管理、ワンクリックでのMODインストール、マルチプレイヤー対応のフィルター機能、そして最も人気のあるMODリポジトリであることです。

[Satisfactory Mod Manager](https://ficsit.app/)の公式サイトからアプリをインストールしたら、起動して初回セットアップをサクッと済ませましょう。設定はデフォルトのままにしておくのがおすすめ。MODを一緒にブラウズして選べるようになります。

## サーバーの追加

Satisfactory Mod Managerには、FTP認証情報を入力するだけでゲームサーバーにMODを自動アップロードできる便利な機能があります。

まずはサーバーのウェブインターフェースの **ツール -> FTPブラウザ** セクションにアクセスして、FTP認証情報を確認しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/bmEiCgJ56N6KeJ6/preview)

次にSatisfactory Mod Managerの **Manage Servers** タブを開き、FTP認証情報を入力します。Satisfactoryゲームサーバーフォルダはサーバーアイコンで表示されているので、パスを探して指定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/9RqoD845JWfFCYT/preview)

準備ができたら緑色の **Add** ボタンでサーバーを追加します。クライアント数が多すぎるエラーが出た場合は数分待ってから再試行してください。成功すると同じセクションにサーバーが追加されます。

![](https://screensaver01.zap-hosting.com/index.php/s/iS4j2RyxJNYZc85/preview)

## MODのインストール

Satisfactoryサーバーが接続されたら、左上のメニューからゲームインストール先をサーバーに切り替えます。**Mods on** トグルがハイライトされていることを確認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/dn9qpR24pm37727/preview)

中央のパネルでインストールしたいMODをブラウズしましょう。フィルターやソートボタンを使うと、特定のかっこいいMODを探しやすくなります。

各MODの横にあるダウンロードボタンで直接インストールするか、初回セットアップ時にデフォルト設定を使っていれば変更として準備できます。お気に入りのMODにはスターを付けておくと、後で見つけやすくなりますよ。

![](https://screensaver01.zap-hosting.com/index.php/s/9984GJDTkpZjLXW/preview)

MODの準備ができたら、初回セットアップ時にデフォルト設定を使っていれば左下の赤いボタンで変更を適用します。

![](https://screensaver01.zap-hosting.com/index.php/s/Tjnkoo5bYgAB86M/preview)

これで必要なファイルがSatisfactoryサーバーに直接ダウンロードされます。インストール中は各MODの横に進行状況が表示され、成功すると通知と緑色のアイコンが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/gE5qrazYq9wm2Sa/preview)

## サーバーへの接続

この段階で、MODがすべて有効かつ正常に起動していることを確認するために、Satisfactoryサーバーを再起動することをおすすめします。

準備ができたら、Satisfactory Mod ManagerのゲームインストールプロファイルをローカルのSatisfactoryゲームインストールに戻します。左下の **Play Satisfactory** ボタンを使えば、サーバーと同じMODを有効にした状態で自動的にゲームが起動します。メインメニューの左下でMODが動作しているか確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/NaRPTMRydm74Eor/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AfwKqcTetZgTQim/preview)

あとはメインメニューの **Server Manager** からいつも通りサーバーに接続すればOKです。



## 人気のMOD

まだサーバーにぴったりのMODが見つかっていない？ここでは厳選した人気＆おすすめMODリストを紹介しています。ゲームプレイをさらに充実させて、サーバーに最高の仕上げを加えましょう。インスピレーションを得て、あなたのプロジェクトにぴったりの追加要素を見つけてください。

<SearchableItemList items={items} />



## まとめ

Satisfactory Mod Managerを使って、SatisfactoryサーバーにMODを無事セットアップできました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />