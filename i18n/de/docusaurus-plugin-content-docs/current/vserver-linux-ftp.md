---
id: vserver-linux-ftp
title: "vServer: FTP Dienst funktioniert nicht - Problemlösungen"
description: Informationen, wie du FTP-Probleme bei deinem vServer von ZAP-Hosting beheben kannst - ZAP-Hosting.com Dokumentation
sidebar_label: FTP Dienst funktioniert nicht
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Was kann man tun, wenn der Gameserver oder Teamspeak Server nicht via FTP erreichbar ist? 

:::info
Achtung: Die nachfolgenden Schritte funktionieren nur auf einem eigenen vServer/Rootserver, wenn das ZAP-Webinterface installiert wurde!
:::

Sollten die angelegten Server nicht via FTP erreichbar sein, so ist in den meisten Fällen der FTP Dienst (ProFTPD) nicht aktiv. 
In seltenen Fällen kann dies auch an einer nicht korrekten Config oder einem belegten Port liegen, sprich der FTP Port 21 wird von einem anderen Programm genutzt/belegt. 

## Das FTP Problem genauer prüfen:

### Erreichbarkeit Prüfen
Das kann man ganz einfach über den FTP Browser im Webinterface machen. 
Man klickt links im Menü unter Werkzeuge des jeweiligen Servers auf "FTP-Browser"

![image](https://screensaver01.zap-hosting.com/index.php/s/pDgmRQFAwXFQeTA/preview)


Anschließen klingt man auf den grünen Button "Direktverbindung"


![image](https://screensaver01.zap-hosting.com/index.php/s/jek8EkPTYeF3bEr/preview)

Nun wird man vermutlich folgendes Bild sehen: 

![image](https://screensaver01.zap-hosting.com/index.php/s/eJ23PJjSGMbDNGM/preview)

Hat man bereits ein FTP-Tool probiert, so wird dieses sehr wahrscheinlich auch bereits einen ähnlichen Fehler wie folgenden Fehler angezeigt haben: 


Da nun klar ist, dass weder eine Verbindung via WebFTP oder FTP-Tool möglich ist, muss man sich nun den FTP Dienst auf dem vServer oder Rootserver genauer ansehen. 


### ProFTPD Status Prüfen
Dazu verbindet man sich via SSH/Console mit seinem Server und gibt anschließend den Befehl "service proftpd status" ein. 
Es wird nun der Status ausgelesen und entsprechend angezeigt:

![image](https://screensaver01.zap-hosting.com/index.php/s/KNKsPF875oDnm5F/preview)


Dort ist zu erkennen, dass der Status "dead" meldet, kurz gesagt ist der Dienst offline und somit nicht erreichbar. 


### FTP Dienst Neustarten
Folgendem Befehl kann der FTP Dienst neu gestartet werden:


```
service proftpd start
```

Kommt keine Rückmeldung nach der Ausführung des Befehls, ist der Dienst in der Regel wieder online/verfügbar. 

Das ganze kann dann mit dem Befehl "service proftpd status" noch einmal verifiziert werden. 
Es sollte dann wie folgt aussehen: 

![image](https://screensaver01.zap-hosting.com/index.php/s/jXs8H5dMcyjY7jW/preview)


Da der Status jetzt wieder "active" lautet und nicht mehr "dead" kann die FTP Verbindung via FTP-Tool und WebFTP erneut probiert werden. 

### Verbindung erneut prüfen
Man sollte nun eine Verbindung aufbauen und seine Daten einsehen können: 

### Problem gelöst
Der FTP Dienst (ProFTPD) ist nun wieder gestartet/aktiv und dem Datenaustausch steht nichts mehr im Wege!
