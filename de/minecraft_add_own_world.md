---
id: minecraft_add_own_world
title: Minecraft: Eigene Welt zum Server hinzufügen
description: Informationen, wie du eine eigene Welt zu deinem Minecraft-Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Eigene Welt hinzufügen
---

Hier gelangst du zu unseren Minecraft Servern: [Minecraft Server mieten](https://zap-hosting.com/de/minecraft-server-mieten/)

Du möchtest eine eigene oder aus dem Internet heruntergeladene Welt auf deinem Server benutzen? Dann bist du hier genau richtig! Alles was du dafür benötigst, ist deine Welt und einen FTP-Client. Falls du noch nicht weißt, was ein FTP-Client ist und wie du diesen benutzen kannst, dann schaue am besten in die folgende Anleitung: [FTP-Dateizugriff](https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/)

![img](https://screensaver01.zap-hosting.com/index.php/s/Zfe6MyGX7MxSarS/preview)



Wenn die Verbindung zum Server per FTP hergestellt wurde, dann kann mit der Einrichtung der eigenen Welt begonnen werden. Dafür muss zunächst das entsprechende Verzeichnis aufgerufen werde, wo sich die aktuelle Welt befindet. Diese befindet sich im folgenden Verzeichnis: /gXXXXX/modpack/


![img](https://screensaver01.zap-hosting.com/index.php/s/HgWj5aM62Zr9sTs/preview)

In das Verzeichnis muss nun die neue Welt hochgeladen werden. Hierbei kann entweder der alte **world** Ordner entweder gelöscht und ersetzt werden oder die neue Welt unter einem anderen Namen hochgeladen werden. In dem Beispiel laden wir die Welt unter einem anderen Namen hoch:

![img](https://screensaver01.zap-hosting.com/index.php/s/sT8BGMmKZYs9fRo/preview)

Jetzt muss die neu hochgeladene Welt nur noch in der **server.properties** Config eingetragen werden. Diese findest du in der **Gameserver Verwaltung** unter **Configs**. Dort muss der Wert vom **level-name=** Befehl angepasst werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/Eof8jJFzA3XsXYZ/preview)


Nach erneuten starten des Servers sollte nun die neue Welt verwendet werden. Viel Spaß auf deiner neuen Welt! 🙂

