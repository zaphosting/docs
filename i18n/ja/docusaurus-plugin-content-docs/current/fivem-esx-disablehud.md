---
id: fivem-esx-disablehud
title: "FiveM: HUDの無効化/有効化"
description: "ESXサーバーの設定を更新してHUD管理とサーバーのパフォーマンスを向上させる方法を理解しよう → 今すぐ詳しく学ぶ"
sidebar_label: HUDを無効化
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning アーカイブ済みガイド
このドキュメントはアーカイブされています。ドキュメントは、もはや関連性がない、誤っている、または最新でない場合にアーカイブされます。以下の理由でアーカイブされました：

**理由**: 実装方法が古いESXバージョン向けのものです。現在のESXバージョンでは構造が変わっているため、この方法は使用できません。 
::::



<InlineVoucher />

## 📑 Configを見つけて編集しよう

まずはConfigページを開いて、es_extendedを検索します。
CTRL + Fを押してes_extendedを検索すれば、
すぐに見つかるはずです。
ここを編集していきます。

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

次にConfig.EnableHUDを見てみましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

これをfalseに設定してファイルを保存します。

次にServer.cfgに移ります。
こちらもConfigページで見つけられます。
そこで再度STR + Fでes_を検索します。
es_uiを探して、その行を丸ごと削除します。
保存を忘れずに。

これでサーバーを再起動するだけで完了です。

<InlineVoucher />