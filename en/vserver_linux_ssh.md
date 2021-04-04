---
id: vserver_linux_ssh
title: Initial access (SSH)
sidebar_label: Initial access (SSH)
---

### 🖥 SSH-Connection

Linux server products do not include a graphical management interface by default, which is why the connection and management is done via an SSH client (console). There is a wide range of SSH clients available. Below is an overview of the known / often used SSH clients. 



| SSH-Client | Supported operating systems | Open-Source |                           Download                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     Yes      |               [Klick](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     Yes      |        [Klick](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     Yes      |           [Klick](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |    No     | [Klick](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     Yes      |           [Klick](https://mremoteng.org/download)            |



## 🏘 IP address & access

In the following, the connection using the Putty SSH client is explained. In the configuration window, the IP address of the server and the SSH port 22 are entered for the **hostname**. Afterwards, the connection establishment can be started via the **Open** button.



![](https://screensaver01.zap-hosting.com/index.php/s/HDpcXZETwnfZAo7/preview)



> By default, SSH login via password is disabled. If you want to log in with the password, you have to activate the option under **Access & Security** first.



![Putty Configurationj](https://screensaver01.zap-hosting.com/index.php/s/TmQ9MyqR8bxDX2g/preview)



> When connecting to the server for the first time, a security message from Putty appears, informing you that no host key has been cached in the registry yet. This can be confirmed with **Yes** if you do not want to continue to receive this message every time. 

 

This opens the SSH console and prompts for a **user name** and **password**. The user name is "**root**". The password can be found in the web interface under "**Access & Security**" or can be set there.



![](https://screensaver01.zap-hosting.com/index.php/s/f7yC7ELYM5kA2on/preview)





## 🔧 Administration via SSH

For optimal use of the SSH client, it is essential to know the basic commands. In the following you will find a rough overview with all relevant commands and their meaning:


### 👩 Account Management

| Command  |                Description                |            Syntax            |
| :-----: | :----------------------------------------: | :--------------------------: |
| useradd |          Creating a New User          | useradd <options> <username> |
| usermod |      Edit Existing User       | usermod <options> <username> |
| userdel |        Remove existing user        | userdel <options> <username> |
| passwd  | Change password of an existing user |      passwd <username>       |



### 🖥️ System Management

| Befehl  |                         Description                         | Syntax                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | Overview of workload, processes and other information (similar to the Windows Task Manager)  | top                                          |
|   df    |            Displaying the use of storage tanks (Patition)            | df -h                                        |
|   du    |          Displaying the storage tank consumption (directory)           | du -sh *                                     |
|  free   | Memory usage of the system. Divided into RAM and SWAP space. | free                                         |
|  kill   |  Terminates the process with the transferred process ID (PID)   | kill <ID>                                    |
| killall |        Terminates all processes with the given name        | killall <name>                               |
|   mv    |       Move files or directory to a different location        | mv sourcepath newPath                        |
|  mkdir  |                    Create a new directory                    | mkdir directoryname                          |
| service |    Start, stop, restart service and check status     | service DienstName start/stop/restart/status |
| reboot  |                      Restarting the system                        | reboot                                       |



### 📁 File management

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



### 🌐 Network administration

| Command | Description | Syntax
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | Query and configure network interfaces | ip [OPTIONS] OBJECT [COMMAND [ARGUMENTS]] |
| netstat | Query status of network interfaces | netstat [OPTIONS] |
| nslookup | Query DNS information | nslookup |
| ping | Check network connection | ping [OPTIONS] DESTINATION

