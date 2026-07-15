---
id: palworld-change-server-type
title: "Palworld: サーバータイプの変更"
description: "PalworldのサーバータイプをLinuxとWindows間で変更し、正しい設定ファイルパスを更新して、mod互換性のために正しく適用する方法を学びましょう。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: サーバータイプの変更
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldのゲームサーバーは、ホスティング環境やmodの要件に応じて、主にLinuxまたはWindowsのサーバータイプで動作します。このガイドでは、ZAP-Hostingのインターフェースでサーバータイプを変更し、正しい設定ファイルのパスを特定して、変更を正しく適用する方法を説明します。



## 準備

開始する前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーにアクセスでき、サーバーの停止と再起動の権限があることを確認してください。

:::info サーバータイプ変更に関する重要な情報
LinuxからWindows、またはWindowsからLinuxへのサーバータイプ変更は、ファイルパスやmodの互換性、既存の設定ファイルの場所に影響を与える可能性があります。Windowsサーバータイプは、特定のUE4SSベースのmodセットアップでよく必要とされます。
:::

:::caution 再インストールの必要性を確認してください
Palworldのサービス展開方法によっては、サーバータイプの変更に再インストールやソフトウェアの再展開が必要になる場合があります。現在のインターフェースに該当オプションがない場合は、変更を進める前にサポートにお問い合わせください。
:::

## サーバータイプ変更で何が変わるのか理解する

サーバータイプを変更しても、通常はPalworldのゲームプレイ設定内の値が変わるわけではありません。主な変更点は、基盤となるサーバーソフトウェア環境であり、それに伴いアクティブな設定ファイルの場所も変わります。

Palworldの主な設定ファイルは通常以下です：

- `PalWorldSettings.ini`

このファイルが格納されるフォルダは、選択したサーバータイプによって異なります。

| サーバータイプ | 設定フォルダパス | メイン設定ファイル |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note なぜ重要なのか
Linux用の設定ファイルを編集しても、現在サーバーがWindowsタイプで動作している場合、サーバーはWindows用のパスから設定を読み込むため、変更が反映されません。
:::

## サーバーを停止する

サーバータイプを変更する前に、ファイルの競合や不完全な変更を避けるためにサーバーを停止してください。

1. ZAP-Hostingのゲームサーバーウェブインターフェースにログインします。
2. Palworldサーバーの管理画面を開きます。
3. サーバー制御オプションからサーバーを停止します。

:::tip 編集前のバックアップ推奨
modを使用している場合や手動で設定ファイルを編集している場合は、サーバータイプ変更前にバックアップを作成することをおすすめします。
:::

## ZAP-Hostingインターフェースでサーバータイプを変更する

サーバータイプの変更は、通常`PalWorldSettings.ini`内の行を編集するのではなく、ZAP-Hostingの製品またはソフトウェア設定から行います。

1. Palworldサーバーの管理画面で、サーバーソフトウェアまたはゲーム設定のエリアを探します。
2. インストールされているサーバータイプやソフトウェアのバリアントを制御するオプションを見つけます。
3. 目的の設定に応じて、`Linux`から`Windows`、または`Windows`から`Linux`に変更します。
4. 変更を保存します。



:::info サーバータイプオプションが見つからない場合
この設定の正確なラベルや場所は、ZAP-Hostingのインターフェースや製品の世代によって異なる場合があります。サーバータイプの選択肢が表示されない場合は、再インストールが必要か、サポートの助けが必要な可能性があります。
:::

## 正しい設定ファイルを編集する

サーバータイプを変更した後は、正しいフォルダ内のアクティブな設定ファイルを編集しているか確認してください。

### 設定セクションを開く

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開きます。
2. `Configs`を選択します。
3. 選択したサーバータイプに対応するフォルダに移動します。

以下のいずれかのパスを使用します：

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

その後、以下を開きます：

- `PalWorldSettings.ini`

### 設定の確認または再適用

以前に別のサーバータイプで設定を編集していた場合、その変更は古いフォルダにのみ存在する可能性があります。両方の`PalWorldSettings.ini`を比較し、必要な値を現在アクティブなファイルに再適用してください。

| 確認項目 | 理由 |
| --- | --- |
| 既存のカスタム設定 | 以前のサーバータイプのフォルダにのみ存在する可能性があるため |
| mod関連の設定 | WindowsサーバータイプはUE4SS modサポートでよく使われるため |
| ゲームプレイ設定値 | サーバーはアクティブなOS固有のパスからのみ設定を読み込むため |

:::caution 両方のファイルが同期されているとは限りません
LinuxとWindowsの設定フォルダは別々です。サーバータイプを変更しても、カスタム設定が自動的に両方の場所にコピーされるわけではありません。
:::

## 設定エントリを確認する

サーバータイプ自体は通常`PalWorldSettings.ini`の中の行で制御されませんが、変更後はアクティブな設定ファイルに期待する設定が含まれているか確認してください。

典型的な`PalWorldSettings.ini`の構造は以下のようになります：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

以下のプレースホルダーを実際の値に置き換えてください：

- `[your_server_name]`：実際のサーバー名
- `[your_admin_password]`：管理者パスワード
- `[your_server_password]`：参加パスワード（使用している場合）
- `[your_server_ip]`：公開サーバーのIPアドレス（設定で必要な場合）

:::note ファイル内に特別なコマンドは不要です
LinuxからWindows、またはその逆にサーバータイプを切り替える`PalWorldSettings.ini`のエントリは知られていません。この変更はホスティングインターフェースのサーバー環境で管理されます。
:::

## 変更を適用する

サーバータイプを変更し、正しい設定ファイルを確認したら、新しい設定を適用します。

### サーバーを再起動する

変更を保存した後、ZAP-Hostingのウェブインターフェースからサーバーを再起動してください。

多くの場合、サーバーソフトウェアタイプが正常に切り替わっていれば、通常の再起動で十分です。

### インターフェースで再インストールが必要な場合

一部の展開では、ソフトウェアタイプ変更後に再インストールや再展開が必要な場合があります。該当オプションが表示されたら、指示に従い、以下を確認してください：

- 正しいサーバータイプが有効になっている
- 正しい設定パスが使用されている
- `PalWorldSettings.ini`の値が保持されている

:::danger 再インストールはファイルを上書きする可能性があります
再インストールが必要な場合、カスタムファイルやmodはバックアップしていなければ削除される可能性があります。必ずセーブデータ、mod、設定ファイルを確認してから再インストールを実行してください。
:::

## 新しいサーバータイプが有効か確認する

サーバーが再起動したら、変更が成功したか確認します。

### 設定パスで確認する

再度`Configs`を開き、アクティブなファイルパスが選択したサーバータイプに合っているか確認します：

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### mod互換性を確認する

Windowsに変更したのがUE4SS modのためであれば、modファイルや関連セットアップがWindowsサーバー環境に合っているか確認してください。

### サーバーの動作を確認する

サーバーが正常に起動し、期待した設定が正しく読み込まれているかチェックします。

| 確認ポイント | 期待される結果 |
| --- | --- |
| サーバーが正常に起動する | タイプ変更後に起動失敗がない |
| 正しい設定パス | LinuxまたはWindowsサーバータイプに一致 |
| カスタム設定が読み込まれる | 編集した`PalWorldSettings.ini`が使用される |
| modサポート | Windowsベースのmod要件が使用可能（該当する場合） |

## トラブルシューティング

### サーバータイプのオプションが見当たらない

サーバータイプ変更の設定が見つからない場合、現在の製品インターフェースで直接変更できない可能性があります。その場合はZAP-Hostingサポートに連絡し、PalworldサービスがLinuxとWindows間で切り替え可能か確認してください。

### 変更後に設定が反映されない

これは通常、誤った設定パスを編集した場合に起こります。現在のサーバータイプに応じて以下のどちらを更新したか確認してください：

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`
- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

### modがまだ動作しない

Windowsサーバータイプに切り替えただけではmodセットアップが完了しない場合があります。modによっては追加のファイルやローダー、手動インストール手順が必要です。

## 結論

おめでとうございます。Palworldのサーバータイプを正常に変更できました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂