---
id: vserver-linux-security-tips
title: "VPS: Linux Security Tips"
description: "Discover how to enhance your Linux server security with essential tips to prevent unauthorized access and protect your services → Learn more now"
sidebar_label: Security Tips
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

This guide contains some tips and advice on how to make your Linux server more secure. Especially since (virtual) servers must be accessed externally, basic protection against unwanted access is definitely recommended and should not be neglected. 

:::info
Please note that these instructions are not exhaustive and that more detailed information can be found in other sections of the ZAP documentation. (e.g. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
The easiest way to protect your server is always the same, regardless of the server: Use secure passwords, update your services regularly and generally pay attention to which services you want to install and which guides you follow.
:::

<InlineVoucher />

## Securing SSH 

SSH (Secure Shell) is a service that allows you to remotely access your server's console to execute commands on the server. Here you can see how to set up SSH on your server: [Initial access (SSH)](vserver-linux-ssh.md)

By default, a password-based login is used for SSH. However, this has the major disadvantage that authentication can be bypassed relatively easily using a brute force attack, especially if you use a password that is too simple for your SSH login. So if you decide to use the password solution, please use a **secure** password.

To protect your server even better against unwanted SSH access, you should enable authentication exclusively via SSH keys and deactivate the password login. Take a look at the [SSH Key](vserver-linux-sshkey.md) guide, which explains how to generate and add SSH keys.

## Port configuration of your services

| Service| Port |
|--------|------|
| SSH    | 22   |
| FTP    | 21   |
| Mail   | 25   |
| DNS    | 53   |
| HTTP   | 80   |
| HTTPS  | 443  |

Services such as SSH or FTP always use the same ports by default (some of which are listed in the table above). If an external malicious actor wants to brute force your server's SSH service, they first need to know which port is used to access SSH. If you do not configure these ports differently, then ports 22 and 21 are usually a hit for executing commands directly on the server or accessing files via FTP.

To prevent this, we recommend setting up the ports of the standard services as user-defined. In the next part of this guide you can find out how:

:::danger
Your desired port must be between 1024 and 65536 and should not be a port that is already in use!
:::
You can use `cat /etc/services` to display some standard ports to prevent you from selecting a port that is already in use.

### SSH port

To change the SSH port, you must adjust the configuration file. This is normally located in `/etc/ssh/sshd_config` by default, but if it's not located there you can use the following command to find it.
```
find / -name "sshd_config" 2>/dev/null
```

Now open the file using nano (as root or with *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Add your desired port after `Port`. If `Port` is commented out (i.e. `#Port 22`), then remove the "#" and replace the 22 with your desired port. Now you have to save the file (under Nano with Ctrl + o) and close it (Nano: Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

The SSH service must now be restarted for the changes to take effect.
```
#Under Ubuntu/Debian/CentOS e.g.
sudo systemctl restart sshd
```

### FTP port

If you have installed an FTP service such as **proFTPd**, the port can also be simply changed by editing the config file. Thus the procedure is similar to the SSH service.

Find the configuration file `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

The file is normally located in `/etc/proftpd.conf` (CentOS) or `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Now open the file using nano and remove the "#" before `port` and enter your desired port after it. Please note the information above so that you do not enter an invalid port.

:::tip
Use Ctrl + W to search in nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Use of a firewall

The principle of external accessibility of a server is always the same: a port must be opened so that the server can be reached externally. In the case of SSH, this is **by default** port 22/TCP. (see above how you can change the default port) 

The problem with this is that this port is now accessible to everyone, regardless of person, location and intention. This represents a major security vulnerability as malicious actors could flood the server with login attempts to either find out the correct password (through a brute force attack if you still have password login enabled) or to try to overload the server network through flooding (e.g. DDoS), which is often the case.

To reduce these effects, you can apply firewall rules that restrict access to the open ports.

There are two different methods you can use for this:
- **IPTables**: This is the original Linux firewall, so to speak. It offers you many options, but is somewhat more complicated to use.
- **UFW**: This is ultimately just a simpler interface to use IPTables without having to use the complicated commands but is a bit more restrictive.

Ultimately, it's up to you which of the two methods you want to use. Depending on the application, you may need the versatility of IPTables, but sometimes UFW is enough. (e.g. if you simply want to open/close ports which is still better than doing nothing!)

### IPTables

In this section, you will use IPTables to create several rules that limit the number of possible connection attempts. The explanations for the individual commands can be found below the code block.

Please note that this rule is only activated for **port 22** (the value after `--dport`) and the commands for other services would have to be adapted.

:::note
The following commands may not work for every single Linux distro, but they will work on the vast majority of the most popular distros.
:::

First, log in to your Linux server. If you need help doing this, please follow our [Initial access (SSH)](vserver-linux-ssh.md) guide which explains how to do this. Next, run the following commands in the order they are listed.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  The first rule drops packets if there are more than 2 connections in the `TIME_WAIT` state to port 22 from a single IP.
2.  The second rule adds the IP address of a new connection to the `recent` list.
3.  The third rule drops new connections from IP addresses that have attempted to make more than 2 connections in the last second.

### UFW 

As described above, UFW is a "simpler" interface for IPTables. The first step is to install UFW, as it is by default not included in all Linux distributions. You should either execute the commands as root or use *sudo*.

First log in to your Linux server. If you need help with this, please follow our guide [Initial access (SSH)](vserver-linux-ssh.md), which explains how this works. The following instructions used Debian and Ubuntu for testing, but should work on other Linux Distributions too.

First, the apt directory and existing services should be upgraded.
```
sudo apt update && sudo apt upgrade -y
```

Next, proceed to install UFW via apt.
```
sudo apt install ufw -y
```

Ensure that the installation was successful by running the following command.
```
sudo ufw status
> Firewall not loaded
```

In order to ensure that you do not lock yourself out from your server, the ssh service must first be enabled until the firewall can finally be activated.

:::caution
If you have already changed the port for SSH, please enter the new port here instead of 22.
:::

Use the following commands to enable the ssh service.
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

A successful output should look something like this.
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Now execute the following command, which limits the connection to 6 per minute.
```
ufw limit 22/tcp
```

:::note
UFW only allows you to limit the number of connections to 6 per minute. The UFW limiter is quite simple and may not be suitable for all situations. For a more detailed and flexible configuration, we recommend using IPTables directly.
:::

:::tip
The firewall (whether IPTables or UFW) can only "mindlessly" count the connection attempts and block them accordingly. With Fail2Ban it is possible to check log files for anomalies. The next section describes how you can install and activate Fail2Ban.
:::

## Additional protective measures with the use of Fail2Ban

Fail2Ban is a service that blocks IP addresses used to connect to the server with probably malicious intentions. Fail2Ban monitors some log files for anomalies and thus secures your system very effectively in a relatively simple way.

After installation, Fail2Ban already comes with prebuild configurations for some often used services including:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Additional services can be added simply by using a regular expression (RegEx) and specifying the desired log file.

As an example, let's look at an entry in `/var/log/auth.log`. This file contains all SSH login attempts, whether successful or failed.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Here you can now see the entry:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban now uses this log file and monitors it for failed authentications. As the log file directly contains the IP address of the attacker, Fail2Ban can block this IP address after a few failed attempts.

### Installation of Fail2Ban

First log in to your Linux server. If you need help with this, please follow our instructions [Initial access (SSH)](vserver-linux-ssh.md), which explain how this works. You should either execute the commands as root or using *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

After installing Fail2Ban, you can check the status directly using `systemctl`: (You can exit systemctl with Ctrl+C)
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Configuration of Fail2Ban

Fail2Ban is now installed, but not yet active or configured. Take a look at `/etc/fail2ban` and you will see that the following files should currently be located there:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
To create an active "jail", a file called `jail.local` must be created. Simply copy the contents of `jail.conf` into the new file and open it:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

All settings can now be made in the `jail.local` file, including the services to be monitored.
You should only look at the part after `[Default]`. The Default section is used for making default/general settings.

Scroll down a little further in this file until you find this part and adjust it as follows, for example:

| Attribute     | Explanation                                                                  | Value       |
|---------------|------------------------------------------------------------------------------|-------------|
| ignoreip      | IP adresses that should not be blocked                                       | 127.0.0.1/8 |
| ignorecommand | Not relevant.                                                                |             |
| bantime       | How long an IP adress is should be blocked                                   | 1h          |
| findtime      | Timeframe of failed logins to be taken into account                          | 10m         |
| maxretry      | Number of failed attempts that lead to a ban                                 | 5           |

```
# can be defined using space (and/or comma) separator.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" is the number of seconds that a host is banned.
bantime  = 1h

# A host is banned if it has generated "maxretry" during the last "findtime"
# seconds.
findtime  = 10m

# "maxretry" is the number of failures before a host get banned.
maxretry = 5
```

You have now finished setting up the default settings. To monitor the SSH service, for example, scroll down a little further to the `[sshd]` tag. Note that if you modified your port, you should place it under `Port`.

The `[sshd]` tag will look as following:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
As you can see, it is also possible to make individual settings in a single service (as here with `maxretry` which is lower than the default setting). Although you made the settings in general before, you can configure most of the settings for each service again. If you do not do this, the general setting will simply be used.
:::

Now you simply have to restart Fail2Ban to start monitoring.
```
sudo systemctl restart fail2ban.service
```

### Verify the functionality of Fail2Ban

If you have access to a VPN or a second server, you can try to block yourself from Fail2Ban to see if the service works as desired. With a VPN or a hotspot via your cell phone you should get a different IP address, which would allow you to test Fail2Ban.

:::danger
Do not test this on your normal network, as your own IP address may be blocked and you **will be locked out**.
:::

Try to establish an SSH connection to your server (with a different IP address!) and enter the wrong password each time. The result should look something like this:
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

As you can see, the connection from your server protected by Fail2Ban is now rejected (`Connection refused` instead of `Permission denied`).

Now display the status of Fail2Ban. Here you can see that an IP address has been blocked.
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

If you want to unblock the IP again, you can do this with the following command: `fail2ban-client set sshd unbanip {your IP}`.

:::info
If you have an unusually high number of IP bans, it is advisable to extend the ban time with each failed attempt in order to reduce the number of possible login attempts.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
#Bantime should increase with every ban of this IP
bantime.increment = true
#Scaling Factor of 24 hours (1h,24h,48h,3d,4d....)
bantime.factor = 24
#Maximum ban time=5 weeks
bantime.maxtime = 5w
```

## Securing webservers using Cloudflare

Many people use Cloudflare as their domain DNS manager, Cloudflare not only has one of the largest networks in the world, which offer lower page load times, lower latency and better overall experience, but they also protect your websites from DoS/DDoS attacks, including flooding and new types of attacks that come to light every day.
In this guide, you will learn how to protect your web server from attacks.

We will start by assuming that your domain is already managed by Cloudflare, if not you can follow [their guide](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) to move your domain. Go to the DNS Records tab from Cloudflare's dashboard, and make sure that your record to your webserver has the orange cloud and says "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Then, all traffic passing through your domain will go through Cloudflare and from there to your server, being legitimate traffic.
However, your server is still accessible from outside Cloudflare, for this you must limit access to ports 80 and 443 of the TCP protocol of your Linux server, and only allow access if it comes from legitimate Cloudflare traffic.

To do that, you can manually limit access using firewall rules from the [Cloudflare public IPv4 list](https://cloudflare.com/ips-v4) and [Cloudflare public IPv6 list](https://cloudflare.com/ips-v6).

Alternatively, you can save some time and use tools like [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) to quickly mass import these firewall rules.
Make sure you do not have any separate rules that allow unrestricted access to your webserver, other than the ones you recently added, otherwise they won't work.

## Conclusion - your server is now much more secure than before!

This guide has shown you some basic and advanced functions for securing your Linux server. If you have implemented all the recommendations that apply to your system, your server is already much more secure than before - congratulations!

Further measures can of course be taken:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Add further configurations to Fail2Ban
- Set up mail notifications in Fail2Ban
- And many more...

<InlineVoucher />
