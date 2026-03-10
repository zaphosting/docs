---
id: vserver-windows-ip-configuration
title: "VPS: IP-Konfiguration (Windows)"
description: "Lerne, wie du die IP-Einstellungen auf deinem Windows VPS konfigurierst → Jetzt mehr erfahren"
sidebar_label: IP-Adressen konfigurieren
services:
- vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Konfiguration der IP-Adressen auf deinem Windows VPS ermöglicht dir, zu steuern, wie dein Server im Netzwerk kommuniziert. Dazu gehört das Zuweisen von IP-Adressen, das Festlegen des Standard-Gateways und das Konfigurieren der DNS-Server, die für die Netzwerkverbindung benötigt werden.

Eine korrekte IP-Konfiguration ist wichtig für Server, die Dienste wie Gameserver, Webserver, Datenbanken oder Remote-Access-Systeme betreiben, da sie eine stabile Netzwerkkommunikation und zuverlässige Erreichbarkeit sicherstellt.

:::warning Server wegen fehlender Internetverbindung nicht erreichbar?
Falls dein Server aufgrund einer falschen Netzwerkkonfiguration oder fehlender Internetverbindung nicht erreichbar ist, funktioniert der Remote-Zugriff per RDP möglicherweise nicht mehr. Nutze die [VNC-Konsole](vserver-vnc.md) im Webinterface, um dich mit deinem Server zu verbinden und die Netzwerkkonfiguration zu korrigieren.
:::

<InlineVoucher />

## Vorbereitung

Bevor du die IP-Adressen konfigurierst, stelle sicher, dass du folgende Informationen parat hast:

- IP-Adresse, die du zuweisen möchtest
- Subnetzmaske
- Standard-Gateway
- DNS-Server

Diese Infos findest du im Webinterface. Öffne dazu deine **VPS-Verwaltung** und navigiere zu **IP-Adressen**.

## Konfiguration

Verbinde dich per **Remote Desktop (RDP)** mit deinem VPS. Sobald du verbunden bist, öffne die **Systemsteuerung**. Gehe zu **Systemsteuerung → Netzwerk und Internet → Netzwerk- und Freigabecenter**.

Klicke links auf **Adaptereinstellungen ändern**. Du siehst die verfügbaren Netzwerkadapter. Rechtsklicke auf deinen aktiven Netzwerkadapter (meist **Ethernet**) und wähle **Eigenschaften**. In der Liste markiere **Internetprotokoll Version 4 (TCP/IPv4)** und klicke auf **Eigenschaften**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Wähle **Folgende IP-Adresse verwenden** und gib die erforderlichen Werte ein:

- **IP-Adresse** → Deine zugewiesene IP-Adresse
- **Subnetzmaske** → Deine Subnetzmaske
- **Standardgateway** → Dein Gateway
- **DNS-Server →** 1.1.1.1, 8.8.8.8

Konfiguriere anschließend die DNS-Server, indem du **Folgende DNS-Serveradressen verwenden** auswählst und deine bevorzugten DNS-Server einträgst. Bestätige die Eingaben mit **OK** und schließe die restlichen Fenster.

## Überprüfung

Um die Konfiguration zu überprüfen, öffne die **Eingabeaufforderung** und führe aus:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

Dieser Befehl zeigt alle Netzwerkadapter und deren aktuelle IP-Konfiguration an. Suche deinen aktiven Netzwerkadapter und prüfe, ob die **IPv4-Adresse** mit der zuvor konfigurierten IP-Adresse übereinstimmt. Wenn die korrekte IP-Adresse angezeigt wird, wurde die Konfiguration erfolgreich übernommen.

## Fazit

Glückwunsch! Du hast die IP-Einstellungen auf deinem Windows VPS erfolgreich konfiguriert. Falls du weitere Fragen hast oder Unterstützung brauchst, steht dir unser Support-Team täglich zur Verfügung.

<InlineVoucher />