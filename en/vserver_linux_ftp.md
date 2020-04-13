---
id: vserver_linux_ftp
title: FTP Dienst funtkioniert nicht 
sidebar_label: FTP Dienst funtkioniert nicht
---

## Was kann man tun wenn der Gameserver oder Teamspeak Server nicht via FTP erreichbar ist? 

> ⚠️ Achtung: Die nachfolgenden Schritte funktionieren nur auf einem eigenen vServer/Root Server wenn das ZAP-Webinterface installiert wurde!

Sollten die angelgten Server nicht via FTP erreichbar sein, so ist in den meisten Fällen der FTP Dienst (ProFTPD) nicht aktiv. 
In selten Fällen kann dies auch an einer nicht korrekten Config oder einem belegten Port liegen, sprich der FTP Port 21 wird von einem anderen Programm genutzt/belegt. 

## Das FTP Problem genauer prüfen:

### Schrit 1️⃣ wäre zu prüfen ob das WebFTP erreichbar ist
Das kann man ganz einfach über den FTP Browser im Webinterface machen. 
Man klickt links im Menü unter Werkzeuge des jeweilgen Servers auf "FTP-Browser"

![](https://screensaver01.zap-hosting.com/index.php/s/3anaWAXfTfnRCry/preview)


Anschließen klingt man auf den grünen Button "Direktverbindung"

![](https://screensaver01.zap-hosting.com/index.php/s/XPb7MmdxLpDreTa/preview)

Nun wird man vermutlich folgendes Bild sehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/qiKZBsDDj2BaSwX/preview)

Hat man bereits ein FTP-Tool probiert, so wird dieses sehr wahrscheinlich auch bereits einen ähnlichen Fehler wie folgenden Fehler angezeigt haben: 

![](https://screensaver01.zap-hosting.com/index.php/s/oM7dkPdfZ9r2Ann/preview)


Da nun klar ist, das weder eine Verbindung via WebFTP oder FTP-Tool möglich ist, muss man sich nun den FTP Dienst auf dem vServer oder Root Server genauer ansehen. 


### Schritt 2️⃣ wäre nun zu prüfen was der Status des FTP Dienstes (ProFTPD) meldet
Dazu verbindet man sich via SSH/Console mit seinem Server und gibt anschließend den Befehl "service proftpd status" ein. 
Es wird nun der Status ausgelesen und entsprechend angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/qTeq5MZksCXymYM/preview)


Dort ist zu erkennen das der Status "dead" meldet, kurz gesagt ist der Dienst offline und somit nicht erreichbar. 


### Schritt 3️⃣ wäre nun den FTP Dienst wieder zu starten
Mit dem Befehl "service proftpd start" kann nun probiert werden den FTP Dienst wieder zu starten.
Kommt keine Rückmeldung nach der Ausführung des Befehls, ist der Dienst in der Regel wieder online/verfügbar. 

Das ganze kann dann mit dem Befehl "service proftpd status" noch einmal verifiziert werden. 
Es sollte dann wie folgt aussehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCFppHqH6LQLxw/preview)


Da der Status nun wieder "active" lautet und nicht mehr "dead" kann die FTP Verbindung via FTP-Tool und WebFTP erneut probiert werden. 

### Schritt 4️⃣ wäre nun die Verbindung erneut zu prüfen
Man sollte nun eine Verbindung aufbauen und seine Daten einsehen können: 

#### Via WebFTP: 

![](https://screensaver01.zap-hosting.com/index.php/s/kXZXoYFLE7AZRgg/preview)


#### Via FTP-Tool: 

![](https://screensaver01.zap-hosting.com/index.php/s/mKAwzTfkSkHosL9/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPDj9f35HxtL6GF/preview)

### Problem gelöst
✅ Der FTP Dienst (ProFTPD) ist nun wieder gestartet/aktiv und dem Datenaustausch steht nichts mehr im Wege!
