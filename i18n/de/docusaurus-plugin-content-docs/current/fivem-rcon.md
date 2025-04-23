---
id: fivem-rcon
title: "FiveM: Rcon benutzen"
description: Informationen, wie du Rcon auf deinem FiveM-Server benutzen kannst, um Befehle an den Server zu senden - ZAP-Hosting.com Dokumentation
sidebar_label: Rcon benutzen
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Rcon ist ein Protokoll zur Ausführung von Kommandos auf den Server, ohne direkt Zugriff auf die Konsole haben zu müssen.

<InlineVoucher />

## Vorbereitung

Für die Nutzung wird ein passendes Rcon Tool benötigt. Dafür kann beispielsweise das bekannte Rcon Tool [Icecon](https://github.com/icedream/icecon/releases) verwendet werden. Das folgende Beispiel orientiert sich an Icecon. Das Tool kann eingerichtet werden, in dem die icecon_windows_amd64.exe heruntergeladen und ausgeführt wird. 

![](https://screensaver01.zap-hosting.com/index.php/s/cFacDnpKK53mLBD/preview)

Es ist keine zusätzliche Installation notwendig. Das Programm lässt sich umgehend starten. Zum Herstellen der Verbindung werden die Informationen zur IP-Adresse, Port und Rcon Passwort benötigt. 

## Konfiguration

Das Rcon Passwort kann direkt über die Server Config definiert werden. Hierfür muss der Wert des folgenden Befehls angepasst werden:
```
rcon_password "DeinWunschRconPasswort"
```



## Verwendung

Nun nachdem das Passwort ebenfalls definiert und ein Server Neustart durchgeführt wurde, kann eine Rcon Verbindung hergestellt werden. Fülle dafür die beiden Felder IP:Port und Passwort (Rcon) mit den Informationen von deinem Server aus und klicke auf "OK". 

![](https://screensaver01.zap-hosting.com/index.php/s/bNPaKkZSrWroqDA/preview)

Die Verbindung wird im Anschluss hergestellt und du kannst dort nun deine gewünschten Befehle ausführen!



## Abschluss

Vorausgesetzt, dass du alle Schritte befolgt wurden, hast du RCON erfolgreich konfiguriert und verwendet. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂