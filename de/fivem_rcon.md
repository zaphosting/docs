---
id: fivem_rcon
title: FiveM Server: Rcon benutzen
description: Informationen, wie du Rcon auf deinem FiveM-Server benutzen kannst, um Befehle an den Server zu senden - ZAP-Hosting.com Dokumentationen
sidebar_label: Rcon benutzen
---


## Was ist Rcon?

Rcon ist ein Protokoll zur Ausführung von Kommandos auf den Server, ohne direkt zugriff auf die Konsole haben zu müssen.

### Vorbereitung

Für die Nutzung wird ein passendes Rcon Tool benötigt. Dafür kann beispielsweise das bekannte Rcon Tool [Icecon](https://github.com/icedream/icecon/releases) verwendet werden. Das folgende Beispiel orientiert sich an Icecon. Das Tool kann eingerichtet werden, in dem die icecon_windows_amd64.exe heruntergeladen und ausgeführt wird. 

![image](https://user-images.githubusercontent.com/13604413/159168520-9b0e166a-9ae9-47ef-8121-733b447092e0.png)

Es ist keine zusätzliche Installation notwendig. Das Programm lässt sich umgehend starten. Zum herstellen der Verbindung werden die Informationen zur IP-Adresse, Port und Rcon Passwort benötigt. 

# Rcon Passwort bestimmen

**Konfiguration unter den Einstellungen**
Bei den FiveM Server Produkten "FiveM (Linux/Windows/ESX RP Server/QBCore)" kann das Rcon Passwort standardmäßig unter den Einstellungen definiert werden. Das dort definierte Passwort wird dann für die darauffolgende Rcon Verbindung via Icecon benötigt.

![image](https://user-images.githubusercontent.com/26007280/190450001-6ee350eb-9744-454a-bd6e-44e40cb285e5.png)


**Konfiguration unter der Server Configuration**
Alternativ kann das Rcon Passwort auch direkt über die Server Config vorgenommen werden. Hierfür muss der Wert des folgenden Befehls angepasst werden:
```
rcon_password "DeinWunschRconPasswort"
```
> Für die Verwaltung über die Server Config muss die Option des Rcon Feldes unter den Einstellungen erst deaktiviert werden. 
> txAdmin: Die Definition des Rcon Passworts ist bei txAdmin ausschließlich über die Server Config möglich. 

### Verwendung

Nun nachdem das Passwort ebenfalls definiert und ein Server Neustart durchgeführt wurde, kann eine Rcon Verbindung hergestellt werden. Fülle dafür die beiden Felder IP:Port und Passwort (Rcon) mit den Informationen von deinem Server aus und klicke auf "OK". 

![image](https://user-images.githubusercontent.com/13604413/159168532-0b80c7c5-16e0-4a3b-8b06-907c2846f5d4.png)

Die Verbindung wird im Anschluss hergestellt und du kannst dort nun deine gewünschten Befehle ausführen!
