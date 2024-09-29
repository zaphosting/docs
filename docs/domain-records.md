---
id: domain-records
title: "Domain: Domain records settings"
description: Information about the domain record settings for domains at ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Domain Records
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Domains can be configured easily by utilising a wide variety of DNS record types which perform different actions. In this guide, we will cover all of the different record types and explain how they work.

## A Records

An A record is used to create a forwarding of a "**sub**" or "**main domain**" to an "**IPv4 address**".

![2022-05-07_22-11](https://screensaver01.zap-hosting.com/index.php/s/yJDjqmspRAQt23p/preview)

## AAAA Records

An AAAA record is used to create a forwarding of a "**sub**" or "**main domain**" to an "**IPv6 address**".

![2022-05-07_22-13](https://screensaver01.zap-hosting.com/index.php/s/CWRcX233qpEJfHT/preview)

## CNAME Records

A CNAME record is used to create a forwarding of a "**subdomain**" to a "**sub-**" or "**main domain**".

![2022-05-07_22-14](https://screensaver01.zap-hosting.com/index.php/s/R7Kx8QEyqd3W8pN/preview)

## MX Records

An MX record is used to create a redirection of a "**Sub-**" or "**Main domain**" to a "**Domain**" or "**A-Record**". This MX record is used to specify one or more mail servers. The priority specifies which mail server should be used preferably if there are multiple MX records. The priority must be an integer between 0 and 65535, the lower the value the higher the priority.

![2022-05-07_22-15](https://screensaver01.zap-hosting.com/index.php/s/9a7N3jkmS2mMS4x/preview)

## PTR Records

A PTR record is used to create a forwarding of a "**IPv4 address**" or "**IPv6 address**" to a "**sub-**" or "**main domain**". This PTR record represents the opposite of the A or AAAA record.

![2022-05-07_22-17](https://screensaver01.zap-hosting.com/index.php/s/WnHYZF2KKAC5no4/preview)

## RP Records

An RP record is used to provide information about the owner of the domain.Usually an e-mail address is entered for this purpose, where the "**@**" symbol is replaced by a "**dot**".

![2022-05-07_22-19](https://screensaver01.zap-hosting.com/index.php/s/jJSgfcb4Xx8WH5Y/preview)

## SRV Records

An SRV record is used to create a forwarding of a " **sub**" or "**main domain**" to an "**A record**". 
SRV records are used for applications where no standard port is used and therefore port forwarding is necessary.
The priority defines which of the services should be used preferentially if multiple SRV records are used for the same services.
The priority must be an integer, the lower the value the higher the priority.

![2022-05-07_22-24](https://screensaver01.zap-hosting.com/index.php/s/EQ7mQTSX3eccoZM/preview)

## TXT Records

A TXT record is used to add text of your choice. On some systems, the content is used to encode administrative data. This TXT record is used to create SPF, DMARC and DKIM entries

![2022-05-07_22-25](https://screensaver01.zap-hosting.com/index.php/s/zRQWkSk57zxSRYC/preview)