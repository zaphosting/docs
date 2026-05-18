---
id: dedicated-linux-fivem-txAdmin-cloudflare-tunnel
title: "Dedicated Server: Cloudflare Tunnel für txAdmin einrichten"
description: "Entdecke, wie du einen Cloudflare Tunnel für txAdmin einrichtest für mehr Sicherheit → Jetzt mehr erfahren"
sidebar_label: Cloudflare Tunnel für txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Wenn du zusätzlich zur bestehenden ZAP-Hosting DDoS-Schutz noch mehr Sicherheit willst, kannst du deine txAdmin-Instanz mit einem Cloudflare Tunnel absichern. So ist die txAdmin-Weboberfläche nicht mehr direkt über die öffentliche IP deines Servers erreichbar, sondern sicher über deine eigene Domain. Angriffe auf den txAdmin-Port werden von Cloudflare gefiltert, während du den lokalen Port komplett dichtmachen kannst, ohne den Zugriff zu verlieren.

<InlineVoucher />

## Voraussetzungen

Um einen Cloudflare Tunnel auf Linux zu nutzen, brauchst du einen Linux Dedicated Server, eine funktionierende txAdmin-Installation, deinen txAdmin-Port und eine Domain, die bereits mit deinem Cloudflare-Account verbunden ist. Falls deine Domain noch nicht bei Cloudflare eingebunden ist, folge bitte zuerst unserer [Cloudflare Setup](domain-cloudflare-setup.md) Anleitung.

Cloudflare Tunnel funktioniert, indem eine ausgehende verschlüsselte Verbindung von deinem Server zu Cloudflare aufgebaut wird, sodass keine öffentlichen Ports für txAdmin offen bleiben müssen.


## Cloudflare Einrichtung

Bevor du cloudflared auf deinem Linux vServer installierst, erstellst und konfigurierst du den Tunnel direkt in deinem Cloudflare Dashboard.

Logge dich in deinen Cloudflare-Account ein und navigiere zum Bereich Zero Trust. Dort kannst du einen neuen Tunnel anlegen, der später den Traffic zu deiner txAdmin-Oberfläche weiterleitet.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflare Tunnel Installation

Cloudflare stellt ein kleines Tool namens cloudflared bereit. Die Installation von cloudflared auf Linux ist super einfach. Lade zuerst den Installer runter und führe ihn aus.

![img](https://screensaver01.zap-hosting.com/index.php/s/93TFH8xfxEEDobd/preview)

```
# Cloudflare GPG-Schlüssel hinzufügen
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# Dieses Repo zu deinen apt-Repositories hinzufügen
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# cloudflared installieren
sudo apt-get update && sudo apt-get install cloudflared
```

Nach der Installation führst du den bereitgestellten Befehl aus:

```
cloudflared.exe service install eyJhIjoiMj...
```

Wenn du die Befehle ausgeführt hast, verbindet sich dein Server über den Tunnel mit Cloudflare. Wenn die Einrichtung erfolgreich ist, ändert sich der Status im Bereich Connectors auf **Connected** – das bestätigt, dass der Tunnel aktiv und funktionsfähig ist.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Cloudflare Tunnel konfigurieren

Als Nächstes richtest du die Route Traffic Einstellungen ein. Erstelle einen neuen Subdomain-Eintrag deiner Wahl. In diesem Beispiel wird die Subdomain `txAdmin` verwendet, über die du später auf die txAdmin-Oberfläche zugreifst.

Wähle die Domain aus, die du nutzen möchtest, setze den Servicetyp auf **HTTP** und gib als URL **localhost:port** ein. Ersetze port durch den Port, den du für deine txAdmin-Instanz definiert hast. Im Beispiel wird Port 40500 genutzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Sicherheitstipp
Statt den Standard-txAdmin-Port **40120** zu verwenden, empfehlen wir aus Sicherheitsgründen einen anderen Port.
:::



## Linux Firewall konfigurieren

Damit der Port außerhalb des Tunnels nicht erreichbar ist, konfiguriere die Linux Firewall (iptables) so, dass der entsprechende Port nur Verbindungen von localhost akzeptiert. Beschränke das Remote-Adressfeld der Regel auf 127.0.0.1. So muss der gesamte Traffic vom lokalen System kommen und externer Zugriff wird blockiert – das stellt sicher, dass der Dienst hinter cloudflared von außerhalb des Tunnels nicht erreichbar ist.

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

Mit dieser Einstellung werden alle Zugriffsversuche von außerhalb der Maschine blockiert, sodass der Dienst hinter cloudflared nur über den Tunnel erreichbar bleibt.



## Abschluss

Sobald der Cloudflare Tunnel aktiv ist, ist deine txAdmin-Oberfläche nur noch über deine eigene Domain erreichbar, während alle Anfragen über Cloudflare laufen, wo sie gefiltert und gesichert werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Der direkte Zugriff auf den txAdmin-Port über die Server-IP ist blockiert, wodurch die ursprüngliche Angriffsfläche komplett entfällt. So bleibt txAdmin stabil, sicher und zuverlässig erreichbar – selbst wenn jemand versucht, die Oberfläche zu überlasten oder anzugreifen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />