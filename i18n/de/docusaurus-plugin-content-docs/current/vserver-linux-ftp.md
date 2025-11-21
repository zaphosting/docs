---
id: vserver-linux-ftp
title: "vServer: FTP-Service funktioniert nicht – Fehlerbehebung"
description: "Check, wie du den FTP-Zugang auf deinem VPS wiederherstellst, wenn dein Gameserver oder Teamspeak-Server nicht erreichbar ist → Jetzt mehr erfahren"
sidebar_label: FTP-Service funktioniert nicht
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Was kannst du tun, wenn der Gameserver oder Teamspeak-Server nicht per FTP erreichbar ist?

:::info
Achtung: Die folgenden Schritte funktionieren nur auf deinem eigenen VPS, wenn die ZAP-Weboberfläche installiert ist!
:::

Wenn dein erstellter Server nicht per FTP erreichbar ist, ist der FTP-Service (ProFTPD) meistens nicht aktiv. In seltenen Fällen kann das auch an einer falschen Konfiguration oder einem belegten Port liegen, also wenn der FTP-Port 21 von einem anderen Programm genutzt wird.

## FTP-Problem genauer checken:

### Verfügbarkeit prüfen
Das kannst du ganz easy mit dem FTP-Browser im Webinterface machen. Klick im Menü unter „Tools“ beim jeweiligen Server auf „FTP-Browser“.

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

Drück dann einmal auf den Button „Direktverbindung“.

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

Wahrscheinlich siehst du jetzt folgendes Bild:

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

Da jetzt klar ist, dass eine Verbindung über WebFTP oder ein FTP-Tool nicht möglich ist, musst du den FTP-Service auf dem VPS genauer unter die Lupe nehmen.

### ProFTPD-Status prüfen

Verbinde dich dazu per SSH/Console mit deinem Server und gib den Befehl „service proftpd status“ ein. Der Status wird jetzt ausgelesen und entsprechend angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

Hier siehst du, dass der Status „dead“ meldet – der Service ist also offline und somit nicht erreichbar.

### FTP-Service neu starten
Den FTP-Service kannst du mit folgendem Befehl neu starten:

```
service proftpd start
```

Wenn nach Ausführung des Befehls keine Meldung kommt, ist der Service meistens wieder online/verfügbar.

Das kannst du dann nochmal mit dem Befehl „service proftpd status“ überprüfen. Es sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

Da der Status jetzt wieder „active“ und nicht mehr „dead“ ist, kannst du die FTP-Verbindung nochmal mit dem FTP-Tool oder WebFTP testen.

### Verbindung nochmal prüfen
Jetzt solltest du dich verbinden und deine Daten sehen können.

### Problem gelöst
✅ Der FTP-Service (ProFTPD) läuft jetzt wieder und dem Datenaustausch steht nichts mehr im Weg!

<InlineVoucher />