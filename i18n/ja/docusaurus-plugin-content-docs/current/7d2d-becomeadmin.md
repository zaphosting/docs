---
id: 7d2d-becomeadmin
title: "7 Days to Die: 7 Days to Dieで管理者になる方法"
description: "管理者権限の割り当てと管理方法を知って、サーバーを完全にコントロール＆カスタム管理者ロールを作成しよう → 今すぐチェック"
sidebar_label: 管理者になる
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されているすべてのオプションや機能を直接使うことができます。ここでは、あなたのゲームサーバーに管理者権限を割り当てるために必要な手順を詳しく説明します。  
<InlineVoucher />

## 設定方法
管理者の追加は、ウェブインターフェースの「Configs」内にある**serveradmin.xml**設定ファイルで行います。

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

SteamID64は、Steamプロフィールを開いて画面内のどこかで右クリックし、**Steam URLをコピー**を選択すると取得できます。

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

その後、以下のいずれかのサイトにアクセスして、コピーしたプロフィールのURLを貼り付けてください：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

これでアカウントの一般情報とSteam IDが表示されます。ここで必要なのはSteamID64だけです。SteamID64は``<admins>...</admins>``タグ内に指定します。例は以下の通りです：

```
 <users>
    <user steamID="76561198021925107" name="Hint on who this user is" permission_level="0" />
  </users>
```

:::danger  管理者レコードが認識されない？ 
行の先頭と末尾にあるコメント文字 `<!--` と `-->` を必ず削除してください。コメントのままだと反映されません。これらの文字を取り除いて行を有効化しましょう。
:::

ゲームでは管理者権限に対して複数の権限レベルを設定可能です。つまり、異なる権限を持つ管理者グループを作成できます。権限レベルは``permission_level``オプションで設定し、0から1000の範囲で指定します。設定に応じて管理者は割り当てられた権限にアクセスできます。これで管理者権限の割り当ては完了です。 

## 権限設定

すべての管理者コマンドの権限は``permissions``タグ内で定義します。管理者追加時と同様に``permission_level``を調整してください。例は以下の通りです：

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

権限レベルは0から1000の値で、プレイヤーが持つ権限を決定します。1000が最低権限（権限なし）、0が最高権限（フル管理者権限）です。必要に応じて適切に調整してください。 

## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />