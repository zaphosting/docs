---
id: arma-reforger-mods
title: "Arma Reforger：WorkshopからのModインストール方法"
description: "Arma ReforgerのWorkshop Modをサーバーにインストールして有効化する方法 → 今すぐチェック"
sidebar_label: Modのインストール
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Arma Reforger**では、Modがゲーム体験を大きく広げる役割を果たしています。**Arma Reforger Workshop**では、プレイヤーやクリエイターがカスタムミッション、ゲームプレイの変更、マップ、追加コンテンツを公開しており、これらはサーバーで利用可能です。

Modをインストールすることで、サーバーオーナーはゲームプレイをカスタマイズしたり、新しいメカニクスを導入したり、コミュニティ向けにユニークなミッションを提供したりできます。インストール後、サーバーに参加するプレイヤーは必要なModを自動的にダウンロードしてから接続します。


<InlineVoucher />

## Modの探し方

まずはインストールしたいModの**Workshop ID**を取得しましょう。**Arma Reforger Workshop**を開き、目的のModページに移動します。各Workshopエントリーにはサーバーが自動でModをダウンロードするためのユニークなIDが割り当てられています。

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## 設定方法

サーバーにWorkshop Modをインストールするには、まず**ゲームサーバー管理パネル**を開き、**設定**に進みます。設定項目の中から**Workshop-Mods**というフィールドを探してください。ここにインストールしたいModの**Workshop ID**を入力します。単一Modの例：

```
1234567890
```
複数のModをインストールしたい場合は、Workshop IDをカンマ（,）で区切って入力します。複数Modの例：

```
1234567890,9876543210,1357924680
```
希望のMod IDを入力したら、**設定を保存**してサーバーを再起動しましょう。起動時にサーバーが自動的にArma Reforger Workshopから指定されたModをダウンロードし、読み込みます。



## まとめ

おめでとうございます！これで**Arma Reforger Workshop Mod**をサーバーに無事インストールできました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />