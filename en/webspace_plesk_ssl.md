---
id: webspace_plesk_ssl
title: Webspace: Create SSL certificate
description: Information on how to create an SSL certificate for your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Create SSL Certificate
---

## Encrypt website with SSL

> It is assumed that the domain already points to the IP of the web space.

If a domain is created in the web space, it is always unencrypted at the beginning. This can be seen in the Plesk panel:

![image](https://user-images.githubusercontent.com/13604413/159176735-65c6494b-0cba-4e92-a6c7-c33b28b3a153.png)

And the notification in the browser when opening the domain:

![image](https://user-images.githubusercontent.com/13604413/159176736-661b1f50-ffa2-45a8-8635-4e008d29c20a.png)
![image](https://user-images.githubusercontent.com/13604413/159176743-154bf742-e93e-4743-8a0a-0f43e46952a9.png)

With an SSL certificate, a domain can be protected/encrypted accordingly.

## Creation of the Certificate 

Step 1️⃣: With a double click on "SSL/TLS Certificate" the following menu opens:

![image](https://user-images.githubusercontent.com/13604413/159176748-32786fa1-7e69-441d-a3e3-1c8da3fbdb4a.png)

A Lets Encrypt Certificate can be requested free of charge.

Step 2️⃣: Enter/fill in the required information. In order for the certificate to be requested, details must be provided.

A mail address must be specified and a check must be made of what the certificate should be valid for. As a rule, each domain also has the subdomain "www" active, which is why it is also selected if it has also been entered in the DNS of the domain.

![image](https://user-images.githubusercontent.com/13604413/159176751-d001f779-d5be-48be-ae8b-7ef8716fe592.png)


The certificate is then requested by clicking on "Get it free".

Step 3️⃣: The certificate has now been created, this can be seen at the top right. In addition, the automatic forwarding from HTTP to HTTPS must now take place, since otherwise encryption cannot be established: 

![image](https://user-images.githubusercontent.com/13604413/159176758-4c6cd586-64d7-42d3-a8ae-eddfb605e8d3.png)

If this has been done, the forwarding is now active. No matter whether you open the page with http or https directly in the browser, it is now always directed to https. 

Step 4️⃣: Now you can check in the browser whether the certificate has been recognized:

The lock must be present: 

![image](https://user-images.githubusercontent.com/13604413/159176761-64ef2d83-8c05-4610-bb4e-40a1506e25d8.png)

The certificate info, which can be opened by clicking on the lock, should also show the domain:

![image](https://user-images.githubusercontent.com/13604413/159176764-6a3be7b8-6e0c-4ab0-8a51-bded7476c556.png)

The website is now properly protected/encrypted. 

## Certificates for Subdomains 

The same steps can theoretically also be followed for a subdomain. However, there is also an easier way to encrypt all subdomains at the same time, regardless of whether they already exist or which are new. A "wildcard certificate" can be used for this. This requires a special TXT entry in the DNS of the domain. As soon as it is available, however, it can issue an SSL certificate for all subdomains.

Step 1️⃣: The SSL/TLS certificate menu is opened again.

![image](https://user-images.githubusercontent.com/13604413/159176787-2ffd121c-0ad0-44ca-bea1-185e13ac81ad.png)

Then click on "Renew Certificate" in the top left. 
Now the Lets Encrypt request window opens:

![image](https://user-images.githubusercontent.com/13604413/159176792-4d648b72-9903-4526-9a6e-984b3cb6a35a.png)

Now select "Secure the wildcard domainn":

![image](https://user-images.githubusercontent.com/13604413/159176798-7c6fff87-f9ac-4fd8-9a54-2697c3b5575b.png)

The subdomain "www" and "webmail" are automatically added. 
The button "Get it free" is then clicked again.

Step 2️⃣: A blue box now appears with important information:

![image](https://user-images.githubusercontent.com/13604413/159176800-483c32c6-bb31-47bf-91bb-38aab2b47288.png)

A domain name and a value are given there. This must be permanently available as a TXT in the DNS of the domain, this is the only way Lets Encrypt can ensure that the domain is genuine and can be verified.

An entry in the DNS should look like this:

![image](https://user-images.githubusercontent.com/13604413/159176807-99f29bd6-3ae0-499b-a048-308752083b03.png)

> A DNS entry can take up to 24 hours to be accessible from anywhere in the world.

To ensure that the TXT entry is already active, the "TXT Lookup SuperTool" from mxtoolbox can be used: https://mxtoolbox.com/SuperTool.aspx:

![image](https://user-images.githubusercontent.com/13604413/159176810-2491729f-2604-47af-aa08-525f12ea2085.png)

If the entered entry is already displayed, it can be confirmed in the blue box in Plesk by clicking on "Reload". Now it is checked whether the DNS entry is present, since this is the case, after a few seconds "protected" is displayed for "SSL/TLS-holder Ccertificate" aka "Wildcard Certificate":

![image](https://user-images.githubusercontent.com/13604413/159176811-32bf65ce-57cf-40c4-9c84-2f0a6fbf1cdc.png)

If a subdomain is now created, it is already protected: 

![image](https://user-images.githubusercontent.com/13604413/159176814-75297c89-134d-4e54-a471-3baf6e7dc627.png)

Now the complete data transfer is encrypted to the side, done.
