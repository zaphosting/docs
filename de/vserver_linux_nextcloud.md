(!!Nicht fertig!!)

---
id: vserver_linux_nextcloud
title: Nextcloud
sidebar_label: Nextcloud
---

## Was ist Nextcloud?

Nextcloud ist eine Open-Source-Cloud-Lösung und Abspaltung von Owncloud, die 2016 vom ehemaligen Owncloud-Gründer Frank Kalitschek aufgrund unterschiedlicher Auffassungen ins Leben gerufen wurde.



![img](https://screensaver01.zap-hosting.com/index.php/s/psZWxkYQebyiqoc/preview)



Um eine optimale Leistung, Stabilität und Funktionalität zu gewährleisten, wird für den Betrieb eines Nextcloud-Servers die folgende Einrichtung empfohlen. Der Nextcloud-Server ist nicht mit Windows und MacOS kompatibel. Zumindest nicht ohne weitere Virtualisierung oder ähnlichen Workarounds.



**Systemvoraussetzungen**



**Hardware**

| **Components** | Minimum                | Recommended                 |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM            | 512 MB                 | 4+ GB                       |
| Disc           | 10 GB                  | 50+ GB                      |
| Bandwidth      | 100 mbit/s (up & down) | 500-1000 mbit/s (up & down) |

‌

**Software**

| Platform         | Options                                                      |
| ---------------- | ------------------------------------------------------------ |
| Operating System | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| Database         | MySQL or MariaDB 5.5+ (recommended),  SQLite (only recommended for testing and minimal-instances) |
| Web server       | Apache 2.4 with `mod_php` or `php-fpm` (recommended)         |
| PHP              | 5.6, 7.0 (recommended), 7.1 (recommended), 7.2               |

> Die Anforderungen wurden aus unseren eigenen Erfahrungen und den Informationen der Entwickler zusammengestellt.



## Installation von Nextcloud



### Vorbereitung

Damit die Cloud auf einem Linux-Server installiert werden kann, muss eine Verbindung über einen SSH-Client hergestellt werden. Wenn du dir nicht sicher bist, wie man SSH benutzt, findest du hier eine Anleitung dazu: [Erstzugriff (SSH)]([vserver_linux_ssh.md](https://github.com/zap-docs/docs/blob/master/de/vserver_linux_ssh.md))



Sobald die Verbindung hergestellt wurde, ist es möglich, mit der Installation der notwendigen Pakete zu beginnen, welche für die eigentliche Installation von Nextcloud erforderlich sind. Dazu gehört zum einendie Installation eines Webservers als auch PHP.



> TABS FUNKTIONIEREN NOCH NICHT SO WIE GEWOLLT. MUSS NOCH EINGEBUNDEN WERDEN





### Installation

Nun kann die eigentliche Installation von Nextcloud gestartet werden. Die Software muss heruntergeladen und entpackt werden:

```
cd /var/www/nextcloud/
wget https://download.nextcloud.com/server/releases/nextcloud-16.0.4.zip
apt-get install unzip
unzip nextcloud-16.0.4.zip
chown -R www-data:www-data nextcloud
rm nextcloud-16.0.4.zip
```



Wenn dieser Schritt abgeschlossen ist, dann ist es an der Zeit  das Installationsscript auszuführen. Der Zugriff erfolgt über den Browser mit folgender Adresse:

> **http://YOUR_IP_ADDRESS/nextcloud/** 

Es erscheint die Konfiguration des Installationsscipt, in der ein Root-Benutzer angelegt und die Datenbankinformationen definiert werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/DeEyH2Ni6fKDbTm/preview)



![img](https://screensaver01.zap-hosting.com/index.php/s/pidgFL4z2o7ZJc6/preview)







### Absicherung und Sicherheit



**Setup Warnungen**

![img](https://screensaver01.zap-hosting.com/index.php/s/y5RSDRRdHiRRLgm/preview)



**Daten-Verzeichnis**

Es wird dringend empfohlen, das Datenverzeichnis außerhalb des Web-Stammverzeichnisses zu platzieren (d.h. außerhalb von /var/www). Am einfachsten ist es, dies bei einer Neuinstallation zu tun. Das Verzeichnis kann im Setup definiert werden. Allerdings muss das Verzeichnis zuerst erstellt und die entsprechenden Rechte gesetzt werden. Die Daten könnten z.B. in einem Verzeichnis mit dem Namen Cloud im Home-Verzeichnis gespeichert werden.



```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via SSL-Zertifikat (Let's Encrypt)** 

Eine gute Cloud sollte nur über eine SSL-Verschlüsselung zugänglich sein. Ohne eine SSL-Verschlüsselung werden die Daten und Informationen im Klartext übertragen. Solche Informationen können ohne Verschlüsselung schnell und einfach abgefangen und gelesen werden.



```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/html/cloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/html/cloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/html/cloud
 SetEnv HTTP_HOME /var/www/html/cloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



Darüber hinaus sollte der gesamte HTTP-Verkehr unter Verwendung einer permanenten Umleitung mit Statuscode 301 auf HTTPS umgeleitet werden. Dies kann unter Verwendung des Apache mit einer Konfiguration wie der folgenden Apache-VirtualHosts-Konfiguration erreicht werden:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```

Wenn du dir nicht sicher bist, wie du ein SSL-Zertifikat generieren kannst, dann findest du hier eine Anleitung dazu: [Placeholder]([vserver_linux_ssh.md](https://github.com/zap-docs/docs/blob/master/de/vserver_linux_ssh.md))



## Nextcloud verwalten

Der Zugriff auf die Nextcloud ist sowohl über den Browser, als auch über das Smartphone und den Computer per App möglich. Die entsprechenden Downloads sind hier zu finden: https://nextcloud.com/install/#install-clients



![img](https://screensaver01.zap-hosting.com/index.php/s/jHPsfXDf5dHFk2y/preview)



Unter den Einstellungen können auch nach der Einrichtung noch einige Optionen angepasst und wichtige Informationen wie Logs, Aktivitäten eingesehen werden. Dazu gehören unter anderem zusätzliche Sicherheitseinstellungen (Zwei-Faktor-Authentifizierung, Verschlüsselung, ... ), Designeinstellungen (Logo, Farbe, Slogan, Header), Zugriffseinstellungen und vieles mehr.



**Apps**

Zusätzlich gibt es auch die Möglichkeit neben den Standard Apps noch weitere Apps zu installieren. Diese können über den Menüpunkt **Apps** eingesehen werden.



![img](https://screensaver01.zap-hosting.com/index.php/s/MtXpFpCEt7ZQ7ZY/preview)



Mit solchen **Apps** ist es möglich die Nextcloud zusätzlich noch weiter nach seinen Wünschen zu individualisieren.



