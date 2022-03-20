---
id: vserver_linux_ftp_install
title: vServer: FTP Server installieren und einrichten
description: Informationen, wie du einen FTP Server auf deinen vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: FTP Einrichtung
---

## Wie installiere ich den FTP Server, und füge einen Nutzer hinzu? 

Als Erstes muss ein FTP Server installiert werden. Dafür verbindest du dich ein mal via SSH(Putty) mit dem Server.

Um den FTP Server nun zu installieren, gibst du folgendes ein **apt-get install proftpd**. Die Abfrage musst du dann noch mit einem **Y** und enter bestätigen:

![image](https://user-images.githubusercontent.com/13604413/159172036-62bec6bb-d879-4c38-9f42-6289fecb6737.png)

Nun müssen wir noch die Konfig anpassen. Dafür geben wir ein mal folgendes ein **nano /etc/proftpd/proftpd.conf** und bestätigen. Anschließend wird die Konfigdatei im Nanoeditor geöffnet:

![image](https://user-images.githubusercontent.com/13604413/159172041-7d137e59-47a3-4b24-b16d-196174cec581.png)

Folgende Einträge müssen hinzugefügt werden: 

![image](https://user-images.githubusercontent.com/13604413/159172045-0ec6cbb8-fd4b-4f55-9850-541ccfae1173.png)

Jetzt muss der FTP-Server neugestartet werden, sodass die Änderungen übernommen werden. Dies kann man mit folgendem Befehl mache: **service proftpd restart**

## Wie füge ich einen FTP Nutzer hinzu? 

Um nun den neuen FTP Nutzer anzulegen, müssen wir erst eine FTP Gruppe erstellen. Dies machen wir mit dem Befehl **addgroup ftpuser**. Dies sieht dann so aus: 

![image](https://user-images.githubusercontent.com/13604413/159172048-c6200925-9547-43fe-8dc8-9cc8c7a689d1.png)


Jetzt können wir unseren ersten FTP Benutzer hinzufügen mit den Befehlen: **adduser benutzerftp -shell /bin/false -home /var/www** und anschließend **adduser benutzerftp ftpuser**.

Nun werden wir aufgefordert ein Passwort zu setzen: 

![image](https://user-images.githubusercontent.com/13604413/159172053-ed22f2b9-3b39-41a7-9fb2-b8c55be9043b.png)


Anschließend müssen wir noch bestätigen, dass die Eingaben auch korrekt sind: 

![image](https://user-images.githubusercontent.com/13604413/159172057-bd4b60d8-5952-4fb3-9ffb-df4b53c61313.png)

Als letzten Schritt müssen wir den neuen User nun noch der Gruppe zuweisen per **adduser benutzerftp ftpuser** :

![image](https://user-images.githubusercontent.com/13604413/159172060-9826c04e-6543-44f8-af7a-eb422b4c8891.png)

Nun können wir mit unseren angegebenen Informationen verbinden:

![image](https://user-images.githubusercontent.com/13604413/159172064-b2302eaa-dd1c-4c2e-b075-376f8a85f791.png)


![image](https://user-images.githubusercontent.com/13604413/159172082-8cb4721f-01ef-4dd2-b21d-1e0933199140.png)



