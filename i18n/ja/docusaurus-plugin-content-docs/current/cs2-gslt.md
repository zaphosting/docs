---
id: cs2-gslt
title: "Counter-Strike 2: GSLT（Steamゲームサーバーログイントークン）の作成"
description: "専用ゲームサーバーをSteamゲームサーバーログイントークンで認証・保護し、最適なサーバー表示とセキュリティを実現する方法 → 詳しくはこちら"
sidebar_label: GSLTの作成
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

**GSLT（ゲームサーバーログイントークン）**は、特定のゲームの専用サーバーを運用するためにSteam/Valveが要求するログイントークンです。Steamアカウントに紐づいており、サーバーの正当な認証を保証します。

有効なGSLTがない場合、該当サーバーはパブリックサーバーリストに表示されなかったり、VAC保護を利用できなかったりします。

<InlineVoucher />



## 必要条件

ゲームサーバーログイントークン（GSLT）を使用するには、Steamアカウントが制限・禁止・コミュニティ除外されていないことが必要です。スマホ認証済みのアカウントであり、ホストしたいゲームを所有している必要があります。1アカウントあたり最大1000個のトークンを作成可能です。

トークンの管理は完全に自己責任です。トークンが悪用されたり禁止された場合、紐づくゲームへのアクセスを永久に失う可能性があります。トークンは絶対に他人と共有しないでください。もし共有してしまった場合は、すぐに削除してください。Steamパスワードをリセットすると、すべてのトークンは自動的に再生成されます。長期間未使用のトークンは期限切れになりますが、いつでも再作成可能です。



## GSLTの作成
ゲームサーバーログイントークンを作成するには、Steamアカウントでサインインし、[Steamゲームサーバーアカウント管理](https://steamcommunity.com/dev/managegameservers)にアクセスします。


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

ログイン後、ページに表示されるフォームから新しいトークンを作成できます。**App ID**欄には、**Counter-Strike 2**のApp IDである`730`を入力してください。間違ったIDを入力するとトークンは機能しませんので注意しましょう。

**Memo**欄には任意の説明を入力できます。後でトークンの用途を識別しやすくするため、サーバー名や役割などを記入すると便利です。両方の値を入力したら、**Create**をクリックしてトークンを生成します。生成されたトークンは表示され、サーバーの起動設定で使用可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/rXyykRZKBYe95qY/download)

## サーバー設定

作成したログイントークンをサーバー設定に追加します。ゲームサーバーの管理画面を開き、**設定**セクションに移動してください。**GSL Token**とラベル付けされた欄にトークンを入力し、保存を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info 複数のCounter-Strike 2サーバー運用について
複数の**Counter-Strike 2**サーバーを運用する場合、それぞれのサーバーに対して個別のGSLTが必要です。<u>1つのGSLTで複数のゲームサーバーを運用することはできません。</u>
:::



## まとめ

GSLTの作成とサーバー設定への適用が完了しました。ご不明点やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせください！🙂

<InlineVoucher />