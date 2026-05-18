---
id: vserver-linux-rsync
title: "VPS：使用 Rsync 备份 Linux 服务器"
description: "学习如何使用 Rsync 创建高效的增量备份，实现本地或远程数据同步 → 立即了解更多"
sidebar_label: 使用 Rsync 创建备份
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Rsync：

备份可以使用 Rsync 工具完成。  
数据可以复制到本地系统的另一个目录/驱动器，或者复制到远程系统。  

## 将数据复制到另一个本地目录或驱动器：

:::info
注意：首次运行可能比后续运行耗时更长，具体取决于数据量。因为首次 Rsync 会同步所有数据，从第二次开始只同步发生变化的数据。 
:::
>这样就创建了一个增量备份。  

## 第一步

可以用以下命令安装 Rsync：

```
apt install rsync
```

安装完成后即可直接使用。 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daily backup to a local directory/drive" label="每日备份到本地目录/驱动器">
## 第二步

本例中，/home 下的 Client 文件夹将同步到 /home 下的 Backup 文件夹。 

可以使用以下命令实现： 

```
rsync -arz /home/Client /home/Backup
```
-a=归档模式，复制文件属性
<br/>
-r=递归，子文件夹也会同步
<br/>
-z=压缩，根据数据量/大小进行压缩


文件夹已成功同步。 

如果现在删除了 client 文件夹中的某个文件，它仍会保留在备份文件夹中。  
但因为文件应始终保持 1:1 同步，可以简单修改 rsync 命令，确保 client 文件夹中不再存在的数据也会从备份文件夹中删除。  

修改后的命令是： 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=归档模式，复制文件属性
<br/>
-r=递归，子文件夹也会同步
<br/>
-z=压缩，根据数据量/大小进行压缩
<br/>
--delete= 删除源目录中不存在但目标目录中仍存在的数据

## 第三步

为了避免每次都手动执行命令，可以将其放入 cron 任务中。  
例如，设置每天凌晨 3 点执行备份： 

打开 crontab -e：

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

输入数字 1 使用 nano 编辑器。  
输入数字 2 使用 vim 编辑器。  

用 nano 打开文件后，可以生成并输入 crontab。  
你也可以用这个 [生成器](https://crontab-generator.org/) 来创建 crontab。  

输入的 crontab 如下所示： 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

每天凌晨 3 点执行该命令，自动创建备份。 

</TabItem>
<TabItem value="Daily backup to a remote system" label="每日备份到远程系统">

## 第四步

本例中，/home 下的 Client 文件夹将同步到远程系统上的 Backup 文件夹。连接通过 SSH 密钥完成，以便备份可以自动化。  
>重要提示：远程服务器也必须安装 Rsync。  
>```
>apt install rsync
>```

例如，可以使用以下命令将数据备份到远程主机（请根据实际情况修改）： 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=归档模式，复制文件属性
<br/>
-r=递归，子文件夹也会同步
<br/>
-z=压缩，根据数据量/大小进行压缩
<br/>
-e=指定 SSH 端口（默认 22）
<br/>
指定 SSH 密钥路径 ("ssh -i /home/sshkey/keybackup")= ssh -i /[密钥路径]
<br/>
指定备份目录 (/home/client/)= /[目录]
<br/>
远程主机(root@123.123.123.123:)= 远程主机的登录用户名和地址：用户名@IP/域名
<br/>
远程主机上的目标目录(:/home/Backup/Home-Server1/)= :/[目标路径]

执行命令后，文件夹/文件已成功同步/保存到远程目录。  

如果 client 文件夹中的文件被删除，它仍会保留在远程主机的备份文件夹中。  
但因为文件应始终保持 1:1 同步，可以简单修改 rsync 命令，确保 client 文件夹中不再存在的数据也会从远程备份文件夹中删除。  

修改后的命令是：

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=归档模式，复制文件属性
<br/>
-r=递归，子文件夹也会同步
<br/>
-z=压缩，根据数据量/大小进行压缩
<br/>
--delete= 删除源目录中不存在但目标目录中仍存在的数据
<br/>
-e=指定 SSH 端口（默认 22）
<br/>
指定 SSH 密钥路径 ("ssh -i /home/sshkey/keybackup")= ssh -i /[密钥路径]
<br/>
指定备份目录 (/home/client/)= /[目录]
<br/>
远程主机(root@123.123.123.123:)= 远程主机的登录用户名和地址：用户名@IP/域名
<br/>
远程主机上的目标目录(:/home/Backup/Home-Server1/)= :/[目标目录路径]

## 第五步

为了避免每次都手动执行命令，可以将其放入 cron 任务中。  
例如，设置每天凌晨 3 点执行备份： 

打开 crontab -e：

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

输入数字 1 使用 nano 编辑器。  
输入数字 2 使用 vim 编辑器。  

用 nano 打开文件后，可以生成并输入 crontab。  
你也可以用这个 [生成器](https://crontab-generator.org/) 来创建 crontab。  

输入的 crontab 如下所示： 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

每天凌晨 3 点执行该命令，自动创建备份。 

</TabItem>
</Tabs>

<InlineVoucher />