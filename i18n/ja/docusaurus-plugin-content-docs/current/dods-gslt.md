---
id: dods-gslt
title: "Day of Defeat: Source: GSLT（Steamゲームサーバーログイントークン）の作成"
description: "Steamのゲームサーバーログイントークンを使って専用ゲームサーバーを認証・保護し、より良い可視性とセキュリティを実現する方法 → 今すぐチェック"
sidebar_label: GSLTの作成
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

**GSLT（ゲームサーバーログイントークン）**は、Steam/Valveが特定のゲームの専用ゲームサーバーを運用する際に必要なログイントークンです。Steamアカウントに紐づいており、サーバーの正当な認証を保証します。

有効なGSLTがない場合、対象のサーバーはパブリックサーバーリストに表示されなかったり、VAC保護が利用できなかったりします。

<InlineVoucher />



## 必要条件

ゲームサーバーログイントークン（GSLT）を使うには、あなたのSteamアカウントが制限されていないこと、BANされていないこと、コミュニティから除外されていないことが必要です。さらに、認証済みスマホと連携していること、そしてホストしたいゲームを所有している必要があります。1アカウントにつき最大1000個のトークンを作成可能です。

トークンの管理は完全にあなたの責任です。トークンが悪用されたりBANされた場合、紐づくゲームへのアクセスを永久に失う可能性があります。トークンは絶対に他人と共有しないでください。もし共有してしまった場合は、すぐに削除してください。Steamのパスワードをリセットすると、すべてのトークンは自動的に再生成されます。長期間使われていないトークンは期限切れになりますが、いつでも再作成可能です。



## GSLTの作成
ゲームサーバーログイントークンを作成するには、Steamアカウントでログインし、[Steamゲームサーバーアカウント管理](https://steamcommunity.com/dev/managegameservers)にアクセスします。


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

ログイン後、ページに表示されるフォームから新しいトークンを作成できます。**App ID**欄には、**Day of Defeat: Source**に対応するApp ID `300` を入力してください。間違ったIDを入力するとトークンは機能しませんので注意しましょう。

**Memo**欄には任意の説明を入力できます。後でトークンの用途を識別しやすくするため、サーバー名や役割などを記入すると便利です。両方の値を入力したら、**Create**をクリックしてトークンを生成します。生成されたトークンは表示され、サーバーの起動設定で使用可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/n7pZjBfz5cy59TM/download)

## サーバー設定

作成したログイントークンをサーバー設定に追加します。ゲームサーバーの管理画面を開き、**設定**セクションに移動してください。**GSL Token**という欄にトークンを入力し、保存を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info 複数のDay of Defeat: Sourceサーバー運用について
複数の**Day of Defeat: Source**サーバーを運用する場合、サーバーごとにGSLTが必要です。<u>**1つのGSLTで複数のゲームサーバーを運用することはできません。**</u>
:::



## まとめ

GSLTの作成とサーバー設定への適用が完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください！毎日対応していますよ 🙂 

<InlineVoucher />