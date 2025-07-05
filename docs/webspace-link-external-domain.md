---
id: webspace-link-external-domain
title: "Webspace: Link an externally managed domain to your Webspace"
description: Information on how to add your external managed domain to your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Link external Domain
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you already have a domain registered with another provider and want to connect it to your ZAP-Hosting webspace product? No problem! To do this, you need to adjust the DNS settings at your domain provider. 

In this guide, we’ll show you exactly which DNS records you need to create so that your domain correctly points to your webspace.

:::tip Transfer Domain to ZAP-Hosting
Transfer your domain to ZAP-Hosting and enjoy easier management. Connect your domain to your webspace with just a few clicks and benefit from many additional features. Learn how to transfer your domain in our [Transfer Domain](domain-transfer.md) guide.
:::



<InlineVoucher />



## Register Domain in Plesk

Before you can link your external domain to your webspace, you first need to add the domain in **Plesk**. To do this, add your domain under the **Hosting Settings** section. If you’re not sure how to do this yet, you can find detailed instructions in our [Add Domain](webspace-adddomain.md) guide.

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Configure the DNS settings
To connect your external domain to your ZAP-Hosting webspace product, you need to set up the correct DNS records with your domain provider. This tells the internet where to find your webspace so that visitors can reach your website and your email services work properly.

You will need the IP address of your webspace instance to set up the A records. You can find this information directly in your ZAP webspace dashboard. A screenshot is provided to show you exactly where to find the IP address you need.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Once you have the IP address, you can add the necessary DNS records at your domain provider. These include A records to point your domain to your webspace, as well as MX and TXT records to handle email delivery and domain verification. 

Below is a table listing all required DNS records for your setup:

| Name                           | Type | Value                           | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------- | ---- | ---- |
| *                              | A    | IP address of webspace instance | 3600 | 0    |
| mail                           | A    | IP address of webspace instance | 3600 | 0    |
| www                            | A    | IP address of webspace instance | 3600 | 0    |
| domain.tld.                    | A    | IP address of webspace instance | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

For more detailed information about how the different types of DNS records work and what their purpose is, we recommend taking a look at our [Domain Records](domain-records.md) guide.



:::warning DNS Changes Can Take Up to 24 Hours

Changes to your DNS settings can take up to 24 hours to fully apply worldwide. During this time, your domain might not immediately point to your new webspace or email services, so please be patient while the changes take effect

:::



## Conclusion

You have successfully added your externally managed domain with your Webspace from ZAP-Hosting. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
