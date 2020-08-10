---
id: vserver_linux_ssl
title: SSL-Zertifikat (Let's Encrypt)
sidebar_label: SSL-Zertifikat (Let's Encrypt)
---

## Was ist Let's Encrypt?

Let's Encrypt ist eine Zertifizierungsstelle (CA), die kostenlose SSL/TLS-Zertifikate anbietet. So erhältst du kostenlos ein gültiges SSL-Zertifikat für deine Domain. Die Zertifikate können nur von dem Server angefordert werden, auf den die Domain verweist. Let's Encrypt prüft die DNS der Domain, welche auf den aktuellen Server zeigt. Anschließend wird das Zertifikat ausgestellt. In dieser Anleitung wird die Einrichtung sowohl mit dem Apache als auch Nginx Webserver erklärt. 



## Vorbereitung

Damit ein SSL-Zertifikat generiert werden kann ist es zwingend notwendig, dass die DNS-Einstellungen bereits entsprechend eingenommen wurden, sodass die Domain auf den Dienst verweist. Ebenfalls ist es wichtig, dass ein Webserver installiert ist. Falls noch nicht erledigt muss noch ein beliebiger Webserver installiert werden. Hierbei kann sowohl Apache als auch Nginx benutzt werden. Eingerichtet werden können die Dienste mit den folgenden Befehlen:

**Apache:**

```
sudo apt-get install apache2
```

**Nginx:**

```
sudo apt-get install nginx
```



## Einrichtung

Wenn alle Punkte in der Vorbereitung berücksichtigt wurden, dann können wir mit der eigentlichen Einrichtung von Let's Encrypt. Dafür benötigen wir zunächst einmal den Let's Encrypt Client, womit wir im Anschluss das Zertifikat generieren können:

```
sudo apt-get install git
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
cd /opt/letsencrypt
```



Nun können wir das SSL-Zertifikat generieren. Der Befehl dafür lautet wie folgt:

```
sudo -H ./letsencrypt-auto certonly --standalone -d example.com -d www.example.com
```

Für jede weitere Domain/Subdomain Name muss ein **-d example.com** hinzugefügt werden. An Stelle von example.com fügst du dort deinen bestellten Domainname ein. Im Anschluss wirst du aufgefordert eine **E-Mail-Adresse** anzugeben. Drücke **Enter** um die Eingabe zu bestätigen. Daraufhin müssen noch die Nutzungsbedingungen bestätigt werden:

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

Wenn alles in Ordnung ist, dann wird eine Meldung wie die folgende zu sehen sein. Diese Meldung bedeutet, dass Let's Encrypt dein Zertifikat genehmigt und ausgestellt hat.

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



Am Ende muss noch entsprechend die Virtualhost Datei des Webservers angepasst werden. Je nach Webserver müssen folgende Einträge angepasst werden:

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



## SSL-Zertifikat automatisch erneuern (Optional)

Darüber hinaus kann die Erneuerung von Zertifikaten automatisiert werden. Dadurch wird verhindert, dass die Zertifikate ablaufen. Umgesetzt werden kann das mit einem Cronjob. Führe den Befehl **sudo crontab -e** aus und füge folgenden Inhalt am Ende hinzu:

```
0 0 1 * * /opt/letsencrypt/letsencrypt-auto renew
```

