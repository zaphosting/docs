---
id: abuse-report
title: "Report abuse and illegal content - Everything you need to know!"
description: "Discover how to identify and report online abuse to protect users and services effectively → Learn more now"
sidebar_label: Report Abuse
---

## Introduction

The internet enables value. Abuse harms users and services. Our goal is to detect and stop incidents quickly. You can report suspected abuse to our Abuse Team. We review every report, preserve evidence, act under applicable law and our policies, and notify competent authorities when required.



## Type of Abuse

Abuse can appear in different ways. Report any case that fits within or is close to the categories below:

<details>
  <summary>Spam</summary>

Unsolicited or bulk messages sent through our systems or hosted content that triggers spam filters. Variants include email spam, comment spam, SEO link spam, and automated account creation. Provide sample messages, headers, sender IPs, and sending patterns.

</details>

<details>
  <summary>Attacks and DDoS</summary>

Hostile traffic intended to disrupt services or probe systems. Common forms are volumetric L3 L4 floods, HTTP layer-7 floods, amplification, brute-force logins, and aggressive port scans. Indicators include spikes in PPS or Mbps, elevated 4xx 5xx rates, and repeated auth failures from rotating sources.

</details>

<details>
  <summary>Copyright and trademark violations</summary>

Unauthorized distribution of protected works or misuse of registered marks. Variants include piracy mirrors, cracked downloads, brand impersonation, and misleading domains. Provide the work, rightsholder, exact location, and authorization status.

</details>

<details>
  <summary>Phishing</summary>

Content designed to harvest credentials or payment data by imitating trusted brands. Variants include fake login portals, invoice scams, QR or attachment lures, and MFA fatigue. Specify the target brand, capture points, and how the page differs from the legitimate site.

</details>

<details>
  <summary>GDPR</summary>

Unauthorized processing, exposure, or leakage of personal data. Typical cases include open indexes, misconfigured buckets, scraping without a lawful basis, and public logs. Describe data categories, scope, affected subjects, and the cause of exposure.


</details>

<details>
  <summary>CSAM/SAM</summary>

Any material depicting sexual exploitation of humans. Zero tolerance. 

</details>

<details>
  <summary>Illegal content</summary>

Content that violates applicable law such as extremist propaganda, threats, hate speech, incitement to violence, or defamation. Variants include doxxing, explicit threats, and materials banned by jurisdiction. Provide the exact location and, if known, the legal basis involved.

</details>

<details>
  <summary>Other</summary>

Abuse that does not fit the above but still harms users or systems. Examples include malware hosting, botnet C2, fraud, and unauthorized cryptomining. Share hashes, URLs, C2 patterns, and resource usage anomalies.

</details>

## Required information

To ensure a complete and actionable report, please provide comprehensive details that let us identify the resource, verify the incident, and take the right measures, including the following:
- Location. URL, IP, port, hostname, file path, hash
- Timestamps in UTC in format YYYY-MM-DDTHH:MM:SSZ
- Description. What happened, how detected, observed impact
- Evidence. Screenshots, text logs, full email with headers as EML, short PCAP, NetFlow, HTTP headers

## Accepted Files and provision

Provide evidence in clear formats and in a way we can reliably access it. Attach smaller files to your email or host large files externally. Attach small to medium files directly. Prefer open, unmodified formats. Raw text is better than screenshots of text.

For large files, share a stable download link. It should be retrievable without interaction or include clear credentials. State the link validity window. Add checksums to allow integrity verification.

Use standard formats such as TXT, PDF, PNG, JPG, PCAP or PCAPNG, EML, HAR, CSV, and JSON. Do not include passwords, private keys, or full personal data unless strictly required. 

For quality, submit emails as EML with full headers, logs as plain text, network traces as short and relevant PCAP or PCAPNG captures, and screenshots in original resolution. 

For security, redact any secrets; if needed, place files in a password protected archive and share the password separately. For CSAM/SAM, do not transmit files provide only links.

## Get In Touch With Us

Send your report to `abuse@zap-hosting.com`. It's important to use a clear subject such as `Abuse Report Phishing` or `Abuse Report DDoS`. Send one email per incident. The sample below shows a complete request:

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

## What happens next

Our Abuse Team processes your report as quickly as possible and replies promptly. We review the incident and prioritize it by severity. 

Based on the review we take actions including customer notification, temporary/permanent suspension, takedown of the reported content, preservation of evidence and notification of the competent authorities when needed.