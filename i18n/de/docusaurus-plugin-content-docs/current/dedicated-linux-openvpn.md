---
id: dedicated-linux-openvpn
title: "Dedicated Server: Installation von OpenVPN"
description: "Entdecke, wie du deine Internetverbindung sicherst und auf eingeschränkte Inhalte mit OpenVPN auf Linux-Servern zugreifst → Jetzt mehr erfahren"
sidebar_label: OpenVPN installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

OpenVPN ist eine leistungsstarke und vielseitige VPN-Software, die eine sichere Verbindung über das Internet ermöglicht. Es handelt sich um eine Open-Source-Lösung, die robuste und konfigurierbare VPN-Technologie bietet, um eine verschlüsselte Verbindung zwischen deinem Gerät und einem VPN-Server herzustellen. Mit OpenVPN können Nutzer ihre Internetverbindung absichern, ihre Online-Privatsphäre schützen und geo-restriktive Inhalte unabhängig vom Standort freischalten. In dieser Anleitung zeigen wir dir, wie du den **OpenVPN**-Dienst auf einem Linux-Server installierst und konfigurierst.

<InlineVoucher />

## Vorbereitung

Zuerst muss der Netzwerk-Treiber **TUN** aktiviert werden. Dieser Schritt ist bei Root-Servern nicht nötig.  
Dazu erstellst du eine neue Datei namens **tunscript.sh** im Ordner **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Füge anschließend folgende Zeilen ein:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Speichere die Datei mit `CTRL+O`, bestätige mit `Y` und drücke `Enter`. Zum Verlassen drücke `CTRL+X`. Danach führst du folgenden Befehl aus:

```
chmod +x /usr/sbin/tunscript.sh
```

Anschließend öffnest du mit ``crontab -e`` den Cron-Editor und wählst den **nano Editor** [1]. Füge am Ende der Datei diese Zeile hinzu:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Speichere wieder mit `CTRL+O`, bestätige mit `Y` und drücke `Enter`. Zum Verlassen `CTRL+X`. Nach einem Neustart sollte das Skript automatisch ausgeführt werden.

## Installation

Um OpenVPN zu installieren, gib folgenden Befehl in die Konsole ein:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Es erscheint ein Dialog, der dich fragt, ob du UDP oder TCP verwenden möchtest. Wir empfehlen UDP, also gib `1` ein und bestätige mit `Enter`. Danach wirst du nach einem Port für OpenVPN gefragt – wir empfehlen den Standardport zu verwenden.

Im nächsten Schritt konfigurierst du den DNS-Server. Wir empfehlen Google Public DNS oder Cloudflare DNS:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Anschließend musst du einen Client-Namen vergeben. Hier kannst du jeden beliebigen Namen wählen, z.B. den Namen deines Geräts.

## Konfiguration

### Weitere Clients hinzufügen

Wenn du mehrere Verbindungen brauchst, ist es sinnvoll, mehrere Accounts anzulegen. Um einen weiteren Account zu erstellen, führe folgenden Befehl aus:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Wähle `1` und bestätige. Danach gibst du den Client-Namen ein.

### Clients entfernen

Um einen Client zu löschen, gib folgenden Befehl ein:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Wähle die Nummer des Clients aus deiner Liste, den du entfernen möchtest, und bestätige mit `Enter`. Du wirst nun gefragt, ob du die Löschung bestätigen möchtest. Wenn du sicher bist, drücke `Y` und dann `Enter`. Der Client wird dann entfernt.

## Deinstallation

Wenn du OpenVPN nicht mehr brauchst, kannst du es so deinstallieren:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Drücke `3` und bestätige. Noch einmal bestätigen und OpenVPN wird deinstalliert.

## Verbindung zum VPN herstellen

Um dich mit deinem VPN zu verbinden, empfehlen wir den **[OpenVPN Client](https://openvpn.net/community-downloads/)**. Lade ihn einfach auf dem Gerät herunter, von dem du dich verbinden möchtest.

Verbinde dich per SFTP mit deinem Server, um die erstellte .ovpn-Datei herunterzuladen und lösche die Datei danach wieder auf dem Server. Sobald du den Client installiert hast, starte das Programm. Rechtsklicke auf das OpenVPN-Symbol in der Taskleiste. Klicke dann auf „Datei importieren“ und wähle die zuvor heruntergeladene Datei aus, klicke auf „Öffnen“. Um dich zu verbinden, klicke erneut auf das Symbol und wähle „Verbinden“.

:::info
Falls du mehrere Dateien importiert hast, musst du den Client auswählen, den du nutzen möchtest, und dann auf Verbinden klicken.
:::

<InlineVoucher />