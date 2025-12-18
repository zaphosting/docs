---
id: dedicated-linux-ssh
title: "Dedicated Server: Initial access with SSH"
description: "Explore popular SSH clients for managing Linux servers without a GUI and understand how to connect securely via SSH → Learn more now"
sidebar_label: Initial access (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linux server products do not include a graphical management interface by default, which is why the connection and management is done via an SSH client (console). There is a wide range of SSH clients available. Below is an overview of the known / often used SSH clients. 



| SSH-Client | Supported operating systems | Open-Source |                           Download                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     Yes      |               [Click](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     Yes      |        [Click](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     Yes      |           [Click](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |    No     | [Click](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     Yes      |           [Click](https://mremoteng.org/download)            |




## IP address & access

In the following, the connection using the Putty SSH client is explained. In the configuration window, the IP address of the server and the SSH port 22 are entered for the **hostname**. Afterwards, the connection establishment can be started via the **Open** button.



![](https://screensaver01.zap-hosting.com/index.php/s/Jp2Wn3s9kQG5t55/preview)



:::info
SSH login via password is disabled by default. If you want to log in with the password, you have to activate the option under **Access & Security** first.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/4fSRwzaq8QQLZ3o/preview)



:::info
When connecting to the server for the first time, a security message from Putty appears, informing you that no host key has been cached in the registry yet. This can be confirmed with **Yes** if you do not want to continue to receive this message every time. 
:::

 

This opens the SSH console and prompts for a **user name** and **password**. The user name is "**root**". The password can be found in the web interface under "**Access & Security**" or can be set there.



![](https://screensaver01.zap-hosting.com/index.php/s/pG4dTmCGFyzK3dY/preview)





## Administration via SSH

For optimal use of the SSH client, it is essential to know the basic commands. In the following you will find a rough overview with all relevant commands and their meaning:


### Account Management

| Command  |                Description                |            Syntax            |
| :-----: | :----------------------------------------: | :--------------------------: |
| useradd |          Creating a New User          | useradd [options] [options] |
| usermod |      Edit Existing User       | usermod [options] [options] |
| userdel |        Remove existing user        | userdel [options] [options] |
| passwd  | Change password of an existing user |      passwd [options]       |



### System Management

| Befehl  |                         Description                         | Syntax                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | Overview of workload, processes and other information (similar to the Windows Task Manager)  | top                                          |
|   df    |            Displaying the use of storage tanks (Patition)            | df -h                                        |
|   du    |          Displaying the storage tank consumption (directory)           | du -sh *                                     |
|  free   | Memory usage of the system. Divided into RAM and SWAP space. | free                                         |
|  kill   |  Terminates the process with the transferred process ID (PID)   | kill [ID]                                    |
| killall |        Terminates all processes with the given name        | killall [name]                               |
|   mv    |       Move files or directory to a different location        | mv sourcepath newPath                        |
|  mkdir  |                    Create a new directory                    | mkdir directoryname                          |
| service |    Start, stop, restart service and check status     | service DienstName start/stop/restart/status |
| reboot  |                      Restarting the system                        | reboot                                       |



### File management

| Command | Description | Syntax
| ------ | ------------------------------------------ | ---------------------------------------- |
| ls | Show files and folders in directory | ls |
| cd | change directory | cd [OPTION] DIRECTORY |
| cp | Copy files or directories | cp [OPTIONS] SOURCE DESTINATION |
| mv | move file or directory | mv [OPTION] SOURCE DESTINATION |
| mkdir | Create new directory | mkdir [OPTION] DIRECTORY NAME |
| rmdir | Remove existing directory | rmdir [OPTION] DIRECTORY
| find | browse file system | find [OPTIONS] [DIRECTORY] [ACTIONS] |
| grep | Search text files | grep [OPTIONS] SEARCH PATTERN [FILE(S)] |



### Network administration

| Command | Description | Syntax
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | Query and configure network interfaces | ip [OPTIONS] OBJECT [COMMAND [ARGUMENTS]] |
| netstat | Query status of network interfaces | netstat [OPTIONS] |
| nslookup | Query DNS information | nslookup |
| ping | Check network connection | ping [OPTIONS] DESTINATION



