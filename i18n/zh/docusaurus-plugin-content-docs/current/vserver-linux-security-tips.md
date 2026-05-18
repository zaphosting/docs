---
id: vserver-linux-security-tips
title: "VPS：Linux 安全小贴士"
description: "了解如何通过关键技巧提升你的 Linux 服务器安全，防止未授权访问并保护你的服务 → 立即学习"
sidebar_label: 安全小贴士
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南包含了一些关于如何提升你的 Linux 服务器安全性的建议。尤其是（虚拟）服务器必须对外开放访问时，基本的防护措施绝对是必需的，千万别忽视。

:::info
请注意，这些说明并非详尽无遗，更多详细信息可以在 ZAP 文档的其他章节找到。（例如 [2FA（SSH）](vserver-linux-ssh2fa.md)）
:::

:::tip
保护服务器最简单的方法总是一样的，无论是哪种服务器：使用安全密码，定期更新服务，并且注意你想安装哪些服务以及遵循哪些指南。
:::

<InlineVoucher />

## SSH 安全设置

SSH（安全外壳）是一项允许你远程访问服务器控制台并执行命令的服务。这里有如何在你的服务器上设置 SSH 的教程：[初始访问（SSH）](vserver-linux-ssh.md)

默认情况下，SSH 使用基于密码的登录方式。但这有个大缺点：如果密码太简单，攻击者可以通过暴力破解轻松绕过认证。因此，如果你决定使用密码登录，请务必使用**强密码**。

为了更好地保护服务器免受未经授权的 SSH 访问，建议启用仅通过 SSH 密钥认证，并禁用密码登录。看看这篇 [SSH 密钥](vserver-linux-sshkey.md) 指南，教你如何生成和添加 SSH 密钥。

## 服务端口配置

| 服务   | 端口 |
|--------|------|
| SSH    | 22   |
| FTP    | 21   |
| 邮件   | 25   |
| DNS    | 53   |
| HTTP   | 80   |
| HTTPS  | 443  |

像 SSH 或 FTP 这类服务默认总是使用固定端口（上表列出了一些）。如果外部恶意攻击者想暴力破解你的 SSH 服务，首先得知道 SSH 使用哪个端口。如果你不修改这些端口，通常端口 22 和 21 就是直接执行命令或通过 FTP 访问文件的目标。

为防止这种情况，我们建议将标准服务端口改成自定义端口。下一部分会告诉你怎么做：

:::danger
你选择的端口必须在 1024 到 65536 之间，且不能是已被占用的端口！
:::
你可以用 `cat /etc/services` 查看一些标准端口，避免选到已被占用的端口。

### SSH 端口

要更改 SSH 端口，需要修改配置文件。默认路径通常是 `/etc/ssh/sshd_config`，如果找不到，可以用下面命令查找：
```
find / -name "sshd_config" 2>/dev/null
```

用 nano 打开文件（以 root 或使用 *sudo*）：
```
sudo nano /etc/ssh/sshd_config
```

在 `Port` 后添加你想用的端口。如果 `Port` 被注释掉了（比如 `#Port 22`），去掉 "#" 并把 22 改成你想用的端口。然后保存文件（Nano 用 Ctrl + o）并关闭（Ctrl + x）。

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

修改后需要重启 SSH 服务使改动生效：
```
# 以 Ubuntu/Debian/CentOS 为例
sudo systemctl restart sshd
```

### FTP 端口

如果你安装了 FTP 服务，比如 **proFTPd**，端口也可以通过编辑配置文件轻松更改，操作和 SSH 类似。

查找配置文件 `proftpd.conf`：
```
find / -name "proftpd.conf" 2>/dev/null
```

文件通常在 `/etc/proftpd.conf`（CentOS）或 `/etc/proftpd/proftpd.conf`（Ubuntu、Debian）。

用 nano 打开文件，去掉 `port` 前的 "#"，然后输入你想用的端口。注意上面提到的端口范围和占用情况。

:::tip
在 nano 中用 Ctrl + W 搜索。
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## 使用防火墙

服务器对外开放访问的原理总是一样：必须开放一个端口让外部能连接。SSH 默认开放的是 22/TCP 端口。（上面已经教你怎么改默认端口）

问题是，这个端口对所有人开放，不管是谁、在哪儿、意图如何。这是个重大安全隐患，因为恶意攻击者可能会用登录尝试淹没服务器，试图暴力破解密码（如果你还启用了密码登录）或者通过流量攻击（比如 DDoS）来拖垮服务器。

为减少这些风险，你可以设置防火墙规则限制对开放端口的访问。

你可以用两种方法：
- **IPTables**：Linux 原生防火墙，功能强大但操作复杂。
- **UFW**：IPTables 的简化界面，操作更简单但功能稍有限制。

选哪个看你需求。复杂场景可能需要 IPTables，但简单开关端口用 UFW 也够用，毕竟总比不管强！

### IPTables

本节用 IPTables 创建几条规则，限制连接尝试次数。下面代码块后有命令解释。

注意，这些规则只针对 **端口 22**（`--dport` 后的值），其他服务需相应调整命令。

:::note
以下命令可能不适用于所有 Linux 发行版，但大多数主流发行版都支持。
:::

先登录你的 Linux 服务器。如果需要帮助，请参考我们的 [初始访问（SSH）](vserver-linux-ssh.md) 指南。然后按顺序执行以下命令：

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. 第一条规则：如果单个 IP 对端口 22 的连接处于 `TIME_WAIT` 状态超过 2 个，丢弃数据包。
2. 第二条规则：将新连接的 IP 加入 `recent` 列表。
3. 第三条规则：如果某 IP 在 1 秒内尝试连接超过 2 次，丢弃新连接。

### UFW

如上所述，UFW 是 IPTables 的简化界面。首先安装 UFW，因为并非所有 Linux 发行版默认安装。建议以 root 或使用 *sudo* 执行命令。

登录你的 Linux 服务器，参考我们的 [初始访问（SSH）](vserver-linux-ssh.md) 指南。以下示例基于 Debian 和 Ubuntu 测试，其他发行版也适用。

先更新 apt 源和已安装服务：
```
sudo apt update && sudo apt upgrade -y
```

安装 UFW：
```
sudo apt install ufw -y
```

确认安装成功：
```
sudo ufw status
> Firewall not loaded
```

为了避免把自己锁在外面，先允许 ssh 服务端口，之后才能启用防火墙。

:::caution
如果你已经修改了 SSH 端口，请用新端口替代下面的 22。
:::

启用 ssh 服务：
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

成功输出示例：
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

接着执行限制连接数的命令，限制为每分钟 6 次：
```
ufw limit 22/tcp
```

:::note
UFW 只能限制每分钟最多 6 次连接，限制功能较简单，不适合所有场景。需要更灵活配置建议直接用 IPTables。
:::

:::tip
防火墙（无论 IPTables 还是 UFW）只能“机械地”统计连接尝试并阻断。Fail2Ban 可以通过分析日志文件检测异常，下一节教你如何安装和启用 Fail2Ban。
:::

## 使用 Fail2Ban 进一步保护

Fail2Ban 是一款服务，用来阻止那些可能带有恶意意图的 IP 地址连接服务器。它会监控日志文件中的异常行为，从而以相对简单的方式有效保护系统。

安装后，Fail2Ban 自带一些常用服务的预设配置，包括：
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier 邮件服务器
你也可以通过正则表达式（RegEx）和指定日志文件添加更多服务。

举个例子，看看 `/var/log/auth.log` 文件，里面记录了所有 SSH 登录尝试，无论成功还是失败。
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

你会看到类似条目：
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban 会监控这个日志文件，检测失败的认证尝试。日志中直接包含攻击者 IP，Fail2Ban 会在多次失败后封禁该 IP。

### 安装 Fail2Ban

登录你的 Linux 服务器，参考我们的 [初始访问（SSH）](vserver-linux-ssh.md) 指南。建议以 root 或使用 *sudo* 执行命令。

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

安装完成后，用 `systemctl` 检查状态：（用 Ctrl+C 退出）
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

### 配置 Fail2Ban

Fail2Ban 已安装，但尚未激活或配置。看看 `/etc/fail2ban` 目录，应该包含以下文件：
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
要创建一个激活的“jail”，需要新建 `jail.local` 文件。复制 `jail.conf` 内容到新文件并打开：
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

所有设置都在 `jail.local` 文件中，包括要监控的服务。
只需关注 `[Default]` 部分，这里是默认/通用设置。

往下滚动找到这部分，示例配置如下：

| 属性         | 说明                                         | 值          |
|--------------|----------------------------------------------|-------------|
| ignoreip     | 不会被封禁的 IP 地址                         | 127.0.0.1/8 |
| ignorecommand| 不相关                                       |             |
| bantime      | IP 被封禁的时长                              | 1h          |
| findtime     | 统计失败登录的时间窗口                        | 10m         |
| maxretry     | 失败尝试次数达到多少次会被封禁               | 5           |

```
# 可以用空格或逗号分隔定义
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" 是封禁时长（秒）
bantime  = 1h

# 如果在 "findtime" 秒内失败次数达到 "maxretry"，则封禁
findtime  = 10m

# "maxretry" 是失败次数阈值
maxretry = 5
```

默认设置完成后，向下滚动找到 `[sshd]` 标签，配置 SSH 服务监控。注意如果你修改了端口，记得在 `port` 里写上新端口。

示例 `[sshd]` 配置：
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
你可以针对单个服务做个性化设置（比如这里的 `maxretry` 比默认值低）。如果不设置，默认配置会被使用。
:::

配置完成后，重启 Fail2Ban 使其生效：
```
sudo systemctl restart fail2ban.service
```

### 验证 Fail2Ban 功能

如果你有 VPN 或第二台服务器，可以尝试用不同 IP 测试 Fail2Ban 是否生效。通过 VPN 或手机热点获取不同 IP，尝试登录。

:::danger
不要在你正常网络环境下测试，否则你自己的 IP 可能会被封，导致**无法访问**。
:::

尝试用错误密码多次 SSH 登录，结果应类似：
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

可以看到，Fail2Ban 保护的服务器拒绝了连接（显示 `Connection refused` 而非 `Permission denied`）。

查看 Fail2Ban 状态，显示某 IP 已被封禁：
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

如果想解封 IP，用命令：`fail2ban-client set sshd unbanip {你的IP}`。

:::info
如果封禁的 IP 数量异常多，建议开启封禁时间递增功能，减少登录尝试次数。
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# 封禁时间随每次封禁递增
bantime.increment = true
# 递增因子，单位小时（1h,24h,48h,3d,4d....）
bantime.factor = 24
# 最大封禁时间，5 周
bantime.maxtime = 5w
```

## 使用 Cloudflare 保护 Web 服务器

很多人用 Cloudflare 管理域名 DNS。Cloudflare 拥有全球最大的网络之一，能降低页面加载时间、减少延迟、提升整体体验，还能保护你的网站免受 DoS/DDoS 攻击，包括流量泛滥和每天出现的新型攻击。

本节教你如何用 Cloudflare 保护你的 Web 服务器。

假设你的域名已经由 Cloudflare 管理，如果没有，可以参考 [官方指南](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) 迁移域名。登录 Cloudflare 控制面板，进入 DNS 记录页，确保指向你 Web 服务器的记录是橙色云朵状态，显示“已代理（Proxied）”。

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

这样，所有通过你域名的流量都会先经过 Cloudflare，再转发到你的服务器，确保是合法流量。

不过，你的服务器仍然可以绕过 Cloudflare 直接访问。为此，你必须限制 Linux 服务器 TCP 协议的 80 和 443 端口访问，只允许来自合法 Cloudflare 流量的访问。

你可以手动用防火墙规则限制访问，规则基于 [Cloudflare 公共 IPv4 列表](https://cloudflare.com/ips-v4) 和 [Cloudflare 公共 IPv6 列表](https://cloudflare.com/ips-v6)。

或者，你也可以用像 [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) 这样的工具快速批量导入这些防火墙规则。

确保你没有其他允许无限制访问 Web 服务器的规则，否则新规则不会生效。

## 总结 — 你的服务器现在安全多了！

本指南展示了 Linux 服务器安全的基础和进阶功能。如果你已经实施了所有适用的建议，你的服务器安全性已经大幅提升——恭喜！

当然，还可以采取更多措施：
- [2FA（SSH）](vserver-linux-ssh2fa.md)
- 为 Fail2Ban 添加更多配置
- 设置 Fail2Ban 邮件通知
- 以及更多...

<InlineVoucher />