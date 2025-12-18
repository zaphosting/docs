---
id: dedicated-linux-ftp
title: "Dedicated Server: FTP-Service funktioniert nicht – Fehlerbehebung"
description: "Verstehe, wie du FTP-Zugriffsprobleme auf deinem VPS behebst, um die Serververbindung wiederherzustellen und deinen Gameserver oder Teamspeak-Server effektiv zu verwalten → Mehr erfahren"
sidebar_label: FTP-Service funktioniert nicht
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was kannst du tun, wenn der Gameserver oder Teamspeak-Server nicht per FTP erreichbar ist?

:::info
Achtung: Die folgenden Schritte funktionieren nur auf deinem eigenen VPS, wenn die ZAP-Weboberfläche installiert wurde!
:::

Wenn der erstellte Server nicht per FTP erreichbar ist, ist der FTP-Service (ProFTPD) in den meisten Fällen nicht aktiv. In seltenen Fällen kann das auch an einer falschen Konfiguration oder einem belegten Port liegen, also wenn der FTP-Port 21 von einem anderen Programm genutzt/belegt wird.



## FTP-Problem genauer checken:

### Verfügbarkeit prüfen
Das kannst du ganz easy mit dem FTP-Browser in der Weboberfläche machen. Klick im Menü unter Tools des jeweiligen Servers auf „FTP-Browser“.

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Drück dann einmal auf den Button „Direktverbindung“. 

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Jetzt siehst du wahrscheinlich folgendes Bild:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Da jetzt klar ist, dass eine Verbindung über WebFTP oder ein FTP-Tool nicht möglich ist, musst du den FTP-Service auf dem VPS genauer unter die Lupe nehmen.

### ProFTPD-Status prüfen

Dafür verbindest du dich per SSH / Konsole mit deinem Server und gibst den Befehl „service proftpd status“ ein. Der Status wird jetzt ausgelesen und entsprechend angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)


Hier siehst du, dass der Status „dead“ meldet, also ist der Service offline und somit nicht erreichbar.


### FTP-Service neu starten
Den FTP-Service kannst du mit folgendem Befehl neu starten:

```
service proftpd start
```

Wenn nach Ausführung des Befehls keine Fehlermeldung kommt, ist der Service normalerweise wieder online/verfügbar.

Das Ganze kannst du dann nochmal mit dem Befehl „service proftpd status“ überprüfen. Es sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Da der Status jetzt wieder „active“ und nicht mehr „dead“ ist, kannst du die FTP-Verbindung nochmal mit dem FTP-Tool und WebFTP versuchen.

### Verbindung nochmal checken
Jetzt solltest du eine Verbindung herstellen und deine Daten sehen können.

### Problem gelöst
✅ Der FTP-Service (ProFTPD) läuft jetzt wieder/ist aktiv und dem Datenaustausch steht nichts mehr im Weg!