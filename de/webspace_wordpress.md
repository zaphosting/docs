---
id: webspace_wordpress
title: Webspace: WordPress installieren
description: Informationen, wie du WordPress auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: WordPress installieren

---



## Was ist WordPress?

WordPress ist das meist verwendete freie Content-Management-System weltweit. Es wurde ab 2003 von Matthew Mullenweg als Software für Weblogs programmiert und wird als Open-Source-Projekt permanent weiterentwickelt. In dieser Anleitung erklären wir, wie diese Software auf unserem Webspace Produkt installiert werden kann. 

![image](https://user-images.githubusercontent.com/26007280/189979034-3c35e1a2-7905-404a-a7f3-529ce90fa3e1.png)



## WordPress einrichten

### Vorbereitung

Bevor die eigentliche Installation von WordPress durchgeführt werden kann, müssen gewisse Vorbereitungen vorgenommen werden. Dazu gehört das Besorgen der Software, die Einrichtung der zu verwendenden Datenbank und der Mailserver (E-Mail Adresse).



**Software**

Die Software kann auf der offiziellen Webseite von WordPress heruntergeladen werden. Der Download dazu ist hier zu finden: [WordPress Download](https://de.wordpress.org/download/)

![image](https://user-images.githubusercontent.com/26007280/189979056-8da8ebd8-bf5a-4d9f-9458-6c63bef63f71.png)

Beim Download erhält man eine gepackte ZIP-Datei, welche auf dem lokalen Computer entpackt werden muss. Darin befindet sich dann ein Ordner. Dessen Inhalt wird benötigt und muss entweder per **FTP oder Datei-Manager** hochgeladen werden. In dem Beispiel wird die Einrichtung mittels FTP gezeigt. Unter **Websites & Domains** bei **FTP-Access** kannst du einen FTP-Benutzer anlegen.



![img](https://screensaver01.zap-hosting.com/index.php/s/nkKsBpyb6GM6Rkp/download/chrome_7Y5hmuXn5f.gif)



Nun verbinden wir uns mit dem erstellten FTP-Account mit dem Webspace. Dort navigieren wir dann in das **httpdocs** Verzeichnis und laden im Anschluss die Dateien der Forensoftware hoch.

![image](https://user-images.githubusercontent.com/26007280/189979081-1b531b59-1617-499d-b016-7835db97e560.png)



**Datenbank**

Als Nächstes muss die Datenbank angelegt werden, in der später alle Informationen von der Webseite gespeichert werden sollen. Klicke dazu wieder auf **Websites & Domains** und dann auf **Datenbanken**. Dort klicken wir dann auf Datenbank hinzufügen und legen eine Datenbank an: 



![img](https://screensaver01.zap-hosting.com/index.php/s/99BJeGCHjS9QHkz/download/chrome_Jzw3adOg7G.gif)

Im Anschluss auf **OK** klicken und schon wurde die Datenbank hinzugefügt.



**Mailserver (E-Mail-Adresse)**

Um einen Account beim Forum zu registrieren wird ein Mailserver mit einer E-Mail-Adresse benötigt, damit die Registrierungsmails auch an die Benutzer verschickt werden können. Eine Anleitung zur Einrichtung solch einer E-Mail-Adresse findest du hier: [E-Mails verschicken](https://zap-hosting.com/guides/docs/de/webspace_plesk_sendmail/)



### Installation

Wenn alle Schritte von der Vorbereitung erfüllt wurden, dann kann mit der eigentlichen Einrichtung von WordPress begonnen werden. Dafür muss nun im Internetbrowser die Webseite aufgerufen werden. Das sieht dann so aus: 

![image](https://user-images.githubusercontent.com/26007280/189979110-049a424c-cdbb-4260-b9d3-3ce1292284a4.png)



Dort angelangt können wir auf **Los geht's!** klicken um mit der Einrichtung anzufangen. Als erstes steht dann die Konfiguration der Datenbank an, welche bereits im Voraus in der Vorbereitung erstellt wurde. Die Datenbank Informationen von der erstellten Datenbank müssen nun dort eingetragen werden.

![image](https://user-images.githubusercontent.com/26007280/189979129-a8128d72-637c-4be8-92d0-b27300e856ab.png)



Klicke im Anschluss auf **Senden** und im folgenden Schritt auf **Installation durchführen**.



![image](https://user-images.githubusercontent.com/26007280/189979160-0479fc35-2b0a-4554-967b-1c32c9747972.png)



Nun benötigt WordPress noch weitere Informationen. Hier kann nun der Titel der Webseite, Benutzername, Passwort, und die E-Mail-Adresse angegeben werden. 

![image](https://user-images.githubusercontent.com/26007280/189979185-a753bbab-b6fd-4bdc-a1d4-69531b00197d.png)



Wenn alle Felder ausgefüllt wurden, dann muss im Anschluss auf **WordPress installieren** geklickt werden. Die Installation wird dann innerhalb weniger Sekunden abgeschlossen und es öffnet sich das Login-Fenster. Dort kannst du dich nun mit deinem erstellten Account einloggen. Im Anschluss kannst du dein WordPress nach deinen Wünschen beliebig einrichten!



![img](https://screensaver01.zap-hosting.com/index.php/s/MnLRYMDJCXjJJ8i/download/chrome_4KNjihGpo0.gif)
