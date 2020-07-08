---
id: ragemp_installpackages
title: Pakete Installieren
sidebar_label: Pakete Installieren
---

## 🔑 Mit FTP verbinden

Bevor Pakete installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/imH3yFWaFNmD9AH/preview)

## 📦 RageMP Pakete

Bei RageMP Paketen handelt es sich um Erweiterungen oder auch Modifikationen. 
RageMP unterscheidet hierbei zwischen "**Client**" und "**Server**" Paketen

### 🚶‍♂️ Client Pakete

Clientseitige Pakete werden genutzt um beispielsweise das Userinterface im Spiel oder auch andere visuelle Effekte zu editieren.
Die Clientseitigen Pakete werden in den "**client_packages**" Ordner hochgeladen

![](https://screensaver01.zap-hosting.com/index.php/s/WCgLYZxNKHnnwW7/preview)

In diesem Ordner werden nun ein "**gamemode**" Ordner und eine "**index.js**" Datei erstellt.
Die "**index.js**" ist wichtig sobald alle Scripte hochgeladen wurden. 

![](https://screensaver01.zap-hosting.com/index.php/s/MzezDL79zYnGpwK/preview)

In den "**gamemode**" Ordner werden nun die Scripte hochgeladen, welche man auf dem Server nutzen möchte.

![](https://screensaver01.zap-hosting.com/index.php/s/PdTa7dAYxotz57P/preview)

Sobald alle gewünschten Scripte hochgeladen wurden, muss die vorher erstellte "**index.js**" editiert werden.
Dort wird für jedes Script die Zeile ***require(./gamemode/DEINSCRIPTNAME.js);*** eingefügt

![](https://screensaver01.zap-hosting.com/index.php/s/DaRrftmqZSRrAm3/preview)

### 🖥️ Server Pakete

Serverseitige Pakete werden genutzt um grundlegende Einstellungen vom Server zu editieren.
Beispielsweise: Spawn, Spieler, Autos, Marker

Die Serverseitigen Pakete werden in den "**packages**" Ordner hochgeladen

![](https://screensaver01.zap-hosting.com/index.php/s/QRspdA2sXBW93oH/preview)

In diesem Ordner wird nun ein weiterer Ordner erstellt, der Name von diesem Ordner ist frei wählbar.

![](https://screensaver01.zap-hosting.com/index.php/s/Rxe23ToBE7M84Dz/preview)

Sobald der Ordner erstellt wurde, wird in dieser Ordner mit den Serverseitigen Scripten befüllt.

![](https://screensaver01.zap-hosting.com/index.php/s/Y3NzTR9ow7iDSec/preview)

Nachdem alle Wunschscripte auf dem Server liegen muss in dem gleichen Ordner eine "**index.js**" erstellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/gqc4RrHsseK2nze/preview)

Dort wird für jedes Script die Zeile ***require(./DEINSCRIPTNAME.js);*** eingefügt

![](https://screensaver01.zap-hosting.com/index.php/s/6ate3XEJ33cHNW4/preview)

Die "**Client**" als auch "**Server**" Pakete sollten nach einem Server Neustart direkt auf dem Sever aktiv sein
