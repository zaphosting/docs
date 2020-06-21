---
id: vserver_linux_ssl
title: SSL-Certificate (Let's Encrypt)
sidebar_label: SSL-Certificate (Let's Encrypt)
---

## What is Let's Encrypt?

Let's Encrypt is a Certificate Authority (CA) that offers free SSL/TLS certificates. This way you can get a valid SSL certificate for your domain for free. The certificates can only be requested from the server the domain points to. Let's Encrypt checks the DNS of the domain which points to the current server. Then the certificate will be generated. In this tutorial we explain the setup with both Apache and Nginx web servers. 



## Preparation

In order to generate an SSL certificate, it is essential that the DNS settings have already been set so that the domain points to the service. It is also important that a web server is installed. If not yet done, a web server of your choice must be installed. Both Apache and Nginx can be used. The services can be set up with the following commands:
**Apache:**

```
sudo apt-get install apache2
```

**Nginx:**

```
sudo apt-get install nginx
```



## Setup

If all points have been considered in the preparation, then we can start with the actual setup of Let's Encrypt. To do so, we first need the Let's Encrypt client, which we can use to generate the certificate afterwards:
```
sudo apt-get install git
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
cd /opt/letsencrypt
```



Now we can generate the SSL certificate. The command for this looks like this:
```
sudo -H ./letsencrypt-auto certonly --standalone -d example.com -d www.example.com
```

For each additional domain/subdomain name a **-d example.com** must be added. Instead of example.com you add your ordered domain name to it. You will then be asked to enter a **e-mail address**. Press **Enter** to confirm your input. After that you have to confirm the terms of use:
```
-------------------------------------------------------------------------------
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v01.api.letsencrypt.org/directory
-------------------------------------------------------------------------------
(A)gree/(C)ancel: a

-------------------------------------------------------------------------------
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about EFF and
our work to encrypt the web, protect its users and defend digital rights.
-------------------------------------------------------------------------------
(Y)es/(N)o: n
```

If everything is fine, then you will see a message like the following. This message means that Let's Encrypt has approved and created your certificate.
```
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/example.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/example.com/privkey.pem
   Your cert will expire on 2018-05-27. To obtain a new or tweaked
   version of this certificate in the future, simply run
   letsencrypt-auto again. To non-interactively renew *all* of your
   certificates, run "letsencrypt-auto renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```



Finally, the virtual host file of the web server must be adjusted accordingly. Depending on the web server the following options have to be adjusted:
**Apache:**

```
SSLEngine on
SSLCertificateFile /etc/letsencrypt/live/example.com/cert.pem
SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
SSLCertificateChainFile /etc/letsencrypt/live/example.com/chain.pem
```

**Nginx:**

```
ssl on;
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
```



## Renew SSL certificate automatically (optional)

Furthermore, the renewal of certificates can also be automated. This prevents the certificates from expiring. You can implement this with a cronjob. Execute the command **sudo crontab -e** and add the following content at the end:
```
0 0 1 * * /opt/letsencrypt/letsencrypt-auto renew
```

