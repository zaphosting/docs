---
id: linux-security-tips
title: Linux Security Tips
description: Tips and advices on how to secure your Linux server - ZAP-Hosting.com documentation
sidebar_label: Security Tips
---
## 🔑 Securing the SSH service.
### SSH KEYS
SSH (Secure Shell) is a powerful service that allows you to remotely access and execute commands on your server. See how to setup here:  [How to setup SSH in your server?](https://zap-hosting.com/guides/docs/vserver-linux-ssh)

However this is insecure by default, because it uses a password for login, and your identity can be spoofed using a brute-force tool. We always suggest you to use a strong password to make this job harder.

To ensure that no one can brute force and get access to your server, you can setup your SSH service to only allow login with SSH-Keys.

To do so, take a loot at [our guide.](https://zap-hosting.com/guides/docs/vserver-linux-sshkey#generate-ssh-key)

### LIMITING CONNECTIONS
In order to your server to be accessed from an external IP, the port where it's running must be open (22/tcp usually).

Not only you can access the port and try to log-in, everyone can. This is a security flaw, because people might want to flood your server with login attempts until they find the correct password (unless you use ssh key to log in, explained above) or to saturate the server network. Flooding is a common attack.

To reduce the impact, you can apply firewall rules that limit access to the port, in the case below, these are rules that will help you limit the port to 2 connections per second, making it more difficult to flood with login attemps. (2 connections per seconds are enough)
#### Limiting connections using IPTables (might not work for every Linux distro)
```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```
1.  The first rule drops packets if there are more than 2 connections in the `TIME_WAIT` state to port 22 from a single IP.
2.  The second rule adds the IP address of a new connection to the `recent` list.
3.  The third rule drops new connections from IP addresses that have attempted to make more than 2 connections in the last second.

#### Limiting connections using UFW (uncomplicated firewall)
```
ufw limit 22/tcp
```
Note that ufw only allows you to limit connections to 6 per minute. ufw's limiter is quite basic and may not be suitable for all situations. For a more detailed and flexible configuration, you may need to use iptables directly.

## 🌐 Securing (Linux) webservers using Cloudflare.
Many people use Cloudflare as their domain DNS manager, Cloudflare not only has one of the largest networks in the world, which offer lower page load times, lower latency and better overall experience, but they also protect your websites from DoS/DDoS attacks, including flooding and new types of attacks that come to light every day.
In this guide, you will learn how to protect your web server from attacks.

We will start by assuming that your domain is already managed by cloudflare, if not you can follow [their guide.](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/)

Go to the DNS Records tab from the Cloudflare's dashboard, and make sure that your record to your webserver have the orange cloud and says "Proxied".
![](https://i.imgur.com/wNEoWQP.png)

Then, all traffic passing through your domain will go through cloudflare and from there to your server, being legitimate traffic.
However, your server is still accessible from outside Cloudflare, for this we must limit access to ports 80 and 443 of the TCP protocol of your linux server, and only allow access if it comes from legitimate Cloudflare traffic.
To do that, you can manually limit access using firewall rules from the [Cloudflare public IPv4 list](https://cloudflare.com/ips-v4) and [Cloudflare public IPv6 list](https://cloudflare.com/ips-v6).
Or, you can save some time and use tools like [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) to clickly mass import these firewall rules.
Make sure you do not have any separate rules that allow unrestricted access to your webserver, other than the ones you recently added, otherwise they won't work.
