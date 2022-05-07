---
id: domain_records
title: Domains: Domain records settings
description: Information about the domain record settings for domains at ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Domain Records
---

## A Records

An A record is used to create a forwarding of a "**sub**" or "**main domain**" to an "**IPv4 address**".

![2022-05-07_22-11](https://user-images.githubusercontent.com/61953937/167270723-9b38b90f-bb75-4209-84d4-8ee2ecf39036.png)

## AAAA Records

An AAAA record is used to create a forwarding of a "**sub**" or "**main domain**" to an "**IPv6 address**".

![2022-05-07_22-13](https://user-images.githubusercontent.com/61953937/167270726-002ef2a0-32a5-437c-a0d1-b4dd9ad667f5.png)

## CNAME Records

A CNAME record is used to create a forwarding of a "**subdomain**" to a "**sub-**" or "**main domain**".

![2022-05-07_22-14](https://user-images.githubusercontent.com/61953937/167270731-bb4dec74-4ec2-4792-a365-d8fbcbab9094.png)

## MX Records

An MX record is used to create a redirection of a "**Sub-**" or "**Main domain**" to a "**Domain**" or "**A-Record**". This MX record is used to specify one or more mail servers. The priority specifies which mail server should be used preferably if there are multiple MX records. The priority must be an integer between 0 and 65535, the lower the value the higher the priority.

![2022-05-07_22-15](https://user-images.githubusercontent.com/61953937/167270739-6503b83d-0447-4571-8550-7916717b9516.png)

## PTR Records

A PTR record is used to create a forwarding of a "**IPv4 address**" or "**IPv6 address**" to a "**sub-**" or "**main domain**". This PTR record represents the opposite of the A or AAAA record.

![2022-05-07_22-17](https://user-images.githubusercontent.com/61953937/167270740-a00596cc-634b-4c80-b019-9b832c1a08f7.png)

## RP Records

An RP record is used to provide information about the owner of the domain.Usually an e-mail address is entered for this purpose, where the "**@**" symbol is replaced by a "**dot**".

![2022-05-07_22-19](https://user-images.githubusercontent.com/61953937/167270742-e92956d3-a2bc-4d43-ba12-571bfa9abc42.png)

## SRV Records

An SRV record is used to create a forwarding of a " **sub**" or "**main domain**" to an "**A record**". 
SRV records are used for applications where no standard port is used and therefore port forwarding is necessary.
The priority defines which of the services should be used preferentially if multiple SRV records are used for the same services.
The priority must be an integer, the lower the value the higher the priority.

![2022-05-07_22-24](https://user-images.githubusercontent.com/61953937/167270746-3e67a170-a513-4071-9269-016dc92995d9.png)

## TXT Records

A TXT record is used to add text of your choice. On some systems, the content is used to encode administrative data. This TXT record is used to create SPF, DMARC and DKIM entries

![2022-05-07_22-25](https://user-images.githubusercontent.com/61953937/167270747-b407d7a1-489d-4985-b8f8-74ace497ff63.png)
