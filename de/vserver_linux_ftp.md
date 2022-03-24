---
id: vserver_linux_ftp
title: vServer: FTP Dienst funktioniert nicht - Problemlösungen
description: Informationen, wie du FTP-Probleme bei deinem vServer von ZAP-Hosting beheben kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: FTP Dienst funktioniert nicht
---

## Was kann man tun wenn der Gameserver oder Teamspeak Server nicht via FTP erreichbar ist? 

> ⚠️ Achtung: Die nachfolgenden Schritte funktionieren nur auf einem eigenen vServer/Root Server wenn das ZAP-Webinterface installiert wurde!

Sollten die angelgten Server nicht via FTP erreichbar sein, so ist in den meisten Fällen der FTP Dienst (ProFTPD) nicht aktiv. 
In selten Fällen kann dies auch an einer nicht korrekten Config oder einem belegten Port liegen, sprich der FTP Port 21 wird von einem anderen Programm genutzt/belegt. 

## Das FTP Problem genauer prüfen:

### Erreichbarkeit Prüfen
Das kann man ganz einfach über den FTP Browser im Webinterface machen. 
Man klickt links im Menü unter Werkzeuge des jeweilgen Servers auf "FTP-Browser"

![image](https://user-images.githubusercontent.com/13604413/159172130-2649e590-639d-4b1b-a464-fb4956c52929.png)


Anschließen klingt man auf den grünen Button "Direktverbindung"


![image](https://user-images.githubusercontent.com/13604413/159172131-2a355b01-508f-4b8a-8e67-f011e48a1b30.png)

Nun wird man vermutlich folgendes Bild sehen: 

![image](https://user-images.githubusercontent.com/13604413/159172135-52ee9fe3-dc99-4f70-8331-253514e6a949.png)

Hat man bereits ein FTP-Tool probiert, so wird dieses sehr wahrscheinlich auch bereits einen ähnlichen Fehler wie folgenden Fehler angezeigt haben: 


Da nun klar ist, das weder eine Verbindung via WebFTP oder FTP-Tool möglich ist, muss man sich nun den FTP Dienst auf dem vServer oder Root Server genauer ansehen. 


### ProFTPD Status Prüfen
Dazu verbindet man sich via SSH/Console mit seinem Server und gibt anschließend den Befehl "service proftpd status" ein. 
Es wird nun der Status ausgelesen und entsprechend angezeigt:

![image](https://user-images.githubusercontent.com/13604413/159172148-c736c6ed-9cca-42f6-8766-8170011e9848.png)


Dort ist zu erkennen das der Status "dead" meldet, kurz gesagt ist der Dienst offline und somit nicht erreichbar. 


### FTP Dienst Neustarten
Folgendem Befehl kann der FTP Dienst neugestartet werden:


```
service proftpd start
```

Kommt keine Rückmeldung nach der Ausführung des Befehls, ist der Dienst in der Regel wieder online/verfügbar. 

Das ganze kann dann mit dem Befehl "service proftpd status" noch einmal verifiziert werden. 
Es sollte dann wie folgt aussehen: 

![image](https://user-images.githubusercontent.com/13604413/159172153-f66bf3f5-6c56-45ed-b79e-04c645171c9d.png)


Da der Status nun wieder "active" lautet und nicht mehr "dead" kann die FTP Verbindung via FTP-Tool und WebFTP erneut probiert werden. 

### Verbindung erneut prüfen
Man sollte nun eine Verbindung aufbauen und seine Daten einsehen können: 

### Problem gelöst
✅ Der FTP Dienst (ProFTPD) ist nun wieder gestartet/aktiv und dem Datenaustausch steht nichts mehr im Wege!
