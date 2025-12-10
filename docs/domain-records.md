---
id: domain-records
title: "Domain: Domain records settings"
description: "Discover how to configure and understand different DNS record types to optimize your domain management → Learn more now"
sidebar_label: Domain Records
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Domains can be configured easily by utilising a wide variety of DNS record types which perform different actions. In this guide, we will cover all of the different record types and explain how they work.

<InlineVoucher />

## Configuration

You can configure the domain records in your domain administration under DNS administration. To do this, click on the green **New entry** button. This will open a popup window. From there you can configure and create new records as you wish. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
We use the **zap-hosting.com** domain to illustrate the individual types of DNS records. Please use your own domain in your case.
:::

:::warning
Please ensure when configuring a DNS record that a dot is placed at the end of the record to define that the domain name is complete and to prevent misunderstandings arising during assignment in the DNS system.
:::

## Types of  DNS records

There are various types of DNS records that have different meanings and purposes. The meaning and differences will be explained below. 

### A Records

An A record is used to create a forwarding of a "**sub**" or "**main domain**" to an "**IPv4 address**".

| Name (Example)   | Type | Value (Example) | TTL  | Priority |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | A    | IPv4-Adresse    | 1440 | 0        |



### AAAA Records

An AAAA record is used to create a forwarding of a "**sub**" or "**main domain**" to an "**IPv6 address**".

| Name (Example)   | Type | Value (Example) | TTL  | Priority |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | AAAA | IPv6-Adresse    | 1440 | 0        |


### CNAME Records

A CNAME record is used to create a forwarding of a "**subdomain**" to a "**sub-**" or "**main domain**".

| Name (Example) | Type | Value (Example) | TTL  | Priority |
| ----------- | ---- | ------------ | ---- | -------- |
| zap-test. | CNAME  | zap-hosting.com | 1440 | 0        |



### MX Records

An MX record is used to create a redirection of a "**Sub-**" or "**Main domain**" to a "**Domain**" or "**A-Record**". This MX record is used to specify one or more mail servers. The priority specifies which mail server should be used preferably if there are multiple MX records. The priority must be an integer between 0 and 65535, the lower the value the higher the priority.

| Name (Example)   | Type  | Value (Example)  | TTL  | Priority |
| ---------------- | ----- | ---------------- | ---- | -------- |
| zap-hosting.com. | CNAME | mailserverxy.com | 1440 | 0        |



### PTR Records

A PTR record is used to create a forwarding of a "**IPv4 address**" or "**IPv6 address**" to a "**sub-**" or "**main domain**". This PTR record represents the opposite of the A or AAAA record.

| Name (Example)          | Type  | Value (Example)  | TTL  | Priority |
| ----------------------- | ----- | ---------------- | ---- | -------- |
| 1.0.0.127.in-addr.arpa. | PTR | zap-hosting.com. | 1440 | 0        |



### RP Records

An RP record is used to provide information about the owner of the domain. Usually an e-mail address is entered for this purpose, where the "**@**" symbol is replaced by a "**dot**".

| Name (Example) | Type | Value (Example)       | TTL  | Priority |
| -------------- | ---- | --------------------- | ---- | -------- |
| rp.            | RP   | info.zap-hosting.com. | 1440 | 0        |

### SRV Records

An SRV record is used to create a forwarding of a " **sub**" or "**main domain**" to an "**A record**". 
SRV records are used for applications where no standard port is used and therefore port forwarding is necessary.
The priority defines which of the services should be used preferentially if multiple SRV records are used for the same services.
The priority must be an integer, the lower the value the higher the priority.

| Name (Example) | Type | Value (Example)       | TTL  | Priority |
| -------------- | ---- | --------------------- | ---- | -------- |
| zap-hosting.com. | SRV   | 0 2006 zap-hosting.com. | 1440 | 0        |

### TXT Records

A TXT record is used to add text of your choice. On some systems, the content is used to encode administrative data. This TXT record is used to create SPF, DMARC and DKIM entries

| Name (Example)   | Type | Value (Example) | TTL  | Priority |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | TXT   | v=spf1 -all     | 1440 | 0        |



## Conclusion

Congratulations, you have successfully created and configured your DNS records. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
