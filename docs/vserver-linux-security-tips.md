---
id: linux-security-tips
title: Linux Security Tips
description: Tips and advice on how to secure your Linux server - ZAP-Hosting.com documentation
sidebar_label: Security Tips
---
## Securing the SSH service
### SSH Keys
SSH (Secure Shell) is a powerful service that allows you to remotely access and execute commands on your server. See how to setup here: [How to setup SSH in your server?](https://zap-hosting.com/guides/docs/vserver-linux-ssh)

However, this is insecure by default, because it uses a password for login, and your identity can be spoofed using a brute-force tool. Regardless, we always suggest that you use a strong password to make this task harder.

There is a solution to this. To ensure that no one can brute force and get access to your server, you can set up an SSH service on your server to restrict login with the use of SSH-Keys.

To do so, take a look at [our SSH guide](https://zap-hosting.com/guides/docs/vserver-linux-sshkey) which explains how to generate and add an SSH key to gameservers, and how to do so for rootservers.

### Limiting Connections
In order for your server to be accessed from an external IP, the port where it's running must be open (this is 22/TCP usually).

There is a small problem with this though, not only can you access the port and try to log in, everyone can. This is a security flaw because bad actors could potentially flood your server with login attempts to either find the correct password (unless you use an SSH key to log in, as explained in the previous section) or attempt to saturate the server network through flooding which is a common attack.

To reduce the impact, you can apply firewall rules that limit access to the port. Using the firewall methods below, you can limit the number of connections that your server can receive, making it more difficult to flood your server with login attempts.

There are two ways of doing this, the more complicated but detailed method through IPTables which we recommend or through UFW which is more basic but easier to set up.

#### Limiting connections using IPTables
In this section, we will be setting up the IPTables using a few commands. You will be able to see the explanation for each command below the code block.

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

#### Limiting connections using UFW
Through the use of a simple UFW command, in this section, we will set up a basic firewall.

Firstly, log in to your Linux server. If you need help doing this, please follow our [SSH access](https://zap-hosting.com/guides/docs/vserver-linux-ssh) guide which explains how to do this. Now run the following command which will limit the connection to 6 per minute.

```
ufw limit 22/tcp
```

:::note
UFW only allows you to limit connections to 6 per minute. UFW's limiter is quite basic and may not be suitable for all situations. For a more detailed and flexible configuration, we recommend using IPTables directly.
:::

## Securing (Linux) webservers using Cloudflare
Many people use Cloudflare as their domain DNS manager, Cloudflare not only has one of the largest networks in the world, which offer lower page load times, lower latency and better overall experience, but they also protect your websites from DoS/DDoS attacks, including flooding and new types of attacks that come to light every day.
In this guide, you will learn how to protect your web server from attacks.

We will start by assuming that your domain is already managed by Cloudflare, if not you can follow [their guide.](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/)

Go to the DNS Records tab from Cloudflare's dashboard, and make sure that your record to your webserver has the orange cloud and says "Proxied".
![](https://i.imgur.com/wNEoWQP.png)

Then, all traffic passing through your domain will go through Cloudflare and from there to your server, being legitimate traffic.
However, your server is still accessible from outside Cloudflare, for this we must limit access to ports 80 and 443 of the TCP protocol of your Linux server, and only allow access if it comes from legitimate Cloudflare traffic.

To do that, you can manually limit access using firewall rules from the [Cloudflare public IPv4 list](https://cloudflare.com/ips-v4) and [Cloudflare public IPv6 list](https://cloudflare.com/ips-v6).

Alternatively, you can save some time and use tools like [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) to quickly mass import these firewall rules.
Make sure you do not have any separate rules that allow unrestricted access to your webserver, other than the ones you recently added, otherwise they won't work.
