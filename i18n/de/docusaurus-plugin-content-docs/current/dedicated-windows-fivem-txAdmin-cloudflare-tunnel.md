---
id: dedicated-windows-fivem-txAdmin-cloudflare-tunnel
title: "Dedicated Server: Cloudflare Tunnel für txAdmin einrichten"
description: "Entdecke, wie du einen Cloudflare Tunnel für txAdmin einrichtest und so mehr Sicherheit bekommst → Jetzt mehr erfahren"
sidebar_label: Cloudflare Tunnel für txAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Wenn du zusätzlich zur bestehenden ZAP-Hosting DDoS-Schutz noch mehr Sicherheit willst, kannst du deine txAdmin-Instanz mit einem Cloudflare Tunnel absichern. So ist die txAdmin-Weboberfläche nicht mehr direkt über die öffentliche IP deines Servers erreichbar, sondern sicher über deine eigene Domain. Angriffe auf den txAdmin-Port werden von Cloudflare gefiltert, während du den lokalen Port komplett dichtmachen kannst, ohne den Zugriff zu verlieren.



## Voraussetzungen

Um einen Cloudflare Tunnel auf Windows zu nutzen, brauchst du einen Windows Dedicated Server, eine funktionierende txAdmin-Installation, deinen txAdmin-Port und eine Domain, die bereits mit deinem Cloudflare-Account verbunden ist. Falls deine Domain noch nicht mit Cloudflare verbunden ist, folge bitte zuerst unserer [Cloudflare Setup](domain-cloudflare-setup.md) Anleitung.

Cloudflare Tunnel funktioniert, indem eine ausgehende verschlüsselte Verbindung von deinem Server zu Cloudflare aufgebaut wird, sodass keine öffentlichen Ports für txAdmin offen bleiben müssen.


## Cloudflare Setup

Bevor du cloudflared auf deinem Windows vServer installierst, erstellst und konfigurierst du den Tunnel direkt in deinem Cloudflare Dashboard.

Logge dich in deinen Cloudflare-Account ein und navigiere zum Zero Trust Bereich. Dort kannst du einen neuen Tunnel erstellen, der später den Traffic zu deiner txAdmin-Oberfläche weiterleitet.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflare Tunnel Installation

Cloudflare stellt ein kleines Tool namens cloudflared bereit. Die Installation von cloudflared auf Windows ist super easy. Lade dir zuerst den [Windows Installer](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi) runter.

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

Nachdem die Datei runtergeladen ist, starte den Installer und folge den Anweisungen. Nach der Installation öffnest du die Eingabeaufforderung als Administrator. Dort führst du den folgenden Befehl aus:

```
cloudflared.exe service install eyJhIjoiMj...
```

Nach dem Ausführen verbindet sich dein Server über den Tunnel mit Cloudflare. Wenn alles klappt, ändert sich der Status im Connectors-Bereich auf **Connected**, was bestätigt, dass der Tunnel aktiv und funktionsfähig ist.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Cloudflare Tunnel konfigurieren

Als Nächstes konfigurierst du die Route Traffic Einstellungen. Erstelle einen neuen Subdomain-Eintrag deiner Wahl. In diesem Beispiel wird die Subdomain `txAdmin` verwendet, über die du später auf die txAdmin-Oberfläche zugreifst.

Wähle die Domain aus, die du nutzen möchtest, setze den Service-Typ auf **HTTP** und gib als URL **localhost:port** ein. Ersetze port durch den Port, den du für deine txAdmin-Instanz definiert hast. Im Beispiel wird Port 40500 genutzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Sicherheitstipp
Statt den Standard-txAdmin-Port **40120** zu verwenden, empfehlen wir aus Sicherheitsgründen einen anderen Port zu nutzen.
:::



## Windows Firewall konfigurieren

Damit der Port außerhalb des Tunnels nicht erreichbar ist, konfiguriere die Windows Firewall so, dass der entsprechende Port nur Verbindungen von localhost akzeptiert. Beschränke das Remote-Adressfeld der Regel auf 127.0.0.1. So muss der gesamte Traffic vom lokalen System kommen und externer Zugriff wird blockiert. Dadurch ist der Dienst hinter cloudflared nicht von außerhalb des Tunnels erreichbar.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

Mit dieser Einstellung werden alle Zugriffsversuche von außerhalb des Servers blockiert, sodass der Dienst hinter cloudflared nur über den Tunnel erreichbar ist.



## Abschluss

Sobald der Cloudflare Tunnel aktiv ist, ist deine txAdmin-Oberfläche nur noch über deine eigene Domain erreichbar, während alle Anfragen über Cloudflare laufen, wo sie gefiltert und gesichert werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Der direkte Zugriff auf den txAdmin-Port über die Server-IP wird blockiert, wodurch die ursprüngliche Angriffsfläche komplett entfällt. So bleibt txAdmin stabil, sicher und zuverlässig erreichbar – selbst wenn jemand versucht, die Oberfläche zu überlasten oder anzugreifen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />