---
id: ats-gslt
title: "American Truck Simulator: GSLT（Steamゲームサーバーログイントークン）の作成"
description: "Steamのゲームサーバーログイントークンで専用ゲームサーバーを安全に認証し、信頼できる公開リストと保護を実現する方法 → 詳しくはこちら"
sidebar_label: GSLTの作成
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

**GSLT（ゲームサーバーログイントークン）**は、特定のゲームの専用サーバーを運用するためにSteam/Valveが要求するログイントークンです。Steamアカウントに紐づいており、サーバーが正しく認証されていることを保証します。

有効なGSLTがないと、対象のサーバーは公開サーバーリストに表示されなかったり、VAC保護が利用できなかったりします。

<InlineVoucher />



## 必要条件

ゲームサーバーログイントークン（GSLT）を使うには、あなたのSteamアカウントが制限されていないこと、BANされていないこと、コミュニティから除外されていないことが必要です。さらに、認証済みスマホと連携していること、そしてホストしたいゲームを所有している必要があります。1アカウントあたり最大1000個のトークンを作成可能です。

トークンの管理は完全に自己責任です。トークンが悪用されたりBANされた場合、紐づくゲームへのアクセスを永久に失う可能性があります。トークンは絶対に他人と共有しないでください。もし共有してしまった場合は、すぐに削除しましょう。Steamのパスワードをリセットすると、すべてのトークンは自動的に再生成されます。長期間使われていないトークンは期限切れになりますが、いつでも再作成可能です。



## GSLTの作成
ゲームサーバーログイントークンを作成するには、Steamアカウントでサインインし、[Steamゲームサーバーアカウント管理](https://steamcommunity.com/dev/managegameservers)にアクセスします。


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

ログイン後、ページに表示されるフォームから新しいトークンを作成できます。**App ID**欄には、**American Truck Simulator**のApp IDである`270880`を入力してください。間違ったIDを入力するとトークンは機能しませんので注意しましょう。

**メモ**欄には任意の説明を入力できます。後でトークンの用途を識別しやすくするため、サーバー名や役割などを記入すると便利です。両方の値を入力したら、**作成**をクリックしてトークンを生成します。生成されたトークンは表示され、サーバーの起動設定で使用可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/LzDP5Gg9ntLJbTt/download)

## サーバー設定

ログイントークンはサーバー設定に追加する必要があります。ゲームサーバーの管理画面を開き、**設定**セクションに移動してください。**GSLトークン**とラベル付けされた欄にトークンを入力し、保存を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info 複数のAmerican Truck Simulatorサーバー運用について
複数の**American Truck Simulator**サーバーを運用する場合、それぞれにGSLTが必要です。<u>**1つのGSLTで複数のゲームサーバーを運用することはできません。**</u>
:::



## まとめ

GSLTの作成とサーバー設定への適用が完了しました。ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください！🙂

<InlineVoucher />