---
id: dedicated-linux-jitsi
title: "Jitsi Meet auf einem Linux Server einrichten – Hoste deine eigene Videokonferenz-Plattform"
description: "Entdecke, wie du deinen eigenen sicheren Jitsi Meet Videokonferenz-Server einrichtest und betreibst – für einfache, private Online-Meetings → Jetzt mehr erfahren"
sidebar_label: Jitsi Meet installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Jitsi Meet ist eine Open-Source-Videokonferenz-Software, mit der du deine eigenen Videokonferenzen auf deinem Server hosten kannst. Ein großer Vorteil von Jitsi Meet ist die einfache Bedienung: Du brauchst nur einen Browser (bei Handys die Jitsi App) und musst dich nicht bei externen Diensten anmelden. Jede Videokonferenz bekommt eine eigene URL, über die man der Konferenz beitreten kann. Jitsi Meet ist perfekt für Videokonferenzen, auch mit Leuten, die nicht so technikaffin sind.  
Achtung: Ohne weitere Einstellungen kann jeder, der auf den Jitsi Meet Server zugreift, eigene Videokonferenzen auf dem Server starten.

## Jitsi Meet auf einem Debian Server installieren

Im Folgenden zeigen wir dir, wie du einen Jitsi Meet Server auf einem Debian Server installierst. Grundsätzlich funktioniert Jitsi Meet auch auf anderen Linux-Servern, z.B. Ubuntu, und die Installation ist sehr ähnlich.

### Vorbereitung

Damit du Jitsi Meet richtig nutzen kannst, solltest du deine eigene Domain verwenden, um auf den Jitsi Server zuzugreifen. Es macht Sinn, eine eigene Subdomain für den Jitsi Meet Server anzulegen. Als Beispiel nutzen wir die Domain meet.zap-testdomain.de.  
Für ZAP-Hosting Domains musst du einen neuen Eintrag in der DNS-Verwaltung anlegen. Trage den Namen der Subdomain im Feld „Name“ ein und die IP-Adresse deines Servers im Feld „Wert“. In unserem Beispiel tragen wir „meet“ im Namensfeld ein und die IP-Adresse des ZAP-Testservers, auf dem wir Jitsi Meet installieren, im Wert-Feld: 185.239.239.49 (bitte die IP deines Servers eintragen, nicht diese Beispiel-IP).

Du kannst zwar auch direkt über die IP-Adresse auf einen Jitsi Meet Server zugreifen, aber für das SSL-Zertifikat wird eine Domain benötigt. Ohne Domain gibt der Browser eine Sicherheitswarnung aus.

Wenn die Subdomain gesetzt ist (es kann bis zu 24 Stunden dauern, bis Änderungen aktiv sind), kannst du deinen Server für die Installation vorbereiten.  
Verbinde dich via Putty oder WinSCP mit deinem Server.  
Bevor du weitermachst, stelle sicher, dass dein Server auf dem neuesten Stand ist. Falls nötig, führe jeden Befehl mit Superuser-Rechten aus, indem du „sudo“ vor den Befehl setzt (z.B. „sudo apt-get update“).

```
$	apt-get update
```
```
$	apt-get upgrade
```

Falls keine Firewall auf dem Server installiert ist, kannst du z.B. UFW installieren:
```
$	apt install ufw
```

Führe folgende Einstellungen in der Firewall aus:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Aktiviere die Firewall:
```
$	ufw enable
```

Prüfe den Status:
```
$	ufw status
```

### Jitsi Meet Installation

Für die Installation von Jitsi Meet brauchst du zuerst das Paket gnupg:
```
$	apt install gnupg
```

Nach der Paketinstallation wird der Jitsi-GPG-Schlüssel heruntergeladen und hinzugefügt:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Um Jitsi Meet zu installieren, musst du das Jitsi Repository hinzufügen:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

Füge im Editor folgende Zeile ein. Danach kannst du die Änderung speichern und den Editor schließen:
```
$	deb https://download.jitsi.org stable/
```

Jetzt kannst du Jitsi Meet installieren. Es empfiehlt sich, alle installierten Pakete nochmal zu aktualisieren:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Während der Installation wirst du aufgefordert, einen Hostname einzugeben. Gib hier die Subdomain ein, die du für deinen Jitsi Meet Server erstellt hast. Im Beispiel unseres Testservers ist das: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

Bestätige die Eingabe mit „Ok“. Ein neues Fenster öffnet sich und fragt, ob ein selbstsigniertes TLS-Zertifikat erstellt oder ein bestehendes verwendet werden soll. Wähle die Option „Generate a new self-signed certificate“ (Neues selbstsigniertes Zertifikat erstellen):

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

Die Installation von Jitsi Meet ist jetzt abgeschlossen und du musst nur noch das TLS-Zertifikat holen.  
Installiere das Paket Certbot:
```
$	apt install certbot
```

Starte das Skript zur Installation des TLS-Zertifikats:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Während der Ausführung wirst du nach einer E-Mail-Adresse gefragt, die an letsencrypt.org gesendet wird. Gib eine E-Mail-Adresse ein und bestätige mit Enter.

Danach sollte Jitsi Meet vollständig installiert und auf deinem Server aktiv sein. Um zu testen, ob Jitsi Meet korrekt installiert wurde, gib einfach die eingerichtete Subdomain in die URL-Leiste deines Browsers ein. In diesem Tutorial ist das:
```
https://meet.zap-testdomain.de
```

Wenn die Seite mit Jitsi Meet lädt, kannst du direkt deine erste Videokonferenz starten.