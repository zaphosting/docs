---
id: scp-colored-servername
title: "SCP Secret Laboratory: カラー付きサーバー名"
description: "サーバー名をカラー文字でカスタマイズして、視認性とスタイルをアップ → 今すぐ詳しくチェック"
sidebar_label: カラー付きサーバー名
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
サーバーをパブリックサーバーリストに表示するには、Pastebin IDの設定が必要です。詳しくは当社のガイド[Pastebin ID](scp-pastebin.md)をご覧ください。

変更を反映させるにはサーバーをオフにする必要があります。
:::

<InlineVoucher />

サーバー設定を開いて、「SCP Servername」が空欄か確認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

何も入力されていないことを確認したら、設定の一つ下のメニューにある「Configs」タブに移動します。

青いボタンを押して config_gameplay.txt を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

当社のコンフィグエディターが開きました。  
"server_name" でサーバー名を変更できます。  
[RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) を使えば、複数のカラーを使い分けることも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

この例では、「Green Text」「Blue Text」「Red Text」をそれぞれ対応する色で表示したいと思います。

そのためには `<color="COLOR">Your Text</color>` タグを使います。  
使える色は[こちら](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html)で確認できます。  
サイズなど他の属性を変えることも可能です。  
:::info
タグ内の色は必ずダブルクォーテーション " " で囲む必要があることを忘れないでください。上記の例のように。
:::

カスタマイズが終わったら保存してください。

:::info
サーバーを起動すると、サーバー名がカラー表示されます。
:::

<InlineVoucher />