---
id: vserver-linux-rsync
title: "VPS: Backing up Linux servers with Rsync"
description: "Learn how to create efficient incremental backups with Rsync for local or remote data synchronization → Learn more now"
sidebar_label: Create Backups with Rsync
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Rsync:

Backups can be made with the tool Rsync. 
They can be copied on the local system itself to another directory/drive or to a remote system.  

## Copy data to another local directory or drive:

:::info
Attention: The first run can take much longer than the following runs, depending on the amount of data. This is because the first time Rsync syncs all data, from the second time on only changed data will be synchronized. 
:::
>So then a incremental backup is created.  

## Step 1

Rsync can be installed with the following command:

```
apt install rsync
```

After it has been installed, it can be used directly. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daily backup to a local directory/drive" label="Daily backup to a local directory/drive">
## Step 2

In this example, the Client folder under /home should be synchronized to the Backups folder under /home. 

This can be done with the following command: 

```
rsync -arz /home/Client /home/Backup
```
-a=Archiving, the attributes will be copied
<br/>
-r=Recursive, subfolders are synchronized too
<br/>
-z=Compression, depending on data quantity/data size is compressed 


The folder was synchronized successfully 

If a file etc. in the client folder is deleted now, it will remain in the backup folder. 
But since the files should always be 1:1 synchronous, the rsync command can easily be changed, this change will ensure that data etc. that are no longer present in the client folder are also removed from the backup folder. 

The modified command is: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archiving, the attributes will be copied
<br/>
-r=Recursive, subfolders are synchronized too
<br/>
-z=Compression, depending on data quantity/data size is compressed
<br/>
--delete= Deletes data that no longer exists in the source but still exists in the target

## Step 3

So that the command does not always have to be d manually, it can simply be placed in a cronjob. 
For example, a backup should be created daily at 3 am: 

Open crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

With the number 1 "nano" can be used as an editor.
With the number 2, "vim" can be used as an editor.  

After the file has been opened with e.g. Nano, a crontab can be generated and entered. 
A crontab can be created with this [Generator](https://crontab-generator.org/). 

The entered crontab then looks as follows: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Every day at 3 a.m. the command is executed and a backup is created. 

</TabItem>
<TabItem value="Daily backup to a remote system" label="Daily backup to a remote system">

## Step 4

In this example, the Client folder under /home should be synchronized to the Backups folder under on a remote system. The connection is to be made via SSH key, so that a backup can also be automated.  
>Important: Rsync must also be installed on the remote server. 
>```
>apt install rsync
>````

For example, the following command can be used to back up the data to the remote host (customization required): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archiving, the attributes will be copied
<br/>
-r=Recursive, subfolders are synchronized too
<br/>
-z=Compression, depending on data quantity/data size is compressed 
<br/>
-e=Specifies SSH port (default 22)
<br/>
Specify SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]
<br/>
Specify the directory to be backed up (/home/client/)= /[directory]
<br/>
RemoteHost(root@123.123.123.123:)= Login Name of the user on the RemoteHost and address: name@IP/Domain
<br/>
Target directory for the data on the RemoteHost(:/home/Backup/Home-Server1/)= :/[path to key]

The folder/files have been successfully synchronized/saved to the remote directory after executing the command.
  

If a file etc. is deleted in the client folder, it will remain in the backup folder on the remote host. 
But since the files should always be 1:1 synchronous, the rsync command can easily be modified to remove data etc. that is no longer present in the client folder from the backup folder on the remote host. 

The modified command is:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archiving, the attributes will be copied
<br/>
-r=Recursive, subfolders are synchronized too
<br/>
-z=Compression, depending on data quantity/data size is compressed 
<br/>
--delete= Deletes data that no longer exists in the source but still exists in the target
<br/>
-e=Specifies SSH port (default 22)
<br/>
Specify SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]
<br/>
Specify the directory to be backed up (/home/client/)= /[directory]
<br/>
RemoteHost(root@123.123.123.123:)= Login Name of the user on the RemoteHost and address: name@IP/Domain
<br/>
Target directory for the data on the RemoteHost(:/home/Backup/Home-Server1/)= :/[Path to target directory]

## Step 5

So that the command does not always have to be executed manually, it can simply be placed in a cronjob. 
For example, a backup should be created daily at 3 am: 

Open crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

With the number 1 "nano" can be used as an editor.
With the number 2, "vim" can be used as an editor.  

After the file has been opened with e.g. Nano, a crontab can be generated and entered. 
A crontab can be created with this [Generator](https://crontab-generator.org/). 

The entered crontab then looks as follows: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Every day at 3 a.m. the command is executed and a backup is created. 

</TabItem>
</Tabs>

<InlineVoucher />
