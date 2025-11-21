---
id: vserver-linux-ssl
title: "vServer: SSL-Zertifikat erstellen (Let's Encrypt) für Linux-Server"
description: "Entdecke, wie du deine Website mit kostenlosen SSL-Zertifikaten via Certbot und Let's Encrypt absicherst für eine sichere Datenübertragung → Jetzt mehr erfahren"
sidebar_label: SSL-Zertifikat installieren (Let's Encrypt)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

SSL-Zertifikate sind ein essenzieller Bestandteil des Internets und sorgen dafür, dass Daten sicher zwischen Client und Host übertragen werden können. In dieser Anleitung zeigen wir dir, wie du das Open-Source-Tool [**Certbot**](https://certbot.eff.org/) einrichtest, um kostenlose SSL-Zertifikate von der gemeinnützigen Zertifizierungsstelle **Let's Encrypt** anzufordern.

<InlineVoucher />

## Vorbereitung

Um Certbot nutzen zu können, brauchst du einen Linux-Server und eine **Domain**, die du besitzt. Du musst Zugriff auf die DNS-Einstellungen der Domain haben und **musst** für jede Root-Domain oder Subdomain, die du verwenden möchtest, einen `A` DNS-Eintrag anlegen, der auf die IP-Adresse deines __Linux-Servers__ zeigt.

Certbot bietet außerdem zusätzliche Plugins, mit denen du ein Zertifikat für eine Domain mit nur einem Klick einrichten kannst – kompatibel mit verschiedenen Webservern wie Nginx oder Apache. Wir empfehlen Nginx, da es ein performanter und beliebter Open-Source-Webserver ist. Hilfe zur Einrichtung findest du in unserer [Linux Reverse Proxy](vserver-linux-proxy.md) Anleitung.

## Installation

Starte mit der Installation des Open-Source-Pakets [**Certbot**](https://certbot.eff.org/), mit dem du kostenlose SSL-Zertifikate von **Let's Encrypt** anfordern kannst.

```
sudo apt install certbot
```

Nachdem Certbot installiert ist, kannst du Zertifikate für deine Domain(s) anfordern. Let's Encrypt und Certbot bieten verschiedene ACME-Challenges, um den Besitz der Domain zu verifizieren.

Wir empfehlen dringend die Standardmethode **HTTP-01**, da sie automatische Erneuerungen ermöglicht. Falls du damit Probleme hast, kannst du alternativ die manuelle **DNS-01**-Methode nutzen, die über einen **TXT** DNS-Eintrag funktioniert, aber keine automatische Erneuerung unterstützt.

:::tip Nutze Webserver-Plugins
Wenn du einen Webserver wie Nginx, Apache oder einen eigenen Webserver nutzt, empfehlen wir dir, direkt zum Abschnitt **Webserver-Plugins** weiter unten zu springen. Dort zeigen wir, wie du zusätzliche Certbot-Plugins für diese Webserver nutzt, um eine „One-Click“-Installation zu machen und Zertifikate anzufordern, ohne den Webserver stoppen zu müssen.
:::

### HTTP-01 Challenge

Mit installiertem Certbot kannst du jetzt Zertifikate für deine Domain(s) anfordern. In diesem Beispiel nutzen wir den Standalone-Modus, bei dem Certbot einen temporären Webserver startet, um die Challenge durchzuführen. Dafür musst du Port 80 in deiner Firewall öffnen und darfst keinen anderen Webserver oder Dienst auf Port 80 laufen haben, damit der temporäre Webserver starten und die Challenge abgerufen werden kann (daher der Name `HTTP` in der Challenge).

Im folgenden Befehl nutzt du den Parameter `--standalone`, um Certbot mitzuteilen, dass der temporäre Webserver verwendet werden soll.

```
# Für Root-Domains
certbot certonly --standalone -d [deine_root_domain] -d www.[deine_root_domain]

# Für Subdomains
certbot certonly --standalone -d [deine_domain]

# Interaktive Einrichtung
certbot certonly --standalone
```

Nach Ausführung des Befehls wirst du eventuell durch eine erste interaktive Einrichtung geführt, bei der du eine E-Mail-Adresse für die Zertifikatskommunikation eingeben musst, gefolgt von einer optionalen Mailingliste und den AGB, denen du zustimmen musst.

Certbot generiert nun eine ACME-Challenge und hostet sie über den temporären Webserver. Die Let's Encrypt-Server versuchen dann, diese von deinem Server abzurufen. Bei Erfolg werden die Zertifikate erstellt und im Verzeichnis `/etc/letsencrypt/live/[deine_domain]` gespeichert.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Du kannst die SSL-Zertifikate jetzt überall dort nutzen, wo du sie brauchst, indem du einfach den lokalen Pfad zu den Zertifikaten angibst.

### TXT DNS-Eintrag

Falls du Probleme hast, deine Domain über die **HTTP-01**-Methode zu verifizieren, kannst du alternativ die **DNS-01**-Methode nutzen. Dabei erstellst du einen **TXT** DNS-Eintrag mit einem von Let's Encrypt vorgegebenen Wert.

Wie bereits erwähnt, unterstützt diese Methode **keine automatische Erneuerung**, außer du richtest eine eigene Infrastruktur dafür ein. Deshalb empfehlen wir, wenn möglich, die **HTTP-01**-Methode zu verwenden.

Im folgenden Befehl nutzt du den Parameter `--preferred-challenges`, um Certbot mitzuteilen, dass du die `DNS-01`-Methode verwenden möchtest.

```
# Für Root-Domains
certbot certonly --preferred-challenges dns-01 -d [deine_root_domain] -d www.[deine_root_domain] --manual -m [deine_email]

# Für Subdomains
certbot certonly --preferred-challenges dns-01 -d [deine_domain] --manual -m [deine_email]

# Interaktive Einrichtung
certbot certonly --preferred-challenges dns-01
```

Nach Ausführung des Befehls wirst du eventuell durch eine erste interaktive Einrichtung geführt, bei der du eine E-Mail-Adresse für die Zertifikatskommunikation eingeben musst, gefolgt von einer optionalen Mailingliste und den AGB, denen du zustimmen musst.

Certbot gibt dir nun Anweisungen, wie du einen **TXT** DNS-Eintrag mit einem bestimmten Wert anlegen musst. Der Zielname ist typischerweise `_acme-challenge.` gefolgt von deiner Domain (z.B. `_acme-challenge.zapdocs.example.com`), und den Wert findest du in der Konsole.

Nachdem du den Eintrag erstellt hast, drücke Enter, um fortzufahren. Wenn alles korrekt ist und sich der Eintrag propagiert hat, werden die Zertifikate erstellt und im Verzeichnis `/etc/letsencrypt/live/[deine_domain]` gespeichert.

:::note
Bitte hab Geduld, da DNS-Änderungen etwas Zeit brauchen, um sich zu verbreiten. Normalerweise dauert das nur wenige Minuten, in seltenen Fällen kann es aber auch länger dauern.
:::

Du kannst die SSL-Zertifikate jetzt überall dort nutzen, wo du sie brauchst, indem du einfach den lokalen Pfad zu den Zertifikaten angibst.

## Webserver-Plugins

Certbot bietet verschiedene zusätzliche Webserver-Plugins, die das Zertifikatsmanagement noch einfacher machen, da sie automatisch die relevanten Server-Blöcke anpassen. Um ein Plugin zu nutzen, fügst du einfach den passenden Parameter zu deinem `certbot`-Befehl hinzu.

Beide Methoden nutzen die **HTTP-01**-Challenge und funktionieren im Prinzip gleich. Certbot sucht zuerst den Server-Block, der die angefragte Domain als `server_name` enthält. Dann generiert Certbot eine ACME-Challenge und fügt einen temporären `location /.well-known/acme-challenge/...` Block in die Server-Block-Konfiguration ein.

Die Let's Encrypt-Server versuchen dann, die Challenge von deinem Server abzurufen. Bei Erfolg wird dein Zertifikat generiert und die Server-Block-Konfiguration wird automatisch angepasst, um HTTPS (Port 443) zu nutzen und die Pfade zu den neuen Zertifikaten einzutragen.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx Plugin

Bevor du das Plugin nutzt, stelle sicher, dass es installiert ist.

```
sudo apt install python3-certbot-nginx
```

Um das Nginx-Plugin zu verwenden, nutze den Parameter `--nginx` in deinem Befehl.

```
# Für Root-Domains
certbot --nginx -d [deine_root_domain] -d www.[deine_root_domain]

# Für Subdomains
certbot --nginx -d [deine_domain]

# Interaktive Einrichtung
certbot --nginx
```

:::tip
Wenn du automatische „One-Click“-Anpassungen der Server-Blöcke durch Certbot deaktivieren möchtest, kannst du den Parameter `certonly` hinzufügen, z.B. `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache Plugin

Bevor du das Plugin nutzt, stelle sicher, dass es installiert ist.

```
sudo apt install python3-certbot-apache
```

Um das Apache-Plugin zu verwenden, nutze den Parameter `--apache` in deinem Befehl.

```
# Für Root-Domains
certbot --apache -d [deine_root_domain] -d www.[deine_root_domain]

# Für Subdomains
certbot --apache -d [deine_domain]

# Interaktive Einrichtung
certbot --apache
```

:::tip
Wenn du automatische „One-Click“-Anpassungen der Server-Blöcke durch Certbot deaktivieren möchtest, kannst du den Parameter `certonly` hinzufügen, z.B. `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot Plugin

Wenn du deinen eigenen lokalen Webserver nutzt, der keine Standardsoftware ist, möchtest du vielleicht die Webroot-Methode verwenden, um deinen Webserver weiterlaufen zu lassen, ohne ihn stoppen zu müssen.

Um das Webroot-Plugin zu nutzen, verwende den Parameter `--webroot` in deinem Befehl. Zusätzlich musst du mit `-w [dein_webserver_pfad]` (kurz für `--webroot-path`) den Pfad zum obersten Verzeichnis deines Webservers angeben.

```
# Für Root-Domains
certbot --webroot -w [dein_webserver_pfad] -d [deine_root_domain] -d www.[deine_root_domain]

# Für Subdomains
certbot --webroot -w [dein_webserver_pfad] -d [deine_domain]

# Interaktive Einrichtung
certbot --webroot -w [dein_webserver_pfad]
```

:::tip
Ein häufiger Webroot-Pfad ist `/var/www/html`. Du kannst diese Methode auch für Webserver wie Nginx oder Apache nutzen, wenn du den Webserver weiterlaufen lassen möchtest, ohne automatische Server-Block-Anpassungen wie bei den nativen Plugins.
:::

</TabItem>
</Tabs>

## Automatische Erneuerung

In den meisten Fällen richtet Certbot die automatische Erneuerung der Zertifikate für dich über einen Cronjob und/oder systemd-Timer ein. Du kannst das mit folgendem Befehl testen, der mit `--dry-run` einen Probelauf macht.

```
certbot renew --dry-run
```

:::tip
Wie bereits erwähnt, unterstützt die **DNS-01**-Methode keine automatische Erneuerung via Certbot, außer du richtest eine eigene Infrastruktur dafür ein. Deshalb empfehlen wir, wenn möglich, die **HTTP-01**-Methode.
:::

Der Test sollte erfolgreich sein, wenn alles korrekt eingerichtet ist. Wenn du die automatische Erneuerung ansehen oder anpassen möchtest, findest du den entsprechenden Befehl in einem der folgenden Verzeichnisse: `/etc/crontab/`, `/etc/cron.*/*` oder über `systemctl list-timers`.

### Manuelle Cronjob-Einrichtung

Falls die automatische Erneuerung nicht eingerichtet ist, kannst du sie selbst per Cronjob hinzufügen. Öffne die Crontab mit `crontab -e`. Wenn du das zum ersten Mal machst, wirst du aufgefordert, einen Editor auszuwählen. Wähle die erste Option, normalerweise `/bin/nano`.

Im geöffneten Nano fügst du folgende Zeile hinzu, um die Erneuerung täglich um 6 Uhr morgens lokal auszuführen.

```
0 6 * * * certbot renew
```

Speichere die Datei und beende Nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

## Fazit

Du hast erfolgreich Certbot für deine Domain(s) eingerichtet – egal ob im Standalone-Modus, per Webroot oder mit einem der Plugins – und sorgst so für eine sichere Datenübertragung via HTTPS auf deiner Website. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />