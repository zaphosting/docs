---
id: humanitz-change-save-interval
title: "HumanitZ：セーブ間隔の変更"
description: "HumanitZサーバーの自動ワールドセーブ間隔を調整する方法 → 今すぐチェック"
sidebar_label: "セーブ間隔の変更"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

セーブ間隔は、HumanitZゲームサーバーがワールドの状態を自動で保存する頻度を決めます。定期的なセーブはクラッシュや予期せぬシャットダウン時のデータ損失を防ぎますが、間隔を長くするとディスクの動作が少し減る場合があります。

<InlineVoucher />

## 設定方法

ワールドセーブの間隔は `GameServerSettings.ini` ファイルで管理されています。サーバーの管理パネルの **Configs** からアクセス可能です。ファイル内で以下のパラメータを探してください：

```
;サーバーがワールドを保存する間隔（秒単位）。0に設定すると自動セーブが無効になります。
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – サーバーは300秒（5分）ごとにワールドを保存します。  
- `SaveIntervalSec=0` – 自動ワールドセーブを無効にします。  

値は**秒単位**で指定します。例：

- `600` = 10分
- `900` = 15分

間隔を10分にしたい場合は：

```
SaveIntervalSec=600
```

ファイルを編集したら保存し、設定を反映させるためにサーバーを再起動してください。

## まとめ

おめでとうございます！`GameServerSettings.ini` の `SaveIntervalSec` の値を変更することで、HumanitZゲームサーバーの自動ワールドセーブ間隔を無事に調整できました。

ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />