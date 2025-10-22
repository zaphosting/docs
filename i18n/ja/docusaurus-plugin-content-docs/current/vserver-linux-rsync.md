---
id: vserver-linux-rsync
title: "VPS: RsyncでLinuxサーバーのバックアップを作成する方法"
description: "Rsyncを使った効率的な増分バックアップの作成方法を学ぼう。ローカルやリモートのデータ同期に最適 → 今すぐチェック"
sidebar_label: Rsyncでバックアップ作成
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Rsyncについて：

バックアップはRsyncというツールで作成できます。  
ローカルシステム内の別ディレクトリやドライブ、またはリモートシステムへコピー可能です。  

## データを別のローカルディレクトリやドライブにコピーする方法：

:::info
注意：初回の実行はデータ量によってかなり時間がかかる場合があります。これは初回は全データを同期するためで、2回目以降は変更されたデータのみ同期されるためです。 
:::
>つまり、増分バックアップが作成されます。  

## ステップ1

Rsyncは以下のコマンドでインストールできます：

```
apt install rsync
```

インストール後はすぐに使えます。 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ローカルディレクトリ/ドライブへの毎日のバックアップ" label="ローカルディレクトリ/ドライブへの毎日のバックアップ">
## ステップ2

この例では、/homeのClientフォルダを/homeのBackupフォルダに同期します。 

以下のコマンドで実行可能です： 

```
rsync -arz /home/Client /home/Backup
```
-a=アーカイブモード、属性もコピー
<br/>
-r=再帰的、サブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮 

フォルダは正常に同期されました。 

もしClientフォルダ内のファイルなどを削除しても、Backupフォルダには残ったままです。  
しかし、ファイルを常に1:1で同期したい場合は、rsyncコマンドを簡単に変更できます。  
この変更により、Clientフォルダに存在しなくなったデータもBackupフォルダから削除されます。 

変更後のコマンドは： 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=アーカイブモード、属性もコピー
<br/>
-r=再帰的、サブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮
<br/>
--delete=ソースに存在しなくなったデータをターゲットから削除

## ステップ3

コマンドを毎回手動で実行しなくて済むように、cronジョブに登録しましょう。  
例えば、毎日午前3時にバックアップを作成する場合： 

crontab -eを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

数字の1で「nano」エディタが使えます。  
数字の2で「vim」エディタが使えます。  

nanoなどでファイルを開いたら、cronジョブを作成して入力します。  
cronジョブはこの[ジェネレーター](https://crontab-generator.org/)で簡単に作成可能です。  

入力例は以下の通り： 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

毎日午前3時にコマンドが実行され、バックアップが作成されます。 

</TabItem>
<TabItem value="リモートシステムへの毎日のバックアップ" label="リモートシステムへの毎日のバックアップ">

## ステップ4

この例では、/homeのClientフォルダをリモートシステムのBackupsフォルダに同期します。  
接続はSSHキーを使って行い、バックアップの自動化を可能にします。  
>重要：リモートサーバーにもRsyncがインストールされている必要があります。  
>```
>apt install rsync
>```

例えば、以下のコマンドでリモートホストにデータをバックアップできます（適宜カスタマイズしてください）： 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=アーカイブモード、属性もコピー
<br/>
-r=再帰的、サブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮 
<br/>
-e=SSHポート指定（デフォルト22）
<br/>
SSHキー指定（パス）("ssh -i /home/sshkey/keybackup")= ssh -i /[キーのパス]
<br/>
バックアップ対象ディレクトリ指定 (/home/client/)= /[ディレクトリ]
<br/>
リモートホスト(root@123.123.123.123:)= リモートホストのユーザー名とアドレス： name@IP/ドメイン
<br/>
リモートホスト上のターゲットディレクトリ(:/home/Backup/Home-Server1/)= :/[パス]

コマンド実行後、フォルダやファイルはリモートディレクトリに正常に同期・保存されます。
  

Clientフォルダ内のファイルが削除されても、リモートホストのバックアップフォルダには残ります。  
しかし、ファイルを常に1:1で同期したい場合は、rsyncコマンドを簡単に変更して、Clientフォルダに存在しなくなったデータもリモートのバックアップフォルダから削除できます。 

変更後のコマンドは：

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=アーカイブモード、属性もコピー
<br/>
-r=再帰的、サブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮 
<br/>
--delete=ソースに存在しなくなったデータをターゲットから削除
<br/>
-e=SSHポート指定（デフォルト22）
<br/>
SSHキー指定（パス）("ssh -i /home/sshkey/keybackup")= ssh -i /[キーのパス]
<br/>
バックアップ対象ディレクトリ指定 (/home/client/)= /[ディレクトリ]
<br/>
リモートホスト(root@123.123.123.123:)= リモートホストのユーザー名とアドレス： name@IP/ドメイン
<br/>
リモートホスト上のターゲットディレクトリ(:/home/Backup/Home-Server1/)= :/[ターゲットディレクトリのパス]

## ステップ5

コマンドを毎回手動で実行しなくて済むように、cronジョブに登録しましょう。  
例えば、毎日午前3時にバックアップを作成する場合： 

crontab -eを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

数字の1で「nano」エディタが使えます。  
数字の2で「vim」エディタが使えます。  

nanoなどでファイルを開いたら、cronジョブを作成して入力します。  
cronジョブはこの[ジェネレーター](https://crontab-generator.org/)で簡単に作成可能です。  

入力例は以下の通り： 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

毎日午前3時にコマンドが実行され、バックアップが作成されます。 

</TabItem>
</Tabs>

<InlineVoucher />