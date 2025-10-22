---
id: vserver-linux-jitsi
title: "VPS: Installation von Jitsi Meet"
description: "Entdecke, wie du deinen eigenen sicheren und einfach zu bedienenden Jitsi Meet Videokonferenz-Server auf Debian einrichtest für nahtlose Online-Meetings → Jetzt mehr erfahren"
sidebar_label: Jitsi Meet installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Jitsi Meet ist eine Open-Source-Videokonferenz-Software, mit der du deine eigenen Videokonferenzen auf deinem Server einrichten kannst. Ein großer Vorteil von Jitsi Meet ist die einfache Handhabung: Du brauchst nur einen Browser (bei Handys die Jitsi App) und musst dich nicht bei externen Diensten anmelden. Jede Videokonferenz bekommt eine eigene URL, über die man der Konferenz beitreten kann. Jitsi Meet ist perfekt für Videokonferenzen, auch mit Leuten, die nicht so erfahren sind.
Achtung: Ohne weitere Einstellungen kann jeder, der auf den Jitsi Meet Server zugreift, eigene Videokonferenzen auf dem Server starten.

<InlineVoucher />

## Jitsi Meet auf einem Debian Server installieren

Im Folgenden zeigen wir, wie du einen Jitsi Meet Server auf einem Debian Server installierst. Grundsätzlich funktioniert Jitsi Meet auch auf anderen Linux-Servern, z.B. mit Ubuntu, und die Installation ist sehr ähnlich.

### Vorbereitung

Damit du Jitsi Meet richtig nutzen kannst, solltest du deine eigene Domain verwenden, um auf den Jitsi Server zuzugreifen. Es macht Sinn, eine eigene Subdomain für den Jitsi Meet Server anzulegen. Als Beispiel verwenden wir die Domain meet.zap-testdomain.de.
Für ZAP-Hosting Domains musst du unter der DNS-Verwaltung einen neuen Eintrag erstellen. Trage den Namen der Subdomain im Feld „Name“ und die IP-Adresse deines Servers im Feld „Wert“ ein. In unserem Beispiel tragen wir „meet“ im Namensfeld ein und die IP-Adresse des ZAP-Testservers, auf dem wir Jitsi Meet installieren, im Wert-Feld: 185.239.239.49 (trage die IP deines Servers ein, nicht diese Beispiel-IP)


über die IP-Adresse auf einen Jitsi Meet Server zuzugreifen. Für das SSL-Zertifikat wird jedoch eine Domain benötigt. Ohne Domain gibt der Browser eine Sicherheitswarnung aus.

Wenn die Subdomain gesetzt ist (es kann bis zu 24 Stunden dauern, bis Änderungen aktiv werden), kannst du deinen Server für die Installation vorbereiten.
Verbinde dich mit deinem Server via Putty oder WinSCP.
Bevor du weitermachst, stelle sicher, dass der Server aktualisiert ist. Falls nötig, müssen Befehle mit Superuser-Rechten ausgeführt werden. Füge dazu „sudo“ vor den Befehl ein (z.B. „sudo apt-get update“).

```
$	apt-get update
```
```
$	apt-get upgrade
```

Wenn keine Firewall auf dem Server installiert ist, kannst du z.B. UFW installieren:
```
$	apt install ufw
```

Folgende Einstellungen auf der Firewall vornehmen:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Firewall aktivieren:
```
$	ufw enable
```

Status prüfen:
```
$	ufw status
```

### Installation von Jitsi Meet

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

Folgende Zeile wird im Editor eingefügt. Danach kannst du die Änderung speichern und den Editor schließen:
```
$	deb https://download.jitsi.org stable/
```

Jetzt kann Jitsi Meet installiert werden. Es wird empfohlen, alle installierten Pakete nochmal zu aktualisieren:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Während der Installation wirst du aufgefordert, einen Hostname einzugeben. Gib hier die Subdomain ein, die du für deinen Jitsi Meet Server erstellt hast. Im Beispiel unseres Testservers ist das: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/oBEDBDx6GqzAoFa/preview)


Bestätige die Eingabe mit „Ok“. Ein neues Fenster öffnet sich und fragt, ob ein selbstsigniertes TLS-Zertifikat erstellt oder ein bestehendes verwendet werden soll. Wähle die Option „Generate a new self-signed certificate“:

![](https://screensaver01.zap-hosting.com/index.php/s/jcr84boZHiakNDS/preview)


Die Installation von Jitsi Meet ist nun abgeschlossen und du musst nur noch das TLS-Zertifikat abrufen.
Installiere das Paket Certbot:
```
$	apt install certbot
```

Starte das Skript für die TLS-Zertifikat-Installation:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Während der Ausführung wirst du aufgefordert, eine E-Mail-Adresse einzugeben, die an letsencrypt.org gesendet wird. Gib eine E-Mail-Adresse ein und bestätige mit Enter.


Danach sollte Jitsi Meet vollständig installiert und auf deinem Server aktiv sein. Um zu testen, ob Jitsi Meet korrekt installiert wurde, gib einfach die eingerichtete Subdomain in die URL-Leiste deines Browsers ein. In diesem Tutorial ist das:
```
https://meet.zap-testdomain.de
```



## Fazit

Glückwunsch, du hast Jitsi erfolgreich installiert und konfiguriert! Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />