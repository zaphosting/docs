---
id: abuse-report
title: "举报滥用和非法内容 - 你需要知道的一切！"
description: "了解如何识别和举报网络滥用，有效保护用户和服务 → 立即了解更多"
sidebar_label: 举报滥用
---

## 介绍

互联网创造价值，但滥用会伤害用户和服务。我们的目标是快速发现并阻止事件。你可以向我们的滥用团队举报疑似滥用行为。我们会审核每一份举报，保留证据，依据适用法律和政策采取行动，并在必要时通知相关主管部门。

## 滥用类型

滥用可能以多种形式出现。请举报任何符合或接近以下类别的情况：

<details>
  <summary>垃圾信息（Spam）</summary>

通过我们的系统或托管内容发送的未经请求或批量消息，触发垃圾邮件过滤器。包括邮件垃圾、评论垃圾、SEO链接垃圾和自动账号创建。请提供示例消息、邮件头、发送者IP和发送模式。

</details>

<details>
  <summary>攻击与DDoS</summary>

旨在破坏服务或探测系统的恶意流量。常见形式有大流量L3/L4洪水攻击、HTTP第7层洪水、放大攻击、暴力破解登录和激进端口扫描。指标包括PPS或Mbps激增、4xx/5xx错误率升高，以及来自不断变化源的重复认证失败。

</details>

<details>
  <summary>版权和商标侵权</summary>

未经授权分发受保护作品或滥用注册商标。包括盗版镜像、破解下载、品牌冒充和误导性域名。请提供作品、权利人、具体位置及授权状态。

</details>

<details>
  <summary>网络钓鱼（Phishing）</summary>

通过模仿可信品牌收集凭证或支付信息的内容。包括假登录页面、发票诈骗、二维码或附件诱饵、多因素认证疲劳攻击。请说明目标品牌、捕获点及页面与正规网站的区别。

</details>

<details>
  <summary>GDPR（通用数据保护条例）</summary>

未经授权处理、暴露或泄露个人数据。典型案例包括开放索引、配置错误的存储桶、无合法依据的抓取和公开日志。请描述数据类别、范围、受影响对象及泄露原因。

</details>

<details>
  <summary>儿童性虐待材料（CSAM/SAM）</summary>

任何描绘对人类性剥削的材料。零容忍。

</details>

<details>
  <summary>非法内容</summary>

违反适用法律的内容，如极端主义宣传、威胁、仇恨言论、煽动暴力或诽谤。包括人肉搜索、明确威胁及司法管辖区禁止的材料。请提供具体位置及（如知）法律依据。

</details>

<details>
  <summary>其他</summary>

不符合上述类别但仍对用户或系统造成伤害的滥用。例如恶意软件托管、僵尸网络指挥控制、欺诈和未经授权的加密挖矿。请提供哈希、URL、指挥控制模式及资源使用异常。

</details>

## 必填信息

为确保举报完整且可执行，请提供详细信息，帮助我们识别资源、核实事件并采取正确措施，包括：
- 位置：URL、IP、端口、主机名、文件路径、哈希
- 时间戳（UTC），格式为 YYYY-MM-DDTHH:MM:SSZ
- 描述：发生了什么，如何发现，观察到的影响
- 证据：截图、文本日志、带完整邮件头的EML格式邮件、简短PCAP、NetFlow、HTTP头信息

## 支持的文件格式及提交方式

请以清晰且我们能可靠访问的格式提供证据。小文件可直接附加邮件，大文件建议外部托管。优先使用开放且未修改的格式。纯文本优于文字截图。

大文件请提供稳定下载链接，链接应无需交互或附带明确凭证。说明链接有效期，并附加校验和以便验证完整性。

支持的标准格式包括 TXT、PDF、PNG、JPG、PCAP或PCAPNG、EML、HAR、CSV 和 JSON。除非必要，请勿包含密码、私钥或完整个人数据。

为保证质量，邮件请以带完整头信息的EML格式提交，日志为纯文本，网络抓包为简短且相关的PCAP或PCAPNG，截图保持原始分辨率。

为安全起见，请对任何敏感信息进行脱敏；如有需要，可将文件放入密码保护的压缩包并单独提供密码。对于CSAM/SAM，请勿传输文件，仅提供链接。

## 联系我们

请将举报发送至 `abuse@zap-hosting.com`。邮件主题请清晰注明，如 `Abuse Report Phishing` 或 `Abuse Report DDoS`。每个事件请单独发送一封邮件。以下为完整示例：

```
To: abuse@zap-hosting.com
Subject: Abuse Report Brute Force (SSH)

Location:
- Target IP: XXX.XX.XXX.XX
- Service: SSH
- Port: 22
- Hostname: v12345.zap-hosting.com

Timestamps (UTC):
- First seen: 2025-08-23T09:12:04Z
- Last seen: 2025-08-23T10:03:31Z

Description:
"Repeated SSH login attempts with rotating usernames and source IPs. Detected via anomalies in auth.log and elevated connection rate. Password authentication disabled after detection. No successful login observed."

Evidence:
- auth.log excerpt with multiple "Failed password" and "Invalid user" entries
- fail2ban log snippet showing bans and source addresses
- 60-second PCAP capturing TCP attempts to port 22
- Aggregate counts: 12,438 attempts from 352 source IPs
- Top sources with ASN information

Sample log excerpt:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## 后续流程

我们的滥用团队会尽快处理你的举报并及时回复。我们会审核事件并根据严重程度优先处理。

审核后，我们会采取包括通知客户、临时或永久封禁、下架举报内容、保留证据及必要时通知主管部门等措施。