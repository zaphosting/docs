---
id: vserver-linux-certbot
title: "vServer: Certbot unter Linux einrichten"
description: Informationen zur Einrichtung von Certbot auf deinem Linux vServer von ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Certbot installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
SSL-Zertifikate sind ein wesentlicher Bestandteil des Internets und stellen sicher, dass Daten sicher zwischen Client und Host übertragen werden können. In dieser Anleitung werden wir den Prozess der Einrichtung des Open-Source-Tools [**Certbot**](https://certbot.eff.org/) zur Beantragung kostenloser SSL-Zertifikate bei der gemeinnützigen Zertifizierungsstelle **Let's Encrypt** untersuchen.

<InlineVoucher />

## Vorbereitung

Um Certbot nutzen zu können, benötigst du einen Linux-Server und eine **Domain**, die dir gehört. Du musst Zugriff auf die DNS-Einstellungen der Domain haben und **musst** für jede Root-Domain oder Sub-Domain, die du verwenden möchtest, einen `A`-DNS-Eintrag erstellen, der auf die IP-Adresse deines __Linux-Server__ verweist.

Certbot verfügt außerdem über zusätzliche Plugins, mit denen du ganz einfach mit einem Klick ein Zertifikat für eine Domain einrichten kannst, das mit einer Vielzahl von Webservern wie Nginx oder Apache funktioniert. Wir empfehlen die Verwendung von Nginx, da es sich um einen hochleistungsfähigen und beliebten Open-Source-Webserver handelt. Weitere Informationen zur Einrichtung findest du in unserer [Linux-Reverse-Proxy](vserver-linux-proxy.md) Anleitung.

## Installation

Beginne mit der Installation des Open-Source-Pakets [**Certbot**](https://certbot.eff.org/), das du verwenden wirst, um kostenlose SSL-Zertifikate von **Let's Encrypt** anzufordern.
```
sudo apt install certbot
```

Nachdem Certbot nun installiert ist, kannst du Zertifikate für deine Domain(s) anfordern. Let's Encrypt und Certbot bieten eine Vielzahl von ACME-Herausforderungen an, um den Besitz der Domain zu überprüfen.

Wir empfehlen dringend, die Standardmethode **HTTP-01** zu verwenden, da sie eine automatische Verlängerung ermöglicht. Wenn du jedoch Probleme damit hast, kannst du alternativ die Methode **DNS-01** verwenden, die manuell ist und keine automatische Verlängerung unterstützt, da sie auf der Überprüfung mithilfe eines **TXT**-DNS-Eintrags basiert.

:::tip Verwende Webserver-Plugins
Für Leser, die einen Webserver wie Nginx, Apache oder einen eigenen Webserver verwenden, empfehlen wir, zum Abschnitt **Webserver-Plugins** weiter unten zu wechseln, in dem gezeigt wird, wie zusätzliche Certbot-Plugins für diese Webserver verwendet werden können, um eine "Ein-Klick"-Installationskonfiguration zu nutzen und Zertifikate anzufordern, ohne den Webserver ausschalten zu müssen.
:::

### HTTP-01-Challenge

Nachdem Certbot nun installiert ist, kannst du Zertifikate für deine Domain(s) anfordern. In diesem Beispiel verwenden wir den Standalone-Modus, d. h. Certbot startet einen temporären Webserver, über den du die erforderlichen Aktionen durchführen kannst. Das bedeutet, dass du Port 80 in deinen Firewall-Regeln öffnen musst und keine vorhandenen Webserver oder Dienste auf Port 80 laufen dürfen, damit der temporäre Webserver gestartet und die Challenge abgerufen werden kann (daher das `HTTP` im Namen der Challenge).

Im folgenden Befehl verwendest du den Parameter `--standalone`, um Certbot mitzuteilen, dass du die Option des temporären Webservers verwenden möchtest.

```
# Für Root-Domains
certbot certonly --standalone -d [deine_root_domain] -d www.[deine_root_domain]

# Für Sub-Domains
certbot certonly --standalone -d [deine_domain]

# Interaktive Einrichtung
certbot certonly --standalone
```

Nach Ausführung des Befehls müssen Sie möglicherweise eine erstmalige interaktive Einrichtung durchführen, bei der Sie aufgefordert werden, eine E-Mail-Adresse einzugeben, die für die Zertifikatskommunikation verwendet werden soll, gefolgt von einer optionalen Mailingliste und den Nutzungsbedingungen, die Sie akzeptieren müssen.

Certbot generiert nun eine ACME-Challenge und hostet sie über den temporären Webserver. Die Let's Encrypt-Server versuchen dann, diese von deinem Server abzurufen. Bei Erfolg werden die Zertifikate erstellt und unter dem Pfad `/etc/letsencrypt/live/[deine_domain]` gespeichert.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Du kannst die SSL-Zertifikate nun überall dort verwenden, wo du sie benötigst, indem du einfach den lokalen Pfad zu den Zertifikaten angibst.

### TXT-DNS-Eintrag

Wenn du Schwierigkeiten hast, deine Domain mit der **HTTP-01**-Methode zu verifizieren, kannst du alternativ versuchen, die **DNS-01**-Methode zu verwenden, bei der ein **TXT**-DNS-Eintrag mit einem von Let's Encrypt bereitgestellten Wert erstellt wird.

Wie bereits erwähnt, unterstützt diese Methode **keine** automatische Verlängerung, es sei denn, du richtest deine eigene Infrastruktur ein, um dies zu verwalten. Daher wird dringend empfohlen, nach Möglichkeit die **HTTP-01**-Methode zu verwenden.

Im folgenden Befehl verwendest du den Parameter `--preferred-challenges`, um Certbot mitzuteilen, dass du die `DNS-01`-Methode verwenden möchtest.

```
# Für Root-Domains
certbot certonly --preferred-challenges dns-01 -d [deine_root_domain] -d www.[deine_root_domain] --manual -m [deine_root_domain] -m www.[deine_root_domain]

# Für Sub-Domains
certbot certonly --preferred-challenges dns-01 -d [deine_domain] --manual -m [deine_domain]

# Interaktive Einrichtung
certbot certonly --preferred-challenges dns-01
```

Nach Ausführung des Befehls kann es sein, dass du aufgefordert wirst, eine erstmalige interaktive Einrichtung durchzuführen. Dabei musst du eine E-Mail-Adresse eingeben, die für die Zertifikatskommunikation verwendet wird, gefolgt von einer optionalen Mailingliste und den Allgemeinen Geschäftsbedingungen, die du akzeptieren musst.

Certbot gibt dir nun Anweisungen zur Erstellung eines **TXT** DNS-Eintrags mit einem bestimmten Wert, den du verwenden musst. Das Ziel ist in der Regel `_acme-challenge.`, das deiner Domain vorangestellt wird (in diesem Beispiel wäre es `_acme-challenge.zapdocs.example.com`), und der Wert, auf den es gesetzt werden soll, wird in der Konsole angegeben.

Nachdem du den Datensatz erstellt hast, drücke die Eingabetaste, um fortzufahren. Wenn alles korrekt ist und weitergegeben wurde, werden die Zertifikate erstellt und unter dem Pfad `/etc/letsencrypt/live/[deine_domain]` gespeichert.

:::note
Bitte habe Geduld, da die Weitergabe von Änderungen an DNS-Datensätzen einige Zeit dauern kann. Dies sollte normalerweise innerhalb von Minuten geschehen, in seltenen Fällen kann es jedoch länger dauern.
:::

Du kannst die SSL-Zertifikate jetzt überall dort verwenden, wo du sie benötigst, indem du einfach den lokalen Pfad zu den Zertifikaten angibst.

## Webserver-Plugins

Certbot enthält eine Reihe verschiedener zusätzlicher Webserver-Plugins, die die Verwaltung von Zertifikaten noch einfacher machen, da die Plugins die relevanten Serverblöcke automatisch für dich bearbeiten. Um ein Plugin zu verwenden, musst du lediglich den entsprechenden Parameter zu deinem `certbot`-Befehl hinzufügen.

Beide Methoden verwenden die **HTTP-01**-Challenge und funktionieren im Wesentlichen auf die gleiche Weise. Wenn eines der Plugins verwendet wird, sucht Certbot zunächst nach dem entsprechenden Serverblock, der die angeforderte Domain als Parameter `server_name` enthält. Sobald er gefunden wurde, generiert Certbot eine ACME-Challenge und fügt einen temporären `location /.well-known/acme-challenge/...`-Location-Block zur entsprechenden Serverblockkonfiguration hinzu.

Die Let's Encrypt-Server versuchen dann, das von deinem Server zu holen. Wenn das klappt, wird dein Zertifikat erstellt und die Serverblockkonfiguration für den ausgewählten Webserver automatisch angepasst, damit HTTPS (Port 443) verwendet wird und die Pfade zum neu erstellten Zertifikat hinzugefügt werden.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx-Plugin

Bevor du das Plugin benutzt, check, ob es installiert ist.

```
sudo apt install python3-certbot-nginx
```

Um das Nginx-Plugin zu verwenden, solltest du den Parameter `--nginx` in deinem Befehl wie folgt verwenden.

```
# Für Root-Domains
certbot --nginx -d [deine_root_domain] -d www.[deine_root_domain]

# Für Sub-Domains
certbot --nginx -d [deine_domain]

# Interaktive Einrichtung
certbot --nginx
```

:::tip
Wenn du die automatische "Ein-Klick"-Anpassung der Server-Blockierung von Certbot deaktivieren möchtest, kannst du den Parameter `certonly` in den Befehl einfügen, z. B. `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache-Plugin

Bevor du das Plugin benutzt, check, ob es installiert ist.

```
sudo apt install python3-certbot-apache
```

Um das Nginx-Plugin zu verwenden, solltest du den Parameter `--apache` in deinem Befehl wie folgt verwenden.

```
# Für Root-Domains
certbot --apache -d [deine_root_domain] -d www.[deine_root_domain]

# Für Sub-Domains
certbot --apache -d [deine_domain]

# Interaktive Einrichtung
certbot --apache
```

:::tip
Wenn du die automatische "Ein-Klick"-Anpassung von Server-Blockierungen durch Certbot deaktivieren möchtest, kannst du den Parameter `certonly` in den Befehl einfügen, z. B. `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot-Plugin

Wenn du deinen eigenen lokalen Webserver betreibst, der keine herkömmliche Software verwendet, kannst du die Webroot-Methode verwenden, um deinen eigenen Webserver zu nutzen, ohne ihn stoppen zu müssen.

Um das Webroot-Plugin zu verwenden, solltest du den Parameter `--weboot` in deinem Befehl wie folgt verwenden. Du musst auch `-w [deine_webserver_path]` (kurz für `--webroot-path`) angeben, den Pfad zum obersten Verzeichnis deines Webservers.

```
# Für Root-Domains
certbot --webroot -w [deine_webserver_path] -d [deine_root_domain] -d www.[deine_root_domain]

# Für Sub-Domains
certbot --webroot -w [deine_webserver_path] -d [deine_domain]

# Interaktive Einrichtung
certbot --webroot -w [deine_webserver_path]
```

:::tip
Einer der häufigsten Web-Root-Speicherorte ist `/var/www/html`. Du kannst dies auch für Webserver wie Nginx oder Apache tun, wenn du den Webserver nutzen möchtest, ohne automatische Serverblock-Anpassungen wie die nativen Plugins zu haben.
:::

</TabItem>
</Tabs>

## Automatische Verlängerung

In den meisten Fällen sollte Certbot die Zertifikatsverlängerung mithilfe von Cronjob und/oder systemd-Timer automatisch für dich einrichten. Du kannst dies überprüfen, indem du den folgenden Befehl ausführst, der den Parameter "--dry-run" verwendet, um den Prozess zu testen.
```
certbot renew --dry-run
```

:::tip
Wie bereits erwähnt, unterstützt die **DNS-01**-Methode keine automatische Verlängerung über Certbot, es sei denn, du richtest deine eigene Infrastruktur ein, um dies zu verwalten. Daher wird dringend empfohlen, die **HTTP-01**-Methode zu verwenden.
:::

Dies sollte erfolgreich sein, wenn alles wie erwartet funktioniert. Wenn du die automatische Verlängerung anzeigen oder Änderungen daran vornehmen möchtest, findest du den Befehl an einem der folgenden Speicherorte: `/etc/crontab/`, `/etc/cron.*/*` oder über `systemctl list-timers`.

### Manuelle Cronjob-Einrichtung

Wenn aus irgendeinem Grund die automatische Erneuerung nicht für dich eingerichtet ist, kannst du sie selbst über einen Cronjob hinzufügen. Öffne das Crontab-Menü mit `crontab -e`. Wenn du dies zum ersten Mal machst, wirst du möglicherweise aufgefordert, einen Editor auszuwählen. Wähle die erste Option, die `/bin/nano` sein sollte.

Füge nun in der in nano geöffneten Datei die folgende Zeile hinzu, um die Verlängerung täglich um 6 Uhr Ortszeit durchzuführen.
```
0 6 * * * certbot renew
```

Speichere die Datei und beende nano mit `STRG + X`, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

## Abschluss

Du hast Certbot erfolgreich für deine Domain(s) eingerichtet, und zwar über verschiedene Methoden, darunter Standalone, Web-Root oder über eines der Plugins, und so für eine sichere Datenübertragung über HTTPS auf deiner Website gesorgt. Bei weiteren Fragen oder für Unterstützung wende dich bitte an unser Support-Team, das dir täglich zur Verfügung steht! 🙂