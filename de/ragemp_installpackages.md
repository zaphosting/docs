---
id: ragemp_installpackages
title: RageMP: Pakete auf Server installieren
description: Informationen, wie du Pakete auf deinen RageMP-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Pakete Installieren
---

## 🔑 Mit FTP verbinden

Bevor Pakete installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![image](https://user-images.githubusercontent.com/13604413/159178012-0172691b-d49f-49d6-ab34-cc01eadbacf5.png)

## 📦 RageMP Pakete

Bei RageMP Paketen handelt es sich um Erweiterungen oder auch Modifikationen. 
RageMP unterscheidet hierbei zwischen "**Client**" und "**Server**" Paketen

### 🚶‍♂️ Client Pakete

Clientseitige Pakete werden genutzt um beispielsweise das Userinterface im Spiel oder auch andere visuelle Effekte zu editieren.
Die Clientseitigen Pakete werden in den "**client_packages**" Ordner hochgeladen

![image](https://user-images.githubusercontent.com/26007280/189705054-14877243-9134-4ebb-8d64-3ec3448fdc4c.png)

In diesem Ordner werden nun ein "**gamemode**" Ordner und eine "**index.js**" Datei erstellt.
Die "**index.js**" ist wichtig sobald alle Scripte hochgeladen wurden. 

![image](https://user-images.githubusercontent.com/26007280/189705088-ef6465ed-9703-44d2-b985-1cff402ccc27.png)

In den "**gamemode**" Ordner werden nun die Scripte hochgeladen, welche man auf dem Server nutzen möchte.

![image](https://user-images.githubusercontent.com/26007280/189705208-dd29df8a-6299-4300-99ef-485fc6e624a5.png)

Sobald alle gewünschten Scripte hochgeladen wurden, muss die vorher erstellte "**index.js**" editiert werden.
Dort wird für jedes Script die Zeile ***require(./gamemode/DEINSCRIPTNAME.js);*** eingefügt

![image](https://user-images.githubusercontent.com/13604413/159178015-9106b7ea-41c4-4876-868c-dbca30410d62.png)

### 🖥️ Server Pakete

Serverseitige Pakete werden genutzt um grundlegende Einstellungen vom Server zu editieren.
Beispielsweise: Spawn, Spieler, Autos, Marker

Die Serverseitigen Pakete werden in den "**packages**" Ordner hochgeladen

![image](https://user-images.githubusercontent.com/13604413/159178021-7b030066-b72a-41a9-9baa-c9abba124ff2.png)

In diesem Ordner wird nun ein weiterer Ordner erstellt, der Name von diesem Ordner ist frei wählbar.

![image](https://user-images.githubusercontent.com/13604413/159178028-2b2bbd99-c4a1-4422-b4c8-bad298aefea7.png)

Sobald der Ordner erstellt wurde, wird in dieser Ordner mit den Serverseitigen Scripten befüllt.

![image](https://user-images.githubusercontent.com/13604413/159178033-5240c361-d4de-40dd-8d1f-64d207529842.png)

Nachdem alle Wunschscripte auf dem Server liegen muss in dem gleichen Ordner eine "**index.js**" erstellt werden.

![image](https://user-images.githubusercontent.com/26007280/189705250-0dd24ec9-ae1e-4468-a8b0-cbbf8c0c89c6.png)

Dort wird für jedes Script die Zeile ***require(./DEINSCRIPTNAME.js);*** eingefügt

![](https://user-images.githubusercontent.com/13604413/159178015-9106b7ea-41c4-4876-868c-dbca30410d62.png)

Die "**Client**" als auch "**Server**" Pakete sollten nach einem Server Neustart direkt auf dem Sever aktiv sein
