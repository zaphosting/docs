---
id: dedicated-linux-rsync
title: "専用サーバー：RsyncでLinuxサーバーのバックアップを作成する方法"
description: "Rsyncを使って効率的なローカル＆リモートバックアップを作成し、信頼できるデータ同期と保護を実現 → 今すぐ詳しくチェック"
sidebar_label: Rsyncでバックアップを作成
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

バックアップはRsyncというツールで作成できます。ローカルの別ディレクトリやドライブ、またはリモートシステムにコピー可能です。  

<InlineVoucher />

## データを別のローカルディレクトリやドライブにコピーする方法：

:::info
注意：初回の実行はデータ量によってはかなり時間がかかる場合があります。これは初回は全データを同期するためで、2回目以降は変更されたデータのみ同期されるためです。 
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
-r=再帰的にサブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮 

フォルダは正常に同期されました。 

もしClientフォルダ内のファイル等を削除しても、Backupフォルダには残ったままです。  
しかしファイルは常に1:1で同期したい場合、rsyncコマンドを少し変えるだけで、Clientフォルダに存在しなくなったデータもBackupフォルダから削除できます。 

変更後のコマンドは： 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=アーカイブモード、属性もコピー
<br/>
-r=再帰的にサブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮
<br/>
--delete= ソースに存在しなくなったデータをターゲットから削除

## ステップ3

コマンドを毎回手動で実行しなくて済むように、cronジョブに登録しましょう。  
例えば、毎日午前3時にバックアップを作成する場合： 

crontab -eを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

数字の1で「nano」、2で「vim」をエディタとして選べます。  

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

この例では、/homeのClientフォルダをリモートシステムのBackupフォルダに同期します。接続はSSHキーを使い、自動化できるようにします。  
>重要：リモートサーバーにもRsyncがインストールされている必要があります。 
>```
>apt install rsync
>```

例えば、以下のコマンドでリモートホストにバックアップ可能です（適宜カスタマイズしてください）： 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=アーカイブモード、属性もコピー
<br/>
-r=再帰的にサブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮 
<br/>
-e=SSHポート指定（デフォルト22）
<br/>
SSHキー指定（パス）("ssh -i /home/sshkey/keybackup")= ssh -i /[キーのパス]
<br/>
バックアップ対象ディレクトリ指定 (/home/client/)= /[ディレクトリ]
<br/>
リモートホスト(root@123.123.123.123:)= リモートホストのユーザー名とアドレス：name@IP/ドメイン
<br/>
リモートホスト上の保存先ディレクトリ(:/home/Backup/Home-Server1/)= :/[保存先パス]

コマンド実行後、フォルダやファイルはリモートディレクトリに正常に同期・保存されます。
  

Clientフォルダ内のファイル等を削除しても、リモートホストのバックアップフォルダには残ります。  
しかしファイルは常に1:1で同期したい場合、rsyncコマンドを少し変えるだけで、Clientフォルダに存在しなくなったデータもリモートホストのバックアップフォルダから削除できます。 

変更後のコマンドは：

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=アーカイブモード、属性もコピー
<br/>
-r=再帰的にサブフォルダも同期
<br/>
-z=圧縮、データ量やサイズに応じて圧縮 
<br/>
--delete= ソースに存在しなくなったデータをターゲットから削除
<br/>
-e=SSHポート指定（デフォルト22）
<br/>
SSHキー指定（パス）("ssh -i /home/sshkey/keybackup")= ssh -i /[キーのパス]
<br/>
バックアップ対象ディレクトリ指定 (/home/client/)= /[ディレクトリ]
<br/>
リモートホスト(root@123.123.123.123:)= リモートホストのユーザー名とアドレス：name@IP/ドメイン
<br/>
リモートホスト上の保存先ディレクトリ(:/home/Backup/Home-Server1/)= :/[保存先ディレクトリのパス]

## ステップ5

コマンドを毎回手動で実行しなくて済むように、cronジョブに登録しましょう。  
例えば、毎日午前3時にバックアップを作成する場合： 

crontab -eを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

数字の1で「nano」、2で「vim」をエディタとして選べます。  

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