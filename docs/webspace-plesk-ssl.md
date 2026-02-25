---
id: webspace-plesk-ssl
title: "Webspace: Create an SSL Certificate in Plesk"
description: "Learn how to secure your website with an SSL certificate in Plesk and enable HTTPS for encrypted connections."
sidebar_label: Create SSL Certificate
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

An SSL certificate encrypts the connection between your website and its visitors. Once HTTPS is enabled, browsers establish a secure connection and display a padlock icon in the address bar. This protects sensitive data, increases trust, and prevents browsers from marking your website as insecure.

<InlineVoucher />

## Securing Your Main Domain

When a domain is first created in Plesk, it is accessible via HTTP and not encrypted. In the Plesk panel, you can see that no certificate is assigned yet. If you open the domain in a browser at this stage, it will typically be marked as not secure:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

To activate encryption, open the domain in your Plesk panel and navigate to **SSL/TLS Certificates**. The corresponding menu will open:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

From here, you can request a free Let's Encrypt certificate. During the request process, you must provide a valid email address and select the domain names that should be secured. In most cases, both the root domain and the www subdomain are selected, provided the www entry exists in your DNS configuration:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

After confirming the request by clicking **Get it free**, Plesk communicates with Let's Encrypt and issues the certificate automatically. Once the certificate has been created successfully, HTTPS should be enforced by activating the permanent redirect from HTTP to HTTPS in the hosting settings:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

After activation, all visitors are automatically redirected to the encrypted HTTPS version of your website. You can verify the installation by opening your domain with https in the browser.



## Securing All Subdomains with a Wildcard Certificate

If multiple subdomains are used or planned, a wildcard certificate provides a more efficient solution. It secures the main domain as well as all existing and future subdomains. To request a wildcard certificate, open the **SSL/TLS Certificates** menu again:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Select the option to renew or request a Let's Encrypt certificate. Enable the option to secure the wildcard domain:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

After confirming the request, Plesk will display a blue information box containing a DNS TXT record that must be created:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

This TXT record must be added to the DNS zone of your domain exactly as provided. It confirms domain ownership and allows Let's Encrypt to validate the request. A DNS entry will look similar to the following example:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning DNS Propagation Delay
DNS propagation can take up to 24 hours until the TXT record is globally accessible. During this time, validation may fail because some DNS servers still return outdated information. If this happens, wait until the record has fully propagated and then retry the verification.
:::



To ensure that the TXT record has been propagated correctly and is publicly accessible, you can verify it using an external DNS lookup tool such as the MXToolbox SuperTool:

https://mxtoolbox.com/SuperTool.aspx

Open the website and select the **TXT Lookup** option. Enter the full hostname provided by Plesk, usually in the format `_acme-challenge.yourdomain.com`, and start the lookup. The tool will query public DNS servers and display the currently visible TXT records.

If the correct verification value is displayed exactly as shown in Plesk, the DNS entry has been propagated successfully and Let's Encrypt can validate the domain ownership. If no result is returned or the value differs, DNS propagation may still be in progress. In that case, wait and repeat the lookup after some time until the correct entry becomes visible worldwide.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Once the record is visible, return to Plesk and trigger the validation again. If successful, the wildcard certificate will be issued and displayed as protected. From this point onward, any newly created subdomain will automatically be secured.



## Conclusion

Congratulations! Your website is now successfully protected with SSL encryption. All data transmitted between your server and visitors is secured, browsers recognize your domain as trusted, and HTTPS is enforced automatically. 

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />