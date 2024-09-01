---
id: fivem-rcon
title: "FiveM: Rcon benutzen"
description: Informationen, wie du Rcon auf deinem FiveM-Server benutzen kannst, um Befehle an den Server zu senden - ZAP-Hosting.com Dokumentation
sidebar_label: Rcon benutzen
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was ist Rcon?

Rcon ist ein Protokoll zur Ausführung von Kommandos auf den Server, ohne direkt Zugriff auf die Konsole haben zu müssen.

<InlineVoucher />

### Vorbereitung

Für die Nutzung wird ein passendes Rcon Tool benötigt. Dafür kann beispielsweise das bekannte Rcon Tool [Icecon](https://github.com/icedream/icecon/releases) verwendet werden. Das folgende Beispiel orientiert sich an Icecon. Das Tool kann eingerichtet werden, in dem die icecon_windows_amd64.exe heruntergeladen und ausgeführt wird. 

![image](https://screensaver01.zap-hosting.com/index.php/s/cFacDnpKK53mLBD/preview)

Es ist keine zusätzliche Installation notwendig. Das Programm lässt sich umgehend starten. Zum Herstellen der Verbindung werden die Informationen zur IP-Adresse, Port und Rcon Passwort benötigt. 

# Rcon Passwort bestimmen

**Konfiguration über die Einstellungen**

Bei den FiveM Server Produkten "FiveM (Linux/Windows/ESX RP Server/QBCore)" kann das Rcon Passwort standardmäßig unter den Einstellungen definiert werden. Das dort definierte Passwort wird dann für die darauffolgende Rcon Verbindung via Icecon benötigt.

![image](https://screensaver01.zap-hosting.com/index.php/s/JLnRDLfFk4zBy3o/preview)


**Konfiguration über die Server Config**

Alternativ kann das Rcon Passwort auch direkt über die Server Config vorgenommen werden. Hierfür muss der Wert des folgenden Befehls angepasst werden:
```
rcon_password "DeinWunschRconPasswort"
```
:::info
Für die Verwaltung über die Server Config muss die Option des Rcon Feldes unter den Einstellungen erst deaktiviert werden. 



**txAdmin:** Die Definition des Rcon Passworts ist bei txAdmin ausschließlich über die Server Config möglich. 
:::

### Verwendung

Nun nachdem das Passwort ebenfalls definiert und ein Server Neustart durchgeführt wurde, kann eine Rcon Verbindung hergestellt werden. Fülle dafür die beiden Felder IP:Port und Passwort (Rcon) mit den Informationen von deinem Server aus und klicke auf "OK". 

![image](https://screensaver01.zap-hosting.com/index.php/s/bNPaKkZSrWroqDA/preview)

Die Verbindung wird im Anschluss hergestellt und du kannst dort nun deine gewünschten Befehle ausführen!
