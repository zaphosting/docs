---
id: l4d2-gslt
title: "Left 4 Dead 2: GSLT（Steamゲームサーバーログイントークン）の作成"
description: "SteamのGSLTでゲームサーバーを認証し、公開リスト掲載やVAC保護を実現 → 今すぐチェック"
sidebar_label: GSLTを作成する
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

**GSLT（ゲームサーバーログイントークン）**は、特定のゲームの専用サーバーを運用するためにSteam/Valveが要求するログイントークンです。Steamアカウントに紐づいており、サーバーの正当な認証を保証します。

有効なGSLTがないと、該当サーバーは公開サーバーリストに表示されなかったり、VAC保護が利用できなかったりします。

<InlineVoucher />



## 必要条件

ゲームサーバーログイントークン（GSLT）を使うには、Steamアカウントが制限・BAN・コミュニティ除外されていないことが必要です。スマホ認証済みであること、そしてホストしたいゲームを所有していることも条件です。1アカウントあたり最大1000個のトークンを作成可能です。

トークンの管理は完全に自己責任です。トークンが悪用されたりBANされた場合、紐づくゲームへのアクセスを永久に失う可能性があります。トークンは絶対に他人と共有しないでください。もし共有してしまった場合は、すぐに削除しましょう。Steamパスワードをリセットすると、すべてのトークンは自動的に再生成されます。長期間使われていないトークンは期限切れになりますが、いつでも再作成可能です。



## GSLTの作成
ゲームサーバーログイントークンを作成するには、Steamアカウントでログインし、[Steamゲームサーバーアカウント管理](https://steamcommunity.com/dev/managegameservers)にアクセスしてください。


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

ログイン後、ページに表示されるフォームから新しいトークンを作成できます。**App ID**欄には、**Left 4 Dead 2**のApp IDである`550`を入力してください。間違ったIDを入力するとトークンは機能しないので注意しましょう。

**Memo**欄には任意の説明を入力できます。後でトークンの用途を識別しやすくするため、サーバー名や役割などを記入すると便利です。両方の値を入力したら、**Create**をクリックしてトークンを生成します。生成されたトークンは表示され、サーバーの起動設定で使用可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/fTgmTPA7q8k9TAd/download)

## サーバー設定

作成したログイントークンをサーバー設定に追加します。ゲームサーバーの管理画面を開き、**設定**セクションに移動してください。**GSL Token**と書かれた欄にトークンを入力し、保存を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info 複数のLeft 4 Dead 2サーバーを運用する場合
複数の**Left 4 Dead 2**サーバーを運用する場合は、サーバーごとにGSLTが必要です。<u>**1つのGSLTで複数のゲームサーバーを運用することはできません。**</u>
:::



## まとめ

GSLTの作成とサーバー設定への適用が完了しました。ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください！🙂

<InlineVoucher />