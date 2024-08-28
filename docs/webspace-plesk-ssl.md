---
id: webspace-plesk-ssl
title: "Webspace: Create SSL certificate"
description: Information on how to create an SSL certificate for your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Create SSL Certificate
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Encrypt website with SSL

:::info
It is assumed that the domain already points to the IP of the web space.
:::

If a domain is created in the web space, it is always unencrypted at the beginning. This can be seen in the Plesk panel:

![image](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

And the notification in the browser when opening the domain:

![image](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![image](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

With an SSL certificate, a domain can be protected/encrypted accordingly.

<InlineVoucher />

## Creation of the Certificate 

Step 1️⃣: With a double click on "SSL/TLS Certificate" the following menu opens:

![image](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

A Let's Encrypt Certificate can be requested free of charge.

Step 2️⃣: Enter/fill in the required information. In order for the certificate to be requested, details must be provided.

A mail address must be specified and a check must be made of what the certificate should be valid for. As a rule, each domain also has the subdomain "www" active, which is why it is also selected if it has also been entered in the DNS of the domain.

![image](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)


The certificate is then requested by clicking on "Get it free".

Step 3️⃣: The certificate has now been created, this can be seen at the top right. In addition, the automatic forwarding from HTTP to HTTPS must now take place, since otherwise encryption cannot be established: 

![image](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

If this has been done, the forwarding is now active. No matter whether you open the page with http or https directly in the browser, it is now always directed to https. 

Step 4️⃣: Now you can check in the browser whether the certificate has been recognized:

The lock must be present: 

![image](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

The certificate info, which can be opened by clicking on the lock, should also show the domain:

![image](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

The website is now properly protected/encrypted. 

## Certificates for Subdomains 

The same steps can theoretically also be followed for a subdomain. However, there is also an easier way to encrypt all subdomains at the same time, regardless of whether they already exist or which are new. A "wildcard certificate" can be used for this. This requires a special TXT entry in the DNS of the domain. As soon as it is available, however, it can issue an SSL certificate for all subdomains.

Step 1️⃣: The SSL/TLS certificate menu is opened again.

![image](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Then click on "Renew Certificate" in the top left. 
Now the Let's Encrypt request window opens:

![image](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Now select "Secure the wildcard domainn":

![image](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

The subdomain "www" and "webmail" are automatically added. 
The button "Get it free" is then clicked again.

Step 2️⃣: A blue box now appears with important information:

![image](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

A domain name and a value are given there. This must be permanently available as a TXT in the DNS of the domain, this is the only way Let's Encrypt can ensure that the domain is genuine and can be verified.

An entry in the DNS should look like this:

![image](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
A DNS entry can take up to 24 hours to be accessible from anywhere in the world.
:::

To ensure that the TXT entry is already active, the "TXT Lookup SuperTool" from mxtoolbox can be used: https://mxtoolbox.com/SuperTool.aspx:

![image](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

If the entered entry is already displayed, it can be confirmed in the blue box in Plesk by clicking on "Reload". Now it is checked whether the DNS entry is present, since this is the case, after a few seconds "protected" is displayed for "SSL/TLS-holder Ccertificate" aka "Wildcard Certificate":

![image](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

If a subdomain is now created, it is already protected: 

![image](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Now the complete data transfer is encrypted to the side, done.
