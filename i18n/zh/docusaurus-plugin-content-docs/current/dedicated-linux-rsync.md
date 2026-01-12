---
id: dedicated-linux-rsync
title: "独服备份：用 Rsync 备份 Linux 服务器"
description: "了解如何用 Rsync 创建高效的本地和远程备份，实现可靠的数据同步与保护 → 立即了解"
sidebar_label: 用 Rsync 创建备份
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

备份可以用 Rsync 工具完成。数据可以复制到本地系统的另一个目录/硬盘，或者复制到远程系统。  

## 复制数据到另一个本地目录或硬盘：

:::info
注意：首次运行可能比后续运行耗时更长，具体取决于数据量。因为 Rsync 第一次会同步所有数据，之后只同步变更的数据。 
:::
>这样就实现了增量备份。  

## 第一步

可以用以下命令安装 Rsync：

```
apt install rsync
```

安装完成后即可直接使用。 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daily backup to a local directory/drive" label="每日备份到本地目录/硬盘">
## 第二步

本例中，/home 下的 Client 文件夹将同步到 /home 下的 Backup 文件夹。 

命令如下： 

```
rsync -arz /home/Client /home/Backup
```
-a=归档模式，保留文件属性
<br/>
-r=递归，同步子文件夹
<br/>
-z=压缩，根据数据量/大小进行压缩


文件夹同步成功了

如果现在删除 Client 文件夹中的某个文件，它仍会保留在备份文件夹中。  
但因为文件应保持 1:1 同步，可以简单修改 rsync 命令，确保 Client 文件夹中不存在的数据也会从备份文件夹中删除。  

修改后的命令是： 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=归档模式，保留文件属性
<br/>
-r=递归，同步子文件夹
<br/>
-z=压缩，根据数据量/大小进行压缩
<br/>
--delete= 删除目标中源不存在的数据

## 第三步

为了不每次都手动执行命令，可以把它放进 cron 任务。  
比如每天凌晨 3 点自动备份： 

打开 crontab -e：

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

数字 1 代表用 nano 编辑器。
数字 2 代表用 vim 编辑器。  

用 nano 打开后，可以生成并输入 crontab。  
你也可以用这个 [生成器](https://crontab-generator.org/) 来创建 crontab。  

输入的 crontab 如下： 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

每天凌晨 3 点执行命令，自动创建备份。 

</TabItem>
<TabItem value="Daily backup to a remote system" label="每日备份到远程系统">

## 第四步

本例中，/home 下的 Client 文件夹将同步到远程系统的 Backup 文件夹。连接通过 SSH 密钥实现，方便自动化备份。  
>重要：远程服务器也必须安装 Rsync。  
>```
>apt install rsync
>```

例如，以下命令可将数据备份到远程主机（请根据实际情况修改）： 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=归档模式，保留文件属性
<br/>
-r=递归，同步子文件夹
<br/>
-z=压缩，根据数据量/大小进行压缩
<br/>
-e=指定 SSH 端口（默认 22）
<br/>
指定 SSH 密钥路径 ("ssh -i /home/sshkey/keybackup")= ssh -i /[密钥路径]
<br/>
指定备份目录 (/home/client/)= /[目录]
<br/>
远程主机 (root@123.123.123.123:)= 远程主机用户名和地址：用户名@IP/域名
<br/>
远程目标目录 (:/home/Backup/Home-Server1/)= :/[目标路径]

执行命令后，文件夹/文件已成功同步保存到远程目录。
  

如果 Client 文件夹中删除了某个文件，它仍会保留在远程备份文件夹中。  
但因为文件应保持 1:1 同步，可以简单修改 rsync 命令，确保远程备份中不存在于 Client 文件夹的数据也被删除。  

修改后的命令是：

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=归档模式，保留文件属性
<br/>
-r=递归，同步子文件夹
<br/>
-z=压缩，根据数据量/大小进行压缩
<br/>
--delete= 删除目标中源不存在的数据
<br/>
-e=指定 SSH 端口（默认 22）
<br/>
指定 SSH 密钥路径 ("ssh -i /home/sshkey/keybackup")= ssh -i /[密钥路径]
<br/>
指定备份目录 (/home/client/)= /[目录]
<br/>
远程主机 (root@123.123.123.123:)= 远程主机用户名和地址：用户名@IP/域名
<br/>
远程目标目录 (:/home/Backup/Home-Server1/)= :/[目标目录路径]

## 第五步

为了不每次都手动执行命令，可以把它放进 cron 任务。  
比如每天凌晨 3 点自动备份： 

打开 crontab -e：

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

数字 1 代表用 nano 编辑器。
数字 2 代表用 vim 编辑器。  

用 nano 打开后，可以生成并输入 crontab。  
你也可以用这个 [生成器](https://crontab-generator.org/) 来创建 crontab。  

输入的 crontab 如下： 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

每天凌晨 3 点执行命令，自动创建备份。 

</TabItem>
</Tabs>