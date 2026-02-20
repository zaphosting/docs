---
id: vserver-linux-plesk
title: "Plesk auf einem Linux Server einrichten – Websites mit einem starken Control Panel managen"
description: "Entdecke, wie du Websites und Server effizient mit Plesk verwaltest – perfekt für Anfänger und Profis → Jetzt mehr erfahren"
sidebar_label: Plesk installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plesk ist eine umfassende Webhosting- und Servermanagement-Plattform, mit der du Websites, Server, E-Mail-Konten und mehr über eine benutzerfreundliche Oberfläche verwalten kannst. Es ist eine vielseitige Lösung, die sowohl für Einsteiger als auch für erfahrene Webentwickler und Systemadministratoren geeignet ist.

<InlineVoucher />

## Plesk installieren

:::info
Vor der Installation führe `apt update` und `apt upgrade` aus, damit die neuesten Pakete auf dem Server installiert sind.
:::
Plesk kann aktuell nur auf Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x und Virtuozzo Linux 7 installiert werden. Die Architektur muss 64-Bit sein.

Die Verbindung zum Server kann z.B. über Putty hergestellt werden.

## Installation starten

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="One-Click Installation" default>

Damit Plesk vollautomatisch mit den Standardkomponenten installiert wird, die die meisten Plesk-Nutzer verwenden, reicht ein einziger Befehl:

>Der Plesk Installer installiert immer die neueste Version von Plesk. Es kann vorkommen, dass die hier gezeigten Grafiken/Screenshots nicht die aktuellste Version zeigen.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Wenn der Fehler „-bash: curl: command not found“ erscheint, musst du das Paket mit `apt install curl` nachinstallieren.
:::

Nachdem der Befehl ausgeführt wurde, dauert die vollständige Installation von Plesk in der Regel zwischen 15 und 60 Minuten.

:::info
Die SSH-Sitzung darf während der Installation nicht geschlossen werden, sonst bricht die Installation ab.
:::
Ansonsten müsste der Server neu installiert werden, um den Installer neu zu starten.
Wird der Installer ohne Neuinstallation des Servers neu gestartet, kann es zu Problemen mit nicht funktionierenden Features während der Installation oder im Plesk Panel kommen.

:::info
Es kann so aussehen, als ob der Installer „hängt“. In 99 % der Fälle läuft er nach ein paar Minuten weiter, da noch Pakete/Konfigurationen eingerichtet werden müssen.
:::

Die Installation ist abgeschlossen, wenn Folgendes angezeigt wird:

![](https://screensaver01.zap-hosting.com/index.php/s/9o6bEzBr8rCAWzf/preview)

</TabItem>
<TabItem value="Web Installation" label="Web Installation">

Für die Web-Installation von Plesk sind nur wenige Befehle nötig.

:::info
Der Plesk Installer installiert immer die neueste Version von Plesk. Es kann vorkommen, dass die hier gezeigten Grafiken/Screenshots nicht die aktuellste Version zeigen.
:::

Lade den Plesk Installer herunter:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Setze die richtigen Berechtigungen:

```
chmod +x plesk-installer
```

Starte den Installer:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Konsolen Installation">

Für die Konsolen-Installation von Plesk sind nur wenige Befehle nötig.

:::info
Der Plesk Installer installiert immer die neueste Version von Plesk. Es kann vorkommen, dass die hier gezeigten Grafiken/Screenshots nicht die aktuellste Version zeigen.
:::

Lade den Installer herunter:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Setze die richtigen Berechtigungen:

```
chmod +x plesk-installer
```

Starte den Installer:

```
./plesk-installer
```

Nachdem die drei Befehle ausgeführt wurden, muss die Lizenz mit „F“ bestätigt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/XrCa3WYALoDx6H3/preview)

Nach der Bestätigung fragt das System, welche Plesk-Version installiert werden soll – z.B. Plesk Obsidian oder Plesk Onyx. Es wird auch angezeigt, welche Version stabiler ist. Für den produktiven Einsatz wird normalerweise eine „stabile“ Version verwendet. Da die voreingestellten Optionen bereits auf die stabile Version zeigen, bestätige das nochmal mit „F“.

Ob Plesk Daten zur Produktverbesserung sammeln darf, kannst du mit „Y“ (Ja) oder „n“ (Nein) beantworten.

Danach fragt das System, welchen Typ der ausgewählten Plesk-Version du installieren möchtest. Meist reicht der voreingestellte Typ „Recommended“ aus. Module, die später benötigt werden, können im Plesk Panel nachinstalliert werden.

Die nächste Frage, ob Pakete installiert/aktualisiert werden dürfen, bestätigst du mit „F“.

Jetzt startet der Installer die Installation.

:::info
Die SSH-Sitzung darf während der Installation nicht geschlossen werden, sonst bricht die Installation ab und der Server müsste neu installiert werden, um den Installer neu zu starten.
:::
Es kann so aussehen, als ob der Installer „hängt“. In 99 % der Fälle läuft er nach ein paar Minuten weiter, da noch Pakete/Konfigurationen eingerichtet werden müssen.

Die Installation ist abgeschlossen, sobald Folgendes erscheint:

![](https://screensaver01.zap-hosting.com/index.php/s/8K5p6RHapwYDfZY/preview)

</TabItem>
</Tabs>

## Web Installer öffnen

Nachdem der Installer gestartet wurde, läuft die Installation im Browser weiter. Die Installationsseite erreichst du über https://IP:8447 oder https://Domain.xx:8447.

## Das Plesk Web Panel

:::info
Beim ersten Aufruf des Web Panels erscheint die Meldung „Dies ist keine sichere Verbindung“. Diese musst du bestätigen, danach öffnet sich die Seite.
:::

Die Weboberfläche erreichst du über https://IP:8443 oder https://Domain.xx:8443 des Servers. Die Login-Daten sind root/admin und das aktuelle Root-Passwort. Alternativ kannst du einfach eine der angezeigten URLs nutzen. Sollten diese nicht mehr gültig sein, kannst du neue URLs mit dem Befehl ``plesk login`` erstellen.

### Einrichtung

Sobald die Anmeldung erfolgreich war, muss das Admin-Konto eingerichtet werden. Ein Kontaktname, eine E-Mail-Adresse und ein Passwort müssen eingegeben werden. Falls du bereits eine Plesk-Lizenz hast, kannst du diese direkt eingeben. Alternativ kannst du eine 15-tägige Testlizenz von Plesk anfordern. Zum Schluss muss der Benutzervertrag bestätigt werden.
Plesk kann jetzt genutzt werden.

### Sprache einstellen

Nach der Installation ist das Plesk Panel standardmäßig auf Englisch. Die deutsche Sprache kannst du unter Tools & Einstellungen ➡️ Plesk Erscheinungsbild ➡️ Sprachen auswählen. Dort wählst du „de-DE“ aus. Anschließend kannst du die Sprache für alle dauerhaft einstellen, indem du auf „Als Standard festlegen“ klickst.
Nach einem Logout und Login findest du das Plesk Panel auf Deutsch.

![](https://screensaver01.zap-hosting.com/index.php/s/6Wo8Qz3oMXGzn3t/preview)

### Domain hinzufügen

Um die erste Domain hinzuzufügen, klick auf den blauen Button „Domain hinzufügen“.

![](https://screensaver01.zap-hosting.com/index.php/s/2S4mgRPctffS452/preview)

Jetzt kannst du deine eigene Domain eingeben. Außerdem müssen eine IP-Adresse sowie ein Benutzername und Passwort für den Webspace der Domain definiert werden. Wenn die Subdomain „www“ bereits in der DNS der Domain eingetragen ist, kann direkt ein SSL-Zertifikat von Let’s Encrypt erstellt werden. Diese Option kannst du auswählen, nachdem du eine Mailadresse eingegeben hast, und bestätigst mit dem blauen „OK“-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/SLSBz5TRH2mDBB8/preview)

:::info
Die Domain muss auf die IP des Webspaces zeigen. Wenn die Domain von ZAP-Hosting ist, kannst du sie einfach über EasyDNS auf den Webspace weiterleiten. Bei externen Domains muss ein A-Record auf die IP gesetzt werden, und die Subdomains „www“ und „webmail“ müssen ebenfalls auf die IP zeigen. Ein MX-Record sollte ebenfalls auf die IP des Webspaces zeigen.

Es kann bis zu 24 Stunden dauern, bis neue oder geänderte DNS-Einträge korrekt weitergeleitet werden.
:::

## SSL-Verschlüsselung

Während der Domain-Registrierung/Erstellung des Webspaces wurde bereits ein SSL-Zertifikat von Let’s Encrypt generiert. Dieses kannst du jetzt unter „Hosting-Einstellungen“ der Domain auswählen. Danach bestätigst du mit einem Klick auf „Übernehmen“.

:::info
Damit deine Webseite dauerhaft per HTTPS (SSL) aufgerufen wird, muss die Checkbox „Dauerhafte, SEO-freundliche 301-Weiterleitung von HTTP zu HTTPS“ aktiviert sein.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/HL4tcnTqJtX7be9/preview)

Wenn du die Domain jetzt im Browser öffnest, wird die Verschlüsselung angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/xcqwAQWK77X3yip/preview)

:::info
Die Installation sowie die Einrichtung der ersten Domain mit Verschlüsselung sind jetzt komplett abgeschlossen.
:::

## Fazit

Glückwunsch, du hast Plesk erfolgreich installiert und eingerichtet! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />