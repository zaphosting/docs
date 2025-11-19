---
id: dedicated-linux-rsync
title: "専用サーバー：RsyncでLinuxサーバーのバックアップを作成する方法"
description: "Rsyncを使って効率的なローカルおよびリモートバックアップを作成し、信頼できるデータ同期と保護を実現 → 今すぐ詳しくチェック"
sidebar_label: Rsyncでバックアップを作成
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

バックアップはRsyncというツールで作成できます。ローカルシステム内の別のディレクトリやドライブにコピーしたり、リモートシステムにコピーしたりできます。  

## データを別のローカルディレクトリやドライブにコピーする：

:::info
注意：初回の実行はデータ量によってはかなり時間がかかる場合があります。これは初回はすべてのデータを同期するためで、2回目以降は変更されたデータのみが同期されるためです。 
:::
>つまり、増分バックアップが作成されます。  

## ステップ1

Rsyncは以下のコマンドでインストールできます：

```
apt install rsync
```

インストール後はすぐに使用可能です。 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daily backup to a local directory/drive" label="ローカルディレクトリ/ドライブへの毎日のバックアップ">
## ステップ2

この例では、/homeの下にあるClientフォルダを/homeの下にあるBackupフォルダに同期します。 

以下のコマンドで実行できます： 

```
rsync -arz /home/Client /home/Backup
```
-a=アーカイブモード、属性もコピーされます
<br/>
-r=再帰的、サブフォルダも同期されます
<br/>
-z=圧縮、データ量やサイズに応じて圧縮されます


フォルダは正常に同期されました。 

もしClientフォルダ内のファイルなどを削除しても、Backupフォルダには残ったままです。  
しかし、ファイルは常に1:1で同期されるべきなので、rsyncコマンドを簡単に変更して、Clientフォルダに存在しなくなったデータもBackupフォルダから削除されるようにできます。 

変更後のコマンドは以下の通りです： 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=アーカイブモード、属性もコピーされます
<br/>
-r=再帰的、サブフォルダも同期されます
<br/>
-z=圧縮、データ量やサイズに応じて圧縮されます
<br/>
--delete= ソースに存在しなくなったデータをターゲットから削除します

## ステップ3

コマンドを毎回手動で実行しなくて済むように、cronジョブに登録しましょう。  
例えば、毎日午前3時にバックアップを作成する場合： 

crontab -eを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

数字の1で「nano」、数字の2で「vim」をエディタとして選べます。  

Nanoなどでファイルを開いたら、cronジョブを作成して入力します。  
cronジョブはこの[ジェネレーター](https://crontab-generator.org/)で簡単に作成可能です。 

入力例は以下の通りです： 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

毎日午前3時にコマンドが実行され、バックアップが作成されます。 

</TabItem>
<TabItem value="Daily backup to a remote system" label="リモートシステムへの毎日のバックアップ">

## ステップ4

この例では、/homeの下にあるClientフォルダをリモートシステムのBackupsフォルダに同期します。接続はSSHキーを使って行い、バックアップの自動化を可能にします。  
>重要：リモートサーバーにもRsyncがインストールされている必要があります。  
>```
>apt install rsync
>```

例えば、以下のコマンドでリモートホストにデータをバックアップできます（適宜カスタマイズしてください）： 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=アーカイブモード、属性もコピーされます
<br/>
-r=再帰的、サブフォルダも同期されます
<br/>
-z=圧縮、データ量やサイズに応じて圧縮されます
<br/>
-e=SSHポート指定（デフォルト22）
<br/>
SSHキーの指定（パス）("ssh -i /home/sshkey/keybackup")= ssh -i /[キーのパス]
<br/>
バックアップ対象ディレクトリの指定 (/home/client/)= /[ディレクトリ]
<br/>
リモートホスト(root@123.123.123.123:)= リモートホストのユーザー名とアドレス：name@IP/ドメイン
<br/>
リモートホスト上のデータ保存先(:/home/Backup/Home-Server1/)= :/[保存先パス]

コマンド実行後、フォルダやファイルはリモートディレクトリに正常に同期・保存されます。
  

Clientフォルダ内のファイルなどを削除しても、リモートホストのバックアップフォルダには残ったままです。  
しかし、ファイルは常に1:1で同期されるべきなので、rsyncコマンドを簡単に変更して、Clientフォルダに存在しなくなったデータもリモートホストのバックアップフォルダから削除されるようにできます。 

変更後のコマンドは以下の通りです：

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=アーカイブモード、属性もコピーされます
<br/>
-r=再帰的、サブフォルダも同期されます
<br/>
-z=圧縮、データ量やサイズに応じて圧縮されます
<br/>
--delete= ソースに存在しなくなったデータをターゲットから削除します
<br/>
-e=SSHポート指定（デフォルト22）
<br/>
SSHキーの指定（パス）("ssh -i /home/sshkey/keybackup")= ssh -i /[キーのパス]
<br/>
バックアップ対象ディレクトリの指定 (/home/client/)= /[ディレクトリ]
<br/>
リモートホスト(root@123.123.123.123:)= リモートホストのユーザー名とアドレス：name@IP/ドメイン
<br/>
リモートホスト上のデータ保存先(:/home/Backup/Home-Server1/)= :/[保存先パス]

## ステップ5

コマンドを毎回手動で実行しなくて済むように、cronジョブに登録しましょう。  
例えば、毎日午前3時にバックアップを作成する場合： 

crontab -eを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

数字の1で「nano」、数字の2で「vim」をエディタとして選べます。  

Nanoなどでファイルを開いたら、cronジョブを作成して入力します。  
cronジョブはこの[ジェネレーター](https://crontab-generator.org/)で簡単に作成可能です。 

入力例は以下の通りです： 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

毎日午前3時にコマンドが実行され、バックアップが作成されます。 

</TabItem>
</Tabs>
