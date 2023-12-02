---
id: vserver-linux-security-tips
title: Linux Security Tips
description: Tips and advice on how to secure your Linux server - ZAP-Hosting.com documentation
sidebar_label: Security Tips
---

## Introduction

This guide contains some tips and advice on how to make your Linux server more secure. Especially since (virtual) servers must be accessed externally, basic protection against unwanted access is definitely recommended and should not be neglected. 

:::info
Please note that these instructions are not exhaustive and that more detailed information can be found in other sections of the ZAP documentation. (e.g. [2FA](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh2fa/))
:::

:::tip
The easiest way to protect your server is always the same, regardless of the server: Use secure passwords, update your services regularly and generally pay attention to which services you want to install and which guides you follow.
:::

## Securing SSH (Secure Shell)

SSH is a service that allows you to remotely access your server's console to execute commands on the server. Here you can see how to set up SSH on your server: [How do I set up SSH on my server?](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh/)

By default, a password-based login is used for SSH. However, this has the major disadvantage that authentication can be bypassed relatively easily using a brute force attack, especially if you use a password that is too simple for your SSH login. So if you decide to use the password solution, please use a **secure** password.

To protect your server even better against unwanted SSH access, you should enable authentication exclusively via SSH keys and deactivate the password login. Take a look at [our SSH guide](https://zap-hosting.com/guides/docs/vserver-linux-sshkey), which explains how to generate and add SSH keys.

## Simple but effective: Changing the ports of common services

| Service| Port |
|--------|------|
| SSH    | 22   |
| FTP    | 21   |
| Mail   | 25   |
| DNS    | 53   |
| HTTP   | 80   |
| HTTPS  | 443  |

Services such as SSH or FTP always use the same ports by default. If an external malicious actor wants to brute force your server's SSH service, they first need to know which port is used to access SSH. If you do not configure these ports differently, then ports 22 and 21 are usually a hit for executing commands directly on the server or accessing files via FTP.

To prevent this, we recommend setting up the ports of the standard services as user-defined. In the next part of this guide you can find out how:

:::danger
Your desired port must be between 1024 and 65536 and should not be a port that is already in use!
:::
You can use `cat /etc/services` to display some standard ports to prevent you from selecting a port that is already in use.

### Set SSH port

To change the SSH port, you must adjust the configuration file. This is normally located in `/etc/ssh/sshd_config` by default, but if it's not located there you can use
```
find / -name "sshd_config" 2>/dev/null
```
to find it.

Now open the file using nano (as root or with **sudo**)
```
sudo nano /etc/ssh/sshd_config
```
and add your desired port after `Port`. If `Port` is commented out (i.e. `#Port 22`), then remove the "#" and replace the 22 with your desired port. Now you have to save the file (under Nano with Ctrl + o) and close it (Nano: Ctrl + x).

![Port sshd](https://i.imgur.com/fDak8p8.png)

The SSH service must now be restarted for the changes to take effect.
```
#Under Ubuntu/Debian/CentOS e.g.
sudo systemctl restart sshd
```

### Set FTP port

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
![Port proftpd](https://i.imgur.com/dAdXEsv.png)

## Use a firewall to better protect your system

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

First, log in to your Linux server. If you need help doing this, please follow our [SSH access](https://zap-hosting.com/guides/docs/vserver-linux-ssh) guide which explains how to do this. Next, run the following commands in the order they are listed.

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

First log in to your Linux server. If you need help with this, please follow our guide [SSH access](https://zap-hosting.com/guides/docs/vserver-linux-ssh), which explains how this works. 

Debian & Ubuntu:

First the apt directory has to be updated and existing services should be upgraded
```
sudo apt update && sudo apt upgrade -y
```

Then install UFW via apt
```
sudo apt install ufw -y
```

Now check if the installation was successful:
```
sudo ufw status
> Firewall not loaded
```

So that you do not lock yourself out, the ssh service must first be enabled until the firewall can finally be activated.

:::caution
If you have already changed the port for SSH, please enter the new port here instead of 22.
:::

```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```
The output should look something like this:
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

## Fail2Ban for extended and dynamic protection of your server

Fail2Ban is a service that blocks IP addresses that are used to connect to the server with probably malicious intentions. Fail2Ban monitors some log files for anomalies and thus secures your system very effectively in a relatively simple way.

After installation, Fail2Ban already monitors the following by default
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Additional services can be added simply by using a regular expression (RegEx) and specifying the desired log file.

As an example, let's look at an entry in `/var/log/auth.log`. This file contains all SSH login attempts, whether successful or failed.
![/var/log/auth.log](https://i.imgur.com/k6xZkVa.png)

Here you can now see the entry:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban now uses exactly this log file and monitors it for failed authentications. As the log file directly contains the IP address of the attacker, Fail2Ban can block this IP address after a few failed attempts.

## Securing webservers using Cloudflare

Many people use Cloudflare as their domain DNS manager, Cloudflare not only has one of the largest networks in the world, which offer lower page load times, lower latency and better overall experience, but they also protect your websites from DoS/DDoS attacks, including flooding and new types of attacks that come to light every day.
In this guide, you will learn how to protect your web server from attacks.

We will start by assuming that your domain is already managed by Cloudflare, if not you can follow [their guide](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) to move your domain. Go to the DNS Records tab from Cloudflare's dashboard, and make sure that your record to your webserver has the orange cloud and says "Proxied".

![](https://i.imgur.com/wNEoWQP.png)

Then, all traffic passing through your domain will go through Cloudflare and from there to your server, being legitimate traffic.
However, your server is still accessible from outside Cloudflare, for this you must limit access to ports 80 and 443 of the TCP protocol of your Linux server, and only allow access if it comes from legitimate Cloudflare traffic.

To do that, you can manually limit access using firewall rules from the [Cloudflare public IPv4 list](https://cloudflare.com/ips-v4) and [Cloudflare public IPv6 list](https://cloudflare.com/ips-v6).

Alternatively, you can save some time and use tools like [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) to quickly mass import these firewall rules.
Make sure you do not have any separate rules that allow unrestricted access to your webserver, other than the ones you recently added, otherwise they won't work.
