---
id: css-gslt
title: "Counter-Strike: Source: GSLT（Steamゲームサーバーログイントークン）の作成"
description: "SteamのGSLTでゲームサーバーを認証して公開リスト表示＆VAC保護を実現 → 今すぐ詳しくチェック"
sidebar_label: GSLTを作成
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

**GSLT（ゲームサーバーログイントークン）**は、特定のゲームの専用サーバーを運用するためにSteam/Valveが要求するログイントークンです。Steamアカウントに紐づいており、サーバーが正しく認証されていることを保証します。

有効なGSLTがないと、対象のサーバーは公開サーバーリストに表示されなかったり、VAC保護が利用できなかったりします。

<InlineVoucher />



## 必要条件

ゲームサーバーログイントークン（GSLT）を使うには、あなたのSteamアカウントが制限されていないこと、BANされていないこと、コミュニティから除外されていないことが必要です。さらに、認証済みスマホと連携していること、そしてホストしたいゲームを所有している必要があります。アカウントごとに最大1000個のトークンを作成可能です。

トークンの管理は完全にあなたの責任です。トークンが悪用されたりBANされた場合、紐づくゲームへのアクセスを永久に失う可能性があります。トークンは絶対に他人と共有しないでください。もし共有してしまった場合は、すぐに削除してください。Steamのパスワードをリセットすると、すべてのトークンは自動的に再生成されます。長期間使われていないトークンは期限切れになりますが、いつでも再作成可能です。



## GSLTの作成
ゲームサーバーログイントークンを作成するには、Steamアカウントでログインし、[Steamゲームサーバーアカウント管理](https://steamcommunity.com/dev/managegameservers)にアクセスします。


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

ログイン後、ページに表示されるフォームから新しいトークンを作成できます。**App ID**欄には、**Counter-Strike: Source**に対応するApp ID `220` を入力してください。間違ったIDを入力するとトークンは機能しないので注意しましょう。

**Memo**欄には任意の説明を入力できます。後でトークンの用途を識別しやすくするため、サーバー名や役割などを記入すると便利です。両方の値を入力したら、**Create**をクリックしてトークンを生成します。生成されたトークンは表示され、サーバーの起動設定で使用可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/rXyykRZKBYe95qY/download)

## サーバー設定

作成したログイントークンをサーバー設定に追加します。ゲームサーバーの管理画面を開き、**設定**セクションに移動してください。**GSL Token**と書かれた欄にトークンを入力し、保存を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info 複数のCounter-Strike: Sourceサーバー運用について
複数の**Counter-Strike: Source**サーバーを運用する場合、それぞれのサーバーに対して個別のGSLTが必要です。<u>**1つのGSLTで複数のゲームサーバーを運用することはできません。**</u>
:::



## まとめ

GSLTの作成とサーバー設定への適用が完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ 🙂 

<InlineVoucher />