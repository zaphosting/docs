---
id: vserver_linux_ftp_install
title: vServer: FTP Server installieren und einrichten
description: Informationen, wie du einen FTP Server auf deinen vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: FTP Einrichtung
---

## Wie installiere ich den FTP Server, und füge einen Nutzer hinzu? 

Als Erstes muss ein FTP Server installiert werden. Dafür verbindest du dich ein mal via SSH(Putty) mit dem Server.

Um den FTP Server nun zu installieren, gibst du folgendes ein **apt-get install proftpd**. Die Abfrage musst du dann noch mit einem **Y** und enter bestätigen:

![](https://screensaver01.zap-hosting.com/index.php/s/3ezywWn4sictxdG/preview)

Nun müssen wir noch die Konfig anpassen. Dafür geben wir ein mal folgendes ein **nano /etc/proftpd/proftpd.conf** und bestätigen. Anschließend wird die Konfigdatei im Nanoeditor geöffnet:

![](https://screensaver01.zap-hosting.com/index.php/s/HaRWdW454adBCfS/preview)

Folgende Einträge müssen hinzugefügt werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/Gbm33KceGnsCRxY/preview)

Jetzt muss der FTP-Server neugestartet werden, sodass die Änderungen übernommen werden. Dies kann man mit folgendem Befehl mache: **service proftpd restart**

## Wie füge ich einen FTP Nutzer hinzu? 

Um nun den neuen FTP Nutzer anzulegen, müssen wir erst eine FTP Gruppe erstellen. Dies machen wir mit dem Befehl **addgroup ftpuser**. Dies sieht dann so aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/R9WgRJpCpPJ9Dbs/preview)


Jetzt können wir unseren ersten FTP Benutzer hinzufügen mit den Befehlen: **adduser benutzerftp -shell /bin/false -home /var/www** und anschließend **adduser benutzerftp ftpuser**.

Nun werden wir aufgefordert ein Passwort zu setzen: 

![](https://screensaver01.zap-hosting.com/index.php/s/mpzTn6iSQDFXyMJ/preview)

Anschließend müssen wir noch bestätigen, dass die Eingaben auch korrekt sind: 

![](https://screensaver01.zap-hosting.com/index.php/s/CTD6Xy4HaiopLGe/preview)

Als letzten Schritt müssen wir den neuen User nun noch der Gruppe zuweisen per **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/SJ6y7FWESdYYErA/preview)

Nun können wir mit unseren angegebenen Informationen verbinden:

![](https://screensaver01.zap-hosting.com/index.php/s/LWkkiXGq3o5nbjA/preview)



