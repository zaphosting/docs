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

Services such as SSH or FTP always use the same ports by default. If an external attacker wants to brute force your server's SSH service, they first need to know which port is used to access SSH. If you do not configure these ports differently, then ports 22 and 21 are usually a hit for executing commands directly on the server or accessing files via FTP.

To prevent this, we recommend setting up the ports of the standard services as user-defined. In the next part of this guide you can find out how:

:::danger
Your desired port must be between 1024 and 65536 and should not be a port that is already in use!
:::
You can use `cat /etc/services` to display some standard ports to prevent you from selecting a port that is already in use.

## Limiting Connections

In order for your server to be accessed from an external IP, the port where it's running must be open (this is 22/TCP usually).

There is a small problem with this though, not only can you access the port and try to log in, everyone can. This is a security flaw because bad actors could potentially flood your server with login attempts to either find the correct password (unless you use an SSH key to log in, as explained in the previous section) or attempt to saturate the server network through flooding which is a common attack.

To reduce the impact, you can apply firewall rules that limit access to the port. Using the firewall methods below, you can limit the number of connections that your server can receive, making it more difficult to flood your server with login attempts.

There are two ways of doing this, the more complicated but detailed method through IPTables which we recommend or through UFW which is more basic but easier to set up.

### IPTables

In this section, you will be setting up the IPTables using a few commands. You will be able to see the explanation for each command below the code block.

:::note
The following commands may not work for every single Linux distro, but they will work on the vast majority of the most popular distros.
:::

Firstly, log in to your Linux server. If you need help doing this, please follow our [SSH access](https://zap-hosting.com/guides/docs/vserver-linux-ssh) guide which explains how to do this. Next, run the following commands in the order they are listed. Below the commands, you can see what the command is doing to help you understand.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  The first rule drops packets if there are more than 2 connections in the `TIME_WAIT` state to port 22 from a single IP.
2.  The second rule adds the IP address of a new connection to the `recent` list.
3.  The third rule drops new connections from IP addresses that have attempted to make more than 2 connections in the last second.



### UFW

Through the use of a simple UFW command, in this section, you will set up a basic firewall.

Firstly, log in to your Linux server. If you need help doing this, please follow our [SSH access](https://zap-hosting.com/guides/docs/vserver-linux-ssh) guide which explains how to do this. Now run the following command which will limit the connection to 6 per minute.

```
ufw limit 22/tcp
```

:::note
UFW only allows you to limit connections to 6 per minute. UFW's limiter is quite basic and may not be suitable for all situations. For a more detailed and flexible configuration, we recommend using IPTables directly.
:::


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
