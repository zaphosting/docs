---
id: minecraft_add_own_world
title: Eigene Welt hinzufügen
sidebar_label: Eigene Welt hinzufügen
---

Du möchtest eine eigene oder aus dem Internet heruntergeladene Welt auf deinem Server benutzen? Dann bist du hier genau richtig! Alles was du dafür benötigst, ist deine Welt und einen FTP-Client. Falls du noch nicht weißt, was ein FTP-Client ist und wie du diesen benutzen kannst, dann schaue am besten in die folgende Anleitung: [FTP-Dateizugriff](https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/)
](https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/)

![img](https://screensaver01.zap-hosting.com/index.php/s/nqwNoN742GPqs4H/preview)



Wenn die Verbindung zum Server per FTP hergestellt wurde, dann kann mit der Einrichtung der eigenen Welt begonnen werden. Dafür muss zunächst das entsprechende Verzeichnis aufgerufen werde, wo sich die aktuelle Welt befindet. Diese befindet sich im folgenden Verzeichnis: /gXXXXX/modpack/


![img](https://screensaver01.zap-hosting.com/index.php/s/nWKqKMZAotJD8xY/preview)

In das Verzeichnis muss nun die neue Welt hochgeladen werden. Hierbei kann entweder der alte **world** Ordner entweder gelöscht und ersetzt werden oder die neue Welt unter einem anderen Namen hochgeladen werden. In dem Beispiel laden wir die Welt unter einem anderen Namen hoch:

![img](https://screensaver01.zap-hosting.com/index.php/s/gdNdmWYiaDPyqf6/preview)

Jetzt muss die neu hochgeladene Welt nur noch in der **server.properties** Config eingetragen werden. Diese findest du in der **Gameserver Verwaltung** unter **Configs**. Dort muss der Wert vom **level-name=** Befehl angepasst werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/QCGpAP5Y6tcaPSs/preview)


Nach erneuten starten des Servers sollte nun die neue Welt verwendet werden. Viel Spaß auf deiner neuen Welt! 🙂

